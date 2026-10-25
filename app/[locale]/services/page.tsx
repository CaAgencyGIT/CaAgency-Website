import Heading from '@/components/ui/Heading'
import type { Locale } from '@/i18n/config'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeadingAccent from '@/components/ui/HeadingAccent'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'

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

const services = [
  {
    number: 1,
    key: 'influencerCampaigns' as const,
    slug: 'influencer-campaigns',
    image: '/images/services/influencer-campaigns.webp',
  },
  {
    number: 2,
    key: 'talentManagement' as const,
    slug: 'talent-management',
    image: '/images/services/talent-management.webp',
  },
  {
    number: 3,
    key: 'contentProduction' as const,
    slug: 'content-production',
    image: '/images/services/content-production.webp',
  },
  {
    number: 4,
    key: 'performanceMarketing' as const,
    slug: 'performance-marketing',
    image: '/images/services/performance-marketing.webp',
  },
  {
    number: 5,
    key: 'brandConsultancy' as const,
    slug: 'brand-consultancy',
    image: '/images/services/brand-consultancy.webp',
  },
]

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>

      {/* Hero Section — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[100px] tablet:py-[80px] mobile:py-[60px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto text-center">
          <Heading as="h1" color="dark" className="hero-rise-media text-[68px] tablet:text-[50px] mobile:text-[36px] leading-[80px] tablet:leading-[60px] mobile:leading-[44px] font-light mb-8">
            {t('servicesAtCA')}<br />
            Influence • Digital • Marketing
          </Heading>
          <Text color="dark" size="lg" className="hero-rise hero-rise-2 text-center tablet:text-[16px] mobile:text-[16px] max-w-3xl mx-auto">
            {t('subheading')}
          </Text>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="max-w-[800px]">
            <Heading as="h2" color="dark" className="mb-5 tracking-[0.1px]">
              {t('topNotch')}
            </Heading>
            <HeadingAccent align="start" className="mb-8" />
            <Text color="dark" size="sm" className="mb-6 mobile:text-[16px] leading-[28px] opacity-80">
              <strong className="opacity-100">{t('introLead')}</strong>
            </Text>
            <Text color="dark" size="sm" className="mobile:text-[16px] leading-[28px] opacity-80">
              {t('introBody')}
            </Text>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid — five media cards + a closing CTA tile. Each card
          links to its English-only /services/<slug> subpage (same pattern as
          the Work-page case studies). */}
      <section className="bg-background-base pb-[100px] tablet:pb-[80px] mobile:pb-[60px] px-section-x">
        {/* July 2026 R13 follow-up: the client still found the media cards too
            big at container width, so the grid is capped at 1000px and the
            desktop tiles are square — roughly half the previous image area. */}
        <div className="max-w-[1000px] mx-auto">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]" stagger={0.1}>
            {services.map((service) => (
              <StaggerItem
                key={service.number}
                className="hover-lift group relative rounded-card overflow-hidden bg-background-base ring-1 ring-black/5 hover:ring-black/15 hover:shadow-e3"
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={t(`${service.key}.title`)}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-red"
                >
                  {/* Image Container - Full card background */}
                  <div className="relative w-full aspect-4/5 lg:aspect-square">
                    <Image
                      src={service.image}
                      alt={t(`${service.key}.title`)}
                      fill
                      quality={80}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

                    {/* Content overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6 mobile:p-5">
                      <h3 className="font-anegra text-[24px] mobile:text-[21px] font-semibold tracking-[0] text-white mb-3">
                        {service.number}. {t(`${service.key}.title`)}
                      </h3>
                      <p className="text-white/90 text-[14px] leading-[24px] mb-3">
                        <strong>{t(`${service.key}.highlight`)}</strong>
                      </p>
                      <p className="text-white/70 text-[14px] leading-[24px] mb-3">
                        {t(`${service.key}.description`)}
                      </p>
                      <p className="text-white/85 text-[14px] leading-[24px] font-medium">
                        {t('exploreService')}{' '}
                        <span aria-hidden="true" className="inline-block transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                          →
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {/* CTA tile balancing the 5-card grid */}
            <StaggerItem className="hover-lift group relative rounded-card overflow-hidden ring-1 ring-black/5 hover:ring-black/15 hover:shadow-e3">
              <Link
                href="/contact"
                className="flex h-full min-h-[320px] w-full flex-col items-center justify-center gap-5 bg-accent-red p-8 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className="font-anegra text-[24px] mobile:text-[21px] font-semibold leading-tight text-white">
                  {t('ctaTitle')}
                </span>
                <span className="max-w-[380px] text-[14px] leading-[24px] text-white/90">
                  {t('ctaText')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-work-sans text-[14px] font-medium text-foreground-primary transition-transform duration-300 group-hover:scale-[1.04]">
                  {tCommon('contactUs')}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-background-base pb-[60px] tablet:pb-[50px] mobile:pb-[40px] px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="max-w-[1000px] mx-auto text-center">
            <Text color="dark" size="sm" className="text-[15px] leading-[28px] mb-6 opacity-80">
              {t('closingLead')}
            </Text>
            <Text color="dark" size="sm" className="text-[15px] leading-[28px] opacity-80">
              <strong className="opacity-100">{t('closingBody')}</strong>
            </Text>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-5 text-[40px] tablet:text-[32px] mobile:text-[26px]">
            {t('ctaTitle')}
          </Heading>
          <HeadingAccent className="mb-6" />
          <Text color="dark" size="base" className="max-w-[600px] mx-auto mb-8 opacity-80">
            {t('ctaText')}
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" locale={locale as Locale}>{tCommon('contactUs')}</Button>
            <Button href="/work" locale={locale as Locale} variant="dark">{tCommon('viewOurWork')}</Button>
            <Button href="/talents" locale={locale as Locale} variant="dark">{tCommon('meetOurTalents')}</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
