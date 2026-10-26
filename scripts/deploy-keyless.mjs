// GitHub supplies both tokens for this job. No manually created secrets or SSH keys.
import { getIdentity } from './github-identity.mjs'
import { appendFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

export async function deploy({ env = process.env, fetchImpl = fetch,
  sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds)),
  now = Date.now, log = console.log,
  summary = text => { if (env.GITHUB_STEP_SUMMARY) appendFileSync(env.GITHUB_STEP_SUMMARY, text) },
} = {}) {
  const app = env.DEPLOY_APP
  if (!['website', 'finance'].includes(app)) throw new Error('Unknown deployment app')
  const sha = env.GITHUB_SHA
  if (!/^[a-f0-9]{40}$/.test(sha ?? '')) throw new Error('Invalid deployment commit')
  // This connection stays inside the host, through the existing OIDC-only gateway.
  const endpoint = `http://10.0.2.2:9050/api/deploy/${app}`
  const dryRun = env.DEPLOY_DRY_RUN === 'true'
  let identity, identityExpires = 0

  async function oidc() {
    if (now() < identityExpires) return identity
    const result = await getIdentity({env, fetchImpl, now, log})
    identity = result.token
    identityExpires = result.expiresAt
    return identity
  }

  async function request(action) {
    const body = { sha, dry_run: dryRun }
    if (action === 'start') body.github_token = env.GH_TOKEN
    const response = await fetchImpl(`${endpoint}/${action}`, {
      method: 'POST', redirect: 'error',
      headers: { Authorization: `Bearer ${await oidc()}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body), signal: AbortSignal.timeout(30_000),
    })
    const result = await response.json()
    if (response.status === 409 && action === 'start') return { status: 'busy' }
    if (!response.ok) throw new Error(result.error || `Gateway returned ${response.status}`)
    if (!['queued', 'running', 'success', 'failure'].includes(result.status)) throw new Error('Unexpected deployment status')
    return result
  }

  const started = now(), deadline = started + 50 * 60_000
  let result = await request('start'), lastStatus
  while (now() < deadline) {
    if (result.status !== lastStatus) {
      log(result.status === 'busy' ? 'Waiting for the active server deployment to finish' : `${app} @ ${sha}: ${result.status}`)
      lastStatus = result.status
    }
    if (result.status === 'failure') throw new Error(result.detail)
    if (result.status === 'success') {
      const seconds = ((now() - started) / 1000).toFixed(2)
      const text = `${dryRun ? 'Deployment dry run' : 'Deployment'} succeeded for **${app}** at \`${sha}\` in ${seconds}s. ${result.detail}.\n`
      log(text)
      summary(text)
      return result
    }
    // Short local polls avoid the former 10s completion / 15s lock-retry waits.
    // Back off for unusually long builds without weakening the overall deadline.
    await sleep(now() - started < 60_000 ? result.status === 'busy' ? 1000 : 500 : 2000)
    result = await request(result.status === 'busy' ? 'start' : 'status')
  }
  throw new Error('Deployment timed out; inspect server status before retrying')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await deploy()
