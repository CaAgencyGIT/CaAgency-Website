import { brandWatermarks } from '@/lib/data/redesign-media'

// Brand logos for the marquee. Rendered with mix-blend-mode: multiply so
// baked-in white backgrounds disappear on the light strip.
// July 2026 round 3: the final 26-brand client set, deliberately shuffled so
// no category clusters (K-beauty, tech, prestige) sit next to each other.
// Legacy brand-NN files remain in /public/images/logos for reuse.
// Oct 2026: brands from CA Agency's own Work-page campaigns, using the white
// watermark logos (darkened in the strip), interleaved with the client set.
const workBrandMarks = [
  'Sephora', 'Chanel Beauty', 'Valentino Beauty', 'Rare Beauty', 'Fenty Beauty', 'Kylie Cosmetics', 'Patrick Ta',
  'Gisou', 'Torriden', 'Biodance', 'Purito', 'Haruharu Wonder', 'Mixsoon', 'SKIN1004', 'Frankly', 'Dr. Althea',
  'Arencia', 'Revolve Beauty', 'HONOR', 'Lilyeve', 'DELERE',
]

const clientBrandLogos: Array<{ url: string; alt: string; mark?: boolean }> = [
  { url: '/images/logos/brand-16.webp', alt: 'Maybelline' },
  { url: '/images/logos/samsung.webp', alt: 'Samsung' },
  { url: '/images/logos/beauty-of-joseon.webp', alt: 'Beauty of Joseon' },
  // dior-beauty.webp = the real wordmark extracted from legacy brand-22.webp
  // to black-on-transparent — the baked-in white box showed whenever multiply
  // blending didn't apply, and its padding rendered DIOR smaller than peers.
  { url: '/images/logos/dior-beauty.webp', alt: 'Dior Beauty' },
  { url: '/images/logos/anua.webp', alt: 'Anua' },
  { url: '/images/logos/ghd.webp', alt: 'GHD' },
  { url: '/images/logos/nars.webp', alt: 'NARS' },
  { url: '/images/logos/laneige.webp', alt: 'Laneige' },
  { url: '/images/logos/armani-beauty.webp', alt: 'Armani Beauty' },
  { url: '/images/logos/yesstyle.webp', alt: 'YesStyle' },
  { url: '/images/logos/sol-de-janeiro.webp', alt: 'Sol de Janeiro' },
  { url: '/images/logos/brand-02.webp', alt: 'JBL' },
  { url: '/images/logos/charlotte-tilbury.webp', alt: 'Charlotte Tilbury' },
  { url: '/images/logos/medicube.webp', alt: 'Medicube' },
  { url: '/images/logos/estee-lauder.webp', alt: 'Estée Lauder' },
  { url: '/images/logos/stylekorean.webp', alt: 'StyleKorean' },
  { url: '/images/logos/loreal-paris.webp', alt: "L'Oréal Paris" },
  { url: '/images/logos/celimax.webp', alt: 'Celimax' },
  { url: '/images/logos/benefit-cosmetics.webp', alt: 'Benefit Cosmetics' },
  { url: '/images/logos/brand-01.webp', alt: 'Dyson' },
  { url: '/images/logos/the-ordinary.webp', alt: 'The Ordinary' },
  { url: '/images/logos/lancome.webp', alt: 'Lancôme' },
  { url: '/images/logos/round-lab.webp', alt: 'Round Lab' },
  { url: '/images/logos/mac-cosmetics.webp', alt: 'MAC Cosmetics' },
  { url: '/images/logos/saie.webp', alt: 'Saie' },
  { url: '/images/logos/fenty-skin.webp', alt: 'Fenty Skin' },
]

export const brandLogos: Array<{ url: string; alt: string; mark?: boolean }> = clientBrandLogos.flatMap((logo, i) => {
  const work = workBrandMarks[i]
  return work ? [logo, { url: brandWatermarks[work].src, alt: work, mark: true }] : [logo]
})
