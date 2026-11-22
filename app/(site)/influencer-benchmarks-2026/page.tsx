import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import CreatorBenchmarksBody, { BENCHMARK_PATH, benchmarkFormat } from '@/components/site/CreatorBenchmarksBody'
import { englishBenchmarkCopy as copy } from '@/lib/data/benchmark-page-copy'
import { creatorBenchmarks2026 } from '@/lib/data/creator-benchmarks-2026'
import { benchmarkPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'

// Original research page: aggregate public counts from CA Agency's own roster.
// Translations: app/[locale]/influencer-benchmarks-2026.

const baseMetadata = buildPageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription(creatorBenchmarks2026, benchmarkFormat('en')),
  path: BENCHMARK_PATH,
  localized: false,
  type: 'article',
  keywords: copy.keywords,
})

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: { canonical: `https://caagency.com${BENCHMARK_PATH}`, languages: benchmarkPageLanguages() },
}

export default function CreatorBenchmarksPage() {
  return <CreatorBenchmarksBody copy={copy} locale="en" />
}
