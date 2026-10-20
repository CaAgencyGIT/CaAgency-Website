import { describe, expect, it } from 'vitest'
import { NextRequest } from 'next/server'
import { isAllowedOrigin, rejectCrossOrigin } from '@/lib/csrf'

describe('isAllowedOrigin', () => {
  it('allows production domains and dev hosts', () => {
    expect(isAllowedOrigin('https://caagency.com')).toBe(true)
    expect(isAllowedOrigin('https://www.caagency.co.uk')).toBe(true)
    expect(isAllowedOrigin('http://localhost:3000')).toBe(true)
  })

  it('rejects foreign and lookalike origins', () => {
    expect(isAllowedOrigin('https://evil.example')).toBe(false)
    expect(isAllowedOrigin('https://caagency.evil.example')).toBe(false)
    expect(isAllowedOrigin('https://caagencyx-abc.vercel.app')).toBe(false)
    expect(isAllowedOrigin('https://caagency-abc123-sweetflips-projects.vercel.app')).toBe(false)
    expect(isAllowedOrigin('https://other.vercel.app')).toBe(false)
    expect(isAllowedOrigin('not a url')).toBe(false)
  })

  it('allows requests without an origin', () => {
    expect(isAllowedOrigin(null)).toBe(true)
  })
})

describe('rejectCrossOrigin', () => {
  it('returns 403 for a foreign origin', () => {
    const request = new NextRequest('http://localhost/api/talents', {
      method: 'POST',
      headers: { origin: 'https://evil.example' },
    })
    const response = rejectCrossOrigin(request)
    expect(response?.status).toBe(403)
  })

  it('returns null for allowed and missing origins', () => {
    const allowed = new NextRequest('http://localhost/api/talents', {
      method: 'POST',
      headers: { origin: 'https://caagency.com' },
    })
    expect(rejectCrossOrigin(allowed)).toBeNull()
    expect(rejectCrossOrigin(new NextRequest('http://localhost/api/talents', { method: 'POST' }))).toBeNull()
  })
})
