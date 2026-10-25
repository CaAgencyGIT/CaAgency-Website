import Link from 'next/link'

export interface ShowcaseCaptionData {
  kicker: string
  title: string
  href: string
}

// Caption under a Featured Work video: creator as a small label, campaign in
// Anegra, linking to its case study (or the Work page).
export default function ShowcaseCaption({ caption }: { caption: ShowcaseCaptionData }) {
  return (
    <Link href={caption.href} prefetch={false} className="group mt-4 block mobile:mt-3">
      <span className="block font-jost text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-gray mobile:text-[10px]">
        {caption.kicker}
      </span>
      <span className="mt-1 inline-flex items-baseline gap-2 font-anegra text-[21px] leading-tight text-foreground-primary mobile:text-[17px]">
        {caption.title}
        <span aria-hidden="true" className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  )
}
