type Bucket = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

const DEFAULT_LIMIT = 10
const DEFAULT_WINDOW_MS = 60_000
let maxBuckets = 10_000

/**
 * Fixed-window in-memory rate limiter keyed by caller (usually client IP).
 * Each server process has its own map, so this bounds abuse per
 * instance rather than globally; it is a defense-in-depth layer, not a WAF.
 */
export function checkRateLimit(
  key: string,
  options: { limit?: number; windowMs?: number } = {},
): { limited: boolean; retryAfterSeconds: number } {
  const limit = options.limit ?? DEFAULT_LIMIT
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS
  const now = Date.now()

  pruneExpired(now)

  if (buckets.size >= maxBuckets && !buckets.has(key)) {
    const oldest = buckets.keys().next().value
    if (oldest !== undefined) buckets.delete(oldest)
  }

  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { limited: false, retryAfterSeconds: Math.ceil(windowMs / 1000) }
  }

  if (bucket.count >= limit) {
    return {
      limited: true,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    }
  }

  bucket.count += 1
  return {
    limited: false,
    retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
  }
}

export function clearRateLimitsForTests(): void {
  buckets.clear()
}

export function setRateLimitMaxBucketsForTests(value: number): void {
  maxBuckets = value
}

export function rateLimitBucketCountForTests(): number {
  return buckets.size
}

function pruneExpired(now: number): void {
  if (buckets.size < maxBuckets) return
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
}
