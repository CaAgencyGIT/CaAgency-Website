'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { clsx } from 'clsx'
import usePrefersReducedMotion from '@/components/hooks/usePrefersReducedMotion'
import { pickVideoSrc } from '@/lib/media/video-src'
import LogoSpinner from '@/components/ui/LogoSpinner'

type PlaybackStatus = 'idle' | 'starting' | 'playing' | 'buffering' | 'paused' | 'blocked' | 'error'
type ManualIntent = 'none' | 'play' | 'pause'

interface VideoPlayerProps {
  src: string
  className?: string
  // 'fill' sizes the player to its parent (the parent sets the aspect ratio).
  aspectRatio?: '9:16' | '16:9' | '1:1' | 'fill'
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  // Overrides prefers-reduced-motion for autoplay, muted, looping video.
  // Only use where the client has explicitly chosen to autoplay regardless
  // of that accessibility setting — do not default this on.
  ignoreReducedMotion?: boolean
  poster?: string
  posterSizes?: string
  posterPriority?: boolean
  posterQuality?: number
  label?: string
  playbackActive?: boolean
  onRequestActive?: () => void
  onReleaseActive?: () => void
  // For decorative autoplay grids with no pause affordance: never settle on
  // the "blocked" dead end, keep retrying instead, and never render the
  // Play/Pause control at all.
  neverGiveUp?: boolean
  labels?: {
    pause: string
    play: string
    pauseVideo: string
    playVideo: string
  }
}

