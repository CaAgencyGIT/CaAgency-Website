// Pre-crop only pixels the desktop mosaic already hides with object-fit.
// Keep decoded pixels lossless here; Next still serves the same quality=90.
// Run: npx tsx scripts/build-desktop-collage.ts
// Bump the output directory version when sources/framing change (immutable URLs).
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { homeCollageTiles } from '../lib/data/redesign-media'

const output = '/images/hero/collage-desktop-v1'
const manifest: Record<string, { src: string; position: string; crop: { left: number; top: number; width: number; height: number } }> = {}
await mkdir(path.join('public', output), { recursive: true })

for (const tile of homeCollageTiles) {
  const stacked = tile.area === 'yasaman' || tile.area === 'khutjo'
  // A little wider than the full-height tiles, or narrower than the stacked
  // tiles, so the browser's final cover crop preserves the original framing.
  const ratio = stacked ? 0.95 : 0.6
  const source = tile.image
  if (stacked ? source.width / source.height >= ratio : source.width / source.height <= ratio) continue
  const position = tile.position ?? '50% 30%'
  const [x, y] = position.split(' ').map(v => Number.parseFloat(v) / 100)
  const width = stacked ? source.width : Math.round(source.height * ratio)
  const height = stacked ? Math.round(source.width / ratio) : source.height
  const crop = { left: Math.round((source.width - width) * x), top: Math.round((source.height - height) * y), width, height }
  const src = `${output}/${path.parse(source.src).name}.webp`
  await sharp(path.join('public', source.src)).extract(crop).webp({ lossless: true, effort: 6 }).toFile(path.join('public', src))
  manifest[source.src] = { src, position, crop }
  console.log(`${source.src} → ${src} (${width}×${height}, lossless)`)
}
await writeFile('lib/media/collage-desktop.json', JSON.stringify(manifest, null, 2) + '\n')
