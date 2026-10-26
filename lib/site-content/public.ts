import { prisma } from '@/lib/prisma'

export async function getFeaturedTalents(limit = 6) {
  if (!process.env.DATABASE_URL) {
    return []
  }

  try {
    const talents = await prisma.talent.findMany({
      where: { category: 'instagram' },
      take: limit,
      orderBy: { order: 'asc' },
      select: {
        slug: true,
        name: true,
        imageUrl: true,
        instagramUrl: true,
        tiktokUrl: true,
        youtubeUrl: true,
      },
    })

    return talents.map((talent) => ({
      slug: talent.slug,
      name: talent.name,
      imageUrl: talent.imageUrl,
      instagramUrl: talent.instagramUrl || undefined,
      tiktokUrl: talent.tiktokUrl || undefined,
      youtubeUrl: talent.youtubeUrl || undefined,
    }))
  } catch {
    return []
  }
}

// Redesign homepage: the six talents given extra exposure, in the given order.
// Roster rows win (names, socials); a talent missing from the roster is
// dropped so former talents never reappear.
export async function getTalentsBySlugs(slugs: string[]) {
  if (!process.env.DATABASE_URL) return []
  try {
    const rows = await prisma.talent.findMany({
      where: { slug: { in: slugs } },
      select: {
        slug: true,
        name: true,
        imageUrl: true,
        instagramUrl: true,
        tiktokUrl: true,
        youtubeUrl: true,
      },
    })
    const bySlug = new Map(rows.map((row) => [row.slug, row]))
    return slugs.flatMap((slug) => {
      const talent = bySlug.get(slug)
      return talent
        ? [{
            slug: talent.slug,
            name: talent.name,
            imageUrl: talent.imageUrl,
            instagramUrl: talent.instagramUrl || undefined,
            tiktokUrl: talent.tiktokUrl || undefined,
            youtubeUrl: talent.youtubeUrl || undefined,
          }]
        : []
    })
  } catch {
    return []
  }
}

// Homepage slideshow (Oct 2026): the pinned talents first, in their order,
// then every other Instagram talent in the roster order.
export async function getHomeSlideshowTalents(pinned: string[]) {
  if (!process.env.DATABASE_URL) return []
  try {
    const rest = await prisma.talent.findMany({
      where: { category: 'instagram', slug: { notIn: pinned } },
      orderBy: { order: 'asc' },
      select: { slug: true },
    })
    return getTalentsBySlugs([...pinned, ...rest.map((row) => row.slug)])
  } catch (error) {
    console.error('Error fetching slideshow talents:', error)
    return getTalentsBySlugs(pinned)
  }
}
