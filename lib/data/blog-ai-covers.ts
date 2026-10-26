// Editorial AI-generated blog covers (MiniMax image-01, Oct 2026), one per
// post, no text or logos. Prompts: generated per post topic in one shared
// style; regenerate with a new version number rather than overwriting.
export const AI_COVER_VERSION = 1

export const aiCoverSlugs: ReadonlySet<string> = new Set([
  'find-skincare-influencers-usa',
  'ftc-disclosure-guidelines-influencer-marketing',
  'how-to-choose-influencer-marketing-agency',
  'how-to-measure-influencer-marketing-roi',
  'how-to-run-influencer-marketing-campaign',
  'how-to-spot-fake-influencers',
  'influencer-marketing-agency-vs-in-house',
  'influencer-marketing-cost-2026',
  'influencer-marketing-dubai-uae-cost-guide',
  'influencer-marketing-for-beauty-brands',
  'influencer-marketing-for-fashion-brands',
  'influencer-marketing-for-health-wellness',
  'influencer-marketing-guide',
  'influencer-marketing-trends-2026',
  'influencer-whitelisting-spark-ads-guide',
  'instagram-influencer-marketing-2026',
  'instagram-reels-beauty-brands',
  'k-beauty-influencer-marketing-guide',
  'micro-vs-macro-influencers',
  'saudi-arabia-influencer-marketing-guide',
  'tiktok-influencer-marketing-guide',
  'tiktok-shop-beauty-brands',
  'tiktok-shop-fashion-wellness-brands',
  'ugc-vs-influencer-marketing',
  'welcome-to-ca-agency-blog',
  'youtube-influencer-marketing-beauty-brands',
])

export function aiCoverPath(slug: string): string {
  return `/images/blog/ai/${slug}-v${AI_COVER_VERSION}.webp`
}
