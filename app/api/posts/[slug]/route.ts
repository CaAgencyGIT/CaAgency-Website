import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidateBlogPages } from '@/lib/revalidate'
import { pingIndexNow } from '@/lib/seo/indexnow'
import { rejectCrossOrigin } from '@/lib/csrf'

interface RouteParams {
  params: Promise<{ slug: string }>
}

// Force dynamic rendering to skip static generation at build time (when DB is missing)
export const dynamic = 'force-dynamic'

// GET - Get single post
export async function GET(request: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  try {
    let session
    try {
      session = await requireAuth()
    } catch {
      // Not authenticated - public access
      session = null
    }

    const post = await prisma.post.findUnique({
      where: { slug },
    })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Public can only see published posts
    if (!session && (post.status !== 'published' || !post.publishedAt || post.publishedAt > new Date())) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 200 })
  }
}

// PUT - Update post (admin only)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin

  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await params

  try {
    const body = await request.json()
    const {
      title,
      excerpt,
      content,
      featuredImage,
      status,
      publishedAt,
      author,
      categories,
      tags,
    } = body

    const post = await prisma.post.update({
      where: { slug },
      data: {
        ...(title && { title }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content && { content }),
        ...(featuredImage !== undefined && { featuredImage }),
        ...(status && { status }),
        ...(publishedAt !== undefined && { publishedAt: publishedAt ? new Date(publishedAt) : null }),
        ...(author && { author }),
        ...(categories !== undefined && { categories }),
        ...(tags !== undefined && { tags }),
      },
    })

    revalidateBlogPages(slug)
    if (post.status === 'published') {
      await pingIndexNow(['/blog', `/blog/${post.slug}`])
    }
    return NextResponse.json(post)
  } catch (error: unknown) {
    console.error('Error updating post:', error)
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

// DELETE - Delete post (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const crossOrigin = rejectCrossOrigin(request)
  if (crossOrigin) return crossOrigin

  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await params

  try {
    await prisma.post.delete({
      where: { slug },
    })

    revalidateBlogPages(slug)
    // Tell IndexNow the deleted URL changed so engines re-crawl and drop it.
    await pingIndexNow(['/blog', `/blog/${slug}`])
    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error: unknown) {
    console.error('Error deleting post:', error)
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
