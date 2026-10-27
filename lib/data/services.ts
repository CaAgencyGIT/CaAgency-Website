// Canonical five-service catalog (July 2026 round 3). One entry per homepage
// service square, one subpage per entry at /services/<slug>. Copy is
// deliberately general: no client brand names, no campaign specifics
// (enforced by tests/unit/services-content.test.ts).

export interface ServiceStep {
  title: string
  description: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  title: string
  icon: string
  tagline: string
  summary: string
  // Search title (brand suffix is added by buildPageMetadata) and description.
  seoTitle: string
  seoDescription: string
  breakdown: string[]
  deliverables: string[]
  idealFor: string[]
  process: ServiceStep[]
  faqs: ServiceFaq[]
  image: string
  imageAlt: string
}

export const services: ServiceDetail[] = [
  {
    slug: 'influencer-campaigns',
    title: 'Influencer Campaigns',
    icon: 'spark',
    tagline: 'Creator partnerships that stop the scroll.',
    summary:
      'End-to-end influencer campaigns across Instagram, TikTok, and YouTube — from creator matching and briefing to rights, approvals, and reporting.',
    seoTitle: 'Influencer Campaign Management for Beauty Brands',
    seoDescription:
      'End-to-end influencer campaign management for beauty, skincare and lifestyle brands: creator matching, briefs, rights, approvals and reporting.',
    breakdown: [
      'Every campaign starts with fit. We map your audience, category, and objectives against our creator network and shortlist the voices whose communities genuinely overlap with your customer — reach matters, but resonance converts.',
      'From there we run the campaign in-house: creative briefs that leave room for the creator’s own voice, timelines and deliverable schedules, content approvals, usage rights, and platform compliance, all handled by one team.',
      'When content goes live we track it — delivery, engagement, traffic, and sentiment — and report in plain language, with learnings that sharpen the next flight.',
    ],
    deliverables: [
      'Campaign strategy & creative direction',
      'Creator shortlisting, vetting & outreach',
      'Contracting & usage rights',
      'Briefing, approvals & quality control',
      'Performance reporting & insights',
    ],
    idealFor: [
      'Product launches that need credible creator voices in the first weeks, not just paid reach.',
      'Brands entering a new market, such as the USA, the Gulf or Asia, that need local creators who already speak to that audience.',
      'Teams without the bandwidth to brief, contract, chase and report on dozens of creators at once.',
    ],
    process: [
      { title: 'Brief & Objectives', description: 'We agree the product, audience, markets, budget and the single result the campaign is judged on: awareness, trial, or sales.' },
      { title: 'Creator Shortlist', description: 'You receive a vetted shortlist with audience fit, engagement quality and content style for each creator, and approve the final line-up.' },
      { title: 'Content & Go-Live', description: 'We brief, review drafts against your claims and guidelines, secure usage rights and disclosure, and schedule posts across platforms.' },
      { title: 'Report & Learn', description: 'A plain-language report covers reach, engagement, clicks and conversions, with what to repeat, cut or scale in the next flight.' },
    ],
    faqs: [
      {
        question: 'How do you choose influencers for a campaign?',
        answer:
          'We start from your customer, not from follower counts. Each creator is vetted on audience demographics and location, engagement quality, content style, brand safety and past partnerships, and you approve the final line-up before anyone is contracted.',
      },
      {
        question: 'Which platforms do you run influencer campaigns on?',
        answer:
          'Instagram, TikTok and YouTube. TikTok tends to lead on discovery and trends, Instagram on polished launches, Reels and Stories, and YouTube on in-depth reviews and tutorials. Most campaigns combine two or three platforms, weighted by where your audience spends time and what the campaign needs to achieve.',
      },
      {
        question: 'How much does an influencer campaign cost?',
        answer:
          'It depends on the platforms, creator tiers, number of creators, deliverables and usage rights. Rather than quote a flat rate, we scope the campaign to your goal and budget and show the trade-offs, for example more micro creators for trial versus fewer larger creators for awareness.',
      },
      {
        question: 'Do you handle contracts, usage rights and disclosure?',
        answer:
          'Yes. We negotiate and manage creator contracts, usage and whitelisting rights, content approvals and platform-compliant disclosure, such as #ad and paid-partnership labels, so the campaign stays compliant in every market it runs in.',
      },
      {
        question: 'How do you measure influencer campaign results?',
        answer:
          'We agree the KPIs before launch and track them throughout: reach, engagement rate, link clicks, code redemptions and conversions where tracking allows. The final report explains what each creator and format delivered, so the next campaign starts from evidence rather than guesswork.',
      },
    ],
    image: '/images/services/final/01-albina.jpg',
    imageAlt: 'Albina in a close selfie portrait with long highlighted hair and softly balanced lighting.',
  },
  {
    slug: 'talent-management',
    title: 'Full-Service Talent Management',
    icon: 'person',
    tagline: 'Careers built for the long term.',
    summary:
      'End-to-end representation for creators — paid collaborations, exclusive partnerships, negotiation, and long-term career growth, handled by one team.',
    seoTitle: 'Influencer Talent Management Agency',
    seoDescription:
      'Full-service talent management for creators: brand deals, negotiation, contracts, invoicing and long-term career planning, handled by one team.',
    breakdown: [
      'We represent a focused roster rather than a directory. That means every talent gets real management: positioning, rate strategy, and a partnerships pipeline that fits where their content and audience are heading.',
      'Day to day, we handle inbound and outbound deal-flow, negotiate terms and usage, manage contracts and invoicing, and protect the creator’s time so they can stay focused on making great content.',
      'Long term, we plan careers — new platforms, new formats, and the kind of brand relationships that renew year after year instead of ending at one post.',
    ],
    deliverables: [
      'Brand outreach & inbound deal-flow',
      'Negotiation, contracting & invoicing',
      'Content & posting strategy',
      'Audience growth & rate development',
      'Long-term career planning',
    ],
    idealFor: [
      'Creators whose inbox has outgrown them and who want every brand enquiry handled, negotiated and followed up properly.',
      'Beauty, skincare, fashion, lifestyle and gaming creators ready to move from one-off posts to long-term brand partnerships.',
      'Brands that want to work with our roster directly, with one point of contact for briefs, contracts and approvals.',
    ],
    process: [
      { title: 'Introduction', description: 'We talk through your content, audience, goals and the brands you want to work with, and agree whether we are the right fit.' },
      { title: 'Positioning & Rates', description: 'We define your positioning, media kit and rate strategy so every pitch and negotiation starts from a clear value.' },
      { title: 'Deal Flow', description: 'We pitch brands, handle inbound enquiries, negotiate terms and usage, and manage contracts, invoicing and deadlines.' },
      { title: 'Career Planning', description: 'Regular reviews look at what performed, which partnerships to renew and which platforms or formats to grow into next.' },
    ],
    faqs: [
      {
        question: 'What does an influencer talent manager do?',
        answer:
          'A talent manager runs the business side of a creator’s career: finding and pitching brand partnerships, negotiating fees and usage rights, managing contracts and invoices, protecting the creator from unfavourable terms and planning long-term growth, so the creator can focus on making content.',
      },
      {
        question: 'Which creators does CA Agency represent?',
        answer:
          'We represent a focused roster of creators across beauty, skincare, fashion, lifestyle, gaming and entertainment on Instagram, TikTok, YouTube and Twitch. You can see the current roster on our talents page, and every profile links to the creator’s own channels.',
      },
      {
        question: 'How do brands book a creator from your roster?',
        answer:
          'Send us your brief, budget and timing through the contact form. We confirm availability and fit, propose the deliverables and usage, and manage the contract, content approvals and invoicing so the brand has a single point of contact.',
      },
      {
        question: 'Do you negotiate usage rights and exclusivity?',
        answer:
          'Yes. Usage period, paid amplification and whitelisting, exclusivity windows and category restrictions all affect a creator’s fee and future deals, so we negotiate each one explicitly and make sure they are written into the contract.',
      },
      {
        question: 'Can a creator join the CA Agency roster?',
        answer:
          'We keep a focused roster so each creator gets real management. If you create beauty, skincare, fashion, lifestyle or gaming content and want representation, introduce yourself through the contact form with links to your channels.',
      },
    ],
    image: '/images/services/final/02-anton.jpg',
    imageAlt: 'Anton in a white robe with under-eye patches and dewy skin.',
  },
  {
    slug: 'content-production',
    title: 'Content Creation & Production',
    icon: 'video',
    tagline: 'Scroll-stopping content, made end to end.',
    summary:
      'Branded short-form video and stills — concepted, shot, and edited in-house to engage audiences and elevate brand visibility on every platform.',
    seoTitle: 'Creator Content Production for Beauty Brands',
    seoDescription:
      'Short-form video and stills for beauty and skincare brands: hooks, scripts, creator-led production and platform-ready edits for every channel.',
    breakdown: [
      'Good short-form looks effortless because the thinking happened before the camera rolled. We concept hooks, scripts, and shot lists built around how people actually watch: the first second earns the next ten.',
      'Production runs through our creators and production partners — on location or in studio — so the content feels native to the feed rather than like an ad dropped into it.',
      'Every master is delivered edit-complete and platform-ready: cutdowns, aspect versions, captions, and covers, cleared for the usage you booked.',
    ],
    deliverables: [
      'Creative concepts, hooks & scripts',
      'On-location or studio production',
      'Edits, cutdowns & aspect-ratio versions',
      'Captions, covers & CTAs',
      'Usage-ready master files',
    ],
    idealFor: [
      'Brands that need a steady supply of short-form video for organic social, paid ads and product pages.',
      'Launches that need texture shots, application demos and routine content that show the product working on real skin.',
      'Teams whose existing content looks like advertising and underperforms in feeds built for creators.',
    ],
    process: [
      { title: 'Concept', description: 'We define the hooks, key messages, formats and shot list for each platform, based on the product and how your audience watches.' },
      { title: 'Casting', description: 'We match creators or talent to the concept and the customer, so the person on camera looks and sounds like the audience.' },
      { title: 'Production', description: 'Shoots run on location or in studio with our creators and production partners, with your team reviewing key frames along the way.' },
      { title: 'Edit & Delivery', description: 'You receive edit-complete masters, cutdowns and aspect versions with captions and covers, cleared for the usage you booked.' },
    ],
    faqs: [
      {
        question: 'What kind of content do you produce?',
        answer:
          'Mostly short-form vertical video for TikTok, Instagram Reels and YouTube Shorts, plus stills and longer edits where needed. For beauty and skincare that usually means application and wear tests, routine walkthroughs, texture close-ups, get-ready-with-me formats and product explainers.',
      },
      {
        question: 'Is creator content better than studio content for ads?',
        answer:
          'For social ads it often is, because creator-style video looks native to the feed and holds attention for longer. Studio work still matters for hero assets. We usually combine both: a controlled shoot for the key visuals and creator-led content for volume and testing.',
      },
      {
        question: 'Who owns the content and how can we use it?',
        answer:
          'Usage is agreed before production: which channels, which markets, for how long and whether it can run as paid ads. Masters are delivered cleared for exactly that usage, and extensions can be negotiated later if a piece performs well.',
      },
      {
        question: 'How many versions do we receive?',
        answer:
          'Each concept is delivered as a master plus the cutdowns and aspect ratios the media plan needs, typically 9:16 for Reels, TikTok and Shorts, plus square or 4:5 for feed and ads, with captions and covers. The exact package is set in the scope so there are no surprises.',
      },
      {
        question: 'How long does content production take?',
        answer:
          'It depends on the number of concepts, how much casting is involved and whether the shoot is with existing creators or a dedicated production. We agree the timeline in the scope and plan backwards from your launch or media date, so concept approval, shoot, edits and delivery each have a fixed slot.',
      },
    ],
    image: '/images/services/final/03a-dariia.jpg',
    imageAlt: 'Dariia with a finished autumn makeup look in a close three-quarter portrait.',
  },
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    icon: 'chart',
    tagline: 'Creator content, measured like media.',
    summary:
      'Data-driven amplification of creator content — paid social, creative testing, and conversion tracking with measurable ROI from awareness to sale.',
    seoTitle: 'Influencer Performance Marketing & Paid Social',
    seoDescription:
      'Turn creator content into paid social that sells: partnership and Spark ads, creative testing, conversion tracking and weekly optimisation.',
    breakdown: [
      'Organic reach starts the story; paid distribution finishes it. We amplify the creator content that already proves itself, running it as branded-content and spark-style ads with the targeting the organic post never had.',
      'Creative is tested like media: hooks, openers, and formats compared head-to-head, budgets shifted to the variants that hold attention and convert.',
      'Tracking is set up before the first dirham is spent — pixels, events, and UTMs — so reporting speaks in outcomes: traffic, carts, and return on spend, not impressions alone.',
    ],
    deliverables: [
      'Paid amplification of creator content',
      'Creative testing matrices',
      'Audience & funnel architecture',
      'Conversion tracking & attribution',
      'Weekly optimisation & reporting',
    ],
    idealFor: [
      'Brands already running influencer campaigns that want the best-performing posts to reach far beyond the creator’s followers.',
      'E-commerce and DTC brands that need creator content to drive measurable traffic, carts and sales.',
      'Teams that want creative testing and weekly optimisation instead of a single boosted post.',
    ],
    process: [
      { title: 'Tracking Setup', description: 'Pixels, conversion events and UTMs are checked and fixed before launch so every result can be attributed.' },
      { title: 'Creative Selection', description: 'We pick the creator posts with the strongest organic signals and secure the rights to run them as ads.' },
      { title: 'Test & Launch', description: 'Hooks, openers and formats run head-to-head across defined audiences, with clear rules for when a variant wins.' },
      { title: 'Optimise & Report', description: 'Budget moves weekly to the winners, and reporting covers traffic, carts, sales and return on ad spend.' },
    ],
    faqs: [
      {
        question: 'What are partnership ads and Spark Ads?',
        answer:
          'They let a brand run a creator’s post as a paid ad from the creator’s own handle: partnership ads on Instagram and Facebook, Spark Ads on TikTok. Because the ad looks like the creator’s content, it usually earns more trust and attention than a standard brand ad.',
      },
      {
        question: 'Why amplify influencer content with paid media?',
        answer:
          'Organic posts reach part of a creator’s following for a few days. Paid amplification puts the best-performing content in front of new, targeted audiences for as long as it keeps working, and makes results measurable down to clicks, carts and sales.',
      },
      {
        question: 'How do you track sales from influencer content?',
        answer:
          'Through platform pixels and conversion events, UTM-tagged links, discount codes and the ad platforms’ own reporting. We set this up before launch, because results that are not tracked from day one cannot be attributed afterwards.',
      },
      {
        question: 'How quickly can we see results?',
        answer:
          'Early signals such as hook rate, click-through rate and cost per click show up within days. Conversion-led decisions need enough data to be reliable, so we typically judge creative after its first full testing cycle and optimise weekly from there.',
      },
      {
        question: 'What budget do we need for paid amplification?',
        answer:
          'Enough for each creative and audience to collect reliable data before decisions are made. Rather than a fixed minimum, we size the budget to the number of creatives and audiences in the test, then shift spend to the winners once they are clear, so money is not spread too thin to learn anything.',
      },
    ],
    image: '/images/services/final/04-melly.jpg',
    imageAlt: 'Melly looking into the camera with a finished smoky-eye makeup look.',
  },
  {
    slug: 'brand-consultancy',
    title: 'Brand Marketing Management & Consultancy',
    icon: 'compass',
    tagline: 'Strategic guidance, from positioning to launch.',
    summary:
      'Strategic marketing guidance for beauty, skincare, and lifestyle brands — positioning, launch planning, market entry, and always-on brand management.',
    seoTitle: 'Beauty Brand Marketing Consultancy',
    seoDescription:
      'Marketing consultancy for beauty, skincare and lifestyle brands: audits, positioning, launch and market-entry plans, influencer programs.',
    breakdown: [
      'Some brands need a campaign; others need a compass. Our consultancy work starts with an honest audit of where the brand sits — positioning, channels, content, and community — and where the category is moving.',
      'From that base we build the plan: messaging and creative direction, launch and go-to-market roadmaps, market-entry strategy for new regions, and the influencer program design to carry it.',
      'For brands that want a partner rather than a project, we run always-on management — a standing team that plans, executes, and iterates quarter after quarter.',
    ],
    deliverables: [
      'Brand, channel & content audits',
      'Positioning & messaging',
      'Launch & go-to-market planning',
      'Influencer program design',
      'Always-on advisory & management',
    ],
    idealFor: [
      'Beauty and skincare brands preparing a launch, relaunch or new product line that needs a clear story before the spend starts.',
      'Brands entering a new region, such as the USA, the Gulf or Korea, that need a market-entry and creator plan for that audience.',
      'Marketing teams that want senior strategic support and an always-on partner without building a full in-house team.',
    ],
    process: [
      { title: 'Audit', description: 'We review your positioning, channels, content, community and competitors to see where the brand stands and where the category is moving.' },
      { title: 'Strategy', description: 'We define positioning, messaging, priority audiences and markets, and the role creators and content play in reaching them.' },
      { title: 'Roadmap', description: 'You get a launch or go-to-market plan with timings, channels, budgets and the KPIs each phase is measured on.' },
      { title: 'Execution & Review', description: 'We run the plan with you or alongside your team, review results each quarter and adjust the roadmap.' },
    ],
    faqs: [
      {
        question: 'What does a brand marketing consultancy engagement include?',
        answer:
          'It typically starts with an audit of positioning, channels, content and competitors, followed by a strategy and roadmap covering messaging, priority markets, launch timing, budgets and KPIs. Brands can stop at the plan or keep us on to manage execution.',
      },
      {
        question: 'Do you help brands enter the US or Gulf markets?',
        answer:
          'Yes. Market entry is a core part of our consultancy work. We look at how the category, platforms and creator landscape differ in the target market and build a launch plan with local creators, compliant claims and disclosure, and the right channel mix for that audience.',
      },
      {
        question: 'Can you design our influencer program?',
        answer:
          'Yes. We design always-on and launch programs: which creator tiers to use, how many creators, which platforms, gifting versus paid, content rights and how performance is measured, so the program fits your budget and can scale.',
      },
      {
        question: 'Is this a one-off project or an ongoing partnership?',
        answer:
          'Both are possible. Some brands need a strategy and launch plan; others want a standing team that plans, executes and iterates every quarter. We agree the model and scope up front.',
      },
      {
        question: 'Who will we work with day to day?',
        answer:
          'One team that covers strategy, creator partnerships and content, so the plan and its execution stay joined up. You get regular check-ins and reporting against the KPIs agreed in the roadmap.',
      },
    ],
    image: '/images/services/final/05-rebecca.jpg',
    imageAlt: 'Rebecca at the LolaVie and Charlotte Tilbury event.',
  },
]

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

export function getService(slug: string): ServiceDetail | undefined {
  return servicesBySlug[slug]
}
