import { test, expect } from '@playwright/test'

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
  expect(heroImagePreloads).toHaveLength(1)

  const hero = page.getByRole('region', { name: 'Featured creators' })
  await expect(hero.locator('img[fetchpriority="high"]')).toHaveCount(1)
  await expect(hero.locator('img[fetchpriority="low"]')).toHaveCount(2)
  const heroSources = await hero.locator('img').evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).currentSrc)
  )
  expect(heroSources.filter((src) => src.includes('q=70'))).toHaveLength(1)
  expect(heroSources.filter((src) => src.includes('q=45'))).toHaveLength(2)
})

test('below-fold controllers load only when their server fallback approaches', async ({ page }) => {
  const scripts: string[] = []
  page.on('request', (request) => {
    if (request.resourceType() === 'script') scripts.push(new URL(request.url()).pathname)
  })
  await page.goto('/', { waitUntil: 'load' })
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

test('homepage waits for navigation intent before route prefetching', async ({ page }) => {
  const rscPaths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.searchParams.has('_rsc')) rscPaths.push(url.pathname)
  })

  await page.goto('/', { waitUntil: 'load' })
  await page.waitForTimeout(1500)
  expect(rscPaths).toEqual([])

  const aboutLink = page.locator('header.hidden a[href="/about"]')
  await expect(aboutLink).toHaveCount(1)
  await aboutLink.hover()
  await expect.poll(() => rscPaths.length).toBeGreaterThan(0)
  expect(new Set(rscPaths)).toEqual(new Set(['/about']))
})

test('keyboard focus warms only the focused desktop route', async ({ page }) => {
  const rscPaths: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.searchParams.has('_rsc')) rscPaths.push(url.pathname)
  })

  await page.goto('/', { waitUntil: 'load' })
  await page.locator('header.hidden a[href="/talents"]').focus()
  await expect.poll(() => rscPaths.length).toBeGreaterThan(0)
  expect(new Set(rscPaths)).toEqual(new Set(['/talents']))

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
  await page.waitForTimeout(750)
  expect(rscPaths).toEqual([])
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

test('FAQ and hero carousel retain interactive behavior', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' })

  const faqQuestion = page.locator('#faq-question-1')
  await faqQuestion.scrollIntoViewIfNeeded()
  await faqQuestion.click()
  await expect(faqQuestion.locator('xpath=..')).toHaveAttribute('open', '')
  await expect(page.locator('#faq-question-0').locator('xpath=..')).not.toHaveAttribute('open', '')

  const carousel = page.getByRole('region', { name: 'Featured creators' })
  await carousel.focus()
  await carousel.press('ArrowRight')
  await expect(carousel.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
    'aria-current',
    'true'
  )
  await expect(carousel.locator('a.translate-x-0 img')).toHaveAttribute('fetchpriority', 'high')
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
