import { after } from 'next/server'

/**
 * Empties Cloudflare's edge cache for the public site after an admin edit, so
 * changes show at once instead of after the 5-minute edge TTL. Uses a
 * purge-only token (CLOUDFLARE_PURGE_TOKEN, set by
 * infra/cloudflare/setup-purge-token.sh); without it this does nothing.
 */
const PUBLIC_HOST = 'caagency.com'
const DEFAULT_ZONE_ID = '46d973db1fcb2ce8dd91f539a2adc386'

export async function purgePublicSite(fetchImpl: typeof fetch = fetch): Promise<'skipped' | 'purged' | 'failed'> {
  const token = process.env.CLOUDFLARE_PURGE_TOKEN?.trim()
  if (!token) return 'skipped'
  const zone = process.env.CLOUDFLARE_ZONE_ID?.trim() || DEFAULT_ZONE_ID
  try {
    const res = await fetchImpl(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ hosts: [PUBLIC_HOST] }),
      signal: AbortSignal.timeout(10_000),
    })
    if (res.ok) return 'purged'
    console.error(`[edge-purge] Cloudflare answered HTTP ${res.status}`)
    return 'failed'
  } catch (err) {
    console.error('[edge-purge] purge failed:', err instanceof Error ? err.message : err)
    return 'failed'
  }
}

/** Purge after the response is sent (inside a request), or right away otherwise. */
export function schedulePurgePublicSite(): void {
  if (!process.env.CLOUDFLARE_PURGE_TOKEN) return
  try {
    after(() => purgePublicSite().then(() => undefined))
  } catch {
    void purgePublicSite()
  }
}
