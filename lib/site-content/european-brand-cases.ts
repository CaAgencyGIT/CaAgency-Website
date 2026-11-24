import { caseStudies } from '@/lib/data/case-studies'
import type { LocationPageContent } from '@/lib/site-content/location-pages'

// "European brands we have worked with" on the Europe, Germany, France and UK
// market pages, in every language. Built from the case-study data so video,
// brand, creator and link always match the case study it points to.

/** Case studies for European beauty houses (France, Italy, the UK, the Netherlands). Six, two rows: each one autoplays. */
export const EUROPEAN_CASE_SLUGS = [
  'chanel-beauty-campaign',
  'ysl-beauty-campaign',
  'sephora-campaign',
  'kiko-milano-campaign',
  'gisou-campaign',
  'elemis-campaign',
] as const

/** Market pages that show the block. */
export const EUROPEAN_CASE_PATHS = ['/influencer-marketing-europe', '/influencer-marketing-germany', '/influencer-marketing-france', '/influencer-marketing-uk'] as const

const copy: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'European Brands We Have Worked With',
    subtitle: 'Creator campaigns for beauty houses from France, Italy, the UK and the Netherlands, each with its full case study.',
  },
  de: {
    title: 'Europäische Marken, mit denen wir gearbeitet haben',
    subtitle: 'Creator-Kampagnen für Beauty-Marken aus Frankreich, Italien, Großbritannien und den Niederlanden, jeweils mit vollständiger Fallstudie.',
  },
  fr: {
    title: 'Marques européennes avec lesquelles nous avons travaillé',
    subtitle: 'Des campagnes créateurs pour des maisons de beauté françaises, italiennes, britanniques et néerlandaises, chacune avec son étude de cas complète.',
  },
  es: {
    title: 'Marcas europeas con las que hemos trabajado',
    subtitle: 'Campañas con creadores para casas de belleza de Francia, Italia, Reino Unido y Países Bajos, cada una con su caso de éxito completo.',
  },
  ar: {
    title: 'علامات أوروبية عملنا معها',
    subtitle: 'حملات مع صنّاع المحتوى لعلامات تجميل من فرنسا وإيطاليا والمملكة المتحدة وهولندا، ولكل منها دراسة حالة كاملة.',
  },
  ko: {
    title: '함께한 유럽 브랜드',
    subtitle: '프랑스, 이탈리아, 영국, 네덜란드 뷰티 브랜드와 진행한 크리에이터 캠페인입니다. 각 캠페인의 전체 사례를 확인할 수 있습니다.',
  },
  zh: {
    title: '合作过的欧洲品牌',
    subtitle: '为来自法国、意大利、英国和荷兰的美妆品牌开展的创作者营销活动，每个活动都附有完整案例。',
  },
}

/** The block in one language (English when the locale has no copy). */
export function europeanBrandCases(locale = 'en'): NonNullable<LocationPageContent['caseStudies']> {
  const { title, subtitle } = copy[locale] ?? copy.en
  const items = EUROPEAN_CASE_SLUGS.map((slug) => {
    const study = caseStudies.find((s) => s.slug === slug)
    if (!study) throw new Error(`european-brand-cases: unknown case study ${slug}`)
    return {
      ...(study.videoSrc ? { src: study.videoSrc } : { image: study.image?.src }),
      brand: study.brand,
      name: study.creatorName ?? study.creator ?? study.vertical,
      href: `/case-studies/${slug}`,
    }
  })
  return { title, subtitle, items }
}

/** Adds the block (as brandCaseStudies, after any curated caseStudies) to the market pages that should have it. */
export function withEuropeanBrandCases<T extends { path: string; content: LocationPageContent }>(page: T, locale: string): T {
  if (!(EUROPEAN_CASE_PATHS as readonly string[]).includes(page.path)) return page
  return { ...page, content: { ...page.content, brandCaseStudies: europeanBrandCases(locale) } }
}
