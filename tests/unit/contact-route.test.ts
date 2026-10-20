import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'

const mocks = vi.hoisted(() => ({
  verifyTurnstile: vi.fn(),
  deliverContact: vi.fn(),
}))

vi.mock('@/lib/contact/turnstile', () => ({ verifyTurnstile: mocks.verifyTurnstile }))
vi.mock('@/lib/contact/delivery', () => ({ deliverContact: mocks.deliverContact }))

import { POST } from '@/app/api/contact/route'
import { clearRateLimitsForTests } from '@/lib/rate-limit'

const validPayload = {
  formType: 'brand',
  fullName: 'Amor',
  email: 'amor@example.com',
  phone: '+1 555 123 4567',
  company: 'CA Agency',
  budget: '20-40k',
  message: 'We would like to discuss a campaign.',
  website: '',
  _formTime: 1000,
}

function jsonRequest(body: unknown, headers?: Record<string, string>) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    mocks.verifyTurnstile.mockReset().mockResolvedValue(true)
    mocks.deliverContact.mockReset().mockResolvedValue({ preview: false })
    clearRateLimitsForTests()
  })

  it('returns success only after delivery', async () => {
    const response = await POST(jsonRequest(validPayload))
    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ success: true })
    expect(mocks.deliverContact).toHaveBeenCalledOnce()
  })

  it('rejects failed verification and permits valid tokens', async () => {
    mocks.verifyTurnstile.mockResolvedValueOnce(false)
    const rejected = await POST(jsonRequest(validPayload))
    expect(rejected.status).toBe(403)
    await expect(rejected.json()).resolves.toMatchObject({ code: 'BOT_REJECTED' })

    mocks.verifyTurnstile.mockResolvedValueOnce(true)
    const verified = await POST(jsonRequest(validPayload))
    expect(verified.status).toBe(200)
  })

  it('does not deliver a rejected challenge', async () => {
    mocks.verifyTurnstile.mockResolvedValueOnce(false)
    expect((await POST(jsonRequest(validPayload))).status).toBe(403)
    expect(mocks.deliverContact).not.toHaveBeenCalled()
  })

  it('returns validation and provider failures with non-success statuses', async () => {
    const invalid = await POST(jsonRequest({ ...validPayload, email: 'invalid' }))
    expect(invalid.status).toBe(400)

    mocks.deliverContact.mockRejectedValueOnce(new Error('smtp unavailable'))
    const deliveryFailure = await POST(jsonRequest(validPayload))
    expect(deliveryFailure.status).toBe(502)
    await expect(deliveryFailure.json()).resolves.toMatchObject({ code: 'DELIVERY_FAILED' })
  })

  it('enforces media type and declared payload size', async () => {
    const wrongType = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: 'text',
      headers: { 'content-type': 'text/plain' },
    })
    expect((await POST(wrongType)).status).toBe(400)
    expect((await POST(jsonRequest(validPayload, { 'content-length': '20000' }))).status).toBe(400)
  })

  it('returns 429 once the per-IP rate limit is exceeded', async () => {
    for (let i = 0; i < 10; i++) {
      expect((await POST(jsonRequest(validPayload))).status).toBe(200)
    }
    const limited = await POST(jsonRequest(validPayload))
    expect(limited.status).toBe(429)
    await expect(limited.json()).resolves.toMatchObject({ code: 'RATE_LIMITED' })
    expect(limited.headers.get('Retry-After')).toBeTruthy()
  })
})
