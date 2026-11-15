/** Real store + route contracts, confined to one disposable schema on the isolated dev database.
 * Run: infra/dev/with-dev-db.sh website env -C <checkout> HERMES_PUBLICATION_DB_TESTS=1 npm test
 * No public schema is changed, no live endpoint is called and cache/edge side effects are stubbed.
 */
import { randomUUID } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { Client } from 'pg'
import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

const fixture = vi.hoisted(() => ({
  client: null as PrismaClient | null,
  beforeFinalize: null as ((args: Prisma.WebsitePublicationUpdateManyArgs) => Promise<void>) | null,
  beforeResourceWrite: null as ((kind: string) => Promise<void>) | null,
  afterResourceLock: null as (() => Promise<void>) | null,
  blogCache: vi.fn(), talentCache: vi.fn(), siteCache: vi.fn(),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy({}, {
    get(_target, key) {
      if (!fixture.client) throw new Error('isolated database fixture is not initialized')
      const value = Reflect.get(fixture.client, key)
      if (key === '$transaction') return (callback: (tx: Prisma.TransactionClient) => Promise<unknown>) => value.call(fixture.client, (tx: Prisma.TransactionClient) => callback(new Proxy(tx, {
        get(target, model) {
          const delegate = Reflect.get(target, model)
          if (model === '$queryRaw') return async (...args: unknown[]) => {
            const result = await delegate.apply(target, args)
            await fixture.afterResourceLock?.()
            return result
          }
          if (!['post', 'talent', 'siteContent'].includes(String(model))) return typeof delegate === 'function' ? delegate.bind(target) : delegate
          return new Proxy(delegate, {
            get(resource, method) {
              const original = Reflect.get(resource, method)
              if (['create', 'update', 'upsert'].includes(String(method))) return async (args: unknown) => {
                await fixture.beforeResourceWrite?.(String(model))
                return original.call(resource, args)
              }
              return typeof original === 'function' ? original.bind(resource) : original
            },
          })
        },
      })))
      if (key === 'websitePublication') return new Proxy(value, {
        get(delegate, method) {
          const original = Reflect.get(delegate, method)
          if (method === 'updateMany') return async (args: Prisma.WebsitePublicationUpdateManyArgs) => {
            await fixture.beforeFinalize?.(args)
            return original.call(delegate, args)
          }
          return typeof original === 'function' ? original.bind(delegate) : original
        },
      })
      return typeof value === 'function' ? value.bind(fixture.client) : value
    },
  }),
}))
vi.mock('@/lib/revalidate', () => ({ revalidateBlogPages: fixture.blogCache, revalidateTalentsPages: fixture.talentCache, revalidateSitePages: fixture.siteCache }))

import { versionOf } from '@/lib/publications/core'
import { applyPublication, preparePublication } from '@/lib/publications/store'
import { POST as prepareRoute } from '@/app/api/automation/publications/route'
import { POST as actionRoute, GET as statusRoute } from '@/app/api/automation/publications/[id]/route'
import { GET as targetRoute } from '@/app/api/automation/publications/target/route'

const enabled = process.env.HERMES_PUBLICATION_DB_TESTS === '1'
const secret = 'synthetic-publication-contract-secret'
const target = 'contract-company-news'
const context = (id: string) => ({ params: Promise.resolve({ id }) })
const input = (letter = 'a', extra: Record<string, unknown> = {}) => ({ id: letter.repeat(64), kind: 'blog' as const, target, expectedVersion: versionOf(null), sourceIds: ['approved-source'], sourceHash: 'f'.repeat(64), payload: { title: 'Approved company news', content: '<p>Approved facts</p>' }, ...extra })
const request = (url: string, body?: unknown, auth = true) => new Request(`http://localhost${url}`, {
  method: body === undefined ? 'GET' : 'POST', headers: { ...(auth ? { Authorization: `Bearer ${secret}` } : {}), ...(body === undefined ? {} : { 'Content-Type': 'application/json' }) },
  ...(body === undefined ? {} : { body: JSON.stringify(body) }),
})
const publish = (id: string, action = 'publish') => actionRoute(request(`/api/automation/publications/${id}`, { action }), context(id))
const deferred = () => {
  let resolve!: () => void
  const promise = new Promise<void>(r => { resolve = r })
  return { promise, resolve }
}

