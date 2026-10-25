import { describe, expect, it } from 'vitest'
import { parseFollowerCount } from '@/lib/contact/followers'

describe('parseFollowerCount', () => {
  it.each([
    ['125000', 125000],
    ['125,000', 125000],
    ['125.000', 125000],
    ['125 000', 125000],
    ['125K', 125000],
    ['125k', 125000],
    ['1.2M', 1200000],
    ['1,2M', 1200000],
    ['640.9K', 640900],
    ['2B', 2000000000],
    ['0', 0],
  ])('reads %s as %d', (input, expected) => {
    expect(parseFollowerCount(input)).toBe(expected)
  })

  it.each(['', 'lots', '1.5', '12,50', '1.2.3M', '-5', '5KK'])('rejects %j', (input) => {
    expect(parseFollowerCount(input)).toBeNull()
  })
})
