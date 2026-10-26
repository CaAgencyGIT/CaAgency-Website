import Link from 'next/link'
import Image from 'next/image'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
import SectionHeading from '@/components/ui/SectionHeading'
import FaqSection from '@/components/blocks/FaqSection'
import Text from '@/components/ui/Text'
import Marquee from '@/components/ui/Marquee'
import Magnetic from '@/components/ui/Magnetic'
import VideoPlayer from '@/components/ui/VideoPlayer'
import TalentGrid from '@/components/blocks/TalentGrid'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { brandLogos } from '@/lib/data/brands'
import type { LocationLabels, LocationPageContent } from '@/lib/site-content/location-pages'
import { posterFor } from '@/lib/data/videos'
import { locationGuides, type GuideLink } from '@/lib/data/guides'
import { marketLinks, type MarketLink } from '@/lib/data/locations'
import type { Locale } from '@/i18n/config'

const englishLabels: LocationLabels = {
  intro: 'Who We Are',
  caseStudies: 'Case Studies',
  process: 'How We Work',
  highlights: 'Why CA Agency',
  talents: 'Our Creators',
  industries: 'Industries',
  faq: 'FAQ',
  otherMarkets: 'Other markets',
}

type TalentCard = {
  slug: string
  name: string
  imageUrl: string
  instagramUrl?: string
  tiktokUrl?: string
}

