import Link from 'next/link'

export interface ShowcaseCaptionData {
  title: string
  href: string
}

// Caption under a Featured Work video: the campaign in Anegra, linking to its
// case study (or the Work page).
export default function ShowcaseCaption({ caption }: { caption: ShowcaseCaptionData }) {
  return (
    <Link href={caption.href} prefetch={false} className="group mt-4 block mobile:mt-3">
      <span className="inline-flex items-baseline gap-2 font-anegra text-[21px] leading-tight text-foreground-primary mobile:text-[17px]">
        {caption.title}
        <span aria-hidden="true" className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  )
}
