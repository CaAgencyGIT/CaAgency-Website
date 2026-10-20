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
