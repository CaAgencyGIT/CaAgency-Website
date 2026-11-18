import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidateBlogPages } from '@/lib/revalidate'
import { pingIndexNow } from '@/lib/seo/indexnow'
import { rejectCrossOrigin } from '@/lib/csrf'

export const dynamic = 'force-dynamic'

// GET - List all posts (public for published, admin for all)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')

  try {
    let session
    try {
      session = await requireAuth()
    } catch {
      // Not authenticated - public access
      session = null
    }

    const where: { status?: string; publishedAt?: { lte: Date } } = {}

    if (session) {
      // Admin can see all posts; only filter by status when not 'all'
      if (status && status !== 'all') {
        where.status = status
      }
    } else {
      // Public can only see published posts
      where.status = 'published'
      where.publishedAt = { lte: new Date() }
    }

    const posts = await prisma.post.findMany({
      where,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        publishedAt: true,
        status: true,
        author: true,
        categories: true,
        tags: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json([], { status: 200 })
  }
}

// POST - Create new post (admin only)
export async function POST(request: NextRequest) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin

  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      status = 'draft',
      publishedAt,
      author = 'CA Agency',
      categories = [],
      tags = [],
    } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      )
    }

    // Generate slug from title if not provided
    const finalSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

    const post = await prisma.post.create({
      data: {
        title,
        slug: finalSlug,
        excerpt,
        content,
        featuredImage,
        status,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        author,
        categories,
        tags,
      },
    })

    revalidateBlogPages(post.slug)
    if (post.status === 'published') {
      await pingIndexNow(['/blog', `/blog/${post.slug}`])
    }
    return NextResponse.json(post, { status: 201 })
  } catch (error: unknown) {
    console.error('Error creating post:', error)
    if (error instanceof Error && 'code' in error && error.code === 'P2002') {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
