'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

/**
 * Circular back-to-top button that fades in after the first screens of
 * scrolling. Bottom-left so it never fights the cookie banner (bottom-right).
 * Scrolls smoothly, or jumps instantly under prefers-reduced-motion.
 */
export default function BackToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 700)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      data-back-to-top
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      className={clsx(
        'fixed bottom-6 start-6 z-40 flex h-11 w-11 items-center justify-center rounded-full',
        'bg-background-dark text-white shadow-e2 transition-all duration-300',
        'hover:bg-button-hoverDark hover:shadow-e3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-red',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
