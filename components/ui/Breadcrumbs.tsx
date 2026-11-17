'use client'

import { usePathname } from 'next/navigation'
import { stripLocalePrefix } from '@/lib/i18n/client-paths'
import { defaultLocale } from '@/i18n/config'
import BreadcrumbTrail, { type BreadcrumbItem } from '@/components/ui/BreadcrumbTrail'

const translatedSegments = new Set([
  'about', 'talents', 'work', 'services', 'contact', 'faq', 'blog', 'case-studies',
  'privacy-policy', 'terms-of-service', 'business-license',
  'influencer-marketing-dubai', 'influencer-marketing-uae',
  'influencer-marketing-saudi-arabia', 'influencer-marketing-gcc',
  'influencer-marketing-korea', 'influencer-marketing-usa',
  'influencer-marketing-uk', 'influencer-marketing-canada',
  'influencer-marketing-australia', 'influencer-marketing-europe',
  'influencer-marketing-germany', 'influencer-marketing-france',
  'influencer-marketing-switzerland', 'influencer-marketing-nordics',
  'influencer-marketing-sydney', 'influencer-marketing-melbourne',
  'korean-skincare-influencer-marketing',
  'beauty-influencer-marketing-agency', 'skincare-influencer-marketing-agency',
])

function humanize(segment: string) {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export default function Breadcrumbs({
  locale,
  labels,
  pageLabels = {},
}: {
  locale: string
  labels: Record<string, string>
  /** Names for detail pages by their slug (the translated service names); other slugs are shown humanized. */
  pageLabels?: Record<string, string>
}) {
  const pathname = stripLocalePrefix(usePathname())
  const segments = pathname.split('/').filter((segment) => segment && segment !== 'index')

  if (segments.length === 0) return null
  // A translated case study renders its own trail with the study's title
  // (app/[locale]/case-studies/[slug]); the URL only has the English slug.
  if (locale !== defaultLocale && segments.length === 2 && segments[0] === 'case-studies') return null

  const breadcrumbs: BreadcrumbItem[] = [
    { label: labels.home, href: '/' },
    ...segments.map((segment, index) => ({
      label: pageLabels[segment] ?? (translatedSegments.has(segment) ? labels[segment] ?? humanize(segment) : humanize(segment)),
      href: `/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]
  return <BreadcrumbTrail breadcrumbs={breadcrumbs} locale={locale} ariaLabel={labels.label} />
}
