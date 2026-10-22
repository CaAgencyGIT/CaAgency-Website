import { posterFor } from '@/lib/data/videos'

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
  'dariia-armani': { creator: 'Dariia Bordun', brand: 'Armani Beauty', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DMppGW5t7KH/' },
  'melly-fenty': { creator: 'Melly Sanchez', brand: 'Fenty Beauty', talentSlug: 'melly-sanchez', sourceUrl: 'https://www.instagram.com/caagency/reel/DX2Bva6sJk6/' },
  'jay-mixsoon': { creator: 'Jay Sadiq', brand: 'Mixsoon', talentSlug: 'jay-sadiq', sourceUrl: 'https://www.instagram.com/jaysadiq_/reel/Det4-LQuq4A/' },
  'aiym-purito': { creator: 'Aiym Kablan', brand: 'Purito', talentSlug: 'aiym-kablan', sourceUrl: 'https://www.instagram.com/caagency/reel/DaXh8wcuzYq/' },
  'beatrix-patrickta': { creator: 'Beatrix Ramosaj', brand: 'Patrick Ta', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/caagency/reel/DS23DtTk6Ej/' },
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
  'jay-tropic': { creator: 'Jay Sadiq', brand: 'Tropic', talentSlug: 'jay-sadiq', sourceUrl: 'https://www.instagram.com/caagency/reel/DMIcqV8ttkA/' },
  'ardita-purito': { creator: 'Ardita Gashi', brand: 'Purito', talentSlug: 'ardita-gashi', sourceUrl: 'https://www.instagram.com/arditagasshi/reel/DeB3Cj_qVQh/' },
  'aurela-arencia': { creator: 'Aurela Elshani', brand: 'Arencia', talentSlug: 'aurela-elshani', sourceUrl: 'https://www.instagram.com/glowbyaure/reel/Del7abhoQ7N/' },
  'qendresa-arencia': { creator: 'Qendresa Konushevci', brand: 'Arencia', talentSlug: 'qendresa-konushevci', sourceUrl: 'https://www.instagram.com/qendresak/reel/DepBxSMqT5C/' },
  'dariia-laneige': { creator: 'Dariia Bordun', brand: 'Laneige', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DP9ZUQ7Ejby/' },
  'dariia-kerastase': { creator: 'Dariia Bordun', brand: 'Kérastase', talentSlug: 'dariia-bordun', sourceUrl: 'https://www.instagram.com/caagency/reel/DG82uP4TUaS/' },
  haircare: { creator: 'Albina Mavriqi', brand: 'Lilyeve', talentSlug: 'albina-mavriqi', sourceUrl: 'https://www.instagram.com/albina/reel/DeuTEqwNBLQ/' },
  'beatrix-medicube': { creator: 'Beatrix Ramosaj', brand: 'Medicube', talentSlug: 'beatrix-ramosaj', sourceUrl: 'https://www.instagram.com/beatrixramosaj/reel/Dd_OTh-xXg2/' },
  skincare: { creator: 'Khutjo Matsoma', brand: 'Dr. Althea', talentSlug: 'khutjo-matsoma', sourceUrl: 'https://www.instagram.com/khutjomatsoma/reel/DeugBhkuYo-/' },
} satisfies Record<string, RedesignFilm>

export type FilmKey = keyof typeof films

export const filmSrc = (key: FilmKey) => `/videos/redesign/rd-${key}-web-v1.mp4`

export const filmLabel = (key: FilmKey) => `${films[key].creator} — ${films[key].brand}`

export const priorityTalentSlugs = [
  'albina-mavriqi',
  'dariia-bordun',
  'anton-drozhzhin',
  'melani-seiffert',
  'beatrix-ramosaj',
  'khutjo-matsoma',
]

// The only Work films linked to an existing case study.
export const filmCaseStudies: Partial<Record<FilmKey, string>> = {
  'albina-sephora': 'sephora-campaign',
  'dariia-ysl': 'ysl-beauty-campaign',
  'beatrix-gisou': 'gisou-campaign',
  'melly-fenty': 'fenty-beauty-campaign',
}

export const workFilms: FilmKey[] = [
  'albina-sephora', 'anton-skin1004', 'georgii-anua',
  'dariia-ysl', 'melani-skin1004', 'khutjo-anua-original',
  'beatrix-gisou', 'albina-medicube', 'dariia-armani',
  'melly-fenty', 'jay-mixsoon', 'aiym-purito',
  'beatrix-patrickta', 'melly-rare', 'dariia-glowrecipe',
  'rebecca-saie', 'melly-fenty-original', 'dariia-dior-original',
  'melani-dalba', 'saranda-dalba', 'albulena-purito',
  'loresa-celimax', 'georgii-purito', 'jay-tropic',
  'ardita-purito', 'aurela-arencia', 'qendresa-arencia',
  'dariia-laneige', 'dariia-kerastase', 'haircare',
  'beatrix-medicube', 'skincare',
]

// Illustrative creator stills for blog cards, keyed by post slug. Not a
// campaign claim; posts without an entry keep their own featured image.
export const blogCoverFilms: Partial<Record<string, FilmKey>> = {
  'instagram-reels-beauty-brands': 'melani-skin1004',
  'find-skincare-influencers-usa': 'georgii-anua',
  'tiktok-shop-beauty-brands': 'albina-sephora',
  'youtube-influencer-marketing-beauty-brands': 'khutjo-anua-original',
  'k-beauty-influencer-marketing-guide': 'dariia-ysl',
  'influencer-marketing-for-beauty-brands': 'anton-skin1004',
  'tiktok-shop-fashion-wellness-brands': 'beatrix-gisou',
  'saudi-arabia-influencer-marketing-guide': 'melly-fenty',
  'influencer-whitelisting-spark-ads-guide': 'rebecca-saie',
  'influencer-marketing-dubai-uae-cost-guide': 'albulena-purito',
  'influencer-marketing-guide': 'jay-tropic',
  'how-to-choose-influencer-marketing-agency': 'melani-dalba',
  'tiktok-influencer-marketing-guide': 'beatrix-patrickta',
  'how-to-measure-influencer-marketing-roi': 'dariia-glowrecipe',
  'how-to-run-influencer-marketing-campaign': 'loresa-celimax',
  'influencer-marketing-cost-2026': 'saranda-dalba',
  'influencer-marketing-agency-vs-in-house': 'dariia-armani',
  'how-to-spot-fake-influencers': 'skincare',
  'ftc-disclosure-guidelines-influencer-marketing': 'melly-rare',
  'influencer-marketing-for-health-wellness': 'ardita-purito',
  'influencer-marketing-for-fashion-brands': 'dariia-laneige',
  'ugc-vs-influencer-marketing': 'qendresa-arencia',
  'micro-vs-macro-influencers': 'aurela-arencia',
  'instagram-influencer-marketing-2026': 'haircare',
  'influencer-marketing-trends-2026': 'aiym-purito',
  'welcome-to-ca-agency-blog': 'albina-medicube',
}


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

// About page placement, in page order: six-film wall, story duo, closing duo.
export const aboutWallFilms: FilmKey[] = [
  'albina-medicube', 'anton-skin1004', 'melani-skin1004',
  'dariia-ysl', 'beatrix-gisou', 'khutjo-anua-original',
]
export const aboutStoryFilms: FilmKey[] = ['georgii-anua', 'rebecca-saie']
export const aboutClosingFilms: FilmKey[] = ['albina-sephora', 'skincare']
export const aboutFilms: FilmKey[] = [...aboutWallFilms, ...aboutStoryFilms, ...aboutClosingFilms]

export const filmDescription = (key: FilmKey) => `${films[key].creator} creator video featuring ${films[key].brand}`
