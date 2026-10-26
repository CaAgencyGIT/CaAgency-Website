'use client'

import { Children, useEffect, useRef, type ReactNode } from 'react'

// Homepage "Meet the Talents" slideshow (Oct 2026): six cards in view on
// desktop (three on tablets, two on phones); every few seconds the row
// slides on by one card, wrapping back to the start at the end. Keeps going
// under the mouse (client, Oct 2026); pauses only while touched or off
// screen. Visitors can also swipe or scroll it.
const INTERVAL_MS = 3200

export default function TalentSlideshow({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = ref.current
    if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let paused = false
    let visible = false
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    const resumeLater = () => window.setTimeout(resume, 4000)
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting }, { threshold: 0.3 })
    observer.observe(track)
    const step = () => {
      if (paused || !visible || document.hidden) return
      const card = track.firstElementChild as HTMLElement | null
      if (!card) return
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + card.offsetWidth + gap, behavior: 'smooth' })
    }
    const id = window.setInterval(step, INTERVAL_MS)
    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resumeLater, { passive: true })
    return () => {
      window.clearInterval(id)
      observer.disconnect()
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resumeLater)
    }
  }, [])

  return (
    <div ref={ref} className="talent-slideshow" aria-roledescription="carousel">
      {Children.map(children, (child) => (
        <div className="talent-slideshow-slide">{child}</div>
      ))}
    </div>
  )
}
