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
import type { Locale } from '@/i18n/config'
import PrivacySettingsLink from '@/components/ui/PrivacySettingsLink'

export const defaultFooterContent: FooterContent = {
  description:
    'CA Agency is a leading, full-service talent management & marketing agency, connecting brands with creators through strategy, production and performance-led campaigns.',
  address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates',
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
export const SOCIAL_ICONS: Record<string, string> = {
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
// Official partner badges (white cut-outs from the client's reference,
// Oct 2026); Twitch keeps its icon and label.
const PARTNER_BADGES = [
  { name: 'Google Partner', src: '/images/logos/partners/google-partner-v1.png', width: 688, height: 292 },
  { name: 'Meta Business Partner', src: '/images/logos/partners/meta-partner-v1.png', width: 864, height: 292 },
  { name: 'TikTok Marketing Partner', src: '/images/logos/partners/tiktok-partner-v1.png', width: 560, height: 292 },
]

const PARTNERS = [
  { name: 'Twitch', label: 'Twitch Partner', d: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z' },
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
  const tCookies = useTranslations('cookies')
  const currentYear = new Date().getFullYear()
  // The CMS footer row is English-only; other locales use the translated
  // catalog so /ar, /ko etc. don't render an English blurb and address.
  const isDefaultLocale = locale === 'en'
  // Oct 2026: the footer carries the agency tagline in every locale.
  const description = t('tagline')
  // Oct 2026: address from the translations in every locale, so the country
  // is written out in full (United Arab Emirates).
  const address = t('address')
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
    { label: tNav('faq'), href: '/faq' },
  ]

  // Legal and information pages
  const moreInfoMenuItems = [
    { label: t('businessLicense'), href: '/business-license' },
    { label: t('termsOfService'), href: '/terms-of-service' },
    { label: t('privacyPolicy'), href: '/privacy-policy' },
  ]

  // Location pages for SEO
  // Footer Locations (Oct 2026): the three offices, each linking to the
  // office map on the contact page. Market pages stay live and in the sitemap.
  // Departments (Oct 2026): the four regions, same targets as the homepage.
  const departmentItems = [
    { label: tLocations('northAmerica'), href: '/influencer-marketing-usa' },
    { label: tLocations('europe'), href: '/influencer-marketing-uk' },
    { label: tLocations('middleEast'), href: '/influencer-marketing-dubai' },
    { label: tLocations('asia'), href: '/influencer-marketing-asia' },
  ]
  const locationMenuItems = [
    { label: tLocations('officeDubai'), href: '/contact#offices' },
    { label: tLocations('officeDelaware'), href: '/contact#offices' },
    { label: tLocations('officeAmsterdam'), href: '/contact#offices' },
  ]

  return (
    <footer className="rd rd-footer">
      <div className="rd-footer-top">
        <div className="rd-footer-intro">
          <Image
            src="/images/site/logo_payoff.svg"
            alt="CA Agency"
            width={343}
            height={274}
            className="rd-footer-logo mb-[24px] h-auto w-[78px] max-[760px]:mb-[18px] max-[760px]:w-[60px]"
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
            <h3>{t('locations')}</h3>
            <nav aria-label="Location pages" className="rd-footer-locations">
              {locationMenuItems.map((item) => (
                <Link key={item.label} href={localizeHref(item.href, locale)} prefetch={false}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>{t('departments')}</h3>
            <nav aria-label={t('departments')} className="rd-footer-locations">
              {departmentItems.map((item) => (
                <Link key={item.label} href={localizeHref(item.href, locale)} prefetch={false}>
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
        {PARTNER_BADGES.map((badge) => (
          <li key={badge.name} className="rd-footer-partner-badge">
            <Image src={badge.src} alt={badge.name} width={badge.width} height={badge.height} sizes="120px" />
          </li>
        ))}
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
        <nav aria-label="Legal navigation" className="rd-footer-legal">
          {moreInfoMenuItems.map((item) => (
            <Link key={item.href} href={localizeHref(item.href, locale)} prefetch={false}>
              {item.label}
            </Link>
          ))}
          <PrivacySettingsLink label={tCookies('settings')} />
        </nav>
      </div>
    </footer>
  )
}
