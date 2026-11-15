import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { locales } from '@/i18n/config'

type Tree = { [key: string]: unknown }

const SOURCE_DIRS = ['app', 'components', 'lib']
// const t = useTranslations('ns') | const t = await getTranslations('ns')
// | const t = await getTranslations({ locale, namespace: 'ns' })
const BINDING =
  /const\s+(\w+)\s*=\s*(?:await\s+)?(?:useTranslations|getTranslations)\(\s*(?:'([\w.]+)'|\{[^}]*namespace:\s*'([\w.]+)'[^}]*\})\s*\)/g
// const [t, tCommon, data] = await Promise.all([getTranslations(...), getTranslations(...), load()])
const PROMISE_ALL = /const\s+\[([^\]]+)\]\s*=\s*await\s+Promise\.all\(\[([\s\S]*?)\]\)/g
const NAMESPACE_ARG = /(?:useTranslations|getTranslations)\(\s*(?:'([\w.]+)'|\{[^}]*namespace:\s*'([\w.]+)'[^}]*\})\s*\)/

// variable name -> namespace, for every translator binding in a file
function translatorBindings(source: string): Array<[string, string]> {
  const direct = [...source.matchAll(BINDING)].map(
    ([, variable, plainNs, objectNs]) => [variable, plainNs ?? objectNs] as [string, string]
  )
  const destructured = [...source.matchAll(PROMISE_ALL)].flatMap(([, names, items]) => {
    const variables = names.split(',').map((name) => name.trim())
    // Array items are calls, so split on the "), " between them; commas
    // inside a call's { locale, namespace } object are not followed by ")".
    const calls = items.split(/\)\s*,\s*(?=\S)/).map((item) => item.trim())
    return calls.flatMap((call, index) => {
      const match = `${call})`.match(NAMESPACE_ARG)
      const variable = variables[index]
      return match && variable ? [[variable, match[1] ?? match[2]] as [string, string]] : []
    })
  })
  return [...direct, ...destructured]
}

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (/\.(tsx?|mts)$/.test(name)) out.push(path)
  }
  return out
}

function lookup(tree: unknown, dotted: string): unknown {
  return dotted.split('.').reduce<unknown>(
    (node, part) => (node && typeof node === 'object' ? (node as Tree)[part] : undefined),
    tree
  )
}

function flatKeys(tree: Tree, prefix = ''): string[] {
  return Object.entries(tree).flatMap(([key, value]) =>
    value && typeof value === 'object' && !Array.isArray(value)
      ? flatKeys(value as Tree, `${prefix}${key}.`)
      : [`${prefix}${key}`]
  )
}

const catalogs = Object.fromEntries(
  locales.map((locale) => [locale, JSON.parse(readFileSync(`messages/${locale}.json`, 'utf8')) as Tree])
)

type Usage = { file: string; namespace: string; key: string }

function collectUsages(): Usage[] {
  const usages: Usage[] = []
  for (const file of SOURCE_DIRS.flatMap((dir) => walk(dir))) {
    const source = readFileSync(file, 'utf8')
    for (const [variable, namespace] of translatorBindings(source)) {
      const call = new RegExp(`\\b${variable}(?:\\.(?:raw|rich|markup|has))?\\(\\s*'([\\w.]+)'`, 'g')
      for (const match of source.matchAll(call)) {
        usages.push({ file, namespace, key: match[1] })
      }
    }
  }
  return usages
}

describe('i18n coverage', () => {
  const usages = collectUsages()

  it('finds translation calls to check (guards the scanner itself)', () => {
    expect(usages.length).toBeGreaterThan(100)
    // Promise.all-destructured translators are covered too.
    expect(usages).toContainEqual(
      expect.objectContaining({ namespace: 'talents', key: 'featureLink', file: expect.stringContaining('talents') })
    )
  })

  it.each(locales)('every literal key used in code exists in %s', (locale) => {
    const missing = usages
      .filter(({ namespace, key }) => typeof lookup(catalogs[locale], `${namespace}.${key}`) === 'undefined')
      .map(({ file, namespace, key }) => `${namespace}.${key} (${file})`)

    expect([...new Set(missing)]).toEqual([])
  })

  it.each(locales.filter((locale) => locale !== 'en'))('%s has the same keys as en', (locale) => {
    const en = new Set(flatKeys(catalogs.en))
    const other = new Set(flatKeys(catalogs[locale]))

    expect({
      missing: [...en].filter((key) => !other.has(key)),
      extra: [...other].filter((key) => !en.has(key)),
    }).toEqual({ missing: [], extra: [] })
  })
})
