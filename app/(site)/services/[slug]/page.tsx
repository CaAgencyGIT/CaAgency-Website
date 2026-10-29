import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { services, getService } from '@/lib/data/services'
import { serviceGuides } from '@/lib/data/guides'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { organizationJsonLd } from '@/lib/seo/root-metadata'
import FaqSection from '@/components/blocks/FaqSection'

const specialismLinks = [
  { href: '/beauty-influencer-marketing-agency', label: 'Beauty influencer marketing' },
  { href: '/skincare-influencer-marketing-agency', label: 'Skincare influencer marketing' },
  { href: '/korean-skincare-influencer-marketing', label: 'K-beauty influencer marketing' },
  { href: '/influencer-marketing-usa', label: 'Influencer marketing in the USA' },
]

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

// No `dynamicParams = false`: it rejects unknown slugs before the (site)
// layout renders, so visitors got Next's bare unbranded 404 (no header, no
// <html lang>). The page calls notFound() itself, which renders not-found.tsx.

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return buildPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${slug}`,
    localized: false,
    image: `/images/site/og/services/${slug}.jpg`,
    imageAlt: `${service.title} | CA Agency`,
    keywords: [
      service.title.toLowerCase(),
      'influencer marketing agency',
      'beauty marketing',
      'creator campaigns',
    ],
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const otherServices = services.filter((s) => s.slug !== service.slug)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: organizationRef,
    areaServed: organizationJsonLd.areaServed,
    url: `https://caagency.com/services/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:pt-[34px] mobile:pb-[30px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px]">
            <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red mobile:text-[11px] mobile:tracking-[0.18em]">
              What We Do
            </span>
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:mb-4 mobile:text-[26px] mobile:leading-[1.2]">
              {service.title}
            </Heading>
            <Text color="dark" size="lg" className="opacity-80 mobile:text-[15px] mobile:leading-[1.65]">
              {service.tagline}
            </Text>
          </div>
        </div>
      </section>

      {/* Visual + narrative */}
      <section className="bg-background-base px-section-x pb-sec-sm">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row gap-[50px] mobile:gap-[32px]">
            <div className="hero-rise-media w-full md:w-[38%] md:max-w-[420px] shrink-0 mobile:mx-auto mobile:w-[68%] mobile:max-w-[270px]">
              <div className="relative aspect-4/5 rounded-card overflow-hidden ring-1 ring-black/5 shadow-e3 mobile:rounded-[16px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 767px) 68vw, 420px"
                />
              </div>
            </div>

            <div className="w-full">
              <ScrollReveal yOffset={24} className="mb-8">
                <Heading as="h2" color="dark" className="mb-3 text-[28px] mobile:text-[21px]">
                  How we work
                </Heading>
                {service.breakdown.map((paragraph) => (
                  <Text key={paragraph.slice(0, 24)} color="dark" size="sm" className="mb-5 opacity-80 leading-[1.8]">
                    {paragraph}
                  </Text>
                ))}
              </ScrollReveal>

              <ScrollReveal yOffset={24}>
                <Heading as="h2" color="dark" className="mb-4 text-[28px] mobile:text-[21px]">
                  What&apos;s included
                </Heading>
                <ul className="grid grid-cols-2 mobile:grid-cols-1 gap-x-8 gap-y-3 rounded-card border border-black/10 bg-background-soft p-6 mobile:rounded-[16px] mobile:p-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-work-sans text-[15px] text-foreground-primary mobile:text-[14px]">
                      <span aria-hidden="true" className="mt-[2px] text-accent-red">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Fit + process */}
      <section className="bg-background-base py-sec-sm px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto grid grid-cols-2 mobile:grid-cols-1 gap-[60px] mobile:gap-[40px]">
          <ScrollReveal yOffset={24}>
            <Heading as="h2" color="dark" className="mb-6 text-[28px] mobile:mb-4 mobile:text-[21px]">
              Who it&apos;s for
            </Heading>
            <ul className="space-y-4">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 font-work-sans text-[15px] leading-[1.7] text-foreground-body">
                  <span aria-hidden="true" className="mt-[2px] text-accent-red">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal yOffset={24}>
            <Heading as="h2" color="dark" className="mb-6 text-[28px] mobile:mb-4 mobile:text-[21px]">
              How an engagement runs
            </Heading>
            <ol role="list" className="space-y-5">
              {service.process.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span aria-hidden="true" className="w-[30px] shrink-0 font-anegra text-[20px] leading-none text-foreground-subtle tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-work-sans text-[16px] font-semibold text-foreground-primary">{step.title}</h3>
                    <p className="mt-1 font-work-sans text-[14px] leading-[1.7] text-foreground-body">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* Category specialisms: internal links to the category and market pages */}
      <section className="bg-background-soft py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24}>
            <Heading as="h2" color="dark" className="mb-3 text-[28px] mobile:text-[21px]">
              Built for beauty &amp; skincare
            </Heading>
            <Text color="dark" size="sm" className="mb-6 max-w-[680px] opacity-80">
              We specialise in beauty, skincare and lifestyle brands, in the USA and around the world.
            </Text>
            <ul className="flex flex-wrap gap-3">
              {specialismLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-full border border-black/15 bg-background-base px-5 py-2 font-work-sans text-[14px] text-foreground-primary transition-colors hover:border-black/30 hover:text-foreground-subtle"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection eyebrow="FAQ" title={`${service.title} FAQs`} items={service.faqs} />

      {/* Related guides */}
      <section className="bg-background-base py-sec-sm px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="mb-10 text-center">
            <Heading as="h2" color="dark" className="text-[40px] tablet:text-[32px] mobile:text-[28px]">
              Related Guides
            </Heading>
          </ScrollReveal>
          <div className="grid grid-cols-3 mobile:grid-cols-1 gap-[20px]">
            {serviceGuides[service.slug].map((guide) => (
              <ScrollReveal key={guide.href} yOffset={24}>
                <Link
                  href={guide.href}
                  className="hover-lift group block h-full rounded-card border border-black/10 bg-background-soft p-6 hover:border-black/15 hover:bg-white hover:shadow-e3"
                >
                  <p className="font-anegra text-[19px] leading-snug text-foreground-primary group-hover:text-foreground-subtle transition-colors">
                    {guide.title}
                  </p>
                  <p className="mt-2 font-work-sans text-[13px] text-foreground-subtle">{guide.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-background-soft py-sec-sm px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="mb-10 text-center">
            <Heading as="h2" color="dark" className="text-[40px] tablet:text-[32px] mobile:text-[28px]">
              Explore Our Other Services
            </Heading>
          </ScrollReveal>
          <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]">
            {otherServices.map((other) => (
              <ScrollReveal key={other.slug} yOffset={24}>
                <Link
                  href={`/services/${other.slug}`}
                  className="hover-lift group block h-full rounded-card border border-black/10 bg-background-base p-6 shadow-e1 hover:shadow-e2 transition-shadow"
                >
                  <p className="font-anegra text-[19px] leading-snug text-foreground-primary group-hover:text-foreground-subtle transition-colors">
                    {other.title}
                  </p>
                  <p className="mt-2 font-work-sans text-[13px] text-foreground-subtle">
                    {other.tagline}
                  </p>
                  <span className="mt-4 inline-block text-accent-red" aria-hidden="true">
                    →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:text-[28px]">
            Let&apos;s Build Your Next Campaign
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            Tell us about your goals and we&apos;ll shape the right mix of creators, content, and strategy around them.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact">Enquire For Partnerships</Button>
            <Button href="/work" variant="dark">
              See Our Work
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
