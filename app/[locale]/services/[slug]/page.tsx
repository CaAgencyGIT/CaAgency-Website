import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import ServiceDetailPage from '@/components/site/ServiceDetailPage'
import { getTranslatedService, translatedServices } from '@/lib/data/services-translated'
import { serviceGuides } from '@/lib/data/guides'
import { getTranslatedPost } from '@/lib/blog-translations'
import { servicePageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { organizationJsonLd } from '@/lib/seo/root-metadata'
import { jsonLdSafe } from '@/lib/sanitize'

// Translated service pages (lib/data/services-translated). Everything comes
// from code, so the page builds the same in CI and in production.

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

const baseUrl = 'https://caagency.com'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.entries(translatedServices).flatMap(([locale, { services }]) =>
    services.map((service) => ({ locale, slug: service.slug }))
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const service = getTranslatedService(locale, slug)
  if (!service) return {}
  const metadata = buildPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${slug}`,
    locale,
    localized: false,
    image: `/images/site/og/services/${slug}.jpg`,
    imageAlt: `${service.title} | CA Agency`,
  })
  return {
    ...metadata,
    alternates: { canonical: `${baseUrl}/${locale}/services/${slug}`, languages: servicePageLanguages(slug) },
  }
}

export default async function TranslatedServicePage({ params }: PageProps) {
  const { locale, slug } = await params
  const service = getTranslatedService(locale, slug)
  if (!service) notFound()
  setRequestLocale(locale)

  const { ui, services } = translatedServices[locale]
  // The English page's related guides, in this language where the guide is translated.
  const guides = serviceGuides[slug].map((guide) => {
    const post = getTranslatedPost(locale, guide.href.replace('/blog/', ''))
    return post ? { href: `/${locale}${guide.href}`, title: post.seoTitle ?? post.title, desc: post.excerpt } : guide
  })
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    inLanguage: locale,
    provider: organizationRef,
    areaServed: organizationJsonLd.areaServed,
    url: `${baseUrl}/${locale}/services/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(schema) }} />
      <ServiceDetailPage
        service={service}
        otherServices={services.filter((other) => other.slug !== slug)}
        guides={guides}
        ui={ui}
        locale={locale}
      />
    </>
  )
}
