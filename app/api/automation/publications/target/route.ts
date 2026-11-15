import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import { authorized, versionOf } from '@/lib/publications/core'
import { resource } from '@/lib/publications/store'

export async function GET(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const params = new URL(request.url).searchParams, kind = params.get('kind'), target = params.get('target') ?? ''
  if (!['blog', 'talent', 'site-content'].includes(kind ?? '') || !/^[a-z0-9][a-z0-9-]*$/.test(target) || (kind === 'site-content' && (!siteContentDefinitionsByKey[target] || ['footer', 'business-license', 'privacy-policy', 'terms-of-service'].includes(target)))) return NextResponse.json({ error: 'Invalid marketing resource' }, { status: 400 })
  const value = await resource(prisma, kind as 'blog' | 'talent' | 'site-content', target)
  return NextResponse.json({ kind, target, version: versionOf(value), resource: value }, { headers: { 'Cache-Control': 'no-store' } })
}
