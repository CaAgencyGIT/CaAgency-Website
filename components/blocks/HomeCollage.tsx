import Image from 'next/image'
import Link from 'next/link'

export type HomeCollageArea = 'albina' | 'rebecca' | 'melani' | 'yassi' | 'khutjo' | 'anton' | 'dariia'

export interface HomeCollageTile {
  area: HomeCollageArea
  /** Talent name shown on the tile. */
  name: string
  alt: string
  /** Existing talent profile route, when the talent has one. */
  href?: string
  /** Original photo or film poster; the collage has no video playback. */
  image: { src: string; width: number; height: number }
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
// three, then a stack of two, laid out with CSS grid areas. Seven still
// photos (originals and film posters), cropped by object-fit only; phones
// get their own two-column arrangement (see .home-collage in globals.css).
export default function HomeCollage({ tiles }: { tiles: HomeCollageTile[] }) {
  return (
    <div className="home-collage">
      {tiles.map((tile, index) => (
        <div
          key={tile.area}
          className="home-collage-tile"
          data-area={tile.area}
          style={{
            gridArea: tile.area,
            ['--pos' as string]: tile.position ?? '50% 30%',
            ['--pos-m' as string]: tile.mobilePosition ?? tile.position ?? '50% 30%',
          }}
        >
          <Image
            src={tile.image.src}
            alt={tile.alt}
            fill
            priority={index < 2}
            sizes={SIZES[tile.area]}
            className="home-collage-media"
          />
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
