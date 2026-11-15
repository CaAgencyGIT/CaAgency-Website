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
    // The film is attached only once its card is on screen, so the three
    // files are not downloaded on first paint (with autoplay, browsers would
    // otherwise buffer them straight away). The sharp poster covers the start.
    const attach = (video: HTMLVideoElement) => {
      if (!video.getAttribute('src') && video.dataset.src) {
        video.src = video.dataset.src
        video.load()
      }
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
    const onInteract = () => sync()
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('pageshow', sync)
    document.addEventListener('pointerdown', onInteract, { once: true, passive: true })
    document.addEventListener('keydown', onInteract, { once: true })
    window.addEventListener('orientationchange', sync)
    return () => {
      observer.disconnect()
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
          {/* eslint-disable-next-line @next/next/no-img-element -- poster shown while the film loads */}
          <img className="campaign-poster" src={c.poster} alt="" aria-hidden="true" decoding="async" />
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
