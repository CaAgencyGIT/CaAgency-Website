import type { TranslatedPost, TranslatedPostLabels } from '@/lib/blog-translations/types'
import { post as deHowToChooseInfluencerMarketingAgency } from '@/lib/blog-translations/de/how-to-choose-influencer-marketing-agency'
import { post as deInfluencerMarketingCost2026 } from '@/lib/blog-translations/de/influencer-marketing-cost-2026'
import { post as deTiktokShopBeautyBrands } from '@/lib/blog-translations/de/tiktok-shop-beauty-brands'
import { post as deInfluencerMarketingForHealthWellness } from '@/lib/blog-translations/de/influencer-marketing-for-health-wellness'
import { post as deInfluencerMarketingForFashionBrands } from '@/lib/blog-translations/de/influencer-marketing-for-fashion-brands'
import { post as deInfluencerMarketingForBeautyBrands } from '@/lib/blog-translations/de/influencer-marketing-for-beauty-brands'
import { post as deKBeautyInfluencerMarketingGuide } from '@/lib/blog-translations/de/k-beauty-influencer-marketing-guide'
import { post as deInfluencerMarketingGuide } from '@/lib/blog-translations/de/influencer-marketing-guide'
import { post as deInfluencerWhitelistingSparkAdsGuide } from '@/lib/blog-translations/de/influencer-whitelisting-spark-ads-guide'
import { post as deTiktokInfluencerMarketingGuide } from '@/lib/blog-translations/de/tiktok-influencer-marketing-guide'
import { post as deHowToMeasureInfluencerMarketingRoi } from '@/lib/blog-translations/de/how-to-measure-influencer-marketing-roi'
import { post as deYoutubeInfluencerMarketingBeautyBrands } from '@/lib/blog-translations/de/youtube-influencer-marketing-beauty-brands'
import { post as deMicroVsMacroInfluencers } from '@/lib/blog-translations/de/micro-vs-macro-influencers'
import { post as frHowToChooseInfluencerMarketingAgency } from '@/lib/blog-translations/fr/how-to-choose-influencer-marketing-agency'
import { post as frInfluencerMarketingCost2026 } from '@/lib/blog-translations/fr/influencer-marketing-cost-2026'
import { post as frTiktokShopBeautyBrands } from '@/lib/blog-translations/fr/tiktok-shop-beauty-brands'
import { post as frInfluencerMarketingForHealthWellness } from '@/lib/blog-translations/fr/influencer-marketing-for-health-wellness'
import { post as frInfluencerMarketingForFashionBrands } from '@/lib/blog-translations/fr/influencer-marketing-for-fashion-brands'
import { post as frInfluencerMarketingForBeautyBrands } from '@/lib/blog-translations/fr/influencer-marketing-for-beauty-brands'
import { post as frKBeautyInfluencerMarketingGuide } from '@/lib/blog-translations/fr/k-beauty-influencer-marketing-guide'
import { post as frInfluencerMarketingGuide } from '@/lib/blog-translations/fr/influencer-marketing-guide'
import { post as frInfluencerWhitelistingSparkAdsGuide } from '@/lib/blog-translations/fr/influencer-whitelisting-spark-ads-guide'
import { post as frTiktokInfluencerMarketingGuide } from '@/lib/blog-translations/fr/tiktok-influencer-marketing-guide'
import { post as frHowToMeasureInfluencerMarketingRoi } from '@/lib/blog-translations/fr/how-to-measure-influencer-marketing-roi'
import { post as frYoutubeInfluencerMarketingBeautyBrands } from '@/lib/blog-translations/fr/youtube-influencer-marketing-beauty-brands'
import { post as frMicroVsMacroInfluencers } from '@/lib/blog-translations/fr/micro-vs-macro-influencers'

// Blog guides that also exist in German or French, served at
// /<locale>/blog/<slug> with the English post's slug. The copy lives in code
// (like the translated market pages), not in the Post table, and the pages
// never read the database: the deploy reuses the CI build and rejects it when
// page generation against production data changes the build output, which a
// page that exists only when a Post row exists would do. Keep LOCALIZED_BLOG_PATHS in
// lib/routing-helpers.ts in step (tests/unit/blog-translations.test.ts checks).

