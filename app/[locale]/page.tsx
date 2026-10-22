import type { Locale } from '@/i18n/config'
import { getSiteContent } from '@/lib/site-content/service'
import { getTalentsBySlugs } from '@/lib/site-content/public'
import type { HomePageContent } from '@/lib/site-content/site-types'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { priorityTalentSlugs } from '@/lib/data/redesign-media'
import FAQ from '@/components/blocks/FAQ'
import HomeView from '@/components/redesign/HomeView'
import CoverflowCarousel from '@/components/blocks/CoverflowCarousel'
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
  const talents = await getTalentsBySlugs(priorityTalentSlugs)
  const carouselImages =
    content.hero?.carouselImages?.filter((img) => img?.src?.trim())?.map((image) => ({
      url: image.src,
      alt: image.alt,
    })) ?? []

  return (
    <HomeView
      locale={locale as Locale}
      labels={{ play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }}
      heading={t('title')}
      title={content.hero?.title ?? 'CA Agency'}
      titleSecondLine={content.hero?.titleSecondLine ?? 'Influence • Digital • Marketing'}
      subtitle={t('heroSubtitle')}
      heroMedia={
        carouselImages.length > 0 && (
          <div className="hero-rise-media">
            <CoverflowCarousel
              images={carouselImages}
              locale={locale as Locale}
              labels={{ region: tCommon('featuredCreators'), goToSlide: tCommon.raw('goToSlide') }}
            />
          </div>
        )
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
      talents={{
        eyebrow: t('eyebrowTalents'),
        title: t('meetTheTalents'),
        description: t('talentsDescription'),
        button: { label: tCommon('seeAllTalents'), href: '/talents' },
        list: talents,
      }}
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
