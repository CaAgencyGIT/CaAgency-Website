import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isRtlLocale, locales, type Locale } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CookieConsent, { type CookieConsentLabels } from '@/components/ui/CookieConsent';
import { getSiteContent } from '@/lib/site-content/service';
import { FooterContent } from '@/lib/site-content/site-types';
import RootDocument from '@/components/layout/RootDocument';
import '../globals.css';
import type { HeaderLabels } from '@/components/layout/header-types';

export { metadata, viewport } from '@/lib/seo/root-metadata';

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Bind the request store to this segment's locale. Without it, the root
  // layout's setRequestLocale('en') leaks down and getMessages()/client
  // components (Header nav, FAQ, Testimonials) render English on /ar and /ko
  // even though the translations exist.
  setRequestLocale(locale);

  // Get the direction for RTL languages (Arabic)
  const dir = isRtlLocale(locale) ? 'rtl' : 'ltr';

  // Get messages for the current locale
  const messages = await getMessages();
  const footerContent = await getSiteContent<FooterContent>('footer');
  const nav = messages.nav as Record<string, string>;
  const common = messages.common as Record<string, string>;
  const cookies = messages.cookies as unknown as CookieConsentLabels;
  const breadcrumbs = messages.breadcrumbs as Record<string, string>;
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
  };

  return (
    <RootDocument locale={locale} dir={dir}>
      <Header locale={locale} labels={headerLabels} />
      <Breadcrumbs locale={locale} labels={breadcrumbs} />
      <main id="main-content">{children}</main>
      <Footer content={footerContent} locale={locale as Locale} />
      <CookieConsent labels={cookies} />
    </RootDocument>
  );
}
