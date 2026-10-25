import { setRequestLocale } from 'next-intl/server'
import enMessages from '@/messages/en.json'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CookieConsent from '@/components/ui/CookieConsent'
import { getSiteContent } from '@/lib/site-content/service'
import { FooterContent } from '@/lib/site-content/site-types'
import RootDocument from '@/components/layout/RootDocument'
import '../globals.css'
import type { HeaderLabels } from '@/components/layout/header-types'

export { metadata, viewport } from '@/lib/seo/root-metadata'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // These (site) routes are English-only and excluded from the i18n middleware
  // matcher in proxy.ts. Pin the locale statically so next-intl never reads the
  // x-next-intl-locale request header (which would force dynamic rendering).
  setRequestLocale('en')

  // Import the English bundle at build time instead of getMessages(), which
  // routes through the request-config pipeline and keeps the branch dynamic.
  const footerContent = await getSiteContent<FooterContent>('footer')
  const nav = enMessages.nav
  const common = enMessages.common
  const headerLabels: HeaderLabels = {
    home: nav.home,
    about: nav.about,
    talents: nav.talents,
    work: nav.work,
    services: nav.services,
    blog: nav.blog,
    contact: common.contact,
    letsTalk: nav.letsTalk,
    languageSelector: nav.languageSelector,
    openMenu: nav.openMenu,
    closeMenu: nav.closeMenu,
    mainMenu: nav.mainMenu,
    skipToContent: common.skipToContent,
  }

  return (
    <RootDocument locale="en" dir="ltr">
      <Header locale="en" labels={headerLabels} />
      <Breadcrumbs locale="en" labels={enMessages.breadcrumbs} />
      <main id="main-content">{children}</main>
      <Footer content={footerContent} locale="en" />
      <CookieConsent labels={enMessages.cookies} />
    </RootDocument>
  )
}
