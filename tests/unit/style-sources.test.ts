import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const root = process.cwd()
const read = (file: string) => readFileSync(path.resolve(root, file), 'utf8')
// Static, side-effect and dynamic imports plus re-exports. TypeScript 7 no longer ships ts.preProcessFile.
const IMPORT = /(?:\bimport|\bexport)\s[^'"]*?\bfrom\s*['"]([^'"]+)['"]|\bimport\s*['"]([^'"]+)['"]|\bimport\(\s*['"]([^'"]+)['"]\s*\)/g
const importedFiles = (source: string) => [...source.matchAll(IMPORT)].map((m) => m[1] ?? m[2] ?? m[3])

describe('route style coverage', () => {
  it('every public page loads its utility stylesheet, including new page templates', () => {
    const pages = readdirSync(path.join(root, 'app'), { recursive: true })
      .filter((name) => typeof name === 'string' && name.endsWith('page.tsx') && !name.split(path.sep).includes('admin')) as string[]
    for (const file of pages) {
      expect(read(`app/${file}`), file).toMatch(/^import ['"]@\/app\/(home|public)-utilities\.css['"]/m)
    }
  })

  it('homepage imports cannot introduce components excluded from its CSS', () => {
    const excluded = [...read('app/home-utilities.css').matchAll(/@source not ['"]([^'"]+)['"]/g)]
      .map((match) => path.resolve(root, 'app', match[1]))
    const pending = ['app/(site)/page.tsx', 'app/(site)/layout.tsx', 'app/[locale]/page.tsx', 'app/[locale]/layout.tsx']
      .map((file) => path.join(root, file))
    const visited = new Set<string>()
    while (pending.length) {
      const file = pending.pop()!
      if (visited.has(file)) continue
      visited.add(file)
      expect(excluded.some((base) => file === base || file.startsWith(`${base}${path.sep}`)), path.relative(root, file))
        .toBe(false)
      if (!/\.(tsx?|m?js)$/.test(file)) continue
      for (const specifier of importedFiles(read(file))) {
        const base = specifier.startsWith('@/') ? path.join(root, specifier.slice(2))
          : specifier.startsWith('.') ? path.resolve(path.dirname(file), specifier) : undefined
        if (!base) continue
        const candidates = [base, ...['.ts', '.tsx', '.js', '.mjs', '.json'].map((ext) => `${base}${ext}`),
          ...['index.ts', 'index.tsx', 'index.js'].map((name) => path.join(base, name))]
        const dependency = candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile())
        if (dependency) pending.push(dependency)
      }
    }
  })
})
