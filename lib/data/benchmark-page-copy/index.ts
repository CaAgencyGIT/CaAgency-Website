import type { BenchmarkCopy } from '@/lib/data/benchmark-page-copy'
import { arBenchmarkCopy } from './ar'
import { deBenchmarkCopy } from './de'
import { esBenchmarkCopy } from './es'
import { frBenchmarkCopy } from './fr'
import { koBenchmarkCopy } from './ko'
import { zhBenchmarkCopy } from './zh'

// Translated copy of the benchmark page, by locale. A locale listed here gets
// /<locale>/influencer-benchmarks-2026; keep it in step with
// BENCHMARK_LOCALES in lib/routing-helpers.ts (a test compares them).
export const translatedBenchmarkCopy: Partial<Record<string, BenchmarkCopy>> = {
  ar: arBenchmarkCopy,
  de: deBenchmarkCopy,
  es: esBenchmarkCopy,
  fr: frBenchmarkCopy,
  ko: koBenchmarkCopy,
  zh: zhBenchmarkCopy,
}
