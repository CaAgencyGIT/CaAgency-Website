import '@/app/public-utilities.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
import SectionHeading from '@/components/ui/SectionHeading'
import Text from '@/components/ui/Text'
import FaqSection from '@/components/blocks/FaqSection'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { jsonLdSafe } from '@/lib/sanitize'
import { BENCHMARKS_READ_ON, TIKTOK_PERIOD, creatorBenchmarks2026 as data } from '@/lib/data/creator-benchmarks-2026'

// Original research page: aggregate public counts from CA Agency's own roster. English only for now.

const PATH = '/influencer-benchmarks-2026'
const URL = `https://caagency.com${PATH}`
const TITLE = 'Beauty Creator Benchmarks 2026: TikTok and Instagram Reels'
const { tiktok: tt, instagram: ig } = data

const DESCRIPTION = `Original 2026 benchmarks from ${tt.posts.toLocaleString('en')} TikToks and ${ig.reels} Instagram Reels by CA Agency's beauty and skincare creators: reach per follower, engagement and the best video lengths.`

const baseMetadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  localized: false,
  type: 'article',
  keywords: [
    'influencer marketing benchmarks 2026',
    'tiktok benchmarks beauty creators',
    'instagram reels benchmarks',
    'tiktok views per follower',
    'influencer engagement rate 2026',
    'best tiktok video length',
  ],
})

export const metadata: Metadata = { ...baseMetadata, alternates: { canonical: URL } }

const n = (value: number) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)
const x = (value: number) => `${value.toFixed(2).replace(/0$/, '')}×`
const longDate = (iso: string) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))

const shortest = tt.lengths[0]
const longest = tt.lengths[tt.lengths.length - 1]
const weakest = [...tt.lengths].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
const commonest = [...tt.lengths].sort((a, b) => b.shareOfVideos - a.shareOfVideos)[0]
const tier = <T extends { tier: string }>(list: readonly T[], name: string): T => list.find((t) => t.tier === name)!

const findings = [
  {
    stat: `${tt.viewsPerFollower}%`,
    title: 'A typical TikTok reaches about half the follower count',
    body: `Median views per video equal ${tt.viewsPerFollower}% of followers. The share falls as accounts grow: ${tier(tt.tiers, 'under 100K').viewsPerFollower}% under 100K followers, ${tier(tt.tiers, '100K–500K').viewsPerFollower}% at 100K–500K and ${tier(tt.tiers, '500K+').viewsPerFollower}% above 500K.`,
  },
  {
    stat: `${ig.viewsPerFollower}%`,
    title: 'Instagram Reels hold their reach at scale',
    body: `A typical Reel reaches ${ig.viewsPerFollower}% of followers: ${tier(ig.tiers, 'under 100K').viewsPerFollower}% under 100K, ${tier(ig.tiers, '100K–500K').viewsPerFollower}% at 100K–500K and still ${tier(ig.tiers, '500K+').viewsPerFollower}% above 500K.`,
  },
  {
    stat: x(longest.vsCreatorTypical),
    title: 'Very short and long TikToks beat the middle',
    body: `Against each creator's own typical video, clips of ${shortest.length} get ${x(shortest.vsCreatorTypical)} the views and videos ${longest.length} get ${x(longest.vsCreatorTypical)}. ${weakest.length} is the weakest length (${x(weakest.vsCreatorTypical)}), yet most videos (${commonest.shareOfVideos}%) are ${commonest.length}.`,
  },
  {
    stat: `${tt.shareOver100K}%`,
    title: 'of TikToks pass 100,000 views',
    body: `${tt.shareOver1M}% pass one million. The typical creator posts about ${Math.round(tt.postsPerWeek)} TikToks a week.`,
  },
  {
    stat: `${tt.engagementPerView}%`,
    title: 'TikTok engagement per view',
    body: `Likes plus comments come to ${tt.engagementPerView}% of TikTok views and ${ig.engagementPerView}% of Reel views (${ig.engagementPerFollower}% of followers).`,
  },
]

