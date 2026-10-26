// Real-visitor speed reporting (Core Web Vitals). The browser sends one small
// beacon per page view; the server validates it and writes one log line per
// metric to the journal. No cookies, IPs or user agents are stored.
// Read the data with `journalctl -u caagency-website -o cat | node scripts/vitals-report.mjs`.

export const VITALS_PATH = '/api/vitals'
export const MAX_VITALS_BODY_BYTES = 2048

const METRICS = new Set(['LCP', 'INP', 'CLS', 'FCP', 'TTFB'])
const RATINGS = new Set(['good', 'needs-improvement', 'poor'])
const DEVICES = new Set(['mobile', 'desktop'])
const CONNECTIONS = new Set(['slow-2g', '2g', '3g', '4g', 'unknown'])

export type VitalsMetric = { name: string; value: number; rating: string }
export type VitalsBeacon = { path: string; device: string; connection: string; metrics: VitalsMetric[] }
export type VitalsLine = { m: string; v: number; r: string; p: string; d: string; c: string }

// Group profile and post URLs so one popular page doesn't scatter the data.
export function normalizeVitalsPath(path: string): string {
  const clean = path.split(/[?#]/)[0].slice(0, 120)
  return clean
    .replace(/^\/(talents|blog|case-studies|services)\/[^/]+$/, '/$1/[slug]')
    .replace(/^\/(ar|de|es|fr|ko|zh)(?=\/|$)/, '/[locale]')
}

/** Returns the log lines for a valid beacon, or null when anything is off. */
export function parseVitalsBeacon(input: unknown): VitalsLine[] | null {
  if (!input || typeof input !== 'object') return null
  const { path, device, connection, metrics } = input as Partial<VitalsBeacon>
  if (typeof path !== 'string' || !path.startsWith('/') || path.length > 300) return null
  if (typeof device !== 'string' || !DEVICES.has(device)) return null
  const conn = typeof connection === 'string' && CONNECTIONS.has(connection) ? connection : 'unknown'
  if (!Array.isArray(metrics) || metrics.length === 0 || metrics.length > 5) return null
  const lines: VitalsLine[] = []
  for (const metric of metrics) {
    if (!metric || typeof metric !== 'object') return null
    const { name, value, rating } = metric as Partial<VitalsMetric>
    if (typeof name !== 'string' || !METRICS.has(name)) return null
    if (typeof rating !== 'string' || !RATINGS.has(rating)) return null
    const max = name === 'CLS' ? 10 : 120_000
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > max) return null
    const v = name === 'CLS' ? Math.round(value * 1000) / 1000 : Math.round(value)
    lines.push({ m: name, v, r: rating, p: normalizeVitalsPath(path), d: device, c: conn })
  }
  return lines
}
