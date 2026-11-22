import type { CaseStudy, PublicResults } from '@/lib/data/case-studies'

// Public post results on case-study pages: number and date formatting per
// locale, the creator's base countries, and the schema.org citation.

/** 1.7M / 52.8K / 475, in the page's language (Intl compact notation). */
export function formatCount(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(value)
}

/** "November 2026" in the page's language. */
export function formatMonth(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${isoDate}T00:00:00Z`))
}

/** Country names for ISO codes in the page's language, e.g. "United States, Cyprus". */
export function countryNames(codes: string[], locale: string): string {
  const names = new Intl.DisplayNames([locale], { type: 'region' })
  return codes.map((code) => names.of(code) ?? code).join(', ')
}

/** The source post as a schema.org VideoObject with its public counts. */
export function publicResultsJsonLd(study: CaseStudy, creatorName?: string) {
  const results: PublicResults | undefined = study.publicResults
  if (!results) return undefined
  const creator = study.creatorName ?? creatorName ?? study.creator
  const stat = (type: string, count: number) => ({
    '@type': 'InteractionCounter',
    interactionType: { '@type': type },
    userInteractionCount: count,
  })
  return {
    '@type': 'VideoObject',
    name: `${study.brand} on ${results.platform}${creator ? ` by ${creator}` : ''}`,
    url: results.url,
    uploadDate: results.postedOn,
    ...(creator && { creator: { '@type': 'Person', name: creator } }),
    interactionStatistic: [
      stat('WatchAction', results.views),
      stat('LikeAction', results.likes),
      stat('CommentAction', results.comments),
    ],
  }
}

/** "1.7M views, 52.8K likes and 475 comments on the TikTok post of 10 January 2026 (public counts as of 22 November 2026): <url>" */
export function publicResultsLine(results: PublicResults) {
  const n = (value: number) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)
  const day = (iso: string) =>
    new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
  return `${n(results.views)} views, ${n(results.likes)} likes and ${n(results.comments)} comments on the ${results.platform} post of ${day(results.postedOn)} (public counts as of ${day(results.asOf)}): ${results.url}`
}
