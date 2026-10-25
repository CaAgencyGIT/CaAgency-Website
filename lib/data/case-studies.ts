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
      'Creator-led short-form video putting HONOR devices in real, everyday hands instead of a spec sheet.',
    brief:
      'HONOR wanted its devices shown the way people actually use them, in the hand, in daily life, rather than through studio product shots. The content had to feel native to the creator’s feed while keeping the device unmistakably in focus.',
    approach:
      'We matched HONOR with a creator whose audience skews toward lifestyle and everyday tech, then built the concept around moments where the phone is naturally on camera. Scripting stayed loose: the creator kept their own voice and pacing, and the device features were woven into the story instead of listed.',
    outcome:
      'The collaboration delivered platform-native vertical video that HONOR could run as creator content, giving the brand an authentic presence in feeds where traditional ads get skipped.',
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
      'Creator content pairing Kylie Cosmetics products with a face and voice audiences already trust.',
    brief:
      'For a brand with enormous built-in awareness, the job of creator content shifts: it’s less about introduction and more about credibility, real application, real texture, a real person’s opinion.',
    approach:
      'The content leaned into up-close application and honest first-person delivery, the format that earns trust in beauty. We handled creator selection, brief development, and the review cycle between creator and brand.',
    outcome:
      'Kylie Cosmetics received relatable, application-led creator video that complements its polished brand channels with a street-level point of view.',
    services: ['Creator matching', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'yesstyle-collaboration',
    brand: 'YesStyle',
    title: 'YesStyle Creator Collaboration',
    vertical: 'K-Beauty Retail',
    platforms: ['TikTok', 'Instagram Reels'],
    videoSrc: '/videos/work/georgii-yesstyle-web-v1.mp4',
    summary:
      'Haul-style creator content built for YesStyle’s discovery-driven K-beauty shoppers.',
    brief:
      'As a marketplace, YesStyle benefits most from discovery-format content, hauls and multi-product features that mirror how its customers actually shop. The brief asked for content with that browsing energy.',
    approach:
      'We structured the video as a curated haul, giving each product a moment while keeping the pace fast enough for short-form retention. The creator’s genuine enthusiasm for K-beauty carried the selection.',
    outcome:
      'YesStyle received discovery-style creator content that showcases range, the retailer’s core advantage, in the format its K-beauty audience already watches.',
    services: ['Creator matching', 'Concept development', 'Content production'],
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
    videoSrc: '/videos/work/albina-mixsoon-web-v1.mp4',
    summary:
      'Minimalist skincare storytelling matching Mixsoon’s single-ingredient K-beauty philosophy.',
    brief:
      'Mixsoon’s identity is minimalism, short ingredient lists, single-hero formulas. The content had to reflect that restraint rather than bury it under a maximal beauty edit.',
    approach:
      'We briefed the creator toward a stripped-back visual style: clean frames, texture macro shots, and a routine narrative focused on one hero product at a time, mirroring the brand’s one-ingredient ethos.',
    outcome:
      'The campaign delivered creator content whose look and pacing embody the brand position itself, minimal, ingredient-first K-beauty, instead of a generic skincare ad.',
    services: ['Creator matching', 'K-beauty strategy', 'Content production'],
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
    videoSrc: '/videos/work/melly-fenty-web-v1.mp4',
    summary:
      'Base-makeup creator content that shows Fenty Beauty performing on real skin, in real light.',
    brief:
      'Fenty Beauty built its name on inclusivity and real-skin performance, so the content had to prove the product on camera rather than talk about it. The brief asked for an application-led routine with the finish clearly visible in daylight.',
    approach:
      'We cast our talent Melly Sanchez, whose beauty content leans on close-up application and honest delivery. The video walks through a full base routine, product in frame, texture and blend on camera, with the finished look carrying the final beat.',
    outcome:
      'Fenty Beauty received platform-native creator video that demonstrates shade match and finish credibly, an asset that works organically and as paid social.',
    services: ['Talent management', 'Concept development', 'Content production'],
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
      'Routine-led creator content introducing DELERE to a skincare-literate short-form audience.',
    brief:
      'As a challenger skincare brand, DELERE needed content that builds recognition fast: clear product presence, a believable routine, and a creator whose audience already cares about skincare.',
    approach:
      'The concept kept the structure simple, a real evening routine with DELERE products carrying each step, letting pack design and textures do the visual work while the creator narrates results in her own words.',
    outcome:
      'DELERE received a clean, repeatable content format that introduces the brand through routine context rather than a hard pitch, built to extend across future drops.',
    services: ['Creator matching', 'Concept development', 'Content production'],
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
      'Haul-and-favourites creator content built around the way people actually shop Sephora.',
    brief:
      'Sephora wins on range and discovery, so the brief asked for content with browsing energy: multiple products, quick verdicts, and the store experience woven through the story.',
    approach:
      'Our talent Albina Mavriqi structured the video as a curated Sephora edit, each pick getting an on-camera moment and a one-line reason to care, paced for short-form retention.',
    outcome:
      'Sephora received discovery-format creator content that showcases breadth, the retailer’s core advantage, in the format its beauty audience already watches daily.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'revolve-beauty-campaign',
    brand: 'Revolve Beauty',
    title: 'Revolve Beauty Creator Campaign',
    vertical: 'Beauty E-commerce',
    platforms: ['Instagram Reels', 'TikTok'],
    creator: '@melaniseiffert',
    videoSrc: '/videos/work/melani-revolve-web-v1.mp4',
    summary:
      'Polished get-ready-with-me content pairing Revolve Beauty’s curation with an aspirational creator feed.',
    brief:
      'Revolve’s beauty arm sells curation and lifestyle as much as product. The content needed an elevated, editorial feel that still reads as a genuine creator post rather than a lookbook.',
    approach:
      'We matched the brief with our talent Melani Seiffert, whose feed already carries the polished-but-personal aesthetic Revolve trades on. A get-ready-with-me structure let multiple products appear naturally inside one narrative.',
    outcome:
      'Revolve Beauty received aspirational creator content aligned with its brand codes, multi-product, lifestyle-framed, and native to the platforms it performs on.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },
  {
    slug: 'anua-campaign',
    brand: 'Anua',
    title: 'Anua Skincare Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/anton-anua-web-v1.mp4',
    summary:
      'Male-skincare creator content bringing Anua’s K-beauty routine to an underserved audience.',
    brief:
      'Anua wanted to reach beyond the core K-beauty demographic. Men’s skincare is one of the fastest-growing segments, and the brief asked for content that makes a Korean routine feel approachable for men.',
    approach:
      'We cast our talent Anton Drozhzhin and kept the routine deliberately simple, cleanse, treat, protect, with Anua’s heartleaf line carrying each step and the voiceover demystifying the category.',
    outcome:
      'Anua received creator content that opens a new audience segment, positioning the brand as the easy entry point into K-beauty for men.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'purito-campaign',
    brand: 'Purito',
    title: 'Purito Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/work/aiym-purito-web-v1.mp4',
    summary:
      'Ingredient-first creator content matched to Purito’s clean, sensitive-skin positioning.',
    brief:
      'Purito’s audience reads INCI lists. The brief asked for content that respects that literacy, ingredient callouts, honest texture close-ups, and a calm tone consistent with the brand’s sensitive-skin promise.',
    approach:
      'Our talent Aiym Kablan built the video around a morning barrier-care routine, holding each product long enough for the formula story to land, with on-screen text reinforcing the hero ingredients.',
    outcome:
      'Purito received credibility-first creator content that speaks to skincare enthusiasts in their own language, strengthening the brand’s standing in the clean K-beauty conversation.',
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
    videoSrc: '/videos/work/beatrix-gisou-web-v1.mp4',
    summary:
      'Texture-rich haircare content that lets Gisou’s honey-infused line show its finish on camera.',
    brief:
      'Gisou content lives and dies on hair looking incredible. The brief asked for a routine video where shine, softness, and movement, not claims, do the selling.',
    approach:
      'Our talent @beatrixramosaj shot a styling routine in warm natural light, with slow-motion movement shots between steps so the finish gets its own screen time. The honey-gold brand world stays present through set and styling.',
    outcome:
      'Gisou received visually-led creator content where the result is the argument, native short-form that doubles as evergreen brand footage.',
    services: ['Talent management', 'Concept development', 'Content production'],
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
    videoSrc: '/videos/work/rebecca-haruharu-web-v1.mp4',
    summary:
      'Calm, texture-forward creator content for Haruharu Wonder’s fermented skincare line.',
    brief:
      'Haruharu Wonder’s black-rice ferment line needed content that communicates gentle efficacy, the visual language of hydration and glow, aimed at skincare-curious short-form viewers.',
    approach:
      'Our talent @rebeccaghaderi kept the edit unhurried: mist and serum textures up close, application in natural light, and a first-person read on how the routine feels rather than a claims list.',
    outcome:
      'Haruharu Wonder received sensorial creator content that translates its minimalist Korean skincare positioning into the short-form formats its next customers actually watch.',
    services: ['Talent management', 'Campaign management', 'Content production'],
    metrics: [],
  },
  {
    slug: 'armani-beauty-campaign',
    brand: 'Armani Beauty',
    title: 'Armani Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-dariia-armani-web-v2.mp4',
    summary:
      'Luxury makeup content that keeps Armani Beauty’s understated polish inside a creator’s feed.',
    brief:
      'Armani Beauty needed short-form video that protects its refined, minimal brand codes while still reading as genuine creator content rather than an advert.',
    approach:
      'Our talent Dariia Bordun built the video around close-up application, letting texture and finish carry the story, with styling and lighting kept consistent with the brand’s quiet-luxury look.',
    outcome:
      'Armani Beauty received premium-feeling vertical content suited to both the creator’s channel and paid social.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },
  {
    slug: 'valentino-beauty-campaign',
    brand: 'Valentino Beauty',
    title: 'Valentino Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-dariia-valentino-web-v2.mp4',
    summary:
      'Bold, editorial creator content built around Valentino Beauty’s statement makeup.',
    brief:
      'Valentino Beauty wanted its products shown with the confidence the brand is known for, in a format that feels native to short-form feeds.',
    approach:
      'Our talent Dariia Bordun created an application-led look with the product kept in frame throughout, pairing an editorial finish with a creator’s natural delivery.',
    outcome:
      'Valentino Beauty received statement creator content that reflects the brand’s couture positioning in a social-first format.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },
  {
    slug: 'chanel-beauty-campaign',
    brand: 'Chanel Beauty',
    title: 'Chanel Beauty Creator Campaign',
    vertical: 'Luxury Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-dariia-chanel-web-v2.mp4',
    summary:
      'Luxury base-makeup content showing Chanel Beauty’s pearlescent, dewy skin finish.',
    brief:
      'Chanel Beauty wanted its complexion products shown the way they look on real skin, with the luminous finish clear on camera and the brand’s polish intact.',
    approach:
      'Our talent Dariia Bordun built a short tutorial around a single product, applying it on camera and finishing on close-ups so the pearlescent glow came through.',
    outcome:
      'Chanel Beauty received premium creator content that demonstrates its finish in a native short-form format, suited to organic and paid use.',
    services: ['Talent management', 'Brand-safety review', 'Content production'],
    metrics: [],
  },
  {
    slug: 'rare-beauty-campaign',
    brand: 'Rare Beauty',
    title: 'Rare Beauty Creator Campaign',
    vertical: 'Makeup',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-melly-rare-web-v2.mp4',
    summary:
      'Easy, wearable makeup content matched to Rare Beauty’s approachable tone.',
    brief:
      'Rare Beauty’s audience responds to makeup that feels effortless. The brief asked for content showing how the products fit into a real, everyday look.',
    approach:
      'Our talent Melly Sanchez created a natural application video, keeping the pace relaxed and the product clearly in frame at each step.',
    outcome:
      'Rare Beauty received relatable creator content that demonstrates its products in the way its community actually wears them.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'saie-campaign',
    brand: 'Saie',
    title: 'Saie Creator Campaign',
    vertical: 'Clean Beauty',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-rebecca-saie-web-v2.mp4',
    summary:
      'Fresh, skin-first makeup content in line with Saie’s clean-beauty positioning.',
    brief:
      'Saie wanted content that shows a light, skin-first finish and fits the calm, natural aesthetic of the brand.',
    approach:
      'Our talent Rebecca Ghaderi built a simple everyday look, focusing on close-ups of texture and finish so the products’ feel came through on camera.',
    outcome:
      'Saie received creator content that showcases its clean, glowing look in a native short-form format.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'patrick-ta-campaign',
    brand: 'Patrick Ta',
    title: 'Patrick Ta Creator Campaign',
    vertical: 'Makeup',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-beatrix-patrickta-web-v2.mp4',
    summary:
      'Glow-focused makeup content built around Patrick Ta’s signature finish.',
    brief:
      'Patrick Ta is known for a luminous, sculpted look. The brief asked for creator content that captures that glow in a way that feels achievable.',
    approach:
      'Our talent Beatrix Ramosaj created an application-led video, layering products on camera so viewers could follow the technique.',
    outcome:
      'Patrick Ta received creator content that brings its signature finish to life in a format made for short-form feeds.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'medicube-campaign',
    brand: 'Medicube',
    title: 'Medicube Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-melani-medicube-web-v2.mp4',
    summary:
      'Creator content putting Medicube’s skincare routine front and centre.',
    brief:
      'Medicube wanted its skincare shown in use, with the routine and results clear enough for viewers to follow along.',
    approach:
      'Our talent Melani Seiffert built the collagen wrapping mask into her evening routine, keeping each step in frame with close-ups on skin.',
    outcome:
      'Medicube received routine-led creator content that demonstrates its products in a real, everyday setting.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'celimax-campaign',
    brand: 'Celimax',
    title: 'Celimax Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-loresa-celimax-web-v2.mp4',
    summary:
      'Routine-led K-beauty content for Celimax.',
    brief:
      'Celimax wanted its skincare introduced to new audiences through a creator routine that feels honest and easy to follow.',
    approach:
      'Our talent Loresa Konushevci built the video around her routine, holding each product on camera and showing texture up close.',
    outcome:
      'Celimax received approachable creator content that introduces its products through a real routine.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'arencia-campaign',
    brand: 'Arencia',
    title: 'Arencia Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-aurela-arencia-web-v2.mp4',
    summary:
      'Texture-led K-beauty content for Arencia.',
    brief:
      'Arencia wanted content that shows its products’ textures and feel, giving viewers a clear sense of the experience before they buy.',
    approach:
      'Our talent Aurela Elshani built the video around close-up application, letting texture and finish lead the story.',
    outcome:
      'Arencia received sensory, close-up creator content suited to short-form discovery.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'lilyeve-campaign',
    brand: 'Lilyeve',
    title: 'Lilyeve Creator Campaign',
    vertical: 'Haircare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-haircare-web-v2.mp4',
    summary:
      'Haircare routine content for Lilyeve.',
    brief:
      'Lilyeve wanted its haircare shown in a real routine, with the results visible on camera.',
    approach:
      'Our talent Albina Mavriqi walked through her haircare routine, keeping each product in frame and finishing on the result.',
    outcome:
      'Lilyeve received routine-led creator content that shows its haircare in everyday use.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'dr-althea-campaign',
    brand: 'Dr. Althea',
    title: 'Dr. Althea Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-skincare-web-v2.mp4',
    summary:
      'Skincare routine content for Dr. Althea.',
    brief:
      'Dr. Althea wanted its skincare introduced through a creator routine that feels genuine and easy to follow.',
    approach:
      'Our talent Khutjo Matsoma built the products into her routine, with close-ups on texture and skin so the finish came through on camera.',
    outcome:
      'Dr. Althea received authentic creator content that introduces its products through a real routine.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'torriden-campaign',
    brand: 'Torriden',
    title: 'Torriden Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-albina-torriden-web-v3.mp4',
    summary:
      'Bouncy-skin creator content for Torriden’s Cellmazing collagen firming cream.',
    brief:
      'Torriden wanted its Cellmazing Firming Cream shown in a real routine, with the texture and the bouncy, plumped finish clear on camera.',
    approach:
      'Our talent Albina Mavriqi built the video around a before-and-after routine, showing the cream’s texture up close and finishing on the glow it leaves.',
    outcome:
      'Torriden received routine-led creator content that demonstrates its firming cream in a native short-form format.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'beauty-of-joseon-campaign',
    brand: 'Beauty of Joseon',
    title: 'Beauty of Joseon Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-saranda-boj-web-v2.mp4',
    summary:
      'A seven-day under-eye routine for Beauty of Joseon’s Revive Eye Serum and Under Eye Patch.',
    brief:
      'Beauty of Joseon wanted its retinal eye duo shown over time, so viewers could see the routine and the change rather than a single application.',
    approach:
      'Our talent Saranda Mavriqi documented a day-by-day routine with close-ups under the eye, pairing the serum with the patches and returning to a before shot at the end.',
    outcome:
      'Beauty of Joseon received routine-led creator content that shows its eye care in real use over a week, in a native short-form format.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'frankly-campaign',
    brand: 'Frankly',
    title: 'Frankly Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-khutjo-frankly-web-v2.mp4',
    summary:
      'Glass-skin creator content for Frankly’s Closer Serum.',
    brief:
      'Frankly wanted its Closer Serum shown on real skin, with the smoothing, poreless finish clear on camera.',
    approach:
      'Our talent Khutjo Matsoma opened on close-ups of texture and pores, applied the serum on camera and finished on the glass-skin result.',
    outcome:
      'Frankly received routine-led creator content that demonstrates its serum in a native short-form format.',
    services: ['Talent management', 'Concept development', 'Content production'],
    metrics: [],
  },
  {
    slug: 'biodance-campaign',
    brand: 'Biodance',
    title: 'Biodance Creator Campaign',
    vertical: 'K-Beauty Skincare',
    platforms: ['Instagram Reels', 'TikTok'],
    videoSrc: '/videos/redesign/rd-beatrix-biodance-web-v2.mp4',
    summary:
      'Day-in-the-life creator content for Biodance’s overnight mask and Caviar PDRN Jelly Serum Mist.',
    brief:
      'Biodance wanted its overnight mask and serum mist shown as part of a real day, so the long-lasting glow came across rather than a single application.',
    approach:
      'Our talent Beatrix Ramosaj followed the glow from an evening mask through the next day, with time stamps and quick touch-ups using the serum mist.',
    outcome:
      'Biodance received lifestyle-led creator content that shows its products in everyday use, in a native short-form format.',
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
