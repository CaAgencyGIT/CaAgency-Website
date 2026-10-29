import '@/app/public-utilities.css'
import ArabicLocationPage, { arabicLocationMetadata } from '@/components/site/ArabicLocationPage'

export const revalidate = 3600

export const metadata = arabicLocationMetadata('dubai')

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ArabicLocationPage market="dubai" locale={locale} />
}
