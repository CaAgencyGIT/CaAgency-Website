import { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'

const listed = currentCaseStudies()
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Influencer Marketing Case Studies',
  description:
    'How CA Agency runs influencer campaigns for brands like YSL Beauty, NARS, HONOR, and Mixsoon, the brief, the approach, and the work itself.',
  path: '/case-studies',
  localized: false,
  keywords: [
    'influencer marketing case studies',
    'influencer campaign examples',
    'beauty influencer campaigns',
    'creator marketing results',
  ],
})

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: listed.map((cs, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${cs.brand} Influencer Marketing Case Study`,
    url: `https://caagency.com/case-studies/${cs.slug}`,
  })),
}

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(listSchema)}</script>

      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px]">
            <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
              Case Studies
            </span>
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:text-[32px]">
              The Work, and How It Happened
            </Heading>
            <Text color="dark" size="lg" className="opacity-80">
              Behind every campaign video is a brief, a creator match, and a production process.
              These case studies show how we run influencer campaigns for beauty, skincare, and
              tech brands, from first call to final delivery.
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
                <CaseStudyCard study={cs} showSummary />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:text-[28px]">
            Your Brand Could Be Next
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            Tell us what you&apos;re launching and we&apos;ll match you with the right creators.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact">Start Your Campaign</Button>
            <Button href="/work" variant="dark">Watch the Work</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