describe.skipIf(!enabled)('isolated PostgreSQL website publication contracts', () => {
  let admin: Client
  let schema: string
  const db = () => fixture.client!
  const writes = async () => Number((await admin.query('SELECT count(*)::int AS n FROM "PublicationTestWrites"')).rows[0].n)

  beforeAll(async () => {
    const connectionString = process.env.DATABASE_URL
    const url = new URL(connectionString ?? 'http://missing.invalid')
    if (!connectionString || !['postgres:', 'postgresql:'].includes(url.protocol) || url.hostname !== '127.0.0.1' || url.port !== '5433' || url.pathname !== '/caagency_website' || url.searchParams.has('options') || url.searchParams.has('host') || url.searchParams.has('port')) throw new Error('Publication contracts require the isolated 127.0.0.1:5433 website development database')
    schema = `hermes_publication_${randomUUID().replace(/-/g, '')}`
    if (!/^hermes_publication_[a-f0-9]{32}$/.test(schema)) throw new Error('unsafe disposable schema')
    admin = new Client({ connectionString }); await admin.connect()
    await admin.query(`CREATE SCHEMA "${schema}"`)
    await admin.query(`SET search_path TO "${schema}"`)
    const init = await readFile(path.join(process.cwd(), 'prisma/pg-migrations/20261020000000_init/migration.sql'), 'utf8')
    await admin.query(init.replace('CREATE SCHEMA IF NOT EXISTS "public";', ''))
    await admin.query(await readFile(path.join(process.cwd(), 'prisma/pg-migrations/20261027010000_post_seo_title/migration.sql'), 'utf8'))
    await admin.query(await readFile(path.join(process.cwd(), 'prisma/pg-migrations/20261115143000_machine_publications/migration.sql'), 'utf8'))
    await admin.query(`CREATE TABLE "PublicationTestWrites" (operation TEXT NOT NULL);
      CREATE FUNCTION record_publication_test_write() RETURNS TRIGGER AS $$ BEGIN
        INSERT INTO "PublicationTestWrites" VALUES (TG_OP); RETURN NULL;
      END $$ LANGUAGE plpgsql;
      CREATE TRIGGER publication_test_write AFTER INSERT OR UPDATE OR DELETE ON "Post"
        FOR EACH ROW EXECUTE FUNCTION record_publication_test_write();`)
    fixture.client = new PrismaClient({ adapter: new PrismaPg({ connectionString, options: `-c search_path=${schema}` }, { schema }) })
    const current = await db().$queryRaw<Array<{ current_schema: string }>>`SELECT current_schema()`
    expect(current[0].current_schema).toBe(schema)
    vi.stubEnv('HERMES_PUBLISHER_SECRET', secret)
  })
  beforeEach(async () => {
    fixture.beforeFinalize = null
    fixture.beforeResourceWrite = null
    fixture.afterResourceLock = null
    vi.clearAllMocks()
    fixture.blogCache.mockReset(); fixture.talentCache.mockReset(); fixture.siteCache.mockReset()
    await admin.query('TRUNCATE "WebsitePublication", "Post", "Talent", "SiteContent", "PublicationTestWrites"')
  })
  afterAll(async () => {
    fixture.beforeFinalize = null
    fixture.beforeResourceWrite = null
    fixture.afterResourceLock = null
    await fixture.client?.$disconnect()
    fixture.client = null
    if (admin) {
      try { if (schema && /^hermes_publication_[a-f0-9]{32}$/.test(schema)) await admin.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`) }
      finally { await admin.end() }
    }
    vi.unstubAllEnvs()
  })

  it('enforces dedicated credentials, input limits and versions through actual route handlers', async () => {
    expect((await prepareRoute(request('/api/automation/publications', input(), false))).status).toBe(401)
    expect((await prepareRoute(request('/api/automation/publications', { ...input(), expectedVersion: 'b'.repeat(64) }))).status).toBe(409)
    expect((await prepareRoute(request('/api/automation/publications', { ...input(), payload: { title: 'x', content: 'x'.repeat(200_001) } }))).status).toBe(413)
    expect(await db().websitePublication.count()).toBe(0)
    expect(await writes()).toBe(0)
  })

  it('prepares one immutable draft under concurrency and rejects a changed replay', async () => {
    const responses = await Promise.all([prepareRoute(request('/api/automation/publications', input())), prepareRoute(request('/api/automation/publications', input()))])
    expect(responses.map(r => r.status)).toEqual([201, 201])
    expect(await db().websitePublication.count()).toBe(1)
    expect(await writes()).toBe(0)
    expect((await prepareRoute(request('/api/automation/publications', { ...input(), payload: { title: 'Different', content: 'Changed' } }))).status).toBe(409)
    expect((await prepareRoute(request('/api/automation/publications', { ...input(), sourceIds: ['different-source'] }))).status).toBe(409)
    expect((await statusRoute(request('/api/automation/publications/a'), context(input().id))).status).toBe(200)
    const read = await targetRoute(request(`/api/automation/publications/target?kind=blog&target=${target}`))
    await expect(read.json()).resolves.toMatchObject({ version: versionOf(null), resource: null })
  })

  it('publishes one content write under duplicate concurrent apply and confirms a durable receipt', async () => {
    await preparePublication(input())
    const results = await Promise.all([publish(input().id), publish(input().id)])
    expect(results.map(r => r.status)).toEqual([200, 200])
    expect(await writes()).toBe(1)
    expect(await db().websitePublication.findUniqueOrThrow({ where: { id: input().id } })).toMatchObject({ status: 'PUBLISHED' })
    expect(await db().post.findUniqueOrThrow({ where: { slug: target } })).toMatchObject({ status: 'published', title: input().payload.title })
    expect((await publish(input().id)).status).toBe(200)
    expect(await writes()).toBe(1)
  })

  it('serializes competing revision IDs against the same original version', async () => {
    await Promise.all([preparePublication(input('a')), preparePublication(input('b'))])
    const results = await Promise.all([publish(input('a').id), publish(input('b').id)])
    expect(results.map(r => r.status).sort()).toEqual([200, 409])
    expect(await writes()).toBe(1)
  })

  it('retains APPLIED on cache failure and retries cache finalization without another content write', async () => {
    await preparePublication(input())
    fixture.blogCache.mockImplementationOnce(() => { throw new Error('transient cache failure') })
    const first = await publish(input().id)
    expect(first.status).toBe(202)
    await expect(first.json()).resolves.toMatchObject({ status: 'APPLIED' })
    expect(await writes()).toBe(1)
    const retry = await publish(input().id)
    expect(retry.status).toBe(200)
    await expect(retry.json()).resolves.toMatchObject({ status: 'PUBLISHED', error: null })
    expect(await writes()).toBe(1)
  })

  it('does not overwrite a later human edit when publishing or reverting', async () => {
    await preparePublication(input())
    await db().post.create({ data: { slug: target, title: 'Human edit', content: 'Preserve this' } })
    expect((await publish(input().id)).status).toBe(409)
    expect((await db().post.findUniqueOrThrow({ where: { slug: target } })).title).toBe('Human edit')
    await db().post.delete({ where: { slug: target } })
    await publish(input().id)
    await db().post.update({ where: { slug: target }, data: { title: 'A later edit' } })
    expect((await publish(input().id, 'revert')).status).toBe(409)
    expect((await db().post.findUniqueOrThrow({ where: { slug: target } })).title).toBe('A later edit')
  })

  it('preserves original blog dates, taxonomy and byline when those fields are omitted, and restores prior content', async () => {
    const publishedAt = new Date('2020-01-02T03:04:05.000Z')
    const original = await db().post.create({ data: { slug: target, title: 'Original', content: '<p>Original text</p>', author: 'Original author', status: 'published', publishedAt, categories: ['original-category'], tags: ['original-tag'] } })
    const prepared = await prepareRoute(request('/api/automation/publications', input('a', { expectedVersion: versionOf(original) })))
    expect(prepared.status).toBe(201)
    await publish(input().id)
    const updated = await db().post.findUniqueOrThrow({ where: { slug: target } })
    expect(updated).toMatchObject({ publishedAt, author: 'Original author', categories: ['original-category'], tags: ['original-tag'] })
    const restored = await publish(input().id, 'revert')
    expect(restored.status).toBe(200)
    expect(await db().post.findUniqueOrThrow({ where: { slug: target } })).toMatchObject({ title: original.title, content: original.content, publishedAt, categories: original.categories, tags: original.tags })
  })

  it.each([false, true])('late cache finalization/error cannot overwrite a newer revert (late error=%s)', async lateError => {
    await preparePublication(input())
    const reached = deferred(), resume = deferred()
    let first = true
    fixture.beforeFinalize = async args => {
      if (first && (lateError ? !!args.data.error : args.data.status === 'PUBLISHED')) {
        first = false; reached.resolve(); await resume.promise
      }
    }
    if (lateError) fixture.blogCache.mockImplementationOnce(() => { throw new Error('delayed cache failure') })
    const late = applyPublication(input().id)
    try {
      await reached.promise
      expect((await applyPublication(input().id)).status).toBe('PUBLISHED')
      expect((await applyPublication(input().id, true)).status).toBe('REVERTED')
    } finally { resume.resolve() }
    expect((await late).status).toBe('REVERTED')
    expect(await db().websitePublication.findUniqueOrThrow({ where: { id: input().id } })).toMatchObject({ status: 'REVERTED', error: null })
    expect(await db().post.findUnique({ where: { slug: target } })).toBeNull()
    expect(await writes()).toBe(2)
  })

  it.each(['blog', 'talent', 'site-content'] as const)('preserves a human-created %s row inserted after the absent-resource version check', async kind => {
    const resourceTarget = kind === 'site-content' ? 'home' : target
    const read = await targetRoute(request(`/api/automation/publications/target?kind=${kind}&target=${resourceTarget}`))
    const current = await read.json()
    const payload = kind === 'blog' ? input().payload : kind === 'talent' ? { name: 'Machine-proposed creator', imageUrl: '/images/proposed.jpg' } : { hero: { title: 'Machine-proposed headline' } }
    await preparePublication(input('a', { kind, target: resourceTarget, expectedVersion: current.version, payload }))
    const reached = deferred(), resume = deferred()
    fixture.beforeResourceWrite = async () => { reached.resolve(); await resume.promise }
    const pending = publish(input().id)
    try {
      await reached.promise
      if (kind === 'blog') await db().post.create({ data: { slug: target, title: 'Preserve human blog', content: 'Human content' } })
      else if (kind === 'talent') await db().talent.create({ data: { slug: target, name: 'Preserve human creator', imageUrl: '/images/human.jpg' } })
      else await db().siteContent.create({ data: { key: 'home', data: { hero: { title: 'Preserve human homepage' } } } })
    } finally { resume.resolve() }
    expect((await pending).status).toBe(409)
    expect((await db().websitePublication.findUniqueOrThrow({ where: { id: input().id } })).status).toBe('DRAFT')
    if (kind === 'blog') expect((await db().post.findUniqueOrThrow({ where: { slug: target } })).title).toBe('Preserve human blog')
    else if (kind === 'talent') expect((await db().talent.findUniqueOrThrow({ where: { slug: target } })).name).toBe('Preserve human creator')
    else expect((await db().siteContent.findUniqueOrThrow({ where: { key: 'home' } })).data).toEqual({ hero: { title: 'Preserve human homepage' } })
  })

  it('rolls back the content and its audit write when the receipt transaction cannot commit', async () => {
    await preparePublication(input())
    await admin.query('ALTER TABLE "WebsitePublication" ADD CONSTRAINT publication_test_block CHECK (status <> \'APPLIED\')')
    try {
      expect((await publish(input().id)).status).toBe(500)
      expect(await db().post.findUnique({ where: { slug: target } })).toBeNull()
      expect((await db().websitePublication.findUniqueOrThrow({ where: { id: input().id } })).status).toBe('DRAFT')
      expect(await writes()).toBe(0)
    } finally { await admin.query('ALTER TABLE "WebsitePublication" DROP CONSTRAINT publication_test_block') }
  })

  it('does not update an unlocked site-content row that appears with default data before the version read', async () => {
    const read = await targetRoute(request('/api/automation/publications/target?kind=site-content&target=home'))
    const current = await read.json()
    await preparePublication(input('a', { kind: 'site-content', target: 'home', expectedVersion: current.version, payload: { hero: { title: 'Proposed headline' } } }))
    fixture.afterResourceLock = async () => {
      // The FOR UPDATE missed an absent row. A human's first save matches the
      // visible defaults, so the subsequent value-version check still succeeds.
      await db().siteContent.create({ data: { key: 'home', data: current.resource } })
    }
    fixture.beforeResourceWrite = async () => {
      await db().siteContent.update({ where: { key: 'home' }, data: { data: { hero: { title: 'Preserve human follow-up edit' } } } })
    }
    expect((await publish(input().id)).status).toBe(409)
    expect((await db().siteContent.findUniqueOrThrow({ where: { key: 'home' } })).data).toEqual({ hero: { title: 'Preserve human follow-up edit' } })
    expect((await db().websitePublication.findUniqueOrThrow({ where: { id: input().id } })).status).toBe('DRAFT')
  })
})
