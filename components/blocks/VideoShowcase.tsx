'use client'

import VideoPlayer from '@/components/ui/VideoPlayer'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { posterFor } from '@/lib/data/videos'
import { showcaseGridClasses, showcasePosterSizes } from '@/components/blocks/video-showcase-layout'
import ShowcaseCaption, { type ShowcaseCaptionData } from '@/components/blocks/ShowcaseCaption'

export interface VideoShowcaseProps {
  videos: Array<{ src: string; alt?: string; poster?: string; caption?: ShowcaseCaptionData }>
  columns?: 2 | 3 | 4
  /** Drop every second card a little for an editorial rhythm (desktop). */
  staggered?: boolean
}

export default function VideoShowcase({
  videos,
  columns = 4,
  staggered = false,
}: VideoShowcaseProps) {
  return (
    <div>
    <Stagger className={`grid ${showcaseGridClasses[columns]} gap-[24px] mobile:gap-[16px]`} stagger={0.08}>
      {videos.map((video, index) => {
        // On the 2-col mobile grid an odd trailing tile would sit alone in
        // the left cell; span the row and center it at sibling width instead.
        const isLoneLastOnMobile =
          columns === 3 && videos.length % 2 === 1 && index === videos.length - 1
        return (
        <StaggerItem
          key={index}
          className={`w-full hover-lift${staggered && index % 2 === 1 ? ' md:mt-14' : ''}${
            isLoneLastOnMobile
              ? ' mobile:col-span-2 mobile:w-[calc(50%-8px)] mobile:justify-self-center'
              : ''
          }`}
        >
          <VideoPlayer
            src={video.src}
            poster={video.poster ?? posterFor(video.src)}
            posterSizes={showcasePosterSizes[columns]}
            label={video.alt}
            aspectRatio="9:16"
            autoplay
            muted
            loop
            // Client decision: always autoplay, even with reduced motion on.
            ignoreReducedMotion
            // Phones: a calmer 4:5 crop so the grid doesn't fill the screen.
            className="rounded-[30px] mobile:aspect-4/5 mobile:rounded-[12px]"
          />
          {video.caption && <ShowcaseCaption caption={video.caption} />}
        </StaggerItem>
        )
      })}
    </Stagger>
    </div>
  )
}
