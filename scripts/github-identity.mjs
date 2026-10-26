// Reuse this job's short-lived GitHub identity; the server still verifies every request.
import { createHash, randomUUID } from 'node:crypto'
import { constants } from 'node:fs'
import { open, writeFile, rename, unlink } from 'node:fs/promises'
import path from 'node:path'

export const AUDIENCE = 'https://caagency.com/api/deploy'
export async function getIdentity({ env = process.env, fetchImpl = fetch, now = Date.now,
  log = console.log, timeoutMs = 30000 } = {}) {
  const fields = ['GITHUB_REPOSITORY', 'GITHUB_SHA', 'GITHUB_RUN_ID', 'GITHUB_RUN_ATTEMPT', 'GITHUB_REF', 'GITHUB_EVENT_NAME']
  const context = createHash('sha256').update(JSON.stringify([AUDIENCE, ...fields.map(key => env[key])])).digest('hex')
  const cache = fields.every(key => typeof env[key] === 'string' && env[key]) &&
    typeof env.RUNNER_TEMP === 'string' && path.isAbsolute(env.RUNNER_TEMP) ?
    path.join(env.RUNNER_TEMP, `caagency-identity-${context}.json`) : null
  if (cache) {
    let handle
    try {
      handle = await open(cache, constants.O_RDONLY | constants.O_NOFOLLOW)
      const info = await handle.stat()
      if (info.isFile() && info.uid === process.getuid() && !(info.mode & 0o077) && info.size < 16384) {
        const data = JSON.parse(await handle.readFile('utf8'))
        if (data.context === context && typeof data.token === 'string' && data.token.length > 0 && data.token.length < 12000 &&
            Number.isFinite(data.expiresAt) && data.expiresAt > now() + 15000 && data.expiresAt <= now() + 120000) {
          log(`::add-mask::${data.token}`)
          return { token: data.token, expiresAt: data.expiresAt }
        }
      }
    } catch {} finally { await handle?.close() }
  }
  const url = new URL(env.ACTIONS_ID_TOKEN_REQUEST_URL)
  url.searchParams.set('audience', AUDIENCE)
  const response = await fetchImpl(url, { redirect: 'error', signal: AbortSignal.timeout(timeoutMs),
    headers: { Authorization: `Bearer ${env.ACTIONS_ID_TOKEN_REQUEST_TOKEN}` } })
  if (!response.ok) throw new Error(`GitHub identity request failed (${response.status})`)
  const { value: token } = await response.json()
  if (typeof token !== 'string' || !token) throw new Error('GitHub did not return an identity token')
  log(`::add-mask::${token}`)
  let expiresAt = now() + 120000
  try {
    const exp = JSON.parse(Buffer.from(token.split('.')[1], 'base64url')).exp
    if (typeof exp !== 'number' || !Number.isFinite(exp)) throw new Error('No expiration')
    expiresAt = Math.min(expiresAt, exp * 1000 - 30000)
    if (cache && expiresAt > now() + 15000) {
      const temporary = cache + '.' + randomUUID()
      try {
        await writeFile(temporary, JSON.stringify({ context, token, expiresAt }), { mode: 0o600, flag: 'wx' })
        await rename(temporary, cache)
      } finally { await unlink(temporary).catch(() => {}) }
    }
  } catch {} // Optional acceleration; an unavailable cache never replaces live authentication.
  return { token, expiresAt }
}
