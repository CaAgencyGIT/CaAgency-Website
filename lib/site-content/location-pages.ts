export type LocationPageContent = {
  hero: {
    title: string
    subtitle: string
    primaryButtonLabel: string
    primaryButtonHref: string
    secondaryButtonLabel: string
    secondaryButtonHref: string
  }
  stats: Array<{
    value: string
    label: string
  }>
  // Optional scrolling brand ribbon. Pages that omit it render exactly as before.
  marquee?: {
    items: string[]
  }
  // Optional real-campaign strip (video and/or image). Pages that omit it render as before.
  caseStudies?: {
    title: string
    subtitle?: string
    items: Array<{
      src?: string
      image?: string
      brand: string
      name: string
      // Optional case-study page the brand name links to.
      href?: string
    }>
  }
  // Optional 'how we work' process steps. Pages that omit it render as before.
  process?: {
    title: string
    subtitle?: string
    steps: Array<{ title: string; description: string }>
  }
  // Optional long-form intro for content depth / keyword coverage.
  // Pages that omit it render exactly as before.
  intro?: {
    heading: string
    paragraphs: Array<{ text: string }>
  }
  highlights: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  talents: {
    title: string
    buttonLabel: string
    buttonHref: string
  }
  industries: {
    title: string
    items: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  // Optional FAQ — when present, the renderer also emits FAQPage JSON-LD.
  faq?: {
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  cta: {
    title: string
    description: string
    buttonLabel: string
    buttonHref: string
  }
}

// Section eyebrows rendered by LocationLandingPage.
export type LocationLabels = {
  intro: string
  caseStudies: string
  process: string
  highlights: string
  talents: string
  industries: string
  faq: string
}
