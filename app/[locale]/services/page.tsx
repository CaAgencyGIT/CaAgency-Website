import Link from 'next/link'
import { Metadata } from 'next'
import { clsx } from 'clsx'
import { getTranslations } from 'next-intl/server'
import Film from '@/components/redesign/Film'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import type { FilmKey } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/services',
    keywords: [
      'influencer marketing services',
      'talent management',
      'brand partnerships',
      'content creation agency',
      'social media campaigns',
      'influencer campaigns Dubai',
    ],
    imageAlt: 'CA Agency Services',
  })
}

// July 2026 round 3: five services matching the homepage service squares
// one-to-one, each linking to its /services/<slug> subpage. Imagery is served
// locally — crisp stills pulled from the current homepage campaign reels.
// Service schema for SEO
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Influencer Campaigns',
        description: 'Strategic brand-creator partnerships across Instagram, TikTok, and YouTube — from creator matching and briefing to rights, approvals, and reporting.',
        provider: organizationRef,
        areaServed: 'Worldwide',
        url: 'https://caagency.com/services/influencer-campaigns',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Full-Service Talent Management',
        description: 'End-to-end representation for creators, from paid collaborations and exclusive partnerships to long-term career growth.',
        provider: organizationRef,
        areaServed: 'Worldwide',
        url: 'https://caagency.com/services/talent-management',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Content Creation & Production',
        description: 'Scroll-stopping branded content, concepted, shot, and edited in-house to engage audiences and elevate brand visibility.',
        provider: organizationRef,
        areaServed: 'Worldwide',
        url: 'https://caagency.com/services/content-production',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Performance Marketing',
        description: 'Data-driven amplification of creator content with measurable ROI, from brand awareness to qualified traffic and conversions.',
        provider: organizationRef,
        areaServed: 'Worldwide',
        url: 'https://caagency.com/services/performance-marketing',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Brand Marketing Management & Consultancy',
        description: 'Strategic guidance for beauty, skincare, and lifestyle brands, from positioning and launch planning to always-on brand management.',
        provider: organizationRef,
        areaServed: 'Worldwide',
        url: 'https://caagency.com/services/brand-consultancy',
      },
    },
  ],
}

const services: Array<{ number: number; key: ServiceKey; slug: string; films: [FilmKey, FilmKey] }> = [
  { number: 1, key: 'influencerCampaigns', slug: 'influencer-campaigns', films: ['albina-sephora', 'georgii-anua'] },
  { number: 2, key: 'talentManagement', slug: 'talent-management', films: ['melani-skin1004', 'khutjo-anua-original'] },
  { number: 3, key: 'contentProduction', slug: 'content-production', films: ['dariia-armani', 'beatrix-gisou'] },
  { number: 4, key: 'performanceMarketing', slug: 'performance-marketing', films: ['anton-skin1004', 'jay-mixsoon'] },
  { number: 5, key: 'brandConsultancy', slug: 'brand-consultancy', films: ['dariia-ysl', 'melly-fenty'] },
]
const heroFilms: FilmKey[] = ['albina-medicube', 'melani-skin1004', 'beatrix-gisou']
const closingFilms: FilmKey[] = ['skincare', 'beatrix-medicube', 'haircare']

type ServiceKey = 'influencerCampaigns' | 'talentManagement' | 'contentProduction' | 'performanceMarketing' | 'brandConsultancy'

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const labels = { play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }
  const href = (path: string) => localizeHref(path, locale)

  return (
    <div className="rd">
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>

      <section className="rd-section rd-page-hero items-center">
        <div>
          <h1>{t('servicesAtCA')}</h1>
          <p className="rd-hero-sub">Influence • Digital • Marketing</p>
        </div>
        <div className="rd-hero-description">
          <p>{t('subheading')}</p>
          <div className="rd-three-wall rd-hero-trio">
            {heroFilms.map((film, index) => (
              <Film key={film} film={film} priority={index === 0} sizes="(max-width: 760px) 33vw, 145px" labels={labels} />
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-services-intro">
        <h2>{t('topNotch')}</h2>
        <div>
          <p>
            <strong>{t('introLead')}</strong>
          </p>
          <p>{t('introBody')}</p>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.slug} className={clsx('rd-section rd-service-row', index % 2 === 1 && 'rd-flip')}>
          <div className="rd-copy">
            <h3>
              {service.number}. {t(`${service.key}.title`)}
            </h3>
            <p>
              <strong>{t(`${service.key}.highlight`)}</strong>
            </p>
            <p>{t(`${service.key}.description`)}</p>
            {/* Service detail pages are English-only (site) routes. */}
            <Link className="rd-text-link" href={`/services/${service.slug}`} prefetch={false} aria-label={t(`${service.key}.title`)}>
              {t('exploreService')} →
            </Link>
          </div>
          <div className="rd-duo">
            {service.films.map((film) => (
              <Film key={film} film={film} sizes="(max-width: 760px) 50vw, 22vw" labels={labels} />
            ))}
          </div>
        </section>
      ))}

      <section className="rd-section rd-service-contact">
        <Link href={href('/contact')} prefetch={false}>
          <span>{t('ctaTitle')}</span>
          <span>{t('ctaText')}</span>
          <span>
            {tCommon('contactUs')} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>

      <section className="rd-section rd-closing">
        <div className="rd-three-wall">
          {closingFilms.map((film) => (
            <Film key={film} film={film} sizes="(max-width: 760px) 33vw, 15vw" labels={labels} />
          ))}
        </div>
        <div className="rd-copy">
          <p>{t('closingLead')}</p>
          <p>
            <strong>{t('closingBody')}</strong>
          </p>
        </div>
      </section>

      <section className="rd-cta">
        <h2>{t('ctaTitle')}</h2>
        <p>{t('ctaText')}</p>
        <div className="rd-actions">
          <Link className="rd-pill" href={href('/contact')} prefetch={false}>{tCommon('contactUs')}</Link>
          <Link className="rd-pill" href={href('/work')} prefetch={false}>{tCommon('viewOurWork')}</Link>
          <Link className="rd-pill" href={href('/talents')} prefetch={false}>{tCommon('meetOurTalents')}</Link>
        </div>
      </section>
    </div>
  )
}
