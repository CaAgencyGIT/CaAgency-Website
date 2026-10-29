// Self-reported follower counts from the talent application form. Accepts
// "125000", "125,000", "125.000", "125 000", "125K", "1.2M", "1,2M" and "2B",
// plus the way people often type them: "10K+", "~50k", "50k followers",
// "1.5 million". Returns a whole number, or null when the input is not a count.
export function parseFollowerCount(input: string): number | null {
  const raw = input.trim().toUpperCase()
    .replace(/\b(FOLLOWERS?|SUBSCRIBERS?|SUBS|FANS)\b/g, '')
    .replace(/\b(THOUSAND)\b/g, 'K')
    .replace(/\b(MILLIONS?|MLN|MIL)\b/g, 'M')
    .replace(/\s+/g, '')
    .replace(/^[~≈±]|\+$/g, '')
  if (!raw) return null
  const match = /^(\d+(?:[.,]\d+)*)([KMB])?$/.exec(raw)
  if (!match) return null
  const [, digits, suffix] = match
  let value: number
  if (suffix) {
    // With a suffix, a single "." or "," is a decimal point (1.2M, 1,2M).
    const parts = digits.split(/[.,]/)
    if (parts.length > 2) return null
    value = Number(parts.join('.'))
    value *= suffix === 'K' ? 1e3 : suffix === 'M' ? 1e6 : 1e9
  } else {
    // Without one, separators group thousands (125,000 / 125.000) and every
    // group after the first must have exactly three digits.
    const groups = digits.split(/[.,]/)
    if (groups.length > 1 && groups.slice(1).some((group) => group.length !== 3)) return null
    value = Number(groups.join(''))
  }
  if (!Number.isFinite(value) || value < 0 || value > 1e10) return null
  return Math.round(value)
}

export function formatFollowerCount(value: number): string {
  return value.toLocaleString('en-US')
}
