import Heading from '@/components/ui/Heading'
import type { Locale } from '@/i18n/config'
import HeadingAccent from '@/components/ui/HeadingAccent'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import VideoPlayer from '@/components/ui/VideoPlayer'
import PhoneFrame from '@/components/ui/PhoneFrame'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { brandLogos } from '@/lib/data/brands'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/about',
    keywords: [
      'about CA Agency',
      'influencer agency Dubai',
      'talent management UAE',
      'social media agency',
      'content creator management',
    ],
    imageAlt: t('heading'),
  })
}

// Video schema for about page videos
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'VideoObject',
        name: 'CA Agency Story',
        description: 'Learn about CA Agency, our mission, and how we connect brands with top influencers',
        contentUrl: 'https://caagency.com/videos/about-video-05-web-v1.mp4',
        thumbnailUrl: 'https://caagency.com/images/video-thumbs/about-video-05-web-v1.jpg',
        uploadDate: '2026-07-08',
        publisher: organizationRef,
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'VideoObject',
        name: 'CA Agency Team',
        description: 'Meet the team behind CA Agency and our approach to influencer marketing',
        contentUrl: 'https://caagency.com/videos/about-video-06-web-v1.mp4',
        thumbnailUrl: 'https://caagency.com/images/video-thumbs/about-video-06-web-v1.jpg',
        uploadDate: '2026-07-08',
        publisher: organizationRef,
      },
    },
  ],
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>

      {/* Hero Section — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[50px] px-section-x mobile:px-[10px]">
        <div className="relative z-[1] max-w-container mx-auto text-center">
          <Heading as="h1" color="dark" className="hero-rise-media text-[68px] tablet:text-[50px] mobile:text-[30px] leading-[80px] mobile:leading-[40px] font-light">
            {t('heading')}<br />
            {t('mission')} • {t('vision')}
          </Heading>
          <Text color="dark" size="lg" className="hero-rise hero-rise-2 mt-6 text-center tablet:text-[16px] mobile:text-[18px]">
            {t('intro')}
          </Text>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-background-base py-section-y-desktop mobile:py-[20px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row gap-[50px] tablet:gap-[20px] tablet:flex-wrap">
            {/* Left Column - Text */}
            <ScrollReveal yOffset={24} className="w-full md:w-1/2 tablet:w-full flex flex-col justify-center">
              <Heading as="h2" color="dark" className="mb-5 tracking-[0.1px]">
                CA Agency
              </Heading>
              <HeadingAccent align="start" className="mb-7" />
              <Text color="dark" size="sm" className="mobile:text-[18px] mobile-extra:text-[15px] opacity-80">
                {t('whoWeAreP1')}
              </Text>
            </ScrollReveal>

            {/* Right Column - Video in an iPhone shell (July 2026 round 3) */}
            <ScrollReveal delay={0.12} yOffset={24} className="w-full md:w-1/2 tablet:w-full flex justify-center md:justify-start tablet:justify-center">
              <PhoneFrame className="max-w-[280px] tablet:max-w-[250px] mobile:max-w-[220px]">
                <VideoPlayer
                  src="/videos/about-video-05-web-v1.mp4"
                  poster="/images/video-thumbs/about-video-05-web-v1.jpg"
                  posterSizes="280px"
                  aspectRatio="9:16"
                  autoplay
                  muted
                  loop
                  ignoreReducedMotion
                  className="rounded-none"
                />
              </PhoneFrame>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Second Section - Reversed */}
      <section className="bg-background-base pb-section-y-desktop mobile:pb-0 px-section-x">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-[50px] tablet:gap-[20px] tablet:flex-wrap-reverse">
            {/* Left Column - Video in an iPhone shell (July 2026 round 3) */}
            <ScrollReveal delay={0.12} yOffset={24} className="w-full md:w-1/2 tablet:w-full flex justify-center md:justify-end tablet:justify-center">
              <PhoneFrame className="max-w-[280px] tablet:max-w-[250px] mobile:max-w-[220px]">
                <VideoPlayer
                  src="/videos/about-video-06-web-v1.mp4"
                  poster="/images/video-thumbs/about-video-06-web-v1.jpg"
                  posterSizes="280px"
                  aspectRatio="9:16"
                  autoplay
                  muted
                  loop
                  ignoreReducedMotion
                  className="rounded-none"
                />
              </PhoneFrame>
            </ScrollReveal>

            {/* Right Column - Text */}
            <ScrollReveal yOffset={24} className="w-full md:w-1/2 tablet:w-full flex flex-col justify-center">
              <Heading as="h2" color="dark" className="mb-5 tracking-[0.1px]">
                {t('subheading')}
              </Heading>
              <HeadingAccent align="start" className="mb-7" />
              <Text color="dark" size="sm" className="mb-6 mobile:text-[18px] mobile-extra:text-[15px] opacity-80">
                {t('storyText')}
              </Text>
              <div>
                <Button href="/contact" locale={locale as Locale} variant="primary">
                  {tCommon('contactUs')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="bg-background-base py-[50px] px-0">
        <BrandCarousel images={brandLogos} />
      </section>
    </>
  )
}
