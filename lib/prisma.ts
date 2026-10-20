import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

/** Keep the public post shape stable while lists are stored as JSON arrays. */
function stringList(value: Prisma.JsonValue): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function createClient() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString?.startsWith('postgres')) throw new Error('PostgreSQL DATABASE_URL is required')
  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) }).$extends({
    result: {
      post: {
        categories: { needs: { categories: true }, compute: (post) => stringList(post.categories) },
        tags: { needs: { tags: true }, compute: (post) => stringList(post.tags) },
      },
    },
  })
}

const globalForPrisma = globalThis as typeof globalThis & { websitePrisma?: ReturnType<typeof createClient> }
export const prisma = globalForPrisma.websitePrisma ?? createClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.websitePrisma = prisma
