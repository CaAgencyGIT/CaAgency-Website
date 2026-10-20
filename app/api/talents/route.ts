import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, UnauthorizedError } from '@/lib/auth'
import { rejectCrossOrigin } from '@/lib/csrf'
import { revalidateTalentsPages } from '@/lib/revalidate'
import { pingIndexNow } from '@/lib/seo/indexnow'

// Force dynamic rendering to skip static generation at build time (when DB is missing)
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const talents = await prisma.talent.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        imageUrl: true,
        category: true,
        bio: true,
        instagramUrl: true,
        tiktokUrl: true,
        youtubeUrl: true,
        twitchUrl: true,
        kickUrl: true,
        order: true,
      },
      orderBy: [
        { category: 'asc' },
        { order: 'asc' },
      ],
    })

    return NextResponse.json(talents)
  } catch (error) {
    console.error('Error fetching talents:', error)
    return NextResponse.json(
      { error: 'Failed to fetch talents', code: 'FETCH_FAILED' },
      { status: 503 }
    )
  }
}

export async function POST(request: NextRequest) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin

  try {
    await requireAuth()

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body', code: 'INVALID_REQUEST' },
        { status: 400 }
      )
    }
    const name = body.name
    const imageUrl = body.imageUrl
    const category = typeof body.category === 'string' ? body.category : 'instagram'
    const instagramUrl = typeof body.instagramUrl === 'string' ? body.instagramUrl : undefined
    const tiktokUrl = typeof body.tiktokUrl === 'string' ? body.tiktokUrl : undefined
    const youtubeUrl = typeof body.youtubeUrl === 'string' ? body.youtubeUrl : undefined
    const twitchUrl = typeof body.twitchUrl === 'string' ? body.twitchUrl : undefined
    const kickUrl = typeof body.kickUrl === 'string' ? body.kickUrl : undefined
    const order = typeof body.order === 'number' ? body.order : 0

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      name.length > 120 ||
      typeof imageUrl !== 'string' ||
      !imageUrl.trim() ||
      imageUrl.length > 2000 ||
      (order !== undefined && (typeof order !== 'number' || !Number.isFinite(order)))
    ) {
      return NextResponse.json(
        { error: 'Name and imageUrl are required' },
        { status: 400 }
      )
    }

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const talent = await prisma.talent.create({
      data: {
        name,
        slug,
        imageUrl,
        category,
        instagramUrl,
        tiktokUrl,
        youtubeUrl,
        twitchUrl,
        kickUrl,
        order,
      },
    })

    revalidateTalentsPages()
    await pingIndexNow(['/talents', `/talents/${talent.slug}`])
    return NextResponse.json(talent, { status: 201 })
  } catch (error: any) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        { error: 'Unauthorized', code: 'UNAUTHORIZED' },
        { status: 401 }
      )
    }
    console.error('Error creating talent:', error)

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A talent with this name already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create talent' },
      { status: 500 }
    )
  }
}
