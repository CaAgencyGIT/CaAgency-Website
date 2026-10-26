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
    // client-approved near-source quality; phones load the light -m.mp4
    // encodes instead (bounded separately below).
    expect(bytes(workFilms.map((key) => ({ src: filmSrc(key) })))).toBeLessThanOrEqual(96 * 1024 * 1024)
    expect(bytes(workFilms.map((key) => ({ src: mobileVideoSrc(filmSrc(key)) ?? filmSrc(key) })))).toBeLessThanOrEqual(48 * 1024 * 1024)
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
      // Desktop masters stay sharp (Oct 2026 client decision); the phone
      // encodes, where present, keep the original 1.2 Mbps cap.
      expect(Number(metadata.format.bit_rate)).toBeLessThanOrEqual(2_500_000)
      const mobile = mobileVideoSrc(src)
      if (mobile) expect(Number(probe(mobile).format.bit_rate)).toBeLessThanOrEqual(1_300_000)
      expect(videoStreams).toHaveLength(1)
      expect(audioStreams).toHaveLength(0)
      expect(video.codec_name).toBe('h264')
      expect(video.pix_fmt).toBe('yuv420p')
      // Bumped from 540x960 to the full 720x1280 source resolution (Oct 2026,
      // client request for sharper video) — bitrate and the total transfer
      // budgets below are what actually bound payload size, so re-encoding at
      // full resolution with a higher CRF keeps those unchanged.
      expect(video.width).toBeLessThanOrEqual(720)
      expect(video.height).toBeLessThanOrEqual(1280)

      const contents = readFileSync(publicFile(src))
      const moov = contents.indexOf(Buffer.from('moov'))
      const mdat = contents.indexOf(Buffer.from('mdat'))
      expect(moov).toBeGreaterThan(0)
      expect(moov).toBeLessThan(mdat)
    }
  })
})
