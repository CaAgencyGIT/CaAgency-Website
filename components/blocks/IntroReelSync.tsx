'use client'

import { useEffect, useRef } from 'react'

// Keeps the intro showreels on one timeline. The reels share the same cut
// points (a studio-strobe flash every second), so they only flash together
// while they play in step. Nothing waits on all three being ready (iPhones
// may only buffer a reel once it plays, which left them all frozen): as soon
// as one reel plays the others are started too, and only real drift is
// corrected, rarely — seeking often makes iPhones freeze the frame.
const MAX_DRIFT = 0.5

export default function IntroReelSync() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = ref.current?.parentElement
    if (!root) return
    const videos = () => [...root.querySelectorAll('video')]

    const startOthers = () => {
      for (const v of videos()) if (v.paused) v.play().catch(() => {})
    }

    const align = () => {
      const vs = videos().filter((v) => !v.paused && !v.seeking && v.readyState > 2)
      if (vs.length < 2) return
      const master = vs[0].currentTime
      for (const v of vs.slice(1)) {
        // Measure around the loop point too, so a reel that just wrapped
        // isn't mistaken for one that drifted.
        const diff = Math.abs(v.currentTime - master)
        const drift = Number.isFinite(v.duration) ? Math.min(diff, v.duration - diff) : diff
        if (drift > MAX_DRIFT) v.currentTime = master
      }
    }

    const vs = videos()
    for (const v of vs) v.addEventListener('playing', startOthers)
    const id = window.setInterval(align, 3000)
    return () => {
      window.clearInterval(id)
      for (const v of vs) v.removeEventListener('playing', startOthers)
    }
  }, [])

  return <span ref={ref} hidden />
}
