'use client'

import { useEffect, useRef, useState } from 'react'
import { MOBILE_VIDEO_MEDIA, mobileVideoSrc } from '@/lib/media/video-src'

// Only one collage film may be audible: unmuting one mutes the others.
const SOUND_EVENT = 'ca-home-collage-sound'

// A homepage collage film: muted, looping and inline over its poster. It
// plays while on screen and pauses off screen; with reduced motion it stays
// on the poster until the visitor presses play. Pause is always available,
// sound only on films that actually have an audio track.
export default function HomeCollageVideo({
  src,
  label,
  name,
  hasAudio = false,
}: {
  src: string
  label: string
  name: string
  hasAudio?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const userPausedRef = useRef(false)
  const [paused, setPaused] = useState(true)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // React doesn't write the `muted` attribute; iOS needs it for autoplay.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) userPausedRef.current = true

    let visible = false
    const tryPlay = () => {
      if (visible && video.paused && !userPausedRef.current && !document.hidden) video.play().catch(() => {})
    }
    const onPlaying = () => {
      video.setAttribute('data-playing', '')
      setPaused(false)
    }
    const onPause = () => setPaused(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) tryPlay()
        else video.pause()
      },
      { threshold: 0.2 },
    )
    observer.observe(video)
    // iOS can refuse the first unprompted play(); the next touch unlocks it.
    const gestures = ['touchend', 'pointerup', 'keydown'] as const
    gestures.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }))
    document.addEventListener('visibilitychange', tryPlay)
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('playing', onPlaying)
    video.addEventListener('pause', onPause)

    const onOtherSound = (event: Event) => {
      if ((event as CustomEvent<HTMLVideoElement>).detail !== video) {
        video.muted = true
        setMuted(true)
      }
    }
    window.addEventListener(SOUND_EVENT, onOtherSound)

    return () => {
      observer.disconnect()
      gestures.forEach((e) => window.removeEventListener(e, tryPlay))
      document.removeEventListener('visibilitychange', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('playing', onPlaying)
      video.removeEventListener('pause', onPause)
      window.removeEventListener(SOUND_EVENT, onOtherSound)
    }
  }, [])

  const togglePlay = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      userPausedRef.current = false
      video.play().catch(() => {})
    } else {
      userPausedRef.current = true
      video.pause()
    }
  }

  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    const next = !video.muted
    video.muted = next
    setMuted(next)
    if (!next) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: video }))
      if (video.paused) {
        userPausedRef.current = false
        video.play().catch(() => {})
      }
    }
  }

  const mobile = mobileVideoSrc(src)

  return (
    <>
      <video
        ref={ref}
        aria-label={label}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        className="home-collage-media home-collage-video"
      >
        {mobile && <source src={mobile} type="video/mp4" media={MOBILE_VIDEO_MEDIA} />}
        <source src={src} type="video/mp4" />
      </video>
      <div className="home-collage-controls">
        {hasAudio && (
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            aria-label={muted ? `Turn on sound for ${name}'s video` : `Mute ${name}'s video`}
            className="home-collage-button"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
              {muted ? (
                <path d="M16.5 9.5l5 5m0-5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              ) : (
                <path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              )}
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? `Play ${name}'s video` : `Pause ${name}'s video`}
          className="home-collage-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            {paused ? <path d="M8 5.5v13l11-6.5z" /> : <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />}
          </svg>
        </button>
      </div>
    </>
  )
}
