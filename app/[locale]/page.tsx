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
import { posterFor } from '@/lib/data/videos'
import { heroFilmRowItems, introShowreels } from '@/lib/data/redesign-media'
import DeferredVideoShowcase from '@/components/blocks/DeferredVideoShowcase'
import VideoShowcaseFallback from '@/components/blocks/VideoShowcaseFallback'
import IntroFeature from '@/components/blocks/IntroFeature'
import FAQ from '@/components/blocks/FAQ'

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

// Talent cards - 6 talents for homepage (using Blob storage URLs)
const talents = [
  {
    slug: 'albina-mavriqi',
    name: 'Albina Mavriqi',
    imageUrl: '/media/imported/talents/instagram/albina-mavriqi.jpeg',
    instagramUrl: 'https://www.instagram.com/albina/',
    tiktokUrl: 'https://www.tiktok.com/@albinasglam/',
  },
  {
    slug: 'rebecca-ghaderi',
    name: 'Rebecca Ghaderi',
    imageUrl: '/media/imported/talents/instagram/rebecca-ghaderi.jpeg',
    instagramUrl: 'https://www.instagram.com/rebeccaghaderi',
    tiktokUrl: 'https://www.tiktok.com/@rebeccaghaderii',
  },
  {
    slug: 'albulena-mavriqi',
    name: 'Albulena Mavriqi',
    imageUrl: '/media/imported/talents/instagram/lena-mavriqi.jpeg',
    instagramUrl: 'https://www.instagram.com/albulena.mavriqi/',
    tiktokUrl: 'https://www.tiktok.com/@lenamavriqii',
  },
  {
    slug: 'jay-sadiq',
    name: 'Jay Sadiq',
    imageUrl: '/media/imported/talents/instagram/jay-sadiq.jpeg',
    instagramUrl: 'https://www.instagram.com/jaysadiq_/',
    youtubeUrl: 'https://www.youtube.com/@Jaystyle_',
    tiktokUrl: 'https://www.tiktok.com/@jaysstyle_/',
  },
  {
    slug: 'anisa-hukmova',
    name: 'Anisa Hukmova',
    imageUrl: '/media/imported/talents/instagram/anisa-hukmova.jpeg',
    instagramUrl: 'https://www.instagram.com/anisavisage/',
    tiktokUrl: 'https://www.tiktok.com/@anisavisage',
  },
  {
    slug: 'dariia-bordun',
    name: 'Dariia Bordun',
    imageUrl: '/media/imported/talents/instagram/dariia-bordun.jpeg',
    instagramUrl: 'https://www.instagram.com/_idareen_/',
    tiktokUrl: 'https://www.tiktok.com/@idareen_',
  },
]

// Media carousel items for "This is CA Agency" section — July 2026 round 3:
// client sequence Sydney → Dariia → Albina → Melly → Huda → Douglas, clean
// cuts (no watermarks), TOCOBO reel retired. `-clean` filenames because the
// original URLs served round-2 brand-marked bytes and are immutable-cached
// by visitors. Keep in sync with the `home` defaults in
// lib/site-content/definitions.ts.
const mediaCarouselItems = [
  { src: '/videos/work/reel-albina-ilia-blush-combo-clean-sharp-v2.mp4', alt: 'Albina for ILIA blush campaign reel', poster: '/images/video-thumbs/reel-albina-ilia-blush-combo-clean-sharp-v2.jpg' },
  { src: '/videos/work/reel-DT3Pv52jCqc-clean-sharp-v2.mp4', alt: 'Rhode blush campaign reel', poster: '/images/video-thumbs/reel-DT3Pv52jCqc-clean-sharp-v2.jpg' },
  { src: '/videos/work/reel-DX2Bva6sJk6-clean-sharp-v2.mp4', alt: 'Fenty Beauty campaign reel', poster: '/images/video-thumbs/reel-DX2Bva6sJk6-clean-sharp-v2.jpg' },
]

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'home' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
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
        filmRowItems={heroFilmRowItems}
      />

      {/* Stats Section */}
      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          {/* Tagline */}
          <ScrollReveal delay={0.3} yOffset={20}>
            <p className="font-anegra text-[32px] tablet:text-[26px] mobile:text-[22px] font-light leading-[1.4] text-black/85 text-center max-w-[800px] mx-auto">
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
      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <SectionHeading eyebrow={t('eyebrowTalents')} title={t('meetTheTalents')} className="mb-12" />
          </ScrollReveal>
          <TalentGrid talents={talents} columns={6} />
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
                <Link href={localizeHref('/work', locale)} prefetch={false} className="inline-flex items-center gap-2 border-b border-black/30 pb-1 font-jost text-[12px] font-medium uppercase tracking-[0.18em] text-foreground-primary transition-colors hover:border-black">
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
      <FAQ />

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
              <Button href="/contact" locale={locale as Locale} variant="light" prefetch={false}>
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
