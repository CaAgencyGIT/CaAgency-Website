import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import mobileVideos from '@/lib/generated/mobile-videos.json'

// The manifest is committed (the production deploy regenerates pages from
// source without running the build script), so it must match public/.
describe('mobile video manifest', () => {
  it('lists exactly the phone encodes in public/videos', () => {
    const found: string[] = []
    for (const dir of ['videos/redesign', 'videos/work']) {
      const full = path.join(process.cwd(), 'public', dir)
      if (!existsSync(full)) continue
      for (const name of readdirSync(full)) {
        if (name.endsWith('-m.mp4')) found.push(`/${dir}/${name.replace(/-m\.mp4$/, '.mp4')}`)
      }
    }
    expect([...mobileVideos].sort()).toEqual(found.sort())
  })
})