export const translatedPosts: Record<string, { labels: TranslatedPostLabels; posts: TranslatedPost[] }> = {
  de: {
    labels: {
      dateLocale: 'de-DE',
      by: 'Von',
      minRead: 'Min. Lesezeit',
      toc: 'In diesem Artikel',
      writtenBy: 'Verfasst von',
      authorBio:
        'Das Redaktionsteam von CA Agency schöpft aus über 3.000 Influencer-Kampagnen für globale Marken auf Instagram, TikTok und YouTube, mit besonderem Schwerpunkt auf Beauty und koreanischer Hautpflege (K-Beauty).',
      workWithUs: 'Arbeiten Sie mit uns',
      ctaTitle: 'Bereit für die Zusammenarbeit?',
      ctaText: 'Lassen Sie uns eine Influencer-Kampagne entwickeln, die Ihrer Marke echte Ergebnisse bringt.',
      ctaButton: 'Jetzt starten',
      readInLanguage: 'Diesen Ratgeber auf Deutsch lesen',
      guidesEyebrow: 'Ratgeber',
      guidesTitle: 'Ratgeber zum Influencer Marketing',
      indexTitle: 'Influencer Marketing Blog: Ratgeber | CA Agency',
      indexDescription:
        'Ratgeber zum Influencer Marketing auf Deutsch: Agenturwahl, Kosten, Plattformen, Messung und Branchen, aus der Erfahrung von über 3.000 Kampagnen.',
      indexHeading: 'Influencer Marketing Blog',
      indexIntro: 'Ratgeber, Strategien und Praxiswissen von CA Agency, aus der Erfahrung von über 3.000 Influencer-Kampagnen.',
      allGuides: 'Alle Ratgeber',
      englishBlog: 'Weitere Artikel im englischen Blog',
      indexInLanguage: 'Ratgeber auf Deutsch',
    },
    posts: [
      deHowToChooseInfluencerMarketingAgency,
      deInfluencerMarketingCost2026,
      deTiktokShopBeautyBrands,
      deInfluencerMarketingForHealthWellness,
      deInfluencerMarketingForFashionBrands,
      deInfluencerMarketingForBeautyBrands,
      deKBeautyInfluencerMarketingGuide,
      deInfluencerMarketingGuide,
      deInfluencerWhitelistingSparkAdsGuide,
      deTiktokInfluencerMarketingGuide,
      deHowToMeasureInfluencerMarketingRoi,
      deYoutubeInfluencerMarketingBeautyBrands,
      deMicroVsMacroInfluencers,
    ],
  },
  fr: {
    labels: {
      dateLocale: 'fr-FR',
      by: 'Par',
      minRead: 'min de lecture',
      toc: 'Dans cet article',
      writtenBy: 'Rédigé par',
      authorBio:
        "L'équipe éditoriale de CA Agency s'appuie sur plus de 3 000 campagnes d'influence menées pour des marques internationales sur Instagram, TikTok et YouTube, avec une forte spécialisation en beauté et en soins coréens (K-beauty).",
      workWithUs: 'Travaillez avec nous',
      ctaTitle: 'Prêt à travailler avec nous ?',
      ctaText: "Créons ensemble une campagne d'influence qui apporte de vrais résultats à votre marque.",
      ctaButton: 'Commencer',
      readInLanguage: 'Lire ce guide en français',
      guidesEyebrow: 'Guides',
      guidesTitle: "Guides sur le marketing d'influence",
      indexTitle: "Blog marketing d'influence : nos guides | CA Agency",
      indexDescription:
        "Des guides sur le marketing d'influence en français : choix d'agence, coûts, plateformes, mesure et secteurs, tirés de plus de 3 000 campagnes.",
      indexHeading: "Blog marketing d'influence",
      indexIntro: "Guides, stratégies et retours d'expérience de CA Agency, tirés de plus de 3 000 campagnes d'influence.",
      allGuides: 'Tous les guides',
      englishBlog: "Plus d'articles sur le blog en anglais",
      indexInLanguage: 'Guides en français',
    },
    posts: [
      frHowToChooseInfluencerMarketingAgency,
      frInfluencerMarketingCost2026,
      frTiktokShopBeautyBrands,
      frInfluencerMarketingForHealthWellness,
      frInfluencerMarketingForFashionBrands,
      frInfluencerMarketingForBeautyBrands,
      frKBeautyInfluencerMarketingGuide,
      frInfluencerMarketingGuide,
      frInfluencerWhitelistingSparkAdsGuide,
      frTiktokInfluencerMarketingGuide,
      frHowToMeasureInfluencerMarketingRoi,
      frYoutubeInfluencerMarketingBeautyBrands,
      frMicroVsMacroInfluencers,
    ],
  },
}

export function getTranslatedPost(locale: string, slug: string): TranslatedPost | undefined {
  return translatedPosts[locale]?.posts.find((post) => post.slug === slug)
}

/** Locales that have a translation of this English post. */
export function translationLocales(slug: string): string[] {
  return Object.keys(translatedPosts).filter((locale) => getTranslatedPost(locale, slug))
}

/** hreflang map for a post: English (also x-default) plus each translation. */
export function postLanguages(slug: string, baseUrl = 'https://caagency.com'): Record<string, string> {
  const english = `${baseUrl}/blog/${slug}`
  return {
    'x-default': english,
    en: english,
    ...Object.fromEntries(translationLocales(slug).map((locale) => [locale, `${baseUrl}/${locale}/blog/${slug}`])),
  }
}

/** hreflang map for the blog index: English (also x-default) plus each language with translated guides. */
export function blogIndexLanguages(baseUrl = 'https://caagency.com'): Record<string, string> {
  return {
    'x-default': `${baseUrl}/blog`,
    en: `${baseUrl}/blog`,
    ...Object.fromEntries(Object.keys(translatedPosts).map((locale) => [locale, `${baseUrl}/${locale}/blog`])),
  }
}

/** Guide cards in a language: for its market pages (first `limit`) and the "more guides" list on a post. */
export function translatedGuides(locale: string, limit = Infinity) {
  return (translatedPosts[locale]?.posts ?? []).slice(0, limit).map((post) => ({
    href: `/${locale}/blog/${post.slug}`,
    title: post.seoTitle ?? post.title,
    desc: post.excerpt,
  }))
}
