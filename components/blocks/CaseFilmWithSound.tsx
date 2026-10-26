'use client'

import { useState } from 'react'
import VideoPlayer from '@/components/ui/VideoPlayer'

// Case-page film that keeps its sound (creator showcases, Oct 2026). It starts
// muted like every film on the site; the button turns the sound on and off.
export default function CaseFilmWithSound({ src, poster }: { src: string; poster: string }) {
  const [muted, setMuted] = useState(true)
  return (
    <div className="relative">
      <VideoPlayer
        src={src}
        poster={poster}
        posterSizes="(max-width: 767px) 62vw, 420px"
        posterPriority
        aspectRatio="9:16"
        autoplay
        muted={muted}
        loop
        ignoreReducedMotion
        className="rounded-card"
      />
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-pressed={!muted}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        className="absolute bottom-3 right-3 z-[2] flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-work-sans text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          {muted ? <path d="m23 9-6 6M17 9l6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
        </svg>
        {muted ? 'Sound on' : 'Sound off'}
      </button>
    </div>
  )
}
