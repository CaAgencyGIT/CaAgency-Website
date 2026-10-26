import Image from 'next/image'
import Link from 'next/link'

export interface HomeCollageTile {
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

// Homepage collage (Oct 2026): six upright photos, the same set on every
// screen. One row on desktop, three columns on tablets and two on phones
// (see .home-collage in globals.css). Cropped by object-fit only.
export default function HomeCollage({ tiles }: { tiles: HomeCollageTile[] }) {
  return (
    <div className="home-collage">
      {tiles.map((tile, index) => (
        <div key={tile.image.src} className="home-collage-tile" style={{ ['--pos' as string]: tile.position ?? '50% 30%' }}>
          <Image
            src={tile.image.src}
            alt={tile.alt}
            fill
            priority={index < 2}
            sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 16vw"
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
