// Tiny blurred previews (about 300 bytes each) for the photos that sit in the
// first screen: the homepage collage and the talent cards. They are inlined in
// the HTML, so a tile shows a soft version of its photo as soon as the page
// arrives instead of an empty grey box (Oct 2026). The output is committed:
// the production deploy regenerates pages from source without running this
// script, and a unit test checks it stays in sync with public/.
//   node scripts/build-image-blur.mjs
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
export const BLUR_DIRS = ['images/hero/collage-v2', 'images/talents/cards']

const out = {}
for (const dir of BLUR_DIRS) {
  for (const name of (await readdir(path.join(root, 'public', dir))).sort()) {
    if (!/\.(jpe?g|png|webp|avif)$/i.test(name)) continue
    const buf = await sharp(path.join(root, 'public', dir, name)).resize(12).webp({ quality: 40 }).toBuffer()
    out[`/${dir}/${name}`] = `data:image/webp;base64,${buf.toString('base64')}`
  }
}
await writeFile(path.join(root, 'lib/generated/image-blur.json'), JSON.stringify(out, null, 0).replace(/","/g, '",\n"') + '\n')
console.log(`image-blur: ${Object.keys(out).length} previews`)
