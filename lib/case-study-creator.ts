import { prisma } from '@/lib/prisma'
import { socialHandle, type CaseStudy } from '@/lib/data/case-studies'

export type CreatorTalent = NonNullable<Awaited<ReturnType<typeof getCreatorTalent>>>

/**
 * The roster talent credited on a study, matched on their Instagram or TikTok
 * handle, with the profile URL that handle belongs to. Null when the creator
 * is not on the roster or the lookup fails (the page then shows the handle only).
 */
export async function getCreatorTalent(creator?: string) {
  const handle = socialHandle(creator)
  if (!handle) return null
  try {
    const talents = await prisma.talent.findMany({
      select: { slug: true, name: true, instagramUrl: true, tiktokUrl: true },
    })
    for (const talent of talents) {
      if (socialHandle(talent.instagramUrl) === handle) return { ...talent, profileUrl: talent.instagramUrl! }
      if (socialHandle(talent.tiktokUrl) === handle) return { ...talent, profileUrl: talent.tiktokUrl! }
    }
    return null
  } catch (error) {
    console.error('[case-studies] talent lookup failed', error)
    return null
  }
}

/**
 * Related studies for a detail page: one from the same vertical, then the ones
 * that follow this study on the Work page, so every current study is linked
 * from two to four others.
 */
export function relatedCaseStudies(study: CaseStudy, listed: CaseStudy[]): CaseStudy[] {
  const position = listed.findIndex((cs) => cs.slug === study.slug)
  const following = position === -1 ? listed : [...listed.slice(position + 1), ...listed.slice(0, position)]
  const sameVertical = following.find((cs) => cs.vertical === study.vertical)
  return [...(sameVertical ? [sameVertical] : []), ...following.filter((cs) => cs !== sameVertical)].slice(0, 3)
}
