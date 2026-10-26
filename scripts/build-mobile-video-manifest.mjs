// Lists the "-m.mp4" phone encodes in public/videos so the client only asks
// for a mobile file that actually exists (otherwise it falls back to the
// full-quality original). The output is committed: the production deploy
// regenerates pages from source without running this script, and a unit
// test checks it stays in sync with public/.
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const found = []
for (const dir of ['videos/redesign', 'videos/work']) {
  for (const name of await readdir(path.join(root, 'public', dir)).catch(() => [])) {
    if (name.endsWith('-m.mp4')) found.push(`/${dir}/${name.replace(/-m\.mp4$/, '.mp4')}`)
  }
}
await writeFile(path.join(root, 'lib/generated/mobile-videos.json'), JSON.stringify(found.sort()) + '\n')
