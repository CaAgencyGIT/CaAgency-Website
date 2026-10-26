import { describe, expect, it } from 'vitest'
import { caseStudies, caseStudySeoTitle } from '@/lib/data/case-studies'

describe('case study search titles', () => {
  it('are unique, so Google never sees two studies with the same title', () => {
    const titles = caseStudies.map((cs) => caseStudySeoTitle(cs))
    const dupes = titles.filter((t, i) => titles.indexOf(t) !== i)
    expect(dupes).toEqual([])
  })

  it('name the creator on creator showcases', () => {
    expect(caseStudySeoTitle({ brand: 'Patrick Ta', creatorName: 'Beatrix Ramosaj' })).toBe('Patrick Ta × Beatrix Ramosaj Influencer Case Study')
    expect(caseStudySeoTitle({ brand: 'YSL Beauty' })).toBe('YSL Beauty Influencer Marketing Case Study')
  })
})
