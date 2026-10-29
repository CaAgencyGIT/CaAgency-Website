import { describe, expect, it } from 'vitest'
import sharp from 'sharp'
import path from 'node:path'
import crops from '@/lib/media/collage-desktop.json'
import { homeCollageTiles } from '@/lib/data/redesign-media'

describe('desktop collage derivatives', () => {
  for (const [source, asset] of Object.entries(crops)) {
    it(`preserves the source pixels and approved framing for ${path.basename(source)}`, async () => {
      const tile = homeCollageTiles.find(tile => tile.image.src === source)!
      expect(tile).toBeDefined()
      expect(asset.position).toBe(tile.position)
      const [original, cropped] = await Promise.all([
        sharp(path.join('public', source)).extract(asset.crop).raw().toBuffer({ resolveWithObject: true }),
        sharp(path.join('public', asset.src)).raw().toBuffer({ resolveWithObject: true }),
      ])
      expect(cropped.info).toEqual(original.info)
      // A source-quality regression must fail even if the dimensions still match.
      expect(cropped.data.equals(original.data)).toBe(true)
    })
  }
})
