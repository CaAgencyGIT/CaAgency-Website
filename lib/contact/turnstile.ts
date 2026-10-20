export async function verifyTurnstile(token: unknown, clientIp: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET
  const hosts = new Set((process.env.TURNSTILE_HOSTNAMES ?? '').split(',').map(host => host.trim()).filter(Boolean))
  if (!secret || !hosts.size || typeof token !== 'string' || !token.length || token.length > 2048) return false
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: clientIp }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) return false
    const result = await response.json() as { success?: boolean; action?: string; hostname?: string }
    return result.success === true && result.action === 'contact' && !!result.hostname && hosts.has(result.hostname)
  } catch {
    return false
  }
}
