import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'

const mocks = vi.hoisted(() => ({
  requireAuth: vi.fn(),
  saveMedia: vi.fn(),
}))

vi.mock('@/lib/auth', () => ({ requireAuth: mocks.requireAuth }))
vi.mock('@/lib/server-storage', () => ({ saveMedia: mocks.saveMedia }))

import { POST } from '@/app/api/upload/route'

const pngBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0])

function uploadRequest(files: File[]) {
  const form = new FormData()
  for (const file of files) form.append('file', file)
  return new NextRequest('http://localhost/api/upload', { method: 'POST', body: form })
}

describe('POST /api/upload', () => {
  beforeEach(() => {
    mocks.requireAuth.mockReset().mockResolvedValue(undefined)
    mocks.saveMedia.mockReset().mockResolvedValue('/media/talents/test.png')
  })

  it('returns 401 when admin authentication fails', async () => {
    mocks.requireAuth.mockRejectedValueOnce(new Error('unauthorized'))
    const response = await POST(uploadRequest([]))
    expect(response.status).toBe(401)
  })

  it('requires exactly one file', async () => {
    const file = new File([pngBytes], 'image.png', { type: 'image/png' })
    expect((await POST(uploadRequest([]))).status).toBe(400)
    expect((await POST(uploadRequest([file, file]))).status).toBe(400)
  })

  it('rejects cross-origin uploads', async () => {
    const request = new NextRequest('http://localhost/api/upload', {
      method: 'POST',
      headers: { origin: 'https://evil.example' },
      body: new FormData(),
    })
    expect((await POST(request)).status).toBe(403)
  })

  it('rejects oversized and signature-mismatched files', async () => {
    const oversized = new File([new Uint8Array(5 * 1024 * 1024 + 1)], 'large.png', {
      type: 'image/png',
    })
    expect((await POST(uploadRequest([oversized]))).status).toBe(413)

    const mismatch = new File([pngBytes], 'image.jpg', { type: 'image/jpeg' })
    expect((await POST(uploadRequest([mismatch]))).status).toBe(415)
  })

  it('uploads signature-verified images with a generated filename', async () => {
    const file = new File([pngBytes], 'image.png', { type: 'image/png' })
    const response = await POST(uploadRequest([file]))
    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ url: '/media/talents/test.png' })
    expect(mocks.saveMedia).toHaveBeenCalledWith(
      expect.stringMatching(/^talents\/[0-9a-f-]+\.png$/),
      expect.any(Uint8Array)
    )
  })

  it('returns a provider failure status', async () => {
    mocks.saveMedia.mockRejectedValueOnce(new Error('blob unavailable'))
    const file = new File([pngBytes], 'image.png', { type: 'image/png' })
    const response = await POST(uploadRequest([file]))
    expect(response.status).toBe(502)
    await expect(response.json()).resolves.toMatchObject({ code: 'UPLOAD_FAILED' })
  })
})
