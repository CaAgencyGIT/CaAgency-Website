import { afterEach, describe, expect, it, vi } from 'vitest'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { describeMedia, mediaPath, saveMedia } from '@/lib/server-storage'

const directories: string[] = []
afterEach(async () => { vi.unstubAllEnvs(); await Promise.all(directories.splice(0).map(directory => rm(directory, { recursive: true, force: true }))) })

describe('local media storage', () => {
  it('rejects traversal and absolute paths outside the media directory', () => {
    vi.stubEnv('MEDIA_DIRECTORY', '/var/lib/caagency-website/media')
    for (const key of ['../app.env', '/etc/passwd', '../../private', 'images\\..\\private', 'x\0y']) expect(() => mediaPath(key)).toThrow()
  })
  it('persists exact bytes and refuses to overwrite an existing immutable URL', async () => {
    const directory = await mkdtemp(path.join(os.tmpdir(), 'caagency-media-')); directories.push(directory)
    vi.stubEnv('MEDIA_DIRECTORY', directory)
    const bytes = new Uint8Array([1, 2, 3, 4])
    expect(await saveMedia('talents/test.png', bytes)).toBe('/media/talents/test.png')
    expect(new Uint8Array(await readFile(path.join(directory, 'talents/test.png')))).toEqual(bytes)
    expect((await describeMedia('talents/test.png')).size).toBe(4)
    await expect(saveMedia('talents/test.png', new Uint8Array([9]))).rejects.toThrow()
  })
})
