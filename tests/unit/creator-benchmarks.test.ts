import { describe, expect, it } from 'vitest'
import { creatorBenchmarks2026 as data } from '@/lib/data/creator-benchmarks-2026'

describe('creator benchmarks 2026 data', () => {
  it('has video-length shares that add up to about 100%', () => {
    const total = data.tiktok.lengths.reduce((sum, l) => sum + l.shareOfVideos, 0)
    expect(total).toBeGreaterThanOrEqual(98)
    expect(total).toBeLessThanOrEqual(102)
  })

  it('has follower bands that cover every creator', () => {
    expect(data.tiktok.tiers.reduce((sum, t) => sum + t.creators, 0)).toBe(data.tiktok.creators)
    expect(data.instagram.tiers.reduce((sum, t) => sum + t.creators, 0)).toBe(data.instagram.creators)
  })

  it('keeps percentages in range', () => {
    for (const t of [...data.tiktok.tiers, ...data.instagram.tiers]) {
      expect(t.viewsPerFollower).toBeGreaterThan(0)
      expect(t.viewsPerFollower).toBeLessThan(500)
    }
    expect(data.tiktok.shareOver1M).toBeLessThan(data.tiktok.shareOver100K)
  })
})
