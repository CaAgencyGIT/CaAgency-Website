'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import Turnstile from '@/components/forms/Turnstile'
import { trackContactConversion, trackFormSubmission } from '@/components/analytics/GoogleAnalytics'
import type { ContactFormLabels } from '@/lib/contact/form-labels'
import { parseFollowerCount } from '@/lib/contact/followers'
import { contactFieldLimits, isHttpUrl, isValidHandle, normalizeLink, MAX_SOCIAL_PROFILES, type ContentCategory } from '@/lib/contact/validation'
import { cn } from '@/lib/utils'
import LogoSpinner from '@/components/ui/LogoSpinner'
import {
  CheckChips,
  describedBy,
  Field,
  fieldClass,
  PhoneField,
  SocialProfilesField,
  TalentPicker,
  TimingField,
  type Errors,
  type ProfileRow,
  type TimingState,
} from '@/components/blocks/contact/fields'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEFAULT_DIAL = 'AE|+971'
const usesTurnstile = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

type Status = 'idle' | 'submitting' | 'success' | 'error'

// A number typed with its own country code ("+31 6…" or "0031 6…") wins over
// the dial-code picker, which defaults to the UAE.
function phoneValue(dial: string, number: string) {
  const n = number.trim()
  if (!n) return ''
  if (n.startsWith('+')) return n
  if (n.startsWith('00')) return `+${n.slice(2)}`
  return `${dial.split('|')[1]} ${n}`
}

function phoneError(number: string, labels: ContactFormLabels) {
  const n = number.trim()
  return n && !/^\+?[\d\s().-]{4,30}$/.test(n) ? labels.errPhone : undefined
}

const SUBMIT_TIMEOUT_MS = 25_000

// Submission plumbing shared by both forms: spam checks, loading, success,
// failure (keeps every entered value) and focus management.
function useSubmission(formName: 'contact_page' | 'talent_submission') {
  const [status, setStatus] = useState<Status>('idle')
  const [rateLimited, setRateLimited] = useState(false)
  const [token, setToken] = useState('')
  const [challengeKey, setChallengeKey] = useState(0)
  const [honeypot, setHoneypot] = useState('')
  const started = useRef<number | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    started.current = Date.now()
  }, [])
  useEffect(() => {
    if (status === 'success' || status === 'error') resultRef.current?.focus()
  }, [status])

  const send = async (payload: Record<string, unknown>) => {
    setStatus('submitting')
    setRateLimited(false)
    // A hung request must not leave the button spinning forever.
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, turnstileToken: token, website: honeypot, _formTime: Date.now() - (started.current ?? Date.now()) }),
      })
      if (!response.ok) {
        setRateLimited(response.status === 429)
        throw new Error('Failed')
      }
      try {
        trackFormSubmission(formName)
        if (formName === 'contact_page') trackContactConversion()
      } catch {
        // Analytics failures never turn a delivered message into an error.
      }
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timeout)
      setToken('')
      setChallengeKey((k) => k + 1)
    }
  }

  const reset = () => {
    started.current = Date.now()
    setStatus('idle')
  }

  const extras = (
    <>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formName}-website`}>Website</label>
        <input id={`${formName}-website`} name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      {usesTurnstile && <Turnstile key={challengeKey} onToken={setToken} />}
    </>
  )

  return { status, send, reset, extras, blocked: usesTurnstile && !token, resultRef, rateLimited }
}

function focusFirstError(form: HTMLFormElement | null, errors: Errors) {
  const first = Object.keys(errors).find((k) => errors[k])
  if (!first || !form) return
  const el = form.querySelector<HTMLElement>(`#${CSS.escape(first)}`) ?? form.querySelector<HTMLElement>('[aria-invalid="true"]')
  el?.focus()
}

