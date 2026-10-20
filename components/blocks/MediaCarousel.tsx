'use client'

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react'
import Image from 'next/image'

// React only calls these subscribe/snapshot helpers on the client (SSR uses
// the getServerSnapshot argument), but non-DOM environments like unit tests
// can still import and invoke them — the guards keep that from throwing.
function subscribeToPageVisibility(onChange: () => void) {
  if (typeof document === 'undefined') return () => {}
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}

const REDUCED_MOTION_FALLBACK = {
  matches: false,
  addEventListener: () => {},
  removeEventListener: () => {},
} as unknown as MediaQueryList

let reducedMotionQuery: MediaQueryList | null = null

function getReducedMotionQuery() {
  if (typeof window === 'undefined') return REDUCED_MOTION_FALLBACK
  reducedMotionQuery ??= window.matchMedia('(prefers-reduced-motion: reduce)')
  return reducedMotionQuery
}

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = getReducedMotionQuery()
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

export interface MediaItem {
  type: 'video' | 'image'
  src: string
  alt?: string
  poster?: string
}

export interface MediaCarouselProps {
  items: MediaItem[]
  className?: string
  // Overrides prefers-reduced-motion for autoplay/auto-advance. Only use
  // where the client has explicitly chosen to autoplay regardless of that
  // accessibility setting — do not default this on.
  ignoreReducedMotion?: boolean
  // Localized control labels; server parents pass translated strings because
  // this client component renders outside any NextIntlClientProvider (the
  // provider is scoped to the contact form).
  labels?: {
    previous: string
    next: string
    play: string
    playVideo: string
    playCarousel: string
    pauseCarousel: string
    goToSlide: string
  }
}

