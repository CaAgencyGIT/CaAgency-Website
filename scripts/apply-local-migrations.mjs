import Database from 'better-sqlite3'
import { readFile, readdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
if (!process.env.DATABASE_URL) process.loadEnvFile(path.join(root, '.env.local'))
const url = process.env.DATABASE_URL
if (!url?.startsWith('file:') || !path.isAbsolute(url.slice(5))) throw new Error('Absolute local SQLite DATABASE_URL required')
const db = new Database(url.slice(5))
try {
  db.exec('CREATE TABLE IF NOT EXISTS _server_migrations (name TEXT PRIMARY KEY, checksum TEXT NOT NULL, appliedAt TEXT NOT NULL)')
  for (const name of (await readdir(path.join(root, 'prisma/server-migrations'))).filter(name => name.endsWith('.sql')).sort()) {
    const sql = await readFile(path.join(root, 'prisma/server-migrations', name), 'utf8')
    const checksum = createHash('sha256').update(sql).digest('hex')
    const existing = db.prepare('SELECT checksum FROM _server_migrations WHERE name=?').get(name)
    if (existing) {
      if (existing.checksum !== checksum) throw new Error(`Previously applied migration changed: ${name}`)
      continue
    }
    db.transaction(() => {
      db.exec(sql)
      db.prepare('INSERT INTO _server_migrations VALUES (?,?,?)').run(name, checksum, new Date().toISOString())
    })()
    console.log('Applied', name)
  }
} finally { db.close() }
