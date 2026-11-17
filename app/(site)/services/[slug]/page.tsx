import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getService } from '@/lib/data/services'
import { serviceGuides } from '@/lib/data/guides'
import { englishServiceUi } from '@/lib/data/service-ui'
import ServiceDetailPage from '@/components/site/ServiceDetailPage'
import { servicePageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { organizationJsonLd } from '@/lib/seo/root-metadata'

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

  const metadata = buildPageMetadata({
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
  return {
    ...metadata,
    alternates: { canonical: `https://caagency.com/services/${slug}`, languages: servicePageLanguages(slug) },
  }
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

      <ServiceDetailPage service={service} otherServices={otherServices} guides={serviceGuides[service.slug]} ui={englishServiceUi} locale="en" />
    </>
  )
}
