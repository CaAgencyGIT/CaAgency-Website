'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { getStoredConsent, storeConsent, type ConsentStatus } from '@/lib/consent'

const EXIT_DURATION_MS = 250
// Fired by the footer's "Privacy settings" link to reopen the dialog.
export const OPEN_PRIVACY_SETTINGS_EVENT = 'ca-open-privacy-settings'

export interface CookieConsentLabels {
  title: string
  description: string
  learnMore: string
  moreInfo: string
  moreInfoText: string
  decline: string
  acceptAll: string
  settings: string
}

// Privacy Settings dialog (Oct 2026): centred card over a dimmed page, asked
// once on the first visit and reopenable from the footer. Google Analytics
// only loads after "Accept All" (see components/analytics/GoogleAnalytics).
export default function CookieConsent({ labels }: { labels: CookieConsentLabels }) {
  // Rendered inside the locale layouts (not the root layout) so the dialog is
  // translated on /ar and /ko and inherits their text direction — the
  // 'cookies' namespace must stay in CLIENT_NAMESPACES (i18n/client-messages).
  const [status, setStatus] = useState<ConsentStatus>(getStoredConsent)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const acceptRef = useRef<HTMLButtonElement>(null)
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (status !== 'pending') return
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [status])

  useEffect(() => {
    const reopen = () => {
      setShowInfo(false)
      setStatus('pending')
      setIsVisible(true)
    }
    window.addEventListener(OPEN_PRIVACY_SETTINGS_EVENT, reopen)
    return () => {
      window.removeEventListener(OPEN_PRIVACY_SETTINGS_EVENT, reopen)
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current)
    }
  }, [])

  const open = status === 'pending' && isVisible
  useEffect(() => {
    if (open) acceptRef.current?.focus({ preventScroll: true })
  }, [open])

  const handleConsent = (consent: 'accepted' | 'declined') => {
    const revoking = consent === 'declined' && getStoredConsent() === 'accepted'
    // Persist and broadcast immediately — the exit animation is cosmetic and
    // must not gate the decision.
    storeConsent(consent)
    if (revoking) {
      // Analytics is already running in this page: drop its cookies and
      // reload so nothing keeps tracking after the withdrawal.
      for (const name of document.cookie.split(';').map((c) => c.split('=')[0].trim())) {
        if (name.startsWith('_ga')) {
          const domain = location.hostname.replace(/^www\./, '')
          document.cookie = `${name}=; Max-Age=0; path=/`
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`
        }
      }
      location.reload()
      return
    }
    setIsAnimatingOut(true)
    exitTimerRef.current = setTimeout(() => {
      setStatus(consent)
      setIsVisible(false)
      setIsAnimatingOut(false)
    }, EXIT_DURATION_MS)
  }

  if (!open) return null

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[10000] flex items-center justify-center bg-black/45 px-4 py-6',
        'animate-consent-in motion-reduce:animate-none transition-opacity duration-200',
        isAnimatingOut && 'opacity-0'
      )}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-settings-title"
        aria-describedby="privacy-settings-text"
        className="max-h-full w-full max-w-[460px] overflow-y-auto rounded-[22px] bg-white p-7 text-foreground-dark shadow-[0_24px_70px_rgba(0,0,0,0.35)] mobile:p-6"
      >
        <h2 id="privacy-settings-title" className="mb-3 font-anegra text-[26px] leading-[1.15] tracking-[0.5px]">
          {labels.title}
        </h2>
        <p id="privacy-settings-text" className="font-work-sans text-[14.5px] leading-[1.65] text-black/70">
          {labels.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-jost text-[13px] font-medium">
          {/* Legal pages are English-only (site) routes — plain next/link. */}
          <Link
            href="/privacy-policy"
            prefetch={false}
            className="underline decoration-black/30 underline-offset-[4px] transition-colors hover:decoration-black"
          >
            {labels.learnMore}
          </Link>
          <button
            type="button"
            aria-expanded={showInfo}
            aria-controls="privacy-settings-info"
            onClick={() => setShowInfo((v) => !v)}
            className="underline decoration-black/30 underline-offset-[4px] transition-colors hover:decoration-black"
          >
            {labels.moreInfo}
          </button>
        </div>
        {showInfo && (
          <p
            id="privacy-settings-info"
            className="mt-3 rounded-[12px] bg-black/[0.04] p-4 font-work-sans text-[13.5px] leading-[1.6] text-black/70"
          >
            {labels.moreInfoText}
          </p>
        )}

        <div className="mt-7 flex flex-col gap-2.5">
          <button
            ref={acceptRef}
            type="button"
            onClick={() => handleConsent('accepted')}
            className="w-full rounded-full bg-background-dark px-5 py-3.5 font-jost text-[15px] font-medium text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {labels.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => handleConsent('declined')}
            className="w-full rounded-full border border-black/20 px-5 py-3.5 font-jost text-[15px] font-medium text-foreground-dark transition-colors hover:border-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {labels.decline}
          </button>
        </div>
      </div>
    </div>
  )
}
