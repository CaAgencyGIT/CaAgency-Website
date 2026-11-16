import type { TranslatedPost, TranslatedPostLabels } from '@/lib/blog-translations/types'
import { post as deChooseAgency } from '@/lib/blog-translations/de/how-to-choose-influencer-marketing-agency'
import { post as deCost } from '@/lib/blog-translations/de/influencer-marketing-cost-2026'
import { post as frChooseAgency } from '@/lib/blog-translations/fr/how-to-choose-influencer-marketing-agency'
import { post as frCost } from '@/lib/blog-translations/fr/influencer-marketing-cost-2026'

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
    },
    posts: [deChooseAgency, deCost],
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
    },
    posts: [frChooseAgency, frCost],
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

/** Guide cards for a translated market page, in that page's language. */
export function translatedGuides(locale: string) {
  return (translatedPosts[locale]?.posts ?? []).map((post) => ({
    href: `/${locale}/blog/${post.slug}`,
    title: post.seoTitle ?? post.title,
    desc: post.excerpt,
  }))
}
