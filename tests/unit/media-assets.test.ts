import { mobileVideoSrc } from '@/lib/media/video-src'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { aboutVideos, posterFor, workVideos } from '@/lib/data/videos'
import { filmCaseStudies, films, filmSrc, workFilms, type FilmKey } from '@/lib/data/redesign-media'
import { caseStudies } from '@/lib/data/case-studies'

type Probe = {
  format: { bit_rate?: string; duration?: string; format_name?: string }
  streams: Array<{
    codec_type: 'video' | 'audio'
    codec_name?: string
    pix_fmt?: string
    width?: number
    height?: number
  }>
}

const publicFile = (url: string) => path.join(process.cwd(), 'public', url)
const redesignVideos = (Object.keys(films) as FilmKey[]).map((key) => ({ src: filmSrc(key) }))
const ffprobePath = (createRequire(import.meta.url)('ffprobe-static') as { path: string }).path

function probe(url: string) {
  return JSON.parse(
    execFileSync(
      ffprobePath,
      [
        '-v', 'error',
        '-show_entries',
        'format=duration,format_name,bit_rate:stream=codec_type,codec_name,pix_fmt,width,height',
        '-of', 'json',
        publicFile(url),
      ],
      { encoding: 'utf8' }
    )
  ) as Probe
}

describe('published media assets', () => {
  it('uses immutable optimized mappings with matching posters', () => {
    const videos = [...workVideos, ...aboutVideos, ...redesignVideos]
    expect(new Set(videos.map(({ src }) => src)).size).toBe(videos.length)

    for (const { src } of videos) {
      // Immutable caching: every file name carries a version (-v1, -v2, …).
      expect(src).toMatch(/-v\d+\.mp4$/)
      expect(existsSync(publicFile(src))).toBe(true)
      expect(existsSync(publicFile(posterFor(src)))).toBe(true)
    }
  })

  it('keeps published Work and About transfer totals within budget', () => {
    const bytes = (videos: Array<{ src: string }>) =>
      videos.reduce((total, { src }) => total + statSync(publicFile(src)).size, 0)

    expect(bytes(workVideos)).toBeLessThanOrEqual(28 * 1024 * 1024)
    expect(bytes(aboutVideos)).toBeLessThanOrEqual(5 * 1024 * 1024)
    // October 2026 redesign films, appended to Work and lazy-loaded tile by
    // tile, so this worst case is never one download. Desktop keeps the
    // client-approved near-source quality (1080p where the original has it,
    // Oct 2026); phones load the light -m.mp4 encodes (bounded separately).
    expect(bytes(workFilms.map((key) => ({ src: filmSrc(key) })))).toBeLessThanOrEqual(160 * 1024 * 1024)
    expect(bytes(workFilms.map((key) => ({ src: mobileVideoSrc(filmSrc(key)) ?? filmSrc(key) })))).toBeLessThanOrEqual(56 * 1024 * 1024)
  })

  it('maps redesign films only to existing case studies', () => {
    const slugs = new Set(caseStudies.map(({ slug }) => slug))
    for (const slug of Object.values(filmCaseStudies)) expect(slugs.has(slug!)).toBe(true)
  })

  it('ships streamable H.264 media without audio or oversized frames', () => {
    for (const { src } of [...workVideos, ...aboutVideos, ...redesignVideos]) {
      const metadata = probe(src)
      const videoStreams = metadata.streams.filter(({ codec_type }) => codec_type === 'video')
      const audioStreams = metadata.streams.filter(({ codec_type }) => codec_type === 'audio')
      const video = videoStreams[0]

      expect(metadata.format.format_name).toContain('mp4')
      expect(Number(metadata.format.duration)).toBeGreaterThan(0)
      // Desktop masters stay sharp (Oct 2026 client decision, up to 1080p);
      // phone encodes, where present, stay light enough for iPhones.
      expect(Number(metadata.format.bit_rate)).toBeLessThanOrEqual(5_000_000)
      const mobile = mobileVideoSrc(src)
      if (mobile) expect(Number(probe(mobile).format.bit_rate)).toBeLessThanOrEqual(1_800_000)
      expect(videoStreams).toHaveLength(1)
      expect(audioStreams).toHaveLength(0)
      expect(video.codec_name).toBe('h264')
      expect(video.pix_fmt).toBe('yuv420p')
      // Up to 1080x1920 (Oct 2026, client request for sharper video: Work
      // films re-encoded from their best available originals). Never upscaled
      // beyond the source; bitrate and transfer budgets bound payload size.
      expect(video.width).toBeLessThanOrEqual(1080)
      expect(video.height).toBeLessThanOrEqual(1920)

      const contents = readFileSync(publicFile(src))
      const moov = contents.indexOf(Buffer.from('moov'))
      const mdat = contents.indexOf(Buffer.from('mdat'))
      expect(moov).toBeGreaterThan(0)
      expect(moov).toBeLessThan(mdat)
    }
  })
})
