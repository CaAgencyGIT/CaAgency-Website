'use client'

import { useEffect, useRef } from 'react'

// Keeps the intro showreels on one timeline. The reels share the same cut
// points (a studio-strobe flash every second), so they only flash together
// while they play in step: once all are ready they restart together. Small
// drift is left alone: iPhones report currentTime coarsely, and seeking on
// every tick made the reels freeze there. Only real drift is corrected.
const MAX_DRIFT = 0.35

export default function IntroReelSync() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = ref.current?.parentElement
    if (!root) return
    const videos = () => [...root.querySelectorAll('video')]
    let started = false

    const startTogether = () => {
      const vs = videos()
      if (started || vs.length < 2 || vs.some((v) => v.readyState < 3)) return
      started = true
      for (const v of vs) v.currentTime = 0
      for (const v of vs) v.play().catch(() => {})
    }

    const align = () => {
      const vs = videos().filter((v) => !v.paused && v.readyState > 2)
      if (vs.length < 2) return
      const master = vs[0].currentTime
      for (const v of vs.slice(1)) {
        if (!v.seeking && Math.abs(v.currentTime - master) > MAX_DRIFT) v.currentTime = master
      }
    }

    const vs = videos()
    for (const v of vs) {
      v.addEventListener('canplay', startTogether)
    }
    startTogether()
    const id = window.setInterval(align, 2000)
    return () => {
      window.clearInterval(id)
      for (const v of vs) {
        v.removeEventListener('canplay', startTogether)
      }
    }
  }, [])

  return <span ref={ref} hidden />
}
