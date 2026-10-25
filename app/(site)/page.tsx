import Link from 'next/link'
import HeroSection from '@/components/blocks/HeroSection'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import TalentGrid from '@/components/blocks/TalentGrid'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { brandLogos } from '@/lib/data/brands'
import { featuredVideos } from '@/lib/data/home'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { HomePageContent } from '@/lib/site-content/site-types'
import SectionHeading from '@/components/ui/SectionHeading'
import Magnetic from '@/components/ui/Magnetic'
import { posterFor } from '@/lib/data/videos'
import { heroFilmRowItems } from '@/lib/data/redesign-media'
import { buildPageMetadata } from '@/lib/seo/metadata'
import DeferredVideoShowcase from '@/components/blocks/DeferredVideoShowcase'
import VideoShowcaseFallback from '@/components/blocks/VideoShowcaseFallback'
import DeferredMediaCarousel from '@/components/blocks/DeferredMediaCarousel'
import MediaCarouselFallback from '@/components/blocks/MediaCarouselFallback'
import FAQ from '@/components/blocks/FAQ'
import ServicesOverview from '@/components/blocks/ServicesOverview'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

export const metadata = buildPageMetadata({
  title: 'Global Beauty Influencer Marketing Agency',
  description:
    'CA Agency connects beauty and skincare brands with creators across the USA and global markets, managing strategy, content, amplification, and reporting.',
  keywords: [
    'global influencer marketing agency',
    'influencer marketing agency USA',
    'beauty influencer marketing agency',
    'Korean skincare influencer marketing',
    'K-beauty influencer agency',
    'TikTok marketing',
    'Instagram influencers',
    'brand partnerships',
  ],
  imageAlt: 'CA Agency - Global Beauty Influencer Marketing Agency',
})

