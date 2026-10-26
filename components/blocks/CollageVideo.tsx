'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { MOBILE_VIDEO_MEDIA, mobileVideoSrc } from '@/lib/media/video-src'

// Decorative tile: muted, looping, inline, no controls. Nothing downloads at
// page load (preload="none", no autoPlay): buffering starts when the tile
// nears the viewport and playback while it's on screen. A blocked autoplay
// (iOS Low Power Mode) is retried on the visitor's first touch or key press
// instead of showing a play button. Reduced motion or Save-Data keep the
// poster only.
export default function CollageVideo({
  src,
  poster,
  label,
  position,
}: {
  src: string
  poster?: string
  label: string
  position?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // React doesn't reliably emit the `muted` attribute; iOS won't autoplay without it.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')

    // Reveal the video only once frames are actually playing; until then the
    // poster underneath shows.
    const onPlaying = () => video.setAttribute('data-playing', '')
    video.addEventListener('playing', onPlaying)

    let visible = false
    const tryPlay = () => {
      if (visible && video.paused && !document.hidden) video.play().catch(() => {})
    }

    // Start buffering a little before the tile scrolls into view.
    const warm = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        video.preload = 'auto'
        warm.disconnect()
      },
      { rootMargin: '400px 0px' },
    )
    warm.observe(video)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) tryPlay()
        else video.pause()
      },
      { threshold: 0.15 },
    )
    observer.observe(video)

    const gestures = ['touchstart', 'pointerdown', 'keydown'] as const
    const onGesture = () => {
      tryPlay()
      gestures.forEach((e) => window.removeEventListener(e, onGesture))
    }
    gestures.forEach((e) => window.addEventListener(e, onGesture, { passive: true }))
    document.addEventListener('visibilitychange', tryPlay)
    video.addEventListener('canplay', tryPlay)

    return () => {
      warm.disconnect()
      observer.disconnect()
      gestures.forEach((e) => window.removeEventListener(e, onGesture))
      document.removeEventListener('visibilitychange', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('playing', onPlaying)
    }
  }, [])

  return (
    <>
    {poster && (
      <Image src={poster} alt="" aria-hidden fill sizes="(max-width: 760px) 34vw, 30vw" style={position ? { objectPosition: position } : undefined} />
    )}
    <video
      key={src}
      ref={ref}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
      className="collage-video"
      style={position ? { objectPosition: position } : undefined}
    >
      {/* Chosen by the browser before any download: phones get the light encode. */}
      {mobileVideoSrc(src) && <source src={mobileVideoSrc(src)!} type="video/mp4" media={MOBILE_VIDEO_MEDIA} />}
      <source src={src} type="video/mp4" />
    </video>
    </>
  )
}
