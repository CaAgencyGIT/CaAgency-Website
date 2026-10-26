import enMessages from '@/messages/en.json'

// Location landing pages under app/(site)/. `key` is the footer label in the
// `locations` message namespace; `title` matches the page's own title.
export const locationPages = [
  { key: 'dubai', title: 'Influencer Marketing Agency Dubai', path: '/influencer-marketing-dubai' },
  { key: 'uae', title: 'Influencer Marketing Agency UAE', path: '/influencer-marketing-uae' },
  { key: 'saudiArabia', title: 'Influencer Marketing Agency Saudi Arabia', path: '/influencer-marketing-saudi-arabia' },
  { key: 'gcc', title: 'Influencer Marketing Agency GCC', path: '/influencer-marketing-gcc' },
  { key: 'korea', title: 'Influencer Marketing Agency Korea', path: '/influencer-marketing-korea' },
  { key: 'asia', title: 'Influencer Marketing Agency Asia', path: '/influencer-marketing-asia' },
  { key: 'kBeautySkincare', title: 'K-Beauty & Korean Skincare Influencer Marketing', path: '/korean-skincare-influencer-marketing' },
  { key: 'beautyAgency', title: 'Beauty Influencer Marketing Agency', path: '/beauty-influencer-marketing-agency' },
  { key: 'skincareAgency', title: 'Skincare Influencer Marketing Agency', path: '/skincare-influencer-marketing-agency' },
  { key: 'usa', title: 'Influencer Marketing Agency USA', path: '/influencer-marketing-usa' },
  { key: 'uk', title: 'Influencer Marketing Agency UK', path: '/influencer-marketing-uk' },
  { key: 'canada', title: 'Influencer Marketing Agency Canada', path: '/influencer-marketing-canada' },
  { key: 'australia', title: 'Influencer Marketing Agency Australia', path: '/influencer-marketing-australia' },
] as const

export type MarketLink = { href: string; label: string }

// Country and region pages (not the beauty/skincare category pages), linked
// from every location page's "Other markets" row so each one has internal links.
const marketKeys = ['dubai', 'uae', 'saudiArabia', 'gcc', 'korea', 'asia', 'usa', 'uk', 'canada', 'australia'] as const

export const marketLinks: MarketLink[] = marketKeys.map((key) => ({
  href: locationPages.find((page) => page.key === key)!.path,
  label: enMessages.locations[key],
}))
