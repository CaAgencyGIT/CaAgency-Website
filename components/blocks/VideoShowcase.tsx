'use client'

import VideoPlayer from '@/components/ui/VideoPlayer'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { posterFor } from '@/lib/data/videos'
import { showcaseGridClasses, showcasePosterSizes } from '@/components/blocks/video-showcase-layout'

export interface VideoShowcaseProps {
  videos: Array<{ src: string; alt?: string; poster?: string }>
  columns?: 2 | 3 | 4
}

export default function VideoShowcase({
  videos,
  columns = 4,
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
          className={`w-full hover-lift${
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
          />
        </StaggerItem>
        )
      })}
    </Stagger>
    </div>
  )
}
