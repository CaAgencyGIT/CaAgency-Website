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
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="rd-text-link">
                {social.name}
              </a>
            ))}
            <Link href={localizeHref('/contact', locale)} prefetch={false} className="rd-text-link">
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

      <div className="rd-footer-bottom">
        <p>{t('copyright', { year: currentYear })}</p>
        <a href="#main-content" className="rd-text-link">
          {tCommon('backToTop')}
        </a>
      </div>
    </footer>
  )
}
