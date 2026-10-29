'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useEffect, useRef } from 'react'
import { VITALS_PATH, type VitalsMetric } from '@/lib/performance/vitals'

const REPORTED = new Set(['LCP', 'INP', 'CLS', 'FCP', 'TTFB'])

// Collects this page view's Core Web Vitals and sends them in one beacon when
// the visitor leaves or hides the tab. Anonymous: no cookies or identifiers.
export default function WebVitals() {
  const metrics = useRef(new Map<string, VitalsMetric>())
  // Read once when the page starts: a window that is not in front is throttled and its numbers say nothing about visitors.
  const focused = useRef<boolean | null>(null)

  useReportWebVitals((metric) => {
    if (!REPORTED.has(metric.name)) return
    metrics.current.set(metric.name, { name: metric.name, value: metric.value, rating: metric.rating })
  })

  useEffect(() => {
    focused.current = document.hasFocus()
    const flush = () => {
      if (document.visibilityState !== 'hidden' || metrics.current.size === 0) return
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection?.effectiveType
      const body = JSON.stringify({
        path: location.pathname,
        device: window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop',
        connection: connection ?? 'unknown',
        focused: focused.current ?? undefined,
        metrics: [...metrics.current.values()],
      })
      metrics.current.clear()
      navigator.sendBeacon?.(VITALS_PATH, new Blob([body], { type: 'application/json' }))
    }
    document.addEventListener('visibilitychange', flush)
    window.addEventListener('pagehide', flush)
    return () => {
      document.removeEventListener('visibilitychange', flush)
      window.removeEventListener('pagehide', flush)
    }
  }, [])

  return null
}
