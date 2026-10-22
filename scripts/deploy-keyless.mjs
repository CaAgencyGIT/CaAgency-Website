// GitHub supplies both tokens for this job. No manually created secrets or SSH keys.
import { appendFileSync } from 'node:fs'

const app = process.env.DEPLOY_APP
if (!['website', 'finance'].includes(app)) throw new Error('Unknown deployment app')
const endpoint = `https://caagency.com/api/deploy/${app}`
const audience = 'https://caagency.com/api/deploy'
const sha = process.env.GITHUB_SHA
const dryRun = process.env.DEPLOY_DRY_RUN === 'true'
let identity
let identityExpires = 0

async function oidc() {
  if (Date.now() < identityExpires) return identity
  const url = new URL(process.env.ACTIONS_ID_TOKEN_REQUEST_URL)
  url.searchParams.set('audience', audience)
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN}` },
    signal: AbortSignal.timeout(30_000),
  })
  if (!response.ok) throw new Error(`GitHub OIDC request failed (${response.status})`)
  identity = (await response.json()).value
  if (typeof identity !== 'string') throw new Error('GitHub did not return an identity token')
  console.log(`::add-mask::${identity}`)
  identityExpires = Date.now() + 120_000
  return identity
}

async function request(action) {
  const body = { sha, dry_run: dryRun }
  if (action === 'start') body.github_token = process.env.GH_TOKEN
  const response = await fetch(`${endpoint}/${action}`, {
    method: 'POST', redirect: 'error',
    headers: { Authorization: `Bearer ${await oidc()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body), signal: AbortSignal.timeout(30_000),
  })
  const result = await response.json()
  if (response.status === 409 && action === 'start') return { status: 'busy' }
  if (!response.ok) throw new Error(result.error || `Gateway returned ${response.status}`)
  return result
}

const deadline = Date.now() + 50 * 60_000
let result
let lastStatus
do {
  result = await request('start')
  if (result.status !== 'busy') break
  console.log('Waiting for the active server deployment to finish')
  await new Promise(resolve => setTimeout(resolve, 15_000))
} while (Date.now() < deadline)

while (Date.now() < deadline) {
  if (result.status !== lastStatus) {
    console.log(`${app} @ ${sha}: ${result.status}`)
    lastStatus = result.status
  }
  if (result.status === 'failure') throw new Error(result.detail)
  if (result.status === 'success') {
    const summary = `${dryRun ? 'Deployment dry run' : 'Deployment'} succeeded for **${app}** at \`${sha}\`. ${result.detail}.\n`
    console.log(summary)
    if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
    process.exit(0)
  }
  await new Promise(resolve => setTimeout(resolve, 10_000))
  result = await request(result.status === 'busy' ? 'start' : 'status')
}
throw new Error('Deployment timed out; inspect server status before retrying')
