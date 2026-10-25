import { describe, expect, it } from 'vitest'
import { validateContactPayload } from '@/lib/contact/validation'

const validBrand = {
  formType: 'brand',
  fullName: 'Amor',
  email: 'amor@example.com',
  phone: '+1 555 123 4567',
  company: 'CA Agency',
  message: 'We would like to discuss a campaign.',
  website: '',
  _formTime: 4000,
}

describe('validateContactPayload', () => {
  it('accepts a complete brand enquiry without mutating it', () => {
    const input = structuredClone(validBrand)
    const result = validateContactPayload(input)
    expect(result.ok).toBe(true)
    expect(input).toEqual(validBrand)
  })

  it('rejects bots and submissions completed too quickly', () => {
    expect(validateContactPayload({ ...validBrand, website: 'spam' })).toMatchObject({
      ok: false,
      code: 'BOT_REJECTED',
    })
    expect(validateContactPayload({ ...validBrand, _formTime: 100 })).toMatchObject({
      ok: false,
      code: 'BOT_REJECTED',
    })
  })

  it('allows legitimate autofill submissions after a short human-visible delay', () => {
    expect(validateContactPayload({ ...validBrand, _formTime: 1000 })).toMatchObject({
      ok: true,
    })
  })

  it('validates form-specific required fields and maximum lengths', () => {
    expect(validateContactPayload({ ...validBrand, company: '' })).toMatchObject({
      ok: false,
      code: 'INVALID_REQUEST',
    })
    expect(validateContactPayload({ ...validBrand, phone: 'x'.repeat(101) })).toMatchObject({
      ok: false,
      code: 'INVALID_REQUEST',
    })
  })

  it('treats phone, talent and timing as optional for brands and needs no budget', () => {
    expect(validateContactPayload({ ...validBrand, phone: '' })).toMatchObject({ ok: true })
    expect(validateContactPayload({ ...validBrand, timing: { mode: 'undecided' } })).toMatchObject({ ok: true })
    expect(validateContactPayload({ ...validBrand, timing: { mode: 'dates', from: '2026-12-10', to: '2026-12-01' } })).toMatchObject({ ok: false })
    expect(validateContactPayload({ ...validBrand, message: '' })).toMatchObject({ ok: false })
  })

  const validTalent = {
    formType: 'talent', fullName: 'Gvantsa', email: 'g@example.com', phone: '', message: 'Hello',
    website: '', _formTime: 4000,
    profiles: [{ platform: 'instagram', handle: '@iamgvantsi', followers: '106K' }],
  }

  it('requires at least one complete social profile with a count, no subject', () => {
    expect(validateContactPayload(validTalent)).toMatchObject({ ok: true })
    expect(validateContactPayload({ ...validTalent, profiles: [] })).toMatchObject({ ok: false })
    expect(validateContactPayload({ ...validTalent, profiles: [{ platform: 'instagram', handle: '@x', followers: '' }] })).toMatchObject({ ok: false })
    expect(validateContactPayload({ ...validTalent, profiles: [{ platform: 'instagram', handle: '@x', followers: 'lots' }] })).toMatchObject({ ok: false })
  })

  it('keeps separate counts for several profiles on the same platform', () => {
    const result = validateContactPayload({
      ...validTalent,
      profiles: [
        { platform: 'instagram', handle: '@one', followers: '125,000' },
        { platform: 'instagram', handle: 'https://www.instagram.com/two/', followers: '1.2M' },
      ],
    })
    expect(result.ok && result.data.formType === 'talent' && result.data.profiles.map((p) => p.followers)).toEqual([125000, 1200000])
  })

  it('rejects unsafe media kit links and unknown categories', () => {
    expect(validateContactPayload({ ...validTalent, mediaKit: 'javascript:alert(1)' })).toMatchObject({ ok: false })
    expect(validateContactPayload({ ...validTalent, categories: ['gaming'] })).toMatchObject({ ok: false })
  })
})
