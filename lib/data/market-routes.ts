const country = (name: string) => ({ '@type': 'Country' as const, name })
const city = (name: string) => ({ '@type': 'City' as const, name })

export interface RelatedPage {
  href: string
  title: string
  desc: string
}

// Cards that link the Australia page and its two city pages to each other.
export const australiaPage: RelatedPage = {
  href: '/influencer-marketing-australia',
  title: 'Influencer Marketing in Australia',
  desc: 'National campaigns across Sydney, Melbourne, Brisbane, Perth, and Adelaide.',
}
export const sydneyPage: RelatedPage = {
  href: '/influencer-marketing-sydney',
  title: 'Influencer Marketing in Sydney',
  desc: 'Sydney creators for beauty, skincare, fitness, and fashion brands.',
}
export const melbournePage: RelatedPage = {
  href: '/influencer-marketing-melbourne',
  title: 'Influencer Marketing in Melbourne',
  desc: 'Melbourne creators for fashion, beauty, and lifestyle brands.',
}

export interface MarketRouteConfig {
  path: string
  contentKey: string
  title: string
  description: string
  ogImage: string
  areaServed: { '@type': 'Country' | 'City'; name: string }[]
  /** Closely related pages, shown as cards above the "Other markets" row. */
  related?: { eyebrow: string; title: string; items: RelatedPage[] }
}

// Market pages added in Nov 2026: Europe and the Australian cities. Each
// app/(site)/<path>/page.tsx is a thin wrapper around this config; the copy
// lives in site content (`contentKey`), so it stays editable in the admin like
// the other markets.
export const marketRoutes = {
  europe: {
    path: '/influencer-marketing-europe',
    contentKey: 'location-europe',
    title: 'Influencer Marketing Agency Europe | CA Agency',
    description:
      'One influencer marketing agency for Europe: creator campaigns in Germany, France, Switzerland, the Nordics and the UK, run from our Amsterdam division.',
    ogImage: '/images/site/og/influencer-marketing-europe-v1.jpg',
    areaServed: ['Germany', 'France', 'Switzerland', 'Sweden', 'Norway', 'Finland', 'Denmark', 'Netherlands', 'United Kingdom'].map(country),
  },
  germany: {
    path: '/influencer-marketing-germany',
    contentKey: 'location-germany',
    title: 'Influencer Marketing Agency Germany | CA Agency',
    description:
      'Influencer marketing agency for Germany and the DACH region: German-speaking creators for beauty and skincare brands on Instagram, TikTok and YouTube.',
    ogImage: '/images/site/og/influencer-marketing-germany-v1.jpg',
    areaServed: ['Germany', 'Austria', 'Switzerland'].map(country),
  },
  france: {
    path: '/influencer-marketing-france',
    contentKey: 'location-france',
    title: 'Influencer Marketing Agency France | CA Agency',
    description:
      'Influencer marketing agency for France: French-speaking creators for beauty and skincare brands, with compliant, clearly labelled campaigns.',
    ogImage: '/images/site/og/influencer-marketing-france-v1.jpg',
    areaServed: ['France'].map(country),
  },
  switzerland: {
    path: '/influencer-marketing-switzerland',
    contentKey: 'location-switzerland',
    title: 'Influencer Marketing Agency Switzerland | CA Agency',
    description:
      'Influencer marketing agency for Switzerland: creator campaigns for beauty and skincare brands across the German-, French- and Italian-speaking regions.',
    ogImage: '/images/site/og/influencer-marketing-switzerland-v1.jpg',
    areaServed: ['Switzerland'].map(country),
  },
  nordics: {
    path: '/influencer-marketing-nordics',
    contentKey: 'location-nordics',
    title: 'Influencer Marketing Agency Nordics | CA Agency',
    description:
      'Influencer marketing agency for the Nordics: creator campaigns for beauty and skincare brands in Sweden, Norway, Finland and Denmark, planned market by market.',
    ogImage: '/images/site/og/influencer-marketing-nordics-v1.jpg',
    areaServed: ['Sweden', 'Norway', 'Finland', 'Denmark'].map(country),
  },
  sydney: {
    path: '/influencer-marketing-sydney',
    contentKey: 'location-sydney',
    title: 'Influencer Marketing Agency Sydney | CA Agency',
    description:
      'Influencer marketing campaigns for Sydney: vetted Sydney creators for beauty, skincare and lifestyle brands on Instagram and TikTok, with clear reporting.',
    ogImage: '/images/site/og/influencer-marketing-sydney-v1.jpg',
    areaServed: [city('Sydney')],
    related: { eyebrow: 'Australia', title: 'More Australian Markets', items: [melbournePage, australiaPage] },
  },
  melbourne: {
    path: '/influencer-marketing-melbourne',
    contentKey: 'location-melbourne',
    title: 'Influencer Marketing Agency Melbourne | CA Agency',
    description:
      'Influencer marketing campaigns for Melbourne: vetted Melbourne creators for fashion, beauty and skincare brands on Instagram and TikTok, with clear reporting.',
    ogImage: '/images/site/og/influencer-marketing-melbourne-v1.jpg',
    areaServed: [city('Melbourne')],
    related: { eyebrow: 'Australia', title: 'More Australian Markets', items: [sydneyPage, australiaPage] },
  },
} satisfies Record<string, MarketRouteConfig>

export type MarketRoute = keyof typeof marketRoutes
