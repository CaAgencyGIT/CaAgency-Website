import { NextResponse } from 'next/server'
import { authorized, parsePublication, PublicationError } from '@/lib/publications/core'
import { preparePublication } from '@/lib/publications/store'

export const runtime = 'nodejs'
export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await request.text()
    if (Buffer.byteLength(body) > 200_000) return NextResponse.json({ error: 'Publication too large' }, { status: 413 })
    const result = await preparePublication(parsePublication(JSON.parse(body)))
    return NextResponse.json(result, { status: 201, headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    return NextResponse.json({ error: error instanceof PublicationError ? error.message : 'Publication preparation failed' }, { status: error instanceof PublicationError ? error.status : error instanceof SyntaxError ? 400 : 500 })
  }
}
