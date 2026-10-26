import Image from 'next/image'
import { posterFor } from '@/lib/data/videos'
import type { VideoShowcaseProps } from '@/components/blocks/VideoShowcase'
import { showcaseGridClasses, showcasePosterSizes } from '@/components/blocks/video-showcase-layout'
import ShowcaseCaption from '@/components/blocks/ShowcaseCaption'

export default function VideoShowcaseFallback({
  videos,
  columns = 4,
  staggered = false,
}: VideoShowcaseProps) {
  return (
    <div className={`grid ${showcaseGridClasses[columns]} gap-[24px] mobile:gap-[16px]`}>
      {videos.map((video, index) => {
        const isLoneLastOnMobile =
          columns === 3 && videos.length % 2 === 1 && index === videos.length - 1
        return (
          <div
            key={video.src}
            className={`w-full${staggered && index % 2 === 1 ? ' md:mt-14' : ''}${
              isLoneLastOnMobile
                ? ' mobile:col-span-2 mobile:w-[calc(50%-8px)] mobile:justify-self-center'
                : ''
            }`}
          >
            <div className="relative aspect-9/16 overflow-hidden rounded-[30px] bg-black/10">
              <Image
                src={video.poster ?? posterFor(video.src)}
                alt={video.alt ?? ''}
                fill
                quality={60}
                loading="lazy"
                sizes={showcasePosterSizes[columns]}
                className="object-cover"
              />
            </div>
            {video.caption && <ShowcaseCaption caption={video.caption} />}
          </div>
        )
      })}
    </div>
  )
}
