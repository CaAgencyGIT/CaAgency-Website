export type HomePageContent = {
  hero: {
    title: string
    titleSecondLine: string
    subtitle: string
    carouselImages: Array<{
      src: string
      alt: string
    }>
  }
  stats: {
    items: Array<{
      value: number
      suffix: string
      label: string
    }>
    tagline: string
  }
  intro: {
    title: string
    paragraphs: Array<{ text: string }>
    buttonLabel: string
    buttonHref: string
    mediaItems: Array<{
      type: 'video' | 'image' | string
      src: string
      alt?: string
      poster?: string
    }>
  }
  servicesOverview: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      icon: string
    }>
    buttonLabel: string
    buttonHref: string
  }
  talents: {
    title: string
    description: string
    buttonLabel: string
    buttonHref: string
    limit: number
  }
  featuredWork: {
    title: string
    description: string
    buttonLabel: string
    buttonHref: string
  }
}

export type BusinessLicenseContent = {
  title: string
  imageUrl: string
  companyInfo: Array<{
    label: string
    value: string
    href?: string
  }>
  about: {
    title: string
    paragraphs: Array<{ text: string }>
  }
  documents: Array<{
    label: string
    href: string
  }>
}

export type FooterContent = {
  description: string
  address: string
  email: string
  registrationNo: string
  socialLinks: Array<{
    name: string
    href: string
    icon: string
  }>
}

export type LegalPageContent = {
  title: string
  lastUpdated: string
  html: string
}
