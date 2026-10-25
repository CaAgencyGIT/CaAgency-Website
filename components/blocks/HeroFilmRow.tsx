import Image from 'next/image'

export interface HeroFilmRowImage {
  src: string
  alt: string
  width: number
  height: number
}

// A single full-width row of campaign stills, every one visible at once —
// no slideshow. Each tile keeps its own aspect ratio (fixed height, auto
// width) so nothing gets stretched or cropped to fit an arbitrary box.
// Scrolls horizontally on narrow viewports instead of squeezing.
export default function HeroFilmRow({ images }: { images: HeroFilmRowImage[] }) {
  return (
    <div className="hero-film-row">
      {images.map((image, index) => (
        <div key={image.src} className="hero-film-row-tile">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            quality={85}
            priority={index < 3}
            loading={index < 3 ? undefined : 'lazy'}
            sizes="(max-width: 760px) 60vw, 30vw"
          />
        </div>
      ))}
    </div>
  )
}
