'use client'

import { useEffect, useRef } from 'react'

export type Campaign = { brand: string; talent: string; title: string; video: string; poster: string; href: string; aria: string; videoLabel: string }

// "Talent, in action." films (Nov 2026, Agency Index): three campaign videos
// that play inline, muted and looping, with no controls or play buttons.
// The sharp poster image sits underneath until the first frame plays.
// Playback runs only while the strip is on screen and the tab is visible;
// it is retried on canplay, back/forward restore, tab return and the first
// pointer/key interaction (for browsers that refuse an unprompted muted
// play). Rejections are caught; nothing is retried on a timer. Browsers or
// OS settings that block autoplay (e.g. iOS Low Power Mode) keep the poster.
export default function CampaignStrip({ campaigns }: { campaigns: Campaign[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const videos = Array.from(root.querySelectorAll('video'))
    const inView = new WeakMap<HTMLVideoElement, boolean>()
    // Loading (Nov 2026): the films are not downloaded on first paint. Once
    // the page has finished loading (and the browser is idle), a film within
    // about one screen of the viewport gets its src with preload="auto", so
    // it is buffered before the user reaches the strip. A film that is
    // actually on screen is attached at once, load event or not. Attaching
    // never starts playback by itself: play() runs only from sync(), while the
    // film is on screen and the tab is visible. Save-Data skips the
    // look-ahead. The poster (first frame of the same encode) covers the start.
    const nearView = new WeakMap<HTMLVideoElement, boolean>()
    let lookAhead = false
    const attach = (video: HTMLVideoElement) => {
      if (!video.getAttribute('src') && video.dataset.src) {
        // Playback is driven by sync(); without this, autoplay would start a
        // film that was attached ahead of time while it is still off screen.
        if (!inView.get(video)) video.autoplay = false
        video.preload = 'auto'
        video.src = video.dataset.src
        video.load()
      }
    }
    const attachNear = () => {
      if (!lookAhead) return
      for (const video of videos) if (nearView.get(video)) attach(video)
    }
    const sync = () => {
      for (const video of videos) {
        if (!document.hidden && inView.get(video)) {
          attach(video)
          if (video.paused) video.play().catch(() => {})
        } else if (!video.paused) {
          video.pause()
        }
      }
    }
    for (const video of videos) {
      // React does not write the muted attribute; iOS needs it to autoplay.
      video.muted = true
      video.defaultMuted = true
      video.setAttribute('muted', '')
      video.addEventListener('canplay', sync)
      video.addEventListener('playing', () => video.closest('.campaign-card')?.setAttribute('data-playing', ''))
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) inView.set(entry.target as HTMLVideoElement, entry.isIntersecting)
        sync()
      },
      { threshold: 0.05 }
    )
    videos.forEach((video) => observer.observe(video))
    const nearObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) nearView.set(entry.target as HTMLVideoElement, entry.isIntersecting)
        attachNear()
      },
      { rootMargin: '100% 0px' }
    )
    videos.forEach((video) => nearObserver.observe(video))
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const startLookAhead = () => {
      lookAhead = true
      attachNear()
    }
    const onLoad = () => {
      if (typeof window.requestIdleCallback === 'function') idleId = window.requestIdleCallback(startLookAhead, { timeout: 2000 })
      else timeoutId = setTimeout(startLookAhead, 200)
    }
    if (!saveData) {
      if (document.readyState === 'complete') onLoad()
      else window.addEventListener('load', onLoad, { once: true })
    }
    const onInteract = () => sync()
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('pageshow', sync)
    document.addEventListener('pointerdown', onInteract, { once: true, passive: true })
    document.addEventListener('keydown', onInteract, { once: true })
    window.addEventListener('orientationchange', sync)
    return () => {
      observer.disconnect()
      nearObserver.disconnect()
      window.removeEventListener('load', onLoad)
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      if (timeoutId !== undefined) clearTimeout(timeoutId)
      videos.forEach((video) => video.removeEventListener('canplay', sync))
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('pageshow', sync)
      document.removeEventListener('pointerdown', onInteract)
      document.removeEventListener('keydown', onInteract)
      window.removeEventListener('orientationchange', sync)
    }
  }, [])

  return (
    <div className="campaign-strip" id="campaigns" ref={ref}>
      {campaigns.map((c) => (
        <a key={c.video} className="campaign-card" href={c.href} aria-label={c.aria}>
          {/* Poster: the film's own first frame (540x960, ~45-70KB). Eager so it is
              decoded long before the strip is reached; low priority so it
              never competes with the first-screen portraits. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- poster shown while the film loads */}
          <img className="campaign-poster" src={c.poster} alt="" aria-hidden="true" width={540} height={960} loading="eager" fetchPriority="low" />
          <video
            data-src={c.video}
            poster={c.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
            aria-label={c.videoLabel}
          />
          <span className="campaign-caption">
            {c.brand}
            {c.talent && <small>{c.talent}</small>}
          </span>
        </a>
      ))}
    </div>
  )
}
