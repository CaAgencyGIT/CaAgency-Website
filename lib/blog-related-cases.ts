import type { CaseStudy } from '@/lib/data/case-studies'

// Picks the case studies shown under a blog post, so every guide links real
// campaigns (and through them the creators' talent pages). Studies whose
// vertical fits the post's topic come first; ties rotate by post slug, so
// posts on the same topic link different campaigns instead of the same three.

/** Post topic (title, categories and tags) → case-study verticals that fit it. */
const TOPICS: { post: RegExp; vertical: RegExp }[] = [
  { post: /k-beauty|korean/, vertical: /k-beauty/i },
  { post: /skincare/, vertical: /skincare/i },
  { post: /makeup|cosmetic/, vertical: /makeup|cosmetics|prestige beauty|luxury beauty/i },
  { post: /beauty/, vertical: /beauty|skincare|makeup|cosmetics|haircare/i },
  { post: /fashion|style|retail/, vertical: /haircare|makeup|cosmetics|retail/i },
  { post: /tech|gadget|e-?commerce|tiktok shop|social commerce/, vertical: /tech|e-commerce|retail/i },
]

export interface PostTopic {
  slug: string
  title: string
  categories: string[]
  tags: string[]
}

function slugSeed(slug: string): number {
  let hash = 0
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return hash
}

export function relatedCaseStudiesForPost(post: PostTopic, studies: CaseStudy[], count = 3): CaseStudy[] {
  if (studies.length === 0) return []
  const text = [post.title, ...post.categories, ...post.tags].join(' ').toLowerCase()
  const topics = TOPICS.filter((topic) => topic.post.test(text))
  const offset = slugSeed(post.slug) % studies.length
  // Rotate first so equal scores keep the per-post order (sort is stable).
  const rotated = [...studies.slice(offset), ...studies.slice(0, offset)]
  const score = (cs: CaseStudy) => topics.filter((topic) => topic.vertical.test(cs.vertical)).length
  const ranked = rotated.map((cs) => ({ cs, score: score(cs) })).sort((a, b) => b.score - a.score)

  // One study per brand, so the block never shows the same brand twice.
  const picked: CaseStudy[] = []
  for (const { cs } of ranked) {
    if (picked.some((p) => p.brand === cs.brand)) continue
    picked.push(cs)
    if (picked.length === count) break
  }
  return picked
}