const faq = [
  {
    question: 'How many views does a beauty creator get per TikTok in 2026?',
    answer: `Across CA Agency's roster, the median TikTok reaches ${tt.viewsPerFollower}% of the creator's follower count. Creators under 100K followers reach about ${tier(tt.tiers, 'under 100K').viewsPerFollower}%, and creators above 500K about ${tier(tt.tiers, '500K+').viewsPerFollower}%. ${tt.shareOver100K}% of videos pass 100,000 views.`,
  },
  {
    question: 'Do Instagram Reels or TikToks reach more of a creator’s followers?',
    answer: `In this data, Reels hold their reach better as accounts grow: a typical Reel reaches ${ig.viewsPerFollower}% of followers and still ${tier(ig.tiers, '500K+').viewsPerFollower}% for accounts above 500K, against ${tier(tt.tiers, '500K+').viewsPerFollower}% for TikToks at that size.`,
  },
  {
    question: 'What is the best TikTok video length for beauty content?',
    answer: `Very short clips (${shortest.length}) got ${x(shortest.vsCreatorTypical)} and long videos (${longest.length}) ${x(longest.vsCreatorTypical)} the views of each creator's typical video, while ${weakest.length} did worst at ${x(weakest.vsCreatorTypical)}. Length is one factor among many: hook, topic and timing matter too.`,
  },
  {
    question: 'What is a good engagement rate for beauty creators in 2026?',
    answer: `Likes plus comments were ${tt.engagementPerView}% of views on TikTok and ${ig.engagementPerView}% of views on Instagram Reels (${ig.engagementPerFollower}% of followers) for the median creator on our roster.`,
  },
  {
    question: 'Can I quote these figures?',
    answer: 'Yes. The figures are published under CC BY 4.0: quote them with a credit and a link to CA Agency (caagency.com/influencer-benchmarks-2026).',
  },
]

const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  creator: organizationRef,
  publisher: organizationRef,
  datePublished: BENCHMARKS_READ_ON,
  dateModified: BENCHMARKS_READ_ON,
  temporalCoverage: `${TIKTOK_PERIOD.from}/${TIKTOK_PERIOD.to}`,
  license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  keywords: ['influencer marketing', 'TikTok', 'Instagram Reels', 'beauty creators', 'engagement rate', 'benchmarks'],
  measurementTechnique: 'Medians of public view, like and comment counts per creator, then across creators',
  variableMeasured: ['Views per follower', 'Engagement per view', 'Engagement per follower', 'Views by video length'],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: organizationRef,
  publisher: organizationRef,
  datePublished: BENCHMARKS_READ_ON,
  dateModified: BENCHMARKS_READ_ON,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
}

const th = 'px-4 py-3 text-left font-jost text-[12px] font-medium uppercase tracking-[0.12em] text-foreground-subtle'
const td = 'px-4 py-3 font-work-sans text-[15px] text-foreground-primary'