// Playback is always muted, so every in-view video may play concurrently —
// one-at-a-time gating left cards sitting on their posters, which reads as
// "frozen" (July 2026 revisions R5/R10/R12). Off-screen videos still pause
// via the IntersectionObserver below.
export default function VideoPlayer({
  src,
  className,
  aspectRatio = '16:9',
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  ignoreReducedMotion = false,
  poster,
  posterSizes = '(max-width: 767px) 50vw, (max-width: 1299px) 25vw, 300px',
  posterPriority = false,
  posterQuality = 60,
  label = 'Campaign video',
  playbackActive,
  onRequestActive,
  onReleaseActive,
  neverGiveUp = false,
  labels = {
    pause: 'Pause',
    play: 'Play',
    pauseVideo: 'Pause video',
    playVideo: 'Play video',
  },
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const playAttemptRef = useRef(0)
  const retryCountRef = useRef(0)
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const eligibleRef = useRef(false)
  const manualIntentRef = useRef<ManualIntent>('none')
  const hasPlayedRef = useRef(false)
  const staggeredRef = useRef(false)
  // Pre-buffering (and its download restart) runs once per mounted film, so
  // a retried play() can't restart the download again in a loop (iOS).
  const prebufferedRef = useRef(false)
  // Desktop: a fine pointer on a wide screen. Decided after mount, so the
  // server render and first paint match the phone-safe defaults.
  const [desktop, setDesktop] = useState(false)
  const desktopRef = useRef(false)
  const [isNearView, setIsNearView] = useState(false)
  // CSS width when the film first came near, to pick a source that fits it.
  const [renderWidth, setRenderWidth] = useState<number | undefined>(undefined)
  const [isInView, setIsInView] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(true)
  const [manualIntent, setManualIntent] = useState<ManualIntent>('none')
  const [retryRequest, setRetryRequest] = useState(0)
  const [playbackStatus, setPlaybackStatus] = useState<PlaybackStatus>('idle')
  const [hasRenderedFrame, setHasRenderedFrame] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion() && !ignoreReducedMotion

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    // Warm metadata shortly before arrival, but only start decoding once the
    // tile actually intersects. Tiles well off screen drop their <video>
    // again: iPhones have a small pool of hardware decoders, and a long grid
    // that keeps every film loaded leaves the newest ones frozen.
    let releaseTimer: ReturnType<typeof setTimeout> | null = null
    const mountObserver = new IntersectionObserver(
      ([entry]) => {
        if (releaseTimer) clearTimeout(releaseTimer)
        releaseTimer = null
        if (entry.isIntersecting) {
          setRenderWidth((width) => width ?? entry.boundingClientRect.width)
          setIsNearView(true)
        } else {
          releaseTimer = setTimeout(() => {
            setIsNearView(false)
            setHasRenderedFrame(false)
            setPlaybackStatus('idle')
            staggeredRef.current = false
          }, 1500)
        }
      },
      { rootMargin: '600px 0px' }
    )
    let exitTimer: ReturnType<typeof setTimeout> | null = null
    // Only tiles that are mostly on screen play, so a long grid never has
    // more films streaming and decoding at once than the connection and the
    // device handle smoothly (phones since Oct 2026, desktop too after the
    // Work grid grew: partly visible rows were starving the visible ones).
    const minRatio = 0.5
    // A film scrolled into view starts once it has stayed there briefly, so
    // tiles flying past during a fast scroll don't each start a download that
    // steals bandwidth from the ones the visitor stops at. Films already on
    // screen when the page opens start at once.
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let firstCallback = true
    const playObserver = new IntersectionObserver(([entry]) => {
      const initial = firstCallback
      firstCallback = false
      if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
        if (exitTimer) clearTimeout(exitTimer)
        exitTimer = null
        if (initial || !desktopRef.current) setIsInView(true)
        else if (!enterTimer) enterTimer = setTimeout(() => { enterTimer = null; setIsInView(true) }, 250)
      } else {
        if (enterTimer) clearTimeout(enterTimer)
        enterTimer = null
        // A small hysteresis avoids pause/play churn while scrolling near an
        // edge or while a desktop hover transform shifts the tile slightly.
        if (exitTimer) clearTimeout(exitTimer)
        exitTimer = setTimeout(() => setIsInView(false), 200)
      }
    }, { threshold: [0, 0.5] })
    mountObserver.observe(element)
    playObserver.observe(element)
    return () => {
      mountObserver.disconnect()
      playObserver.disconnect()
      if (exitTimer) clearTimeout(exitTimer)
      if (enterTimer) clearTimeout(enterTimer)
      if (releaseTimer) clearTimeout(releaseTimer)
    }
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px) and (pointer: fine)')
    const update = () => {
      desktopRef.current = query.matches
      setDesktop(query.matches)
    }
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden)
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    const attemptRef = playAttemptRef
    const timerRef = retryTimerRef
    return () => {
      attemptRef.current++
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const shouldMountVideo = manualIntent !== 'none' || (isNearView && autoplay && !prefersReducedMotion)
  // Detaching the source is what actually hands the decoder back on iOS;
  // removing the element alone leaves it to garbage collection.
  useEffect(() => {
    if (!shouldMountVideo) return
    const video = videoRef.current
    return () => {
      prebufferedRef.current = false
      if (!video) return
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [shouldMountVideo])

  // iOS sometimes refuses or stalls the first programmatic play() (it
  // reads the muted *attribute*, which React never writes). Set it, and if
  // a film still ends up waiting, start it from the visitor's next touch or
  // tap anywhere — a real gesture always unlocks muted playback — instead of
  // leaving it frozen on its poster until the tile itself is tapped.
  useEffect(() => {
    const video = videoRef.current
    if (!shouldMountVideo || !video) return
    video.defaultMuted = muted
    video.muted = muted
    if (muted) video.setAttribute('muted', '')
  }, [shouldMountVideo, muted])

  useEffect(() => {
    if (!eligibleRef.current) return
    if (playbackStatus !== 'blocked' && playbackStatus !== 'buffering' && playbackStatus !== 'starting') return
    const kick = () => {
      const video = videoRef.current
      if (!video || !eligibleRef.current || !video.paused) return
      video.muted = muted
      video.play().catch(() => {})
    }
    const gestures = ['touchend', 'pointerup', 'keydown'] as const
    gestures.forEach((e) => window.addEventListener(e, kick, { passive: true }))
    return () => gestures.forEach((e) => window.removeEventListener(e, kick))
  }, [playbackStatus, muted])

  const startPlayback = useCallback(async () => {
    const video = videoRef.current
    if (!video || !eligibleRef.current || !video.paused) return

    // A page with several autoplaying tiles can have every one of them call
    // play() on the same tick, which contends for the browser's decoder
    // slots and stalls some of them. Spreading the first attempt over a
    // short random window avoids that thundering herd.
    if (!staggeredRef.current) {
      staggeredRef.current = true
      const attemptBeforeWait = playAttemptRef.current
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 400))
      if (attemptBeforeWait !== playAttemptRef.current || !eligibleRef.current || !video.paused) return
    }

    video.defaultMuted = muted
    video.muted = muted
    setPlaybackStatus('starting')
    const attempt = ++playAttemptRef.current
    // Buffer a few seconds before the first play, so a film never starts and
    // then stalls a second in (measured Oct 2026: with several tiles sharing
    // a connection, "canplaythrough" fired with only ~1s buffered and the
    // remaining Work grid freezes all happened 0.5-2s in). The poster stays
    // up meanwhile; on a slow connection it plays anyway after the cap.
    // Desktop only: iOS doesn't buffer ahead without play(), and restarting
    // its download left films paused on iPhones.
    if (desktopRef.current && !hasPlayedRef.current && !prebufferedRef.current) {
      prebufferedRef.current = true
      const ahead = () => {
        const { buffered, currentTime, duration } = video
        for (let i = 0; i < buffered.length; i++) {
          if (buffered.start(i) <= currentTime + 0.1 && buffered.end(i) > currentTime) {
            return buffered.end(i) - currentTime >= Math.min(3, (duration || 3) - currentTime - 0.1)
          }
        }
        return false
      }
      if (!ahead()) {
        // A film that loaded only its metadata (Chrome also takes the first
        // second or so, then reports enough data) sits suspended; switching
        // the preload hint doesn't resume the download, so restart it.
        if (video.networkState === HTMLMediaElement.NETWORK_IDLE) {
          video.preload = 'auto'
          video.load()
        }
        await new Promise<void>((resolve) => {
          const done = () => {
            clearTimeout(timer)
            video.removeEventListener('progress', check)
            video.removeEventListener('canplaythrough', check)
            resolve()
          }
          const check = () => { if (ahead()) done() }
          const timer = setTimeout(done, 4000)
          video.addEventListener('progress', check)
          video.addEventListener('canplaythrough', check)
        })
        if (attempt !== playAttemptRef.current || !eligibleRef.current || !video.paused) return
      }
    }
    try {
      await video.play()
    } catch (error) {
      if (attempt !== playAttemptRef.current || !eligibleRef.current) return
      const name = error instanceof Error ? error.name : ''
      const retryBudget = neverGiveUp ? Infinity : 3
      if (name === 'AbortError' && retryCountRef.current < retryBudget) {
        const delay = Math.min(350 * (retryCountRef.current + 1), 3000)
        retryCountRef.current++
        setPlaybackStatus('buffering')
        retryTimerRef.current = setTimeout(() => setRetryRequest((request) => request + 1), delay)
        return
      }
      if (retryTimerRef.current) clearTimeout(retryTimerRef.current)
      if (neverGiveUp && name !== 'NotAllowedError') {
        setPlaybackStatus('buffering')
        retryTimerRef.current = setTimeout(() => setRetryRequest((request) => request + 1), 4000)
        return
      }
      setPlaybackStatus(name === 'NotAllowedError' || name === 'AbortError' ? 'blocked' : 'error')
      onReleaseActive?.()
    }
  }, [muted, onReleaseActive, neverGiveUp])

  const shouldPlay = shouldMountVideo && isInView && isPageVisible &&
    (playbackActive ?? true) && manualIntent !== 'pause' &&
    (manualIntent === 'play' || (autoplay && !prefersReducedMotion))

  useEffect(() => {
    const wasEligible = eligibleRef.current
    eligibleRef.current = shouldPlay
    manualIntentRef.current = manualIntent
    const video = videoRef.current
    if (!video) return

    if (shouldPlay) {
      if (!wasEligible) retryCountRef.current = 0
      void startPlayback()
      return
    }

    playAttemptRef.current++
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current)
    video.pause()
  }, [shouldPlay, shouldMountVideo, manualIntent, retryRequest, startPlayback])

  useEffect(() => {
    if (!shouldPlay || (playbackStatus !== 'starting' && playbackStatus !== 'buffering')) return
    // A browser can leave play() pending indefinitely on a stalled source.
    // Keep the poster/last frame visible, then offer a manual recovery path
    // — or, for decorative grids with no such control, just keep trying.
    const timeout = setTimeout(() => {
      if (!eligibleRef.current) return
      if (neverGiveUp) {
        setPlaybackStatus('buffering')
        setRetryRequest((request) => request + 1)
        return
      }
      setPlaybackStatus('blocked')
    }, 10000)
    return () => clearTimeout(timeout)
  }, [shouldPlay, playbackStatus, neverGiveUp])

  const togglePlayback = () => {
    let video = videoRef.current
    const isActive = playbackStatus === 'playing' || playbackStatus === 'starting' || playbackStatus === 'buffering'
    if (video && isActive && manualIntent !== 'pause') {
      eligibleRef.current = false
      manualIntentRef.current = 'pause'
      video.pause()
      setManualIntent('pause')
      setPlaybackStatus('paused')
      onReleaseActive?.()
      return
    }

    manualIntentRef.current = 'play'
    onRequestActive?.()
    if (!video) {
      // Safari requires a denied autoplay to be retried in the actual user
      // gesture. Reduced-motion users have no media element until this click.
      flushSync(() => setManualIntent('play'))
      video = videoRef.current
    } else {
      setManualIntent('play')
    }
    if (video && (playbackStatus === 'error' || !video.paused)) {
      eligibleRef.current = false
      playAttemptRef.current++
      if (playbackStatus === 'error') {
        // A failed media element will not retry its source just by play().
        video.load()
      } else {
        video.pause()
      }
    }
    retryCountRef.current = 0
    if (video && isInView && isPageVisible && (playbackActive ?? true)) {
      eligibleRef.current = true
      void startPlayback()
    }
  }

  const handlePause = () => {
    if (!eligibleRef.current) {
      setPlaybackStatus(manualIntentRef.current === 'pause' ? 'paused' : 'idle')
      return
    }
    if (controls) {
      // Native controls are another intentional pause path, not a stall to
      // auto-retry. The browser's own Play control can clear this intent.
      eligibleRef.current = false
      manualIntentRef.current = 'pause'
      setManualIntent('pause')
      setPlaybackStatus('paused')
      onReleaseActive?.()
      return
    }
    const video = videoRef.current
    if (!hasPlayedRef.current || (video?.ended && !loop)) return
    const retryBudget = neverGiveUp ? Infinity : 3
    if (retryCountRef.current < retryBudget) {
      const delay = Math.min(350 * (retryCountRef.current + 1), 3000)
      retryCountRef.current++
      setPlaybackStatus('buffering')
      if (retryTimerRef.current) clearTimeout(retryTimerRef.current)
      retryTimerRef.current = setTimeout(() => setRetryRequest((request) => request + 1), delay)
    } else {
      setPlaybackStatus('blocked')
    }
  }

  const aspectClasses = {
    '9:16': 'aspect-9/16',
    '16:9': 'aspect-video',
    '1:1': 'aspect-square',
    fill: 'h-full w-full',
  }
  // A blocked autoplay (e.g. iOS Low Power Mode) keeps the poster instead of
  // surfacing a Play pill; tapping the tile starts it (client request, Oct 2026).
  const showPlayControl = !autoplay || prefersReducedMotion || manualIntent === 'pause'
  const canPause = playbackStatus === 'playing' || playbackStatus === 'starting' || playbackStatus === 'buffering'

  return (
    <div
      ref={containerRef}
      data-video-frame
      onClick={playbackStatus === 'blocked' || playbackStatus === 'error' ? togglePlayback : undefined}
      className={clsx(
        aspectClasses[aspectRatio],
        'relative overflow-hidden bg-black/10',
        // Default radius only when the caller sets none — avoids shipping
        // tailwind-merge to the client just to resolve this one conflict.
        !/(^|\s)rounded-/.test(className ?? '') && 'rounded-[30px]',
        className
      )}
    >
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          quality={posterQuality}
          preload={posterPriority}
          loading={posterPriority ? undefined : 'lazy'}
          fetchPriority={posterPriority ? 'high' : 'auto'}
          sizes={posterSizes}
          className={clsx('object-cover transition-opacity', hasRenderedFrame && shouldMountVideo && 'opacity-0')}
          aria-hidden="true"
        />
      )}
      {shouldMountVideo && (
        <video
          ref={videoRef}
          src={pickVideoSrc(src, renderWidth)}
          aria-label={label}
          className="h-full w-full object-cover"
          muted={muted}
          loop={loop}
          playsInline
          controls={controls}
          disablePictureInPicture
          // Metadata only until the film is on screen: buffering every
          // upcoming film ahead takes bandwidth (and iPhone decoders) away
          // from the films already playing, which then freeze. A visible film
          // buffers a few seconds before it starts (startPlayback).
          preload={desktop && isInView ? 'auto' : 'metadata'}
          onPlay={() => {
            if (!controls || manualIntentRef.current !== 'pause') return
            manualIntentRef.current = 'play'
            eligibleRef.current = isInView && isPageVisible && (playbackActive ?? true)
            setManualIntent('play')
          }}
          onPlaying={() => {
            if (!eligibleRef.current) return
            hasPlayedRef.current = true
            setHasRenderedFrame(true)
            setPlaybackStatus('playing')
          }}
          onWaiting={() => {
            if (eligibleRef.current) setPlaybackStatus('buffering')
          }}
          onPause={handlePause}
          onError={() => {
            if (eligibleRef.current) setPlaybackStatus('error')
            onReleaseActive?.()
          }}
        />
      )}
      {!controls && !neverGiveUp && (
        <button
          type="button"
          onClick={togglePlayback}
          className={clsx(
            'absolute bottom-4 end-4 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-black/70 px-4 text-sm font-medium text-white transition-[opacity,background-color] hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
            // Keep keyboard/AT pause access without flashing Play during
            // normal startup, buffering, scroll-away, or tab transitions.
            !showPlayControl &&
              'opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto'
          )}
          aria-label={canPause && manualIntent !== 'pause' ? labels.pauseVideo : labels.playVideo}
        >
          {canPause && manualIntent !== 'pause' ? labels.pause : labels.play}
        </button>
      )}
      {/* Spinning CA logo while a started video waits for data. */}
      {shouldMountVideo && playbackStatus === 'buffering' && hasPlayedRef.current && (
        <div className="pointer-events-none absolute inset-0 z-[5] grid place-items-center text-white/90 [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.45))]">
          <LogoSpinner size={44} />
        </div>
      )}
    </div>
  )
}
