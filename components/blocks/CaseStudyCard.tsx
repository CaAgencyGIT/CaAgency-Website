import Image from 'next/image'
import Link from 'next/link'
import { caseStudyStill, type CaseStudy } from '@/lib/data/case-studies'
import CaseStudyCardVideo from './CaseStudyCardVideo'

// Case study card with the campaign's vertical video still shown whole, as a
// small portrait thumbnail beside the text, instead of a cropped wide banner.
// `playVideo` loops the campaign film in the thumbnail (related case studies).
export default function CaseStudyCard({
  study,
  showSummary = false,
  playVideo = false,
}: {
  study: CaseStudy
  showSummary?: boolean
  playVideo?: boolean
}) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="hover-lift group flex h-full items-stretch gap-5 overflow-hidden rounded-card border border-black/10 bg-background-base p-3 shadow-e1 transition-shadow hover:shadow-e3"
    >
      <div className="relative aspect-[9/16] w-[34%] max-w-[150px] shrink-0 self-start overflow-hidden rounded-[12px] bg-background-soft">
        <Image
          src={caseStudyStill(study)}
          alt={`${study.brand} campaign video still`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="150px"
        />
        {playVideo && study.videoSrc && <CaseStudyCardVideo src={study.videoSrc} />}
      </div>
      <div className="flex min-w-0 grow flex-col py-3 pe-3">
        <span className="mb-2 block font-jost text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-gray">
          {study.vertical}
        </span>
        <p className="font-anegra text-[22px] font-semibold leading-tight text-foreground-primary transition-colors group-hover:text-foreground-subtle">
          {study.brand}
        </p>
        {showSummary && (
          <p className="mt-3 font-work-sans text-[13.5px] leading-[1.65] text-foreground-body line-clamp-4">{study.summary}</p>
        )}
        <span className="mt-auto pt-4 font-work-sans text-[13px] font-medium text-foreground-primary">
          View case study <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
