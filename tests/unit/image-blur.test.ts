import { readdirSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import previews from '@/lib/generated/image-blur.json'
import { blurProps } from '@/lib/media/blur'

const DIRS = ['images/hero/collage-v2', 'images/talents/cards']

describe('blurred photo previews', () => {
  it('has a preview for every collage and talent-card photo (run scripts/build-image-blur.mjs)', () => {
    const expected = DIRS.flatMap((dir) =>
      readdirSync(path.join(process.cwd(), 'public', dir))
        .filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name))
        .map((name) => `/${dir}/${name}`),
    ).sort()
    expect(Object.keys(previews).sort()).toEqual(expected)
  })

  it('keeps every preview tiny, so inlining them does not bloat the HTML', () => {
    for (const url of Object.values(previews)) {
      expect(url).toMatch(/^data:image\/webp;base64,/)
      expect(url.length).toBeLessThan(600)
    }
  })

  it('returns blur props for a known photo, also from an absolute URL, and nothing for an unknown one', () => {
    const key = Object.keys(previews)[0]
    expect(blurProps(key)).toEqual({ placeholder: 'blur', blurDataURL: (previews as Record<string, string>)[key] })
    expect(blurProps(`https://caagency.com${key}?v=2`)).toMatchObject({ placeholder: 'blur' })
    expect(blurProps('/images/unknown.jpg')).toEqual({})
  })
})
