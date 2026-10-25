'use client'

import { useEffect, useRef, useState } from 'react'

// Talent card film: fades in over the photo and plays while the card is
// hovered, or on touch screens while the card sits in the middle of the
// screen. Nothing loads until the first time it is needed.
export default function TalentCardVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [on, setOn] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const video = ref.current
    const card = video?.parentElement
    if (!video || !card) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const start = () => {
      setLoaded(true)
      setOn(true)
    }
    const stop = () => setOn(false)

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      card.addEventListener('mouseenter', start)
      card.addEventListener('mouseleave', stop)
      card.addEventListener('focusin', start)
      card.addEventListener('focusout', stop)
      return () => {
        card.removeEventListener('mouseenter', start)
        card.removeEventListener('mouseleave', stop)
        card.removeEventListener('focusin', start)
        card.removeEventListener('focusout', stop)
      }
    }

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
      rootMargin: '-35% 0px -35% 0px',
    })
    io.observe(card)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const video = ref.current
    if (!video || !loaded) return
    if (on) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [on, loaded])

  return (
    <video
      ref={ref}
      src={loaded ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${on ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
