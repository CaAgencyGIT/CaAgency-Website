import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_HOSTS = new Set([
  'caagency.com',
  'www.caagency.com',
  'caagency.co.uk',
  'www.caagency.co.uk',
  'caagency.ae',
  'www.caagency.ae',
  'caagency.nl',
  'www.caagency.nl',
])

// Vercel preview deployments follow <project>-<hash>-sweetflips-projects.vercel.app.
const PREVIEW_PATTERN = /^(caagency|ca-agency-website)-[a-z0-9]{6,}-sweetflips-projects$/
const DEV_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]'])

export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true

  let hostname: string
  try {
    const parsed = new URL(origin)
    hostname = parsed.hostname
    const configured = (process.env.ALLOWED_ORIGINS ?? '').split(',').map(value => value.trim()).filter(Boolean)
    if (configured.includes(parsed.origin) && parsed.protocol === 'https:') return true
  } catch {
    return false
  }

  if (ALLOWED_HOSTS.has(hostname) || DEV_HOSTS.has(hostname)) return true
  if (hostname.endsWith('.vercel.app')) {
    const subdomain = hostname.slice(0, -'.vercel.app'.length)
    return PREVIEW_PATTERN.test(subdomain)
  }
  return false
}

// Cookie-authenticated write APIs rely on SameSite=Lax today; assert the
// browser's Origin explicitly so a future cookie relaxation cannot silently
// reintroduce CSRF. Requests without Origin (curl, mobile apps) are allowed.
export function rejectCrossOrigin(request: NextRequest): NextResponse | null {
  const originHeader = request.headers.get('origin')
  let origin: string | null = originHeader

  if (!originHeader) {
    const referer = request.headers.get('referer')
    if (referer) {
      try {
        origin = new URL(referer).origin
      } catch {
        origin = null
      }
    }
  }

  if (isAllowedOrigin(origin)) return null
  return NextResponse.json({ error: 'Forbidden', code: 'FORBIDDEN' }, { status: 403 })
}
