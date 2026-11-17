import Link from 'next/link'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'
import type { CaseStudy } from '@/lib/data/case-studies'
import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import { localizeHref } from '@/lib/i18n/client-paths'
import type { Locale } from '@/i18n/config'

// Body of the case-studies index, shared by the English route and the
// translated one (app/[locale]/case-studies). `listed` is the card grid,
// `archive` every other study as plain links so none is left unlinked.

interface CaseStudiesIndexProps {
  listed: CaseStudy[]
  archive: CaseStudy[]
  ui: CaseStudyUi
  locale: string
}

export default function CaseStudiesIndex({ listed, archive, ui, locale }: CaseStudiesIndexProps) {
  return (
    <>
      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px]">
            <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
              {ui.indexEyebrow}
            </span>
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:text-[32px]">
              {ui.indexHeading}
            </Heading>
            <Text color="dark" size="lg" className="opacity-80">
              {ui.indexIntro}
            </Text>
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="bg-background-base px-section-x pb-sec-sm">
        <div className="max-w-container mx-auto">
          <Stagger className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]" stagger={0.06}>
            {listed.map((cs) => (
              <StaggerItem key={cs.slug}>
                <CaseStudyCard study={cs} showSummary ui={ui} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {archive.length > 0 && (
        <section className="bg-background-base px-section-x pb-sec-sm">
          <nav aria-label={ui.moreCaseStudies} className="max-w-container mx-auto border-t border-black/5 pt-10">
            <Heading as="h2" color="dark" className="mb-6 text-[28px] mobile:text-[24px]">
              {ui.moreCaseStudies}
            </Heading>
            <ul className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-x-8 gap-y-3">
              {archive.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    href={localizeHref(`/case-studies/${cs.slug}`, locale)}
                    className="font-work-sans text-[15px] leading-[1.5] text-foreground-body underline-offset-4 hover:text-foreground-primary hover:underline"
                  >
                    {cs.creatorName ? `${cs.brand} × ${cs.creatorName}` : cs.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:text-[28px]">
            {ui.indexCtaTitle}
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            {ui.indexCtaText}
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button locale={locale as Locale} href="/contact">
              {ui.startCampaign}
            </Button>
            <Button locale={locale as Locale} href="/work" variant="dark">
              {ui.watchTheWork}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
