import Link from 'next/link'
import HeroSection from '@/components/blocks/HeroSection'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import DepartmentsMap from '@/components/blocks/DepartmentsMap'
import TalentGrid from '@/components/blocks/TalentGrid'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { brandLogos } from '@/lib/data/brands'
import { featuredVideos } from '@/lib/data/home'
import { getSiteContent } from '@/lib/site-content/service'
import { getHomeSlideshowTalents } from '@/lib/site-content/public'
import { HomePageContent } from '@/lib/site-content/site-types'
import SectionHeading from '@/components/ui/SectionHeading'
import Magnetic from '@/components/ui/Magnetic'
import { posterFor } from '@/lib/data/videos'
import { homeCollageTiles, homeTalentSlugs, introShowreels } from '@/lib/data/redesign-media'
import { buildPageMetadata } from '@/lib/seo/metadata'
import DeferredVideoShowcase from '@/components/blocks/DeferredVideoShowcase'
import VideoShowcaseFallback from '@/components/blocks/VideoShowcaseFallback'
import FAQ from '@/components/blocks/FAQ'
import ServicesOverview from '@/components/blocks/ServicesOverview'
import IntroFeature from '@/components/blocks/IntroFeature'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

export const metadata = buildPageMetadata({
  title: 'Global Beauty Influencer Marketing Agency',
  description:
    'Talent management and creator campaigns for beauty and skincare brands. Based in Dubai, working across North America, Europe, the Middle East and Asia.',
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
  imageAlt: 'CA Agency: global beauty influencer marketing',
})

export default async function HomePage() {
  const content = await getSiteContent<HomePageContent>('home')
  // Pinned row shared with the localized homepages; /talents has its own order.
  const talents = await getHomeSlideshowTalents(homeTalentSlugs)
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
        collageTiles={homeCollageTiles}
      />

      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0.3} yOffset={20}>
            <p className="font-anegra text-[32px] tablet:text-[26px] mobile:text-[22px] font-light leading-[1.4] text-black/85 text-center max-w-[800px] mx-auto">
              {content.stats.tagline}
            </p>
          </ScrollReveal>
          {/* Departments by region: four-region editorial list in the client-
              specified order North America → Europe → Middle East → Asia, with
              the client's Oct 2026 descriptions. */}
          <ScrollReveal delay={0.35} yOffset={20}>
            <div className="mx-auto mt-20 max-w-[1180px] tablet:mt-16 mobile:mt-12">
              <p className="mb-10 text-center font-jost text-[12px] font-medium uppercase tracking-[0.25em] text-foreground-gray mobile:mb-8">
                Our Departments
              </p>
              <div className="mx-auto mb-14 max-w-[760px] tablet:mb-12 mobile:mb-8">
                <DepartmentsMap />
              </div>
              <ul className="grid grid-cols-4 gap-x-14 gap-y-12 tablet:grid-cols-2 tablet:gap-x-10 mobile:grid-cols-2 mobile:gap-x-5 mobile:gap-y-8">
                {[
                  {
                    region: 'North America',
                    href: '/influencer-marketing-usa',
                    copy:
                      "Connecting brands with influential creators across North America through strategic partnerships and impactful campaigns. We bring together creativity, industry expertise and market insights to build lasting connections.",
                  },
                  {
                    region: 'Europe',
                    href: '/influencer-marketing-uk',
                    copy:
                      "Building meaningful connections between brands, creators and audiences across key European markets. Our international network enables tailored collaborations that resonate across cultures and borders.",
                  },
                  {
                    region: 'Middle East',
                    href: '/influencer-marketing-dubai',
                    copy:
                      "With our HQ based in Dubai, we connect international brands with creators and audiences across the Middle East. Our regional perspective and global network allow us to create partnerships that extend beyond borders.",
                  },
                  {
                    region: 'Asia',
                    href: '/influencer-marketing-asia',
                    copy:
                      "Bridging global brands with Asia's dynamic creator landscape through culturally relevant partnerships. We connect creativity with opportunity, supporting meaningful collaborations across diverse markets.",
                  },
                ].map((dept) => (
                  <li key={dept.region} className="text-center tablet:text-center mobile:text-center">
                    <Link
                      href={dept.href}
                      className="group inline-flex items-baseline gap-2 font-anegra text-[20px] mobile:gap-1.5 mobile:text-[16px] text-foreground-primary transition-colors hover:text-foreground-subtle"
                    >
                      {dept.region}
                      <span
                        aria-hidden="true"
                        className="text-accent-red/70 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                    <p className="mx-auto mt-4 max-w-[252px] text-[14px] leading-[1.75] text-black/60 text-pretty tablet:max-w-[320px] mobile:mt-2 mobile:text-[12.5px] mobile:leading-[1.6]">{dept.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <IntroFeature
        eyebrow={content.intro.title}
        kicker="Who We Are"
        title="Creators who shape culture, campaigns that move product."
        paragraphs={content.intro.paragraphs.map((paragraph) => paragraph.text)}
        button={{ label: content.intro.buttonLabel, href: content.intro.buttonHref }}
        items={introShowreels}
      />

      <ServicesOverview content={content.servicesOverview} eyebrow="Services" />

      <section className="bg-background-base py-sec mobile:py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal delay={0} yOffset={20}>
            <SectionHeading eyebrow="Our Creators" title={content.talents.title} className="mb-12" />
          </ScrollReveal>
          <TalentGrid talents={talents} columns={6} cardArt mobileLayout="carousel" slideshow />
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
            <div className="mb-14 grid grid-cols-[1fr_minmax(0,420px)] items-end gap-10 tablet:grid-cols-1 mobile:mb-10 mobile:grid-cols-1 mobile:gap-6">
              <SectionHeading align="start" eyebrow="Case Studies" title={content.featuredWork.title} />
              <div>
                <Text color="dark" size="base" className="mb-5 text-[15px] leading-[1.8] opacity-75">
                  {content.featuredWork.description}
                </Text>
                <Link href={content.featuredWork.buttonHref} prefetch={false} className="inline-flex items-center gap-2 border-b border-black/30 pb-1 font-jost text-[12px] font-medium uppercase tracking-[0.18em] text-foreground-primary transition-colors hover:border-black">
                  {content.featuredWork.buttonLabel} <span aria-hidden="true">→</span>
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
      <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd('en'))}</script>
      <FAQ locale="en" />
      <BrandCarousel images={brandLogos} />

      {/* Closing conversion CTA, a black rounded panel matching the footer */}
      <section className="rd-cta-panel">
        <ScrollReveal yOffset={24} className="rd-cta-panel-inner">
          <Heading as="h2" color="white" className="text-[48px] tablet:text-[40px] mobile:text-[30px] leading-[1.08] text-balance">
            Let&apos;s Build Your Next Campaign
          </Heading>
          <div>
            <Text color="white" size="lg" className="mb-8 opacity-75">
              Tell us about your goals and we&apos;ll match you with the right creators, strategy, production, and reporting included.
            </Text>
            <Magnetic>
              <Button href="/contact" variant="light" prefetch={false}>
                Enquire For Partnerships
              </Button>
            </Magnetic>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
