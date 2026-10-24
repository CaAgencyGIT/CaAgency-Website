import Image from 'next/image'
import Link from 'next/link'

export interface HeroSpotlightChip {
  src: string
  alt: string
  width: number
  height: number
}

export interface HeroSpotlightProps {
  mainImage: { src: string; alt: string }
  chips: HeroSpotlightChip[]
  discoverLabel: string
  discoverHref: string
}

// Full-bleed dark portrait hero: one large talent photo with the copy
// overlaid, plus a couple of smaller chip photos bottom-right. Alternative
// to the full-collage hero (HeroCollage) — same slot, either/or.
export default function HeroSpotlight({ mainImage, chips, discoverLabel, discoverHref }: HeroSpotlightProps) {
  return (
    <div className="rd-hero-spotlight">
      <Image
        src={mainImage.src}
        alt={mainImage.alt}
        fill
        sizes="100vw"
        quality={85}
        priority
        className="rd-hero-spotlight-bg"
      />
      <div className="rd-hero-spotlight-scrim" />
      {chips.length > 0 && (
        <div className="rd-hero-spotlight-chips">
          {chips.map((chip) => (
            <div key={chip.src} className="rd-hero-spotlight-chip">
              <Image src={chip.src} alt={chip.alt} width={chip.width} height={chip.height} sizes="120px" quality={80} />
            </div>
          ))}
          <Link className="rd-hero-spotlight-discover" href={discoverHref} prefetch={false}>
            {discoverLabel}
          </Link>
        </div>
      )}
    </div>
  )
}
