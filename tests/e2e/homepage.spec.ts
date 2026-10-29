import { test, expect } from '@playwright/test'

// The consent dialog is modal and would intercept hovers and clicks.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('ca-agency-cookie-consent', 'declined'))
})

test('homepage renders hero and key sections', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/CA Agency/)
  await expect(page.locator('h1')).toBeVisible()
  await expect(page.getByRole('heading', { name: /Meet the Talents/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /What Our Clients Say/i })).toHaveCount(0)
})

for (const width of [390, 1024, 1440]) {
  test(`homepage reserves preload bandwidth for critical assets at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')

    const preloads = await page.locator('link[rel="preload"]').evaluateAll((links) =>
      links.map((link) => {
        const element = link as HTMLLinkElement
        return {
          as: element.as,
          href: element.href,
          imageSrcSet: element.imageSrcset,
          priority: element.fetchPriority,
          matches: !element.media || window.matchMedia(element.media).matches,
        }
      })
    )

    const fontPreloads = preloads.filter(({ as }) => as === 'font')
    const heroImagePreloads = preloads.filter(
      ({ as, imageSrcSet }) =>
        as === 'image' && imageSrcSet.includes('%2Fimages%2Fhero%2F')
    )

    expect(fontPreloads).toHaveLength(2)
    // Phones preload only the first row; wider screens retain the full mosaic.
    expect(heroImagePreloads.filter(({ matches }) => matches)).toHaveLength(width <= 760 ? 2 : 6)
    if (width > 1100) {
      const desktopHints = heroImagePreloads.filter(({ matches }) => matches)
      expect(desktopHints.filter(({ priority }) => priority === 'high')).toHaveLength(4)
      expect(desktopHints.filter(({ priority }) => priority === 'low')).toHaveLength(2)
    }

    // A responsive preload must select exactly the same candidates as its image.
    const imageSrcSets = await page.locator('.home-collage img, .home-collage source').evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement | HTMLSourceElement).srcset)
    )
    expect(heroImagePreloads.every(({ imageSrcSet }) => imageSrcSets.includes(imageSrcSet))).toBe(true)

    const collage = page.locator('main section').first().locator('img[src*="%2Fimages%2Fhero%2F"]')
    const priorities = await collage.evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).fetchPriority)
    )
    expect(priorities).toHaveLength(6)
    expect(priorities.slice(0, 2)).toEqual(['high', 'high'])
    expect(priorities.slice(2).every((value) => value !== 'high')).toBe(true)
  })
}

test('Retina desktop requests only the cropped candidates at the original quality', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 })
  try {
    await context.addInitScript(() => localStorage.setItem('ca-agency-cookie-consent', 'declined'))
    const page = await context.newPage()
    const requested = new Set<string>()
    page.on('request', request => {
      const url = new URL(request.url())
      if (url.searchParams.get('url')?.startsWith('/images/hero/collage-')) requested.add(url.href)
    })
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    expect(requested.size).toBe(6)
    const candidates = [...requested].map(url => new URL(url).searchParams)
    expect(candidates.every(p => p.get('q') === '90' && Number(p.get('w')) <= 828)).toBe(true)
    expect(candidates.filter(p => p.get('url')?.includes('/collage-desktop-v1/'))).toHaveLength(5)
    expect(candidates.filter(p => p.get('url')?.includes('/collage-v2/'))).toHaveLength(1)
    await expect.poll(() => page.locator('.home-collage img').evaluateAll(images =>
      images.every(image => (image as HTMLImageElement).currentSrc.includes('/_next/image') && (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 8)
    )).toBe(true)
    // Keep enough actual bitmap pixels for a 2x display, including height;
    // a smaller width alone can look soft when object-fit covers a tall tile.
    const sharp = await page.locator('.home-collage img').evaluateAll(async images => {
      return Promise.all(images.map(async node => {
        const image = node as HTMLImageElement
        const bitmap = await createImageBitmap(await (await fetch(image.currentSrc)).blob())
        const rect = image.getBoundingClientRect()
        const sufficient = bitmap.width >= Math.ceil(rect.width * 2) && bitmap.height >= Math.ceil(rect.height * 2)
        bitmap.close()
        return sufficient
      }))
    })
    expect(sharp.every(Boolean)).toBe(true)
  } finally {
    await context.close()
  }
})

for (const height of [700, 844]) {
  test(`mobile collage withholds offscreen photos until scroll at ${height}px`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height })
    const requested = new Set<string>()
    page.on('request', (request) => {
      const src = new URL(request.url()).searchParams.get('url')
      if (src?.startsWith('/images/hero/collage-v2/')) requested.add(src)
    })
    await page.goto('/', { waitUntil: 'networkidle' })
    const collage = page.locator('.home-collage')
    const last = collage.locator('.home-collage-tile').last()
    const lastSrc = await last.locator('img').getAttribute('src')
    const source = new URL(lastSrc!, page.url()).searchParams.get('url')!
    expect(await last.evaluate((el) => el.getBoundingClientRect().top)).toBeGreaterThan(height)
    expect(requested.has(source)).toBe(false)
    expect(requested.size).toBeLessThan(6)
    await expect(last.locator('picture')).toHaveAttribute('data-photo-state', 'waiting')
    await last.scrollIntoViewIfNeeded()
    await expect.poll(() => requested.has(source)).toBe(true)
    await expect.poll(() => last.locator('img').evaluate((img: HTMLImageElement) =>
      img.currentSrc.includes('/_next/image') && img.complete && img.naturalWidth > 0
    )).toBe(true)
  })
}

test('About collage stays out of the preload queue and renders on scroll', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const requested: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('%2Fimages%2Fhero%2Fcollage-v2%2F')) requested.push(request.url())
  })
  await page.goto('/about', { waitUntil: 'networkidle' })
  expect(requested).toHaveLength(0)
  await expect(page.locator('link[rel="preload"][imagesrcset*="%2Fimages%2Fhero%2Fcollage-v2%2F"]')).toHaveCount(0)
  const collage = page.locator('.home-collage')
  await collage.scrollIntoViewIfNeeded()
  await expect.poll(() => collage.locator('img').evaluateAll((images) =>
    images.slice(0, 2).every((image) => {
      const img = image as HTMLImageElement
      return img.currentSrc.includes('/_next/image') && img.complete && img.naturalWidth > 0
    })
  )).toBe(true)
  const last = collage.locator('.home-collage-tile').last()
  await expect(last.locator('picture')).toHaveAttribute('data-photo-state', 'waiting')
  await last.scrollIntoViewIfNeeded()
  await expect(last.locator('picture')).toHaveAttribute('data-photo-state', 'active')
})

test('desktop About collage keeps its cropped images deferred until scroll', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  const photos: string[] = []
  page.on('request', request => {
    const source = new URL(request.url()).searchParams.get('url')
    if (source?.startsWith('/images/hero/collage-')) photos.push(source)
  })
  await page.goto('/about', { waitUntil: 'networkidle' })
  expect(photos).toHaveLength(0)
  const collage = page.locator('.home-collage')
  await collage.scrollIntoViewIfNeeded()
  await expect.poll(() => collage.locator('img').evaluateAll(images =>
    images.every(image => (image as HTMLImageElement).currentSrc.includes('/_next/image') && (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 8)
  )).toBe(true)
  expect(new Set(photos).size).toBe(6)
  expect(photos.filter(source => source.includes('/collage-desktop-v1/'))).toHaveLength(5)
})

test('visible second-row photos start before hydration on tall phones', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const requested = new Set<string>()
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('request', (request) => {
    const src = new URL(request.url()).searchParams.get('url')
    if (src?.startsWith('/images/hero/collage-v2/')) requested.add(src)
  })
  let releaseScripts!: () => void
  const scriptsReady = new Promise<void>((resolve) => { releaseScripts = resolve })
  await page.route(/\/_next\/static\/.*\.js(?:\?|$)/, async (route) => {
    await scriptsReady
    await route.continue()
  })
  try {
    await page.goto('/', { waitUntil: 'commit' })
    await expect.poll(() => requested.size).toBe(4)
    expect([...requested].some((src) => /yasaman|khutjo/.test(src))).toBe(false)
  } finally {
    releaseScripts()
  }
  await page.waitForLoadState('networkidle')
  expect(errors).toEqual([])
})

for (const width of [390, 1920]) {
test(`collage photos remain available with JavaScript disabled at ${width}px`, async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 1080 }, deviceScaleFactor: 2 })
  try {
    const page = await context.newPage()
    await page.goto(`${baseURL}/`)
    const images = page.locator('.home-collage img:visible')
    await expect(images).toHaveCount(6)
    await expect.poll(() => images.evaluateAll((imgs) => imgs.every((image) => {
      const img = image as HTMLImageElement
      return img.complete && img.naturalWidth > 8
    }))).toBe(true)
  } finally {
    await context.close()
  }
})
}

test('below-fold controllers load only when their server fallback approaches', async ({ page }) => {
  const scripts: string[] = []
  page.on('request', (request) => {
    if (request.resourceType() === 'script') scripts.push(new URL(request.url()).pathname)
  })
  const ctaPrefetch = page.waitForRequest((request) => {
    const url = new URL(request.url())
    return url.pathname === '/contact' && url.searchParams.has('_rsc')
  })
  await page.goto('/', { waitUntil: 'load' })
  // The hero CTA prefetch pulls in the /contact route's chunks after load;
  // let it settle so the baseline only leaves out below-fold controllers.
  await ctaPrefetch
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(500)
  const initialScriptCount = new Set(scripts).size

  const deferredVideo = page.locator('[data-deferred="video-showcase"]')
  await expect(deferredVideo).toHaveAttribute('data-deferred-state', 'fallback')
  await expect(deferredVideo.locator('img')).toHaveCount(4)
  await page.waitForTimeout(500)
  expect(new Set(scripts).size).toBe(initialScriptCount)

  await page.getByRole('heading', { name: 'Featured Work' }).scrollIntoViewIfNeeded()
  await expect(deferredVideo).toHaveAttribute('data-deferred-state', 'active')
  await expect(deferredVideo.locator('video[src]').first()).toBeAttached()
  await expect(deferredVideo.getByRole('button', { name: 'Pause video' }).first()).toHaveCSS('opacity', '0')
  await expect.poll(() => new Set(scripts).size).toBeGreaterThan(initialScriptCount)
})

// The home hero and closing CTAs deliberately prefetch when they render.
const ctaRoutes = new Set(['/contact', '/work'])
const headerNavLink = (href: string) => `header[data-site-header] .rd-header-nav a[href="${href}"]`

const headerRoutes = ['/about', '/talents', '/work', '/services', '/blog', '/contact']

test('desktop header routes stay cold during load, then warm once the page is idle', async ({ page }) => {
  const rscPaths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.searchParams.has('_rsc')) rscPaths.push(url.pathname)
  })

  await page.goto('/', { waitUntil: 'load' })
  await page.waitForTimeout(1500)
  // Only the hero and closing CTAs prefetch on sight; the header nav waits
  // for IdleNavPrefetch (3 s after load, then an idle callback).
  expect(rscPaths.filter((path) => !ctaRoutes.has(path))).toEqual([])

  await expect
    .poll(() => headerRoutes.every((route) => rscPaths.includes(route)), { timeout: 10_000 })
    .toBe(true)
})

test('hovering or focusing a header link warms it before the idle prefetch', async ({ page }) => {
  const rscPaths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.searchParams.has('_rsc')) rscPaths.push(url.pathname)
  })

  await page.goto('/', { waitUntil: 'load' })
  await page.locator(headerNavLink('/about')).hover()
  await page.locator(headerNavLink('/talents')).focus()
  await expect.poll(() => rscPaths.includes('/about') && rscPaths.includes('/talents'), { timeout: 2000 }).toBe(true)
})

test('mobile footer and navigation links stay cold without intent', async ({ page }) => {
  const rscPaths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.searchParams.has('_rsc')) rscPaths.push(url.pathname)
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/', { waitUntil: 'load' })
  await page.locator('footer').scrollIntoViewIfNeeded()
  // Past IdleNavPrefetch's delay: phones never warm the header routes.
  await page.waitForTimeout(4500)
  expect(rscPaths.filter((path) => !ctaRoutes.has(path))).toEqual([])
})

test('reveal observer exposes server-rendered content after intersection', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' })
  const reveal = page.locator('[data-reveal]').last()
  await reveal.scrollIntoViewIfNeeded()
  await expect(reveal).toHaveAttribute('data-revealed', 'true')
  await expect.poll(() => reveal.evaluate((node) => getComputedStyle(node).opacity)).toBe('1')
  await expect.poll(() => reveal.evaluate((node) => {
    const transform = new DOMMatrixReadOnly(getComputedStyle(node).transform)
    return [transform.m41, transform.m42]
  })).toEqual([0, 0])
})

test('FAQ keeps one answer open at a time', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' })

  const faqQuestion = page.locator('#faq-question-1')
  await faqQuestion.scrollIntoViewIfNeeded()
  await faqQuestion.click()
  await expect(faqQuestion.locator('xpath=..')).toHaveAttribute('open', '')
  await expect(page.locator('#faq-question-0').locator('xpath=..')).not.toHaveAttribute('open', '')
})

test('featured videos defer bytes and play concurrently in view', async ({ page, browserName }) => {
  const mp4Paths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.pathname.endsWith('.mp4')) mp4Paths.push(url.pathname)
  })

  await page.goto('/', { waitUntil: 'load' })
  await page.waitForTimeout(1000)
  const deferredVideo = page.locator('[data-deferred="video-showcase"]')
  await expect(deferredVideo.locator('video[src]')).toHaveCount(0)
  // Windows WebKit sends media traffic outside Playwright's request hook.
  if (browserName !== 'webkit') expect(mp4Paths).toEqual([])

  const heading = page.getByRole('heading', { name: 'Featured Work' })
  const section = heading.locator('xpath=ancestor::section')
  await deferredVideo.scrollIntoViewIfNeeded()
  await expect(deferredVideo).toHaveAttribute(
    'data-deferred-state',
    'active'
  )
  const tiles = section.locator('.hover-lift')
  await expect(tiles).toHaveCount(4)
  await expect.poll(() => section.locator('video[src]').count()).toBeGreaterThan(1)
  await expect.poll(() => tiles.locator('video').evaluateAll((videos) =>
    videos.filter((video) => !(video as HTMLVideoElement).paused).length
  )).toBeGreaterThan(1)
  if (browserName !== 'webkit') expect(new Set(mp4Paths).size).toBeGreaterThan(1)
})

test('homepage has no critical console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  await page.goto('/', { waitUntil: 'load' })
  await page.waitForTimeout(1500)

  const benign = /ERR_CACHE|favicon/i
  const critical = errors.filter((e) => !benign.test(e))
  expect(critical, critical.join('\n')).toHaveLength(0)
})
