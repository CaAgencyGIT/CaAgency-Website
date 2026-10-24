import VideoPlayer from '@/components/ui/VideoPlayer'
import type { VideoLabels } from '@/components/redesign/Film'

export interface HeroTrioCard {
  src: string
  poster: string
  alt: string
  name: string
  featured?: boolean
}

// Three named talent films, the featured (middle) one floated slightly
// higher. Used as the hero media for HeroTrio's light, editorial layout —
// alternative to HeroSpotlight, same heroMedia slot, either/or.
export default function HeroTrio({ cards, labels }: { cards: HeroTrioCard[]; labels?: VideoLabels }) {
  return (
    <div className="rd-hero-trio-cards">
      {cards.map((card) => (
        <figure key={card.src} className={card.featured ? 'rd-hero-trio-card rd-hero-trio-card-featured' : 'rd-hero-trio-card'}>
          <VideoPlayer
            src={card.src}
            poster={card.poster}
            posterSizes="(max-width: 760px) 30vw, 220px"
            posterPriority
            aspectRatio="fill"
            label={card.alt}
            labels={labels}
            ignoreReducedMotion
            neverGiveUp
            className="rounded-[18px]"
          />
          <figcaption>{card.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}
