import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import ArabicLocationPage, { arabicLocationMetadata } from '@/components/site/ArabicLocationPage'
import TranslatedLocationPage, { translatedLocationMetadata } from '@/components/site/TranslatedLocationPage'

export const revalidate = 3600

// Arabic has its own component (it predates the shared one); every other
// translated language goes through TranslatedLocationPage, which 404s when the
// language has no version of this page.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return locale === 'ar' ? arabicLocationMetadata('gcc') : translatedLocationMetadata(locale, 'gcc')
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'ar') return <ArabicLocationPage market="gcc" locale={locale} />
  return <TranslatedLocationPage market="gcc" locale={locale} />
}
