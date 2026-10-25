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
] as const

// Editorial header (Oct 2026, modelled on dulcedo.com): text menu left, logo
// centred, Contact and language right. On phones the menu is a scrollable
// row under the logo, so every page stays one tap away.
export default function Header({ locale, labels }: { locale: string; labels: HeaderLabels }) {
  return (
    <>
      <a href="#main-content" className="rd rd-skip">
        {labels.skipToContent}
      </a>

      <header data-site-header className="rd rd-header">
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
        <Link href={localizeHref('/', locale)} prefetch={false} className="rd-header-logo">
          <Image
            src="/images/site/logo_payoff.svg"
            alt="CA Agency"
            width={343}
            height={274}
            className="h-[58px] w-auto max-[760px]:h-[46px]"
            loading="eager"
          />
        </Link>
        <div className="rd-header-actions">
          <IntentPrefetchLink href="/contact" locale={locale}>
            {labels.contact}
          </IntentPrefetchLink>
          <div className="rd-language">
            <LanguageSwitcher locale={locale} label={labels.languageSelector} />
          </div>
        </div>
      </header>
    </>
  )
}
