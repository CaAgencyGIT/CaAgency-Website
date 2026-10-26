// Profiles without a real bio render near-identical boilerplate, which search
// engines treat as thin duplicate pages. They stay reachable for visitors but
// are kept out of the index (and sitemap) until a bio is written in the admin.
export const MIN_INDEXABLE_BIO_LENGTH = 80

export function isIndexableTalentProfile(bio: string | null | undefined): boolean {
  return (bio?.trim().length ?? 0) >= MIN_INDEXABLE_BIO_LENGTH
}

/**
 * Meta description from a bio: the opening sentences that fit in ~160
 * characters (what Google shows), so a long bio isn't cut mid-word.
 */
export function talentMetaDescription(bio: string, max = 160): string {
  const text = bio.trim().replace(/\s+/g, ' ')
  if (text.length <= max) return text
  // Split only where punctuation is followed by whitespace, so "1.7 million" stays whole.
  const sentences = text.split(/(?<=[.!?])\s+/)
  let out = ''
  for (const sentence of sentences) {
    const next = out ? `${out} ${sentence}` : sentence
    if (next.length > max) break
    out = next
  }
  if (out.trim()) return out.trim()
  return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…'
}
