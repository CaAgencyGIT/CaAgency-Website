import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import TranslatedLocationPage, { translatedLocationMetadata } from '@/components/site/TranslatedLocationPage'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return translatedLocationMetadata(locale, 'dubai')
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <TranslatedLocationPage market="dubai" locale={locale} />
}
