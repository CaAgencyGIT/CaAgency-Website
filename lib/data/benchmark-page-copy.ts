import type { creatorBenchmarks2026 } from '@/lib/data/creator-benchmarks-2026'

// Words of the benchmark page (/influencer-benchmarks-2026) in one language.
// Every number comes from creatorBenchmarks2026 and is formatted per locale
// through `f`, so a translation can never drift from the data. Translations
// live in lib/data/benchmark-page-copy/<locale>.ts.

export type BenchmarkData = typeof creatorBenchmarks2026
export type Tier = BenchmarkData['tiktok']['tiers'][number]['tier']
export type LengthKey = BenchmarkData['tiktok']['lengths'][number]['length']

/** Locale-aware formatters handed to the copy functions. */
export interface BenchmarkFormat {
  /** 47 → "47%" ("47 %" in de/fr) */
  pct: (value: number) => string
  /** 1.43 → "1.43×" ("1,43×" in de/fr) */
  times: (value: number) => string
  /** 99250 → "99.3K" / "99.250" (compact where the locale has it) */
  compact: (value: number) => string
  /** 2982 → "2,982" / "2.982" */
  int: (value: number) => string
  /** 3.9 → "3.9" / "3,9" */
  dec: (value: number) => string
  /** "2026-11-22" → "22 November 2026" in the locale */
  date: (iso: string) => string
}

