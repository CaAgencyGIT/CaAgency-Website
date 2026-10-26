import { expect, test } from '@playwright/test'

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

test('contact success persists and fields expose autofill purpose', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' })
  )
  await page.goto('/contact')
  await expect(page.locator('#contactFullName')).toHaveAttribute('autocomplete', 'name')
  await expect(page.locator('#contactEmail')).toHaveAttribute('autocomplete', 'email')
  await expect(page.locator('#contactPhone')).toHaveAttribute('autocomplete', 'tel')
  await expect(page.locator('#contactCompany')).toHaveAttribute('autocomplete', 'organization')

  await page.locator('#contactFullName').fill('Test User')
  await page.locator('#contactEmail').fill('test@example.com')
  await page.locator('#contactPhone').fill('+1 555 123 4567')
  await page.locator('#contactCompany').fill('Example Inc')
  await page.locator('#contactBudget').selectOption('20-40k')
  await page.locator('#contactMessage').fill('Testing the contact form success state.')
  await page.getByRole('button', { name: /get in touch/i }).click()
  await expect(page.getByRole('status')).toBeVisible()
  await page.waitForTimeout(3500)
  await expect(page.getByRole('status')).toBeVisible()
})

test('contact provider failure stays visible and preserves visitor input', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: '{"error":"Delivery unavailable","code":"DELIVERY_FAILED"}',
    })
  )
  await page.goto('/contact')
  await page.locator('#contactFullName').fill('Test User')
  await page.locator('#contactEmail').fill('test@example.com')
  await page.locator('#contactPhone').fill('+1 555 123 4567')
  await page.locator('#contactCompany').fill('Example Inc')
  await page.locator('#contactBudget').selectOption('20-40k')
  await page.locator('#contactMessage').fill('Keep this message available after a delivery failure.')
  await page.getByRole('button', { name: /get in touch/i }).click()
  await expect(page.locator('div[role="alert"][tabindex="-1"]')).toBeVisible()
  await page.getByRole('button', { name: /try again/i }).click()
  await expect(page.locator('#contactMessage')).toHaveValue(
    'Keep this message available after a delivery failure.'
  )
})

test('reduced motion keeps work videos paused and defers MP4 bytes', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await context.newPage()
  const videoResponses: string[] = []
  page.on('response', (response) => {
    if (/\.mp4(?:\?|$)/i.test(response.url())) videoResponses.push(response.url())
  })
  await page.goto('/work')
  await page.waitForTimeout(1000)
  expect(videoResponses).toHaveLength(0)
  const states = await page.locator('video').evaluateAll((videos) =>
    videos.map((video) => {
      const media = video as HTMLVideoElement
      return { paused: media.paused, currentTime: media.currentTime }
    })
  )
  expect(states.every((state) => state.paused && state.currentTime === 0)).toBe(true)
  await context.close()
})

test('work media uses the optimized immutable source on manual play', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await context.newPage()
  const videoRequests: string[] = []
  page.on('request', (request) => {
    const pathname = new URL(request.url()).pathname
    if (pathname.endsWith('.mp4')) videoRequests.push(pathname)
  })

  await page.goto('/work')
  await expect(page.locator('video[src]')).toHaveCount(0)
  await page.getByRole('button', { name: /play video/i }).first().click()
  await expect(page.locator('video[src]')).toHaveCount(1)
  await expect.poll(() => videoRequests.length).toBe(1)
  expect(videoRequests[0]).toMatch(/-web-v1\.mp4$/)
  await context.close()
})

test('brand marquee keeps two seamless tracks with a reduced DOM', async ({ page }) => {
  await page.goto('/')
  const strip = page.locator('[data-brand-strip]')
  await expect(strip.locator(':scope > div')).toHaveCount(2)
  expect(await strip.locator('*').count()).toBeLessThanOrEqual(60)
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
