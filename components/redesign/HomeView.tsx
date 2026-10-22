import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Film, { type VideoLabels } from '@/components/redesign/Film'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import { films, filmSrc, type FilmKey } from '@/lib/data/redesign-media'
import { brandLogos } from '@/lib/data/brands'
import { posterFor } from '@/lib/data/videos'
import { localizeHref } from '@/lib/i18n/client-paths'

type Cta = { label: string; href: string }

export interface HomeViewProps {
  locale: string
  labels: VideoLabels
  heading: string
  title: string
  titleSecondLine?: string
  subtitle: string
  // Existing slideshows: the hero image coverflow and the intro media carousel.
  heroMedia: ReactNode
  introMedia: ReactNode
  primaryCta: Cta
  secondaryCta: Cta
  trust: string
  featuredWork: { eyebrow: string; title: string; description: string; button: Cta }
  intro: { eyebrow: string; title: string; paragraphs: string[]; button: Cta }
  talentsSection: ReactNode
  services?: {
    eyebrow: string
    title: string
    subtitle: string
    items: Array<{ title: string; description: string; href: string }>
    exploreLabel: string
    button: Cta
  }
  departments?: ReactNode
  faq: ReactNode
  cta: { title: string; text: string; button: Cta }
}

const featuredFilms: FilmKey[] = [
  'albina-medicube', 'melani-skin1004', 'beatrix-gisou',
  'khutjo-anua-original', 'georgii-anua', 'melly-fenty-original',
]
const serviceStills: FilmKey[] = ['dariia-glowrecipe', 'melani-dalba', 'georgii-purito', 'beatrix-patrickta', 'skincare']

export default function HomeView(props: HomeViewProps) {
  const { locale, labels } = props
  const href = (path: string) => localizeHref(path, locale)

  return (
    <>
      <div className="rd">
        <section className="rd-section rd-home-hero">
          <div className="rd-hero-copy">
            <h1 className="sr-only">{props.heading}</h1>
            <div className="rd-hero-brand">{props.title}</div>
            {props.titleSecondLine && <p className="rd-hero-sub">{props.titleSecondLine}</p>}
            <p>{props.subtitle}</p>
            <div className="rd-actions">
              <Link className="rd-pill" href={href(props.primaryCta.href)} prefetch={false}>
                {props.primaryCta.label}
              </Link>
              <Link className="rd-text-link" href={href(props.secondaryCta.href)} prefetch={false}>
                {props.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="min-w-0">{props.heroMedia}</div>
        </section>

        <section className="rd-section rd-trust">
          <p>{props.trust}</p>
        </section>
        <BrandCarousel images={brandLogos} />

        <section className="rd-section rd-home-work">
          <div className="rd-section-heading">
            <div>
              <p className="rd-eyebrow">{props.featuredWork.eyebrow}</p>
              <h2>{props.featuredWork.title}</h2>
            </div>
            <Link className="rd-text-link" href={href(props.featuredWork.button.href)} prefetch={false}>
              {props.featuredWork.button.label}
            </Link>
          </div>
          <div className="rd-feature-grid">
            {featuredFilms.map((film) => (
              <Film
                key={film}
                film={film}
                sizes="(max-width: 760px) 50vw, 30vw"
                labels={labels}
                caption={
                  <>
                    <Link href={`/talents/${films[film].talentSlug}`} prefetch={false}>
                      {films[film].creator}
                    </Link>
                    <a href={films[film].sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${films[film].creator} on Instagram`}>
                      ↗
                    </a>
                  </>
                }
              />
            ))}
          </div>
          <p className="rd-lead-after">{props.featuredWork.description}</p>
        </section>

        <section className="rd-section rd-split">
          <div className="flex min-w-0 justify-center">{props.introMedia}</div>
          <div className="rd-copy">
            <p className="rd-eyebrow">{props.intro.eyebrow}</p>
            <h2>{props.intro.title}</h2>
            {props.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="rd-pill" href={href(props.intro.button.href)} prefetch={false}>
              {props.intro.button.label}
            </Link>
          </div>
        </section>
      </div>

      {/* Meet the Talents keeps the live layout (client request). */}
      {props.talentsSection}

      <div className="rd">
        {props.services && (
          <section className="rd-section">
            <div className="rd-section-heading">
              <div>
                <p className="rd-eyebrow">{props.services.eyebrow}</p>
                <h2>{props.services.title}</h2>
              </div>
              <Link className="rd-text-link" href={href(props.services.button.href)} prefetch={false}>
                {props.services.button.label}
              </Link>
            </div>
            <p className="max-w-[700px]">{props.services.subtitle}</p>
            <div className="rd-services-mini">
              {props.services.items.map((service, index) => {
                const still = serviceStills[index]
                return (
                  <article key={service.title} className="rd-service-mini">
                    {still && (
                      <Link href={service.href} prefetch={false} tabIndex={-1} aria-hidden="true" className="rd-service-mini-image block">
                        <Image
                          src={posterFor(filmSrc(still))}
                          alt=""
                          fill
                          quality={60}
                          loading="lazy"
                          sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 18vw"
                          className="object-cover"
                        />
                      </Link>
                    )}
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="rd-text-link" href={service.href} prefetch={false}>
                      {props.services!.exploreLabel} →
                    </Link>
                  </article>
                )
              })}
            </div>
          </section>
        )}

        {props.departments}
        {props.faq}

        <section className="rd-cta">
          <h2>{props.cta.title}</h2>
          <p>{props.cta.text}</p>
          <div className="rd-actions">
            <Link className="rd-pill" href={href(props.cta.button.href)} prefetch={false}>
              {props.cta.button.label}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
