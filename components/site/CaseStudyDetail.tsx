import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import VideoPlayer from '@/components/ui/VideoPlayer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeadingAccent from '@/components/ui/HeadingAccent'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'
import CaseFilmWithSound from '@/components/blocks/CaseFilmWithSound'
import type { CaseStudy } from '@/lib/data/case-studies'
import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { CreatorTalent } from '@/lib/case-study-creator'
import { posterFor } from '@/lib/data/videos'
import { brandWatermarks } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'
import type { Locale } from '@/i18n/config'

// Body of a case-study page, shared by the English route
// (app/(site)/case-studies/[slug]) and the translated one
// (app/[locale]/case-studies/[slug]). Copy and labels come in through props.

interface CaseStudyDetailProps {
  study: CaseStudy
  related: CaseStudy[]
  creatorTalent: CreatorTalent | null
  ui: CaseStudyUi
  locale: string
}

export default function CaseStudyDetail({ study, related, creatorTalent, ui, locale }: CaseStudyDetailProps) {
  // Creator showcases describe the post itself, so they use neutral headings.
  const narrative = study.showcase
    ? [
        { heading: ui.overview, body: study.brief },
        { heading: ui.inTheVideo, body: study.approach },
        { heading: ui.highlights, body: study.outcome },
      ]
    : [
        { heading: ui.theBrief, body: study.brief },
        { heading: ui.ourApproach, body: study.approach },
        { heading: ui.theOutcome, body: study.outcome },
      ]
  if (study.image || study.photoPost) narrative[1].heading = ui.inThePost

  return (
    <>
      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:pt-[34px] mobile:pb-[30px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px]">
            {brandWatermarks[study.brand] && (
              <Image
                src={brandWatermarks[study.brand].src}
                alt={ui.logoAlt.replace('{brand}', study.brand)}
                width={brandWatermarks[study.brand].width}
                height={brandWatermarks[study.brand].height}
                sizes="220px"
                priority
                className="mb-8 h-auto max-h-[64px] w-auto max-w-[220px] object-contain object-left [filter:brightness(0)] mobile:mb-6 mobile:max-h-[34px] mobile:max-w-[130px]"
              />
            )}
            <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red mobile:text-[11px] mobile:tracking-[0.18em]">
              {study.topicPath ? (
                <Link className="underline underline-offset-4" href={localizeHref(study.topicPath, locale)}>{study.vertical}</Link>
              ) : study.vertical} · {ui.eyebrowSuffix}
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
                      {ui.brand}
                    </dt>
                    <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">{study.brand}</dd>
                  </div>
                  <div>
                    <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                      {ui.platforms}
                    </dt>
                    <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">
                      {study.platforms.join(', ')}
                    </dd>
                  </div>
                  {study.creator && (
                    <div>
                      <dt className="font-jost text-[12px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                        {ui.creator}
                      </dt>
                      <dd className="font-work-sans text-[15px] text-foreground-primary font-medium">
                        {creatorTalent ? (
                          <>
                            <Link
                              href={localizeHref(`/talents/${creatorTalent.slug}`, locale)}
                              className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground-subtle hover:decoration-black/60"
                            >
                              {study.creatorName ?? creatorTalent.name}
                            </Link>{' '}
                            <a
                              href={creatorTalent.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground-subtle underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground-primary hover:decoration-black/60"
                            >
                              {study.creator}
                            </a>
                          </>
                        ) : study.creatorName ? (
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
                      {ui.services}
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
              {ui.moreCaseStudies}
            </Heading>
            <HeadingAccent className="mb-0" />
          </ScrollReveal>
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]">
            {related.map((cs) => (
              <ScrollReveal key={cs.slug} yOffset={24}>
                <CaseStudyCard study={cs} playVideo ui={ui} locale={locale} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:mb-4 mobile:text-[24px]">
            {ui.detailCtaTitle}
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            {ui.detailCtaText}
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button locale={locale as Locale} href="/contact">
              {ui.startCampaign}
            </Button>
            <Button locale={locale as Locale} href="/work" variant="dark">
              {ui.viewAllWork}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
