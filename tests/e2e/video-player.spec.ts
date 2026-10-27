import { expect, test, type Locator, type Page } from '@playwright/test'

async function requireClickGesture(page: Page) {
  await page.addInitScript(() => {
    const nativePlay = HTMLMediaElement.prototype.play
    let inClick = false
    window.addEventListener('click', () => { inClick = true }, true)
    window.addEventListener('click', () => { inClick = false })
    HTMLMediaElement.prototype.play = function () {
      return inClick
        ? nativePlay.call(this)
        : Promise.reject(new DOMException('Autoplay denied', 'NotAllowedError'))
    }
  })
}

// Centre a player's frame: a 9:16 film can be nearly as tall as a laptop
// viewport, and scrolling only its bottom-corner control into view can leave
// the frame right at the 50% visibility threshold where playback toggles.
// The consent dialog opens over the page after a moment; these tests click
// players, so start with a stored choice.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('ca-agency-cookie-consent', 'declined'))
})

async function centerFrame(frame: Locator) {
  await frame.evaluate((node) => node.scrollIntoView({ block: 'center' }))
}

for (const viewport of [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  test.describe(`shared VideoPlayer on ${viewport.name}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } })

    test('plays in view, pauses off-screen, resumes, and honors manual pause', async ({ page }) => {
      await page.goto('/work')
      const player = page.locator('[data-video-frame]').first()
      await centerFrame(player)
      const video = player.locator('video')

      await expect(video).toBeAttached()
      const control = player.locator('button')
      await expect.poll(() => video.evaluate((media: HTMLVideoElement) =>
        !media.paused && media.currentTime > 0
      ), { timeout: 15_000 }).toBe(true)
      await expect(control).toHaveAttribute('aria-label', 'Pause video')
      await expect(control).toHaveCSS('opacity', '0')

      await page.locator('footer').scrollIntoViewIfNeeded()
      await expect.poll(() => video.evaluate((media: HTMLVideoElement) => media.paused)).toBe(true)

      await centerFrame(player)
      await expect.poll(() => video.evaluate((media: HTMLVideoElement) => !media.paused)).toBe(true)

      // The transient control is keyboard reachable while visually hidden.
      await control.focus()
      await expect(control).toHaveCSS('opacity', '1')
      await control.press('Enter')
      await expect.poll(() => video.evaluate((media: HTMLVideoElement) => media.paused)).toBe(true)
      await expect(control).toHaveAttribute('aria-label', 'Play video')
      await expect(control).toHaveCSS('opacity', '1')
      await page.locator('footer').scrollIntoViewIfNeeded()
      await centerFrame(player)
      await expect(video).toHaveJSProperty('paused', true)

      // Resume from the keyboard too: on Work tiles the case-study link sits
      // above the player's own stacking context and takes pointer clicks.
      await control.press('Enter')
      await expect.poll(() => video.evaluate((media: HTMLVideoElement) => !media.paused)).toBe(true)
    })
  })
}

for (const path of [
  '/work',
  '/korean-skincare-influencer-marketing',
  '/case-studies/honor-smartphone-launch',
]) {
  test(`shared player advances on ${path}`, async ({ page }) => {
    await page.goto(path)
    // The other routes may keep the shared player below their hero section.
    const frame = page.locator('[data-video-frame]').first()
    await centerFrame(frame)
    const video = frame.locator('video')
    await expect(video).toBeAttached()
    await expect.poll(() => video.evaluate((media: HTMLVideoElement) =>
      !media.paused && media.currentTime > 0
    ), { timeout: 15_000 }).toBe(true)
    await expect(frame.locator('button')).toHaveCSS('opacity', '0')
  })
}

test('every visible work video plays concurrently on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/work')
  await page.locator('button[aria-label="Play video"], button[aria-label="Pause video"]').first().scrollIntoViewIfNeeded()
  await expect.poll(async () => page.locator('video[src]').evaluateAll((videos) => {
    const visible = videos.filter((node) => {
      const rect = node.getBoundingClientRect()
      return rect.bottom > 10 && rect.top < innerHeight - 10
    }) as HTMLVideoElement[]
    return visible.length >= 4 && visible.every((video) => !video.paused && video.currentTime > 0)
  }), { timeout: 15_000 }).toBe(true)
})

test('work video pauses on tab visibility change and resumes on return', async ({ page }) => {
  await page.goto('/work')
  await page.locator('button[aria-label="Play video"], button[aria-label="Pause video"]').first().scrollIntoViewIfNeeded()
  const video = page.locator('video[src]').first()
  await expect.poll(() => video.evaluate((media: HTMLVideoElement) => !media.paused)).toBe(true)

  // Headless Chromium does not consistently mark a background Page hidden;
  // dispatch the browser event deterministically to cover our handler.
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  await expect.poll(() => page.evaluate(() => document.hidden)).toBe(true)
  await expect(video).toHaveJSProperty('paused', true)

  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: false })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  await expect.poll(() => video.evaluate((media: HTMLVideoElement) => !media.paused)).toBe(true)
})

test('blocked autoplay recovers from the actual Play gesture', async ({ page }) => {
  await requireClickGesture(page)
  await page.goto('/work')
  const player = page.locator('[data-video-frame]').first()
  await centerFrame(player)
  const video = player.locator('video')
  await expect(video).toBeAttached()
  // Autoplay is denied; the poster stays and the control is keyboard reachable.
  await page.waitForTimeout(1500)
  await expect(video).toHaveJSProperty('paused', true)
  const control = player.locator('button')
  await control.focus()
  await control.press('Enter')
  await expect.poll(() => video.evaluate((media: HTMLVideoElement) =>
    !media.paused && media.currentTime > 0
  ), { timeout: 15_000 }).toBe(true)
})

test('failed media source can recover after a manual retry', async ({ page, browserName }) => {
  let requests = 0
  if (browserName !== 'webkit') {
    await page.route(/\/videos\/work\/albina-sephora-sharp-v2(-m)?\.mp4$/, (route) => {
      requests++
      return requests === 1 ? route.fulfill({ status: 404, body: '' }) : route.continue()
    })
  }
  await page.goto('/work')
  const player = page.locator('[data-video-frame]').first()
  await centerFrame(player)
  const video = player.locator('video')
  await expect(video).toHaveAttribute('src', /albina-sephora-sharp-v2/)
  const control = player.locator('button')
  if (browserName === 'webkit') {
    // Windows WebKit's media process bypasses Playwright request routing.
    // Dispatch the media error after playback starts to exercise the same UI.
    await expect.poll(() => video.evaluate((media: HTMLVideoElement) => !media.paused)).toBe(true)
    await video.evaluate((media: HTMLVideoElement) => media.dispatchEvent(new Event('error')))
  } else {
    await expect.poll(() => video.evaluate((media: HTMLVideoElement) => media.error !== null)).toBe(true)
  }
  // The control offers a retry as soon as the source fails. The Work tile is
  // covered by its case-study link, so the retry runs from the keyboard.
  await expect(control).toHaveAttribute('aria-label', 'Play video')
  await control.focus()
  await control.press('Enter')
  if (browserName !== 'webkit') await expect.poll(() => requests).toBeGreaterThan(1)
  await expect.poll(() => video.evaluate((media: HTMLVideoElement) =>
    media.error === null && !media.paused && media.currentTime > 0
  ), { timeout: 15_000 }).toBe(true)
})
