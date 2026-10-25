// Server component: ~25 links of static text — as a client component this
// hydrated on every page and dragged SocialIcons' react-icons imports into
// the client bundle. useTranslations works in Server Components (next-intl),
// and both layouts call setRequestLocale before rendering it, so static
// rendering is preserved.
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { FooterContent } from '@/lib/site-content/site-types'
import { localizeHref } from '@/lib/i18n/client-paths'
import { locationPages } from '@/lib/data/locations'
import type { Locale } from '@/i18n/config'

const defaultFooterContent: FooterContent = {
  description:
    'CA Agency is a leading, full-service talent management & marketing agency, connecting brands with creators through strategy, production and performance-led campaigns.',
  address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.',
  email: 'info@caagency.com',
  registrationNo: '2417532.01',
  socialLinks: [
    { name: 'Instagram', href: 'https://www.instagram.com/caagency/', icon: 'fab fa-instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@caagency/', icon: 'fab fa-tiktok' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/caagency/', icon: 'fab fa-linkedin-in' },
    { name: 'Facebook', href: 'https://www.facebook.com/caagencyglobal/', icon: 'fab fa-facebook-f' },
  ],
}

// Simple Icons glyphs (CC0), drawn in currentColor.
const SOCIAL_ICONS: Record<string, string> = {
  Instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.12-1.38 5.88 5.88 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.12A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  TikTok:
    'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  LinkedIn:
    'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  Facebook:
    'M9.1 23.69v-7.98H6.63V12h2.47v-1.58c0-4.09 1.85-5.98 5.86-5.98.76 0 2.07.15 2.61.3v3.32c-.28-.03-.78-.05-1.39-.05-1.97 0-2.73.75-2.73 2.68V12h3.92l-.67 3.71h-3.25V24C18.4 23.27 24 17.29 24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.63 3.88 10.35 9.1 11.69z',
}

// Platform partnerships shown in the footer; Simple Icons marks (CC0).
const PARTNERS = [
  { name: 'Meta', label: 'Meta Partner', d: 'M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z' },
  { name: 'TikTok', label: 'TikTok Partner', d: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
  { name: 'Twitch', label: 'Twitch Partner', d: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z' },
  { name: 'Google', label: 'Google Partner', d: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
]

export default function Footer({
  content = defaultFooterContent,
  locale = 'en',
}: {
  content?: FooterContent
  locale?: Locale
}) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tLocations = useTranslations('locations')
  const tCommon = useTranslations('common')
  const currentYear = new Date().getFullYear()
  // The CMS footer row is English-only; other locales use the translated
  // catalog so /ar, /ko etc. don't render an English blurb and address.
  const isDefaultLocale = locale === 'en'
  const description = isDefaultLocale ? content.description : t('description')
  const address = isDefaultLocale ? content.address : t('address')
  const registrationNo = isDefaultLocale ? content.registrationNo : t('registrationNo')

  const infoMenuItems = [
    { label: tNav('home'), href: '/' },
    { label: tNav('about'), href: '/about' },
    { label: tNav('talents'), href: '/talents' },
    { label: tNav('work'), href: '/work' },
    { label: tNav('caseStudies'), href: '/case-studies' },
    { label: tNav('services'), href: '/services' },
    { label: tNav('blog'), href: '/blog' },
    { label: tNav('contact'), href: '/contact' },
  ]

  // Legal and information pages
  const moreInfoMenuItems = [
    { label: t('businessLicense'), href: '/business-license' },
    { label: t('termsOfService'), href: '/terms-of-service' },
    { label: t('privacyPolicy'), href: '/privacy-policy' },
  ]

  // Location pages for SEO
  const locationMenuItems = locationPages.map(({ key, path }) => ({ label: tLocations(key), href: path }))

  return (
    <footer className="rd rd-footer">
      <div className="rd-footer-top">
        <div className="rd-footer-intro">
          <Image
            src="/images/site/logo_payoff.svg"
            alt="CA Agency"
            width={343}
            height={274}
            className="rd-footer-logo mb-[30px] h-auto w-[104px]"
          />
          <p>{description}</p>
          <div className="rd-footer-social">
            {content.socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="rd-footer-social-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={SOCIAL_ICONS[social.name] ?? ''} />
                </svg>
              </a>
            ))}
            <Link href={localizeHref('/contact', locale)} prefetch={false} className="rd-text-link rd-footer-social-contact">
              {t('contactUs')}
            </Link>
          </div>
        </div>

        <div className="rd-footer-links">
          <div>
            <h3>{t('info')}</h3>
            <nav aria-label={t('info')}>
              {infoMenuItems.map((item) => (
                <Link key={item.href} href={localizeHref(item.href, locale)} prefetch={false}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>{t('moreInfo')}</h3>
            <nav aria-label="Legal navigation">
              {moreInfoMenuItems.map((item) => (
                <Link key={item.href} href={localizeHref(item.href, locale)} prefetch={false}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>{t('locations')}</h3>
            <nav aria-label="Location pages" className="rd-footer-locations">
              {locationMenuItems.map((item) => (
                <Link key={item.href} href={localizeHref(item.href, locale)} prefetch={false}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>{t('contact')}</h3>
            <dl className="rd-footer-contact">
              <div>
                <dt>HQ · Dubai</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${content.email}`}>{content.email}</a></dd>
              </div>
              <div>
                <dt>Reg. no.</dt>
                <dd>{registrationNo.replace(/^[^0-9]*/, '')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <ul className="rd-footer-partners" aria-label="Platform partners">
        {PARTNERS.map((partner) => (
          <li key={partner.name}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={partner.d} />
            </svg>
            {partner.label}
          </li>
        ))}
      </ul>

      <div className="rd-footer-bottom">
        <p>{t('copyright', { year: currentYear })}</p>
        <a href="#main-content" className="rd-text-link">
          {tCommon('backToTop')}
        </a>
      </div>
    </footer>
  )
}
