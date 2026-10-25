// Case-study catalog for /case-studies. One entry per campaign video in
// lib/data/videos.ts, keyed by video src so the work grid can deep-link.
//
// IMPORTANT: `metrics` must only contain real, client-approved numbers.
// The template hides the results-figures section whenever the array is empty,
// so leave it empty until verified figures are supplied, never estimate.

export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  brand: string
  title: string
  /** Industry vertical shown as the card/eyebrow tag */
  vertical: string
  platforms: string[]
  /** Creator handle when the collaboration is public */
  creator?: string
  videoSrc: string
  /** One-liner for cards and meta descriptions */
  summary: string
  brief: string
  approach: string
  outcome: string
  services: string[]
  /** Real client-approved figures only, section is hidden while empty */
  metrics: CaseStudyMetric[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'honor-smartphone-launch',
    brand: 'HONOR',
    title: 'HONOR Creator Collaboration',
    vertical: 'Consumer Tech',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/honor-web-v1.mp4',
    summary:
      'A storytelling-led smartphone feature showing the HONOR device in everyday moments, from texting friends to the mirror selfie.',
    brief:
      'HONOR wanted its new smartphone shown in real, everyday hands rather than through a spec sheet, with the story landing in a relatable, regional voice. The launch targeted a young, social-first audience in the region who respond best to relatable stories in their own language. The brief was to make the phone feel part of daily life, show its design and camera through use, and keep the tone light and native to the platform.',
    approach:
      'The creator builds a short narrative around her day: getting ready, chatting with friends over message bubbles in local dialect, unboxing the new device and snapping a mirror selfie. The phone appears naturally in each scene, so its design and camera are shown through use rather than explained.',
    outcome:
      'HONOR received story-driven creator content that makes the device feel part of daily life. Its relatable tone suits organic channels and native-feeling paid placements.',
    services: ['Creator matching', 'Concept development', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'ysl-beauty-campaign',
    brand: 'YSL Beauty',
    title: 'YSL Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/dariia-ysl-web-v1.mp4',
    summary:
      'Luxury beauty content that keeps YSL’s polish while feeling at home in a creator’s feed.',
    brief:
      'Luxury beauty is a balancing act: the content has to protect the brand’s premium codes while still feeling like something a creator would genuinely post. YSL Beauty needed short-form video that did both.',
    approach:
      'We selected a beauty creator whose existing aesthetic already sat close to the brand, lighting, tone, and finish, so the sponsored content didn’t break the feed. Application-led sequences kept the product in frame and demonstrated texture and payoff up close.',
    outcome:
      'YSL Beauty received creator content that held its premium look in a vertical, sound-on format, the kind of asset that works both organically on the creator’s channel and as paid social from the brand side.',
    services: ['Creator matching', 'Brand-safety review', 'Content production'],
    metrics: [],
  },
  {
    slug: 'kylie-cosmetics-campaign',
    brand: 'Kylie Cosmetics',
    title: 'Kylie Cosmetics Creator Campaign',
    vertical: 'Color Cosmetics',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/kylie-cosmetics-web-v1.mp4',
    summary:
      'A focused lip tutorial showing Kylie Cosmetics’ liner-and-lip combo for a defined, glossy nude.',
    brief:
      'Kylie Cosmetics is built on the lip, so the content needed to show that signature look clearly and quickly, in a way viewers could copy. Kylie Cosmetics’ audience expects polished, trend-led content and knows the brand well, so the challenge was to deliver a look that feels current while keeping the product in sharp focus. The video needed to be short, easy to copy and visually consistent with the brand’s glossy aesthetic.',
    approach:
      'The creator works in tight close-up, lining the lips with a Kylie Cosmetics liner before layering colour and shine, with every step clearly visible. Even lighting, a clean backdrop and a simple black top keep attention on the product and the finish, and the result is held to camera at the end so viewers see the full look.',
    outcome:
      'Kylie Cosmetics received a clean, repeatable lip tutorial that showcases the product in use and the final effect. Its simple styling makes it effective on the creator’s channel and adaptable for paid placements.',
    services: ['Creator matching', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'yesstyle-collaboration',
    brand: 'YesStyle',
    title: 'YesStyle Creator Collaboration',
    vertical: 'K-Beauty Retail',
    platforms: ['TikTok', 'Instagram Reels'],
    creator: '@pomogisebe',
    videoSrc: '/videos/redesign/rd-georgii-yesstyle-web-v2.mp4',
    summary:
      'A step-by-step pore-care routine built entirely from K-beauty bestsellers available on YesStyle.',
    brief:
      'YesStyle is a destination for K-beauty, so the content needed to show the breadth of what shoppers can build there. The aim was an educational routine that solves a common concern, visible pores, using several products in one easy-to-follow sequence. As a retailer rather than a single brand, YesStyle benefits most when content sends viewers to several products at once. The brief was to build a routine with a clear before-and-after logic, feature products from different brands that are all available on YesStyle, and include a trackable incentive so the content could be measured on sales as well as reach.',
    approach:
      'Georgii Galaev opens on the question “perfect pores?” and then numbers each step on screen. He massages ma:nyo Herbgreen Cleansing Oil into blackhead areas for a full minute, follows with Anua Rice Enzyme Brightening Cleansing Powder lathered in his hands, then applies Medicube Zero Pore Blackhead Mud Mask and finishes with Medicube PDRN Pink Collagen Capsule Cream. The close-up framing and his own discount code turn a routine into a ready-made shopping list.',
    outcome:
      'YesStyle received a high-utility tutorial that showcases multiple brands from its catalogue in one video and gives viewers a clear reason to shop. The numbered steps and creator code make it effective for both saves and trackable conversions.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'insta360-campaign',
    brand: 'Insta360',
    title: 'Insta360 X Creator Campaign',
    vertical: 'Consumer Tech',
    platforms: ['Instagram Reels', 'TikTok', 'YouTube'],
    videoSrc: '/videos/work/insta360x.mp4',
    summary:
      'Action-forward creator content that lets the Insta360 X camera demonstrate itself.',
    brief:
      'A 360° camera is its own best salesperson, if the footage shows what it can do. Insta360 needed creator content where the product’s output was the star, not a talking-head review.',
    approach:
      'The concept put the camera in motion: creator-shot footage showing the impossible-looking angles and reframing the X-series is known for. The device appears in use, and the results speak in the edit.',
    outcome:
      'Insta360 received show-don’t-tell creator video where the proof of the product is the content itself, the strongest possible format for camera hardware.',
    services: ['Creator matching', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'mixsoon-skincare',
    brand: 'Mixsoon',
    title: 'Mixsoon K-Beauty Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['TikTok', 'Instagram Reels'],
    creator: '@jaysadiq_',
    videoSrc: '/videos/redesign/rd-jay-mixsoon-web-v2.mp4',
    summary:
      'A talking-head ingredient explainer for Mixsoon’s Bean Copper Peptide Firming Serum, aimed at men’s skincare.',
    brief:
      'Mixsoon wanted to reach men interested in anti-ageing skincare, explaining what its Bean Copper Peptide Firming Serum does in clear, direct language. Men are a fast-growing skincare audience but often need clearer explanations and a straightforward tone. The brief asked for direct, credible content that explains how the serum works and why its key ingredients matter, without feeling like a beauty ad aimed at someone else.',
    approach:
      'Jay Sadiq speaks straight to camera, holding the serum as he explains its main ingredients. On-screen quotes break down the benefits: copper peptide (GHK-Cu) supports firmer-looking skin and collagen production, while fermented bean essence provides hydration and nourishment. He finishes by applying it to show how easily it fits into a grooming routine.',
    outcome:
      'Mixsoon received credible, education-led content that opens up the men’s skincare audience. The clear ingredient breakdown makes it effective organically and as performance creative.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'kiko-milano-campaign',
    brand: 'Kiko Milano',
    title: 'Kiko Milano × @_idareen_',
    vertical: 'Color Cosmetics',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@_idareen_',
    videoSrc: '/videos/work/idareen-kikomilano-v2-web-v1.mp4',
    summary:
      'CA Agency talent @_idareen_ fronting a Kiko Milano campaign with application-led beauty content.',
    brief:
      'Kiko Milano wanted its products demonstrated by a creator with genuine beauty credibility in front of an engaged audience, content that works as a tutorial first and an ad second.',
    approach:
      'We matched the brand with our talent @_idareen_, whose beauty content style fits Kiko’s accessible-glamour positioning, and managed the collaboration end to end: brief, production, brand review, and delivery.',
    outcome:
      'The partnership produced polished, application-led campaign content from a creator on our own roster, the full-service model where CA Agency handles both the brand side and the talent side.',
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'juvias-place-campaign',
    brand: "Juvia's Place",
    title: "Juvia's Place × @beatrixramosaj",
    vertical: 'Color Cosmetics',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@beatrixramosaj',
    videoSrc: '/videos/work/beatrix-juviasplace.mp4',
    summary:
      "Pigment-forward creator content for Juvia's Place with CA Agency talent @beatrixramosaj.",
    brief:
      "Juvia's Place is loved for rich, high-pigment color. The brief asked for content that put that pigment payoff on camera through a creator whose audience trusts her looks.",
    approach:
      'Our talent @beatrixramosaj built the content around swatch-and-apply moments where the pigment does the persuading. We managed scheduling, brand feedback, and final delivery.',
    outcome:
      "Juvia's Place received creator content that leads with its most distinctive strength, color payoff, delivered through a managed talent relationship with a single point of contact.",
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'nars-campaign',
    brand: 'NARS',
    title: 'NARS × @thefashionfreakk',
    vertical: 'Prestige Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@thefashionfreakk',
    videoSrc: '/videos/work/fashionfreakk-nars.mp4',
    summary:
      'Prestige beauty content for NARS fronted by CA Agency talent @thefashionfreakk.',
    brief:
      'NARS needed creator content that carried prestige-beauty polish while reaching an audience through a personality they follow for style, not just products.',
    approach:
      'We paired NARS with our talent @thefashionfreakk, whose fashion-led aesthetic frames beauty products inside a broader style story. The content integrates the product into her signature look rather than isolating it.',
    outcome:
      'The collaboration gave NARS style-context creator content, beauty presented as part of a look and a life, which is where prestige brands win on short-form.',
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'elemis-campaign',
    brand: 'ELEMIS',
    title: 'ELEMIS Creator Campaign',
    vertical: 'Premium Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/huda-elemis.mp4',
    summary:
      'Premium skincare storytelling for ELEMIS, built around ritual, texture, and routine.',
    brief:
      'ELEMIS sits in premium skincare, where content has to communicate ritual and texture, the sensorial reasons people pay more. The brief asked for creator content with that elevated, self-care feel.',
    approach:
      'The content was built around the ritual of application: texture close-ups, unhurried pacing, and a first-person voiceover that reads as genuine routine rather than a read script.',
    outcome:
      'ELEMIS received sensorial, routine-led creator content matched to its premium positioning, produced through a fully managed creator collaboration.',
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'fenty-beauty-campaign',
    brand: 'Fenty Beauty',
    title: 'Fenty Beauty Creator Campaign',
    vertical: 'Color Cosmetics',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@thefashionfreakk',
    videoSrc: '/videos/redesign/rd-melly-fenty-original-web-v2.mp4',
    summary:
      'A real-time foundation try-on of Fenty Beauty’s Pro Filt’r Fluid Flex Foundation, built around how weightless it feels.',
    brief:
      'Fenty Beauty wanted to introduce its new Pro Filt’r Fluid Flex Foundation with an honest first-impressions angle. The aim was to show coverage and finish while capturing the creator’s genuine reaction to the formula. Foundation launches live or die on trust: viewers want to see real coverage, a real finish and a real reaction before buying. The brief was to capture an unscripted first impression of the new Pro Filt’r Fluid Flex Foundation, show the full application without cuts that hide the result, and name the shade so viewers with similar skin could shop it.',
    approach:
      'Melly Sanchez applies the foundation, in shade 396N, on camera with a brush, while the on-screen caption, “wait… why does this feel like NOTHING on my skin?!”, captures her real-time reaction. The full application is shown so viewers can judge coverage and the natural matte finish for themselves, and the creator’s confident styling keeps the video firmly in Fenty’s bold, inclusive brand world.',
    outcome:
      'Fenty Beauty received authentic first-impressions content that highlights the formula’s key benefits, coverage, matte finish and weightless feel, in the creator’s own voice. It works as a launch asset organically and as believable paid creative.',
    services: ['Talent management', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'delere-campaign',
    brand: 'DELERE',
    title: 'DELERE Creator Campaign',
    vertical: 'Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/saranda-delere-web-v1.mp4',
    summary:
      'A caviar-skincare introduction that turns DELERE’s luxury ingredient story into something viewers can see on skin.',
    brief:
      '“Caviar as skincare?!” is a question most audiences will have, and DELERE needed content that answered it. The brief was to explain the formula, 15% caviar omega-3 and collagen peptide, while showing the glow viewers should expect, all inside a short vertical format. As a newer name in luxury skincare, DELERE also needed to build credibility with viewers who had never heard of it. That meant pairing the ingredient claim with visible proof on skin, keeping the tone premium rather than gimmicky, and giving the brand an asset it could reuse across awareness campaigns.',
    approach:
      'Saranda Mavriqi leads with the curiosity hook, then moves straight into application: the cream is applied with a brush in a slow sweep before being pressed in by hand, so viewers see both texture and finish. On-screen text carries the ingredient story while the camera stays on her skin, and the video ends on the luminous result in a calm bathroom setting that matches the brand’s premium positioning.',
    outcome:
      'DELERE received creator content that introduces an unfamiliar luxury ingredient in plain terms and backs it with visible texture and glow. The ingredient captions make it a strong education asset for new audiences, while the clean, elevated look keeps it on-brand for paid social.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'sephora-campaign',
    brand: 'Sephora',
    title: 'Sephora Creator Campaign',
    vertical: 'Beauty Retail',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@albina',
    videoSrc: '/videos/work/albina-sephora-web-v1.mp4',
    summary:
      'A barrier-first skincare story that builds Sephora’s own Hydrate line into a routine for dry, irritated skin days.',
    brief:
      'Sephora wanted its in-house Hydrate collection positioned as a considered skincare range rather than a budget alternative. The challenge was to show three textures with three distinct jobs, the Bouncy Water Jelly with hyaluronic and polyglutamic acids, the Balmy Rich Cream with lipids and ceramides, and the Satin Light Cream, in a way a viewer could instantly map to their own skin on any given day. The audience was skincare-aware shoppers who already know ingredient names and want to be told what to use when, not sold a miracle. The video needed to land on TikTok and Reels without feeling like a retail ad, keep the Sephora name visible throughout, and leave viewers with a simple rule they could act on at the shelf.',
    approach:
      'Albina Mavriqi opens on a real problem: a close-up of redness and dryness, captioned “on dry or irritated skin days, my barrier needs extra support.” That honesty earns the product reveal. Each jar is held to camera long enough to read the hero ingredients, then a cut to the cream’s texture lets viewers judge richness for themselves. The video closes on the result, dewy and visibly calmer skin, framed around the idea of choosing hydration “based on what my skin needs that day,” which turns a product line-up into a decision guide.',
    outcome:
      'Sephora received an educational, ingredient-led creator video that sells the logic of the whole range, not just one SKU. The before-and-after framing and on-screen ingredient callouts make it equally usable as organic content on Albina’s channel and as a paid asset aimed at skincare shoppers comparing moisturisers.',
    services: ['Talent management', 'Concept development', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'revolve-beauty-campaign',
    brand: 'Revolve Beauty',
    title: 'Revolve Beauty Creator Campaign',
    vertical: 'Beauty E-commerce',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@melaniseiffert',
    videoSrc: '/videos/redesign/rd-melani-revolve-web-v2.mp4',
    summary:
      'A “frost-kissed” winter glam look built entirely from products available at Revolve Beauty.',
    brief:
      'Revolve Beauty wanted a seasonal look that shows the breadth of its multi-brand assortment and links directly to shoppable products. The content had to feel editorial enough for Revolve’s fashion audience. Revolve Beauty stocks a curated mix of brands, so the brief asked for a look that showcases several of them while still feeling like one cohesive vision. The content needed a seasonal hook, editorial styling consistent with Revolve’s fashion identity, and a clear product list so viewers could shop the look straight from the retailer.',
    approach:
      'Melani Seiffert creates a soft winter glam look in a chandelier-lit setting, wrapped in white faux fur. She works through a product line-up from Revolve Beauty, including Tower 28 Swipe Serum Concealer, the Nudestix Tinted Blur Sculpt Stick and Kevyn Aucoin The Sensual Skin blush, holding each to camera before applying it. The cool, high-glam styling makes the video feel like a fashion editorial while staying easy to follow.',
    outcome:
      'Revolve Beauty received an editorial-quality tutorial that showcases several brands in one shoppable look. Its premium aesthetic suits Revolve’s own channels, and the product-by-product structure supports click-through to the retailer.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'anua-campaign',
    brand: 'Anua',
    title: 'Anua Skincare Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@pomogisebe',
    videoSrc: '/videos/redesign/rd-georgii-anua-web-v2.mp4',
    summary:
      'A five-rule face-massage tutorial using Anua’s gua sha cream, from lymphatic drainage to sculpting.',
    brief:
      'Anua wanted to show its gua sha cream as the product that makes face massage easy and effective. The content needed to teach technique, not just show the product. Face sculpting and lymphatic drainage are popular, but many viewers are unsure how to do them properly. The brief was to position the Anua gua sha cream as the product that makes the technique easy, and to create an educational, highly saveable video viewers would return to.',
    approach:
      'Georgii Galaev turns the video into a mini masterclass, with each step labelled on screen: open the lymphatic nodes, sculpt the jawline, lift the cheekbones, de-puff the nose and drain everything downward. He uses the Anua gua sha cream throughout, showing how the built-in tool and cream give enough slip for each movement.',
    outcome:
      'Anua received a highly saveable, technique-led tutorial that positions its product as essential to the routine. It works as educational organic content and as paid creative for viewers interested in face sculpting.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'purito-campaign',
    brand: 'Purito',
    title: 'Purito Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@imkablan',
    videoSrc: '/videos/redesign/rd-aiym-purito-web-v2.mp4',
    summary:
      'A time-stamped “morning routine” vlog that weaves Purito Seoul into an authentic, step-by-step routine.',
    brief:
      'Purito Seoul’s clean, sensitive-skin positioning works best when it feels part of real life. The goal was content that sits naturally in the hugely popular routine-vlog format, rather than an ad break inside it. Purito’s audience is wary of over-produced ads and responds to honest, unfiltered routines. The brief asked for a format with high watch-time, where the product earns its place inside a genuine morning rather than interrupting it, and for content that would keep working as discovery traffic long after it was posted.',
    approach:
      'Aiym Kablan documents her morning minute by minute, with time stamps on screen as she showers, wraps her hair, preps her skin and settles into her routine. Purito Seoul appears in the flow of those steps, picked up and applied as she goes, so the product is seen in context rather than presented. The cosy, unfiltered setting and relatable details keep it authentic and highly watchable.',
    outcome:
      'Purito Seoul received native, lifestyle-first content in one of the most engaging short-form formats. Because the product lives inside a routine viewers already want to watch, the video works as discovery content for new audiences and as a believable, low-pressure paid asset.',
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },

  {
    slug: 'gisou-campaign',
    brand: 'Gisou',
    title: 'Gisou Creator Campaign',
    vertical: 'Haircare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@beatrixramosaj',
    videoSrc: '/videos/redesign/rd-beatrix-gisou-web-v2.mp4',
    summary:
      'Hair-first content that lets Gisou’s signature glossy finish speak for itself on long, voluminous waves.',
    brief:
      'Gisou’s brand is built on healthy shine, so the content had to make that shine visible on camera. The aim was a short, aspirational hair moment that feels like a natural part of Beatrix’s feed, not a product demonstration. Gisou’s community buys into a look and a lifestyle as much as a product, so the brief favoured mood over explanation. The content had to sit comfortably next to the brand’s own polished imagery, keep the hair as the hero of every frame, and work without sound or captions for viewers scrolling quickly.',
    approach:
      'Beatrix Ramosaj films in soft, even daylight that catches the shine on her bouncy blow-out. Rather than a tutorial, the video is built around movement: she runs her fingers through the lengths, works the product between her palms and finishes the ends, so viewers watch the hair respond in real time. Close framing keeps attention on texture and gloss, and the calm pacing mirrors Gisou’s understated, premium tone.',
    outcome:
      'Gisou received a polished, lifestyle-led hair video that communicates the brand’s core promise, healthy-looking shine, in a few seconds and without heavy copy. Its clean visual style suits both Beatrix’s audience and paid placements alongside Gisou’s own brand content.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'samsung-campaign',
    brand: 'Samsung',
    title: 'Samsung Creator Campaign',
    vertical: 'Consumer Tech',
    platforms: ['TikTok', 'Instagram Reels'],
    videoSrc: '/videos/work/khutjo-samsung-web-v1.mp4',
    summary:
      'Lifestyle-led creator content putting Samsung devices inside a real daily routine.',
    brief:
      'Samsung wanted the device shown as a lifestyle companion rather than a spec sheet, content that feels like a creator’s day, with the product earning its screen time naturally.',
    approach:
      'We built the concept around our talent Khutjo Matsoma’s everyday content style: the device appears where it genuinely would, camera moments, on-the-go use, ending on a feature beat that lands without a hard sell.',
    outcome:
      'Samsung received authentic, feed-native creator video that reaches audiences who scroll past traditional tech advertising.',
    services: ['Talent management', 'Concept development', 'Content production', 'Usage rights'],
    metrics: [],
  },
  {
    slug: 'haruharu-wonder-campaign',
    brand: 'Haruharu Wonder',
    title: 'Haruharu Wonder Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@rebeccaghaderi',
    videoSrc: '/videos/redesign/rd-rebecca-haruharu-web-v2.mp4',
    summary:
      'An active, outdoor-glow story for Haruharu Wonder’s black rice glow mist, used throughout the day.',
    brief:
      'Haruharu Wonder wanted to show its mist as a non-sticky way to keep skin hydrated and glowing on the go. Haruharu Wonder’s black rice mist is sold widely on Amazon, so the brief focused on demonstrating real-life use. The content needed to show the mist used several times through the day, highlight its non-sticky finish and keep a natural, outdoorsy tone that matches the brand.',
    approach:
      'Rebecca Ghaderi films herself outdoors and throughout her day, from an early walk in the sun to relaxed moments later on, misting her face with the Haruharu Wonder glow mist each time. The bright natural light makes the fresh, dewy finish easy to see, and the varied settings show how the mist fits into a busy routine.',
    outcome:
      'Haruharu Wonder received lifestyle content that shows real, repeated use and a natural glow. It suits both organic posting and paid placements for its Amazon listing.',
    services: ['Talent management', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'armani-beauty-campaign',
    brand: 'Armani Beauty',
    title: 'Armani Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@_idareen_',
    videoSrc: '/videos/redesign/rd-dariia-armani-web-v2.mp4',
    summary:
      'A buildable cheek-colour tutorial using Armani Beauty’s Luminous Silk liquid cheek tint.',
    brief:
      'Armani Beauty wanted to show how its liquid cheek tint blends into a natural, luminous flush, keeping the look effortless and premium. Armani Beauty’s luxury positioning calls for content that feels refined and unhurried. The brief was to show how the cheek tint builds from a sheer wash to a flush, highlight its luminous finish and keep the product itself clearly visible.',
    approach:
      'The creator dots the Armani Luminous Silk cheek tint onto the cheek, then blends it out with a brush, building the colour gradually so viewers see how buildable it is. Close-up framing and soft light show the luminous finish, and the video closes on the product, held to camera, beside the finished glow.',
    outcome:
      'Armani Beauty received a clean, elegant demonstration of a single product that highlights blendability and finish. It suits both organic use and paid placements.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'valentino-beauty-campaign',
    brand: 'Valentino Beauty',
    title: 'Valentino Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@_idareen_',
    videoSrc: '/videos/redesign/rd-dariia-valentino-web-v2.mp4',
    summary:
      'A colour-matching makeup tutorial pairing Valentino’s Spike lipstick and Eye2Cheek blush into one coordinated look.',
    brief:
      'Valentino Beauty wanted to show that its lip and cheek products work as a set. The idea had to feel like styling advice, the kind a viewer saves, rather than a product swatch. Valentino Beauty’s makeup is positioned as couture, so the content had to feel styled and considered while still being practical. The two hero products needed to be clearly identifiable by name and shade, so viewers could recreate the look, and the finished face had to be photogenic enough for the brand to use beyond the creator’s feed.',
    approach:
      'Dariia Bordun frames the video around a fashion analogy: just as you coordinate shoes with a bag, your lips and cheeks should match. She applies the Spike Valentino Buttery Matte Lip in 134 Couture in the Streets, then the Valentino Eye2Cheek in 01 Born in Roma, building a soft “halo” of colour that ties the face together. The studded gold lipstick and red couture compact are held to camera with their shade names on screen, so the look is easy to shop.',
    outcome:
      'Valentino Beauty received a tutorial that sells two products as one look and gives viewers a reusable technique. Named shades, close-up application and the coordinated finish make it effective organically and as a conversion-focused paid asset.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'chanel-beauty-campaign',
    brand: 'Chanel Beauty',
    title: 'Chanel Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@_idareen_',
    videoSrc: '/videos/redesign/rd-dariia-chanel-web-v2.mp4',
    summary:
      'A one-product base tutorial showing how Chanel’s Les Beiges Pearly Glow creates a pearlescent skin finish.',
    brief:
      'Chanel Beauty wanted to showcase a single luminous complexion product in a way that feels effortless and luxurious. The challenge was to show a subtle effect, pearlescent glow, clearly on camera. Chanel’s audience expects restraint and elegance, so the content needed to avoid hard selling while still making the product the clear hero. The brief was to show a subtle, light-reflecting finish convincingly on camera, keep the styling minimal and luxurious, and frame the product as an easy everyday essential.',
    approach:
      'Dariia Bordun begins on bare skin, then introduces the Chanel Les Beiges Pearly Glow, applying it with her fingertips and blending it across the high points of the face. Soft, flattering light lets the pearlescent sheen build visibly, and the caption, “ACTUALLY the only product you need for that pearlescent skin effect,” frames it as a hero product. She ends by holding the bottle beside the finished glow.',
    outcome:
      'Chanel Beauty received an elegant, single-product tutorial that makes a subtle finish easy to see and easy to want. Its minimal styling and clear before-and-after keep it on-brand for organic and paid use.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'rare-beauty-campaign',
    brand: 'Rare Beauty',
    title: 'Rare Beauty Creator Campaign',
    vertical: 'Makeup',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@thefashionfreakk',
    videoSrc: '/videos/redesign/rd-melly-rare-web-v2.mp4',
    summary:
      'A flushed, glowy makeup look pairing Rare Beauty’s blush with its lip oil.',
    brief:
      'Rare Beauty wanted a joyful, wearable look that shows two of its cult categories, blush and lip, working together. Rare Beauty’s community responds to joyful, accessible makeup rather than heavy technique. The brief was to show the blush and lip oil working together as a fun, easy look, keep the tone upbeat and inclusive, and make both products easy to identify and shop.',
    approach:
      'Melly Sanchez builds a rosy, all-pink look in a playful setting, complete with pink hair clips and soft neon. She taps the Rare Beauty blush onto her cheeks with a brush, shows the product to camera, lines her lips and finishes with the lip oil for a glossy flush. The caption, “Rare beauty blush + lip oil,” makes the combination easy to shop.',
    outcome:
      'Rare Beauty received an upbeat, on-brand tutorial that sells two products as one look. Its bright styling and clear steps suit both organic posting and paid social.',
    services: ['Talent management', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'saie-campaign',
    brand: 'Saie',
    title: 'Saie Creator Campaign',
    vertical: 'Clean Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@rebeccaghaderi',
    videoSrc: '/videos/redesign/rd-rebecca-saie-web-v2.mp4',
    summary:
      'A sunny, on-the-go glow look created entirely with Saie, applied straight from the makeup bag.',
    brief:
      'Saie’s clean, skin-first products are built for an easy, glowy finish. The aim was to show them in a relaxed, real-life setting that matches the brand’s effortless tone. Saie’s audience values clean ingredients and an easy, natural look. The brief asked for relaxed, real-life content that shows how quickly the products can be applied, how they look in natural light, and how they fit into an on-the-go lifestyle.',
    approach:
      'Rebecca Ghaderi does her makeup outdoors in bright summer light, pulling Saie products straight from her bag. She dots and blends cheek and base products with Saie brushes and holds each one to camera, so viewers see the shades, the tools and the sun-kissed finish in natural light.',
    outcome:
      'Saie received authentic, lifestyle-first makeup content that shows its products in real conditions. It works well organically and as approachable, high-trust paid creative.',
    services: ['Talent management', 'Content production', 'Usage rights'],
    metrics: [],
  },

  {
    slug: 'patrick-ta-campaign',
    brand: 'Patrick Ta',
    title: 'Patrick Ta Creator Campaign',
    vertical: 'Makeup',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@beatrixramosaj',
    videoSrc: '/videos/redesign/rd-beatrix-patrickta-web-v2.mp4',
    summary:
      'A soft-glam tutorial built around Patrick Ta’s shimmer eyeshadow and blush duos.',
    brief:
      'Patrick Ta’s products are known for their luminous, sculpted finish. The brief was to show that signature glow on the eyes and cheeks in a look viewers could recreate. Patrick Ta’s products are positioned as professional quality, so the brief asked for content that shows texture, pigment and finish up close. The look needed to be glamorous but achievable, and the compacts needed to be shown clearly enough that viewers could recognise them in store.',
    approach:
      'Beatrix Ramosaj opens with close-ups of the shimmer eyeshadow pan and blush duo, then builds the look step by step: shimmer pressed onto the lid, defined lashes and liner, then the blush buffed onto the cheeks. Tight framing on the compacts and textures shows the product’s quality, while the finished look demonstrates its luminous effect.',
    outcome:
      'Patrick Ta received a premium, product-forward tutorial that shows multiple products and a cohesive finished look. It works for the creator’s audience and as aspirational paid content.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },

  {
    slug: 'medicube-campaign',
    brand: 'Medicube',
    title: 'Medicube Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@melaniseiffert',
    videoSrc: '/videos/redesign/rd-melani-medicube-web-v2.mp4',
    summary:
      'A glass-skin night routine built around Medicube’s Collagen Night Wrapping Mask, from application to the peel-off reveal.',
    brief:
      'Medicube’s Collagen Night Wrapping Mask has a distinctive peel-off format, so the content needed to show the whole experience, application, overnight wear and the result, while explaining what it does. Medicube’s collagen mask is a viral product, so the content had to stand out in a crowded feed. The brief asked for a complete, satisfying demonstration from application to reveal, a clear explanation of when and why to use it, and a glass-skin result strong enough to stop the scroll.',
    approach:
      'Melani Seiffert opens on her “mirror-like glowy skin,” then shows the mask being brushed on as the final step of her routine. On-screen captions explain that it is applied after skincare to seal everything in overnight, and that it contains collagen extract and hyaluronic acid to help improve elasticity and provide deep hydration. The video ends on the satisfying peel-off and close-ups of dewy, glass-like skin.',
    outcome:
      'Medicube received a complete demonstration of a hero product, with clear education and a highly shareable reveal. It works as organic discovery content and as performance creative aimed at skincare shoppers.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'celimax-campaign',
    brand: 'Celimax',
    title: 'Celimax Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@loresakonushevci',
    videoSrc: '/videos/redesign/rd-loresa-celimax-web-v2.mp4',
    summary:
      'A precise application tutorial for Celimax’s retinal shot, mapped to dark circles, fine lines and uneven tone.',
    brief:
      'Retinal can feel intimidating, so Celimax needed content that shows exactly where and how to use it. The goal was a clear, benefit-led demonstration for viewers concerned about dark spots, fine lines and uneven skin tone. Many viewers are curious about retinal but unsure how and where to use it. The brief asked for a precise, low-intimidation demonstration that shows exactly where to apply the product, names the benefit for each zone, and positions Celimax as an easy entry point into retinal skincare.',
    approach:
      'Loresa Konushevci dots the Celimax retinal shot along the areas it targets, under the eyes, along the smile lines and across the forehead, with on-screen captions naming each benefit: brightens dark circles, reduces fine lines, for smoother and firmer skin. She then massages it in, showing that a small amount covers the face. The bright yellow dots make the technique easy to copy.',
    outcome:
      'Celimax received an instructional video that removes the guesswork from using retinal and ties each placement to a benefit. It works as education for new users and as a clear, conversion-friendly paid asset.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'axis-y-campaign',
    brand: 'AXIS-Y',
    title: 'AXIS-Y Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@shellbeauty1',
    videoSrc: '/videos/redesign/rd-sadaf-axisy-web-v2.mp4',
    summary:
      'A lip-care routine introducing AXIS-Y’s lip oils, from swatches to a glossy, cared-for finish.',
    brief:
      'AXIS-Y is known for its skincare, and its lip oils bring the same care-first approach to the lips. The brief was to show the oils as both a treatment and a finish: how the shades look, how the texture glides on and how the lips look once applied. The content needed to feel like a natural part of a beauty routine, keep the bottles clearly in shot and suit a polished beauty audience on Instagram and TikTok.',
    approach:
      'Sadaf Torabi opens by holding up the lip oils side by side so each shade is easy to see, then applies them one by one in close-up. The camera stays tight on the doe-foot applicator and the lips, so viewers can follow the texture and the glossy, hydrated finish, before she closes on the finished look.',
    outcome:
      'AXIS-Y received a polished, product-forward beauty video that shows the lip oils’ shades, texture and finish in under twenty seconds. It works as organic discovery content and as a clean asset for paid social around lip care.',
    services: ['Content production', 'Concept development'],
    metrics: [],
  },

  {
    slug: 'arencia-campaign',
    brand: 'Arencia',
    title: 'Arencia Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@glowbyaure',
    videoSrc: '/videos/redesign/rd-aurela-arencia-web-v2.mp4',
    summary:
      'A concern-by-concern guide matching each Arencia Booster Shot to the skin issue it targets.',
    brief:
      'Arencia offers several booster shots with different actives, so shoppers need help choosing. The brief was to explain the range clearly and make each product feel like the answer to a specific concern. Arencia’s booster range contains different actives for different needs, which can be confusing for new customers. The brief was to make the range easy to navigate, link each product to a visible concern, and create an evergreen, saveable asset that does the work of a product-finder.',
    approach:
      'Aurela Elshani builds the video as a visual chart. For each concern she shows a close-up of the area, then applies the matching booster, with on-screen labels pairing them: neck wrinkles with NAD+, closed comedones with glycolic acid, under-eye sagging with retinal, and smile lines with PDRN. Inset close-ups of the concern, together with dot-by-dot application, make each step instantly understandable.',
    outcome:
      'Arencia received a highly saveable, education-led video that sells the full range by helping viewers self-select the right product. It works both as discovery content and as a performance asset aimed at specific skin concerns.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'lilyeve-campaign',
    brand: 'Lilyeve',
    title: 'Lilyeve Creator Campaign',
    vertical: 'Haircare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@albina',
    videoSrc: '/videos/redesign/rd-haircare-web-v2.mp4',
    summary:
      'Scalp-care content showing how Lilyeve’s GROW:TURN Pink Collagen Capsule Ampoule fits into a hair routine.',
    brief:
      'Collagen is a familiar skincare ingredient but a new idea for hair. Lilyeve needed content that made scalp care feel easy and desirable, and showed the payoff: healthier-looking, shinier hair. The audience already invests in skincare but often treats hair care as an afterthought. Lilyeve needed to introduce the GROW:TURN Pink Collagen Capsule Ampoule as a simple, pleasant ritual, show how its capsule texture and brush applicator work, and connect the routine to a visual result viewers would want for themselves.',
    approach:
      'Albina Mavriqi starts with a close-up of the applicator brush dispensing the ampoule straight onto her scalp, showing how simply it works. The video then cuts to the reveal, long, silky “glass-like” hair, before closing on the GROW:TURN Pink Collagen Capsule Ampoule with its name on screen. The before-the-routine and after-the-routine structure links the product to the result in seconds.',
    outcome:
      'Lilyeve received content that introduces a new category, collagen for hair, through a clear demonstration and an aspirational result. It works as education for new audiences and as a strong visual asset for paid social.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'dr-althea-campaign',
    brand: 'Dr. Althea',
    title: 'Dr. Althea Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@khutjomatsoma',
    videoSrc: '/videos/redesign/rd-skincare-web-v2.mp4',
    summary:
      'A hydration-focused glass-skin moment with Dr. Althea’s Aqua Marine Jelly Mist.',
    brief:
      'Dr. Althea wanted to show its face mist as a quick hydration boost that leaves a fresh, dewy finish. Face mists can look like an optional extra, so the brief was to make the Aqua Marine Jelly Mist feel like an essential hydration step. The content needed a strong visual hook, a clear glow result and a trend-aware tone that fits naturally on short-form platforms.',
    approach:
      'Khutjo Matsoma uses the mist in a series of slow, close-up shots that capture the fine spray and the luminous skin it leaves behind. The caption, “facemistmaxxing,” adds a playful, trend-aware tone, while the lighting emphasises her dewy, glass-skin glow.',
    outcome:
      'Dr. Althea received a visually striking, trend-led video that communicates hydration and glow in seconds. It works for organic reach and as eye-catching paid creative.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'torriden-campaign',
    brand: 'Torriden',
    title: 'Torriden Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@albina',
    videoSrc: '/videos/redesign/rd-albina-torriden-web-v3.mp4',
    summary:
      'A firming-skincare story for Torriden’s Cellmazing Low Molecular Collagen Firming Cream, from texture to bouncy result.',
    brief:
      'Collagen creams are often seen as heavy. Torriden wanted to show that its Cellmazing Firming Cream feels light while delivering a firmer, bouncier look. Torriden wanted to grow awareness of its firming range among shoppers who already know its hydrating bestsellers. The brief asked for content that addresses a common objection to collagen creams, explains the formula in simple terms and links to a clear, trackable offer.',
    approach:
      'Albina Mavriqi opens on “when your skin loses its bounce…,” pressing on her cheek to make the concern tangible. She dispenses the cream, captioned “collagen creams are usually heavy, but this melts in like a moisturiser,” and lists its key ingredients on screen: 5D low-molecular collagen, peptides for elasticity and hyaluronic acid for hydration. She massages it in and finishes on a radiant, plumped result described as smoother-looking lines and hydration and firmness in one step.',
    outcome:
      'Torriden received ingredient-led creator content that overturns a common objection and shows a clear result. Combined with her discount code, it works as both education and a conversion-focused asset.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'beauty-of-joseon-campaign',
    brand: 'Beauty of Joseon',
    title: 'Beauty of Joseon Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@saranda',
    videoSrc: '/videos/redesign/rd-saranda-boj-web-v2.mp4',
    summary:
      'A seven-day under-eye diary using Beauty of Joseon’s Revive Eye Serum and Revive Under Eye Patch with ginseng and retinal.',
    brief:
      'Beauty of Joseon wanted to show its retinal eye duo working over time, not after a single use. The content needed to build trust through consistency and a visible before-and-after. Eye-care buyers are sceptical of quick fixes, so the brief was to build credibility through consistency rather than claims. The content needed to show both products used together, document progress over several days, and make the comparison easy for viewers to judge for themselves.',
    approach:
      'Saranda Mavriqi opens with a split-screen before and after, then documents her routine day by day. She introduces the Revive Under Eye Patch (Ginseng + Retinal) and Revive Eye Serum, applying the patches and serum under the eye with Day 1, Day 3, Day 5 and Day 7 labels on screen. Tight, well-lit close-ups make the area easy to compare, and the video closes on the before shot so viewers can judge the change for themselves.',
    outcome:
      'Beauty of Joseon received diary-style content that pairs two products in a believable routine and shows them in sustained use. It works as trust-building organic content and as a persuasive paid asset for eye-care shoppers.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'frankly-campaign',
    brand: 'Frankly',
    title: 'Frankly Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@khutjo.matsoma',
    videoSrc: '/videos/redesign/rd-khutjo-frankly-web-v3.mp4',
    summary:
      'A poreless glass-skin routine centred on a few drops of Frankly’s Closer Serum.',
    brief:
      'Frankly wanted to show how its Closer Serum targets visible pores and texture, with a result viewers could clearly see on camera. Frankly is a newer name for many viewers, so the content needed to make a strong first impression. The brief was to tie the Closer Serum to a specific, relatable concern, pores and uneven texture, and show a visible improvement in finish within a short video.',
    approach:
      'Khutjo Matsoma opens on the goal, “poreless glass skin,” then shows extreme close-ups of texture and pores to set the scene. She applies a few drops of Frankly Closer Serum from the dropper, presses it into her skin and finishes with radiant, even-looking close-ups. Warm light and slow, deliberate movements emphasise the smooth, glassy finish.',
    outcome:
      'Frankly received a clear, results-focused serum demonstration with a strong visual payoff. It works as organic content for Khutjo’s skincare audience and as paid creative for viewers concerned about pores and texture.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'biodance-campaign',
    brand: 'Biodance',
    title: 'Biodance Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@therealbeatrixramosaj',
    videoSrc: '/videos/redesign/rd-beatrix-biodance-web-v2.mp4',
    summary:
      'A day-in-the-life story showing how Biodance’s overnight mask glow lasts, topped up with the Caviar PDRN Jelly Serum Mist.',
    brief:
      'Biodance wanted to sell the idea of a long-lasting “24-hour mask glow.” The content had to show both products in context: the overnight mask at home, and the serum mist as a quick refresh throughout the following day. Biodance is best known for its overnight sheet masks, and the brief was to extend that recognition to its Caviar PDRN Jelly Serum Mist. The content had to present the two products as a system, communicate how long the glow lasts, and do it in an aspirational, lifestyle format rather than a static product demo.',
    approach:
      'Beatrix Ramosaj builds the story around a clock. Time stamps run from 8PM, when she applies the mask in bed, through her evening at home, to the next afternoon at her laptop, outdoors and out for the day. At each point she reaches for the Caviar PDRN Jelly Serum Mist, so viewers see how the glow is maintained in real life. Warm interiors and sunny exteriors keep the video aspirational yet relatable.',
    outcome:
      'Biodance received lifestyle-led content that demonstrates two products and a clear usage pattern, three hours at night and three seconds to keep the glow. The narrative format holds attention and gives the brand a versatile asset for organic and paid use.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },

  {
    slug: 'skin1004-campaign',
    brand: 'SKIN1004',
    title: 'SKIN1004 Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@closmain',
    videoSrc: '/videos/redesign/rd-anton-azelaic-web-v3.mp4',
    summary:
      'A daily-routine video for SKIN1004’s Azelaic Acid 10%, framed around Anton’s own experience with acne-prone skin.',
    brief:
      'SKIN1004 wanted to introduce its Azelaic Acid 10% to viewers dealing with breakouts, redness and post-acne marks. Azelaic acid is effective but still unfamiliar to many people, so the brief called for a creator who could speak from personal experience and explain, in plain terms, what the ingredient does and how it fits into a daily routine. The content had to be honest and reassuring rather than clinical, name each benefit on screen, and show the bottle clearly enough that viewers could find it again.',
    approach:
      'Anton Drozhzhin, who has talked openly about his own acne, presents the serum as the ingredient he wishes he had known about sooner. The video moves through his routine in short, clean shots: drops applied to the forehead and cheeks, the texture shown on the back of the hand, and the serum pressed into the skin. On-screen captions tie each step to a benefit (10% azelaic acid daily, control excess sebum, calm redness) before a close-up of the bottle and a final look at his calm, even skin.',
    outcome:
      'SKIN1004 received a personal, education-led creator video that explains a less familiar active in a few seconds and keeps the product in view throughout. It suits organic discovery for acne-prone audiences and can be reused as performance creative focused on redness and post-acne marks.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

/** Look up the case study for a campaign video src (used by the /work grid). */
export function caseStudyForVideo(src: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.videoSrc === src)
}
