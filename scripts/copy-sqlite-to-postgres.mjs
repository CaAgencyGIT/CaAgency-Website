// One-time copy of the website SQLite database into PostgreSQL.
// Usage: DATABASE_URL=postgresql://... node scripts/copy-sqlite-to-postgres.mjs /path/to/website.sqlite
// The target tables must exist (npm run db:migrate:deploy) and be empty, unless --replace is given.
// After copying, every row and field is read back from PostgreSQL and compared with the source.
import Database from 'better-sqlite3'
import pg from 'pg'

const [source, flag] = process.argv.slice(2)
if (!source) throw new Error('Pass the SQLite file to copy')
const url = process.env.DATABASE_URL
if (!url?.startsWith('postgres')) throw new Error('PostgreSQL DATABASE_URL is required')

const tables = {
  Talent: { dates: ['createdAt', 'updatedAt'], json: [] },
  Post: { dates: ['publishedAt', 'createdAt', 'updatedAt'], json: ['categories', 'tags'] },
  SiteContent: { dates: ['createdAt', 'updatedAt'], json: ['data'] },
}

/** JSON with sorted object keys: jsonb does not keep key order, so compare canonically. */
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`
  }
  return JSON.stringify(value)
}

/** Normalize a row so SQLite text and PostgreSQL values compare equal. */
function normalize(row, { dates, json }) {
  const out = { ...row }
  for (const key of dates) out[key] = out[key] == null ? null : new Date(out[key]).toISOString()
  for (const key of json) out[key] = typeof out[key] === 'string' ? JSON.parse(out[key]) : out[key]
  return out
}

// Prisma stores DateTime as UTC in timestamp(3) without time zone; read it back as UTC too.
pg.types.setTypeParser(1114, (text) => new Date(`${text.replace(' ', 'T')}Z`))
const byId = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)

const sqlite = new Database(source, { readonly: true, fileMustExist: true })
const client = new pg.Client({ connectionString: url })
await client.connect()
const summary = {}
try {
  await client.query('BEGIN')
  for (const [table, spec] of Object.entries(tables)) {
    const existing = Number((await client.query(`SELECT count(*) FROM "${table}"`)).rows[0].count)
    if (existing > 0 && flag !== '--replace') throw new Error(`${table} already has ${existing} rows; use --replace`)
    if (flag === '--replace') await client.query(`DELETE FROM "${table}"`)
    const rows = sqlite.prepare(`SELECT * FROM "${table}" `).all().sort(byId)
    for (const row of rows) {
      const value = normalize(row, spec)
      const columns = Object.keys(value)
      const params = columns.map((key) => (spec.json.includes(key) ? JSON.stringify(value[key]) : value[key]))
      const placeholders = columns.map((key, i) => `$${i + 1}${spec.json.includes(key) ? '::jsonb' : ''}`)
      await client.query(
        `INSERT INTO "${table}" (${columns.map((c) => `"${c}"`).join(', ')}) VALUES (${placeholders.join(', ')})`,
        params,
      )
    }
    const copied = (await client.query(`SELECT * FROM "${table}"`)).rows.sort(byId).map((row) => normalize(row, spec))
    const expected = rows.map((row) => normalize(row, spec))
    if (copied.length !== expected.length) throw new Error(`${table}: ${copied.length} rows copied, expected ${expected.length}`)
    expected.forEach((row, i) => {
      for (const key of Object.keys(row)) {
        if (canonical(row[key]) !== canonical(copied[i][key])) {
          throw new Error(`${table} ${row.id}: field ${key} differs after copy`)
        }
      }
    })
    summary[table] = copied.length
  }
  await client.query('COMMIT')
} catch (error) {
  await client.query('ROLLBACK')
  throw error
} finally {
  await client.end()
  sqlite.close()
}
console.log(JSON.stringify({ ok: true, rows: summary }))
