import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { filmLabel, filmSrc, type FilmKey } from '@/lib/data/redesign-media'
import { posterFor } from '@/lib/data/videos'

export type VideoLabels = { play: string; pause: string; playVideo: string; pauseVideo: string }

// A creator film in a rounded frame: poster first, the muted loop mounts near
// the viewport and pauses off-screen (VideoPlayer). Reduced motion keeps the
// poster with a Play control.
export default function Film({
  film,
  sizes,
  priority = false,
  labels,
  caption,
  className,
}: {
  film: FilmKey
  sizes: string
  priority?: boolean
  labels?: VideoLabels
  caption?: ReactNode
  className?: string
}) {
  const src = filmSrc(film)
  return (
    <figure className={clsx('rd-film', className)}>
      <div className="rd-film-frame">
        <VideoPlayer
          src={src}
          poster={posterFor(src)}
          posterSizes={sizes}
          posterPriority={priority}
          posterQuality={75}
          aspectRatio="fill"
          label={filmLabel(film)}
          labels={labels}
          className="rounded-none"
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
