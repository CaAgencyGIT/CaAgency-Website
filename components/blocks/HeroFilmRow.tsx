import Image from 'next/image'
import CollageVideo from './CollageVideo'

export interface HeroCollageMedia {
  src: string
  alt: string
  /** Video tiles: `src` is the mp4 and `poster` the matching first-frame still. */
  video?: boolean
  poster?: string
  /** CSS object-position, to keep faces framed when the tile crops the source. */
  position?: string
}

export type HeroFilmRowItem =
  | (HeroCollageMedia & { featured?: boolean })
  | { stack: [HeroCollageMedia, HeroCollageMedia] }

function Tile({ media, priority, sizes }: { media: HeroCollageMedia; priority: boolean; sizes: string }) {
  return (
    <div className="hero-collage-tile">
      {media.video ? (
        <CollageVideo src={media.src} poster={media.poster} label={media.alt} position={media.position} />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          quality={88}
          priority={priority}
          sizes={sizes}
          style={media.position ? { objectPosition: media.position } : undefined}
        />
      )}
    </div>
  )
}

// Five-column hero collage (24:18:20:18:20), three times wider than tall on
// desktop; two columns on phones with the featured tile spanning both.
export default function HeroFilmRow({ items }: { items: HeroFilmRowItem[] }) {
  let priorityBudget = 3
  return (
    <div className="hero-collage">
      {items.map((item) => {
        if ('stack' in item) {
          return (
            <div key={item.stack[0].src} className="hero-collage-col hero-collage-stack">
              {item.stack.map((media) => (
                <Tile key={media.src} media={media} priority={priorityBudget-- > 0} sizes="(max-width: 760px) 50vw, 24vw" />
              ))}
            </div>
          )
        }
        return (
          <div key={item.src} className={`hero-collage-col${item.featured ? ' hero-collage-featured' : ''}`}>
            <Tile media={item} priority={priorityBudget-- > 0} sizes="(max-width: 760px) 100vw, 20vw" />
          </div>
        )
      })}
    </div>
  )
}
