import publicAssets from '@/lib/generated/public-assets.json'
import { NextResponse } from 'next/server'
import { workVideos, aboutVideos, posterFor, publishedDateFor, VIDEO_PUBLICATION_DATE } from '@/lib/data/videos'
import { caseStudies } from '@/lib/data/case-studies'

const baseUrl = 'https://caagency.com'

const assetPaths = new Set(publicAssets)
async function assetExists(assetPath: string) {
  return assetPaths.has(assetPath)
}

// A sitemap entry is only valid when both the video and its thumbnail exist.
async function filterExistingVideos<T extends { src: string }>(videos: T[]) {
  const checks = await Promise.all(
    videos.map(async (video) => ({
      exists: (await assetExists(video.src)) && (await assetExists(posterFor(video.src))),
      video,
    }))
  )

  return checks.filter((item) => item.exists).map((item) => item.video)
}

function escapeXml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function videoTag(video: { src: string; name: string; published?: string }, description: string) {
  return `
    <video:video>
      <video:thumbnail_loc>${baseUrl}${posterFor(video.src)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.name)}</video:title>
      <video:description>${escapeXml(description)}</video:description>
      <video:content_loc>${baseUrl}${video.src}</video:content_loc>
      <video:publication_date>${video.published ?? VIDEO_PUBLICATION_DATE}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`
}

export async function GET() {
  const [existingWorkVideos, existingAboutVideos, existingCaseStudyVideos] = await Promise.all([
    filterExistingVideos(workVideos),
    filterExistingVideos(aboutVideos),
    filterExistingVideos(
      caseStudies.map((study) => ({
        src: study.videoSrc,
        name: study.title,
        published: publishedDateFor(study.videoSrc),
        slug: study.slug,
        summary: study.summary,
      }))
    ),
  ])

  // Google dedupes sitemap entries by <loc>, so each page must appear exactly
  // once, carrying all of its videos as <video:video> children.
  const pageEntries = [
    {
      loc: `${baseUrl}/work`,
      videos: existingWorkVideos.map((video) =>
        videoTag(video, `Influencer marketing campaign for ${video.brand} by CA Agency`)
      ),
    },
    {
      loc: `${baseUrl}/about`,
      videos: existingAboutVideos.map((video) => videoTag(video, video.description)),
    },
    ...existingCaseStudyVideos.map((video) => ({
      loc: `${baseUrl}/case-studies/${video.slug}`,
      videos: [videoTag(video, video.summary)],
    })),
  ].filter((page) => page.videos.length > 0)

  const videoEntries = pageEntries.map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>${page.videos.join('')}
  </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries.join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
