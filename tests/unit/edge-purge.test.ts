import { afterEach, describe, expect, it, vi } from 'vitest'
import { purgePublicSite } from '@/lib/edge-purge'

afterEach(() => {
  delete process.env.CLOUDFLARE_PURGE_TOKEN
  delete process.env.CLOUDFLARE_ZONE_ID
})

describe('purgePublicSite', () => {
  it('does nothing without a purge token', async () => {
    const fetchImpl = vi.fn()
    expect(await purgePublicSite(fetchImpl)).toBe('skipped')
    expect(fetchImpl).not.toHaveBeenCalled()
  })

  it('purges only the public apex host with the token', async () => {
    process.env.CLOUDFLARE_PURGE_TOKEN = ' purge-token '
    const fetchImpl = vi.fn().mockResolvedValue(new Response('{"success":true}', { status: 200 }))
    expect(await purgePublicSite(fetchImpl)).toBe('purged')
    const [url, init] = fetchImpl.mock.calls[0]
    expect(url).toBe('https://api.cloudflare.com/client/v4/zones/46d973db1fcb2ce8dd91f539a2adc386/purge_cache')
    expect(init.headers.Authorization).toBe('Bearer purge-token')
    expect(JSON.parse(init.body)).toEqual({ hosts: ['caagency.com'] })
  })

  it('never throws on API or network errors', async () => {
    process.env.CLOUDFLARE_PURGE_TOKEN = 't'
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(await purgePublicSite(vi.fn().mockResolvedValue(new Response('no', { status: 403 })))).toBe('failed')
    expect(await purgePublicSite(vi.fn().mockRejectedValue(new Error('offline')))).toBe('failed')
  })
})
