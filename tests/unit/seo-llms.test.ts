import { beforeEach, describe, expect, it, vi } from 'vitest'

const findTalents = vi.fn()
const findPosts = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    talent: { findMany: (...args: unknown[]) => findTalents(...args) },
    post: { findMany: (...args: unknown[]) => findPosts(...args) },
  },
}))

const { buildLlmsFullTxt, buildLlmsTxt } = await import('@/lib/seo/llms')

const bio =
  'Jane Doe is a skincare creator from Dubai with 120K Instagram followers. She reviews K-beauty routines and SPF for sensitive skin.'

describe('llms.txt talent roster', () => {
  beforeEach(() => {
    findPosts.mockResolvedValue([])
    findTalents.mockResolvedValue([
      { name: 'Jane Doe', slug: 'jane-doe', bio, instagramUrl: 'https://www.instagram.com/janedoe/', tiktokUrl: null, youtubeUrl: null },
      { name: 'No Bio', slug: 'no-bio', bio: 'Short.', instagramUrl: null, tiktokUrl: null, youtubeUrl: null },
    ])
  })

  it('lists creators with a real bio and leaves thin profiles out', async () => {
    const txt = await buildLlmsTxt()
    expect(txt).toContain('## Creators on the CA Agency talent roster')
    expect(txt).toContain('- [Jane Doe](https://caagency.com/talents/jane-doe): Jane Doe is a skincare creator')
    expect(txt).not.toContain('no-bio')
  })

  it('gives full profiles with channels in llms-full.txt', async () => {
    const txt = await buildLlmsFullTxt()
    expect(txt).toContain('### Jane Doe')
    expect(txt).toContain('- Roster: CA Agency talent roster\n- Channels: Instagram https://www.instagram.com/janedoe/')
    expect(txt).toContain('She reviews K-beauty routines')
  })

  it('omits the section when the talent query fails', async () => {
    findTalents.mockRejectedValue(new Error('db down'))
    const txt = await buildLlmsTxt()
    expect(txt).not.toContain('## Creators on the CA Agency talent roster')
    expect(txt).toContain('## Services')
  })
})
