import { randomUUID } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { saveMedia } from '@/lib/server-storage'
import { requireAuth } from '@/lib/auth'
import { detectImageType } from '@/lib/uploads/image-signature'
import { rejectCrossOrigin } from '@/lib/csrf'

const MAX_FILE_BYTES = 5 * 1024 * 1024
const MAX_MULTIPART_BYTES = MAX_FILE_BYTES + 512 * 1024

export async function POST(request: NextRequest) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin

  try {
    await requireAuth()
  } catch {
    return NextResponse.json(
      { error: 'Unauthorized', code: 'UNAUTHORIZED' },
      { status: 401 }
    )
  }

  const declaredLength = Number(request.headers.get('content-length') || 0)
  if (declaredLength > MAX_MULTIPART_BYTES) {
    return NextResponse.json(
      { error: 'File too large. Maximum size is 5MB.', code: 'FILE_TOO_LARGE' },
      { status: 413 }
    )
  }

  let file: File
  try {
    const formData = await request.formData()
    const files = formData.getAll('file').filter((value): value is File => value instanceof File)
    if (files.length !== 1) {
      return NextResponse.json(
        { error: 'Exactly one file is required', code: 'INVALID_REQUEST' },
        { status: 400 }
      )
    }
    file = files[0]
  } catch {
    return NextResponse.json(
      { error: 'Invalid multipart form data', code: 'INVALID_REQUEST' },
      { status: 400 }
    )
  }

  if (file.size > MAX_FILE_BYTES) {
    return NextResponse.json(
      { error: 'File too large. Maximum size is 5MB.', code: 'FILE_TOO_LARGE' },
      { status: 413 }
    )
  }

  const bytes = new Uint8Array(await file.arrayBuffer())
  const detected = detectImageType(bytes.subarray(0, 16))
  if (!detected || file.type !== detected.mime) {
    return NextResponse.json(
      { error: 'Unsupported or invalid image file', code: 'UNSUPPORTED_MEDIA_TYPE' },
      { status: 415 }
    )
  }

  const filename = `talents/${randomUUID()}.${detected.extension}`

  try {
    const url = await saveMedia(filename, bytes)
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Upload provider failed:', error)
    return NextResponse.json(
      { error: 'Failed to upload file', code: 'UPLOAD_FAILED' },
      { status: 502 }
    )
  }
}
