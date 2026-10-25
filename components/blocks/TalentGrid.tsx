import TalentCard from './TalentCard'
import { talentFilmSrc } from '@/lib/data/redesign-media'
import { talentCardArt } from '@/lib/data/talent-cards'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'

interface Talent {
  slug: string
  name: string
  imageUrl: string
  instagramUrl?: string
  tiktokUrl?: string
  youtubeUrl?: string
  twitchUrl?: string
  kickUrl?: string
}

interface TalentGridProps {
  talents: Talent[]
  columns?: 2 | 4 | 5 | 6
  prioritizeFirst?: boolean
  animate?: boolean
  /** Use the finished talent card artwork (matched by slug) where available. */
  cardArt?: boolean
}

export default function TalentGrid({
  talents,
  columns = 4,
  prioritizeFirst = false,
  animate = true,
  cardArt = false,
}: TalentGridProps) {
  const gridClasses = {
    2: 'grid-cols-2 md:grid-cols-2',
    4: 'grid-cols-2 mobile-extra:grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 mobile-extra:grid-cols-2 md:grid-cols-5',
    6: 'grid-cols-2 mobile-extra:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-6',
  }
  const imageSizes = {
    2: '(max-width: 1299px) 50vw, 640px',
    4: '(max-width: 767px) 50vw, (max-width: 1299px) 25vw, 310px',
    5: '(max-width: 767px) 50vw, (max-width: 1299px) 20vw, 250px',
    6: '(max-width: 767px) 50vw, (max-width: 1024px) 33vw, (max-width: 1299px) 17vw, 200px',
  }

  const renderCard = (talent: Talent, index: number) => (
    <TalentCard
      key={talent.name}
      slug={talent.slug}
      name={talent.name}
      imageUrl={talent.imageUrl}
      videoSrc={talentFilmSrc(talent.slug)}
      artwork={cardArt ? talentCardArt[talent.slug] : undefined}
      sizes={imageSizes[columns]}
      priority={prioritizeFirst && index === 0}
      instagramUrl={talent.instagramUrl}
      tiktokUrl={talent.tiktokUrl}
      youtubeUrl={talent.youtubeUrl}
      twitchUrl={talent.twitchUrl}
      kickUrl={talent.kickUrl}
    />
  )

  if (!animate) {
    return (
      <div className={`grid ${gridClasses[columns]} gap-[20px]`}>
        {talents.map(renderCard)}
      </div>
    )
  }

  return (
    <Stagger className={`grid ${gridClasses[columns]} gap-[20px]`} stagger={0.06}>
      {talents.map((talent, index) => (
        <StaggerItem key={talent.name}>{renderCard(talent, index)}</StaggerItem>
      ))}
    </Stagger>
  )
}
