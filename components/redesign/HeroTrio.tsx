import Image from 'next/image'

export interface HeroTrioCard {
  src: string
  alt: string
  name: string
  width: number
  height: number
  featured?: boolean
}

// Three named talent portraits, the featured (middle) one floated slightly
// higher. Used as the hero media for HeroTrio's light, editorial layout —
// alternative to HeroSpotlight, same heroMedia slot, either/or.
export default function HeroTrio({ cards }: { cards: HeroTrioCard[] }) {
  return (
    <div className="rd-hero-trio-cards">
      {cards.map((card, index) => (
        <figure key={card.src} className={card.featured ? 'rd-hero-trio-card rd-hero-trio-card-featured' : 'rd-hero-trio-card'}>
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            sizes="(max-width: 760px) 30vw, 220px"
            quality={85}
            priority={index < 3}
          />
          <figcaption>{card.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}
