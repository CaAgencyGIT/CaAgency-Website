'use client'

import { useEffect, useRef } from 'react'

// Decorative autoplay tile: muted, looping, inline; plays only while on
// screen so off-screen tiles don't hold decoder slots.
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.15 },
    )
    observer.observe(video)
    return () => observer.disconnect()
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
      preload="metadata"
      disablePictureInPicture
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
