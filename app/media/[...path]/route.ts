import { createReadStream } from 'node:fs'
import { Readable } from 'node:stream'
import path from 'node:path'
import { describeMedia } from '@/lib/server-storage'

const types: Record<string, string> = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.avif': 'image/avif', '.svg': 'image/svg+xml' }

export async function GET(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params
  if (!segments.length || segments.some(segment => !segment || segment === '.' || segment === '..')) return new Response('Not found', { status: 404 })
  try {
    const object = await describeMedia(segments.join('/'))
    const headers = new Headers({
      'ETag': object.etag, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': types[path.extname(object.filename).toLowerCase()] ?? 'application/octet-stream', 'Content-Length': String(object.size),
    })
    if (request.headers.get('if-none-match') === object.etag) return new Response(null, { status: 304, headers })
    const body = Readable.toWeb(createReadStream(object.filename))
    return new Response(body as ReadableStream<Uint8Array>, { headers })
  } catch { return new Response('Not found', { status: 404 }) }
}
