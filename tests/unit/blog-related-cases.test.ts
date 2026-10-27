import { describe, expect, it } from 'vitest'
import type { CaseStudy } from '@/lib/data/case-studies'
import { relatedCaseStudiesForPost } from '@/lib/blog-related-cases'

const study = (slug: string, brand: string, vertical: string) => ({ slug, brand, vertical }) as CaseStudy
const studies = [
  study('honor', 'HONOR', 'Consumer Tech'),
  study('nars', 'NARS', 'Makeup'),
  study('anua', 'Anua', 'K-Beauty Skincare'),
  study('anua-2', 'Anua', 'K-Beauty Skincare'),
  study('torriden', 'Torriden', 'K-Beauty Skincare'),
  study('gisou', 'Gisou', 'Haircare'),
]
const post = (slug: string, title: string, tags: string[] = []) => ({ slug, title, categories: [], tags })

describe('relatedCaseStudiesForPost', () => {
  it('puts studies that fit the post topic first', () => {
    const picked = relatedCaseStudiesForPost(post('k-beauty-guide', 'K-Beauty Influencer Marketing', ['korean skincare']), studies, 2)
    expect(picked.map((cs) => cs.vertical)).toEqual(['K-Beauty Skincare', 'K-Beauty Skincare'])
  })

  it('never shows the same brand twice', () => {
    const picked = relatedCaseStudiesForPost(post('k-beauty-guide', 'K-Beauty Influencer Marketing'), studies, 3)
    expect(new Set(picked.map((cs) => cs.brand)).size).toBe(picked.length)
  })

  it('still returns studies for posts without a matching topic', () => {
    expect(relatedCaseStudiesForPost(post('ftc-rules', 'FTC Disclosure Guidelines'), studies)).toHaveLength(3)
  })

  it('is stable for a post and varies between posts', () => {
    const a = relatedCaseStudiesForPost(post('post-a', 'Agency vs in-house'), studies)
    expect(relatedCaseStudiesForPost(post('post-a', 'Agency vs in-house'), studies)).toEqual(a)
    const others = ['post-b', 'post-c', 'post-d', 'post-e'].map((slug) => relatedCaseStudiesForPost(post(slug, 'Agency vs in-house'), studies))
    expect(others.some((o) => o[0].slug !== a[0].slug)).toBe(true)
  })

  it('returns nothing when there are no studies', () => {
    expect(relatedCaseStudiesForPost(post('x', 'Beauty'), [])).toEqual([])
  })
})
