// Fixed labels of a service page (components/site/ServiceDetailPage.tsx).
// Translations live next to the translated services in lib/data/services-translated/.

export interface ServiceUi {
  eyebrow: string
  howWeWork: string
  included: string
  whoFor: string
  howRuns: string
  specialismTitle: string
  specialismText: string
  specialismBeauty: string
  specialismSkincare: string
  specialismKBeauty: string
  specialismUsa: string
  faqEyebrow: string
  faqTitle: string
  relatedGuides: string
  otherServices: string
  ctaTitle: string
  ctaText: string
  ctaPrimary: string
  ctaSecondary: string
}

export const englishServiceUi: ServiceUi = {
  "eyebrow": "What We Do",
  "howWeWork": "How we work",
  "included": "What's included",
  "whoFor": "Who it's for",
  "howRuns": "How an engagement runs",
  "specialismTitle": "Built for beauty & skincare",
  "specialismText": "We specialise in beauty, skincare and lifestyle brands, in the USA and around the world.",
  "specialismBeauty": "Beauty influencer marketing",
  "specialismSkincare": "Skincare influencer marketing",
  "specialismKBeauty": "K-beauty influencer marketing",
  "specialismUsa": "Influencer marketing in the USA",
  "faqEyebrow": "FAQ",
  "faqTitle": "{service} FAQs",
  "relatedGuides": "Related Guides",
  "otherServices": "Explore Our Other Services",
  "ctaTitle": "Let's Build Your Next Campaign",
  "ctaText": "Tell us about your goals and we'll shape the right mix of creators, content, and strategy around them.",
  "ctaPrimary": "Enquire For Partnerships",
  "ctaSecondary": "See Our Work"
}
