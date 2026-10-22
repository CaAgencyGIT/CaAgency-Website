import Image from 'next/image'
import Link from 'next/link'
import IntentPrefetchLink from '@/components/layout/IntentPrefetchLink'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import type { HeaderLabels } from '@/components/layout/header-types'
import { localizeHref } from '@/lib/i18n/client-paths'

const menuItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'talents', href: '/talents' },
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
] as const

// October 2026 redesign: one responsive header. On phones the menu becomes a
// scrollable row under the logo, so every page stays one tap away.
export default function Header({ locale, labels }: { locale: string; labels: HeaderLabels }) {
  return (
    <>
      <a href="#main-content" className="rd rd-skip">
        {labels.skipToContent}
      </a>

      <header data-site-header className="rd rd-header">
        <Link href={localizeHref('/', locale)} prefetch={false} className="shrink-0">
          <Image
            src="/images/site/logo-full.png"
            alt="CA Agency"
            width={800}
            height={532}
            className="-my-2 h-[96px] w-auto max-[760px]:h-[64px]"
            loading="eager"
          />
        </Link>
        <nav aria-label={labels.mainMenu}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <IntentPrefetchLink href={item.href} locale={locale}>
                  {labels[item.key]}
                </IntentPrefetchLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="rd-header-actions">
          <div className="rd-language">
            <LanguageSwitcher locale={locale} label={labels.languageSelector} />
          </div>
          <IntentPrefetchLink href="/contact" locale={locale} markCurrent={false} className="rd-pill">
            {labels.contact}
          </IntentPrefetchLink>
        </div>
      </header>
    </>
  )
}
