import { readdir, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(entries.map(async entry => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : ['/' + path.relative(path.join(root, 'public'), full).split(path.sep).join('/')]
  }))
  return nested.flat()
}
await mkdir(path.join(root, 'lib/generated'), { recursive: true })
await writeFile(path.join(root, 'lib/generated/public-assets.json'), JSON.stringify((await walk(path.join(root, 'public'))).sort()) + '\n')
