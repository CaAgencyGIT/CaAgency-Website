import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authorized, PublicationError } from '@/lib/publications/core'
import { applyPublication } from '@/lib/publications/store'

export const runtime = 'nodejs'
type Context = { params: Promise<{ id: string }> }
export async function GET(request: Request, context: Context) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await context.params
  const row = await prisma.websitePublication.findUnique({ where: { id } })
  return NextResponse.json(row ?? { error: 'Not found' }, { status: row ? 200 : 404, headers: { 'Cache-Control': 'no-store' } })
}
export async function POST(request: Request, context: Context) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await request.json()
    if (!body || Object.keys(body).length !== 1 || !['publish', 'revert'].includes(body.action)) throw new PublicationError('Expected publish or revert action')
    const { id } = await context.params
    const row = await applyPublication(id, body.action === 'revert')
    return NextResponse.json(row, { status: ['APPLIED', 'REVERT_APPLIED'].includes(row.status) ? 202 : 200, headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    return NextResponse.json({ error: error instanceof PublicationError ? error.message : 'Publication failed; check status before retrying' }, { status: error instanceof PublicationError ? error.status : 500 })
  }
}
