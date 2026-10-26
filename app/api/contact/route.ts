import { NextRequest, NextResponse } from 'next/server'
import { deliverContact } from '@/lib/contact/delivery'
import { buildContactEmail } from '@/lib/contact/email'
import { verifyTurnstile } from '@/lib/contact/turnstile'
import { readBoundedJson } from '@/lib/contact/read-json'
import { rejectCrossOrigin } from '@/lib/csrf'
import {
  MAX_CONTACT_BODY_BYTES,
  validateContactPayload,
} from '@/lib/contact/validation'
import { checkRateLimit } from '@/lib/rate-limit'
import { markEnquiry, saveEnquiry } from '@/lib/contact/store'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return NextResponse.json(
      { error: 'Content-Type must be application/json', code: 'INVALID_REQUEST' },
      { status: 400 }
    )
  }

  // Only the loopback proxy/tunnel can reach this listener. Cloudflare sets this header.
  const clientIp = request.headers.get('cf-connecting-ip') || 'unknown'
  const rate = checkRateLimit(`contact:${clientIp}`)
  if (rate.limited) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.', code: 'RATE_LIMITED' },
      {
        status: 429,
        headers: { 'Retry-After': String(rate.retryAfterSeconds) },
      }
    )
  }

  const declaredLength = Number(request.headers.get('content-length') || 0)
  if (declaredLength > MAX_CONTACT_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Request body is too large', code: 'INVALID_REQUEST' },
      { status: 400 }
    )
  }

  let raw: unknown
  try {
    raw = await readBoundedJson(request, MAX_CONTACT_BODY_BYTES)
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body', code: 'INVALID_REQUEST' },
      { status: 400 }
    )
  }

  const validation = validateContactPayload(raw)
  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error, code: validation.code },
      { status: validation.code === 'BOT_REJECTED' ? 403 : 400 }
    )
  }

  // Previews capture submissions to disk instead of emailing them, and have
  // no Turnstile keys; there the challenge is skipped so the forms can be
  // tested end to end. Production always requires a valid token.
  const previewWithoutTurnstile = process.env.PREVIEW_MODE === 'true' && !process.env.TURNSTILE_SECRET
  const token = raw && typeof raw === 'object' && 'turnstileToken' in raw ? raw.turnstileToken : undefined
  if (!previewWithoutTurnstile && !await verifyTurnstile(token, clientIp)) {
    return NextResponse.json({ error: 'Submission rejected', code: 'BOT_REJECTED' }, { status: 403 })
  }

  const data = validation.data

  const email = buildContactEmail(data)
  const enquiryId = await saveEnquiry(data, email.subject)
  try {
    const delivery = await deliverContact({ replyTo: data.email, ...email })
    await markEnquiry(enquiryId, delivery.preview ? 'preview' : 'emailed')
    return NextResponse.json(delivery.preview ? { success: true, preview: true } : { success: true })
  } catch (error) {
    console.error('Contact delivery failed:', error)
    await markEnquiry(enquiryId, 'email_failed', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.', code: 'DELIVERY_FAILED' },
      { status: 502 }
    )
  }
}
