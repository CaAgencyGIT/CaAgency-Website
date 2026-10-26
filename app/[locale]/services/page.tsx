import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { localizeHref } from '@/lib/i18n/client-paths'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import styles from './services.module.css'

// Safety net next to the on-save revalidation in lib/revalidate.ts.
export const revalidate = 3600

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

// Oct 2026 approved design (CA-Services-Final-Designs): five photo cards and
// (since 26 Oct 2026) one matching studio still-life set, made in Higgsfield;
// a white logo-free "Ready to Get Started?" tile. Card image, title and
// "Explore service" open the service page in a new tab.
const services = [
  {
    number: 1,
    key: 'influencerCampaigns' as const,
    slug: 'influencer-campaigns',
    photo: 'studio',
    image: { src: '/images/services/studio/01-campaigns-v1.webp', width: 1200, height: 1600 },
    alt: 'A smartphone on a tripod filming skincare bottles on a stone plinth in a warm studio.',
  },
  {
    number: 2,
    key: 'talentManagement' as const,
    slug: 'talent-management',
    photo: 'studio',
    image: { src: '/images/services/studio/02-talent-management-v1.webp', width: 1200, height: 1600 },
    alt: 'A backstage makeup station with a lit vanity mirror and a director\'s chair.',
  },
  {
    number: 3,
    key: 'contentProduction' as const,
    slug: 'content-production',
    photo: 'studio',
    image: { src: '/images/services/studio/03-content-production-v1.webp', width: 1200, height: 1600 },
    alt: 'A cinema camera and softbox set up for a beauty product shoot.',
  },
  {
    number: 4,
    key: 'performanceMarketing' as const,
    slug: 'performance-marketing',
    photo: 'studio',
    image: { src: '/images/services/studio/04-performance-v1.webp', width: 1200, height: 1600 },
    alt: 'Skincare bottles of rising height arranged like a growth chart.',
  },
  {
    number: 5,
    key: 'brandConsultancy' as const,
    slug: 'brand-consultancy',
    photo: 'studio',
    image: { src: '/images/services/studio/05-brand-consultancy-v1.webp', width: 1200, height: 1600 },
    alt: 'Blank cream and black packaging prototypes on a travertine table.',
  },
]

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const newTab = { target: '_blank', rel: 'noopener noreferrer' } as const

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <div className={styles.page}>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <h1 className={styles.serif}>
          {t('servicesAtCA')}
          <br />
          Influence • Digital • Marketing
        </h1>
        <p>{t('subheading')}</p>
      </section>

      <section className={styles.wrap} aria-labelledby="services-intro-heading">
        <div className={styles.introduction}>
          <h2 className={styles.serif} id="services-intro-heading">
            {t('topNotch')}
          </h2>
          <span className={styles.smallRule} aria-hidden="true" />
          <div className={styles.introCopy}>
            <p>{t('introLead')}</p>
            <p>{t('introBody')}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const href = `/services/${service.slug}`
            const title = t(`${service.key}.title`)
            return (
              <article key={service.slug} className={styles.card}>
                <a className={styles.cardPhoto} href={href} {...newTab} aria-label={`${title} (opens in a new tab)`}>
                  <Image
                    src={service.image.src}
                    alt={service.alt}
                    fill
                    quality={85}
                    sizes="(max-width: 390px) 100vw, (max-width: 600px) 50vw, 300px"
                    data-photo={service.photo}
                  />
                </a>
                <div className={styles.cardCopy}>
                  <h3 className={styles.serif}>
                    <a href={href} {...newTab}>
                      {service.number}. {title}
                    </a>
                  </h3>
                  <p className={styles.strapline}>{t(`${service.key}.highlight`)}</p>
                  <p className={styles.description}>{t(`${service.key}.description`)}</p>
                  <a className={styles.explore} href={href} {...newTab}>
                    {t('exploreService')} <ArrowRight />
                    <span className="sr-only"> ({title}, opens in a new tab)</span>
                  </a>
                </div>
              </article>
            )
          })}

          <article className={styles.ctaTile}>
            <div>
              <h3 className={styles.serif}>{t('ctaTitle')}</h3>
              <p>{t('ctaText')}</p>
              <Link className={styles.pill} href={localizeHref('/contact', locale)} prefetch={false}>
                {tCommon('contactUs')} <ArrowRight />
              </Link>
            </div>
          </article>
        </div>

        <div className={styles.closingCopy}>
          <p>{t('closingLead')}</p>
          <p>{t('closingBody')}</p>
        </div>
      </section>

      <section className={`${styles.bottomCta} ${styles.wrap}`}>
        <h2 className={styles.serif}>{t('ctaTitle')}</h2>
        <span className={styles.smallRule} aria-hidden="true" />
        <p>{t('ctaText')}</p>
        <div className={styles.ctaLinks}>
          <Link className={styles.pill} href={localizeHref('/contact', locale)} prefetch={false}>
            {tCommon('contactUs')}
          </Link>
          <Link className={styles.pill} href={localizeHref('/work', locale)} prefetch={false}>
            {tCommon('viewOurWork')}
          </Link>
          <Link className={styles.pill} href={localizeHref('/talents', locale)} prefetch={false}>
            {tCommon('meetOurTalents')}
          </Link>
        </div>
      </section>
    </div>
  )
}