export default async function HomePage() {
  const content = await getSiteContent<HomePageContent>('home')
  const talents = await getFeaturedTalents(content.talents.limit)
  const introMediaItems = content.intro.mediaItems.map((item) => ({
    type: item.type === 'image' ? 'image' as const : 'video' as const,
    src: item.src,
    alt: item.alt,
    poster: item.poster ?? (item.type === 'video' ? posterFor(item.src) : undefined),
  }))

  return (
    <>
      <HeroSection
        heading="Global Beauty Influencer Marketing Agency"
        title={content.hero.title}
        titleSecondLine={content.hero.titleSecondLine}
        subtitle={content.hero.subtitle}
        primaryCta={{ label: 'Enquire For Partnerships', href: '/contact' }}
        secondaryCta={{ label: 'See Our Work', href: '/work' }}
        carouselImages={content.hero.carouselImages.map((image) => ({
          url: image.src,
          alt: image.alt,
        }))}
        filmRowItems={heroFilmRowItems}
      />

      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0.3} yOffset={20}>
            <p className="font-anegra text-[32px] tablet:text-[26px] mobile:text-[22px] font-light leading-[1.4] text-black/85 text-center max-w-[800px] mx-auto">
              {content.stats.tagline}
            </p>
          </ScrollReveal>
          {/* Departments by region (July 2026 round 3): the old inline-link
              paragraph restructured into a four-region editorial list, in the
              client-specified order USA → Asia → Europe → Middle East. */}
          <ScrollReveal delay={0.35} yOffset={20}>
            <div className="mx-auto mt-12 max-w-[880px]">
              <p className="mb-6 text-center font-jost text-[12px] font-medium uppercase tracking-[0.25em] text-foreground-gray">
                Our Departments
              </p>
              <ul className="grid grid-cols-4 gap-x-8 gap-y-8 tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-y-6">
                {[
                  {
                    region: 'USA',
                    href: '/influencer-marketing-usa',
                    copy: (
                      <>
                        Creator campaigns for{' '}
                        <Link
                          href="/beauty-influencer-marketing-agency"
                          className="text-foreground-primary underline underline-offset-4 decoration-black/20 hover:decoration-accent-red transition-colors"
                        >
                          beauty
                        </Link>{' '}
                        and{' '}
                        <Link
                          href="/skincare-influencer-marketing-agency"
                          className="text-foreground-primary underline underline-offset-4 decoration-black/20 hover:decoration-accent-red transition-colors"
                        >
                          skincare
                        </Link>{' '}
                        brands in the world’s largest beauty market, coast to coast.
                      </>
                    ),
                  },
                  {
                    region: 'Asia',
                    href: '/influencer-marketing-asia',
                    copy: (
                      <>
                        From Seoul to Shanghai, Tokyo and Singapore, home of our{' '}
                        <Link
                          href="/korean-skincare-influencer-marketing"
                          className="text-foreground-primary underline underline-offset-4 decoration-black/20 hover:decoration-accent-red transition-colors"
                        >
                          K-beauty
                        </Link>{' '}
                        specialism.
                      </>
                    ),
                  },
                  {
                    region: 'Europe',
                    href: '/influencer-marketing-uk',
                    copy: (
                      <>
                        Campaigns across{' '}
                        <Link
                          href="/influencer-marketing-uk"
                          className="text-foreground-primary underline underline-offset-4 decoration-black/20 hover:decoration-accent-red transition-colors"
                        >
                          Europe
                        </Link>{' '}
                        and the continent’s style capitals.
                      </>
                    ),
                  },
                  {
                    region: 'Middle East',
                    href: '/influencer-marketing-dubai',
                    copy: (
                      <>
                        Rooted in Dubai, reaching audiences across the{' '}
                        <Link
                          href="/influencer-marketing-uae"
                          className="text-foreground-primary underline underline-offset-4 decoration-black/20 hover:decoration-accent-red transition-colors"
                        >
                          UAE
                        </Link>{' '}
                        and GCC.
                      </>
                    ),
                  },
                ].map((dept) => (
                  <li key={dept.region} className="text-center tablet:text-center mobile:text-center">
                    <Link
                      href={dept.href}
                      className="group inline-flex items-baseline gap-2 font-anegra text-[20px] mobile:text-[19px] text-foreground-primary transition-colors hover:text-foreground-subtle"
                    >
                      {dept.region}
                      <span
                        aria-hidden="true"
                        className="text-accent-red/70 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                    <p className="mt-2 text-[14px] leading-6 text-black/60">{dept.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background-base py-sec-lg mobile:py-[72px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-[80px] mobile:gap-[50px]">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <ScrollReveal delay={0} yOffset={20}>
                <DeferredMediaCarousel
                  items={introMediaItems}
                  // Client decision: autoplay regardless of
                  // prefers-reduced-motion (Oct 2026).
                  ignoreReducedMotion
                  fallback={<MediaCarouselFallback items={introMediaItems} />}
                />
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.1} yOffset={20}>
                <SectionHeading align="start" eyebrow="Who We Are" title={content.intro.title} className="mb-7" />
              </ScrollReveal>
              {content.intro.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.15 + index * 0.05} yOffset={20}>
                  <Text color="dark" size="sm" className="mb-6 opacity-80">
                    {paragraph.text}
                  </Text>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={0.25} yOffset={20}>
                <Button href={content.intro.buttonHref}>{content.intro.buttonLabel}</Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview content={content.servicesOverview} eyebrow="Services" />

      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <SectionHeading eyebrow="Our Creators" title={content.talents.title} className="mb-12" />
          </ScrollReveal>
          <TalentGrid talents={talents} columns={6} />
          <ScrollReveal delay={0.2} yOffset={20}>
            <div className="text-center mt-12">
              <Text color="dark" size="base" className="max-w-[800px] mx-auto mb-8 text-[16px] leading-[28px]">
                {content.talents.description}
              </Text>
              <Button href={content.talents.buttonHref}>{content.talents.buttonLabel}</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <SectionHeading align="start" eyebrow="Case Studies" title={content.featuredWork.title} />
              <div className="mt-6 md:mt-0">
                <Button href={content.featuredWork.buttonHref}>{content.featuredWork.buttonLabel}</Button>
              </div>
            </div>
          </ScrollReveal>
          <DeferredVideoShowcase
            videos={featuredVideos}
            columns={4}
            fallback={<VideoShowcaseFallback videos={featuredVideos} columns={4} />}
          />
          <ScrollReveal delay={0.2} yOffset={20}>
            <Text color="dark" size="base" className="mt-10 max-w-[700px] text-[16px] leading-[28px]">
              {content.featuredWork.description}
            </Text>
          </ScrollReveal>
        </div>
      </section>
      <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd('en'))}</script>
      <FAQ />
      <BrandCarousel images={brandLogos} />

      {/* Closing conversion CTA */}
      <section className="bg-accent-red py-sec mobile:py-sec-sm px-section-x">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="white" className="mb-6 text-[40px] mobile:text-[28px]">
            Let&apos;s Build Your Next Campaign
          </Heading>
          <Text color="white" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-90">
            Tell us about your goals and we&apos;ll match you with the right creators, strategy, production, and reporting included.
          </Text>
          <Magnetic>
            <Button href="/contact" variant="light" prefetch={false}>
              Enquire For Partnerships
            </Button>
          </Magnetic>
        </ScrollReveal>
      </section>
    </>
  )
}
