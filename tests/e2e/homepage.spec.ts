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

test('homepage reserves preload bandwidth for critical assets', async ({ page }) => {
  await page.goto('/')

  const preloads = await page.locator('link[rel="preload"]').evaluateAll((links) =>
    links.map((link) => {
      const element = link as HTMLLinkElement
      return {
        as: element.as,
        href: element.href,
        imageSrcSet: element.imageSrcset,
      }
    })
  )

  const fontPreloads = preloads.filter(({ as }) => as === 'font')
  const heroImagePreloads = preloads.filter(
    ({ as, imageSrcSet }) =>
      as === 'image' && imageSrcSet.includes('%2Fimages%2Fhero%2F')
  )

  expect(fontPreloads).toHaveLength(2)
  // The hero collage preloads its first three photos; the rest load lazily.
  expect(heroImagePreloads).toHaveLength(3)

  const collage = page.locator('main section').first().locator('img[src*="%2Fimages%2Fhero%2F"]')
  const loading = await collage.evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).loading)
  )
  expect(loading.length).toBeGreaterThan(3)
  expect(loading.slice(0, 3).every((value) => value !== 'lazy')).toBe(true)
  expect(loading.slice(3).every((value) => value === 'lazy')).toBe(true)
})

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
