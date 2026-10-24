import Image from 'next/image'

export interface HeroCollageImage {
  src: string
  alt: string
  width: number
  height: number
}

// A static b-roll collage: every hero image shows at once in a staggered
// column layout, no slideshow, no cycling, nothing to click through.
export default function HeroCollage({ images }: { images: HeroCollageImage[] }) {
  return (
    <div className="rd-hero-collage" aria-hidden={images.length === 0}>
      {images.map((image, index) => (
        <div key={image.src} className="rd-hero-collage-tile">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 22vw"
            quality={82}
            priority={index < 2}
            loading={index < 2 ? undefined : 'lazy'}
            className="rd-hero-collage-img"
          />
        </div>
      ))}
    </div>
  )
}
