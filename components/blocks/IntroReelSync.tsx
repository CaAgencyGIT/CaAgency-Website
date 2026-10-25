'use client'

import { useEffect, useRef } from 'react'

// Keeps the intro showreels on one timeline: the reels are cut so the same
// creator never appears twice side by side, which only holds while they play
// in step. Nudges the other reels to the first one when they drift.
export default function IntroReelSync() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = ref.current?.parentElement
    if (!root) return
    const id = window.setInterval(() => {
      const videos = [...root.querySelectorAll('video')].filter((v) => !v.paused && v.readyState > 2)
      if (videos.length < 2) return
      const master = videos[0].currentTime
      for (const v of videos.slice(1)) {
        if (Math.abs(v.currentTime - master) > 0.12) v.currentTime = master
      }
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return <span ref={ref} hidden />
}
