import { expect, test, type Page } from '@playwright/test'

test('representative metadata is canonical and branded once', async ({ page }) => {
  for (const path of ['/', '/about', '/influencer-marketing-usa', '/blog', '/services/influencer-campaigns']) {
    await page.goto(path)
    const title = await page.title()
    expect(title.match(/CA Agency/g) ?? []).toHaveLength(1)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href', `https://caagency.com${path === '/' ? '' : path}`
    )
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content', `https://caagency.com${path === '/' ? '' : path}`
    )
  }
})

test('talent profile hydrates without errors or mobile overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto('/talents/albina-mavriqi')
  await page.waitForTimeout(1000)
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390)
  expect(errors.filter((message) => /hydration|React error #418/i.test(message))).toHaveLength(0)
})

async function fillBrandEnquiry(page: Page, message: string) {
  await expect(page.getByRole('button', { name: 'Send enquiry' })).toBeEnabled()
  await page.locator('#brand-name').fill('Test User')
  await page.locator('#brand-email').fill('test@example.com')
  await page.locator('#brand-company').fill('Example Inc')
  await page.locator('#brand-phone').fill('50 123 4567')
  await page.locator('#brand-message').fill(message)
}

async function mockContactVerification(page: Page) {
  // These tests mock delivery below; make verification deterministic too,
  // including builds that have a real public Turnstile site key configured.
  await page.route(/^https:\/\/challenges\.cloudflare\.com\/turnstile\/v0\/api\.js/, (route) =>
    route.fulfill({
      contentType: 'application/javascript',
      body: `window.turnstile={render(container,options){queueMicrotask(()=>options.callback('test-token'));return 'test-widget'},remove(){}};`,
    })
  )
}

// Keyboard submit: the sticky header can cover the button after Playwright
// scrolls it into view.
async function submitBrandEnquiry(page: Page) {
  const submit = page.getByRole('button', { name: 'Send enquiry' })
  await submit.focus()
  await submit.press('Enter')
}

test('contact success persists and fields expose autofill purpose', async ({ page }) => {
  await mockContactVerification(page)
  await page.route('**/api/contact', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' })
  )
  await page.goto('/contact')
  await expect(page.locator('#brand-name')).toHaveAttribute('autocomplete', 'name')
  await expect(page.locator('#brand-email')).toHaveAttribute('autocomplete', 'email')
  await expect(page.locator('#brand-company')).toHaveAttribute('autocomplete', 'organization')
  await expect(page.locator('#brand-phone')).toHaveAttribute('autocomplete', 'tel-national')

  await fillBrandEnquiry(page, 'Testing the contact form success state.')
  await submitBrandEnquiry(page)
  await expect(page.getByRole('status')).toBeVisible()
  await page.waitForTimeout(3500)
  await expect(page.getByRole('status')).toBeVisible()
})

test('contact provider failure stays visible and preserves visitor input', async ({ page }) => {
  await mockContactVerification(page)
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: '{"error":"Delivery unavailable","code":"DELIVERY_FAILED"}',
    })
  )
  await page.goto('/contact')
  await fillBrandEnquiry(page, 'Keep this message available after a delivery failure.')
  await submitBrandEnquiry(page)
  const alert = page.locator('div[role="alert"][tabindex="-1"]')
  await expect(alert).toBeVisible()
  await expect(alert).toBeFocused()
  await expect(page.locator('#brand-message')).toHaveValue(
    'Keep this message available after a delivery failure.'
  )
  await expect(page.getByRole('button', { name: 'Send enquiry' })).toBeEnabled()
})

test('work grid autoplays its sharp encodes even with reduced motion', async ({ browser }) => {
  // Client decision (Oct 2026): the muted Work grid ignores prefers-reduced-motion.
  const context = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await context.newPage()
  await page.goto('/work')
  const frame = page.locator('[data-video-frame]').first()
  await frame.evaluate((node) => node.scrollIntoView({ block: 'center' }))
  const video = frame.locator('video')
  await expect(video).toHaveAttribute('src', /-sharp-v2(-m)?\.mp4$/)
  await expect.poll(() => video.evaluate((media: HTMLVideoElement) =>
    !media.paused && media.currentTime > 0
  ), { timeout: 15_000 }).toBe(true)
  await context.close()
})

test('brand marquee keeps two seamless tracks with a flat DOM', async ({ page }) => {
  await page.goto('/')
  const strip = page.locator('[data-brand-strip]')
  const tracks = strip.locator(':scope > div')
  await expect(tracks).toHaveCount(2)
  const logos = await tracks.evaluateAll((nodes) => nodes.map((node) => node.querySelectorAll('img').length))
  expect(logos[0]).toBeGreaterThan(0)
  expect(logos[1]).toBe(logos[0])
  // One element per logo plus the two tracks: no per-logo wrappers.
  expect(await strip.locator('*').count()).toBeLessThanOrEqual(logos[0] * 2 + 2)
})

test('privacy settings dialog asks once and reopens from the footer', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Privacy Settings' })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Deny' }).click()
  await expect(dialog).toHaveCount(0)
  await page.reload()
  await page.waitForTimeout(1200)
  await expect(dialog).toHaveCount(0)
  await page.getByRole('button', { name: 'Privacy settings' }).click()
  await expect(dialog).toBeVisible()
})

test('explicit English locale redirects permanently', async ({ request }) => {
  const response = await request.get('/en/about', { maxRedirects: 0 })
  expect(response.status()).toBe(308)
  expect(response.headers().location).toBe('/about')
})
