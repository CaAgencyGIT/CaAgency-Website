import { prisma } from '@/lib/prisma'
import { caseStudies } from '@/lib/data/case-studies'
import { services } from '@/lib/data/services'
import { locationPages } from '@/lib/data/locations'
import { faqKeys } from '@/lib/data/faq-schema'
import { organizationJsonLd } from '@/lib/seo/root-metadata'
import { countryNames, publicResultsLine } from '@/lib/data/case-study-results'
import { isIndexableTalentProfile, talentMetaDescription } from '@/lib/seo/talents'
import enMessages from '@/messages/en.json'

const siteUrl = organizationJsonLd.url

async function getPublishedPosts() {
  try {
    return await prisma.post.findMany({
      where: { status: 'published', publishedAt: { lte: new Date() } },
      select: { title: true, slug: true, excerpt: true },
      orderBy: { publishedAt: 'desc' },
    })
  } catch {
    return []
  }
}

export type LlmsTalent = {
  name: string
  slug: string
  bio: string | null
  instagramUrl: string | null
  tiktokUrl: string | null
  youtubeUrl: string | null
}

async function getTalents(): Promise<LlmsTalent[]> {
  try {
    const talents = await prisma.talent.findMany({
      select: { name: true, slug: true, bio: true, instagramUrl: true, tiktokUrl: true, youtubeUrl: true },
      orderBy: { order: 'asc' },
    })
    // Same rule as the sitemap: profiles without a real bio stay out.
    return talents.filter((talent) => isIndexableTalentProfile(talent.bio))
  } catch {
    return []
  }
}

function talentChannels(talent: LlmsTalent) {
  return [
    talent.instagramUrl && `Instagram ${talent.instagramUrl}`,
    talent.tiktokUrl && `TikTok ${talent.tiktokUrl}`,
    talent.youtubeUrl && `YouTube ${talent.youtubeUrl}`,
  ].filter(Boolean) as string[]
}

export function talentLinks(talents: LlmsTalent[]) {
  return talents
    .map((talent) => `- [${talent.name}](${siteUrl}/talents/${talent.slug}): ${talentMetaDescription(talent.bio ?? '')}`)
    .join('\n')
}

export function talentProfiles(talents: LlmsTalent[]) {
  return talents
    .map((talent) => {
      const channels = talentChannels(talent)
      return `### ${talent.name}

${siteUrl}/talents/${talent.slug}

- Roster: CA Agency talent roster${channels.length ? `\n- Channels: ${channels.join(', ')}` : ''}

${(talent.bio ?? '').trim()}`
    })
    .join('\n\n')
}

function overview() {
  const { address, contactPoint, areaServed, foundingDate } = organizationJsonLd
  const brands = [...new Set(caseStudies.map((study) => study.brand))]

  return `# CA Agency

> ${enMessages.home.description} Headquartered in Dubai, with a specialism in K-beauty and Korean skincare.

${enMessages.about.intro}

- Founded: ${foundingDate}
- Headquarters: ${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion}, United Arab Emirates
- Markets served: ${areaServed.map((country) => country.name).join(', ')}
- Platforms: Instagram, TikTok, YouTube
- Track record: 3,000+ creator campaigns; talent roster with 18M+ combined followers
- Brands worked with: ${brands.join(', ')}
- Languages: ${contactPoint.availableLanguage.join(', ')}
- Contact: ${contactPoint.email}, ${siteUrl}/contact`
}

function locationLinks() {
  return locationPages.map((page) => `- [${page.title}](${siteUrl}${page.path})`).join('\n')
}

function companyLinks() {
  return `- [About CA Agency](${siteUrl}/about)
- [Talent roster](${siteUrl}/talents)
- [Work and campaign videos](${siteUrl}/work)
- [Contact](${siteUrl}/contact)`
}

export async function buildLlmsTxt() {
  const [posts, talents] = await Promise.all([getPublishedPosts(), getTalents()])

  const sections = [
    overview(),
    `## Services\n\n${services
      .map((service) => `- [${service.title}](${siteUrl}/services/${service.slug}): ${service.summary}`)
      .join('\n')}`,
    `## Case studies\n\n${caseStudies
      .map((study) => `- [${study.title}](${siteUrl}/case-studies/${study.slug}): ${study.summary}`)
      .join('\n')}`,
    talents.length > 0 && `## Creators on the CA Agency talent roster\n\n${talentLinks(talents)}`,
    `## Markets\n\n${locationLinks()}`,
    posts.length > 0 &&
      `## Guides\n\n${posts
        .map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug})${post.excerpt ? `: ${post.excerpt}` : ''}`)
        .join('\n')}`,
    `## Company\n\n${companyLinks()}`,
    `## Optional\n\n- [Full details: services, case studies and FAQ](${siteUrl}/llms-full.txt)`,
  ]

  return `${sections.filter(Boolean).join('\n\n')}\n`
}

export async function buildLlmsFullTxt() {
  const [posts, talents] = await Promise.all([getPublishedPosts(), getTalents()])
  const faq = enMessages.faq.questions

  const sections = [
    overview(),
    `## About\n\n${enMessages.about.storyText}\n\n${enMessages.about.whoWeAreP1}`,
    `## Services\n\n${services
      .map(
        (service) => `### ${service.title}

${siteUrl}/services/${service.slug}

${service.tagline} ${service.summary}

${service.breakdown.join('\n\n')}

Deliverables:
${service.deliverables.map((deliverable) => `- ${deliverable}`).join('\n')}`
      )
      .join('\n\n')}`,
    `## Case studies\n\n${caseStudies
      .map(
        (study) => `### ${study.title}

${siteUrl}/case-studies/${study.slug}

- Brand: ${study.brand}
- Category: ${study.vertical}
- Platforms: ${study.platforms.join(', ')}${study.creator ? `\n- Creator: ${study.creatorName ? `${study.creatorName} (${study.creator})` : study.creator}` : ''}${study.services.length ? `\n- Services: ${study.services.join(', ')}` : ''}${study.creatorBase?.length ? `\n- Creator based in: ${countryNames(study.creatorBase, 'en')}` : ''}${study.publicResults ? `\n- Results: ${publicResultsLine(study.publicResults)}` : ''}

${study.showcase ? 'Overview' : 'Brief'}: ${study.brief}

${study.showcase ? 'In the video' : 'Approach'}: ${study.approach}

${study.showcase ? 'Highlights' : 'Outcome'}: ${study.outcome}`
      )
      .join('\n\n')}`,
    `## Frequently asked questions\n\n${faqKeys
      .map((key) => `### ${faq[key].question}\n\n${faq[key].answer}`)
      .join('\n\n')}`,
    talents.length > 0 && `## Creators on the CA Agency talent roster\n\n${talentProfiles(talents)}`,
    `## Markets\n\n${locationLinks()}`,
    posts.length > 0 &&
      `## Guides\n\n${posts.map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug})`).join('\n')}`,
    `## Company\n\n${companyLinks()}`,
  ]

  return `${sections.filter(Boolean).join('\n\n')}\n`
}
