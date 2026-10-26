// Publish only successful default-branch builds; the server verifies GitHub OIDC.
import { createHash } from 'node:crypto'
import { readFile, writeFile, readdir, realpath } from 'node:fs/promises'
import path from 'node:path'
import { publishBuild } from '/usr/local/lib/caagency-ci/publish-build.mjs'

if (process.env.GITHUB_EVENT_NAME !== 'push' || process.env.GITHUB_REF !== 'refs/heads/master') {
  throw new Error('Only default-branch push CI can publish a deployment build')
}
const sha256 = value => createHash('sha256').update(value).digest('hex')
// Turbopack references external packages through symlinks here. Preserve their
// package names, not duplicate copies of Prisma and its unrelated DB engines.
const aliases = {}
const packages = JSON.parse(await readFile('package.json', 'utf8'))
const declared = { ...packages.dependencies, ...packages.devDependencies }
async function collectAliases(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const alias = prefix + entry.name
    const file = path.join(directory, entry.name)
    if (entry.isDirectory() && entry.name.startsWith('@')) await collectAliases(file, alias + '/')
    else if (entry.isSymbolicLink()) {
      const packageName = path.relative(path.join(process.cwd(), 'node_modules'), await realpath(file))
      if (!Object.hasOwn(declared, packageName)) throw new Error(`Unsupported external package alias: ${alias}`)
      aliases[alias] = packageName
    } else throw new Error(`Unsupported external package entry: ${alias}`)
  }
}
await collectAliases('.next/node_modules')
const manifest = {
  version: 1, sha: process.env.GITHUB_SHA, run_id: process.env.GITHUB_RUN_ID,
  run_attempt: process.env.GITHUB_RUN_ATTEMPT,
  lock_sha256: sha256(await readFile('package-lock.json')),
  next: JSON.parse(await readFile('node_modules/next/package.json')).version,
  node_major: Number(process.versions.node.split('.')[0]), platform: process.platform, arch: process.arch,
  build_id: (await readFile('.next/BUILD_ID', 'utf8')).trim(),
  public_env: Object.fromEntries(Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')).sort()
    .map(key => [key, sha256(process.env[key] ?? '')])),
  aliases,
}
await writeFile('.next/ci-build.json', JSON.stringify(manifest) + '\n')
// Public assets come from the exact source checkout on the server. No npm,
// standalone duplicate, compiler cache, dotenv files or credentials are sent.
const result = await publishBuild('website', process.cwd(), [
  '--exclude=.next/cache', '--exclude=.next/node_modules',
  '--exclude=.next/standalone', '--exclude=.next/trace', '--exclude=.next/trace-build',
  // The server regenerates these from live data; do not transfer CI's pages.
  '--exclude=*.html', '--exclude=*.rsc', '--exclude=*.meta', '--exclude=*.body',
  '--exclude=.next/lock', '.next',
])
console.log(`Published CI build ${manifest.build_id}: ${(result.size/1024/1024).toFixed(1)} MiB, SHA-256 ${result.sha256}`)
