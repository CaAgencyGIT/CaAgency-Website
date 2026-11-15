import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import { deepMergeWithDefaults } from '@/lib/site-content/merge'
import { revalidateBlogPages, revalidateSitePages, revalidateTalentsPages } from '@/lib/revalidate'
import { PublicationError, versionOf, type ContentKind, type PublicationInput } from './core'

type Tx = Pick<typeof prisma, 'post' | 'talent' | 'siteContent' | 'websitePublication' | '$queryRaw' | '$executeRaw'>
const json = (value: unknown) => JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue

/** Read the stored resource, not a public reader that silently falls back after a DB error. */
export async function resource(tx: Pick<Tx, 'post' | 'talent' | 'siteContent'>, kind: ContentKind, target: string) {
  if (kind === 'blog') return tx.post.findUnique({ where: { slug: target } })
  if (kind === 'talent') return tx.talent.findUnique({ where: { slug: target } })
  const row = await tx.siteContent.findUnique({ where: { key: target } })
  return row?.data ?? siteContentDefinitionsByKey[target]?.defaultData ?? null
}

export async function preparePublication(input: PublicationInput) {
  const existing = await prisma.websitePublication.findUnique({ where: { id: input.id } })
  if (existing) {
    if (existing.sourceHash !== input.sourceHash || versionOf(existing.payload) !== versionOf(input.payload) || existing.kind !== input.kind || existing.target !== input.target || existing.expectedVersion !== input.expectedVersion) throw new PublicationError('Operation id already has different content', 409)
    return existing
  }
  const before = await resource(prisma, input.kind, input.target)
  if (versionOf(before) !== input.expectedVersion) throw new PublicationError('Content changed before preparation', 409)
  if (input.kind === 'talent' && !before && (!input.payload.name || !input.payload.imageUrl)) throw new PublicationError('New talent needs a name and image')
  return prisma.websitePublication.create({ data: { ...input, sourceIds: json(input.sourceIds), payload: json(input.payload), before: before === null ? Prisma.DbNull : json(before) } })
}

async function lockResource(tx: Tx, kind: ContentKind, target: string) {
  await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`publication:${kind}:${target}`}))`
  if (kind === 'blog') await tx.$queryRaw`SELECT id FROM "Post" WHERE slug = ${target} FOR UPDATE`
  else if (kind === 'talent') await tx.$queryRaw`SELECT id FROM "Talent" WHERE slug = ${target} FOR UPDATE`
  else await tx.$queryRaw`SELECT id FROM "SiteContent" WHERE key = ${target} FOR UPDATE`
}

async function writeResource(tx: Tx, kind: ContentKind, target: string, payload: Prisma.JsonValue | null, restore: boolean) {
  const p = (payload ?? {}) as Record<string, Prisma.JsonValue>
  if (kind === 'blog') {
    if (restore && payload === null) { await tx.post.delete({ where: { slug: target } }); return }
    const data = {
      title: String(p.title), content: String(p.content), author: String(p.author ?? 'CA Agency'),
      ...(p.seoTitle !== undefined ? { seoTitle: p.seoTitle as string | null } : {}),
      ...(p.excerpt !== undefined ? { excerpt: p.excerpt as string | null } : {}),
      ...(p.featuredImage !== undefined ? { featuredImage: p.featuredImage as string | null } : {}),
      categories: json(p.categories ?? []), tags: json(p.tags ?? []),
      status: restore ? String(p.status) : 'published', publishedAt: restore ? p.publishedAt ? new Date(String(p.publishedAt)) : null : new Date(),
    }
    await tx.post.upsert({ where: { slug: target }, create: { ...data, slug: target }, update: data })
  } else if (kind === 'talent') {
    if (restore && payload === null) { await tx.talent.delete({ where: { slug: target } }); return }
    const { id: _id, createdAt: _created, updatedAt: _updated, slug: _slug, ...data } = p
    await tx.talent.upsert({ where: { slug: target }, create: { ...data, name: String(data.name), imageUrl: String(data.imageUrl), slug: target } as Prisma.TalentCreateInput, update: data as Prisma.TalentUpdateInput })
  } else {
    const current = await resource(tx, kind, target)
    const data = restore ? payload : deepMergeWithDefaults(current as object, payload)
    await tx.siteContent.upsert({ where: { key: target }, create: { key: target, data: json(data) }, update: { data: json(data) } })
  }
}

/** An applied revision can retry only cache invalidation; it never repeats the content write. */
export async function applyPublication(id: string, revert = false) {
  let row = await prisma.$transaction(async tx => {
    const first = await tx.websitePublication.findUnique({ where: { id } })
    if (!first) throw new PublicationError('Publication not found', 404)
    const kind = first.kind as ContentKind
    await lockResource(tx, kind, first.target)
    const revision = await tx.websitePublication.findUniqueOrThrow({ where: { id } })
    if ((!revert && ['APPLIED', 'PUBLISHED'].includes(revision.status)) || (revert && ['REVERT_APPLIED', 'REVERTED'].includes(revision.status))) return revision
    if ((!revert && revision.status !== 'DRAFT') || (revert && revision.status !== 'PUBLISHED')) throw new PublicationError('Revision is not in the required state', 409)
    const before = await resource(tx, kind, revision.target)
    const expected = revert ? revision.appliedVersion : revision.expectedVersion
    if (versionOf(before) !== expected) throw new PublicationError('A later edit exists; review it before publishing or reverting', 409)
    await writeResource(tx, kind, revision.target, revert ? revision.before : revision.payload, revert)
    const after = await resource(tx, kind, revision.target)
    return tx.websitePublication.update({ where: { id }, data: { status: revert ? 'REVERT_APPLIED' : 'APPLIED', appliedVersion: versionOf(after), error: null } })
  })
  if (['PUBLISHED', 'REVERTED'].includes(row.status)) return row
  try {
    if (row.kind === 'blog') revalidateBlogPages()
    else if (row.kind === 'talent') revalidateTalentsPages()
    else revalidateSitePages()
    await prisma.websitePublication.updateMany({ where: { id, status: row.status, appliedVersion: row.appliedVersion }, data: { status: row.status === 'REVERT_APPLIED' ? 'REVERTED' : 'PUBLISHED', error: null } })
    row = await prisma.websitePublication.findUniqueOrThrow({ where: { id } })
  } catch {
    // Content is already committed; status remains APPLIED so a retry only refreshes caches.
    await prisma.websitePublication.updateMany({ where: { id, status: row.status, appliedVersion: row.appliedVersion }, data: { error: 'Content applied; cache invalidation is pending' } })
    row = await prisma.websitePublication.findUniqueOrThrow({ where: { id } })
  }
  return row
}
