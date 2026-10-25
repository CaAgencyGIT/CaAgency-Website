import { getTranslations } from 'next-intl/server'
import { Anegra, WorkSans, Jost } from '@/lib/fonts'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/root-metadata'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import RevealObserver from '@/components/providers/RevealObserver'
import BackToTop from '@/components/ui/BackToTop'

/* eslint-disable @next/next/no-head-element -- This component is the shared shell used only by App Router root layouts. */

type RootDocumentProps = {
  children: React.ReactNode
  locale: string
  dir: 'ltr' | 'rtl'
  includePublicSchema?: boolean
}

export default async function RootDocument({
  children,
  locale,
  dir,
  includePublicSchema = true,
}: RootDocumentProps) {
  const t = await getTranslations({ locale, namespace: 'common' })
  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${Anegra.variable} ${WorkSans.variable} ${Jost.variable}`}
    >
      <head>
        {includePublicSchema && (
          <>
            <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
            <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
          </>
        )}
      </head>
      <body className="font-work-sans antialiased">
        {children}
        <BackToTop label={t('backToTop')} />
        <RevealObserver />
        {process.env.NEXT_PUBLIC_PREVIEW_MODE !== 'true' && <GoogleAnalytics />}

      </body>
    </html>
  )
}
