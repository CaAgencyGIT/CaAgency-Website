import Link from 'next/link'
import { localizeHref } from '@/lib/i18n/client-paths'

export interface BreadcrumbItem {
  label: string
  /** Path without the locale prefix */
  href: string
}

// The breadcrumb bar and its structured data. No hooks, so a page can render
// it itself when it knows a better label than the layout can work out from
// the URL (translated case studies do, see Breadcrumbs.tsx).
export default function BreadcrumbTrail({
  breadcrumbs,
  locale,
  ariaLabel,
}: {
  breadcrumbs: BreadcrumbItem[]
  locale: string
  ariaLabel: string
}) {
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
      <nav data-breadcrumbs aria-label={ariaLabel} className="border-b border-black/10 bg-background-base px-section-x py-4">
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
