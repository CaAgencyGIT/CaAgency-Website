import type { LocationPageContent } from '@/lib/site-content/location-pages'

// English defaults for the European market pages (Nov 2026): Europe, Germany,
// France, Switzerland and the Nordics. The stats are CA Agency's own figures,
// the same ones the Dubai page shows; no third-party market numbers are quoted.

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

export const europePageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Europe',
    subtitle:
      'CA Agency is an influencer marketing agency for Europe, running creator campaigns for beauty and skincare brands across Germany, France, Switzerland, the Nordics, and the UK from our Europe Division in Amsterdam.',
    ...buttons,
  },
  stats: agencyStats('Europe'),
  intro: {
    heading: 'One Influencer Marketing Agency for Every European Market',
    paragraphs: [
      {
        text: 'Europe is not one market. A campaign that works in Berlin needs a different creator, language, and tone in Paris, Zurich, or Stockholm. As a full-service influencer marketing agency for Europe, CA Agency plans each country on its own terms and still runs the whole campaign through one team, one brief, and one report.',
      },
      {
        text: 'Our Europe Division works from Amsterdam, alongside our headquarters in Dubai and our North America Division in Delaware. That lets us coordinate creators across time zones and languages, handle contracts and usage rights per country, and keep advertising disclosure in line with local consumer rules in every market we activate.',
      },
      {
        text: 'We work mainly with beauty, skincare, and lifestyle brands, including Korean beauty brands entering Europe for the first time. Whether you need German-language TikTok content, French Instagram creators, or English-language reach across the Nordics, we build the creator mix around your goals and report every activation against clear KPIs.',
      },
    ],
  },
  process: {
    title: 'Example brief for a skincare launch in France and Germany',
    subtitle: 'Imagine a serum arriving at a French retailer one week before its German launch. Here is how we would adapt the same campaign for both audiences.',
    steps: [
      { title: 'Set two launch dates', description: 'Give each creator their local listing, correct pack name and first in-stock date. Hold the German posts until shoppers can order.' },
      { title: 'Localise the demonstration', description: 'Keep the application shot consistent. Let each creator write the voiceover and answer product questions in their audience’s language.' },
      { title: 'Route each click', description: 'Use a separate tagged link for each retailer and market. Test the mobile landing page before approving the caption.' },
      { title: 'Compare like with like', description: 'Compare the first seven in-stock days in each country. Report reach, saves and retailer clicks per market, alongside any sales data the retailer provides.' },
    ],
  },
  highlights: {
    title: 'Why Brands Hire Our European Influencer Agency',
    items: [
      { title: 'Country-by-Country Planning', description: 'Each market gets creators who speak its language and know its audience, not a translated copy of another country’s campaign.' },
      { title: 'One Team, Many Markets', description: 'Briefing, contracting, approvals, and reporting run through one team, so a five-country launch does not mean five agencies.' },
      { title: 'Local Disclosure Rules', description: 'Advertising labels differ per country. We brief creators on the wording each market expects before content goes live.' },
      { title: 'Measured Results', description: 'Reach, engagement, clicks, and conversions are reported per market, so you can see which countries earn more budget.' },
    ],
  },
  talents: { title: 'Creators for European Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries',
    items: [
      { icon: '💄', title: 'Beauty', description: 'Makeup launches and tutorials travel well across European markets with local creators.' },
      { icon: '🧴', title: 'Skincare', description: 'Education-led skincare content builds trust with ingredient-aware European consumers.' },
      { icon: '👗', title: 'Fashion & Lifestyle', description: 'Styling and everyday-routine content places products inside real European lives.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in Europe, FAQs',
    items: [
      {
        question: 'Which European countries do you run influencer campaigns in?',
        answer: 'We plan and run creator campaigns across Europe, with a focus on Germany, France, Switzerland, the Nordic countries (Sweden, Norway, Finland, and Denmark), the Netherlands, and the UK. Campaigns can run in one country or across several at once.',
      },
      {
        question: 'Do you work with creators in local languages?',
        answer: 'Yes. For Germany, France, and Switzerland we brief creators who post in the local language. In the Nordics, many creators reach their audience in English as well as their own language, and we choose the mix that fits your brand.',
      },
      {
        question: 'How do you handle advertising disclosure across Europe?',
        answer: 'Paid creator content has to be recognisable as advertising everywhere in Europe, but the expected wording differs per country, for example "Werbung" or "Anzeige" in Germany and "Publicité" or "Collaboration commerciale" in France. We include the right label in every brief and check it before content is approved.',
      },
      {
        question: 'How much does influencer marketing cost in Europe?',
        answer: 'Cost depends on the countries, the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each campaign to your goals and budget instead of quoting a flat rate. Share your budget and markets and we will build a creator plan around them.',
      },
      {
        question: 'Can you launch a Korean beauty brand in Europe?',
        answer: 'Yes. K-beauty is one of our core categories. We help Korean skincare and makeup brands choose their first European markets, match them with creators whose audience already follows skincare, and adapt the message per country.',
      },
    ],
  },
  cta: {
    title: 'Launch Your European Campaign',
    description: 'Tell us which European markets matter to you and we will match you with the right creators.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

export const germanyPageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Germany',
    subtitle:
      'CA Agency is an influencer marketing agency for Germany and the DACH region, connecting beauty and skincare brands with German-speaking creators on Instagram, TikTok, and YouTube.',
    ...buttons,
  },
  stats: agencyStats('DACH'),
  intro: {
    heading: 'An Influencer Marketing Agency for Germany, Austria, and Switzerland',
    paragraphs: [
      {
        text: 'Germany is the largest consumer market in the European Union, and German audiences expect content in their own language from creators they already trust. CA Agency plans influencer campaigns for Germany with German-speaking creators, so your product is explained the way a German customer would ask about it.',
      },
      {
        text: 'German consumers read ingredient lists, compare reviews, and reward honest, detailed content over hype. We match your brand with creators whose audience, niche, and tone fit that expectation, then manage briefing, contracts, content approvals, and usage rights from our Europe Division in Amsterdam.',
      },
      {
        text: 'Because German is shared with Austria and most of Switzerland, one well-planned campaign can reach the whole DACH region. We adapt the creator mix and the details that differ per country, and report results for each market separately.',
      },
    ],
  },
  highlights: {
    title: 'Why Brands Hire Our German Influencer Agency',
    items: [
      { title: 'German-Language Content', description: 'Creators speak to their audience in German, which matters for trust and for search on TikTok and YouTube.' },
      { title: 'Clear Ad Labelling', description: 'Paid posts in Germany must be marked as "Werbung" or "Anzeige". We build the label into every brief and check it before approval.' },
      { title: 'DACH Reach', description: 'One campaign framework can extend from Germany into Austria and German-speaking Switzerland.' },
      { title: 'Detail-Driven Audiences', description: 'We favour creators who explain products properly, because German buyers respond to substance.' },
    ],
  },
  talents: { title: 'Creators for German Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries',
    items: [
      { icon: '🧴', title: 'Skincare', description: 'Ingredient-led skincare content fits the way German consumers research before they buy.' },
      { icon: '💄', title: 'Beauty', description: 'Tutorials and honest first impressions help new makeup brands earn trust in Germany.' },
      { icon: '💪', title: 'Health & Wellness', description: 'Routine-based creator content builds long-term engagement for wellness brands.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in Germany, FAQs',
    items: [
      {
        question: 'Do you work with German-speaking influencers?',
        answer: 'Yes. For campaigns in Germany, Austria, and German-speaking Switzerland we brief creators who post in German and whose followers are mainly in the DACH region.',
      },
      {
        question: 'How does advertising disclosure work in Germany?',
        answer: 'Paid creator content must be clearly recognisable as advertising. In practice that means a visible "Werbung" or "Anzeige" label at the start of the post, in German. We include this in every brief and check each post before it is approved.',
      },
      {
        question: 'Which platforms work best for influencer marketing in Germany?',
        answer: 'Instagram and TikTok lead for beauty, skincare, and lifestyle, and YouTube remains strong for in-depth reviews. We recommend the mix based on your audience and campaign goal.',
      },
      {
        question: 'How much does an influencer campaign in Germany cost?',
        answer: 'It depends on the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each campaign to your budget and goals instead of quoting a flat rate.',
      },
      {
        question: 'Can one campaign cover Germany, Austria, and Switzerland?',
        answer: 'Yes. A shared language makes DACH campaigns efficient. We plan one framework, add creators per country where it helps, and report each market separately.',
      },
    ],
  },
  cta: {
    title: 'Launch Your German Campaign',
    description: 'Reach German-speaking audiences with creators matched to your brand and goals.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

export const francePageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency France',
    subtitle:
      'CA Agency is an influencer marketing agency for France, connecting beauty and skincare brands with French-speaking creators on Instagram, TikTok, and YouTube.',
    ...buttons,
  },
  stats: agencyStats('France'),
  intro: {
    heading: 'An Influencer Marketing Agency for the French Market',
    paragraphs: [
      {
        text: 'France is one of the most demanding beauty markets in the world. French consumers know skincare, have strong local brands to compare against, and expect content in French. CA Agency plans influencer campaigns for France with French-speaking creators who can introduce your brand credibly to that audience.',
      },
      {
        text: 'France also regulates creator marketing more closely than most countries. Since the law of 9 June 2023 on commercial influence, paid content must carry a clear "Publicité" or "Collaboration commerciale" label, and some product categories are restricted. We brief creators on these rules and review every post before it goes live.',
      },
      {
        text: 'From our Europe Division in Amsterdam we handle creator selection, contracts, content approvals, usage rights, and reporting, so your team gets one point of contact for France and for any neighbouring market you add later.',
      },
    ],
  },
  highlights: {
    title: 'Why Brands Hire Our French Influencer Agency',
    items: [
      { title: 'French-Language Creators', description: 'Content is made in French by creators whose followers are in France, not translated from another market.' },
      { title: 'Compliant by Design', description: 'Every brief includes the "Publicité" or "Collaboration commerciale" label required for paid content in France.' },
      { title: 'Beauty Expertise', description: 'We work mainly with beauty and skincare brands and know how to position a new name next to established French ones.' },
      { title: 'Transparent Reporting', description: 'Reach, engagement, clicks, and conversions are reported clearly after every activation.' },
    ],
  },
  talents: { title: 'Creators for French Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries',
    items: [
      { icon: '💄', title: 'Beauty', description: 'Makeup content performs strongly with a French audience that follows beauty closely.' },
      { icon: '🧴', title: 'Skincare', description: 'Routine and ingredient content helps new skincare brands earn a place beside pharmacy favourites.' },
      { icon: '👗', title: 'Fashion', description: 'Styling content connects brands with one of Europe’s most fashion-aware audiences.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in France, FAQs',
    items: [
      {
        question: 'Do you work with French-speaking influencers?',
        answer: 'Yes. Campaigns for France are briefed to creators who post in French and whose audience is mainly in France. The same approach works for French-speaking Switzerland and Belgium.',
      },
      {
        question: 'What are the rules for influencer advertising in France?',
        answer: 'The French law of 9 June 2023 on commercial influence requires paid content to be clearly labelled "Publicité" or "Collaboration commerciale" and restricts the promotion of certain products and services. We build these requirements into every brief and check each post before approval.',
      },
      {
        question: 'Which platforms work best for influencer marketing in France?',
        answer: 'Instagram and TikTok lead for beauty, skincare, and fashion, and YouTube is strong for longer reviews and routines. We recommend the platform mix based on your audience and goals.',
      },
      {
        question: 'How much does an influencer campaign in France cost?',
        answer: 'Cost depends on the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each campaign to your budget and goals instead of quoting a flat rate.',
      },
      {
        question: 'Can you help an international beauty brand enter France?',
        answer: 'Yes. We help brands from outside France, including Korean beauty brands, choose the right creators, adapt the message for French consumers, and launch with compliant, locally made content.',
      },
    ],
  },
  cta: {
    title: 'Launch Your French Campaign',
    description: 'Reach French audiences with creators matched to your brand and goals.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

export const switzerlandPageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Switzerland',
    subtitle:
      'CA Agency is an influencer marketing agency for Switzerland, running creator campaigns for beauty and skincare brands across the German-, French-, and Italian-speaking regions.',
    ...buttons,
  },
  stats: agencyStats('Switzerland'),
  intro: {
    heading: 'An Influencer Marketing Agency for Multilingual Switzerland',
    paragraphs: [
      {
        text: 'Switzerland is a small market with high purchasing power and several languages. A campaign for Zurich needs German-speaking creators, Geneva and Lausanne need French, and Ticino needs Italian. CA Agency plans influencer campaigns for Switzerland region by region, so each audience hears about your brand in its own language.',
      },
      {
        text: 'Swiss consumers value quality and discretion and respond to creators who feel local rather than imported. We select creators whose followers are actually in Switzerland, check audience data before we recommend anyone, and keep advertising clearly labelled in line with Swiss fairness rules.',
      },
      {
        text: 'Because Switzerland shares languages with Germany, Austria, and France, a Swiss campaign can stand alone or sit inside a wider DACH or European plan. Our Europe Division in Amsterdam manages creators, contracts, approvals, and reporting through one team.',
      },
    ],
  },
  highlights: {
    title: 'Why Brands Hire Our Swiss Influencer Agency',
    items: [
      { title: 'Three Language Regions', description: 'We plan German-, French-, and Italian-speaking Switzerland separately and report on each.' },
      { title: 'Genuinely Swiss Audiences', description: 'We check where a creator’s followers live, so budget goes to reach inside Switzerland.' },
      { title: 'Premium Positioning', description: 'Content is made to suit a quality-focused audience with high expectations of brands.' },
      { title: 'Part of a Wider Plan', description: 'Swiss activity can connect to campaigns in Germany, Austria, and France without extra agencies.' },
    ],
  },
  talents: { title: 'Creators for Swiss Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries',
    items: [
      { icon: '🧴', title: 'Skincare', description: 'Premium skincare fits a Swiss audience that pays for quality and proven results.' },
      { icon: '💄', title: 'Beauty', description: 'Considered, honest beauty content performs better here than loud promotion.' },
      { icon: '⌚', title: 'Luxury & Lifestyle', description: 'Creator content places premium products inside an aspirational but believable daily life.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in Switzerland, FAQs',
    items: [
      {
        question: 'Which language regions of Switzerland do you cover?',
        answer: 'We plan campaigns for German-speaking, French-speaking, and Italian-speaking Switzerland. Most brands start with the German-speaking region and add French-speaking creators for national reach.',
      },
      {
        question: 'Can I reuse my German or French campaign in Switzerland?',
        answer: 'Partly. The language carries over, but Swiss audiences respond best to creators who live in Switzerland. We usually keep the campaign idea and add Swiss creators to deliver it.',
      },
      {
        question: 'How is sponsored content labelled in Switzerland?',
        answer: 'Paid creator content has to be clearly recognisable as advertising under Swiss fairness rules. We include a clear advertising label in every brief and check it before a post is approved.',
      },
      {
        question: 'How much does an influencer campaign in Switzerland cost?',
        answer: 'Cost depends on the language regions, the platform, the creator tiers, the number of creators, and usage rights. We scope each campaign to your budget and goals instead of quoting a flat rate.',
      },
    ],
  },
  cta: {
    title: 'Launch Your Swiss Campaign',
    description: 'Reach Swiss audiences in the right language with creators matched to your brand.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

export const nordicsPageDefaults: LocationPageContent = {
  hero: {
    title: 'Influencer Marketing\nAgency Nordics',
    subtitle:
      'CA Agency is an influencer marketing agency for the Nordics, running creator campaigns for beauty and skincare brands in Sweden, Norway, Finland, and Denmark.',
    ...buttons,
  },
  stats: agencyStats('Nordics'),
  intro: {
    heading: 'An Influencer Marketing Agency for Sweden, Norway, Finland, and Denmark',
    paragraphs: [
      {
        text: 'The Nordic countries are among the most digital markets in Europe. Audiences in Sweden, Norway, Finland, and Denmark spend a lot of time on Instagram, TikTok, and YouTube, shop online with confidence, and expect brands to be honest and understated. CA Agency plans influencer campaigns for the Nordics around that expectation.',
      },
      {
        text: 'Each Nordic country has its own language and its own creators, and a Swedish creator does not automatically reach Norway or Finland. We plan Stockholm, Oslo, Helsinki, and Copenhagen as separate audiences, choose between local-language and English content per market, and keep advertising clearly marked in line with each country’s consumer rules.',
      },
      {
        text: 'Nordic consumers care about ingredients, sustainability, and transparency, which makes the region a good fit for skincare and clean beauty. From our Europe Division in Amsterdam we manage creators, contracts, approvals, and reporting for one Nordic country or all four.',
      },
    ],
  },
  highlights: {
    title: 'Why Brands Hire Our Nordic Influencer Agency',
    items: [
      { title: 'Four Markets, One Plan', description: 'Sweden, Norway, Finland, and Denmark are planned separately and managed through one team.' },
      { title: 'Honest, Understated Content', description: 'We brief creators for the calm, credible tone Nordic audiences trust.' },
      { title: 'Clearly Marked Advertising', description: 'Nordic consumer authorities expect paid posts to be marked clearly. Every brief includes the right label.' },
      { title: 'Local Language or English', description: 'We choose per market between local-language content and English, based on your audience.' },
    ],
  },
  talents: { title: 'Creators for Nordic Campaigns', buttonLabel: 'View All Talents', buttonHref: '/talents' },
  industries: {
    title: 'Top Performing Industries',
    items: [
      { icon: '🧴', title: 'Skincare', description: 'Ingredient-aware Nordic consumers respond to clear, education-led skincare content.' },
      { icon: '🌿', title: 'Clean Beauty', description: 'Transparency and sustainability claims matter, and creators help explain them credibly.' },
      { icon: '🏃', title: 'Lifestyle & Wellness', description: 'Everyday-routine content fits the active, outdoors-oriented Nordic lifestyle.' },
    ],
  },
  faq: {
    title: 'Influencer Marketing in the Nordics, FAQs',
    items: [
      {
        question: 'Which Nordic countries do you run influencer campaigns in?',
        answer: 'Sweden, Norway, Finland, and Denmark. Campaigns can run in one country or across the region, with creators selected for each market.',
      },
      {
        question: 'Should Nordic campaigns be in English or the local language?',
        answer: 'Both can work. English is widely understood across the Nordics, but local-language content usually feels closer and more trusted. We recommend the mix per market, based on your brand and audience.',
      },
      {
        question: 'How is sponsored content labelled in the Nordic countries?',
        answer: 'Each country’s consumer authority expects paid content to be clearly marked as advertising at the start of the post, in a way the audience understands. We include the right wording in every brief and check it before approval.',
      },
      {
        question: 'Is one creator enough to reach the whole region?',
        answer: 'Rarely. Followers are concentrated in a creator’s own country, so we normally plan at least one creator group per market and report each country separately.',
      },
      {
        question: 'How much does an influencer campaign in the Nordics cost?',
        answer: 'Cost depends on the number of countries, the platform, the creator tiers, the deliverables, and usage rights. We scope each campaign to your budget and goals instead of quoting a flat rate.',
      },
    ],
  },
  cta: {
    title: 'Launch Your Nordic Campaign',
    description: 'Reach audiences in Sweden, Norway, Finland, and Denmark with creators matched to your brand.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
}

// Added to the Australia page (Nov 2026): Sydney and Melbourne copy and FAQs,
// the cities people search for. The existing hero, stats and highlights stay.
export const australiaIntro: NonNullable<LocationPageContent['intro']> = {
  heading: 'An Influencer Marketing Agency for Sydney, Melbourne, and All of Australia',
  paragraphs: [
    {
      text: 'CA Agency runs influencer marketing campaigns for brands that want to reach Australian audiences, from national launches to city-level activity in Sydney and Melbourne. We match your brand with Australian creators on Instagram, TikTok, and YouTube and manage the campaign from brief to report.',
    },
    {
      text: 'Influencer marketing in Sydney leans towards beauty, fashion, fitness, and the beach-and-outdoors lifestyle the city is known for. Sydney creators are a strong choice for product launches, event coverage, and content that needs a polished, aspirational look.',
    },
    {
      text: 'Influencer marketing in Melbourne has a different character: more editorial, more focused on fashion, food, coffee, and culture. Melbourne creators suit brands that want considered, style-led content and an audience that follows trends closely. Many national campaigns use both cities, then add creators in Brisbane, Perth, and Adelaide for wider reach.',
    },
    {
      text: 'For beauty and skincare brands, including Korean beauty brands entering Australia, we plan around local rules as well as local taste. Advertising has to be clearly disclosed, and products regulated as therapeutic goods, which in Australia includes many sunscreens, have stricter rules on paid endorsements. We brief creators accordingly before any content is made.',
    },
  ],
}

export const australiaFaq: NonNullable<LocationPageContent['faq']> = {
  title: 'Influencer Marketing in Australia, FAQs',
  items: [
    {
      question: 'Do you run influencer campaigns in Sydney and Melbourne?',
      answer: 'Yes. We plan city-specific campaigns with Sydney and Melbourne creators as well as national campaigns that add Brisbane, Perth, and Adelaide.',
    },
    {
      question: 'Is CA Agency based in Australia?',
      answer: 'No. Our headquarters are in Dubai, with divisions in Amsterdam and Delaware. We run Australian campaigns remotely with creators who live in Australia, and manage briefing, contracts, approvals, and reporting through one team.',
    },
    {
      question: 'How does sponsored content need to be disclosed in Australia?',
      answer: 'Paid creator content must be clearly distinguishable as advertising under the Australian advertising code and consumer law, for example with a clear "Ad" or paid-partnership label. We include this in every brief and check it before approval.',
    },
    {
      question: 'Are there special rules for skincare and sunscreen in Australia?',
      answer: 'Yes. Products regulated as therapeutic goods, which includes many sunscreens, have stricter advertising rules, including limits on paid testimonials. We check how your product is classified before planning creator content.',
    },
    {
      question: 'How much does influencer marketing cost in Australia?',
      answer: 'Cost depends on the platform, the creator tiers, the number of creators, the deliverables, and usage rights. We scope each campaign to your budget and goals instead of quoting a flat rate.',
    },
  ],
}
