'use client'

import { useEffect, useRef } from 'react'

// Decorative autoplay tile: muted, looping, inline, no controls. Plays
// whenever it's on screen and keeps retrying (load, first touch/scroll,
// tab focus) when a browser blocks autoplay, instead of showing a play button.
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
    // React doesn't reliably emit the `muted` attribute; iOS won't autoplay without it.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')

    let visible = false
    const tryPlay = () => {
      if (visible && video.paused && !document.hidden) video.play().catch(() => {})
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) tryPlay()
        else video.pause()
      },
      { threshold: 0.15 },
    )
    observer.observe(video)

    const gestures = ['touchstart', 'pointerdown', 'scroll', 'keydown'] as const
    gestures.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }))
    document.addEventListener('visibilitychange', tryPlay)
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('pause', tryPlay)
    const retry = window.setInterval(tryPlay, 1500)

    return () => {
      observer.disconnect()
      gestures.forEach((e) => window.removeEventListener(e, tryPlay))
      document.removeEventListener('visibilitychange', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('pause', tryPlay)
      window.clearInterval(retry)
    }
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
      className="collage-video"
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
