const country = (name: string) => ({ '@type': 'Country' as const, name })

// The English European market pages (Nov 2026). Each app/(site)/<path>/page.tsx
// is a thin wrapper around this config; the copy lives in site content
// (`contentKey`), so it stays editable in the admin like the other markets.
export const europeanMarkets = {
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
}

export type EuropeanMarket = keyof typeof europeanMarkets
