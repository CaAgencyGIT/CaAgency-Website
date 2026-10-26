import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import VideoPlayer from '@/components/ui/VideoPlayer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeadingAccent from '@/components/ui/HeadingAccent'
import { caseStudies, caseStudyStill, getCaseStudy } from '@/lib/data/case-studies'
import { posterFor, publishedDateFor } from '@/lib/data/videos'
import { brandWatermarks, currentCaseStudies } from '@/lib/data/redesign-media'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'
import CaseFilmWithSound from '@/components/blocks/CaseFilmWithSound'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// No `dynamicParams = false`: it rejects unknown slugs before the (site)
// layout renders, so visitors got Next's bare unbranded 404 (no header, no
// <html lang>). The page calls notFound() itself, which renders not-found.tsx.

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return { title: 'Case Study Not Found' }
  }

  const title = `${study.brand} Influencer Marketing Case Study`

  return buildPageMetadata({
    title,
    description: study.summary,
    path: `/case-studies/${slug}`,
    localized: false,
    type: 'article',
    keywords: [
      `${study.brand} influencer campaign`,
      'influencer marketing case study',
      study.vertical.toLowerCase(),
      ...study.platforms.map((p) => `${p} campaign`),
    ],
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  // One study from the same vertical, then the ones that follow this study on
  // the Work page, so every current study is linked from two to four others.
  const listed = currentCaseStudies()
  const position = listed.indexOf(study)
  const following = position === -1 ? listed : [...listed.slice(position + 1), ...listed.slice(0, position)]
  const sameVertical = following.find((cs) => cs.vertical === study.vertical)
  const related = [
    ...(sameVertical ? [sameVertical] : []),
    ...following.filter((cs) => cs !== sameVertical),
  ].slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.brand} Influencer Marketing Case Study`,
    description: study.summary,
    image: `https://caagency.com${caseStudyStill(study)}`,
    author: organizationRef,
    publisher: organizationRef,
    datePublished: publishedDateFor(study.videoSrc),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://caagency.com/case-studies/${slug}`,
    },
    ...(study.videoSrc && {
      video: {
        '@type': 'VideoObject',
        name: study.title,
        description: study.summary,
        contentUrl: `https://caagency.com${study.videoSrc}`,
        thumbnailUrl: `https://caagency.com${posterFor(study.videoSrc)}`,
        uploadDate: publishedDateFor(study.videoSrc),
      },
    }),
  }

  // Creator showcases describe the post itself, so they use neutral headings.
  const narrative = study.showcase
    ? [
        { heading: 'Overview', body: study.brief },
        { heading: 'In the Video', body: study.approach },
        { heading: 'Highlights', body: study.outcome },
      ]
    : [
        { heading: 'The Brief', body: study.brief },
        { heading: 'Our Approach', body: study.approach },
        { heading: 'The Outcome', body: study.outcome },
      ]
  if (study.image) narrative[1].heading = 'In the Post'

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:pt-[34px] mobile:pb-[30px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px]">
            {brandWatermarks[study.brand] && (
              <Image
                src={brandWatermarks[study.brand].src}
                alt={`${study.brand} logo`}
                width={brandWatermarks[study.brand].width}
                height={brandWatermarks[study.brand].height}
                sizes="220px"
                priority
                className="mb-8 h-auto max-h-[64px] w-auto max-w-[220px] object-contain object-left [filter:brightness(0)] mobile:mb-6 mobile:max-h-[34px] mobile:max-w-[130px]"
              />
            )}
            <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red mobile:text-[11px] mobile:tracking-[0.18em]">
              {study.vertical} · Case Study
            </span>
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:mb-4 mobile:text-[26px] mobile:leading-[1.2]">
              {study.title}
            </Heading>
            <Text color="dark" size="lg" className="opacity-80 mobile:text-[15px] mobile:leading-[1.65]">
              {study.summary}
            </Text>
          </div>
        </div>
      </section>

      {/* Video + narrative */}
      <section className="bg-background-base px-section-x pb-sec-sm">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row gap-[50px] mobile:gap-[32px]">
            {/* Campaign video: the poster is the LCP element, so it loads eagerly
                and uses the CSS entrance instead of the JS-gated scroll reveal. */}
            <div className="hero-rise-media w-full md:w-[38%] md:max-w-[420px] shrink-0 mobile:mx-auto mobile:w-[62%] mobile:max-w-[250px]">
              <div className="rounded-card overflow-hidden ring-1 ring-black/5 shadow-e3">
                {study.image ? (
                  <Image
                    src={study.image.src}
                    alt={`${study.creatorName ?? study.brand} for ${study.brand}`}
                    width={study.image.width}
                    height={study.image.height}
                    sizes="(max-width: 767px) 62vw, 420px"
                    priority
                    quality={90}
                    className="block h-auto w-full"
                  />
                ) : study.hasAudio ? (
                  <CaseFilmWithSound src={study.videoSrc} poster={posterFor(study.videoSrc)} />
                ) : (
                <VideoPlayer
                  src={study.videoSrc}
                  poster={posterFor(study.videoSrc)}
                  posterSizes="(max-width: 767px) 62vw, 420px"
                  posterPriority
                  aspectRatio="9:16"
                  autoplay
                  muted
                  loop
                  ignoreReducedMotion
                  className="rounded-card"
                />
                )}
              </div>
            </div>

            {/* Narrative + facts */}
            <div className="w-full">
              {/* Facts card */}
              <ScrollReveal yOffset={24}>
                <dl className="mb-10 grid grid-cols-2 gap-x-8 gap-y-5 rounded-card border border-black/10 bg-background-soft p-6 mobile:gap-x-5 mobile:gap-y-4 mobile:rounded-[16px] mobile:p-5 mobile:[&_dd]:text-[14px] mobile:[&_dt]:text-[10.5px]">
                  <div>
                    <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                      Brand
                    </dt>
                    <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">{study.brand}</dd>
                  </div>
                  <div>
                    <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                      Platforms
                    </dt>
                    <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">
                      {study.platforms.join(', ')}
                    </dd>
                  </div>
                  {study.creator && (
                    <div>
                      <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                        Creator
                      </dt>
                      <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">
                        {study.creatorName ? (
                          <>
                            {study.creatorName}{' '}
                            <a
                              href={`https://www.instagram.com/${study.creator.replace(/^@/, '')}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground-subtle underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground-primary hover:decoration-black/60"
                            >
                              {study.creator}
                            </a>
                          </>
                        ) : (
                          study.creator
                        )}
                      </dd>
                    </div>
                  )}
                  {study.services.length > 0 && (
                  <div className={study.creator ? undefined : 'col-span-2'}>
                    <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                      Services
                    </dt>
                    <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">
                      {study.services.join(' · ')}
                    </dd>
                  </div>
                  )}
                </dl>
              </ScrollReveal>

              {/* Real client-approved figures only; hidden while metrics is empty */}
              {study.metrics.length > 0 && (
                <ScrollReveal yOffset={24}>
                  <div className="mb-10 grid grid-cols-3 mobile:grid-cols-1 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-card border border-black/10 p-6 text-center">
                        <p className="font-anegra text-[36px] font-semibold text-accent-red mb-1">{metric.value}</p>
                        <p className="font-work-sans text-[14px] text-foreground-subtle">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {narrative.map((section) => (
                <ScrollReveal key={section.heading} yOffset={24} className="mb-8">
                  <Heading as="h2" color="dark" className="mb-3 text-[28px] mobile:mb-2 mobile:text-[21px]">
                    {section.heading}
                  </Heading>
                  <Text color="dark" size="sm" className="opacity-80 leading-[1.8] mobile:text-[14.5px] mobile:leading-[1.7]">
                    {section.body}
                  </Text>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="bg-background-soft py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="mb-10 text-center">
            <Heading as="h2" color="dark" className="mb-5 text-[40px] tablet:text-[32px] mobile:text-[24px]">
              More Case Studies
            </Heading>
            <HeadingAccent className="mb-0" />
          </ScrollReveal>
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]">
            {related.map((cs) => (
              <ScrollReveal key={cs.slug} yOffset={24}>
                <CaseStudyCard study={cs} playVideo />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:mb-4 mobile:text-[24px]">
            Achieve Results of This Calibre
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            Tell us about your brand and we&apos;ll match you with the right creators for your next campaign.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact">Start Your Campaign</Button>
            <Button href="/work" variant="dark">View All Work</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
