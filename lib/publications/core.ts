import { createHash, timingSafeEqual } from 'node:crypto'
import { siteContentDefinitionsByKey, type SiteContentField } from '@/lib/site-content/definitions'
import { sanitizeTrustedHtml } from '@/lib/sanitize'

export type ContentKind = 'blog' | 'talent' | 'site-content'
export type JsonRecord = Record<string, unknown>
export interface PublicationInput {
  id: string; kind: ContentKind; target: string; expectedVersion: string
  sourceIds: string[]; sourceHash: string; payload: JsonRecord
}
const MARKETING_KEYS = new Set(['home', 'location-dubai', 'location-uae', 'location-asia', 'location-saudi-arabia', 'location-gcc', 'location-korea', 'location-korean-skincare', 'location-beauty', 'location-skincare', 'location-usa', 'location-uk', 'location-canada', 'location-australia'])

export class PublicationError extends Error {
  constructor(message: string, readonly status = 400) { super(message) }
}
export function canonical(value: unknown): string {
  if (value instanceof Date) return JSON.stringify(value.toISOString())
  if (value === null || typeof value !== 'object') return JSON.stringify(value) ?? 'null'
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`
  return `{${Object.keys(value).sort().map(k => `${JSON.stringify(k)}:${canonical((value as JsonRecord)[k])}`).join(',')}}`
}
export const versionOf = (value: unknown) => createHash('sha256').update(canonical(value)).digest('hex')

/** Machine credentials grant publishing only; they never create a human admin session. */
export function authorized(request: Request, secret = process.env.HERMES_PUBLISHER_SECRET): boolean {
  if (!secret || secret.length < 32) return false
  const supplied = request.headers.get('authorization') ?? ''
  const expected = `Bearer ${secret}`
  return Buffer.byteLength(supplied) === Buffer.byteLength(expected) && timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))
}

function record(value: unknown): JsonRecord {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new PublicationError('Expected an object')
  return value as JsonRecord
}
function text(value: unknown, max = 2000): string {
  if (typeof value !== 'string' || value.length > max) throw new PublicationError('Invalid text field')
  return value
}
function url(value: unknown): string {
  const s = text(value)
  if (s.startsWith('/') && !s.startsWith('//') && !s.includes('\\')) return s
  try { if (new URL(s).protocol === 'https:') return s } catch { /* return a validation error below */ }
  throw new PublicationError('Only local paths and HTTPS URLs are allowed')
}
function onlyKeys(value: JsonRecord, keys: string[]): void {
  if (Object.keys(value).some(k => !keys.includes(k))) throw new PublicationError('Unknown or protected field')
}
function fields(value: unknown, definitions: SiteContentField[]): JsonRecord {
  const input = record(value)
  onlyKeys(input, definitions.map(f => f.key))
  const result: JsonRecord = {}
  for (const field of definitions) {
    if (!(field.key in input)) continue
    const v = input[field.key]
    if (field.type === 'group') result[field.key] = fields(v, field.fields)
    else if (field.type === 'array') {
      if (!Array.isArray(v) || v.length > 100) throw new PublicationError('Invalid content array')
      result[field.key] = v.map(item => fields(item, field.fields))
    } else if (field.type === 'number') {
      if (typeof v !== 'number' || !Number.isFinite(v)) throw new PublicationError('Invalid number')
      result[field.key] = v
    } else if (field.type === 'url' || /(?:href|src)$/i.test(field.key)) result[field.key] = url(v)
    else if (field.type === 'html') result[field.key] = sanitizeTrustedHtml(text(v, 100_000))
    else result[field.key] = text(v, field.type === 'textarea' ? 30_000 : 2000)
  }
  return result
}

/** Validate complete proposed values before preserving an immutable revision. */
export function parsePublication(raw: unknown): PublicationInput {
  const v = record(raw)
  onlyKeys(v, ['id', 'kind', 'target', 'expectedVersion', 'sourceIds', 'sourceHash', 'payload'])
  const id = text(v.id, 64), target = text(v.target, 180), expectedVersion = text(v.expectedVersion, 64)
  if (!/^[a-f0-9]{64}$/.test(id) || !/^[a-z0-9][a-z0-9-]*$/.test(target) || !/^[a-f0-9]{64}$/.test(expectedVersion)) throw new PublicationError('Invalid operation, target or expected version')
  if (!Array.isArray(v.sourceIds) || !v.sourceIds.length || v.sourceIds.length > 30 || v.sourceIds.some(s => typeof s !== 'string' || !s || s.length > 500)) throw new PublicationError('Source references are required')
  if (typeof v.sourceHash !== 'string' || !/^[a-f0-9]{64}$/.test(v.sourceHash)) throw new PublicationError('A verified source hash is required')
  const kind = v.kind as ContentKind
  const p = record(v.payload)
  let payload: JsonRecord
  if (kind === 'site-content') {
    if (!MARKETING_KEYS.has(target)) throw new PublicationError('This page is outside marketing autonomy', 403)
    payload = fields(p, siteContentDefinitionsByKey[target].fields)
  } else if (kind === 'blog') {
    onlyKeys(p, ['title', 'seoTitle', 'excerpt', 'content', 'featuredImage', 'author', 'categories', 'tags'])
    if (!text(p.title, 250).trim() || !text(p.content, 150_000).trim()) throw new PublicationError('Blog title and content are required')
    payload = { title: p.title, content: sanitizeTrustedHtml(p.content as string), author: p.author === undefined ? 'CA Agency' : text(p.author, 120) }
    for (const key of ['seoTitle', 'excerpt']) if (p[key] !== undefined) payload[key] = text(p[key], key === 'seoTitle' ? 120 : 2000)
    if (p.featuredImage !== undefined) payload.featuredImage = url(p.featuredImage)
    for (const key of ['categories', 'tags']) if (p[key] !== undefined) {
      if (!Array.isArray(p[key]) || p[key].length > 20 || p[key].some(x => typeof x !== 'string' || x.length > 100)) throw new PublicationError('Invalid category/tag list')
      payload[key] = p[key]
    }
  } else if (kind === 'talent') {
    onlyKeys(p, ['name', 'imageUrl', 'bio', 'category', 'instagramUrl', 'tiktokUrl', 'youtubeUrl', 'twitchUrl', 'kickUrl', 'order'])
    payload = {}
    for (const key of ['name', 'bio', 'category']) if (p[key] !== undefined) payload[key] = text(p[key], key === 'bio' ? 20_000 : 120)
    for (const key of ['imageUrl', 'instagramUrl', 'tiktokUrl', 'youtubeUrl', 'twitchUrl', 'kickUrl']) if (p[key] !== undefined) payload[key] = p[key] === null && key !== 'imageUrl' ? null : url(p[key])
    if (p.order !== undefined) {
      if (!Number.isSafeInteger(p.order) || Number(p.order) < 0) throw new PublicationError('Invalid talent order')
      payload.order = p.order
    }
  } else throw new PublicationError('Unknown content kind')
  if (!Object.keys(payload).length) throw new PublicationError('Empty publication')
  return { id, kind, target, expectedVersion, sourceIds: v.sourceIds as string[], sourceHash: v.sourceHash, payload }
}
