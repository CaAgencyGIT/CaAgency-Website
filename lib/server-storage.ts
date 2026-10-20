import { mkdir, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'

export function mediaPath(key: string): string {
  const root = path.resolve(process.env.MEDIA_DIRECTORY || '.migration/media')
  const filename = path.resolve(root, key)
  if (!filename.startsWith(root + path.sep) || key.includes('\0') || key.includes('\\')) throw new Error('Invalid media path')
  return filename
}

export async function saveMedia(key: string, bytes: Uint8Array): Promise<string> {
  const filename = mediaPath(key)
  await mkdir(path.dirname(filename), { recursive: true })
  await writeFile(filename, bytes, { mode: 0o640, flag: 'wx' })
  return `/media/${key}`
}

export async function describeMedia(key: string) {
  const filename = mediaPath(key)
  const info = await stat(filename)
  if (!info.isFile()) throw new Error('Not a media file')
  return { filename, size: info.size, etag: `"${info.size.toString(16)}-${info.mtimeMs.toString(16)}"` }
}
