'use client'

import { useEffect, useRef, useState } from 'react'
import { mobileVideoSrc } from '@/lib/media/video-src'

// Small looping film for a case study card (Oct 2026: the "More Case Studies"
// cards play). Uses the light phone encode on every screen, since the
// thumbnail is small and smooth playback matters more than sharpness. Loads
// once the card is near, plays while it is on screen, and fades in over the
// still so a slow or refused start never shows a play button.
export default function CaseStudyCardVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // React doesn't write the `muted` attribute; iOS needs it to autoplay.
    video.muted = true
    video.setAttribute('muted', '')
    let visible = false
    const tryPlay = () => {
      if (visible && video.paused && !document.hidden) video.play().catch(() => {})
    }
    const near = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true)
        near.disconnect()
      }
    }, { rootMargin: '300px 0px' })
    const onScreen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) tryPlay()
      else video.pause()
    }, { threshold: 0.5 })
    near.observe(video)
    onScreen.observe(video)
    const onPlaying = () => setPlaying(true)
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('playing', onPlaying)
    // iOS can refuse the first unprompted play(); the next touch unlocks it.
    window.addEventListener('touchend', tryPlay, { passive: true })
    document.addEventListener('visibilitychange', tryPlay)
    return () => {
      near.disconnect()
      onScreen.disconnect()
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('playing', onPlaying)
      window.removeEventListener('touchend', tryPlay)
      document.removeEventListener('visibilitychange', tryPlay)
    }
  }, [])

  return (
    <video
      ref={ref}
      src={load ? (mobileVideoSrc(src) ?? src) : undefined}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${playing ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
