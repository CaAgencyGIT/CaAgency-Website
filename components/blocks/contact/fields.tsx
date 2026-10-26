'use client'

import { useId, useRef, useState, type ReactNode } from 'react'
import { DIAL_CODES } from '@/lib/contact/countries'
import { HELP_ME_CHOOSE, SOCIAL_PLATFORMS, type SocialPlatform } from '@/lib/contact/validation'
import type { ContactFormLabels } from '@/lib/contact/form-labels'
import { cn } from '@/lib/utils'

// Shared look for every control on the contact forms: soft grey rounded
// fields on white, same height, padding and radius in both forms.
export const fieldClass =
  // 16px text on phones keeps iOS from zooming into a focused field.
  'w-full min-h-[52px] rounded-[16px] border border-transparent bg-[#f4f2ee] px-5 py-[13px] font-work-sans text-[15px] mobile:min-h-[46px] mobile:rounded-[12px] mobile:px-4 mobile:py-[10px] mobile:text-[16px] text-foreground-dark placeholder:text-foreground-dark/45 transition-colors focus:border-black/30 focus:bg-white focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40 aria-[invalid=true]:border-[#b3261e]/60'

export const selectStyle = {
  appearance: 'none' as const,
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23161616' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '15px',
  paddingRight: '2.6rem',
}

export type Errors = Record<string, string | undefined>

export function errorId(id: string) {
  return `${id}-error`
}

export function Field({
  id,
  label,
  required,
  labels,
  error,
  className,
  hint,
  children,
  as = 'label',
}: {
  id: string
  label: string
  required?: boolean
  labels: ContactFormLabels
  error?: string
  className?: string
  hint?: string
  children: ReactNode
  as?: 'label' | 'legend'
}) {
  const head = (
    <>
      {label}
      {required ? (
        <span aria-hidden="true" className="ms-1 text-foreground-dark">*</span>
      ) : (
        <span className="ms-2 normal-case tracking-normal text-[11px] text-foreground-gray/80">({labels.optional})</span>
      )}
      {required && <span className="sr-only"> ({labels.required})</span>}
    </>
  )
  const labelClass = 'mb-2 block ps-1 font-jost text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-gray'
  const body = (
    <>
      {hint && <p id={`${id}-hint`} className="-mt-1 mb-2 ps-1 text-[12.5px] leading-[1.5] text-foreground-gray">{hint}</p>}
      {children}
      {error && (
        <p id={errorId(id)} className="mt-1.5 ps-1 text-[12.5px] text-[#b3261e]">
          {error}
        </p>
      )}
    </>
  )
  if (as === 'legend') {
    return (
      <fieldset className={cn('min-w-0', className)} aria-describedby={error ? errorId(id) : undefined}>
        <legend className={labelClass}>{head}</legend>
        {body}
      </fieldset>
    )
  }
  return (
    <div className={cn('min-w-0', className)}>
      <label htmlFor={id} className={labelClass}>{head}</label>
      {body}
    </div>
  )
}

export function describedBy(id: string, error?: string, hint?: boolean) {
  return [hint ? `${id}-hint` : '', error ? errorId(id) : ''].filter(Boolean).join(' ') || undefined
}

// Phone / WhatsApp: country code select + number. Value is "+971 50 123 4567".
export function PhoneField({
  id,
  dial,
  number,
  onDial,
  onNumber,
  labels,
  error,
}: {
  id: string
  dial: string
  number: string
  onDial: (v: string) => void
  onNumber: (v: string) => void
  labels: ContactFormLabels
  error?: string
}) {
  return (
    <Field id={id} label={labels.phoneWhatsapp} labels={labels} error={error}>
      <div className="flex gap-2">
        <select
          aria-label={labels.countryCode}
          value={dial}
          onChange={(e) => onDial(e.target.value)}
          className={cn(fieldClass, 'w-[112px] shrink-0 px-4')}
          style={selectStyle}
          autoComplete="tel-country-code"
        >
          {DIAL_CODES.map((c) => (
            <option key={c.iso} value={`${c.iso}|${c.dial}`}>
              {c.iso} {c.dial}
            </option>
          ))}
        </select>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={number}
          onChange={(e) => onNumber(e.target.value)}
          placeholder={labels.phonePlaceholder}
          maxLength={30}
          aria-invalid={!!error}
          aria-describedby={describedBy(id, error)}
          className={cn(fieldClass, 'min-w-0 flex-1')}
        />
      </div>
    </Field>
  )
}

