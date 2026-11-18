import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import Text from '@/components/ui/Text'
import type { Locale } from '@/i18n/config'
import { localizeHref } from '@/lib/i18n/client-paths'

const markets = ['germany', 'france', 'switzerland', 'nordics', 'uk'] as const

export default async function EuropeanMarketLinks({ locale }: { locale: Locale }) {
  const [t, locations] = await Promise.all([
    getTranslations({ locale, namespace: 'europeanCampaigns' }),
    getTranslations({ locale, namespace: 'locations' }),
  ])
  const links = [
    ...markets.map((market) => ({
      href: `/influencer-marketing-${market}`,
      label: locations(market),
      description: t(market),
    })),
    { href: '/contact#amsterdam', label: locations('officeAmsterdam'), description: t('amsterdam') },
  ]

  return (
    <section className="bg-background-base py-sec px-section-x border-t border-black/5">
      <div className="max-w-container mx-auto">
        <SectionHeading align="start" size="md" title={t('heading')} className="mb-8" />
        <ul className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-6">
          {links.map((link) => (
            <li key={link.href} className="rounded-card border border-black/10 bg-background-soft p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground-primary">
                <Link href={localizeHref(link.href, locale)} className="underline underline-offset-4">
                  {link.label}
                </Link>
              </h3>
              <Text>{link.description}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
