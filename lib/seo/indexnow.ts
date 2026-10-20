// IndexNow: instant URL submission to Bing, Yandex, Naver, and Seznam when
// content changes. Google does not participate — Google indexing runs through
// Search Console + sitemaps instead.
//
// The key is public BY PROTOCOL: ownership is proven by serving it at
// /<key>.txt (see public/), so a constant is correct here — it is not a secret.
export const INDEXNOW_KEY = 'edba0a2c3d98ad29bbfca51f0f73c0a4'

const SITE_HOST = 'caagency.com'
const BASE_URL = `https://${SITE_HOST}`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

/**
 * Submit changed paths (e.g. '/blog/my-post') or absolute URLs to IndexNow.
 * Fire-and-forget semantics for callers: never throws, returns the number of
 * URLs submitted (0 on failure or outside production). Await it so the
 * submission finishes before the response is sent.
 */
export async function pingIndexNow(paths: string[]): Promise<number> {
  if (process.env.NODE_ENV !== 'production' || process.env.PREVIEW_MODE === 'true') return 0

  const urlList = [...new Set(paths)]
    .map((p) => (p.startsWith('http') ? p : `${BASE_URL}${p.startsWith('/') ? p : `/${p}`}`))
    .filter((url) => url.startsWith(BASE_URL))

  if (urlList.length === 0) return 0

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
      signal: controller.signal,
    })
    clearTimeout(timer)

    // 200/202 = accepted. Anything else is logged and swallowed — indexing
    // pings must never affect the admin request that triggered them.
    if (!response.ok && response.status !== 202) {
      console.warn(`IndexNow submission returned ${response.status}`)
      return 0
    }
    return urlList.length
  } catch (error) {
    console.warn('IndexNow submission failed:', error)
    return 0
  }
}
