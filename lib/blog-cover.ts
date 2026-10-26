import { generatedCoverSlugs } from '@/lib/data/blog-covers'
import { aiCoverPath, aiCoverSlugs } from '@/lib/data/blog-ai-covers'

// Posts without an uploaded featured image fall back to a generated brand
// cover (scripts/generate-blog-covers.tsx), so cards and social previews are
// never blank.

export const COVER_WIDTH = 1200
export const COVER_HEIGHT = 630

// /images/* is served immutable, so bump this whenever the cover artwork
// changes; the generator then writes new files under new URLs.
export const COVER_VERSION = 5

export const COVER_BACKGROUND = '#131011'

// One muted accent per primary category. The brand itself is monochrome, so
// these only appear on the covers; each needs 7:1 contrast on the background.
export const CATEGORY_ACCENTS: Readonly<Record<string, string>> = {
  Strategy: '#E8C77A',
  Platforms: '#8FB8FF',
  Verticals: '#F29FB6',
  Trends: '#FF9E7A',
  Markets: '#7FD6B0',
  Guides: '#B9A2F5',
  'Costs & Budgeting': '#A3D977',
  Compliance: '#6FD0E0',
  'Company News': '#D9D9D4',
}

const FALLBACK_ACCENT = '#FFFFFF'

export function coverAccent(category: string): string {
  return CATEGORY_ACCENTS[category] ?? FALLBACK_ACCENT
}

export function hexToRgb(hex: string): [number, number, number] {
  const value = parseInt(hex.slice(1), 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
}

export function blogCoverPath(slug: string): string {
  return `/images/blog/covers/${slug}-v${COVER_VERSION}.webp`
}

export function resolveFeaturedImage(post: { slug: string; featuredImage?: string | null }): string | null {
  if (post.featuredImage) return post.featuredImage
  // Editorial AI covers (Oct 2026) take precedence over the typographic ones.
  if (aiCoverSlugs.has(post.slug)) return aiCoverPath(post.slug)
  return generatedCoverSlugs.has(post.slug) ? blogCoverPath(post.slug) : null
}

// Stable 32-bit FNV-1a hash so a slug always draws the same motif.
export function hashSlug(slug: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < slug.length; i += 1) {
    hash ^= slug.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

// The cover carries the category, not the title: the page and cards already
// print the title as text, so baking it in repeats it.
export function coverLabelSize(label: string): number {
  if (label.length <= 10) return 140
  if (label.length <= 14) return 116
  return 92
}

export interface CoverRing {
  cx: number
  cy: number
  r: number
}

// Concentric rings around a centre chosen from the hash.
export function coverRings(slug: string): CoverRing[] {
  const hash = hashSlug(slug)
  const cx = 820 + (hash % 360)
  const cy = 60 + ((hash >>> 8) % 500)
  const step = 46 + ((hash >>> 16) % 24)
  return Array.from({ length: 9 }, (_, i) => ({ cx, cy, r: 90 + i * step }))
}

export const COVER_MOTIFS = ['rings', 'stripes', 'dots', 'bars', 'corner'] as const
export type CoverMotif = (typeof COVER_MOTIFS)[number]

// Cards in one category share an accent colour, so the artwork has to tell
// them apart: hand out motifs round-robin within each primary category, in
// publish order, so neighbours never repeat until the motifs run out.
export function assignCoverMotifs(
  posts: readonly { slug: string; categories: readonly string[] }[]
): Map<string, CoverMotif> {
  const seenPerCategory = new Map<string, number>()
  const assigned = new Map<string, CoverMotif>()
  for (const post of posts) {
    const category = post.categories[0] ?? 'Insights'
    const index = seenPerCategory.get(category) ?? 0
    seenPerCategory.set(category, index + 1)
    assigned.set(post.slug, COVER_MOTIFS[index % COVER_MOTIFS.length])
  }
  return assigned
}

// The small line above the category word: the second category when a post
// has one, otherwise the generic brand line.
export function coverTopLabel(categories: readonly string[]): string {
  return (categories[1] ?? 'Influencer Marketing').toUpperCase()
}

// Equaliser-style bar heights in px, derived from the slug so a cover never
// changes between runs.
export function coverBarHeights(slug: string): number[] {
  return Array.from({ length: 10 }, (_, i) => 90 + Math.round(((hashSlug(`${slug}:${i}`) % 1000) / 999) * 330))
}

const STRIPE_ANGLES = [35, 55, 125, 145] as const

export function coverStripeAngle(slug: string): number {
  return STRIPE_ANGLES[hashSlug(slug) % STRIPE_ANGLES.length]
}

export interface CoverDotGrid {
  cols: number
  rows: number
  size: number
  gap: number
}

export function coverDotGrid(slug: string): CoverDotGrid {
  const hash = hashSlug(slug)
  const size = 7 + (hash % 4)
  const gap = 34 + ((hash >>> 4) % 14)
  return { cols: 11 + ((hash >>> 8) % 4), rows: 8 + ((hash >>> 12) % 3), size, gap }
}

// Arcs that sweep in from a right-hand corner (top or bottom by hash).
export function coverCornerRings(slug: string): CoverRing[] {
  const top = hashSlug(slug) % 2 === 0
  const step = 70 + (hashSlug(`${slug}:step`) % 30)
  return Array.from({ length: 8 }, (_, i) => ({ cx: COVER_WIDTH, cy: top ? 0 : COVER_HEIGHT, r: 150 + i * step }))
}
