import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

const root = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(root, '.env.local') })
dotenv.config({ path: path.join(root, '.env') })

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/server-migrations' },
  datasource: { url: process.env.DATABASE_URL?.startsWith('file:') ? process.env.DATABASE_URL : 'file:./dev.db' },
})
