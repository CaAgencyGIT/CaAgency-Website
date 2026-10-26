import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { sendGraphContact } from '@/lib/contact/graph'

type ContactMessage = { subject: string; html: string; text: string; replyTo: string }

export async function deliverContact(message: ContactMessage): Promise<{ preview: boolean }> {
  if (process.env.PREVIEW_MODE === 'true') {
    const directory = process.env.CONTACT_CAPTURE_DIRECTORY
    if (!directory) throw new Error('Preview capture directory is required')
    await mkdir(directory, { recursive: true, mode: 0o700 })
    await writeFile(path.join(directory, `${crypto.randomUUID()}.json`), JSON.stringify({ ...message, capturedAt: new Date().toISOString() }), { mode: 0o600, flag: 'wx' })
    return { preview: true }
  }
  try {
    await sendGraphContact(message)
  } catch (error) {
    // Keep a private copy so a failed send never loses the enquiry; the
    // visitor still sees the error and can email info@caagency.com directly.
    await saveCopy(message, 'failed').catch(() => {})
    throw error
  }
  return { preview: false }
}

async function saveCopy(message: ContactMessage, kind: string) {
  const directory = process.env.CONTACT_CAPTURE_DIRECTORY
  if (!directory) return
  await mkdir(directory, { recursive: true, mode: 0o700 })
  await writeFile(
    path.join(directory, `${kind}-${new Date().toISOString().replace(/[:.]/g, '-')}-${crypto.randomUUID()}.json`),
    JSON.stringify({ ...message, capturedAt: new Date().toISOString() }),
    { mode: 0o600, flag: 'wx' }
  )
}
