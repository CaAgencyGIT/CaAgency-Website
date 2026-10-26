'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { MOBILE_VIDEO_MEDIA, mobileVideoSrc } from '@/lib/media/video-src'

// Decorative tile: muted, looping, inline, no controls. Nothing downloads at
// page load (preload="none", no autoPlay): buffering starts when the tile
// nears the viewport and playback while it's on screen. A blocked autoplay
// (iOS Low Power Mode) is retried on the visitor's first touch or key press
// instead of showing a play button. The showreels always play, also with
// reduced motion or Save-Data on (client decision, Oct 2026).
export default function CollageVideo({
  src,
  poster,
  label,
  position,
  eager = false,
}: {
  src: string
  poster?: string
  label: string
  position?: string
  /** Start buffering at once (reels near the top of a page, e.g. About). */
  eager?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const gestures = ['touchstart', 'pointerdown', 'keydown', 'scroll'] as const

    // React doesn't reliably emit the `muted` attribute; iOS won't autoplay without it.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')

    // Reveal the video only once frames are actually playing; until then the
    // poster underneath shows.
    const onPlaying = () => {
      video.setAttribute('data-playing', '')
      gestures.forEach((e) => window.removeEventListener(e, tryPlay))
    }
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
    if (eager) {
      video.preload = 'auto'
      video.load()
    } else warm.observe(video)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) tryPlay()
        else video.pause()
      },
      { threshold: 0.15 },
    )
    observer.observe(video)

    // Retried on every touch, scroll or key press until frames play (iOS Low
    // Power Mode can refuse the first unprompted play()).
    gestures.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }))
    document.addEventListener('visibilitychange', tryPlay)
    video.addEventListener('canplay', tryPlay)

    return () => {
      warm.disconnect()
      observer.disconnect()
      gestures.forEach((e) => window.removeEventListener(e, tryPlay))
      document.removeEventListener('visibilitychange', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('playing', onPlaying)
    }
  }, [eager])

  return (
    <>
    {poster && (
      <Image src={poster} alt="" aria-hidden fill priority={eager} sizes="(max-width: 760px) 34vw, 30vw" style={position ? { objectPosition: position } : undefined} />
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
