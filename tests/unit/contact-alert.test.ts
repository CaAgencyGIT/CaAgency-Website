import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { alertContactFailure, resetContactAlertThrottle } from '@/lib/contact/alert'

describe('contact failure alert', () => {
  const fetchMock = vi.fn()
  beforeEach(() => {
    resetContactAlertThrottle()
    fetchMock.mockReset().mockResolvedValue(new Response(null, { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    vi.stubEnv('NTFY_TOPIC', 'test-topic')
  })
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('pushes the reason without any visitor details', async () => {
    expect(await alertContactFailure(new Error('Microsoft did not accept the contact email (403)'), 1_000)).toBe(true)
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body.topic).toBe('test-topic')
    expect(body.message).toContain('(403)')
  })

  it('sends at most one push per 30 minutes', async () => {
    await alertContactFailure(new Error('x'), 1_000)
    expect(await alertContactFailure(new Error('x'), 1_000 + 29 * 60_000)).toBe(false)
    expect(await alertContactFailure(new Error('x'), 1_000 + 31 * 60_000)).toBe(true)
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('does nothing without a topic and survives an ntfy outage', async () => {
    vi.stubEnv('NTFY_TOPIC', '')
    expect(await alertContactFailure(new Error('x'), 1_000)).toBe(false)
    vi.stubEnv('NTFY_TOPIC', 'test-topic')
    fetchMock.mockRejectedValueOnce(new Error('offline'))
    expect(await alertContactFailure(new Error('x'), 2_000)).toBe(false)
  })
})
