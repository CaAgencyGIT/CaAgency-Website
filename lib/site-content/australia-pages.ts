import type { LocationPageContent } from '@/lib/site-content/location-pages'

// English defaults for the Sydney and Melbourne pages, and the "how we work"
// steps added to the Australia page (Nov 2026). Search Console showed the
// Australia page appearing for Sydney and Melbourne agency searches on pages
// 4 to 6 only. CA Agency has no Australian office: every page says so and
// describes campaigns "for" a city, never an agency "in" or "based in" it.
// The stats are the agency's own figures, as on the Dubai page.

const buttons = {
  primaryButtonLabel: 'Get Started',
  primaryButtonHref: '/contact',
  secondaryButtonLabel: 'View Our Work',
  secondaryButtonHref: '/work',
}

const agencyStats = (market: string) => [
  { value: '3000+', label: 'Campaigns Delivered' },
  { value: '18M+', label: 'Combined Followers' },
  { value: '150+', label: 'Global Brands' },
  { value: market, label: 'Market Focus' },
]

const process = (city: string): NonNullable<LocationPageContent['process']> => ({
  title: `How We Run a ${city} Influencer Campaign`,
  steps: [
    { title: 'Brief and goals', description: `We agree the objective, audience, budget, and timing, and decide whether the campaign is ${city}-only or part of a national plan.` },
    { title: 'Creator shortlist', description: `You receive a shortlist of ${city} creators with audience location, engagement, and past brand work, checked before we recommend anyone.` },
    { title: 'Contracts and briefing', description: 'We handle contracts, usage rights, and a creative brief that includes the advertising disclosure Australian rules require.' },
    { title: 'Content and approval', description: 'Creators produce the content, we review it against the brief, and you approve it before it goes live.' },
    { title: 'Reporting', description: 'You get reach, engagement, clicks, and conversions per creator, with a clear view of what to repeat.' },
  ],
})