// Searchable multi-select of the current roster, plus "Help me choose".
// Keyboard: type to filter, Up/Down to move, Enter to toggle, Escape to close,
// Backspace on an empty search removes the last choice.
export function TalentPicker({
  id,
  roster,
  value,
  onChange,
  labels,
}: {
  id: string
  roster: string[]
  value: string[]
  onChange: (v: string[]) => void
  labels: ContactFormLabels
}) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const listId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)
  const nameOf = (v: string) => (v === HELP_ME_CHOOSE ? labels.helpMeChoose : v)
  const q = query.trim().toLowerCase()
  const options = [HELP_ME_CHOOSE, ...roster].filter((o) => !q || nameOf(o).toLowerCase().includes(q))

  const toggle = (option: string) => {
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option])
    setQuery('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setActive((a) => Math.min(a + 1, options.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      if (open && options[active]) {
        e.preventDefault()
        toggle(options[active])
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'Backspace' && !query && value.length) {
      onChange(value.slice(0, -1))
    }
  }

  return (
    <Field id={id} label={labels.talentOfInterest} labels={labels} className="col-span-full">
      <div
        ref={wrapRef}
        className="relative"
        onBlur={(e) => {
          if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
        }}
      >
        <div className={cn(fieldClass, 'flex flex-wrap items-center gap-2 py-2 focus-within:border-black/30 focus-within:bg-white')}>
          {value.map((v) => (
            <span key={v} className="inline-flex items-center gap-1.5 rounded-full bg-[#0e0e0e] py-1 ps-3 pe-1.5 text-[13px] text-white">
              {nameOf(v)}
              <button
                type="button"
                onClick={() => toggle(v)}
                aria-label={`${labels.remove} ${nameOf(v)}`}
                className="grid h-5 w-5 place-items-center rounded-full text-white/80 hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </span>
          ))}
          <input
            id={id}
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={open && options[active] ? `${listId}-${active}` : undefined}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
              setActive(0)
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder={value.length ? '' : labels.talentSearchPlaceholder}
            className="min-w-[140px] flex-1 bg-transparent py-1.5 text-[15px] outline-none placeholder:text-foreground-dark/45"
          />
        </div>
        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-multiselectable="true"
            className="absolute inset-x-0 top-[calc(100%+6px)] z-20 max-h-[260px] overflow-auto rounded-[16px] border border-black/10 bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)]"
          >
            {options.length === 0 && <li className="px-4 py-3 text-[14px] text-foreground-gray">{labels.noTalentMatch}</li>}
            {options.map((o, i) => {
              const selected = value.includes(o)
              return (
                <li
                  key={o}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={selected}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    toggle(o)
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-[12px] px-4 py-2.5 text-[14.5px]',
                    i === active && 'bg-[#f4f2ee]',
                    o === HELP_ME_CHOOSE && 'font-medium'
                  )}
                >
                  {nameOf(o)}
                  {selected && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path d="m5 12 5 5L20 7" /></svg>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Field>
  )
}

export type TimingState = { mode: '' | 'month' | 'dates' | 'undecided'; month: string; from: string; to: string }

export function TimingField({
  id,
  value,
  onChange,
  labels,
  error,
}: {
  id: string
  value: TimingState
  onChange: (v: TimingState) => void
  labels: ContactFormLabels
  error?: string
}) {
  const modes: Array<[TimingState['mode'], string]> = [
    ['month', labels.timingMonth],
    ['dates', labels.timingDates],
    ['undecided', labels.timingUndecided],
  ]
  return (
    <Field id={id} label={labels.campaignTiming} labels={labels} error={error} as="legend" className="col-span-full">
      <div className="flex flex-wrap gap-2">
        {modes.map(([mode, text]) => (
          <label key={mode} className="cursor-pointer">
            <input
              type="radio"
              name={`${id}-mode`}
              value={mode}
              checked={value.mode === mode}
              onChange={() => onChange({ ...value, mode })}
              onClick={() => value.mode === mode && onChange({ ...value, mode: '' })}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-[40px] items-center rounded-full border border-black/15 px-4 text-[13.5px] transition-colors peer-checked:border-[#0e0e0e] peer-checked:bg-[#0e0e0e] peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-black/50 hover:border-black/40">
              {text}
            </span>
          </label>
        ))}
      </div>
      {value.mode === 'month' && (
        <input
          id={id}
          type="month"
          aria-label={labels.timingMonth}
          value={value.month}
          onChange={(e) => onChange({ ...value, month: e.target.value })}
          className={cn(fieldClass, 'mt-3 max-w-[260px]')}
        />
      )}
      {value.mode === 'dates' && (
        <div className="mt-3 grid grid-cols-2 gap-3 mobile:grid-cols-1">
          <label className="block">
            <span className="mb-1.5 block ps-1 text-[12.5px] text-foreground-gray">{labels.timingFrom}</span>
            <input id={id} type="date" value={value.from} onChange={(e) => onChange({ ...value, from: e.target.value })} aria-invalid={!!error} className={fieldClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block ps-1 text-[12.5px] text-foreground-gray">{labels.timingTo}</span>
            <input type="date" value={value.to} min={value.from || undefined} onChange={(e) => onChange({ ...value, to: e.target.value })} aria-invalid={!!error} className={fieldClass} />
          </label>
        </div>
      )}
    </Field>
  )
}

export function CheckChips<T extends string>({
  id,
  label,
  options,
  value,
  onChange,
  labels,
}: {
  id: string
  label: string
  options: Array<[T, string]>
  value: T[]
  onChange: (v: T[]) => void
  labels: ContactFormLabels
}) {
  return (
    <Field id={id} label={label} labels={labels} as="legend" className="col-span-full">
      <div className="flex flex-wrap gap-2">
        {options.map(([key, text]) => (
          <label key={key} className="cursor-pointer">
            <input
              type="checkbox"
              checked={value.includes(key)}
              onChange={(e) => onChange(e.target.checked ? [...value, key] : value.filter((v) => v !== key))}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-[40px] items-center rounded-full border border-black/15 px-4 text-[13.5px] transition-colors peer-checked:border-[#0e0e0e] peer-checked:bg-[#0e0e0e] peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-black/50 hover:border-black/40">
              {text}
            </span>
          </label>
        ))}
      </div>
    </Field>
  )
}

export type ProfileRow = { key: number; platform: SocialPlatform; handle: string; followers: string }

const PLATFORM_NAMES: Record<SocialPlatform, string> = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', other: '' }

export function SocialProfilesField({
  id,
  rows,
  onChange,
  onAdd,
  labels,
  errors,
  max,
}: {
  id: string
  rows: ProfileRow[]
  onChange: (rows: ProfileRow[]) => void
  onAdd: () => void
  labels: ContactFormLabels
  errors: Errors
  max: number
}) {
  const update = (key: number, patch: Partial<ProfileRow>) => onChange(rows.map((r) => (r.key === key ? { ...r, ...patch } : r)))
  return (
    <Field
      id={id}
      label={labels.socialProfiles}
      required
      labels={labels}
      error={errors[id]}
      hint={labels.socialProfilesHint}
      as="legend"
      className="col-span-full"
    >
      <div className="flex flex-col gap-3">
        {rows.map((row, i) => {
          const base = `${id}-${row.key}`
          return (
            <fieldset
              key={row.key}
              className="grid grid-cols-[minmax(0,150px)_minmax(0,1fr)_minmax(0,130px)_auto] items-start gap-2.5 rounded-[18px] border border-black/[0.07] p-3 mobile:grid-cols-2"
            >
              <legend className="sr-only">{`${labels.profile} ${i + 1}`}</legend>
              <div className="min-w-0">
                <label htmlFor={`${base}-platform`} className="mb-1.5 block ps-1 text-[12px] text-foreground-gray">{labels.platform}</label>
                <select
                  id={`${base}-platform`}
                  value={row.platform}
                  onChange={(e) => update(row.key, { platform: e.target.value as SocialPlatform })}
                  className={fieldClass}
                  style={selectStyle}
                >
                  {SOCIAL_PLATFORMS.map((p) => (
                    <option key={p} value={p}>{p === 'other' ? labels.platformOther : PLATFORM_NAMES[p]}</option>
                  ))}
                </select>
              </div>
              <div className="min-w-0 mobile:col-span-2 mobile:row-start-2">
                <label htmlFor={`${base}-handle`} className="mb-1.5 block ps-1 text-[12px] text-foreground-gray">{labels.handleOrUrl}</label>
                <input
                  id={`${base}-handle`}
                  value={row.handle}
                  onChange={(e) => update(row.key, { handle: e.target.value })}
                  placeholder={labels.handlePlaceholder}
                  maxLength={300}
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-invalid={!!errors[`${base}-handle`]}
                  aria-describedby={describedBy(`${base}-handle`, errors[`${base}-handle`])}
                  className={fieldClass}
                />
                {errors[`${base}-handle`] && <p id={errorId(`${base}-handle`)} className="mt-1.5 ps-1 text-[12.5px] text-[#b3261e]">{errors[`${base}-handle`]}</p>}
              </div>
              <div className="min-w-0 mobile:col-start-2 mobile:row-start-1">
                <label htmlFor={`${base}-followers`} className="mb-1.5 block ps-1 text-[12px] text-foreground-gray">
                  {row.platform === 'youtube' ? labels.subscribers : labels.followers}
                </label>
                <input
                  id={`${base}-followers`}
                  value={row.followers}
                  onChange={(e) => update(row.key, { followers: e.target.value })}
                  placeholder={labels.followersPlaceholder}
                  inputMode="decimal"
                  maxLength={20}
                  aria-invalid={!!errors[`${base}-followers`]}
                  aria-describedby={describedBy(`${base}-followers`, errors[`${base}-followers`])}
                  className={fieldClass}
                />
                {errors[`${base}-followers`] && <p id={errorId(`${base}-followers`)} className="mt-1.5 ps-1 text-[12.5px] text-[#b3261e]">{errors[`${base}-followers`]}</p>}
              </div>
              <div className="flex pt-[26px] mobile:col-span-2 mobile:row-start-3 mobile:justify-end mobile:pt-0">
                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onChange(rows.filter((r) => r.key !== row.key))}
                    aria-label={`${labels.removeProfile} ${i + 1}`}
                    className="grid h-[52px] w-[44px] place-items-center rounded-[14px] text-foreground-gray transition-colors hover:bg-[#f4f2ee] hover:text-foreground-dark focus-visible:outline-2 focus-visible:outline-black/40 mobile:h-9 mobile:w-auto mobile:gap-1 mobile:px-3 mobile:text-[12.5px]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                    <span className="hidden mobile:inline">{labels.removeProfile}</span>
                  </button>
                )}
              </div>
            </fieldset>
          )
        })}
      </div>
      {rows.length < max && (
        <button
          type="button"
          onClick={onAdd}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-[13.5px] transition-colors hover:border-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          {labels.addPlatform}
        </button>
      )}
    </Field>
  )
}
