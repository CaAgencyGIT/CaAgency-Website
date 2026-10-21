import Image from 'next/image'
import Link from 'next/link'
import IntentPrefetchLink from '@/components/layout/IntentPrefetchLink'
import HeaderElevation from '@/components/layout/HeaderElevation'
import MobileNavigation from '@/components/layout/MobileNavigation'
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

export default function Header({ locale, labels }: { locale: string; labels: HeaderLabels }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-100 focus:rounded-sm focus:bg-accent-red focus:px-4 focus:py-2 focus:text-white"
      >
        {labels.skipToContent}
      </a>

      <header
        data-site-header
        data-elevated="false"
        className="sticky top-0 z-50 hidden border-b border-transparent bg-background-base px-[20px] py-[10px] text-foreground-primary shadow-none transition-[box-shadow,border-color] duration-300 data-[elevated=true]:border-black/10 data-[elevated=true]:shadow-e2 lg:flex laptop:px-[30px]"
      >
        <div className="mx-auto w-full max-w-container">
          <div className="flex h-[76px] items-center justify-between">
            <div className="flex w-[80%] items-center laptop:w-[80%]">
              <Link href={localizeHref('/', locale)} prefetch={false} className="shrink-0 p-[6px]">
                <Image src="/images/site/logo-full.png" alt="CA Agency" width={800} height={532} className="h-[58px] w-auto object-contain" loading="eager" />
              </Link>
              <nav aria-label={labels.mainMenu} className="flex items-center ps-[30px]">
                <ul className="flex items-center gap-[30px] tablet:gap-[20px]">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <IntentPrefetchLink
                        href={item.href}
                        locale={locale}
                        className="relative whitespace-nowrap py-2 font-jost text-[18px] font-normal capitalize leading-[1em] tracking-[-0.2px] transition-colors after:absolute after:-bottom-1 after:start-0 after:h-[2px] after:w-full after:origin-left rtl:after:origin-right after:rounded-full after:bg-accent-red after:transition-transform after:duration-300 tablet:text-[15px]"
                        activeClassName="text-foreground-primary after:scale-x-100"
                        inactiveClassName="text-foreground-body hover:text-foreground-primary after:scale-x-0"
                      >
                        {labels[item.key]}
                      </IntentPrefetchLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-4">
              <LanguageSwitcher locale={locale} label={labels.languageSelector} />
              <IntentPrefetchLink
                href="/contact"
                locale={locale}
                markCurrent={false}
                className="inline-block whitespace-nowrap rounded-button bg-button-bg px-6 py-3 text-center font-jost text-[16px] font-medium text-button-text transition-[background-color,color,translate,box-shadow,scale] duration-300 ease-out hover:-translate-y-0.5 hover:bg-button-hoverDark hover:text-button-text hover:shadow-e2 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-none motion-reduce:active:scale-100 motion-reduce:transition-colors"
              >
                {labels.contact}
              </IntentPrefetchLink>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation locale={locale} labels={labels} />
      <HeaderElevation />
    </>
  )
}
