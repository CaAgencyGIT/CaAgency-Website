import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FAQ from '@/components/blocks/FAQ'
import Button from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import { getFaqJsonLd } from '@/lib/data/faq-schema'
import { buildPageMetadata } from '@/lib/seo/metadata'

// Safety net next to the on-save revalidation in lib/revalidate.ts.
export const revalidate = 3600

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })
  return buildPageMetadata({
    title: t('pageTitle'),
    description: t('pageDescription'),
    locale,
    path: '/faq',
    imageAlt: t('heading'),
  })
}

// FAQ page (Oct 2026): every question from the homepage FAQ, open one at a
// time, with matching FAQPage markup and a way on to the contact page.
export default async function FaqPage({ params }: Props) {
  const { locale } = await params
  const tNav = await getTranslations({ locale, namespace: 'nav' })

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(await getFaqJsonLd(locale))}</script>
      <FAQ locale={locale} variant="page" />
      <div className="rd-section !pt-0 pb-[100px] mobile:pb-[64px]">
        <Button href="/contact" locale={locale as Locale} variant="dark" size="sm">
          {tNav('letsTalk')}
        </Button>
      </div>
    </>
  )
}
