import Image from 'next/image'
import Link from 'next/link'
import IntentPrefetchLink from '@/components/layout/IntentPrefetchLink'
import HeaderMenu from '@/components/layout/HeaderMenu'
import IdleNavPrefetch from '@/components/layout/IdleNavPrefetch'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import type { HeaderLabels } from '@/components/layout/header-types'
import { localizeHref } from '@/lib/i18n/client-paths'

const barItems = [
  { key: 'about', href: '/about' },
  { key: 'talents', href: '/talents' },
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
] as const

const menuItems = [{ key: 'home', href: '/' }, ...barItems] as const
const barHrefs = barItems.map((item) => item.href)

// Black header bar (Oct 2026, after scooperz.com): logo left, uppercase menu
// right, then language, a "Let's talk" pill and a menu button that opens a
// full-screen menu. Phones keep the logo, language, a compact
// "Let's talk" pill and the menu button.
export default function Header({ locale, labels }: { locale: string; labels: HeaderLabels }) {
  return (
    <>
      <a href="#main-content" className="rd rd-skip">
        {labels.skipToContent}
      </a>

      <header data-site-header className="rd rd-header">
        <Link href={localizeHref('/', locale)} prefetch={false} className="rd-header-logo">
          <Image
            src="/images/site/logo_payoff.svg"
            alt="CA Agency"
            width={343}
            height={274}
            className="h-[52px] w-auto invert max-[760px]:h-[42px]"
            loading="eager"
          />
        </Link>
        <nav aria-label={labels.mainMenu} className="rd-header-nav">
          <ul>
            {barItems.map((item) => (
              <li key={item.href}>
                <IntentPrefetchLink href={item.href} locale={locale}>
                  {labels[item.key]}
                </IntentPrefetchLink>
              </li>
            ))}
          </ul>
        </nav>
        <IdleNavPrefetch hrefs={barHrefs} locale={locale} />
        <div className="rd-header-actions">
          <div className="rd-language">
            <LanguageSwitcher locale={locale} label={labels.languageSelector} tone="light" />
          </div>
          <IntentPrefetchLink href="/contact" locale={locale} className="rd-header-talk" markCurrent={false}>
            {labels.letsTalk}
          </IntentPrefetchLink>
          <HeaderMenu
            locale={locale}
            items={menuItems.map((item) => ({ href: item.href, label: labels[item.key] }))}
            openLabel={labels.openMenu}
            closeLabel={labels.closeMenu}
            menuLabel={labels.mainMenu}
          />
        </div>
      </header>
    </>
  )
}
