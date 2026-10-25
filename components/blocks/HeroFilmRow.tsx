import Image from 'next/image'

export interface HeroFilmRowImage {
  src: string
  alt: string
  width: number
  height: number
}

export type HeroFilmRowItem = HeroFilmRowImage | { stack: [HeroFilmRowImage, HeroFilmRowImage] }

// A single full-width row of campaign stills, every one visible at once —
// no slideshow. Each tile keeps its own aspect ratio (fixed height, auto
// width) so nothing gets stretched or cropped to fit an arbitrary box.
// An item can also be a vertical stack of two half-height images in one
// column. Scrolls horizontally on narrow viewports instead of squeezing.
export default function HeroFilmRow({ items }: { items: HeroFilmRowItem[] }) {
  let priorityBudget = 3
  return (
    <div className="hero-film-row">
      {items.map((item) => {
        if ('stack' in item) {
          return (
            <div key={item.stack[0].src} className="hero-film-row-tile hero-film-row-stack">
              {item.stack.map((image) => {
                const priority = priorityBudget-- > 0
                return (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={85}
                    priority={priority}
                    loading={priority ? undefined : 'lazy'}
                    sizes="(max-width: 760px) 60vw, 30vw"
                  />
                )
              })}
            </div>
          )
        }
        const priority = priorityBudget-- > 0
        return (
          <div key={item.src} className="hero-film-row-tile">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              quality={85}
              priority={priority}
              loading={priority ? undefined : 'lazy'}
              sizes="(max-width: 760px) 60vw, 30vw"
            />
          </div>
        )
      })}
    </div>
  )
}
