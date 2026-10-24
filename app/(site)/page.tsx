import Link from 'next/link'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import { getSiteContent } from '@/lib/site-content/service'
import { getTalentsBySlugs } from '@/lib/site-content/public'
import { HomePageContent } from '@/lib/site-content/site-types'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { services as serviceDetails } from '@/lib/data/services'
import { homeTalentSlugs } from '@/lib/data/redesign-media'
import enMessages from '@/messages/en.json'
import FAQ from '@/components/blocks/FAQ'
import HomeView from '@/components/redesign/HomeView'
import SectionHeading from '@/components/ui/SectionHeading'
import TalentGrid from '@/components/blocks/TalentGrid'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import HeroCollage from '@/components/redesign/HeroCollage'
import { heroCollageImages } from '@/lib/data/redesign-media'
import DeferredMediaCarousel from '@/components/blocks/DeferredMediaCarousel'
import MediaCarouselFallback from '@/components/blocks/MediaCarouselFallback'
import { posterFor } from '@/lib/data/videos'
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
  const talents = await getTalentsBySlugs(homeTalentSlugs)
  const common = enMessages.common
  const introMediaItems = content.intro.mediaItems.map((item) => ({
    type: item.type === 'image' ? 'image' as const : 'video' as const,
    src: item.src,
    alt: item.alt,
    poster: item.poster ?? (item.type === 'video' ? posterFor(item.src) : undefined),
  }))

  return (
    <HomeView
      locale="en"
      labels={{ play: common.play, pause: common.pause, playVideo: common.playVideo, pauseVideo: common.pauseVideo }}
      heading="Global Beauty Influencer Marketing Agency"
      title={content.hero.title}
      titleSecondLine={content.hero.titleSecondLine}
      subtitle={content.hero.subtitle}
      heroMedia={
        <div className="hero-rise-media">
          <HeroCollage images={heroCollageImages} />
        </div>
      }
      introMedia={
        <DeferredMediaCarousel
          items={introMediaItems}
          // Client decision: autoplay regardless of
          // prefers-reduced-motion (Oct 2026).
          ignoreReducedMotion
          fallback={<MediaCarouselFallback items={introMediaItems} />}
        />
      }
      primaryCta={{ label: 'Enquire For Partnerships', href: '/contact' }}
      secondaryCta={{ label: 'See Our Work', href: '/work' }}
      trust={content.stats.tagline}
      featuredWork={{
        eyebrow: 'Case Studies',
        title: content.featuredWork.title,
        description: content.featuredWork.description,
        button: { label: content.featuredWork.buttonLabel, href: content.featuredWork.buttonHref },
      }}
      intro={{
        eyebrow: 'Who We Are',
        title: content.intro.title,
        paragraphs: content.intro.paragraphs.map((paragraph) => paragraph.text),
        button: { label: content.intro.buttonLabel, href: content.intro.buttonHref },
      }}
      talentsSection={
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
      }
      services={{
        eyebrow: 'Services',
        title: content.servicesOverview.title,
        subtitle: content.servicesOverview.subtitle,
        // CMS cards have no slug, so they map to the five service pages by position.
        items: content.servicesOverview.items.map((item, index) => ({
          title: item.title,
          description: item.description,
          href: serviceDetails[index] ? `/services/${serviceDetails[index].slug}` : '/services',
        })),
        exploreLabel: 'Explore service',
        button: { label: content.servicesOverview.buttonLabel, href: content.servicesOverview.buttonHref },
      }}
      departments={<Departments />}
      faq={
        <>
          <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd('en'))}</script>
          <FAQ />
        </>
      }
      cta={{
        title: "Let's Build Your Next Campaign",
        text: "Tell us about your goals and we'll match you with the right creators, strategy, production, and reporting included.",
        button: { label: 'Enquire For Partnerships', href: '/contact' },
      }}
    />
  )
}

// Departments by region (July 2026 round 3), client order USA → Asia →
// Europe → Middle East.
function Departments() {
  const departments = [
    {
      region: 'USA',
      href: '/influencer-marketing-usa',
      copy: (
        <>
          Creator campaigns for <Link href="/beauty-influencer-marketing-agency">beauty</Link> and{' '}
          <Link href="/skincare-influencer-marketing-agency">skincare</Link> brands in the world’s largest beauty market, coast to coast.
        </>
      ),
    },
    {
      region: 'Asia',
      href: '/influencer-marketing-asia',
      copy: (
        <>
          From Seoul to Shanghai, Tokyo and Singapore, home of our{' '}
          <Link href="/korean-skincare-influencer-marketing">K-beauty</Link> specialism.
        </>
      ),
    },
    {
      region: 'Europe',
      href: '/influencer-marketing-uk',
      copy: (
        <>
          Campaigns across <Link href="/influencer-marketing-uk">Europe</Link> and the continent’s style capitals.
        </>
      ),
    },
    {
      region: 'Middle East',
      href: '/influencer-marketing-dubai',
      copy: (
        <>
          Rooted in Dubai, reaching audiences across the <Link href="/influencer-marketing-uae">UAE</Link> and GCC.
        </>
      ),
    },
  ]

  return (
    <section className="rd-section rd-departments">
      <p className="rd-eyebrow">Our Departments</p>
      <ul>
        {departments.map((dept) => (
          <li key={dept.region}>
            <Link href={dept.href}>
              {dept.region}
              <span aria-hidden="true">→</span>
            </Link>
            <p>{dept.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
