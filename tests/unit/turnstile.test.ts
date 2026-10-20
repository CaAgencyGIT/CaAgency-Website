import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { verifyTurnstile } from '@/lib/contact/turnstile'
import { readBoundedJson } from '@/lib/contact/read-json'

const fetchMock = vi.fn()
beforeEach(() => { vi.stubGlobal('fetch', fetchMock); fetchMock.mockReset(); vi.stubEnv('TURNSTILE_SECRET', 'test-secret'); vi.stubEnv('TURNSTILE_HOSTNAMES', 'preview.example.com') })
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs() })

describe('contact verification', () => {
  it('requires success, the contact action, and the exact frontend hostname', async () => {
    for (const result of [
      { success: false, action: 'contact', hostname: 'preview.example.com' },
      { success: true, action: 'signup', hostname: 'preview.example.com' },
      { success: true, action: 'contact', hostname: 'evil.preview.example.com' },
    ]) {
      fetchMock.mockResolvedValueOnce(Response.json(result))
      expect(await verifyTurnstile('token', '192.0.2.1')).toBe(false)
    }
    fetchMock.mockResolvedValueOnce(Response.json({ success: true, action: 'contact', hostname: 'preview.example.com' }))
    expect(await verifyTurnstile('token', '192.0.2.1')).toBe(true)
  })
  it('fails closed for missing tokens, provider errors, and timeouts', async () => {
    expect(await verifyTurnstile('', '192.0.2.1')).toBe(false)
    expect(fetchMock).not.toHaveBeenCalled()
    fetchMock.mockResolvedValueOnce(new Response('unavailable', { status: 503 }))
    expect(await verifyTurnstile('token', '192.0.2.1')).toBe(false)
    fetchMock.mockRejectedValueOnce(new Error('timeout'))
    expect(await verifyTurnstile('token', '192.0.2.1')).toBe(false)
  })
  it('rejects oversized streamed requests without relying on Content-Length', async () => {
    const request = new Request('http://localhost', { method: 'POST', body: JSON.stringify({ message: 'x'.repeat(20000) }) })
    await expect(readBoundedJson(request, 16384)).rejects.toThrow('Body too large')
  })
})
