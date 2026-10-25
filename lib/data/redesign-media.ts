import type { HeroFilmRowItem } from '@/components/blocks/HeroFilmRow'
import { posterFor } from '@/lib/data/videos'
import { caseStudyForVideo, getCaseStudy, type CaseStudy } from '@/lib/data/case-studies'

// October 2026 redesign: creator films from the approved handoff package
// (media-index.csv). Each key maps to /videos/redesign/rd-<key>-web-v1.mp4 and its
// poster via posterFor(). `sourceUrl` is the public post the clip was cut
// from; it is provenance, not proof of an agency campaign, so only the four
// existing case studies are linked as such (see workFilms).

export interface RedesignFilm {
  creator: string
  brand: string
  talentSlug: string
  sourceUrl: string
}

export const films = {
  'albina-sephora': { creator: 'Albina Mavriqi', brand: 'Sephora', talentSlug: 'albina-mavriqi', sourceUrl: 'https://www.instagram.com/caagency/reel/DV_xElyDlJ_/' },
  'anton-skin1004': { creator: 'Anton Drozhzhin', brand: 'SKIN1004', talentSlug: 'anton-drozhzhin', sourceUrl: 'https://www.instagram.com/closmain/reel/Deq_xvhoXVv/' },
  'georgii-anua': { creator: 'Georgii Galaev', brand: 'Anua', talentSlug: 'georgii-galaev', sourceUrl: 'https://www.instagram.com/pomogisebe/reel/DZ6kGsWvJLL/' },
  'dariia-ysl': { creator: 'Dariia Bordun', brand: 'YSL Beauty', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DG84KkDTs5e/' },
  'melani-skin1004': { creator: 'Melani Seiffert', brand: 'SKIN1004', talentSlug: 'melani-seiffert', sourceUrl: 'https://www.instagram.com/caagency/reel/DH1Z02-znV2/' },
  'khutjo-anua-original': { creator: 'Khutjo Matsoma', brand: 'Anua', talentSlug: 'khutjo-matsoma', sourceUrl: 'https://www.instagram.com/khutjomatsoma/reel/DcLrpHxyAs-/' },
  'beatrix-gisou': { creator: 'Beatrix Ramosaj', brand: 'Gisou', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/caagency/reel/DPjoalME2iK/' },
  'albina-medicube': { creator: 'Albina Mavriqi', brand: 'Medicube', talentSlug: 'albina-mavriqi', sourceUrl: 'https://www.instagram.com/caagency/reel/DalCaAoOu7W/' },
  'dariia-armani': { creator: 'Idareen', brand: 'Armani Beauty', talentSlug: '', sourceUrl: 'https://www.instagram.com/caagency/reel/DMppGW5t7KH/' },
  'melly-fenty': { creator: 'Melly Sanchez', brand: 'Fenty Beauty', talentSlug: 'melly-sanchez', sourceUrl: 'https://www.instagram.com/caagency/reel/DX2Bva6sJk6/' },
  'jay-mixsoon': { creator: 'Jay Sadiq', brand: 'Mixsoon', talentSlug: 'jay-sadiq', sourceUrl: 'https://www.instagram.com/jaysadiq_/reel/Det4-LQuq4A/' },
  'aiym-purito': { creator: 'Aiym Kablan', brand: 'Purito', talentSlug: 'aiym-kablan', sourceUrl: 'https://www.instagram.com/caagency/reel/DaXh8wcuzYq/' },
  'beatrix-patrickta': { creator: 'Beatrix Ramosaj', brand: 'Patrick Ta', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/caagency/reel/DS23DtTk6Ej/' },
  'beatrix-abib': { creator: 'Beatrix Ramosaj', brand: 'Abib', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/reel/DavGLzZRB3s/' },
  'melly-rare': { creator: 'Melly Sanchez', brand: 'Rare Beauty', talentSlug: 'melly-sanchez', sourceUrl: 'https://www.instagram.com/caagency/reel/DOA8QA7DEDK/' },
  'dariia-glowrecipe': { creator: 'Dariia Bordun', brand: 'Glow Recipe', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DQChEB9DOLI/' },
  'rebecca-saie': { creator: 'Rebecca Ghaderi', brand: 'Saie', talentSlug: 'rebecca-ghaderi', sourceUrl: 'https://www.instagram.com/caagency/reel/DMKydwyt_Tq/' },
  'melly-fenty-original': { creator: 'Melly Sanchez', brand: 'Fenty Beauty', talentSlug: 'melly-sanchez', sourceUrl: 'https://www.instagram.com/thefashionfreakk/reel/DcoemiVBR9D/' },
  'dariia-dior-original': { creator: 'Dariia Bordun', brand: 'Dior Beauty', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/_idareen_/reel/DdrVf3YiJkY/' },
  'melani-dalba': { creator: 'Melani Seiffert', brand: 'd’Alba', talentSlug: 'melani-seiffert', sourceUrl: 'https://www.instagram.com/caagency/reel/DazQf3hMzup/' },
  'saranda-dalba': { creator: 'Saranda Mavriqi', brand: 'd’Alba', talentSlug: 'saranda-mavriqi', sourceUrl: 'https://www.instagram.com/sarandamavriqi/reel/DeM0xHcNSmi/' },
  'albulena-purito': { creator: 'Albulena Mavriqi', brand: 'Purito', talentSlug: 'albulena-mavriqi', sourceUrl: 'https://www.instagram.com/albulena.mavriqi/reel/Dej0BdPI8vw/' },
  'loresa-celimax': { creator: 'Loresa Konushevci', brand: 'Celimax', talentSlug: 'loresa-konushevci', sourceUrl: 'https://www.instagram.com/loresakonushevci/reel/Dej1W1Ptph_/' },
  'georgii-purito': { creator: 'Georgii Galaev', brand: 'Purito', talentSlug: 'georgii-galaev', sourceUrl: 'https://www.instagram.com/pomogisebe/reel/Ddn7Uuav8KE/' },
  'ardita-purito': { creator: 'Ardita Gashi', brand: 'Purito', talentSlug: 'ardita-gashi', sourceUrl: 'https://www.instagram.com/arditagasshi/reel/DeB3Cj_qVQh/' },
  'aurela-arencia': { creator: 'Aurela Elshani', brand: 'Arencia', talentSlug: 'aurela-elshani', sourceUrl: 'https://www.instagram.com/glowbyaure/reel/Del7abhoQ7N/' },
  'sadaf-axisy': { creator: 'Sadaf Torabi', brand: 'AXIS-Y', talentSlug: '', sourceUrl: 'https://www.instagram.com/reel/DNL9EQLyTNF/' },
  'dariia-urbandecay': { creator: 'Dariia Bordun', brand: 'Urban Decay', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/reels/DOeBvQsAlA6/' },
  'dariia-nyx': { creator: 'Dariia Bordun', brand: 'NYX Cosmetics', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/reels/DJCZqcLi6pl/' },
  'dariia-valentino': { creator: 'Dariia Bordun', brand: 'Valentino Beauty', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/reels/DF8PX-UC0ci/' },
  'dariia-laneige': { creator: 'Dariia Bordun', brand: 'Laneige', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DP9ZUQ7Ejby/' },
  'dariia-kerastase': { creator: 'Dariia Bordun', brand: 'Kérastase', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DG82uP4TUaS/' },
  'albina-torriden': { creator: 'Albina Mavriqi', brand: 'Torriden', talentSlug: 'albina-mavriqi', sourceUrl: 'https://www.instagram.com/p/Dcodk7PtSn6/' },
  'saranda-boj': { creator: 'Saranda Mavriqi', brand: 'Beauty of Joseon', talentSlug: 'saranda-mavriqi', sourceUrl: 'https://www.tiktok.com/@saranda/video/7689430094741277960' },
  'khutjo-frankly': { creator: 'Khutjo Matsoma', brand: 'Frankly', talentSlug: 'khutjo-matsoma', sourceUrl: 'https://www.tiktok.com/@khutjo.matsoma/video/7470818260414450950' },
  'rebecca-haruharu': { creator: 'Rebecca Ghaderi', brand: 'Haruharu Wonder', talentSlug: 'rebecca-ghaderi', sourceUrl: 'https://www.instagram.com/reel/DYTrym4uHS9/' },
  'georgii-yesstyle': { creator: 'Georgii Galaev', brand: 'YesStyle', talentSlug: 'georgii-galaev', sourceUrl: 'https://www.instagram.com/reel/DPOHcK4jhXZ/' },
  'melani-medicube': { creator: 'Melani Seiffert', brand: 'Medicube', talentSlug: 'melani-seiffert', sourceUrl: 'https://www.tiktok.com/@melaniseiffert/video/7593808338719132950' },
  'beatrix-biodance': { creator: 'Beatrix Ramosaj', brand: 'Biodance', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.tiktok.com/@therealbeatrixramosaj/video/7692475926575074573' },
  'melani-revolve': { creator: 'Melani Seiffert', brand: 'Revolve Beauty', talentSlug: 'melani-seiffert', sourceUrl: 'https://www.instagram.com/reel/DT_g5aok7Cw/' },
  'anton-azelaic': { creator: 'Anton Drozhzhin', brand: 'SKIN1004', talentSlug: 'anton-drozhzhin', sourceUrl: 'https://www.instagram.com/reel/DcOdL6xiQew/' },
  'dariia-chanel': { creator: 'Dariia Bordun', brand: 'Chanel Beauty', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/p/DGqp2U9iBhI/' },
  haircare: { creator: 'Albina Mavriqi', brand: 'Lilyeve', talentSlug: 'albina-mavriqi', sourceUrl: 'https://www.instagram.com/albina/reel/DeuTEqwNBLQ/' },
  'beatrix-medicube': { creator: 'Beatrix Ramosaj', brand: 'Medicube', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/beatrixramosaj/reel/Dd_OTh-xXg2/' },
  skincare: { creator: 'Khutjo Matsoma', brand: 'Dr. Althea', talentSlug: 'khutjo-matsoma', sourceUrl: 'https://www.instagram.com/khutjomatsoma/reel/DeugBhkuYo-/' },
} satisfies Record<string, RedesignFilm>

export type FilmKey = keyof typeof films

// Films re-cut after their v2 encode get a new version so cached copies refresh.
const filmVersion: Partial<Record<FilmKey, number>> = { 'albina-torriden': 3, 'khutjo-frankly': 3, 'anton-azelaic': 3 }
export const filmSrc = (key: FilmKey) => `/videos/redesign/rd-${key}-web-v${filmVersion[key] ?? 2}.mp4`

export const filmLabel = (key: FilmKey) => `${films[key].creator} — ${films[key].brand}`

// Homepage "Meet the Talents", in the client's order.
// Homepage "Meet the Talents" row, in display order (all locales).
export const homeTalentSlugs = [
  'albina-mavriqi',
  'melani-seiffert',
  'dariia-bordun',
  'aiym-kablan',
  'anton-drozhzhin',
  'khutjo-matsoma',
]

export const priorityTalentSlugs = [
  'albina-mavriqi',
  'dariia-bordun',
  'anton-drozhzhin',
  'melani-seiffert',
  'beatrix-ramosaj',
  'khutjo-matsoma',
]

// Films whose brand already has a case study link to it from the Work grid,
// like the current tiles. Other brands get no case study until one is
// written and approved (no invented briefs or results).
export const filmCaseStudies: Partial<Record<FilmKey, string>> = {
  'albina-sephora': 'sephora-campaign',
  'dariia-ysl': 'ysl-beauty-campaign',
  'beatrix-gisou': 'gisou-campaign',
  'melly-fenty': 'fenty-beauty-campaign',
  'melly-fenty-original': 'fenty-beauty-campaign',
  'jay-mixsoon': 'mixsoon-skincare',
  'georgii-anua': 'anua-campaign',
  'khutjo-anua-original': 'anua-campaign',
  'aiym-purito': 'purito-campaign',
  'albulena-purito': 'purito-campaign',
  'georgii-purito': 'purito-campaign',
  'ardita-purito': 'purito-campaign',
  'dariia-armani': 'armani-beauty-campaign',
  'dariia-valentino': 'valentino-beauty-campaign',
  'dariia-chanel': 'chanel-beauty-campaign',
  'albina-torriden': 'torriden-campaign',
  'melly-rare': 'rare-beauty-campaign',
  'rebecca-saie': 'saie-campaign',
  'beatrix-patrickta': 'patrick-ta-campaign',
  'beatrix-abib': 'abib-campaign',
  'beatrix-biodance': 'biodance-campaign',
  'melani-medicube': 'medicube-campaign',
  'saranda-boj': 'beauty-of-joseon-campaign',
  'khutjo-frankly': 'frankly-campaign',
  'anton-azelaic': 'skin1004-campaign',
  'melani-revolve': 'revolve-beauty-campaign',
  'rebecca-haruharu': 'haruharu-wonder-campaign',
  'georgii-yesstyle': 'yesstyle-collaboration',
  'loresa-celimax': 'celimax-campaign',
  'aurela-arencia': 'arencia-campaign',
  'sadaf-axisy': 'axis-y-campaign',
  haircare: 'lilyeve-campaign',
  skincare: 'dr-althea-campaign',
}

export const workFilms: FilmKey[] = [
  'anton-azelaic',
  'melani-revolve',
  'rebecca-haruharu', 'georgii-yesstyle',
  'khutjo-frankly',
  'aiym-purito',
  'albina-torriden',
  'beatrix-gisou',
  'georgii-anua', 'dariia-armani',
  'jay-mixsoon',
  'beatrix-abib', 'melly-rare',
  'rebecca-saie', 'melly-fenty-original', 'dariia-valentino',
  'melani-medicube', 'saranda-boj',
  'loresa-celimax',
  'sadaf-axisy',
  'dariia-chanel', 'haircare',
  'beatrix-biodance', 'skincare',
]



export const REDESIGN_MEDIA_PUBLISHED = '2026-10-22'

// VideoObject list for the films a page shows, so structured data matches
// what visitors can actually watch.
export function filmVideoSchema(keys: FilmKey[], publisher: object) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: keys.map((key, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'VideoObject',
        name: filmLabel(key),
        description: filmDescription(key),
        contentUrl: `https://caagency.com${filmSrc(key)}`,
        thumbnailUrl: `https://caagency.com${posterFor(filmSrc(key))}`,
        uploadDate: REDESIGN_MEDIA_PUBLISHED,
        publisher,
      },
    })),
  }
}


export const filmDescription = (key: FilmKey) => `${films[key].creator} creator video featuring ${films[key].brand}`

// Hero collage (Oct 2026 redesign feedback): a static full-collage replaces
// the old slideshow so every image shows at once instead of cycling. Color
// graded and sharpened as a set — scripts/grade-hero-images.py — to read as
// one consistent shoot instead of seven mismatched sources. Dimensions are
// the graded files' real intrinsic size, for correct aspect ratio with no
// layout shift.
// Hero spotlight (alternative to the collage, same slot): one full-bleed
// Albina portrait with two smaller talent chips bottom-right.
export const heroSpotlight = {
  mainImage: { src: '/images/hero/graded/albina-medicube.webp', alt: 'Albina Mavriqi for Medicube, CA Agency campaign' },
  chips: [
    { src: '/images/hero/graded/dariia-ysl.webp', alt: 'Dariia Bordun for YSL Beauty, CA Agency campaign', width: 720, height: 1280 },
    { src: '/images/hero/graded/khutjo-medicube.webp', alt: 'Khutjo Matsoma for Medicube, CA Agency campaign', width: 640, height: 1136 },
  ],
}

// Hero trio (2nd alternative, same slot as heroSpotlight): three named
// portraits, order per client request — Dariia left, Albina middle
// (featured/taller), Anton right (his own photo, not a placeholder).
export const heroTrioCards = [
  { src: filmSrc('dariia-ysl'), poster: '/images/hero/graded/dariia-ysl.webp', alt: 'Dariia Bordun, CA Agency talent', name: 'Dariia' },
  { src: filmSrc('albina-medicube'), poster: '/images/hero/graded/albina-medicube.webp', alt: 'Albina Mavriqi, CA Agency talent', name: 'Albina', featured: true },
  { src: filmSrc('anton-skin1004'), poster: '/images/hero/graded/anton-skin1004.webp', alt: 'Anton Drozhzhin, CA Agency talent', name: 'Anton' },
]

export const heroCollageImages = [
  { src: '/images/hero/graded/albina-medicube.webp', alt: 'Albina for Medicube, CA Agency campaign', width: 840, height: 1491 },
  { src: '/images/hero/graded/hero-slide-1-916.webp', alt: 'CA Agency talent at the Too Faced launch event', width: 1440, height: 2700 },
  { src: '/images/hero/graded/dariia-ysl.webp', alt: 'Dariia for YSL Beauty, CA Agency campaign', width: 720, height: 1280 },
  { src: '/images/hero/graded/khutjo-medicube.webp', alt: 'Khutjo for Medicube, CA Agency campaign', width: 640, height: 1136 },
  { src: '/images/hero/graded/melly-huda-beauty-916.webp', alt: 'Melly for Huda Beauty, CA Agency campaign', width: 810, height: 1440 },
  { src: '/images/hero/graded/rhode-grid-vertical.webp', alt: 'Rhode campaign content grid, CA Agency', width: 720, height: 1347 },
  { src: '/images/hero/graded/melani-skin1004.webp', alt: 'Melani for SKIN1004, CA Agency campaign', width: 640, height: 1136 },
]

// Work page grid order (Oct 2026): colour/lighting gradient measured from
// each video (warm neutrals -> golden -> pink/red -> cool), Albina x Sephora
// first, no creator twice within any 4 tiles.
export const workGridOrder: Array<{ type: 'video'; src: string } | { type: 'film'; key: FilmKey }> = [
  { type: 'video', src: '/videos/work/albina-sephora-web-v1.mp4' },
  { type: 'film', key: 'beatrix-biodance' },
  { type: 'film', key: 'dariia-chanel' },
  { type: 'film', key: 'melani-medicube' },
  { type: 'film', key: 'aiym-purito' },
  { type: 'film', key: 'anton-azelaic' },
  { type: 'film', key: 'khutjo-frankly' },
  { type: 'film', key: 'melly-fenty-original' },
  { type: 'film', key: 'saranda-boj' },
  { type: 'film', key: 'beatrix-gisou' },
  { type: 'film', key: 'georgii-yesstyle' },
  { type: 'film', key: 'sadaf-axisy' },
  { type: 'film', key: 'loresa-celimax' },
  { type: 'film', key: 'melani-revolve' },
  { type: 'film', key: 'dariia-valentino' },
  { type: 'film', key: 'melly-rare' },
  { type: 'video', src: '/videos/work/honor-web-v1.mp4' },
  { type: 'film', key: 'rebecca-saie' },
  { type: 'video', src: '/videos/work/kylie-cosmetics-web-v1.mp4' },
  { type: 'film', key: 'albina-torriden' },
  { type: 'film', key: 'dariia-armani' },
  { type: 'film', key: 'beatrix-abib' },
  { type: 'film', key: 'skincare' },
  { type: 'film', key: 'jay-mixsoon' },
  { type: 'film', key: 'haircare' },
  { type: 'film', key: 'rebecca-haruharu' },
  { type: 'film', key: 'georgii-anua' },
]

// Homepage hero film row (Oct 2026 client feedback): exact order and
// photos the client specified, graded/sharpened as a set for consistency.
export const heroFilmRowItems: HeroFilmRowItem[] = [
  {
    stack: [
      { src: '/images/hero/collage/closeup.webp', alt: 'Skincare close-up, CA Agency campaign' },
      { src: '/images/hero/collage/medicube.webp', alt: 'Khutjo at the Medicube event, CA Agency campaign' },
    ],
  },
  { src: '/images/hero/albina-medicube.webp', alt: 'Albina Mavriqi for Medicube, CA Agency talent', position: '50% 28%', featured: true },
  { src: '/images/hero/collage/toofaced.webp', alt: 'CA Agency talent at the Too Faced launch event' },
  { src: '/images/hero/collage/huda.webp', alt: 'Melly at the Huda Beauty event, CA Agency campaign', position: '62% 50%' },
  { src: '/images/hero/collage/rhode.webp', alt: 'Rhode campaign content grid, CA Agency' },
]

// White brand logos overlaid on the redesign films (the older work videos
// have theirs burned in). widthPct balances wide wordmarks against tall ones.
export const brandWatermarks: Record<string, { src: string; width: number; height: number; widthPct: number }> = {
  'Medicube': { src: '/images/logos/watermark/medicube-v3.png', width: 648, height: 239, widthPct: 48 },
  'Anua': { src: '/images/logos/watermark/anua-v2.png', width: 647, height: 162, widthPct: 40 },
  'Dr. Althea': { src: '/images/logos/watermark/dr-althea-v2.png', width: 646, height: 191, widthPct: 44 },
  'Valentino Beauty': { src: '/images/logos/watermark/valentino-beauty-v3.png', width: 640, height: 470, widthPct: 36 },
  'Mixsoon': { src: '/images/logos/watermark/mixsoon-v2.png', width: 646, height: 144, widthPct: 51 },
  'Rare Beauty': { src: '/images/logos/watermark/rare-beauty-v3.png', width: 312, height: 56, widthPct: 54 },
  'Celimax': { src: '/images/logos/watermark/celimax-v3.png', width: 404, height: 81, widthPct: 50 },
  'd’Alba': { src: '/images/logos/watermark/dalba-v2.png', width: 648, height: 251, widthPct: 39 },
  'Armani Beauty': { src: '/images/logos/watermark/armani-beauty-v3.png', width: 640, height: 640, widthPct: 30 },
  'Lilyeve': { src: '/images/logos/watermark/lilyeve-v2.png', width: 648, height: 212, widthPct: 42 },
  'Purito': { src: '/images/logos/watermark/purito-v2.png', width: 647, height: 304, widthPct: 42 },
  'Saie': { src: '/images/logos/watermark/saie-v2.png', width: 292, height: 108, widthPct: 39 },
  'Fenty Beauty': { src: '/images/logos/watermark/fenty-beauty-v3.png', width: 640, height: 36, widthPct: 74 },
  'Arencia': { src: '/images/logos/watermark/arencia-v2.png', width: 648, height: 151, widthPct: 50 },
  'Chanel Beauty': { src: '/images/logos/watermark/chanel-v2.png', width: 648, height: 648, widthPct: 34 },
  'Patrick Ta': { src: '/images/logos/watermark/patrick-ta-v2.png', width: 627, height: 415, widthPct: 50 },
  'Haruharu Wonder': { src: '/images/logos/watermark/haruharu-wonder-v2.png', width: 648, height: 239, widthPct: 48 },
  'Gisou': { src: '/images/logos/watermark/gisou-v2.png', width: 640, height: 290, widthPct: 42 },
  'Revolve Beauty': { src: '/images/logos/watermark/revolve-beauty-v3.png', width: 640, height: 126, widthPct: 54 },
  'DELERE': { src: '/images/logos/watermark/delere-v2.png', width: 640, height: 72, widthPct: 48 },
  'Torriden': { src: '/images/logos/watermark/torriden-v2.png', width: 640, height: 128, widthPct: 50 },
  'Beauty of Joseon': { src: '/images/logos/watermark/beauty-of-joseon-v3.png', width: 480, height: 542, widthPct: 30 },
  'Frankly': { src: '/images/logos/watermark/frankly-v2.png', width: 640, height: 173, widthPct: 46 },
  'Biodance': { src: '/images/logos/watermark/biodance-v2.png', width: 640, height: 121, widthPct: 48 },
  'Sephora': { src: '/images/logos/watermark/sephora-v2.png', width: 640, height: 83, widthPct: 56 },
  'Kylie Cosmetics': { src: '/images/logos/watermark/kylie-v4.png', width: 640, height: 128, widthPct: 56 },
  'HONOR': { src: '/images/logos/watermark/honor-v2.png', width: 640, height: 123, widthPct: 50 },
  'SKIN1004': { src: '/images/logos/watermark/skin1004-v2.png', width: 640, height: 51, widthPct: 58 },
  'Abib': { src: '/images/logos/watermark/abib-v1.png', width: 640, height: 200, widthPct: 42 },
  'AXIS-Y': { src: '/images/logos/watermark/axis-y-v2.png', width: 640, height: 86, widthPct: 56 },
  'YesStyle': { src: '/images/logos/watermark/yesstyle-v3.png', width: 640, height: 175, widthPct: 46 },
}

// Homepage intro showreels: every film on the site cut into 1s shots with a
// studio-strobe flash between them. The three reels share one timeline and never show the
// same creator side by side, even one shot apart.
export const introShowreels = [1, 2, 3].map((n) => ({
  src: `/videos/redesign/rd-showreel-${n}-v8.mp4`,
  poster: `/images/video-thumbs/rd-showreel-${n}-v8.jpg`,
  alt: 'CA Agency showreel of creator campaigns',
}))

// Talent cards play one of the talent's own films: the first one on the
// Work page, otherwise any film credited to them.
export function talentFilmSrc(slug: string): string | undefined {
  const keys = Object.keys(films) as FilmKey[]
  const key = [...workFilms, ...keys].find((k) => films[k].talentSlug === slug)
  return key ? filmSrc(key) : undefined
}

// Case studies that still have a tile on the Work page, in grid order. Older
// studies keep their pages but are no longer listed or linked.
export function currentCaseStudies(): CaseStudy[] {
  const studies = workGridOrder.map((entry) =>
    entry.type === 'film' ? getCaseStudy(filmCaseStudies[entry.key] ?? '') : caseStudyForVideo(entry.src),
  )
  return studies.filter((cs, i): cs is CaseStudy => !!cs && studies.indexOf(cs) === i)
}