export default function MediaCarousel({
  items,
  className = '',
  ignoreReducedMotion = false,
  labels = {
    previous: 'Previous',
    next: 'Next',
    play: 'Play',
    playVideo: 'Play video',
    playCarousel: 'Play carousel',
    pauseCarousel: 'Pause carousel',
    goToSlide: 'Go to slide {number}',
  },
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // Manual pause (the Pause/Play button) is kept separate from keyboard focus
  // pausing so a deliberate pause is not undone when focus leaves the carousel.
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [isFocusPaused, setIsFocusPaused] = useState(false)
  // Server snapshot is false so SSR/hydration render the motion-on markup;
  // the client snapshot corrects it before paint for reduced-motion users.
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => getReducedMotionQuery().matches,
    () => false
  ) && !ignoreReducedMotion
  // The carousel sits below the fold; keep posters and video bytes off the
  // critical first load by not mounting any media until it approaches the
  // viewport (autoplay on the active slide overrides preload="none", so
  // mounting early starts an MP4 download that competes with the hero LCP).
  const [isNearView, setIsNearView] = useState(false)
  // Live visibility (unlike the one-way isNearView mount latch): once the
  // section scrolls away or the tab is hidden, playback and the advance timer
  // stop instead of cycling 1-2.5MB reels off-screen for the rest of the
  // session.
  const [isInView, setIsInView] = useState(false)
  const isPageVisible = useSyncExternalStore(
    subscribeToPageVisibility,
    () => !document.hidden,
    () => true
  )
  // Track the blocked slide rather than a shared flag: a late play() result
  // from the previous slide must not control the new one's fallback timer.
  const [blockedIndex, setBlockedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())
  const currentIndexRef = useRef(0)
  const playbackAttemptRef = useRef(0)
  const stallTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // Two observers, mirroring VideoPlayer. Mount latch: media mounts 200px
    // ahead of scroll so posters are ready. Playback gate: no margin and a
    // ~35% threshold — one shared 200px-margin observer would flip isInView
    // (and start MP4 fetch/decode) while the carousel is still off-screen.
    const mountObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearView(true)
          mountObserver.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    const playObserver = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 }
    )
    mountObserver.observe(el)
    playObserver.observe(el)
    return () => {
      mountObserver.disconnect()
      playObserver.disconnect()
    }
  }, [])


  const isAutoAdvanceEnabled =
    !prefersReducedMotion &&
    !isManuallyPaused &&
    !isFocusPaused &&
    isInView &&
    isPageVisible
  const activePlaybackAllowed = isInView && isPageVisible && !prefersReducedMotion && !isManuallyPaused
  const playbackBlocked = blockedIndex === currentIndex

  const next = useCallback(() => {
    playbackAttemptRef.current++
    currentIndexRef.current = (currentIndexRef.current + 1) % items.length
    setCurrentIndex(currentIndexRef.current)
  }, [items.length])

  const prev = useCallback(() => {
    playbackAttemptRef.current++
    currentIndexRef.current = (currentIndexRef.current - 1 + items.length) % items.length
    setCurrentIndex(currentIndexRef.current)
  }, [items.length])

  // Auto-advance only when nothing is suppressing it. Video slides advance
  // when playback finishes (onEnded) so a reel is never cut off mid-play; the
  // timer only drives image slides and video slides that refused or failed to
  // play (poster held, `ended` would never fire).
  const activeItemType = items[currentIndex]?.type
  useEffect(() => {
    if (!isAutoAdvanceEnabled) return
    if (activeItemType === 'video' && !playbackBlocked) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoAdvanceEnabled, activeItemType, playbackBlocked, next])

  // Pause non-active videos, play active — but only while the carousel is
  // actually on screen and the tab is visible.
  useEffect(() => {
    currentIndexRef.current = currentIndex
    const attempt = ++playbackAttemptRef.current
    if (stallTimerRef.current) clearTimeout(stallTimerRef.current)
    videoRefs.current.forEach((video, index) => {
      // The ref callback never set()s null, but guard against a stale entry
      // if that invariant ever changes.
      if (!video) return
      if (index === currentIndex && activePlaybackAllowed) {
        // iOS only honours muted inline autoplay when the element is muted
        // before play() — set it imperatively, the attribute alone can race.
        video.defaultMuted = true
        video.muted = true
        if (video.ended) video.currentTime = 0
        // Promise resolution only means the request was accepted. WebKit can
        // still pause or stall before rendering frames, so onPlaying clears
        // the fallback state and this deadline catches a stuck start.
        stallTimerRef.current = setTimeout(() => {
          if (attempt === playbackAttemptRef.current && currentIndexRef.current === index) {
            setBlockedIndex(index)
          }
        }, 8000)
        void video.play().catch(() => {
          if (attempt === playbackAttemptRef.current && currentIndexRef.current === index) {
            setBlockedIndex(index)
          }
        })
      } else {
        video.pause()
      }
    })
    // isNearView is a dep so the first play() attempt happens as soon as the
    // active slide's <video> mounts, not only on slide change.
    return () => {
      if (stallTimerRef.current) clearTimeout(stallTimerRef.current)
    }
  }, [currentIndex, isNearView, activePlaybackAllowed])

  const retryActiveVideo = (index: number) => {
    if (index !== currentIndex || !activePlaybackAllowed) return
    const video = videoRefs.current.get(index)
    if (!video) return
    const attempt = ++playbackAttemptRef.current
    video.defaultMuted = true
    video.muted = true
    if (video.error) video.load()
    else if (!video.paused) video.pause()
    if (video.ended) video.currentTime = 0
    // Called directly from the button click so Safari retains the gesture.
    void video.play().catch(() => {
      if (attempt === playbackAttemptRef.current && currentIndexRef.current === index) {
        setBlockedIndex(index)
      }
    })
  }

  return (
    <div
      ref={containerRef}
      className={`media-carousel ${className}`}
      onFocusCapture={() => setIsFocusPaused(true)}
      onBlurCapture={(e) => {
        // Only resume when focus actually leaves the carousel subtree, not when
        // it moves between the arrows/dots inside it.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocusPaused(false)
        }
      }}
    >
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative w-[340px] h-[600px] tablet:w-[300px] tablet:h-[530px] mobile:w-[260px] mobile:h-[460px] rounded-card overflow-hidden bg-black/5">
          {items.map((item, index) => {
            const isActive = index === currentIndex
            const isPrev = index === (currentIndex - 1 + items.length) % items.length
            const isNext = index === (currentIndex + 1) % items.length
            // Only the active video receives a source; adjacent slides retain
            // lightweight poster shells until selected.
            const shouldLoad = isNearView && isActive

            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateX(0) scale(1)'
                    : isPrev
                    ? 'translateX(-100%) scale(0.9)'
                    : isNext
                    ? 'translateX(100%) scale(0.9)'
                    : 'translateX(0) scale(0.8)',
                  zIndex: isActive ? 10 : 0,
                }}
              >
                {item.type === 'video' ? (
                  shouldLoad ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          el.defaultMuted = true
                          videoRefs.current.set(index, el)
                        } else {
                          videoRefs.current.delete(index)
                        }
                      }}
                      src={item.src}
                      poster={item.poster}
                      // No autoplay attribute: it would make the browser
                      // start fetching the MP4 at mount (200px early, even
                      // off-screen) despite preload="none". The play/pause
                      // effect above drives playback imperatively instead.
                      muted
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                      onPlaying={() => {
                        if (index !== currentIndexRef.current) return
                        if (stallTimerRef.current) clearTimeout(stallTimerRef.current)
                        stallTimerRef.current = null
                        setBlockedIndex(null)
                      }}
                      onWaiting={() => {
                        if (index !== currentIndexRef.current || !activePlaybackAllowed || stallTimerRef.current) return
                        const attempt = playbackAttemptRef.current
                        stallTimerRef.current = setTimeout(() => {
                          if (attempt === playbackAttemptRef.current && currentIndexRef.current === index) {
                            setBlockedIndex(index)
                          }
                        }, 8000)
                      }}
                      onPause={(e) => {
                        if (index === currentIndexRef.current && activePlaybackAllowed && !e.currentTarget.ended) {
                          setBlockedIndex(index)
                        }
                      }}
                      onError={() => {
                        if (index === currentIndexRef.current && activePlaybackAllowed) setBlockedIndex(index)
                      }}
                      onEnded={(e) => {
                        if (index !== currentIndexRef.current) return
                        // With a single item next() would be a state no-op and
                        // nothing would restart playback — loop in place then.
                        if (isAutoAdvanceEnabled && items.length > 1) {
                          next()
                        } else if (activePlaybackAllowed) {
                          // Focus pauses advancement, not video. Explicit
                          // Pause/reduced motion/hidden tabs never restart it.
                          const video = e.currentTarget
                          video.currentTime = 0
                          const attempt = ++playbackAttemptRef.current
                          void video.play().catch(() => {
                            if (attempt === playbackAttemptRef.current && currentIndexRef.current === index) {
                              setBlockedIndex(index)
                            }
                          })
                        }
                        // Off-screen/hidden tab: leave it ended — the play
                        // effect restarts it when the carousel returns.
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-black/10" />
                  )
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt || `CA Agency influencer campaign content, slide ${index + 1} of ${items.length}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                    loading="lazy"
                  />
                )}
                {item.type === 'video' && isActive && playbackBlocked && activePlaybackAllowed && (
                  <button
                    type="button"
                    onClick={(event) => {
                      retryActiveVideo(index)
                      if (event.detail > 0) event.currentTarget.blur()
                    }}
                    className="absolute left-1/2 top-1/2 z-20 min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/75 px-4 text-sm font-medium text-white backdrop-blur-sm hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={labels.playVideo}
                  >
                    {labels.play}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Navigation arrows: thin minimal chevrons, 44px tap target (R4) */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center text-white/75 hover:text-white transition-colors z-20"
          aria-label={labels.previous}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center text-white/75 hover:text-white transition-colors z-20"
          aria-label={labels.next}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Pagination dots + pause toggle */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {!prefersReducedMotion && (
            <button
              onClick={() => setIsManuallyPaused((p) => !p)}
              aria-label={isManuallyPaused ? labels.playCarousel : labels.pauseCarousel}
              className="w-6 h-6 flex items-center justify-center rounded-full text-black/60 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black me-1"
            >
              {isManuallyPaused ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              )}
            </button>
          )}
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index === currentIndexRef.current) return
                playbackAttemptRef.current++
                currentIndexRef.current = index
                setCurrentIndex(index)
              }}
              className="w-6 h-6 flex items-center justify-center"
              aria-label={labels.goToSlide.replace('{number}', String(index + 1))}
              aria-current={index === currentIndex ? 'true' : undefined}
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-foreground-primary'
                    : 'w-2 h-2 bg-black/25 hover:bg-black/40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
