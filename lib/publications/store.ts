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

function samePreparation(existing: { sourceHash: string; sourceIds: Prisma.JsonValue; payload: Prisma.JsonValue; kind: string; target: string; expectedVersion: string }, input: PublicationInput) {
  return existing.sourceHash === input.sourceHash && versionOf(existing.payload) === versionOf(input.payload)
    && existing.kind === input.kind && existing.target === input.target && existing.expectedVersion === input.expectedVersion
    && versionOf(Array.isArray(existing.sourceIds) ? [...existing.sourceIds].sort() : existing.sourceIds) === versionOf([...input.sourceIds].sort())
}

export async function preparePublication(input: PublicationInput) {
  const existing = await prisma.websitePublication.findUnique({ where: { id: input.id } })
  if (existing) {
    if (!samePreparation(existing, input)) throw new PublicationError('Operation id already has different content', 409)
    return existing
  }
  const before = await resource(prisma, input.kind, input.target)
  if (versionOf(before) !== input.expectedVersion) throw new PublicationError('Content changed before preparation', 409)
  if (input.kind === 'talent' && !before && (!input.payload.name || !input.payload.imageUrl)) throw new PublicationError('New talent needs a name and image')
  try {
    return await prisma.websitePublication.create({ data: { ...input, sourceIds: json(input.sourceIds), payload: json(input.payload), before: before === null ? Prisma.DbNull : json(before) } })
  } catch (error) {
    if ((error as { code?: string }).code !== 'P2002') throw error
    // An identical lost-acceptance replay may race the original preparation.
    // A unique-ID conflict never replaces the immutable revision's prior state.
    const winner = await prisma.websitePublication.findUnique({ where: { id: input.id } })
    if (!winner || !samePreparation(winner, input)) throw new PublicationError('Operation id already has different content', 409)
    return winner
  }
}

async function lockResource(tx: Tx, kind: ContentKind, target: string) {
  await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`publication:${kind}:${target}`}))`
  const rows = kind === 'blog' ? await tx.$queryRaw<Array<{ id: string }>>`SELECT id FROM "Post" WHERE slug = ${target} FOR UPDATE`
    : kind === 'talent' ? await tx.$queryRaw<Array<{ id: string }>>`SELECT id FROM "Talent" WHERE slug = ${target} FOR UPDATE`
      : await tx.$queryRaw<Array<{ id: string }>>`SELECT id FROM "SiteContent" WHERE key = ${target} FOR UPDATE`
  return rows.length > 0
}

async function writeResource(tx: Tx, kind: ContentKind, target: string, payload: Prisma.JsonValue | null, restore: boolean, lockedExistingResource: boolean) {
  const p = (payload ?? {}) as Record<string, Prisma.JsonValue>
  if (kind === 'blog') {
    if (restore && payload === null) { await tx.post.delete({ where: { slug: target } }); return }
    const current = await tx.post.findUnique({ where: { slug: target } })
    const data = {
      title: String(p.title), content: String(p.content),
      ...(p.author !== undefined ? { author: String(p.author) } : {}),
      ...(p.seoTitle !== undefined ? { seoTitle: p.seoTitle as string | null } : {}),
      ...(p.excerpt !== undefined ? { excerpt: p.excerpt as string | null } : {}),
      ...(p.featuredImage !== undefined ? { featuredImage: p.featuredImage as string | null } : {}),
      ...(p.categories !== undefined ? { categories: json(p.categories) } : {}),
      ...(p.tags !== undefined ? { tags: json(p.tags) } : {}),
      status: restore ? String(p.status) : 'published',
      publishedAt: restore ? p.publishedAt ? new Date(String(p.publishedAt)) : null : current?.publishedAt ?? new Date(),
    }
    if (lockedExistingResource) await tx.post.update({ where: { slug: target }, data })
    else await tx.post.create({ data: { ...data, slug: target, author: String(p.author ?? 'CA Agency'), categories: json(p.categories ?? []), tags: json(p.tags ?? []) } })
  } else if (kind === 'talent') {
    if (restore && payload === null) { await tx.talent.delete({ where: { slug: target } }); return }
    const { id: _id, createdAt: _created, updatedAt: _updated, slug: _slug, ...data } = p
    if (lockedExistingResource) await tx.talent.update({ where: { slug: target }, data: data as Prisma.TalentUpdateInput })
    else await tx.talent.create({ data: { ...data, name: String(data.name), imageUrl: String(data.imageUrl), slug: target } as Prisma.TalentCreateInput })
  } else {
    const current = await resource(tx, kind, target)
    const data = restore ? payload : deepMergeWithDefaults(current as object, payload)
    if (lockedExistingResource) await tx.siteContent.update({ where: { key: target }, data: { data: json(data) } })
    else await tx.siteContent.create({ data: { key: target, data: json(data) } })
  }
}

/** An applied revision can retry only cache invalidation; it never repeats the content write. */
export async function applyPublication(id: string, revert = false) {
  let row = await prisma.$transaction(async tx => {
    const first = await tx.websitePublication.findUnique({ where: { id } })
    if (!first) throw new PublicationError('Publication not found', 404)
    const kind = first.kind as ContentKind
    const lockedExistingResource = await lockResource(tx, kind, first.target)
    const revision = await tx.websitePublication.findUniqueOrThrow({ where: { id } })
    if ((!revert && ['APPLIED', 'PUBLISHED'].includes(revision.status)) || (revert && ['REVERT_APPLIED', 'REVERTED'].includes(revision.status))) return revision
    if ((!revert && revision.status !== 'DRAFT') || (revert && revision.status !== 'PUBLISHED')) throw new PublicationError('Revision is not in the required state', 409)
    const before = await resource(tx, kind, revision.target)
    const expected = revert ? revision.appliedVersion : revision.expectedVersion
    if (versionOf(before) !== expected) throw new PublicationError('A later edit exists; review it before publishing or reverting', 409)
    await writeResource(tx, kind, revision.target, revert ? revision.before : revision.payload, revert, lockedExistingResource)
    const after = await resource(tx, kind, revision.target)
    return tx.websitePublication.update({ where: { id }, data: { status: revert ? 'REVERT_APPLIED' : 'APPLIED', appliedVersion: versionOf(after), error: null } })
  }).catch(error => {
    // Row locks cannot reserve an absent slug/key. A human may create it after
    // the version check; INSERT's unique constraint preserves their new content.
    if ((error as { code?: string }).code === 'P2002') throw new PublicationError('Resource was created concurrently; read its current version before retrying', 409)
    throw error
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
