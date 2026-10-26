import Image from 'next/image'
import Link from 'next/link'
import HomeCollageVideo from './HomeCollageVideo'

export type HomeCollageArea = 'albina' | 'rebecca' | 'melani' | 'yassi' | 'khutjo' | 'anton' | 'dariia'

export interface HomeCollageTile {
  area: HomeCollageArea
  /** Talent name shown on the tile. */
  name: string
  alt: string
  /** Existing talent profile route, when the talent has one. */
  href?: string
  /** Still photo, or the poster of a video tile. */
  image: { src: string; width: number; height: number }
  /** Muted, looping campaign film; `hasAudio` adds a sound toggle. */
  video?: { src: string; hasAudio?: boolean }
  /** CSS object-position for the desktop grid and for phones. */
  position?: string
  mobilePosition?: string
}

const SIZES: Record<HomeCollageArea, string> = {
  albina: '(max-width: 760px) 50vw, 26vw',
  rebecca: '(max-width: 760px) 50vw, 26vw',
  melani: '(max-width: 760px) 50vw, 21vw',
  yassi: '(max-width: 760px) 50vw, 21vw',
  khutjo: '(max-width: 760px) 50vw, 21vw',
  anton: '(max-width: 760px) 50vw, 22vw',
  dariia: '(max-width: 760px) 100vw, 22vw',
}

// Homepage collage (Oct 2026 approved layout): two large tiles, a stack of
// three, then a stack of two, laid out with CSS grid areas. Original photos
// and films only, cropped by object-fit; phones get their own two-column
// arrangement (see .home-collage in globals.css).
export default function HomeCollage({ tiles }: { tiles: HomeCollageTile[] }) {
  return (
    <div className="home-collage">
      {tiles.map((tile, index) => (
        <div
          key={tile.area}
          className="home-collage-tile"
          style={{
            gridArea: tile.area,
            ['--pos' as string]: tile.position ?? '50% 30%',
            ['--pos-m' as string]: tile.mobilePosition ?? tile.position ?? '50% 30%',
          }}
        >
          <Image
            src={tile.image.src}
            alt={tile.video ? '' : tile.alt}
            aria-hidden={tile.video ? true : undefined}
            fill
            priority={index < 2}
            sizes={SIZES[tile.area]}
            className="home-collage-media"
          />
          {tile.video && (
            <HomeCollageVideo src={tile.video.src} label={tile.alt} name={tile.name} hasAudio={tile.video.hasAudio} />
          )}
          <div aria-hidden="true" className="home-collage-shade" />
          {tile.href ? (
            <Link href={tile.href} prefetch={false} className="home-collage-link">
              <span className="home-collage-label">{tile.name}</span>
            </Link>
          ) : (
            <span className="home-collage-link">
              <span className="home-collage-label">{tile.name}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
