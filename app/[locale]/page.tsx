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
  const content = await getSiteContent<HomePageContent>('home')
  const talents = await getTalentsBySlugs(priorityTalentSlugs)

  return (
    <HomeView
      locale={locale as Locale}
      labels={{ play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }}
      heading={t('title')}
      title={content.hero?.title ?? 'CA Agency'}
      titleSecondLine={content.hero?.titleSecondLine ?? 'Influence • Digital • Marketing'}
      subtitle={t('heroSubtitle')}
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