function SubmitRow({ label, sending, status, blocked, labels, resultRef, rateLimited = false }: {
  label: string
  sending: string
  status: Status
  blocked: boolean
  rateLimited?: boolean
  labels: ContactFormLabels
  resultRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div className="col-span-full">
      {status === 'error' && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="mb-4 rounded-[16px] border border-[#b3261e]/25 bg-[#b3261e]/[0.05] px-5 py-4 text-[14px] leading-[1.6] outline-none">
          <strong className="block font-medium text-foreground-dark">{labels.errorTitle}</strong>
          {rateLimited ? labels.errorRateLimited : labels.errorMessage}{' '}
          <a href="mailto:info@caagency.com" className="underline underline-offset-4">info@caagency.com</a>.
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting' || blocked}
        aria-busy={status === 'submitting'}
        className="inline-flex min-h-[52px] min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#0e0e0e] px-8 font-jost text-[15px] mobile:min-h-[46px] mobile:min-w-[160px] mobile:text-[14px] font-medium text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' && <LogoSpinner size={22} label={sending} />}
        {status === 'submitting' ? sending : label}
      </button>
    </div>
  )
}

function Success({ message, labels, onReset, resultRef }: { message: string; labels: ContactFormLabels; onReset: () => void; resultRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={resultRef} tabIndex={-1} role="status" className="rounded-[20px] bg-[#f4f2ee] px-8 py-12 text-center outline-none">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#0e0e0e] text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="m5 12 5 5L20 7" /></svg>
      </div>
      <p className="font-anegra text-[26px] leading-tight text-foreground-dark mobile:text-[21px]">{message}</p>
      <button type="button" onClick={onReset} className="mt-6 text-[14px] underline decoration-black/30 underline-offset-4 hover:decoration-black">
        {labels.sendAnotherMessage}
      </button>
    </div>
  )
}

function Summary({ show, text }: { show: boolean; text: string }) {
  return show ? <p role="alert" className="col-span-full -mb-1 text-[13.5px] text-[#b3261e]">{text}</p> : null
}

function TextInput(props: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  labels: ContactFormLabels
  error?: string
  required?: boolean
  type?: string
  placeholder?: string
  autoComplete?: string
  maxLength: number
  className?: string
}) {
  return (
    <Field id={props.id} label={props.label} required={props.required} labels={props.labels} error={props.error} className={props.className}>
      <input
        id={props.id}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        required={props.required}
        aria-required={props.required}
        aria-invalid={!!props.error}
        aria-describedby={describedBy(props.id, props.error)}
        className={fieldClass}
      />
    </Field>
  )
}

function MessageInput(props: { id: string; label: string; value: string; onChange: (v: string) => void; placeholder: string; labels: ContactFormLabels; error?: string }) {
  return (
    <Field id={props.id} label={props.label} required labels={props.labels} error={props.error} className="col-span-full">
      <textarea
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={5}
        maxLength={contactFieldLimits.message}
        required
        aria-required
        aria-invalid={!!props.error}
        aria-describedby={describedBy(props.id, props.error)}
        className={cn(fieldClass, 'min-h-[140px] resize-y leading-[1.6]')}
      />
    </Field>
  )
}

function FormShell({ onSubmit, children, formRef }: { onSubmit: (e: FormEvent<HTMLFormElement>) => void; children: ReactNode; formRef: React.RefObject<HTMLFormElement | null> }) {
  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative grid grid-cols-2 gap-x-5 gap-y-5 mobile:grid-cols-1">
      {children}
    </form>
  )
}

// ---------------------------------------------------------------------------
// For brands

