import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

/** Keep the public post shape stable while SQLite stores lists as JSON. */
function stringList(value: Prisma.JsonValue): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function createClient() {
  const url = process.env.DATABASE_URL
  if (!url?.startsWith('file:')) throw new Error('Local SQLite DATABASE_URL is required')
  return new PrismaClient({ adapter: new PrismaBetterSqlite3({ url }, { timestampFormat: 'iso8601' }) }).$extends({
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
