import { NextRequest } from 'next/server'
import { readBoundedJson } from '@/lib/contact/read-json'
import { rejectCrossOrigin } from '@/lib/csrf'
import { checkRateLimit } from '@/lib/rate-limit'
import { MAX_VITALS_BODY_BYTES, parseVitalsBeacon } from '@/lib/performance/vitals'

export const dynamic = 'force-dynamic'

const noContent = () => new Response(null, { status: 204 })

// Receives the speed beacon from components/analytics/WebVitals.tsx. Bad or
// excess beacons are dropped silently (204): the visitor never waits on this.
export async function POST(request: NextRequest) {
  if (rejectCrossOrigin(request)) return noContent()
  const clientIp = request.headers.get('cf-connecting-ip') || 'unknown'
  if (checkRateLimit(`vitals:${clientIp}`, { limit: 30 }).limited) return noContent()
  if (Number(request.headers.get('content-length') || 0) > MAX_VITALS_BODY_BYTES) return noContent()

  let body: unknown
  try {
    body = await readBoundedJson(request, MAX_VITALS_BODY_BYTES)
  } catch {
    return noContent()
  }
  const lines = parseVitalsBeacon(body)
  if (lines) for (const line of lines) console.log(`[vitals] ${JSON.stringify(line)}`)
  return noContent()
}
