'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Turnstile from '@/components/forms/Turnstile'
import { trackFormSubmission, trackContactConversion } from '@/components/analytics/GoogleAnalytics'
import { cn } from '@/lib/utils'
import { contactFieldLimits } from '@/lib/contact/validation'
import type { ContactFormLabelKey, ContactFormLabels } from '@/lib/contact/form-labels'

interface ContactFormProps {
  formId?: number // 1 = homepage dark form, 2 = contact page light form, 3 = talent submission form
  className?: string
  /** 'pill': solid white rounded fields on a dark panel (contact page, Oct 2026). */
  variant?: 'light' | 'dark' | 'pill'
  labels: ContactFormLabels
}

export default function ContactForm({ formId = 1, className, variant, labels }: ContactFormProps) {
  const t = (key: ContactFormLabelKey) => labels[key]
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
    socialLink: '',
    subject: '',
  })
  const [turnstileToken, setTurnstileToken] = useState('')
  const [challengeKey, setChallengeKey] = useState(0)
  const usesTurnstile = true
  const challenge = usesTurnstile ? <Turnstile key={challengeKey} onToken={setTurnstileToken} /> : null
  const [honeypot, setHoneypot] = useState('') // Spam protection
  const formStartTimeRef = useRef<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    formStartTimeRef.current = Date.now()
  }, [])

  // Move focus to the submission result so screen readers announce it
  useEffect(() => {
    if (submitStatus !== 'idle') {
      resultRef.current?.focus()
    }
  }, [submitStatus])

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      message: '',
      socialLink: '',
      subject: '',
    })
    setHoneypot('')
    formStartTimeRef.current = Date.now()
    setSubmitStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || (usesTurnstile && !turnstileToken)) return
    const timeElapsed = Date.now() - (formStartTimeRef.current ?? Date.now())

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          turnstileToken,
          formType: formId === 3 ? 'talent' : 'brand',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          socialLink: formData.socialLink,
          subject: formData.subject,
          website: honeypot,
          _formTime: timeElapsed,
        }),
      })

      const result = (await response.json()) as { error?: string; code?: string }
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Report the conversion to GA4 (only for real submissions — the
      // honeypot/time-trap fake successes above never reach this point).
      // A tracking failure must never make a delivered message look failed.
      try {
        const formName = formId === 3 ? 'talent_submission' : formId === 2 ? 'contact_page' : 'homepage_contact'
        trackFormSubmission(formName)
        if (formId !== 3) {
          trackContactConversion()
        }
      } catch {
        // Analytics blocked or failed — the submission itself succeeded.
      }

      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setTurnstileToken('')
      setChallengeKey(key => key + 1)
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    formStartTimeRef.current ??= Date.now()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isPill = variant === 'pill'
  const isDarkBackground = variant === 'dark' || isPill
  const isTalentForm = formId === 3

  const inputBaseStyles = isPill
    ? 'w-full font-work-sans text-[15px] font-normal bg-white text-foreground-dark rounded-[18px] px-6 py-4 border-0 placeholder:text-foreground-dark/45 resize-none focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.25)]'
    : cn(
        'w-full font-jost text-[16px] font-normal bg-transparent px-0 py-3 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-4 resize-none border-b-2 transition-all duration-300',
        isDarkBackground
          ? 'text-white border-white/30 focus:border-white focus-visible:outline-white/70 placeholder:text-white/55 hover:border-white/50'
          : 'text-foreground-dark border-foreground-dark/20 focus:border-accent-red focus-visible:outline-accent-red/70 placeholder:text-foreground-dark/60 hover:border-foreground-dark/40'
      )

  // Pill fields hide the native arrow; this chevron sits inside the rounded field.
  const pillSelectStyle = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23161616' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '16px',
  }

  const labelStyles = cn(
    'block font-jost font-medium mb-2 uppercase',
    isPill ? 'text-[11px] tracking-[0.16em] text-white/60 ps-2' : 'text-[13px] tracking-[1px]',
    !isPill && (isDarkBackground ? 'text-white/70' : 'text-foreground-gray')
  )

  // Success message component
  if (submitStatus === 'success') {
    return (
      <div
        ref={resultRef}
        role="status"
        tabIndex={-1}
        className={cn('status-enter w-full text-center py-12 outline-none', className)}
      >
        <div className="status-icon-enter w-16 h-16 mx-auto mb-4 rounded-full bg-accent-red/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={cn(
          'font-anegra text-[24px] font-semibold mb-2',
          isDarkBackground ? 'text-white' : 'text-foreground-dark'
        )}>
          {t('thankYou')}
        </h3>
        <p className={cn(
          'font-work-sans text-[14px] mb-5',
          isDarkBackground ? 'text-white/70' : 'text-foreground-gray'
        )}>
          {process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ? 'Preview submission recorded. No email was sent.' : t('successMessage')}
        </p>
        <button type="button" onClick={resetForm} className="underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current font-medium">
          {t('sendAnotherMessage')}
        </button>
      </div>
    )
  }

  // Error message component
  if (submitStatus === 'error') {
    return (
      <div
        ref={resultRef}
        role="alert"
        tabIndex={-1}
        className={cn('status-enter w-full text-center py-12 outline-none', className)}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className={cn(
          'font-anegra text-[24px] font-semibold mb-2',
          isDarkBackground ? 'text-white' : 'text-foreground-dark'
        )}>
          {t('errorTitle')}
        </h3>
        <p className={cn(
          'font-work-sans text-[14px] mb-4',
          isDarkBackground ? 'text-white/70' : 'text-foreground-gray'
        )}>
          {t('errorMessage')}{' '}
          <a href="mailto:info@caagency.com" className="underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current">
            info@caagency.com
          </a>
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current font-medium"
        >
          {t('tryAgain')}
        </button>
      </div>
    )
  }

  // Talent Submission Form
  if (isTalentForm) {
    return (
      <form
        onSubmit={handleSubmit}
        onFocusCapture={() => { formStartTimeRef.current ??= Date.now() }}
        className={cn('w-full', className)}
      >
        {challenge}
      {/* Honeypot field - hidden from users, visible to bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website_url">Website</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name and Social Link */}
        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-8 mb-6">
          <div className="group">
            <label htmlFor="talentFullName" className={labelStyles}>
              {t('fullName')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="talentFullName"
              autoComplete="name"
              name="fullName"
              maxLength={contactFieldLimits.fullName}
              value={formData.fullName}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder={t('namePlaceholder')}
              required
            />
          </div>
          <div className="group">
            <label htmlFor="talentSocialLink" className={labelStyles}>
              {t('socialLink')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="url"
              id="talentSocialLink"
              autoComplete="url"
              name="socialLink"
              maxLength={contactFieldLimits.socialLink}
              value={formData.socialLink}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder={t('socialPlaceholder')}
              required
            />
          </div>
        </div>

        {/* Row 2: Email and Phone */}
        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-8 mb-6">
          <div className="group">
            <label htmlFor="talentEmail" className={labelStyles}>
              {t('email')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="email"
              id="talentEmail"
              autoComplete="email"
              name="email"
              maxLength={contactFieldLimits.email}
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              value={formData.email}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="talentPhone" className={labelStyles}>
              {t('phone')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="tel"
              id="talentPhone"
              autoComplete="tel"
              name="phone"
              maxLength={contactFieldLimits.phone}
              value={formData.phone}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
        </div>

        {/* Row 3: Subject */}
        <div className="mb-6">
          <label htmlFor="talentSubject" className={labelStyles}>
            {t('subject')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
              id="talentSubject"
              autoComplete="off"
            name="subject"
            maxLength={contactFieldLimits.subject}
            value={formData.subject}
            onChange={handleChange}
            className={inputBaseStyles}
            placeholder={t('subjectPlaceholder')}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <label htmlFor="talentMessage" className={labelStyles}>
            {t('message')} <span className="text-accent-red">*</span>
          </label>
          <textarea
            id="talentMessage"
            name="message"
            maxLength={contactFieldLimits.message}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={cn(inputBaseStyles, 'resize-y min-h-[100px]')}
            placeholder={t('messagePlaceholderTalent')}
            required
          />
        </div>

        <div className="flex justify-start">
          <Button type="submit" variant={isDarkBackground ? 'light' : 'dark'} className="min-w-[180px]" disabled={isSubmitting || (usesTurnstile && !turnstileToken)}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t('sending')}
              </span>
            ) : (
              t('submitApplication')
            )}
          </Button>
        </div>
      </form>
    )
  }

  // Contact Page Form (formId === 2)
  if (formId === 2) {
    return (
      <form
        onSubmit={handleSubmit}
        onFocusCapture={() => { formStartTimeRef.current ??= Date.now() }}
        className={cn('w-full', className)}
      >
        {challenge}
      {/* Honeypot field - hidden from users, visible to bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website_url_2">Website</label>
          <input
            type="text"
            id="website_url_2"
            name="website_url"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name and Email */}
        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-8 mb-6">
          <div className="group">
            <label htmlFor="contactFullName" className={labelStyles}>
              {t('fullName')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="contactFullName"
              autoComplete="name"
              name="fullName"
              maxLength={contactFieldLimits.fullName}
              value={formData.fullName}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder={t('namePlaceholder')}
              required
            />
          </div>
          <div className="group">
            <label htmlFor="contactEmail" className={labelStyles}>
              {t('email')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="email"
              id="contactEmail"
              autoComplete="email"
              name="email"
              maxLength={contactFieldLimits.email}
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              value={formData.email}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        {/* Row 2: Phone and Company */}
        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-8 mb-6">
          <div className="group">
            <label htmlFor="contactPhone" className={labelStyles}>
              {t('phone')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              autoComplete="tel"
              name="phone"
              maxLength={contactFieldLimits.phone}
              value={formData.phone}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="contactCompany" className={labelStyles}>
              {t('company')} <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="contactCompany"
              autoComplete="organization"
              name="company"
              maxLength={contactFieldLimits.company}
              value={formData.company}
              onChange={handleChange}
              className={inputBaseStyles}
              placeholder={t('companyPlaceholder')}
              required
            />
          </div>
        </div>

        {/* Budget */}
        <div className="mb-6">
          <label htmlFor="contactBudget" className={labelStyles}>
            {t('estimatedBudget')} <span className="text-accent-red">*</span>
          </label>
          <select
            id="contactBudget"
            autoComplete="off"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={cn(inputBaseStyles, isPill ? 'appearance-none pe-12' : 'pe-5')}
            style={isPill ? pillSelectStyle : undefined}
            required
          >
            <option value="">{t('selectBudgetRange')}</option>
            <option value="na">{t('budgetNotSureYet')}</option>
            <option value="startup">{t('budgetStartupFull')}</option>
            <option value="20-40k">$20k - $40k</option>
            <option value="40-80k">$40k - $80k</option>
            <option value="80-150k">$80k - $150k</option>
            <option value="150-250k">$150k - $250k</option>
            <option value="250k+">$250k+</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label htmlFor="contactMessage" className={labelStyles}>
            {t('howCanWeHelp')} <span className="text-accent-red">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            maxLength={contactFieldLimits.message}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={cn(inputBaseStyles, 'resize-y min-h-[100px]')}
            placeholder={t('messagePlaceholderProject')}
            required
          />
        </div>

        <div className="flex justify-start">
          <Button type="submit" variant={isDarkBackground ? 'light' : 'dark'} className="min-w-[180px]" disabled={isSubmitting || (usesTurnstile && !turnstileToken)}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t('sending')}
              </span>
            ) : (
              t('getInTouch')
            )}
          </Button>
        </div>
      </form>
    )
  }

  // Homepage Contact Form (formId === 1, default)
  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={() => { formStartTimeRef.current ??= Date.now() }}
      className={cn(
        'w-full max-w-[500px] mobile:max-w-full',
        isDarkBackground && 'contact-form-dark',
        className
      )}
    >
      {challenge}
      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website_url_1">Website</label>
        <input
          type="text"
          id="website_url_1"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Full Name and Email */}
      <div className="grid grid-cols-2 mobile:grid-cols-1 gap-6 mb-5">
        <div>
          <label htmlFor="homeFullName" className={labelStyles}>
            {t('fullName')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            id="homeFullName"
            autoComplete="name"
            name="fullName"
            maxLength={contactFieldLimits.fullName}
            value={formData.fullName}
            onChange={handleChange}
            className={inputBaseStyles}
            placeholder={t('namePlaceholder')}
            required
          />
        </div>
        <div>
          <label htmlFor="homeEmail" className={labelStyles}>
            {t('email')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="email"
            id="homeEmail"
            autoComplete="email"
            name="email"
            maxLength={contactFieldLimits.email}
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            value={formData.email}
            onChange={handleChange}
            className={inputBaseStyles}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      {/* Row 2: Phone and Company */}
      <div className="grid grid-cols-2 mobile:grid-cols-1 gap-6 mb-5">
        <div>
          <label htmlFor="homePhone" className={labelStyles}>
            {t('phone')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="tel"
            id="homePhone"
            autoComplete="tel"
            name="phone"
            maxLength={contactFieldLimits.phone}
            value={formData.phone}
            onChange={handleChange}
            className={inputBaseStyles}
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>
        <div>
          <label htmlFor="homeCompany" className={labelStyles}>
            {t('company')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            id="homeCompany"
            autoComplete="organization"
            name="company"
            maxLength={contactFieldLimits.company}
            value={formData.company}
            onChange={handleChange}
            className={inputBaseStyles}
            placeholder={t('companyPlaceholderShort')}
            required
          />
        </div>
      </div>

      {/* Row 3: Budget and Message */}
      <div className="grid grid-cols-2 mobile:grid-cols-1 gap-6 mb-6">
        <div>
          <label htmlFor="homeBudget" className={labelStyles}>
            {t('budget')} <span className="text-accent-red">*</span>
          </label>
          <select
            id="homeBudget"
            autoComplete="off"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={cn(inputBaseStyles, 'pe-5')}
            required
          >
            <option value="">{t('selectBudget')}</option>
            <option value="na">{t('budgetNotSure')}</option>
            <option value="startup">{t('budgetStartup')}</option>
            <option value="20-40k">$20k - $40k</option>
            <option value="40-80k">$40k - $80k</option>
            <option value="80-150k">$80k - $150k</option>
            <option value="150-250k">$150k - $250k</option>
            <option value="250k+">$250k+</option>
          </select>
        </div>
        <div>
          <label htmlFor="homeMessage" className={labelStyles}>
            {t('message')} <span className="text-accent-red">*</span>
          </label>
          <textarea
            id="homeMessage"
            name="message"
            maxLength={contactFieldLimits.message}
            value={formData.message}
            onChange={handleChange}
            rows={1}
            className={inputBaseStyles}
            placeholder={t('messagePlaceholderShort')}
            required
          />
        </div>
      </div>

      <div className="flex justify-center mobile:justify-start">
        <Button type="submit" variant={isDarkBackground ? 'light' : 'primary'} className="min-w-[160px]" disabled={isSubmitting || (usesTurnstile && !turnstileToken)}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Get in Touch'
          )}
        </Button>
      </div>
    </form>
  )
}
