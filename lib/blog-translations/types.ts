export interface TranslatedPost {
  /** Same slug as the English post it translates. */
  slug: string
  title: string
  /** Shorter title for search results; the page heading keeps `title`. */
  seoTitle?: string
  excerpt: string
  categories: string[]
  /** Day this translation was published and last changed (YYYY-MM-DD). */
  publishedAt: string
  updatedAt: string
  /** Article HTML, already in the target language, with locale-prefixed links. */
  content: string
}

/** Fixed interface text on a translated post page. */
export interface TranslatedPostLabels {
  dateLocale: string
  by: string
  minRead: string
  toc: string
  writtenBy: string
  authorBio: string
  workWithUs: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  /** Shown on the English post: "Read this guide in German". */
  readInLanguage: string
  /** Section heading and eyebrow for the guides on translated market pages. */
  guidesEyebrow: string
  guidesTitle: string
}
