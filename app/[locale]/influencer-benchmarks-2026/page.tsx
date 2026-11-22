import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import CreatorBenchmarksBody, { BENCHMARK_PATH, benchmarkFormat } from '@/components/site/CreatorBenchmarksBody'
import { translatedBenchmarkCopy } from '@/lib/data/benchmark-page-copy/index'
import { creatorBenchmarks2026 } from '@/lib/data/creator-benchmarks-2026'
import { benchmarkPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'

// Translated benchmark page. The figures are shared with the English page and
// formatted per locale; only the words come from benchmark-page-copy/<locale>.

export function generateStaticParams() {
  return Object.keys(translatedBenchmarkCopy).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const copy = translatedBenchmarkCopy[locale]
  if (!copy) return {}
  const metadata = buildPageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription(creatorBenchmarks2026, benchmarkFormat(locale)),
    path: BENCHMARK_PATH,
    locale,
    localized: false,
    type: 'article',
    keywords: copy.keywords,
  })
  return {
    ...metadata,
    alternates: { canonical: `https://caagency.com/${locale}${BENCHMARK_PATH}`, languages: benchmarkPageLanguages() },
  }
}

export default async function TranslatedCreatorBenchmarksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = translatedBenchmarkCopy[locale]
  if (!copy) notFound()
  setRequestLocale(locale)
  return <CreatorBenchmarksBody copy={copy} locale={locale} />
}
