import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

const root = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(root, '.env.local') })
dotenv.config({ path: path.join(root, '.env') })

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/pg-migrations' },
  // `prisma generate` needs no live database; migrate commands read the real URL.
  datasource: { url: process.env.DATABASE_URL ?? 'postgresql://localhost:5432/caagency_website' },
})
