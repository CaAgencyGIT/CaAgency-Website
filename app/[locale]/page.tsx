import type { Locale } from '@/i18n/config'
import { getSiteContent } from '@/lib/site-content/service'
import { getTalentsBySlugs } from '@/lib/site-content/public'
import type { HomePageContent } from '@/lib/site-content/site-types'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { homeTalentSlugs } from '@/lib/data/redesign-media'
import FAQ from '@/components/blocks/FAQ'
import HomeView from '@/components/redesign/HomeView'
import SectionHeading from '@/components/ui/SectionHeading'
import TalentGrid from '@/components/blocks/TalentGrid'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import HeroSpotlight from '@/components/redesign/HeroSpotlight'
import { heroSpotlight } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'
import DeferredMediaCarousel from '@/components/blocks/DeferredMediaCarousel'
import MediaCarouselFallback from '@/components/blocks/MediaCarouselFallback'
import { posterFor } from '@/lib/data/videos'

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

// Media carousel items for "This is CA Agency" section — July 2026 round 3:
// client sequence Sydney → Dariia → Albina → Melly → Huda → Douglas, clean
// cuts (no watermarks). Keep in sync with the `home` defaults in
// lib/site-content/definitions.ts.
const mediaCarouselItems = [
  { type: 'video' as const, src: '/videos/work/reel-DX2BnbDMhd9-clean.mp4', alt: 'TIRTIR matcha skincare campaign reel', poster: posterFor('/videos/work/reel-DX2BnbDMhd9-clean.mp4') },
  { type: 'video' as const, src: '/videos/work/reel-DT3Pv52jCqc-clean.mp4', alt: 'Rhode blush campaign reel', poster: posterFor('/videos/work/reel-DT3Pv52jCqc-clean.mp4') },
  { type: 'video' as const, src: '/videos/work/reel-DYKuGHLNs6F-clean.mp4', alt: 'Frozen gua sha skincare campaign reel', poster: posterFor('/videos/work/reel-DYKuGHLNs6F-clean.mp4') },
  { type: 'video' as const, src: '/videos/work/reel-DX2Bva6sJk6-clean.mp4', alt: 'Fenty Beauty campaign reel', poster: posterFor('/videos/work/reel-DX2Bva6sJk6-clean.mp4') },
  { type: 'video' as const, src: '/videos/work/reel-DK7rKHjOr6a-clean.mp4', alt: 'Bali Body campaign reel', poster: posterFor('/videos/work/reel-DK7rKHjOr6a-clean.mp4') },
  { type: 'video' as const, src: '/videos/work/reel-DT3Qg4sjHPm-clean.mp4', alt: 'Haruharu Wonder serum mist campaign reel', poster: posterFor('/videos/work/reel-DT3Qg4sjHPm-clean.mp4') },
]

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'home' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const content = await getSiteContent<HomePageContent>('home')
  const talents = await getTalentsBySlugs(homeTalentSlugs)

  return (
    <HomeView
      locale={locale as Locale}
      labels={{ play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }}
      heading={t('title')}
      title={content.hero?.title ?? 'CA Agency'}
      titleSecondLine={content.hero?.titleSecondLine ?? 'Influence • Digital • Marketing'}
      subtitle={t('heroSubtitle')}
      heroMedia={
        <div className="hero-rise-media">
          <HeroSpotlight
            mainImage={heroSpotlight.mainImage}
            chips={heroSpotlight.chips}
            discoverLabel={tCommon('seeAllTalents')}
            discoverHref={localizeHref('/talents', locale)}
          />
        </div>
      }
      introMedia={
        <DeferredMediaCarousel
          items={mediaCarouselItems}
          // Client decision: autoplay regardless of
          // prefers-reduced-motion (Oct 2026).
          ignoreReducedMotion
          labels={{
            previous: tCommon('previous'),
            next: tCommon('next'),
            play: tCommon('play'),
            playVideo: tCommon('playVideo'),
            playCarousel: tCommon('playCarousel'),
            pauseCarousel: tCommon('pauseCarousel'),
            goToSlide: tCommon.raw('goToSlide'),
          }}
          fallback={<MediaCarouselFallback items={mediaCarouselItems} />}
        />
      }
      primaryCta={{ label: tCommon('enquirePartnerships'), href: '/contact' }}
      secondaryCta={{ label: tCommon('viewOurWork'), href: '/work' }}
      trust={t('statsTagline')}
      featuredWork={{
        eyebrow: t('eyebrowWork'),
        title: t('featuredWork'),
        description: t('workDescription'),
        button: { label: tCommon('viewAllWork'), href: '/work' },
      }}
      intro={{
        eyebrow: t('eyebrowIntro'),
        title: t('thisIsCA'),
        paragraphs: [t('aboutDescription'), t('crossPlatform')],
        button: { label: tCommon('moreAboutUs'), href: '/about' },
      }}
      talentsSection={
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
      }
      faq={
        <>
          <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd(locale))}</script>
          <FAQ />
        </>
      }
      cta={{
        title: t('closingCtaTitle'),
        text: t('closingCtaText'),
        button: { label: t('closingCtaButton'), href: '/contact' },
      }}
    />
  )
}
