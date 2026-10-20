/** Reject oversized streamed/chunked requests before buffering their body. */
export async function readBoundedJson(request: Request, limit: number): Promise<unknown> {
  if (!request.body) throw new Error('Missing request body')
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      total += value.byteLength
      if (total > limit) { await reader.cancel(); throw new Error('Body too large') }
      chunks.push(value)
    }
  } finally { reader.releaseLock() }
  const body = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength }
  return JSON.parse(new TextDecoder().decode(body))
}
