import type { CaseStudy } from './case-studies'

// Fifteen creator showcases added under the existing Work grid (Oct 2026):
// five rows of three, ordered by `workOrder` below. The copy only describes what is
// visible in each post and its caption: no client brief, services, paid
// partnership, usage rights, results or figures. Sources are the public
// Instagram posts in `sourceUrl`; the downloads are archived on the server in
// /srv/caagency-media-sources/work-15-2026-10. Jay's Rejuran film is a
// trimmed copy that starts at the product introduction (first 7.6 s cut).
const film = (key: string) => `/videos/work/case-${key}-v1.mp4`

type CreatorCase = Omit<CaseStudy, 'services' | 'metrics' | 'vertical' | 'platforms'> &
  Partial<Pick<CaseStudy, 'vertical'>>

const cases: CreatorCase[] = [
  {
    slug: 'eclado-loresa',
    brand: 'ECLADO',
    title: 'ECLADO × Loresa Konushevci',
    vertical: 'Beauty Tech',
    creator: '@loresakonushevci',
    creatorName: 'Loresa Konushevci',
    sourceUrl: 'https://www.instagram.com/loresakonushevci/reel/Db_EGXzsw--/',
    videoSrc: film('eclado-loresa'),
    summary:
      'Loresa Konushevci shows ECLADO’s CELVIX PRO at-home RF device, paired with the EXO FILAGEN CREAM, from first application to the finished glow.',
    brief:
      'An at-home beauty device needs to be seen in use: how it is held, how it glides and what the skin looks like afterwards. This reel introduces ECLADO’s CELVIX PRO, presented in the caption as an at-home RF device for firmer, more contoured-looking skin, together with the EXO FILAGEN CREAM that gives it a smooth glide.',
    approach:
      'Loresa opens on a bare-skin close-up labelled “Before”, applies the EXO FILAGEN CREAM and then works the device across her cheek and jaw. On-screen captions walk through each stage, boost absorption, lifting and sculpt, glow-enhancing care, before the reel closes on an “After” shot of hydrated, radiant-looking skin.',
    outcome:
      'A clear, step-by-step device demonstration in Loresa’s own calm, close-up style, with the device and cream both kept in view.',
  },
  {
    slug: 'patrick-ta-beatrix',
    brand: 'Patrick Ta',
    title: 'Patrick Ta × Beatrix Ramosaj',
    vertical: 'Makeup',
    creator: '@beatrixramosaj',
    creatorName: 'Beatrix Ramosaj',
    sourceUrl: 'https://www.instagram.com/beatrixramosaj/reel/DY0KjV7xY43/',
    videoSrc: film('patrick-ta-beatrix'),
    summary:
      'Beatrix Ramosaj creates a soft “transition blush” look with Patrick Ta’s new blush collection, shared ahead of its launch.',
    brief:
      'Patrick Ta’s launch, presented in the caption as “The Evolution of Blush”, is built around blush that melts from the under-eye into the cheeks. Beatrix shares the collection the day before it launched, showing how the placement and textures work together.',
    approach:
      'Beatrix places colour right under the eye while it is still wet, taps rather than drags, and blends it out. She then goes in with the blurring blush duo and finishes on the apples of the cheeks. On-screen captions explain each step, and the reel ends on the finished soft, editorial flush and the products in hand.',
    outcome:
      'A tutorial-led look that viewers can follow step by step, with Beatrix’s own description of the collection as soft, romantic and wearable every day.',
  },
  {
    slug: 'iunik-khutjo',
    brand: 'IUNIK',
    title: 'IUNIK × Khutjo Matsoma',
    vertical: 'K-Beauty Skincare',
    creator: '@khutjomatsoma',
    creatorName: 'Khutjo Matsoma',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DejllTAu653/',
    videoSrc: film('iunik-khutjo'),
    summary:
      'Khutjo Matsoma presents IUNIK’s Beta-Glucan Power Moisture Serum as a “skin drink” for a dewy, glass-skin finish.',
    brief:
      'Hydration is easiest to understand when it is visible. This reel frames IUNIK’s Beta-Glucan Power Moisture Serum as a drink of water for the skin, a simple idea that runs through the whole video.',
    approach:
      'Khutjo opens holding a glass of water, then switches to the serum with “SKIN DRINK SERUM!” on screen. She applies it from the dropper, presses it in with her fingertips and turns to the light to show the dewy finish. Short captions name the points she highlights about the formula, and the reel closes with the bottle beside her glowing skin.',
    outcome:
      'A simple, memorable concept carried by close-up application and a glossy, glass-skin finish.',
  },
  {
    slug: 'meditherapy-aurela',
    brand: 'Meditherapy',
    title: 'Meditherapy × Aurela Elshani',
    vertical: 'K-Beauty Skincare',
    creator: '@glowbyaure',
    creatorName: 'Aurela Elshani',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DeeR_lyOcfw/',
    videoSrc: film('meditherapy-aurela'),
    summary:
      'Aurela Elshani follows Meditherapy’s Hyaluronic Skin Booster First Serum over fourteen days in close-up.',
    brief:
      'A hydrating serum is best shown over time. In this reel Aurela brings the Hyaluronic Skin Booster First Serum to life through close-up application shots and skin comparisons, highlighting its hydrating benefits and the appearance of smoother, plumper skin.',
    approach:
      'The video starts on a close-up of fine lines across the forehead, then follows Aurela applying the serum with day markers on screen, Day 1, Day 3, Day 7, Day 10 and Day 14. The framing stays tight on the same area throughout, so viewers can compare the texture themselves, and the reel ends with Aurela holding the bottle.',
    outcome:
      'A diary-style close-up format that keeps the product and the skin at the centre of every shot.',
  },
  {
    slug: 'arencia-albina',
    brand: 'Arencia',
    title: 'Arencia × Albina Mavriqi',
    vertical: 'K-Beauty Skincare',
    creator: '@albina',
    creatorName: 'Albina Mavriqi',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DejlWyJOH6s/',
    videoSrc: film('arencia-albina'),
    summary:
      'Albina Mavriqi shows Arencia’s NAD+ Booster Shot in a close-up under-eye and cheek routine.',
    brief:
      'Under-eye care calls for precision. This reel opens on “POV: your skin needs NAD+” and introduces Arencia’s NAD+ Booster Shot, with on-screen captions pointing to fine lines and wrinkles as the area of focus.',
    approach:
      'Albina dots the lilac formula under the eye and across the cheek, then smooths it in with a facial tool. Macro shots show the texture on her skin, and the tube is shown clearly before the reel finishes on a wider shot of her radiant, hydrated-looking complexion.',
    outcome:
      'A polished, detail-focused application video with the product name and texture both easy to recognise.',
  },
  {
    slug: 'rejuran-jay',
    brand: 'Rejuran',
    title: 'Rejuran × Jay Sadiq',
    vertical: 'K-Beauty Skincare',
    creator: '@jaysadiq_',
    creatorName: 'Jay Sadiq',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DeeSexIuINa/',
    videoSrc: film('rejuran-jay'),
    summary:
      'Jay Sadiq puts Rejuran’s Pore Tightening Pad & Ampoule to the test in a summer pore-care routine.',
    brief:
      'Pore care is a common concern, and especially in summer. Jay demonstrates how Rejuran’s Pore Tightening Pad & Ampoule work and highlights their pore-refining benefits through application and before-and-after comparisons.',
    approach:
      'The film opens on the product introduction, Jay holding the pads with “This is the Rejuran Pore Tightening Pad & Ampoule, designed for summer pore care” on screen. He wipes a pad across his skin, lays the pads over his nose and cheeks as a cooling mask, then follows with the ampoule. On-screen captions explain each step before the reel cuts to a “Before” and “After” comparison.',
    outcome:
      'A step-by-step routine with clear product shots and a before-and-after viewers can judge for themselves.',
  },
  {
    slug: 'vt-cosmetics-anton',
    brand: 'VT Cosmetics',
    title: 'VT Cosmetics × Anton Drozhzhin',
    vertical: 'K-Beauty Skincare',
    creator: '@closmain',
    creatorName: 'Anton Drozhzhin',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DT3TtHqDpzr/',
    videoSrc: film('vt-cosmetics-anton'),
    summary:
      'Anton Drozhzhin introduces VT Cosmetics’ vibrating eye cream as a piece of Korean skincare tech.',
    brief:
      'An eye cream with a built-in vibrating applicator is easier to show than to describe. This reel presents VT Cosmetics’ vibrating eye cream through Anton’s own routine.',
    approach:
      'Anton opens with the applicator in hand, then shows the vibrating tip in close-up with “Vibrating eye cream” on screen. He works the cream under each eye and around the eye area, with short captions naming the benefits shown in the video, and closes with a final look at the applicator in use.',
    outcome:
      'A product-tech demonstration with the device, the texture and the application all shown up close.',
  },
  {
    slug: 'nyx-albulena',
    brand: 'NYX Professional Makeup',
    title: 'NYX Professional Makeup × Albulena Mavriqi',
    vertical: 'Makeup',
    creator: '@albulena.mavriqi',
    creatorName: 'Albulena Mavriqi',
    sourceUrl: 'https://www.instagram.com/albulena.mavriqi/reel/DVYm3DSjHdF/',
    videoSrc: film('nyx-albulena'),
    summary:
      'Albulena Mavriqi answers a familiar problem, brows that keep falling, with a NYX Professional Makeup brow gel.',
    brief:
      'The reel opens on a relatable “POV: eyebrows keep falling?” and presents a NYX Professional Makeup brow gel as the fix.',
    approach:
      'Albulena shows the bright pink tube up close, brushes the gel up through her brows and finishes on her set, lifted brows in natural light. The video is short and direct, keeping the product and the brows in every shot.',
    outcome:
      'A quick, problem-and-solution format that suits short-form viewing.',
  },
  {
    slug: 'first-aid-beauty-albulena',
    brand: 'First Aid Beauty',
    title: 'First Aid Beauty × Albulena Mavriqi',
    vertical: 'Skincare',
    creator: '@albulena.mavriqi',
    creatorName: 'Albulena Mavriqi',
    sourceUrl: 'https://www.instagram.com/albulena.mavriqi/reel/DWCO27WjANS/',
    videoSrc: film('first-aid-beauty-albulena'),
    summary:
      'Albulena Mavriqi shows how skin prep from First Aid Beauty sits under foundation, captioned “Good skin = flawless makeup”.',
    brief:
      'Makeup sits better on well-prepared skin. This reel connects the two, showing foundation applied over skin cared for with First Aid Beauty.',
    approach:
      'In tight close-ups around the mouth and chin, Albulena applies foundation with a spatula, blends it with a sponge and shows a side-by-side of the finish. The reel ends with the First Aid Beauty tub in hand.',
    outcome:
      'A macro, texture-led video that links a skincare product to a smooth makeup finish.',
  },
  {
    slug: 'lashify-dariia',
    brand: 'Lashify',
    title: 'Lashify × Dariia Bordun',
    vertical: 'Makeup',
    creator: '@_idareen_',
    creatorName: 'Dariia Bordun',
    sourceUrl: 'https://www.instagram.com/_idareen_/reel/Dcgvo4eiz9x/',
    videoSrc: film('lashify-dariia'),
    summary:
      'Dariia Bordun tests Lashify’s creamy nude lip liners for blend and smudge-resistance, with a water test on camera.',
    brief:
      'Lip liners are judged on two things: how they blend and how long they stay put. Dariia’s reel, captioned “creamy nude lipliners that blend perfectly and won’t smudge”, puts both to the test.',
    approach:
      'Dariia opens with “Waterproof lip liner???” and a glass of water, swatches the shades on her hand, then lines and fills her lips with each one. The shades Nude Taupe, Nude Plum and Nude Rouge are named on screen. She closes by pouring water over her lips to show the liner staying in place.',
    outcome:
      'A demonstration-led review that shows the shade range and puts the product’s claim to a visible test.',
  },
  {
    slug: 'revcell-loresa',
    brand: 'REVCELL',
    title: 'REVCELL × Loresa Konushevci',
    vertical: 'K-Beauty Skincare',
    creator: '@loresakonushevci',
    creatorName: 'Loresa Konushevci',
    sourceUrl: 'https://www.instagram.com/loresakonushevci/reel/DbOU-kssjiN/',
    videoSrc: film('revcell-loresa'),
    summary:
      'Loresa Konushevci turns her REVCELL routine into an at-home spa day, from the Vita Collagen Activfilm to an instant glow.',
    brief:
      'A multi-step routine needs a story to hold it together. Loresa frames her REVCELL routine as a spa day at home, captioned “Healthy, glowing skin starts with my REVCELL routine”.',
    approach:
      'The reel opens on the products set out on a tray, then follows each step: the Vita Collagen Activfilm sheet applied over her face, a creamy layer smoothed on, and a serum applied from a syringe-style applicator. It ends on a close-up captioned “Instant glow”.',
    outcome:
      'A lifestyle-led routine video that shows several products in order and in context.',
  },
  {
    slug: 'prada-beauty-rebecca',
    brand: 'Prada Beauty',
    title: 'Prada Beauty × Rebecca Ghaderi',
    vertical: 'Luxury Beauty',
    creator: '@rebeccaghaderi',
    creatorName: 'Rebecca Ghaderi',
    sourceUrl: 'https://www.instagram.com/rebeccaghaderi/p/DXNvez-lJTV/',
    videoSrc: '',
    image: { src: '/images/work/case-prada-beauty-rebecca-v1.jpg', width: 1440, height: 1774 },
    summary:
      'Rebecca Ghaderi at the Prada Beauty Touch Blush pop-up, photographed in a polka-dot look against the brand’s pink and red set.',
    brief:
      'This is a photo post rather than a video. Rebecca visits the Prada Beauty Touch Blush pop-up, a pink-and-red space styled around the launch.',
    approach:
      'The carousel moves between portraits of Rebecca in a white shirt and polka-dot dress in front of the Prada and Touch Blush signage, and details of the blush compacts and the set. The cover image, shown here, places her in the pop-up with the Touch Blush display behind her.',
    outcome:
      'An editorial, event-led photo post where the setting and styling carry the brand’s look.',
  },
  {
    slug: 'vichy-dariia',
    brand: 'Vichy',
    title: 'Vichy × Dariia Bordun',
    vertical: 'Skincare',
    creator: '@_idareen_',
    creatorName: 'Dariia Bordun',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DafnDAqBamR/',
    videoSrc: film('vichy-dariia'),
    summary:
      'Dariia Bordun builds an everyday no-makeup makeup look, step by step, starting with Vichy skincare.',
    brief:
      'A no-makeup look starts with skin. This reel, titled on screen “everyday no makeup makeup step by step tutorial”, begins with Vichy before any makeup goes on.',
    approach:
      'Dariia starts with brows, then applies her Vichy skincare and presses it in with her hands. She follows with a light base blended with a sponge, liner and gloss, keeping each step short and easy to copy, and finishes on a fresh, natural look.',
    outcome:
      'A practical, everyday tutorial where skincare is shown as the first step of the routine.',
  },
  {
    slug: 'k-secret-aiym',
    brand: 'K-SECRET',
    title: 'K-SECRET × Aiym Kablan',
    vertical: 'K-Beauty Skincare',
    creator: '@imkablan',
    creatorName: 'Aiym Kablan',
    sourceUrl: 'https://www.instagram.com/caagency/reel/DeZchErOvY1/',
    videoSrc: film('k-secret-aiym'),
    summary:
      'Aiym Kablan works K-SECRET’s SEOUL 1988 Eye Cream into her morning glow routine.',
    brief:
      'Eye cream is easy to forget in a morning routine. This reel follows Aiym through hers and shows where K-SECRET’s SEOUL 1988 Eye Cream fits in.',
    approach:
      'Aiym moves through her morning, flossing, brushing and cleansing, with captions labelling each step. On-screen text explains why she chooses a dedicated eye cream for the delicate eye area, and she applies small dots of the SEOUL 1988 Eye Cream around her eyes before the reel ends on “Enjoy the results”.',
    outcome:
      'A relatable morning-routine format that gives the eye cream a clear place and purpose.',
  },
  {
    slug: 'too-faced-melly',
    brand: 'Too Faced',
    title: 'Too Faced × Melly Sanchez',
    vertical: 'Makeup',
    creator: '@thefashionfreakk',
    creatorName: 'Melly Sanchez',
    sourceUrl: 'https://www.instagram.com/thefashionfreakk/reel/Dan6Z_tP1n_/',
    videoSrc: film('too-faced-melly'),
    summary:
      'Melly Sanchez gets dressed for a Too Faced event in a pink, get-ready-with-me reel.',
    brief:
      'Event content works best when viewers feel part of the build-up. Melly’s caption sets the scene: “get dressed with me for a Too Faced event”.',
    approach:
      'Melly starts by holding up the soft pink dress she has chosen, then builds the look piece by piece, showing the shoes, jewellery and details to camera, before walking down the hallway in the finished outfit.',
    outcome:
      'A fashion-led get-ready-with-me that brings the Too Faced event mood to Melly’s audience.',
  },
]

// Work order (Oct 2026 client request): a colour gradient measured from each
// film, continuing from the light neutral the existing grid ends on, through
// golden tones to rosy and pink. No creator appears twice in a row of three
// (desktop) or a pair (phones), or directly above themselves.
const workOrder = [
  'rejuran-jay', 'revcell-loresa', 'vt-cosmetics-anton',
  'eclado-loresa', 'iunik-khutjo', 'lashify-dariia',
  'meditherapy-aurela', 'vichy-dariia', 'k-secret-aiym',
  'first-aid-beauty-albulena', 'arencia-albina', 'patrick-ta-beatrix',
  'too-faced-melly', 'nyx-albulena', 'prada-beauty-rebecca',
]
const bySlug = new Map(cases.map((c) => [c.slug, c]))

export const creatorCases: CaseStudy[] = workOrder.map((slug) => bySlug.get(slug)!).map((c) => ({
  vertical: 'Beauty',
  ...c,
  platforms: ['Instagram'],
  showcase: true,
  hasAudio: !!c.videoSrc,
  services: [],
  metrics: [],
}))