export default function LocationLandingPage({
  content,
  talents,
  featuredGuides = [],
  labels = englishLabels,
  showGuides = true,
  locale = 'en',
  path,
  markets = marketLinks,
}: {
  content: LocationPageContent
  talents: TalentCard[]
  featuredGuides?: GuideLink[]
  labels?: LocationLabels
  locale?: Locale
  // The linked guides are English-only, so translated pages omit them.
  showGuides?: boolean
  // This page's own path, left out of the "Other markets" row.
  path?: string
  markets?: MarketLink[]
}) {
  const featuredHrefs = new Set(featuredGuides.map((guide) => guide.href))
  const guides = [...featuredGuides, ...locationGuides.filter((guide) => !featuredHrefs.has(guide.href))].slice(0, 6)
  const otherMarkets = markets.filter((market) => !path || !market.href.endsWith(path))

  return (
    <>
      <section className="bg-background-base py-[100px] tablet:py-[80px] mobile:py-[60px] px-section-x">
        <div className="max-w-container mx-auto text-center">
          <Heading
            as="h1"
            color="dark"
            className="hero-rise hero-rise-1 mb-6 text-[56px] tablet:text-[44px] mobile:text-[32px] leading-tight whitespace-pre-line"
          >
            {content.hero.title}
          </Heading>
          <Text color="dark" size="lg" className="hero-rise hero-rise-2 max-w-[760px] mx-auto mb-8">
            {content.hero.subtitle}
          </Text>
          <div className="hero-rise hero-rise-3 flex flex-wrap gap-4 justify-center">
            <Magnetic>
              <Button locale={locale} href={content.hero.primaryButtonHref}>
                {content.hero.primaryButtonLabel}
              </Button>
            </Magnetic>
            <Button locale={locale} href={content.hero.secondaryButtonHref} variant="dark">
              {content.hero.secondaryButtonLabel}
            </Button>
          </div>
        </div>
      </section>

      {content.marquee && content.marquee.items.length > 0 && (
        <section className="bg-background-base py-[26px] border-y border-black/5">
          <Marquee items={content.marquee.items} />
        </section>
      )}

      <section className="bg-background-base py-[60px] px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto">
          <Stagger className="grid grid-cols-4 mobile:grid-cols-2 gap-8 text-center" stagger={0.1}>
            {content.stats.map((stat) => (
              <StaggerItem key={`${stat.label}-${stat.value}`}>
                <div className="font-anegra text-[60px] mobile:text-[40px] text-accent-red">
                  {stat.value}
                </div>
                <div className="text-black/60 uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {content.intro && (
        <section className="bg-background-base py-sec px-section-x border-t border-black/5">
          <ScrollReveal yOffset={24} className="max-w-[820px] mx-auto">
            <SectionHeading align="start" size="md" eyebrow={labels.intro} title={content.intro.heading} className="mb-8" />
            <div className="flex flex-col gap-5">
              {content.intro.paragraphs.map((paragraph, index) => (
                <Text key={index} color="dark" size="base" className="opacity-75 leading-relaxed">
                  {paragraph.text}
                </Text>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {content.caseStudies && content.caseStudies.items.length > 0 && (
        <section className="bg-background-base py-sec px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <SectionHeading align="start" size="md" eyebrow={labels.caseStudies} title={content.caseStudies.title} className="mb-6" />
            {content.caseStudies.subtitle && (
              <Text color="dark" size="base" className="mb-10 max-w-[680px] opacity-70">
                {content.caseStudies.subtitle}
              </Text>
            )}
            <Stagger className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-6" stagger={0.1}>
              {content.caseStudies.items.map((item) => (
                <StaggerItem
                  key={item.src ?? item.image ?? item.brand}
                  className="hover-lift group relative overflow-hidden rounded-card ring-1 ring-black/10 hover:ring-black/20 hover:shadow-e3"
                >
                  {item.src ? (
                    <VideoPlayer src={item.src} poster={posterFor(item.src)} posterSizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 420px" aspectRatio="9:16" autoplay muted loop ignoreReducedMotion className="rounded-card" />
                  ) : item.image ? (
                    <div className="relative aspect-9/16 w-full">
                      <Image
                        src={item.image}
                        alt={`${item.brand}, ${item.name}`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="pointer-events-auto font-anegra text-[20px] tracking-[0.5px] text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                      >
                        {item.brand}
                      </Link>
                    ) : (
                      <div className="font-anegra text-[20px] tracking-[0.5px] text-white">{item.brand}</div>
                    )}
                    <div className="text-white/70 text-[13px]">{item.name}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {content.process && content.process.steps.length > 0 && (
        <section className="bg-background-base py-sec px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <SectionHeading align="start" size="md" eyebrow={labels.process} title={content.process.title} className="mb-6" />
            {content.process.subtitle && (
              <Text color="dark" size="base" className="mb-10 max-w-[680px] opacity-70">
                {content.process.subtitle}
              </Text>
            )}
            <Stagger className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-6" stagger={0.1}>
              {content.process.steps.map((step, index) => (
                <StaggerItem
                  key={step.title}
                  className="hover-lift h-full rounded-card border border-black/10 bg-background-soft p-6 hover:border-black/15 hover:bg-white hover:shadow-e3"
                >
                  <div className="font-anegra text-[40px] leading-none text-accent-red/80 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-foreground-primary font-semibold text-lg mb-2">{step.title}</h3>
                  <Text color="dark" size="sm" className="opacity-70">
                    {step.description}
                  </Text>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="bg-background-base py-sec px-section-x">
        <div className="max-w-container mx-auto">
          <SectionHeading align="start" size="md" eyebrow={labels.highlights} title={content.highlights.title} className="mb-8" />
          <Stagger className="grid grid-cols-2 mobile:grid-cols-1 gap-8" stagger={0.1}>
            {content.highlights.items.map((item) => (
              <StaggerItem key={item.title} className="hover-lift h-full rounded-card border border-black/10 bg-background-soft p-8 hover:border-black/15 hover:bg-white hover:shadow-e3">
                <h3 className="text-foreground-primary font-semibold text-xl mb-3">{item.title}</h3>
                <Text color="dark" size="sm" className="opacity-70">
                  {item.description}
                </Text>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {talents.length > 0 && (
        <section className="bg-background-base py-sec px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <SectionHeading align="start" size="md" eyebrow={labels.talents} title={content.talents.title} className="mb-8" />
            <TalentGrid talents={talents} columns={6} />
            <div className="text-center mt-10">
              <Button locale={locale} href={content.talents.buttonHref}>{content.talents.buttonLabel}</Button>
            </div>
          </div>
        </section>
      )}

      <section className="bg-background-base py-sec px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto">
          <SectionHeading align="start" size="md" eyebrow={labels.industries} title={content.industries.title} className="mb-8" />
          <Stagger className="grid grid-cols-3 mobile:grid-cols-1 gap-6" stagger={0.08}>
            {content.industries.items.map((item) => (
              <StaggerItem key={item.title} className="hover-lift h-full rounded-card border border-black/10 bg-background-soft p-6 text-center hover:border-black/15 hover:bg-white hover:shadow-e3">
                <div className="text-accent-red text-3xl mb-3">{item.icon}</div>
                <h3 className="text-foreground-primary font-semibold text-lg mb-2">{item.title}</h3>
                <Text color="dark" size="sm" className="opacity-70">
                  {item.description}
                </Text>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {content.faq && <FaqSection eyebrow={labels.faq} title={content.faq.title} items={content.faq.items} />}

      {showGuides && (
        <section className="bg-background-base py-sec px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <SectionHeading align="start" size="md" eyebrow="Resources" title="Influencer Marketing Resources" className="mb-8" />
            <div className="grid grid-cols-3 mobile:grid-cols-1 gap-6">
              {guides.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="hover-lift block rounded-card border border-black/10 bg-background-soft p-6 hover:border-black/15 hover:bg-white hover:shadow-e3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-red"
                >
                  <h3 className="text-foreground-primary font-semibold text-lg mb-2">{post.title}</h3>
                  <Text color="dark" size="sm" className="opacity-70">
                    {post.desc}
                  </Text>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/blog" className="text-foreground-primary underline underline-offset-4">
                Explore the CA Agency blog →
              </Link>
            </div>
          </div>
        </section>
      )}

      {otherMarkets.length > 0 && (
        <nav aria-label={labels.otherMarkets} className="bg-background-base px-section-x py-12 mobile:py-10 border-t border-black/5">
          <div className="max-w-container mx-auto">
            <span className="mb-4 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
              {labels.otherMarkets}
            </span>
            <ul className="flex flex-wrap gap-2.5">
              {otherMarkets.map((market) => (
                <li key={market.href}>
                  <Link
                    href={market.href}
                    className="inline-flex rounded-full border border-black/15 px-4 py-2 font-jost text-[13px] uppercase tracking-[0.12em] text-foreground-primary transition-colors hover:border-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mobile:px-3 mobile:py-1.5 mobile:text-[12px]"
                  >
                    {market.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <section className="bg-accent-red py-sec px-section-x">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="white" className="mb-6 text-[40px] mobile:text-[28px]">
            {content.cta.title}
          </Heading>
          <Text color="white" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-90">
            {content.cta.description}
          </Text>
          <Magnetic>
            <Button locale={locale} href={content.cta.buttonHref} variant="light">
              {content.cta.buttonLabel}
            </Button>
          </Magnetic>
        </ScrollReveal>
      </section>

      <BrandCarousel images={brandLogos} />
    </>
  )
}
