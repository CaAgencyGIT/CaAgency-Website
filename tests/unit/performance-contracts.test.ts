import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { featuredVideos } from '@/lib/data/home'
import {
  getRevealAttributes,
  getStaggerAttributes,
  getStaggerItemStyle,
} from '@/lib/performance/reveal'

const readSource = (path: string) => readFileSync(path, 'utf8')

describe('critical resource loading', () => {
  it('preloads only the first hero carousel image without competing priority hints', () => {
    const source = readSource('components/blocks/CoverflowCarousel.tsx')

    expect(source).toContain('preload={index === 0}')
    expect(source).toContain("fetchPriority={isActive ? 'high' : 'low'}")
    expect(source).toContain('quality={isHighQuality ? 70 : 45}')
  })

  it('keeps the FAQ and brand marquee out of the client hydration graph', () => {
    expect(readSource('components/blocks/FAQ.tsx')).not.toContain("'use client'")
    expect(readSource('components/blocks/BrandCarousel.tsx')).not.toContain("'use client'")
  })

  it('keeps layout-wide client components independent of next-intl context', () => {
    for (const file of [
      'components/layout/Header.tsx',
      'components/ui/Breadcrumbs.tsx',
      'components/ui/CookieConsent.tsx',
      'components/ui/LanguageSwitcher.tsx',
      'components/ui/VideoPlayer.tsx',
    ]) {
      expect(readSource(file)).not.toContain("from 'next-intl'")
    }
  })

  it('ships no next-intl client provider or formatter — contact form labels resolve on the server', () => {
    for (const file of [
      'app/(site)/layout.tsx',
      'app/[locale]/layout.tsx',
    ]) {
      expect(readSource(file)).not.toContain('NextIntlClientProvider')
    }
    for (const file of [
      'components/layout/Footer.tsx',
      'components/ui/Button.tsx',
      'components/blocks/CoverflowCarousel.tsx',
    ]) {
      expect(readSource(file)).not.toContain("from '@/i18n/routing'")
    }

    const contactPage = readSource('app/[locale]/contact/page.tsx')
    expect(contactPage).not.toContain('NextIntlClientProvider')
    expect(contactPage).toContain('buildContactFormLabels(')
    expect(readSource('components/blocks/contact/ContactForms.tsx')).not.toContain("from 'next-intl'")
    expect(readSource('components/blocks/contact/fields.tsx')).not.toContain("from 'next-intl'")
  })

  it('keeps routing configuration free of unused client navigation wrappers', () => {
    const source = readSource('i18n/routing.ts')
    expect(source).not.toContain('next-intl/navigation')
    expect(source).not.toContain('createNavigation')
  })

  it('keeps the animated brand strip below a compact DOM budget', () => {
    const source = readSource('components/blocks/BrandCarousel.tsx')
    expect(source).toContain('data-brand-strip')
    expect(source).not.toContain('relative w-[120px] mobile:w-[84px]')
  })

  it('keeps Jost out of the global font preload set', () => {
    const source = readSource('lib/fonts.ts')
    const jostConfig = source.slice(source.indexOf('export const Jost'))

    expect(jostConfig).toContain('preload: false')
  })

  it('keeps reveal and stagger markup server-renderable', () => {
    expect(getRevealAttributes({ delay: 0.3, duration: 0.5, yOffset: 20, once: true })).toEqual({
      'data-reveal': '',
      'data-reveal-once': 'true',
      style: {
        '--reveal-delay': '300ms',
        '--reveal-duration': '500ms',
        '--reveal-y': '20px',
      },
    })
    expect(getStaggerAttributes({ stagger: 0.08, delayChildren: 0.1, once: true })).toEqual({
      'data-stagger': '',
      'data-reveal-once': 'true',
      style: {
        '--stagger-delay': '100ms',
        '--stagger-gap': '80ms',
      },
    })
  })

  it('clamps unsafe reveal timing values and generates stagger item timing', () => {
    expect(getRevealAttributes({ delay: Number.NaN, duration: 20, yOffset: -400, once: false }))
      .toMatchObject({
        'data-reveal-once': 'false',
        style: {
          '--reveal-delay': '0ms',
          '--reveal-duration': '10000ms',
          '--reveal-y': '-200px',
        },
      })
    expect(getStaggerItemStyle({ index: 2.4, stagger: 0.1, delayChildren: 0.2 })).toEqual({
      '--stagger-index': '2',
      '--stagger-item-delay': '400ms',
      '--stagger-y': '28px',
      '--stagger-duration': '600ms',
    })
  })

  it('uses unique versioned featured videos within the transfer budget', () => {
    const sources = featuredVideos.map(({ src }) => src)
    expect(sources).toHaveLength(4)
    expect(new Set(sources).size).toBe(sources.length)
    expect(sources.every((src) => src.endsWith('-perf-v2.mp4'))).toBe(true)

    const totalBytes = featuredVideos.reduce((sum, { src, poster }) => {
      const videoPath = path.join(process.cwd(), 'public', src)
      const posterPath = path.join(process.cwd(), 'public', poster)
      expect(existsSync(videoPath)).toBe(true)
      expect(existsSync(posterPath)).toBe(true)
      return sum + statSync(videoPath).size
    }, 0)

    expect(totalBytes).toBeLessThanOrEqual(7 * 1024 * 1024)
  })
})
