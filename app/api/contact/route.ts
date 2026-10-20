import { NextRequest, NextResponse } from 'next/server'
import { deliverContact } from '@/lib/contact/delivery'
import { verifyTurnstile } from '@/lib/contact/turnstile'
import { readBoundedJson } from '@/lib/contact/read-json'
import { rejectCrossOrigin } from '@/lib/csrf'
import {
  MAX_CONTACT_BODY_BYTES,
  validateContactPayload,
} from '@/lib/contact/validation'
import { checkRateLimit } from '@/lib/rate-limit'

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

  const token = raw && typeof raw === 'object' && 'turnstileToken' in raw ? raw.turnstileToken : undefined
  if (!await verifyTurnstile(token, clientIp)) return NextResponse.json({ error: 'Submission rejected', code: 'BOT_REJECTED' }, { status: 403 })

  const data = validation.data
  const formType = data.formType

  try {
    let emailSubject: string
    let emailHtml: string

    if (formType === 'talent') {
      // Talent Submission Email
      emailSubject = `🎭 New Talent Submission: ${data.fullName}`
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #e53935; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #eee; }
            a { color: #e53935; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🎭 New Talent Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${escapeHtml(data.fullName)}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
              </div>
              <div class="field">
                <div class="label">Social Media</div>
                <div class="value"><a href="${escapeHtml(data.socialLink || '')}" target="_blank">${escapeHtml(data.socialLink || 'Not provided')}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${escapeHtml(data.subject || 'Not provided')}</div>
              </div>
              <div class="message-box">
                <div class="label" style="margin-bottom: 10px;">Message</div>
                <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    } else {
      // Brand/Business Inquiry Email
      emailSubject = data.company
        ? `🏢 New Brand Inquiry: ${data.company}`
        : `🏢 New Contact Form Submission: ${data.fullName}`
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #e53935; }
            .budget-badge { display: inline-block; background: #e53935; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #eee; }
            a { color: #e53935; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🏢 New Brand Inquiry</h1>
              ${data.budget ? `<div style="margin-top: 15px;"><span class="budget-badge">Budget: ${escapeHtml(data.budget)}</span></div>` : ''}
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${escapeHtml(data.fullName)}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
              </div>
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${escapeHtml(data.company || 'Not provided')}</div>
              </div>
              <div class="field">
                <div class="label">Estimated Budget</div>
                <div class="value">${escapeHtml(data.budget || 'Not provided')}</div>
              </div>
              <div class="message-box">
                <div class="label" style="margin-bottom: 10px;">Message</div>
                <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Send email
    const delivery = await deliverContact({
      replyTo: data.email,
      subject: emailSubject,
      html: emailHtml,
      text: [emailSubject, `Name: ${data.fullName}`, `Email: ${data.email}`, `Phone: ${data.phone}`,
        data.company && `Company: ${data.company}`, data.budget && `Budget: ${data.budget}`,
        data.socialLink && `Social media: ${data.socialLink}`, data.subject && `Subject: ${data.subject}`,
        '', data.message].filter(value => value !== undefined).join('\n'),
    })

    return NextResponse.json(delivery.preview ? { success: true, preview: true } : { success: true })
  } catch (error) {
    console.error('Contact delivery failed:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.', code: 'DELIVERY_FAILED' },
      { status: 502 }
    )
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
