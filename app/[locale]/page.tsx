import '@/app/home-utilities.css'
import { getHomeSlideshowTalents } from '@/lib/site-content/public'
import Link from 'next/link'
import { localizeHref } from '@/lib/i18n/client-paths'
import HeroSection from '@/components/blocks/HeroSection'
import type { Locale } from '@/i18n/config'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import { brandLogos } from '@/lib/data/brands'
import { featuredVideos } from '@/lib/data/home'
import TalentGrid from '@/components/blocks/TalentGrid'
import { getSiteContent } from '@/lib/site-content/service'
import type { HomePageContent } from '@/lib/site-content/site-types'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

import { getFaqJsonLd } from '@/lib/data/faq-schema'
import { buildPageMetadata } from '@/lib/seo/metadata'
import SectionHeading from '@/components/ui/SectionHeading'
import Magnetic from '@/components/ui/Magnetic'
import { homeCollageTiles, introShowreels, homeTalentSlugs } from '@/lib/data/redesign-media'
import DeferredVideoShowcase from '@/components/blocks/DeferredVideoShowcase'
import VideoShowcaseFallback from '@/components/blocks/VideoShowcaseFallback'
import IntroFeature from '@/components/blocks/IntroFeature'
import FAQ from '@/components/blocks/FAQ'
import CountUp from '@/components/ui/CountUp'

export const revalidate = 3600

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    keywords: [
      'global influencer marketing agency',
      'influencer marketing agency USA',
      'beauty influencer marketing agency',
      'TikTok marketing',
      'Instagram influencers',
      'brand partnerships',
    ],
    imageAlt: 'CA Agency - Global Beauty Influencer Marketing Agency',
  })
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'home' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const tAbout = await getTranslations({ locale, namespace: 'about' })
  const content = await getSiteContent<HomePageContent>('home')

  const carouselImages =
    content.hero?.carouselImages?.filter((img) => img?.src?.trim())?.map((image) => ({
      url: image.src,
      alt: image.alt,
    })) ?? []

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        locale={locale as Locale}
        heading={t('title')}
        title={content.hero?.title ?? 'CA Agency'}
        titleSecondLine={content.hero?.titleSecondLine ?? 'Influence • Digital • Marketing'}
        subtitle={t('heroSubtitle')}
        primaryCta={{ label: tCommon('enquirePartnerships'), href: '/contact' }}
        secondaryCta={{ label: tCommon('viewOurWork'), href: '/work' }}
        carouselImages={carouselImages.length > 0 ? carouselImages : undefined}
        collageTiles={homeCollageTiles}
      />

      {/* Stats Section */}
      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          {/* Same published figures as the About page */}
          <ScrollReveal yOffset={20} className="about-stats home-stats mb-14 mobile:mb-10">
            <div>
              <strong><CountUp value={6000} suffix="+" /></strong>
              <span>{tAbout('statCollabs')}</span>
            </div>
            <div>
              <strong><CountUp value={10} suffix="+" duration={1200} /></strong>
              <span>{tAbout('statLanguages')}</span>
            </div>
            <div>
              <strong><CountUp value={3} duration={1000} /></strong>
              <span>{tAbout('statOffices')}</span>
            </div>
          </ScrollReveal>
          {/* Tagline */}
          <ScrollReveal delay={0.3} yOffset={20}>
            <p className="font-anegra text-[32px] tablet:text-[26px] mobile:text-[22px] leading-[1.4] text-black/85 text-center max-w-[800px] mx-auto">
              {t('statsTagline')}
            </p>
          </ScrollReveal>
        </div>
      </section>


      <IntroFeature
        eyebrow={t('thisIsCA')}
        kicker={t('eyebrowIntro')}
        title={t('thisIsCA')}
        paragraphs={[t('aboutDescription'), t('crossPlatform')]}
        button={{ label: tCommon('moreAboutUs'), href: '/about' }}
        items={introShowreels}
        locale={locale as Locale}
      />

      {/* Talents Section */}
      <section className="bg-background-soft py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <SectionHeading eyebrow={t('eyebrowTalents')} title={t('meetTheTalents')} className="mb-12" />
          </ScrollReveal>
          <ScrollReveal yOffset={0} className="reveal-media"><TalentGrid talents={await getHomeSlideshowTalents(homeTalentSlugs)} columns={6} cardArt mobileLayout="carousel" slideshow /></ScrollReveal>
          <ScrollReveal delay={0.2} yOffset={20}>
            <div className="text-center mt-12">
              <Text color="dark" size="base" className="max-w-[800px] mx-auto mb-8 text-[16px] leading-[28px]">
                {t('talentsDescription')}
              </Text>
              <Button href="/talents" locale={locale as Locale}>{tCommon('seeAllTalents')}</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <div className="mb-14 grid grid-cols-[1fr_minmax(0,420px)] items-end gap-10 tablet:grid-cols-1 mobile:mb-10 mobile:grid-cols-1 mobile:gap-6">
              <SectionHeading align="start" eyebrow={t('eyebrowWork')} title={t('featuredWork')} />
              <div>
                <Text color="dark" size="base" className="mb-5 text-[15px] leading-[1.8] opacity-75">
                  {t('workDescription')}
                </Text>
                <Link href={localizeHref('/work', locale)} className="inline-flex items-center gap-2 border-b border-black/30 pb-1 font-jost text-[12px] font-medium uppercase tracking-[0.18em] text-foreground-primary transition-colors hover:border-black">
                  {tCommon('viewAllWork')} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <DeferredVideoShowcase
            videos={featuredVideos}
            columns={4}
            staggered
            fallback={<VideoShowcaseFallback videos={featuredVideos} columns={4} staggered />}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd(locale))}</script>
      <FAQ locale={locale} />

      {/* Closing conversion CTA, a black rounded panel matching the footer */}
      <section className="rd-cta-panel">
        <ScrollReveal yOffset={24} className="rd-cta-panel-inner">
          <Heading as="h2" color="white" className="text-[48px] tablet:text-[40px] mobile:text-[30px] leading-[1.08] text-balance">
            {t('closingCtaTitle')}
          </Heading>
          <div>
            <Text color="white" size="lg" className="mb-8 opacity-75">
              {t('closingCtaText')}
            </Text>
            <Magnetic>
              <Button href="/contact" locale={locale as Locale} variant="light">
                {t('closingCtaButton')}
              </Button>
            </Magnetic>
          </div>
        </ScrollReveal>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel images={brandLogos} />
    </>
  )
}
