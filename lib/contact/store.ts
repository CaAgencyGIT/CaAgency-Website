import type { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import type { ContactFormData } from '@/lib/contact/validation'

export type EnquiryStatus = 'emailed' | 'email_failed' | 'preview'

/**
 * Saves a validated submission before it is emailed, so the enquiry survives
 * any mail problem. Never throws: a database outage must not stop the email.
 */
export async function saveEnquiry(d: ContactFormData, subject: string): Promise<string | null> {
  // Drop the honeypot and timing fields; keep everything the visitor entered.
  const { website: _honeypot, _formTime, ...data } = d
  try {
    const row = await prisma.contactEnquiry.create({
      data: {
        formType: d.formType,
        fullName: d.fullName,
        email: d.email,
        company: d.formType === 'brand' ? d.company : null,
        subject,
        data: data as Prisma.InputJsonValue,
      },
      select: { id: true },
    })
    return row.id
  } catch (error) {
    console.error('Contact enquiry not saved:', error instanceof Error ? error.message : error)
    return null
  }
}

/** Records how the email went. Never throws. */
export async function markEnquiry(id: string | null, status: EnquiryStatus, error?: unknown): Promise<void> {
  if (!id) return
  await prisma.contactEnquiry
    .update({
      where: { id },
      data: { status, error: error ? (error instanceof Error ? error.message : String(error)).slice(0, 500) : null },
    })
    .catch((err) => console.error('Contact enquiry status not saved:', err instanceof Error ? err.message : err))
}
