import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { WORLD_DOTS_SRC, worldDotsSvg } from '@/lib/data/world-dots-svg'

// The map image is committed; it must match the land mask it is drawn from.
describe('world dots svg', () => {
  it('matches lib/data/world-map-dots.ts', () => {
    expect(readFileSync(path.join(process.cwd(), 'public', WORLD_DOTS_SRC), 'utf8')).toBe(worldDotsSvg())
  })
})
