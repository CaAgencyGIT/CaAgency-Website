import { list } from '@vercel/blob'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import dotenv from 'dotenv'

dotenv.config({path: '.env.migration', quiet: true})
const target = '.migration/media'
await mkdir(target, {recursive: true})
const wrangler = '/home/user/.local/share/caagency-cloudflare-tools/node_modules/wrangler/bin/wrangler.js'
let cursor
const manifest = []
do {
  const page = await list({token: process.env.BLOB_READ_WRITE_TOKEN, cursor, limit: 1000})
  for (const blob of page.blobs) {
    if (blob.size > 25 * 1024 * 1024) throw new Error('Media object exceeds preview copy limit')
    const response = await fetch(blob.url, {signal: AbortSignal.timeout(30_000)})
    if (!response.ok) throw new Error(`Public media fetch failed: ${response.status}`)
    const bytes = new Uint8Array(await response.arrayBuffer())
    if (bytes.length !== blob.size) throw new Error('Media object size mismatch')
    const digest = createHash('sha256').update(bytes).digest('hex')
    const file = path.join(target, digest)
    await writeFile(file, bytes)
    const key = `imported/${blob.pathname}`
    const contentType = response.headers.get('content-type') || 'application/octet-stream'
    execFileSync(process.execPath, [wrangler,'r2','object','put',`caagency-website-preview-media/${key}`,'--file',file,'--content-type',contentType,'--remote'], {stdio:'pipe'})
    // Read the object back from isolated R2 and compare the actual bytes.
    const verify = file + '.r2'
    execFileSync(process.execPath, [wrangler,'r2','object','get',`caagency-website-preview-media/${key}`,'--file',verify,'--remote'], {stdio:'pipe'})
    const actual = createHash('sha256').update(await readFile(verify)).digest('hex')
    if (actual !== digest) throw new Error('R2 media integrity check failed')
    manifest.push({source:blob.url, destination:`/media/${key}`,size:bytes.length,sha256:digest})
    console.log(`Verified media ${manifest.length}: ${blob.pathname}`)
  }
  cursor = page.hasMore ? page.cursor : undefined
} while(cursor)
await writeFile('.migration/media-manifest.json',JSON.stringify(manifest,null,2)+'\n')
console.log(`Copied and verified ${manifest.length} public objects; original Vercel Blob store unchanged.`)
