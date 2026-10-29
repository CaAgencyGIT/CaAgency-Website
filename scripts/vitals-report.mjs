// Summarises real-visitor Core Web Vitals from the website's journal:
//   journalctl -u caagency-website --since "-7 days" -o cat | node scripts/vitals-report.mjs
// Prints the 75th percentile (Google's threshold) per page, device and metric. Page views from a window that was not in
// front (f:0, throttled by the browser, usually test sessions) are left out; pass --all to include them.
import { createInterface } from 'node:readline'

const GOOD = { LCP: 2500, INP: 200, CLS: 0.1, FCP: 1800, TTFB: 800 }
const includeUnfocused = process.argv.includes('--all')
const groups = new Map()
let skipped = 0
for await (const line of createInterface({ input: process.stdin })) {
  const at = line.indexOf('[vitals] ')
  if (at === -1) continue
  let row
  try { row = JSON.parse(line.slice(at + 9)) } catch { continue }
  if (row.f === 0 && !includeUnfocused) { skipped++; continue }
  for (const key of [`${row.p} ${row.d}`, `ALL ${row.d}`]) {
    const metrics = groups.get(key) ?? {}
    ;(metrics[row.m] ??= []).push(row.v)
    groups.set(key, metrics)
  }
}
const p75 = (values) => [...values].sort((a, b) => a - b)[Math.ceil(values.length * 0.75) - 1]
const order = [...groups.keys()].sort((a, b) => (a.startsWith('ALL') ? -1 : b.startsWith('ALL') ? 1 : a.localeCompare(b)))
if (!order.length) console.log('No [vitals] lines yet.')
if (skipped) console.log(`(left out ${skipped} metric lines from windows that were not in front; --all includes them)`)
for (const key of order) {
  const cells = Object.keys(GOOD).filter((m) => groups.get(key)[m]).map((m) => {
    const values = groups.get(key)[m]
    const v = p75(values)
    return `${m} ${m === 'CLS' ? v.toFixed(3) : `${v}ms`}${v <= GOOD[m] ? '' : ' (slow)'} n=${values.length}`
  })
  console.log(`${key.padEnd(34)} ${cells.join(' | ')}`)
}
