'use client'

import { useEffect, useRef, useState } from 'react'

// Counts from 0 up to `value` the first time it scrolls into view (Oct 2026,
// About page facts). The final figure is rendered first and kept invisible
// underneath to hold the width, so nothing shifts while the digits change;
// with reduced motion, or before scripts run, the final figure just shows.
export default function CountUp({ value, suffix = '', duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState<number | null>(null)
  const format = (n: number) => n.toLocaleString('en-US')

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setCurrent(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          // Ease out so the last digits settle gently.
          setCurrent(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  const final = `${format(value)}${suffix}`
  if (current === null) return <span ref={ref}>{final}</span>
  return (
    <span ref={ref} className="relative inline-block" aria-label={final}>
      <span aria-hidden="true" className="invisible">{final}</span>
      <span aria-hidden="true" className="absolute inset-y-0 left-0 whitespace-nowrap">
        {format(current)}
        {suffix}
      </span>
    </span>
  )
}
