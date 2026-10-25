'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const TILTS = [-2.2, 1.6, -1, 2, -1.6, 1.1]
const STEP_MS = 2800

// About page photo strip as a slideshow: steps one photo along every few
// seconds with a smooth glide, pauses on hover, and loops by snapping back
// once the duplicated set has scrolled past.
export default function AboutStripSlideshow({
  items,
  label,
}: {
  items: Array<{ key: string; src: string; alt: string }>
  label: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(272)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const cards = track.children
      if (cards.length > 1) {
        setStep((cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setAnimate(true)
      setIndex((i) => i + 1)
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [paused])

  const onTransitionEnd = () => {
    if (index >= items.length) {
      setAnimate(false)
      setIndex(0)
    }
  }

  return (
    <section
      className="about-strip"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="about-strip-track"
        style={{
          transform: `translate3d(${-index * step}px, 0, 0)`,
          transition: animate ? 'transform 0.9s cubic-bezier(0.65, 0, 0.35, 1)' : 'none',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {[...items, ...items].map((item, i) => (
          <figure
            key={`${item.key}-${i}`}
            className="about-strip-card"
            style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
            aria-hidden={i >= items.length || undefined}
          >
            <Image
              src={item.src}
              alt={i < items.length ? item.alt : ''}
              fill
              sizes="(max-width: 760px) 180px, 250px"
              quality={90}
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