export function BrandEnquiryForm({ labels, roster }: { labels: ContactFormLabels; roster: string[] }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [dial, setDial] = useState(DEFAULT_DIAL)
  const [phone, setPhone] = useState('')
  const [talents, setTalents] = useState<string[]>([])
  const [timing, setTiming] = useState<TimingState>({ mode: '', month: '', from: '', to: '' })
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const sub = useSubmission('contact_page')

  const clear = (key: string) => setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))

  const validate = (): Errors => {
    const e: Errors = {}
    if (!fullName.trim()) e['brand-name'] = labels.errRequired
    if (!email.trim()) e['brand-email'] = labels.errRequired
    else if (!emailPattern.test(email.trim())) e['brand-email'] = labels.errEmail
    if (!company.trim()) e['brand-company'] = labels.errRequired
    e['brand-phone'] = phoneError(phone, labels)
    if (timing.mode === 'dates' && timing.from && timing.to && timing.to < timing.from) e['brand-timing'] = labels.errDates
    if (!message.trim()) e['brand-message'] = labels.errRequired
    return e
  }

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (sub.status === 'submitting' || sub.blocked) return
    const e = validate()
    setErrors(e)
    if (Object.values(e).some(Boolean)) {
      requestAnimationFrame(() => focusFirstError(formRef.current, e))
      return
    }
    const timingPayload =
      timing.mode === 'month' && timing.month ? { mode: 'month', month: timing.month }
        : timing.mode === 'dates' && timing.from ? { mode: 'dates', from: timing.from, to: timing.to }
          : timing.mode === 'undecided' ? { mode: 'undecided' }
            : null
    void sub.send({
      formType: 'brand',
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
      phone: phoneValue(dial, phone),
      talents,
      timing: timingPayload,
      message: message.trim(),
    })
  }

  const resetAll = () => {
    setFullName(''); setEmail(''); setCompany(''); setPhone(''); setTalents([])
    setTiming({ mode: '', month: '', from: '', to: '' }); setMessage(''); setErrors({})
    sub.reset()
  }

  if (sub.status === 'success') return <Success message={labels.brandSuccess} labels={labels} onReset={resetAll} resultRef={sub.resultRef} />

  return (
    <FormShell onSubmit={onSubmit} formRef={formRef}>
      <Summary show={Object.values(errors).some(Boolean)} text={labels.errSummary} />
      <TextInput id="brand-name" label={labels.fullName} required value={fullName} onChange={(v) => { setFullName(v); clear('brand-name') }} placeholder={labels.namePlaceholder} autoComplete="name" maxLength={contactFieldLimits.fullName} labels={labels} error={errors['brand-name']} />
      <TextInput id="brand-email" label={labels.workEmail} required type="email" value={email} onChange={(v) => { setEmail(v); clear('brand-email') }} placeholder={labels.emailPlaceholder} autoComplete="email" maxLength={contactFieldLimits.email} labels={labels} error={errors['brand-email']} />
      <TextInput id="brand-company" label={labels.brandName} required value={company} onChange={(v) => { setCompany(v); clear('brand-company') }} placeholder={labels.companyPlaceholder} autoComplete="organization" maxLength={contactFieldLimits.company} labels={labels} error={errors['brand-company']} />
      <PhoneField id="brand-phone" dial={dial} number={phone} onDial={setDial} onNumber={(v) => { setPhone(v); clear('brand-phone') }} labels={labels} error={errors['brand-phone']} />
      <TalentPicker id="brand-talents" roster={roster} value={talents} onChange={setTalents} labels={labels} />
      <TimingField id="brand-timing" value={timing} onChange={(v) => { setTiming(v); clear('brand-timing') }} labels={labels} error={errors['brand-timing']} />
      <MessageInput id="brand-message" label={labels.collaborationLabel} value={message} onChange={(v) => { setMessage(v); clear('brand-message') }} placeholder={labels.collaborationPlaceholder} labels={labels} error={errors['brand-message']} />
      {sub.extras}
      <SubmitRow label={labels.sendEnquiry} sending={labels.sending} status={sub.status} blocked={sub.blocked} labels={labels} resultRef={sub.resultRef} rateLimited={sub.rateLimited} />
    </FormShell>
  )
}

// ---------------------------------------------------------------------------
// For influencers