export interface BenchmarkCopy {
  metaTitle: string
  metaDescription: (d: BenchmarkData, f: BenchmarkFormat) => string
  keywords: string[]
  /** "CA Agency research · {date}" */
  eyebrow: (date: string) => string
  title: string
  intro: (d: BenchmarkData, f: BenchmarkFormat) => string
  findingsEyebrow: string
  findingsTitle: string
  /** The five findings, in this order: TikTok reach, Reels reach, video length, 100K share, engagement. */
  findings: (d: BenchmarkData, f: BenchmarkFormat, label: { tier: (t: Tier) => string; length: (l: LengthKey) => string }) => { title: string; body: string }[]
  tiktokEyebrow: string
  tiktokTitle: string
  tiktokHead: [string, string, string, string, string]
  instagramEyebrow: string
  instagramTitle: string
  instagramHead: [string, string, string, string, string]
  lengthTitle: string
  lengthHead: [string, string, string]
  tier: Record<Tier, string>
  length: Record<LengthKey, string>
  methodTitle: string
  method: (d: BenchmarkData, f: BenchmarkFormat, period: { from: string; to: string; readOn: string }) => string[]
  caveatsTitle: string
  caveats: (d: BenchmarkData, f: BenchmarkFormat, bands: { min: number; max: number }) => string[]
  /** The licence line, split around the "CC BY 4.0" link text. */
  license: { before: string; after: string }
  faqEyebrow: string
  faqTitle: string
  faq: (d: BenchmarkData, f: BenchmarkFormat, label: { tier: (t: Tier) => string; length: (l: LengthKey) => string }) => { question: string; answer: string }[]
  ctaTitle: string
  /** CTA text, split around the "case studies" link. */
  cta: { before: string; link: string; after: string }
  ctaButton: string
  /** Shown on translated pages only: the English page is the original. */
  translationNote?: string
}

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const englishBenchmarkCopy: BenchmarkCopy = {
  metaTitle: 'Beauty Creator Benchmarks 2026: TikTok and Instagram Reels',
  metaDescription: (d, f) =>
    `Original 2026 benchmarks from ${f.int(d.tiktok.posts)} TikToks and ${f.int(d.instagram.reels)} Instagram Reels by CA Agency's beauty and skincare creators: reach per follower, engagement and the best video lengths.`,
  keywords: [
    'influencer marketing benchmarks 2026',
    'tiktok benchmarks beauty creators',
    'instagram reels benchmarks',
    'tiktok views per follower',
    'influencer engagement rate 2026',
    'best tiktok video length',
  ],
  eyebrow: (date) => `CA Agency research · ${date}`,
  title: 'Beauty Creator Benchmarks 2026: TikTok and Instagram Reels',
  intro: (d, f) =>
    `What does a beauty or skincare creator actually achieve per post? These benchmarks come from ${f.int(d.tiktok.posts)} TikToks by ${d.tiktok.creators} creators and ${f.int(d.instagram.reels)} Instagram Reels by ${d.instagram.creators} creators on CA Agency's own talent roster, using public view, like and comment counts. Every figure is a median, so no single creator can be identified and no single large account can skew the result.`,
  findingsEyebrow: 'Key findings',
  findingsTitle: 'Five numbers worth knowing',
  findings: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    const commonest = [...L].sort((a, b) => b.shareOfVideos - a.shareOfVideos)[0]
    return [
      {
        title: 'A typical TikTok reaches about half the follower count',
        body: `Median views per video equal ${f.pct(tt.viewsPerFollower)} of followers. The share falls as accounts grow: ${f.pct(tier(tt.tiers, 'under 100K'))} under 100K followers, ${f.pct(tier(tt.tiers, '100K–500K'))} at 100K–500K and ${f.pct(tier(tt.tiers, '500K+'))} above 500K.`,
      },
      {
        title: 'Instagram Reels hold their reach at scale',
        body: `A typical Reel reaches ${f.pct(ig.viewsPerFollower)} of followers: ${f.pct(tier(ig.tiers, 'under 100K'))} under 100K, ${f.pct(tier(ig.tiers, '100K–500K'))} at 100K–500K and still ${f.pct(tier(ig.tiers, '500K+'))} above 500K.`,
      },
      {
        title: 'Very short and long TikToks beat the middle',
        body: `Against each creator's own typical video, clips of ${label.length(shortest.length)} get ${f.times(shortest.vsCreatorTypical)} the views and videos ${label.length(longest.length)} get ${f.times(longest.vsCreatorTypical)}. ${label.length(weakest.length)} is the weakest length (${f.times(weakest.vsCreatorTypical)}), yet most videos (${f.pct(commonest.shareOfVideos)}) are ${label.length(commonest.length)}.`,
      },
      {
        title: 'of TikToks pass 100,000 views',
        body: `${f.pct(tt.shareOver1M)} pass one million. The typical creator posts about ${Math.round(tt.postsPerWeek)} TikToks a week.`,
      },
      {
        title: 'TikTok engagement per view',
        body: `Likes plus comments come to ${f.pct(tt.engagementPerView)} of TikTok views and ${f.pct(ig.engagementPerView)} of Reel views (${f.pct(ig.engagementPerFollower)} of followers).`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: 'Reach and engagement by account size',
  tiktokHead: ['Followers', 'Creators', 'Median views per video', 'Views as % of followers', 'Engagement per view'],
  instagramEyebrow: 'Instagram',
  instagramTitle: 'Reels by account size',
  instagramHead: ['Followers', 'Creators', 'Median views per Reel', 'Views as % of followers', 'Engagement per follower'],
  lengthTitle: 'Views by video length',
  lengthHead: ['Length', 'Share of videos', 'Views vs the creator’s typical video'],
  tier: { 'under 100K': 'under 100K', '100K–500K': '100K–500K', '500K+': '500K+' },
  length: { '≤10 s': '≤10 s', '11–20 s': '11–20 s', '21–30 s': '21–30 s', '31–60 s': '31–60 s', 'over 60 s': 'over 60 s' },
  methodTitle: 'How we measured',
  method: (d, f, p) => [
    'Creators: CA Agency’s talent roster, mostly beauty, skincare and lifestyle, based in the UAE, Europe, the US, South Africa and Central Asia.',
    `TikTok: ${d.tiktok.creators} creators, ${f.int(d.tiktok.posts)} videos posted ${f.date(p.from)} to ${f.date(p.to)} (the full history for the period).`,
    `Instagram: ${d.instagram.creators} creators, ${f.int(d.instagram.reels)} Reels (each creator’s most recent Reels).`,
    `Public counts as read on ${f.date(p.readOn)}. Posts from the last 7 days were left out while their counts were still climbing.`,
    'Medians per creator, then across creators. Video length is compared with each creator’s own typical video.',
  ],
  caveatsTitle: 'Read it with care',
  caveats: (d, _f, bands) => [
    'This is one agency’s roster, chosen for performance, not the whole market: read the figures as what a strong beauty creator achieves, not an industry average.',
    `${d.tiktok.creators} to ${d.instagram.creators} creators is a modest sample; each follower band rests on ${bands.min} to ${bands.max} creators.`,
    `Instagram engagement leaves out the ${d.instagram.creators - d.instagram.creatorsWithLikes} creators who hide their likes.`,
  ],
  license: { before: 'Free to quote under ', after: ' with a credit to CA Agency.' },
  faqEyebrow: 'FAQ',
  faqTitle: 'Questions about these benchmarks',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: 'How many views does a beauty creator get per TikTok in 2026?',
        answer: `Across CA Agency's roster, the median TikTok reaches ${f.pct(tt.viewsPerFollower)} of the creator's follower count. Creators under 100K followers reach about ${f.pct(tier(tt.tiers, 'under 100K'))}, and creators above 500K about ${f.pct(tier(tt.tiers, '500K+'))}. ${f.pct(tt.shareOver100K)} of videos pass 100,000 views.`,
      },
      {
        question: 'Do Instagram Reels or TikToks reach more of a creator’s followers?',
        answer: `In this data, Reels hold their reach better as accounts grow: a typical Reel reaches ${f.pct(ig.viewsPerFollower)} of followers and still ${f.pct(tier(ig.tiers, '500K+'))} for accounts above 500K, against ${f.pct(tier(tt.tiers, '500K+'))} for TikToks at that size.`,
      },
      {
        question: 'What is the best TikTok video length for beauty content?',
        answer: `Very short clips (${label.length(shortest.length)}) got ${f.times(shortest.vsCreatorTypical)} and long videos (${label.length(longest.length)}) ${f.times(longest.vsCreatorTypical)} the views of each creator's typical video, while ${label.length(weakest.length)} did worst at ${f.times(weakest.vsCreatorTypical)}. Length is one factor among many: hook, topic and timing matter too.`,
      },
      {
        question: 'What is a good engagement rate for beauty creators in 2026?',
        answer: `Likes plus comments were ${f.pct(tt.engagementPerView)} of views on TikTok and ${f.pct(ig.engagementPerView)} of views on Instagram Reels (${f.pct(ig.engagementPerFollower)} of followers) for the median creator on our roster.`,
      },
      {
        question: 'Can I quote these figures?',
        answer: 'Yes. The figures are published under CC BY 4.0: quote them with a credit and a link to CA Agency (caagency.com/influencer-benchmarks-2026).',
      },
    ]
  },
  ctaTitle: 'Plan a campaign on real numbers',
  cta: {
    before: 'See how these creators perform for brands in our ',
    link: 'case studies',
    after: ', or tell us about your launch and we’ll match you with the right creators.',
  },
  ctaButton: 'Start Your Campaign',
}
