import Image, { getImageProps } from 'next/image'
import Link from 'next/link'
import { preload } from 'react-dom'
import { blurProps } from '@/lib/media/blur'
import desktopImages from '@/lib/media/collage-desktop.json'
import DeferredCollageImage from './DeferredCollageImage'

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
// .home-collage in globals.css. Desktop derivatives remove only pixels that
// object-fit already hides; phones and tablets keep the original photos.
const IMAGE_SIZES = '(max-width: 760px) 50vw, (max-width: 1100px) 34vw, 26vw'
const DESKTOP_MEDIA = '(min-width: 1101px)'

// Run during HTML parsing: on tall phones the second row is partly visible,
// and waiting for React hydration delayed those photos by ~1.2s in a slow-
// mobile comparison. Each hydrated component takes over its own observation.
const PHOTO_OBSERVER_SCRIPT = `(()=>{
  const pictures=document.currentScript.parentElement.querySelectorAll('.collage-deferred-image');
  const activate=picture=>{const source=picture.querySelector('source');if(source)source.media='not all'};
  if(!('IntersectionObserver' in window)){pictures.forEach(activate);return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    activate(entry.target);observer.unobserve(entry.target)
  }),{rootMargin:'0px'});
  pictures.forEach(picture=>{
    observer.observe(picture);
    picture.addEventListener('collage-photo-hydrated',()=>observer.unobserve(picture),{once:true})
  })
})()`

export default function HomeCollage({ tiles, swipe = false, priority = false }: {
  tiles: HomeCollageTile[]
  swipe?: boolean
  /** Enable early loading only when the collage is in the page's hero. */
  priority?: boolean
}) {
  const images = tiles.map((tile, index) => {
    const cropped = desktopImages[tile.image.src as keyof typeof desktopImages]
    const stacked = tile.area === 'yasaman' || tile.area === 'khutjo'
    const { props: desktop } = getImageProps({
      src: cropped?.src ?? tile.image.src, alt: tile.alt, fill: true, quality: 90,
      // Account for cover-cropping as well as the rendered tile width. The
      // mosaic stops growing at 1800px; extra-wide screens need no larger file.
      sizes: stacked ? '(min-width: 1957px) 310px, 16vw' : '(min-width: 1957px) 381px, 19.5vw',
    })
    if (priority) {
      const { props } = getImageProps({
        src: tile.image.src, alt: tile.alt, fill: true, quality: 90, sizes: IMAGE_SIZES,
      })
      preload(props.src, {
        as: 'image', imageSrcSet: props.srcSet, imageSizes: props.sizes,
        media: index < 2 ? '(max-width: 1100px)' : '(min-width: 761px) and (max-width: 1100px)',
        fetchPriority: index < 2 ? 'high' : 'auto',
      })
      preload(desktop.src, {
        as: 'image', imageSrcSet: desktop.srcSet, imageSizes: desktop.sizes,
        // Full-height photos can become LCP; the small stacked tiles should
        // not hold them up on a slow desktop connection.
        media: DESKTOP_MEDIA, fetchPriority: stacked ? 'low' : 'high',
      })
    }
    return { tile, desktop }
  })

  return (
    <div className={swipe ? 'home-collage home-collage--swipe' : 'home-collage'}>
      {images.map(({ tile, desktop }, index) => (
        <div key={tile.image.src} className="home-collage-tile" style={{ ['--pos' as string]: tile.position ?? '50% 30%', ['--area' as string]: tile.area }}>
          {priority && index < 2 ? <picture>
            <source media={DESKTOP_MEDIA} srcSet={desktop.srcSet} sizes={desktop.sizes} />
            <Image
              src={tile.image.src}
              alt={tile.alt}
              fill
              fetchPriority="high"
              {...blurProps(tile.image.src)}
              quality={90}
              sizes={IMAGE_SIZES}
              className="home-collage-media"
            />
          </picture> : <DeferredCollageImage
            src={tile.image.src}
            alt={tile.alt}
            sizes={IMAGE_SIZES}
            preview={blurProps(tile.image.src).blurDataURL}
            desktopHero={priority}
            desktopSource={{ srcSet: desktop.srcSet, sizes: desktop.sizes }}
          />}
          {tile.href && (
            <Link href={tile.href} prefetch={false} className="home-collage-link">
              <span className="sr-only">{tile.name}</span>
            </Link>
          )}
        </div>
      ))}
      <script dangerouslySetInnerHTML={{ __html: PHOTO_OBSERVER_SCRIPT }} />
    </div>
  )
}