export function TalentApplicationForm({ labels }: { labels: ContactFormLabels }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [dial, setDial] = useState(DEFAULT_DIAL)
  const [phone, setPhone] = useState('')
  const [basedIn, setBasedIn] = useState('')
  const [categories, setCategories] = useState<ContentCategory[]>([])
  const [rows, setRows] = useState<ProfileRow[]>([{ key: 1, platform: 'instagram', handle: '', followers: '' }])
  const nextKey = useRef(2)
  const [mediaKit, setMediaKit] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const sub = useSubmission('talent_submission')

  const clear = (key: string) => setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))

  const addRow = () => {
    const key = nextKey.current++
    setRows((r) => [...r, { key, platform: 'instagram', handle: '', followers: '' }])
    requestAnimationFrame(() => document.getElementById(`talent-profiles-${key}-platform`)?.focus())
  }

  const setProfileRows = (next: ProfileRow[]) => {
    setRows(next)
    setErrors((e) => {
      const copy: Errors = { ...e, 'talent-profiles': undefined }
      for (const r of next) {
        const old = rows.find((x) => x.key === r.key)
        if (old && old.handle !== r.handle) copy[`talent-profiles-${r.key}-handle`] = undefined
        if (old && old.followers !== r.followers) copy[`talent-profiles-${r.key}-followers`] = undefined
      }
      return copy
    })
  }

  const validate = (): Errors => {
    const e: Errors = {}
    if (!fullName.trim()) e['talent-name'] = labels.errRequired
    if (!email.trim()) e['talent-email'] = labels.errRequired
    else if (!emailPattern.test(email.trim())) e['talent-email'] = labels.errEmail
    e['talent-phone'] = phoneError(phone, labels)
    let complete = 0
    for (const r of rows) {
      const h = r.handle.trim()
      const f = r.followers.trim()
      if (!h && !f) continue
      const base = `talent-profiles-${r.key}`
      if (!h) e[`${base}-handle`] = labels.errRequired
      else if (!isValidHandle(h)) e[`${base}-handle`] = labels.errHandle
      if (!f) e[`${base}-followers`] = labels.errRequired
      else if (parseFollowerCount(f) === null) e[`${base}-followers`] = labels.errFollowers
      if (h && f && !e[`${base}-handle`] && !e[`${base}-followers`]) complete++
    }
    if (!complete && !Object.keys(e).some((k) => k.startsWith('talent-profiles-') && e[k])) {
      e['talent-profiles'] = labels.errProfiles
      e[`talent-profiles-${rows[0].key}-handle`] = rows[0].handle.trim() ? undefined : labels.errRequired
    }
    if (mediaKit.trim() && !isHttpUrl(normalizeLink(mediaKit, { bareDomain: true }))) e['talent-mediakit'] = labels.errUrl
    if (!message.trim()) e['talent-message'] = labels.errRequired
    return e
  }

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (sub.status === 'submitting' || sub.blocked) return
    const e = validate()
    setErrors(e)
    if (Object.values(e).some(Boolean)) {
      requestAnimationFrame(() => focusFirstError(formRef.current, e))
      return
    }
    void sub.send({
      formType: 'talent',
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phoneValue(dial, phone),
      basedIn: basedIn.trim(),
      categories,
      profiles: rows
        .filter((r) => r.handle.trim() && r.followers.trim())
        .map((r) => ({ platform: r.platform, handle: r.handle.trim(), followers: r.followers.trim() })),
      mediaKit: mediaKit.trim(),
      message: message.trim(),
    })
  }

  const resetAll = () => {
    setFullName(''); setEmail(''); setPhone(''); setBasedIn(''); setCategories([])
    setRows([{ key: nextKey.current++, platform: 'instagram', handle: '', followers: '' }])
    setMediaKit(''); setMessage(''); setErrors({})
    sub.reset()
  }

  if (sub.status === 'success') return <Success message={labels.talentSuccess} labels={labels} onReset={resetAll} resultRef={sub.resultRef} />

  const categoryOptions: Array<[ContentCategory, string]> = [
    ['beauty', labels.catBeauty], ['skincare', labels.catSkincare], ['makeup', labels.catMakeup], ['haircare', labels.catHaircare],
    ['fashion', labels.catFashion], ['lifestyle', labels.catLifestyle], ['tech', labels.catTech], ['other', labels.catOther],
  ]

  return (
    <FormShell onSubmit={onSubmit} formRef={formRef}>
      <Summary show={Object.values(errors).some(Boolean)} text={labels.errSummary} />
      <TextInput id="talent-name" label={labels.fullName} required value={fullName} onChange={(v) => { setFullName(v); clear('talent-name') }} placeholder={labels.namePlaceholder} autoComplete="name" maxLength={contactFieldLimits.fullName} labels={labels} error={errors['talent-name']} />
      <TextInput id="talent-email" label={labels.email} required type="email" value={email} onChange={(v) => { setEmail(v); clear('talent-email') }} placeholder={labels.personalEmailPlaceholder} autoComplete="email" maxLength={contactFieldLimits.email} labels={labels} error={errors['talent-email']} />
      <PhoneField id="talent-phone" dial={dial} number={phone} onDial={setDial} onNumber={(v) => { setPhone(v); clear('talent-phone') }} labels={labels} error={errors['talent-phone']} />
      <TextInput id="talent-based" label={labels.basedIn} value={basedIn} onChange={setBasedIn} placeholder={labels.basedInPlaceholder} autoComplete="address-level2" maxLength={contactFieldLimits.basedIn} labels={labels} />
      <CheckChips id="talent-categories" label={labels.contentCategories} options={categoryOptions} value={categories} onChange={setCategories} labels={labels} />
      <SocialProfilesField id="talent-profiles" rows={rows} onChange={setProfileRows} onAdd={addRow} labels={labels} errors={errors} max={MAX_SOCIAL_PROFILES} />
      <TextInput id="talent-mediakit" label={labels.mediaKit} type="url" value={mediaKit} onChange={(v) => { setMediaKit(v); clear('talent-mediakit') }} placeholder={labels.mediaKitPlaceholder} maxLength={contactFieldLimits.mediaKit} labels={labels} error={errors['talent-mediakit']} className="col-span-full" />
      <MessageInput id="talent-message" label={labels.aboutYouLabel} value={message} onChange={(v) => { setMessage(v); clear('talent-message') }} placeholder={labels.aboutYouPlaceholder} labels={labels} error={errors['talent-message']} />
      {sub.extras}
      <SubmitRow label={labels.submitApplication} sending={labels.sending} status={sub.status} blocked={sub.blocked} labels={labels} resultRef={sub.resultRef} rateLimited={sub.rateLimited} />
    </FormShell>
  )
}