export const sydneyPageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Sydney',
    subtitle:
      'CA Agency runs influencer marketing campaigns for Sydney, matching beauty, skincare, and lifestyle brands with Sydney creators on Instagram, TikTok, and YouTube.',
    ...buttons,
  },
  stats: agencyStats('Sydney'),
  intro: {
    heading: 'An Influencer Marketing Agency for Sydney Campaigns',
    paragraphs: [
      {
        text: 'Sydney is Australia’s largest city and the centre of its beauty, fashion, and media industries. Brands looking for an influencer marketing agency for Sydney usually want one of three things: a launch that gets noticed, content with a polished and aspirational look, or steady reach among the city’s style-conscious audience. CA Agency plans Sydney campaigns around those goals.',
      },
      {
        text: 'Sydney creator content has a recognisable character: beaches and coastline, fitness and wellness, clean beauty, and a bright outdoor aesthetic that suits skincare and sun care especially well. We match your brand with Sydney influencers whose followers actually live in and around the city, from the eastern suburbs to the inner west, and check audience location before we recommend anyone.',
      },
      {
        text: 'We are not a Sydney-based agency. Our headquarters are in Dubai, with divisions in Amsterdam and Delaware, and we run Australian campaigns remotely with creators on the ground. For brands, that means one team for Sydney, the rest of Australia, and any other market you are active in, with the same reporting everywhere.',
      },
      {
        text: 'Beauty and skincare are our core categories, including Korean beauty brands launching in Australia. We plan around Australian advertising rules from the first brief: sponsored content has to be clearly disclosed, and products regulated as therapeutic goods, which includes many sunscreens, have stricter limits on paid endorsements.',
      },
    ],
  },
  process: process('Sydney'),
  highlights: {
    title: 'Why Brands Choose Us for Influencer Marketing in Sydney',
    items: [
      { title: 'Genuinely Sydney Audiences', description: 'We verify where a creator’s followers live, so your budget reaches people in Sydney and not just people who like Sydney content.' },
      { title: 'Beauty and Skincare Focus', description: 'Our campaigns are built mainly for beauty, skincare, and lifestyle brands, the categories Sydney creators are strongest in.' },
      { title: 'Launch-Ready Content', description: 'Sydney creators produce polished, aspirational content that works for launches and doubles as paid social creative.' },
      { title: 'One Team, Every Market', description: 'Sydney can run alone or alongside Melbourne, national Australian activity, and campaigns in other countries.' },
    ],
  },
  talents: { title: 'Creators We Work With', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries in Sydney',
    items: [
      { icon: '💄', title: 'Beauty & Skincare', description: 'Skincare, sun care, and clean beauty fit Sydney’s outdoor lifestyle and beauty-aware audience.' },
      { icon: '🏃', title: 'Fitness & Wellness', description: 'Active, coastal living makes fitness and wellness creators especially influential in Sydney.' },
      { icon: '👗', title: 'Fashion', description: 'Swimwear, resort wear, and premium fashion perform well with Sydney’s style-led creators.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in Sydney, FAQs',
    items: [
      {
        question: 'Is CA Agency an influencer marketing agency in Sydney?',
        answer: 'We run influencer marketing campaigns for Sydney, but we are not based there. Our headquarters are in Dubai, with divisions in Amsterdam and Delaware. Campaigns are managed remotely by one team and delivered by creators who live in Sydney.',
      },
      {
        question: 'How do you find Sydney influencers for a brand?',
        answer: 'We shortlist creators on audience location, engagement quality, content style, brand safety, and past performance. For a Sydney campaign we check that a meaningful share of the audience is in the Sydney area before recommending a creator.',
      },
      {
        question: 'How much does influencer marketing cost in Sydney?',
        answer: 'Cost depends on the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each Sydney campaign to your budget and goals instead of quoting a flat rate.',
      },
      {
        question: 'Which platforms work best for influencer marketing in Sydney?',
        answer: 'Instagram and TikTok lead for beauty, fashion, fitness, and lifestyle, and YouTube is useful for longer reviews. We recommend the mix based on your audience and campaign goal.',
      },
      {
        question: 'Do you handle sponsored-content disclosure in Australia?',
        answer: 'Yes. Paid creator content must be clearly distinguishable as advertising under the Australian advertising code and consumer law. The disclosure is part of every brief, and we check each post before approval. For therapeutic goods such as many sunscreens we also check the stricter rules on endorsements.',
      },
      {
        question: 'Can a Sydney campaign be extended to Melbourne or the rest of Australia?',
        answer: 'Yes. Many brands start in Sydney and add Melbourne, then Brisbane, Perth, and Adelaide. We keep one campaign framework and add creators per city.',
      },
    ],
  },
  cta: {
    title: 'Launch Your Sydney Campaign',
    description: 'Tell us about your brand and we will match you with the right Sydney creators.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

export const melbournePageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Melbourne',
    subtitle:
      'CA Agency runs influencer marketing campaigns for Melbourne, matching beauty, skincare, and fashion brands with Melbourne creators on Instagram, TikTok, and YouTube.',
    ...buttons,
  },
  stats: agencyStats('Melbourne'),
  intro: {
    heading: 'An Influencer Marketing Agency for Melbourne Campaigns',
    paragraphs: [
      {
        text: 'Melbourne is Australia’s capital of fashion, food, coffee, and culture, and its creators reflect that. Brands looking for an influencer agency for Melbourne usually want content with more of an editorial eye: considered styling, strong opinions, and an audience that follows trends closely. CA Agency plans Melbourne campaigns around that character.',
      },
      {
        text: 'Melbourne influencers tend to build loyal, engaged communities around a clear point of view, whether that is skincare routines, independent fashion, or the city’s laneway and cafe culture. We match your brand with creators whose followers live in and around Melbourne and whose taste fits your product, and we check audience data before we recommend anyone.',
      },
      {
        text: 'We are not a Melbourne-based agency. Our headquarters are in Dubai, with divisions in Amsterdam and Delaware, and we run Australian campaigns remotely with creators on the ground. Brands get one team for Melbourne, Sydney, and every other market they are active in, with the same reporting everywhere.',
      },
      {
        text: 'For beauty and skincare brands, including Korean beauty brands entering Australia, creator campaigns often do the work that beauty PR in Melbourne traditionally did: getting product into trusted hands and in front of the right audience. We build Australian disclosure rules into every brief, including the stricter rules for therapeutic goods such as many sunscreens.',
      },
    ],
  },
  process: process('Melbourne'),
  highlights: {
    title: 'Why Brands Choose Us for Influencer Marketing in Melbourne',
    items: [
      { title: 'Genuinely Melbourne Audiences', description: 'We verify where a creator’s followers live, so your budget reaches people in Melbourne.' },
      { title: 'Style-Led Creators', description: 'We look for creators with a distinct point of view, because Melbourne audiences reward taste over volume.' },
      { title: 'Beauty and Skincare Focus', description: 'Our campaigns are built mainly for beauty, skincare, and fashion brands, including K-beauty launches.' },
      { title: 'One Team, Every Market', description: 'Melbourne can run alone or alongside Sydney, national Australian activity, and campaigns in other countries.' },
    ],
  },
  talents: { title: 'Creators We Work With', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries in Melbourne',
    items: [
      { icon: '👗', title: 'Fashion', description: 'Independent labels and considered styling suit Melbourne’s fashion-forward creators.' },
      { icon: '💄', title: 'Beauty & Skincare', description: 'Routine-led, honest skincare content earns trust with an informed Melbourne audience.' },
      { icon: '☕', title: 'Food & Lifestyle', description: 'Cafe, dining, and culture content is a natural fit for the city’s creators.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in Melbourne, FAQs',
    items: [
      {
        question: 'Is CA Agency an influencer agency in Melbourne?',
        answer: 'We run influencer marketing campaigns for Melbourne, but we are not based there. Our headquarters are in Dubai, with divisions in Amsterdam and Delaware. Campaigns are managed remotely by one team and delivered by creators who live in Melbourne.',
      },
      {
        question: 'How is influencer marketing in Melbourne different from Sydney?',
        answer: 'Melbourne content is usually more editorial and style-led, with strength in fashion, food, and culture, while Sydney leans towards beauty, fitness, and an outdoor lifestyle. Many national campaigns use creators from both cities for that reason.',
      },
      {
        question: 'Do you offer beauty PR in Melbourne?',
        answer: 'We are an influencer marketing agency, not a traditional PR firm. For beauty brands we cover the creator side of what PR used to do: product seeding, creator partnerships, and sponsored content with Melbourne creators, reported against clear results.',
      },
      {
        question: 'How much does influencer marketing cost in Melbourne?',
        answer: 'Cost depends on the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each Melbourne campaign to your budget and goals instead of quoting a flat rate.',
      },
      {
        question: 'Do you handle sponsored-content disclosure in Australia?',
        answer: 'Yes. Paid creator content must be clearly distinguishable as advertising under the Australian advertising code and consumer law. The disclosure is part of every brief, and we check each post before approval.',
      },
      {
        question: 'Can a Melbourne campaign be extended to Sydney or the rest of Australia?',
        answer: 'Yes. We keep one campaign framework and add creators in Sydney, Brisbane, Perth, and Adelaide as the plan grows.',
      },
    ],
  },
  cta: {
    title: 'Launch Your Melbourne Campaign',
    description: 'Tell us about your brand and we will match you with the right Melbourne creators.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

// Added to the Australia page: the same five steps, for a national campaign.
export const australiaProcess: NonNullable<LocationPageContent['process']> = {
  title: 'How We Run an Australian Influencer Campaign',
  steps: [
    { title: 'Brief and goals', description: 'We agree the objective, audience, budget, and timing, and whether the campaign is national or focused on Sydney, Melbourne, or another city.' },
    { title: 'Creator shortlist', description: 'You receive a shortlist of Australian creators with audience location, engagement, and past brand work, checked before we recommend anyone.' },
    { title: 'Contracts and briefing', description: 'We handle contracts, usage rights, and a creative brief that includes the advertising disclosure Australian rules require.' },
    { title: 'Content and approval', description: 'Creators produce the content, we review it against the brief, and you approve it before it goes live.' },
    { title: 'Reporting', description: 'You get reach, engagement, clicks, and conversions per creator and per city, with a clear view of what to repeat.' },
  ],
}