function Table({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
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

export default function CreatorBenchmarksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(articleJsonLd) }} />

      <section className="bg-background-soft px-section-x pt-[140px] pb-[70px] mobile:pt-[110px] mobile:pb-[40px]">
        <div className="max-w-[920px] mx-auto">
          <p className="mb-4 font-jost text-[12px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
            CA Agency research · {longDate(BENCHMARKS_READ_ON)}
          </p>
          <Heading as="h1" color="dark" className="mb-6">
            {TITLE}
          </Heading>
          <Text color="dark" className="opacity-80 leading-[1.8]">
            What does a beauty or skincare creator actually achieve per post? These benchmarks come from{' '}
            {tt.posts.toLocaleString('en')} TikToks by {tt.creators} creators and {ig.reels} Instagram Reels by {ig.creators} creators
            on CA Agency&apos;s own talent roster, using public view, like and comment counts. Every figure is a median, so no single
            creator can be identified and no single large account can skew the result.
          </Text>
        </div>
      </section>

      <section className="bg-background-base px-section-x py-sec">
        <div className="max-w-[920px] mx-auto">
          <SectionHeading align="start" size="md" eyebrow="Key findings" title="Five numbers worth knowing" className="mb-8" />
          <div className="flex flex-col gap-5">
            {findings.map((f) => (
              <div key={f.title} className="grid grid-cols-[150px_1fr] mobile:grid-cols-1 gap-6 mobile:gap-2 rounded-card border border-black/10 bg-background-soft p-6">
                <p className="font-anegra text-[40px] leading-none font-semibold text-accent-red">{f.stat}</p>
                <div>
                  <h3 className="mb-2 font-semibold text-lg text-foreground-primary">{f.title}</h3>
                  <Text color="dark" size="sm" className="opacity-75 leading-relaxed">{f.body}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-soft px-section-x py-sec">
        <div className="max-w-[920px] mx-auto flex flex-col gap-12">
          <div>
            <SectionHeading align="start" size="md" eyebrow="TikTok" title="Reach and engagement by account size" className="mb-6" />
            <Table
              head={['Followers', 'Creators', 'Median views per video', 'Views as % of followers', 'Engagement per view']}
              rows={tt.tiers.map((t) => [t.tier, t.creators, n(t.medianViews), `${t.viewsPerFollower}%`, `${t.engagementPerView}%`])}
            />
          </div>
          <div>
            <SectionHeading align="start" size="md" eyebrow="Instagram" title="Reels by account size" className="mb-6" />
            <Table
              head={['Followers', 'Creators', 'Median views per Reel', 'Views as % of followers', 'Engagement per follower']}
              rows={ig.tiers.map((t) => [t.tier, t.creators, n(t.medianViews), `${t.viewsPerFollower}%`, `${t.engagementPerFollower}%`])}
            />
          </div>
          <div>
            <SectionHeading align="start" size="md" eyebrow="TikTok" title="Views by video length" className="mb-6" />
            <Table
              head={['Length', 'Share of videos', 'Views vs the creator’s typical video']}
              rows={tt.lengths.map((l) => [l.length, `${l.shareOfVideos}%`, x(l.vsCreatorTypical)])}
            />
          </div>
        </div>
      </section>

      <section className="bg-background-base px-section-x py-sec">
        <div className="max-w-[920px] mx-auto grid grid-cols-2 mobile:grid-cols-1 gap-10">
          <div>
            <Heading as="h2" color="dark" className="mb-4 text-[28px] mobile:text-[22px]">How we measured</Heading>
            <ul className="list-disc pl-5 space-y-2 font-work-sans text-[15px] leading-[1.7] text-foreground-primary opacity-85">
              <li>Creators: CA Agency&apos;s talent roster, mostly beauty, skincare and lifestyle, based in the UAE, Europe, the US, South Africa and Central Asia.</li>
              <li>TikTok: {tt.creators} creators, {tt.posts.toLocaleString('en')} videos posted {longDate(TIKTOK_PERIOD.from)} to {longDate(TIKTOK_PERIOD.to)} (the full history for the period).</li>
              <li>Instagram: {ig.creators} creators, {ig.reels} Reels (each creator&apos;s most recent Reels).</li>
              <li>Public counts as read on {longDate(BENCHMARKS_READ_ON)}. Posts from the last 7 days were left out while their counts were still climbing.</li>
              <li>Medians per creator, then across creators. Video length is compared with each creator&apos;s own typical video.</li>
            </ul>
          </div>
          <div>
            <Heading as="h2" color="dark" className="mb-4 text-[28px] mobile:text-[22px]">Read it with care</Heading>
            <ul className="list-disc pl-5 space-y-2 font-work-sans text-[15px] leading-[1.7] text-foreground-primary opacity-85">
              <li>This is one agency&apos;s roster, chosen for performance, not the whole market: read the figures as what a strong beauty creator achieves, not an industry average.</li>
              <li>{tt.creators} to {ig.creators} creators is a modest sample; each follower band rests on {Math.min(...tt.tiers.map((t) => t.creators), ...ig.tiers.map((t) => t.creators))} to {Math.max(...tt.tiers.map((t) => t.creators), ...ig.tiers.map((t) => t.creators))} creators.</li>
              <li>Instagram engagement leaves out the {ig.creators - ig.creatorsWithLikes} creators who hide their likes.</li>
              <li>Free to quote under <a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener noreferrer" target="_blank">CC BY 4.0</a> with a credit to CA Agency.</li>
            </ul>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="FAQ" title="Questions about these benchmarks" items={faq} />

      <section className="bg-background-soft px-section-x py-sec">
        <div className="max-w-[920px] mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-4 text-[32px] mobile:text-[24px]">Plan a campaign on real numbers</Heading>
          <Text color="dark" className="mx-auto mb-8 max-w-[620px] opacity-75">
            See how these creators perform for brands in our <Link className="underline underline-offset-4" href="/case-studies">case studies</Link>, or
            tell us about your launch and we&apos;ll match you with the right creators.
          </Text>
          <Button locale="en" href="/contact">Start Your Campaign</Button>
        </div>
      </section>
    </>
  )
}
