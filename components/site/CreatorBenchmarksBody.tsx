import Link from 'next/link'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
import SectionHeading from '@/components/ui/SectionHeading'
import Text from '@/components/ui/Text'
import FaqSection from '@/components/blocks/FaqSection'
import { organizationRef } from '@/lib/seo/schema'
import { jsonLdSafe } from '@/lib/sanitize'
import { localizeHref } from '@/lib/i18n/client-paths'
import type { Locale } from '@/i18n/config'
import { BENCHMARKS_READ_ON, TIKTOK_PERIOD, creatorBenchmarks2026 as data } from '@/lib/data/creator-benchmarks-2026'
import type { BenchmarkCopy, BenchmarkFormat, LengthKey, Tier } from '@/lib/data/benchmark-page-copy'

// Body of the benchmark page in any language: the English route (app/(site))
// and the translated ones (app/[locale]) pass their copy and locale.

export const BENCHMARK_PATH = '/influencer-benchmarks-2026'

/** Number and date formatting for the copy, in the page's language. */
export function benchmarkFormat(locale: string): BenchmarkFormat {
  const number = (opts: Intl.NumberFormatOptions) => new Intl.NumberFormat(locale, opts)
  return {
    pct: (value) => number({ style: 'percent', maximumFractionDigits: 1 }).format(value / 100),
    times: (value) => `${number({ maximumFractionDigits: 2 }).format(value)}×`,
    compact: (value) => number({ notation: 'compact', maximumFractionDigits: 1 }).format(value),
    int: (value) => number({ maximumFractionDigits: 0 }).format(value),
    dec: (value) => number({ maximumFractionDigits: 1 }).format(value),
    date: (iso) =>
      new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`)),
  }
}

/** The five headline stats, in the order of copy.findings. */
export function benchmarkStats(f: BenchmarkFormat): string[] {
  const tt = data.tiktok
  const longest = tt.lengths[tt.lengths.length - 1]
  return [f.pct(tt.viewsPerFollower), f.pct(data.instagram.viewsPerFollower), f.times(longest.vsCreatorTypical), f.pct(tt.shareOver100K), f.pct(tt.engagementPerView)]
}

const th = 'px-4 py-3 text-start font-jost text-[12px] font-medium uppercase tracking-[0.12em] text-foreground-subtle'
const td = 'px-4 py-3 font-work-sans text-[15px] text-foreground-primary'

function Table({ head, rows }: { head: readonly string[]; rows: (string | number)[][] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-black/10 bg-white">
      <table className="w-full min-w-[520px] border-collapse">
        <thead className="bg-background-soft">
          <tr>{head.map((h) => <th key={h} className={th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={String(row[0])} className="border-t border-black/5">
              {row.map((cell, i) => <td key={i} className={td}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CreatorBenchmarksBody({ copy, locale }: { copy: BenchmarkCopy; locale: string }) {
  const f = benchmarkFormat(locale)
  const tt = data.tiktok
  const ig = data.instagram
  const label = { tier: (t: Tier) => copy.tier[t], length: (l: LengthKey) => copy.length[l] }
  const findings = copy.findings(data, f, label)
  const stats = benchmarkStats(f)
  const faq = copy.faq(data, f, label)
  const bandSizes = [...tt.tiers, ...ig.tiers].map((t) => t.creators)
  const url = `https://caagency.com${locale === 'en' ? '' : `/${locale}`}${BENCHMARK_PATH}`
  const description = copy.metaDescription(data, f)

  const datasetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: copy.title,
    description,
    url,
    inLanguage: locale,
    creator: organizationRef,
    publisher: organizationRef,
    datePublished: BENCHMARKS_READ_ON,
    dateModified: BENCHMARKS_READ_ON,
    temporalCoverage: `${TIKTOK_PERIOD.from}/${TIKTOK_PERIOD.to}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    keywords: copy.keywords,
    measurementTechnique: 'Medians of public view, like and comment counts per creator, then across creators',
    variableMeasured: ['Views per follower', 'Engagement per view', 'Engagement per follower', 'Views by video length'],
  }
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: copy.title,
    description,
    inLanguage: locale,
    author: organizationRef,
    publisher: organizationRef,
    datePublished: BENCHMARKS_READ_ON,
    dateModified: BENCHMARKS_READ_ON,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(articleJsonLd) }} />

      <section className="bg-background-soft px-section-x pt-[140px] pb-[70px] mobile:pt-[110px] mobile:pb-[40px]">
        <div className="max-w-[920px] mx-auto">
          <p className="mb-4 font-jost text-[12px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
            {copy.eyebrow(f.date(BENCHMARKS_READ_ON))}
          </p>
          <Heading as="h1" color="dark" className="mb-6">
            {copy.title}
          </Heading>
          <Text color="dark" className="opacity-80 leading-[1.8]">
            {copy.intro(data, f)}
          </Text>
          {copy.translationNote && (
            <p className="mt-4 font-work-sans text-[13px] text-foreground-subtle">
              {copy.translationNote}{' '}
              <a className="underline underline-offset-4" href={BENCHMARK_PATH} hrefLang="en">
                English
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="bg-background-base px-section-x py-sec">
        <div className="max-w-[920px] mx-auto">
          <SectionHeading align="start" size="md" eyebrow={copy.findingsEyebrow} title={copy.findingsTitle} className="mb-8" />
          <div className="flex flex-col gap-5">
            {findings.map((finding, i) => (
              <div key={finding.title} className="grid grid-cols-[150px_1fr] mobile:grid-cols-1 gap-6 mobile:gap-2 rounded-card border border-black/10 bg-background-soft p-6">
                <p className="font-anegra text-[40px] leading-none font-semibold text-accent-red" dir="ltr">{stats[i]}</p>
                <div>
                  <h3 className="mb-2 font-semibold text-lg text-foreground-primary">{finding.title}</h3>
                  <Text color="dark" size="sm" className="opacity-75 leading-relaxed">{finding.body}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-soft px-section-x py-sec">
        <div className="max-w-[920px] mx-auto flex flex-col gap-12">
          <div>
            <SectionHeading align="start" size="md" eyebrow={copy.tiktokEyebrow} title={copy.tiktokTitle} className="mb-6" />
            <Table
              head={copy.tiktokHead}
              rows={tt.tiers.map((t) => [copy.tier[t.tier], t.creators, f.compact(t.medianViews), f.pct(t.viewsPerFollower), f.pct(t.engagementPerView)])}
            />
          </div>
          <div>
            <SectionHeading align="start" size="md" eyebrow={copy.instagramEyebrow} title={copy.instagramTitle} className="mb-6" />
            <Table
              head={copy.instagramHead}
              rows={ig.tiers.map((t) => [copy.tier[t.tier], t.creators, f.compact(t.medianViews), f.pct(t.viewsPerFollower), f.pct(t.engagementPerFollower)])}
            />
          </div>
          <div>
            <SectionHeading align="start" size="md" eyebrow={copy.tiktokEyebrow} title={copy.lengthTitle} className="mb-6" />
            <Table head={copy.lengthHead} rows={tt.lengths.map((l) => [copy.length[l.length], f.pct(l.shareOfVideos), f.times(l.vsCreatorTypical)])} />
          </div>
        </div>
      </section>

      <section className="bg-background-base px-section-x py-sec">
        <div className="max-w-[920px] mx-auto grid grid-cols-2 mobile:grid-cols-1 gap-10">
          <div>
            <Heading as="h2" color="dark" className="mb-4 text-[28px] mobile:text-[22px]">{copy.methodTitle}</Heading>
            <ul className="list-disc ps-5 space-y-2 font-work-sans text-[15px] leading-[1.7] text-foreground-primary opacity-85">
              {copy.method(data, f, { from: TIKTOK_PERIOD.from, to: TIKTOK_PERIOD.to, readOn: BENCHMARKS_READ_ON }).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h2" color="dark" className="mb-4 text-[28px] mobile:text-[22px]">{copy.caveatsTitle}</Heading>
            <ul className="list-disc ps-5 space-y-2 font-work-sans text-[15px] leading-[1.7] text-foreground-primary opacity-85">
              {copy.caveats(data, f, { min: Math.min(...bandSizes), max: Math.max(...bandSizes) }).map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                {copy.license.before}
                <a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener noreferrer" target="_blank">
                  CC BY 4.0
                </a>
                {copy.license.after}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FaqSection eyebrow={copy.faqEyebrow} title={copy.faqTitle} items={faq} />

      <section className="bg-background-soft px-section-x py-sec">
        <div className="max-w-[920px] mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-4 text-[32px] mobile:text-[24px]">{copy.ctaTitle}</Heading>
          <Text color="dark" className="mx-auto mb-8 max-w-[620px] opacity-75">
            {copy.cta.before}
            <Link className="underline underline-offset-4" href={localizeHref('/case-studies', locale)}>{copy.cta.link}</Link>
            {copy.cta.after}
          </Text>
          <Button locale={locale as Locale} href="/contact">{copy.ctaButton}</Button>
        </div>
      </section>
    </>
  )
}
