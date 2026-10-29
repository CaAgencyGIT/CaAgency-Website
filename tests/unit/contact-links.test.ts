import { describe, expect, it } from 'vitest'
import { isValidHandle, normalizeLink, validateContactPayload } from '@/lib/contact/validation'

describe('normalizeLink', () => {
  it.each([
    ['instagram.com/maria', 'https://instagram.com/maria'],
    ['www.tiktok.com/@maria', 'https://www.tiktok.com/@maria'],
    ['https://linktr.ee/maria', 'https://linktr.ee/maria'],
    ['maria.tahan', 'maria.tahan'],
    ['@maria', '@maria'],
  ])('%s -> %s', (input, expected) => {
    expect(normalizeLink(input)).toBe(expected)
  })

  it('adds https:// to a bare domain only when asked', () => {
    expect(normalizeLink('mariaportfolio.com')).toBe('mariaportfolio.com')
    expect(normalizeLink('mariaportfolio.com', { bareDomain: true })).toBe('https://mariaportfolio.com')
  })
})

describe('isValidHandle', () => {
  it.each(['@maria.tahan', 'maria_', 'instagram.com/maria', 'tiktok.com/@maria', 'youtube.com/@Maria', 'Maria Tahan', '@زهرة'])('accepts %s', (h) => {
    expect(isValidHandle(h)).toBe(true)
  })
  it.each(['javascript:alert(1)', 'a  b', '<script>', '@'])('rejects %s', (h) => {
    expect(isValidHandle(h)).toBe(false)
  })
})

describe('talent links without https://', () => {
  const base = {
    formType: 'talent', fullName: 'Maria', email: 'maria@example.com', phone: '', message: 'Hi', website: '', _formTime: 5000,
    basedIn: 'Dubai', categories: [],
  }
  it('stores profile and media kit links with https://', () => {
    const result = validateContactPayload({
      ...base,
      profiles: [{ platform: 'tiktok', handle: 'tiktok.com/@maria', followers: '10K+' }],
      mediaKit: 'drive.google.com/file/d/abc',
    })
    expect(result).toMatchObject({ ok: true, data: { mediaKit: 'https://drive.google.com/file/d/abc', profiles: [{ handle: 'https://tiktok.com/@maria', followers: 10000 }] } })
  })
})
