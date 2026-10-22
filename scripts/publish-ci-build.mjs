// Publish only successful default-branch builds; the server verifies GitHub OIDC.
import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import path from 'node:path'

if (process.env.GITHUB_EVENT_NAME !== 'push' || process.env.GITHUB_REF !== 'refs/heads/master') {
  throw new Error('Only default-branch push CI can publish a deployment build')
}
const sha256 = value => createHash('sha256').update(value).digest('hex')
const manifest = {
  version: 1, sha: process.env.GITHUB_SHA, run_id: process.env.GITHUB_RUN_ID,
  run_attempt: process.env.GITHUB_RUN_ATTEMPT,
  lock_sha256: sha256(await readFile('package-lock.json')),
  next: JSON.parse(await readFile('node_modules/next/package.json')).version,
  node_major: Number(process.versions.node.split('.')[0]), platform: process.platform, arch: process.arch,
  build_id: (await readFile('.next/BUILD_ID', 'utf8')).trim(),
  public_env: Object.fromEntries(Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')).sort()
    .map(key => [key, sha256(process.env[key] ?? '')])),
}
await writeFile('.next/ci-build.json', JSON.stringify(manifest) + '\n')
const directory = await mkdtemp(path.join(tmpdir(), 'caagency-ci-build-'))
try {
  const archive = path.join(directory, 'build.tar.gz')
  // Public assets come from the exact source checkout on the server. No npm,
  // standalone duplicate, compiler cache, dotenv files or credentials are sent.
  const packed = spawnSync('tar', ['--dereference', '--exclude=.next/cache',
    '--exclude=.next/standalone', '--exclude=.next/trace', '--exclude=.next/trace-build',
    // The server regenerates these from live data; do not transfer CI's pages.
    '--exclude=*.html', '--exclude=*.rsc', '--exclude=*.meta', '--exclude=*.body',
    '--exclude=.next/lock', '-czf', archive, '.next'], { stdio: 'inherit' })
  if (packed.status !== 0) throw new Error('Could not package CI build')
  const data = await readFile(archive)
  if (data.length > 90 * 1024 * 1024) throw new Error('CI build exceeds the 90 MiB upload limit')
  const audience = 'https://caagency.com/api/deploy'
  const url = new URL(process.env.ACTIONS_ID_TOKEN_REQUEST_URL)
  url.searchParams.set('audience', audience)
  const identity = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN}` },
    signal: AbortSignal.timeout(30_000),
  })
  if (!identity.ok) throw new Error(`GitHub identity request failed (${identity.status})`)
  const { value: token } = await identity.json()
  if (typeof token !== 'string') throw new Error('GitHub did not return an identity')
  console.log(`::add-mask::${token}`)
  // Host-only Slirp/loopback path to the same OIDC gateway; no public upload or
  // LAN traffic, application/DB access, host mount, or credential is introduced.
  const response = await fetch('http://10.0.2.2:9050/api/deploy/website/build', {
    method: 'POST', redirect: 'error', body: data,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/gzip',
      'X-Build-SHA256': sha256(data) }, signal: AbortSignal.timeout(120_000),
  })
  const result = await response.json()
  if (!response.ok) throw new Error(result.error || `Build upload failed (${response.status})`)
  console.log(`Published CI build ${manifest.build_id}: ${(data.length / 1024 / 1024).toFixed(1)} MiB, SHA-256 ${result.sha256}`)
} finally { await rm(directory, { recursive: true, force: true }) }
