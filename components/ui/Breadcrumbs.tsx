'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localizeHref, stripLocalePrefix } from '@/lib/i18n/client-paths'

interface BreadcrumbItem {
  label: string
  href: string
}

const translatedSegments = new Set([
  'about', 'talents', 'work', 'services', 'contact', 'faq', 'blog', 'case-studies',
  'privacy-policy', 'terms-of-service', 'business-license',
  'influencer-marketing-dubai', 'influencer-marketing-uae',
  'influencer-marketing-saudi-arabia', 'influencer-marketing-gcc',
  'influencer-marketing-korea', 'influencer-marketing-usa',
  'influencer-marketing-uk', 'influencer-marketing-canada',
  'influencer-marketing-australia', 'korean-skincare-influencer-marketing',
  'beauty-influencer-marketing-agency', 'skincare-influencer-marketing-agency',
])

function humanize(segment: string) {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export default function Breadcrumbs({
  locale,
  labels,
}: {
  locale: string
  labels: Record<string, string>
}) {
  const pathname = stripLocalePrefix(usePathname())
  const segments = pathname.split('/').filter((segment) => segment && segment !== 'index')

  if (segments.length === 0) return null

  const breadcrumbs: BreadcrumbItem[] = [
    { label: labels.home, href: '/' },
    ...segments.map((segment, index) => ({
      label: translatedSegments.has(segment) ? labels[segment] ?? humanize(segment) : humanize(segment),
      href: `/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://caagency.com${localizeHref(item.href, locale) === '/' ? '' : localizeHref(item.href, locale)}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <nav aria-label={labels.label} className="border-b border-black/10 bg-background-base px-section-x py-4">
        <div className="mx-auto max-w-container">
          <ol className="flex items-center gap-2 text-[14px]">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <span className="text-black/40" aria-hidden="true">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground-subtle" aria-current="page">{item.label}</span>
                ) : (
                  <Link href={localizeHref(item.href, locale)} prefetch={false} className="text-foreground-body transition-colors hover:text-foreground-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
