import Image from 'next/image'
import Link from 'next/link'

export interface HomeCollageTile {
  /** Grid area in the desktop mosaic (see .home-collage in globals.css). */
  area: string
  /** Talent name, read out to screen readers (not shown on the tile). */
  name: string
  alt: string
  /** Existing talent profile route, when the talent has one. */
  href?: string
  /** Original photo or film poster; the collage has no video playback. */
  image: { src: string; width: number; height: number }
  /** CSS object-position, to keep the face framed in the upright tile. */
  position?: string
}

// Homepage collage (Oct 2026): six photos, the same set on every screen. A
// mosaic on desktop (two large photos, a stacked pair, two tall photos),
// three columns on tablets and two on phones;
// `swipe` turns the phone layout into a swipe row (About page). See
// .home-collage in globals.css. Cropped by object-fit only.
export default function HomeCollage({ tiles, swipe = false }: { tiles: HomeCollageTile[]; swipe?: boolean }) {
  return (
    <div className={swipe ? 'home-collage home-collage--swipe' : 'home-collage'}>
      {tiles.map((tile, index) => (
        <div key={tile.image.src} className="home-collage-tile" style={{ ['--pos' as string]: tile.position ?? '50% 30%', ['--area' as string]: tile.area }}>
          <Image
            src={tile.image.src}
            alt={tile.alt}
            fill
            priority={index < 3}
            quality={90}
            // Desktop tiles are up to ~26% of the screen wide (the mosaic is
            // 92vw); asking for that width keeps them sharp on Retina.
            sizes="(max-width: 760px) 50vw, (max-width: 1100px) 34vw, 26vw"
            className="home-collage-media"
          />
          {tile.href && (
            <Link href={tile.href} prefetch={false} className="home-collage-link">
              <span className="sr-only">{tile.name}</span>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
