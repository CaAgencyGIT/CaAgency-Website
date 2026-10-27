// Writes public/images/site/office-dots-v1.svg (the contact-page office map's
// dot matrix) from lib/data/office-map-dots.ts. One static image instead of
// ~2,900 animated <circle> nodes. Run: npx tsx scripts/build-office-dots-svg.ts
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { MAP_COLS, MAP_ROWS, MAP_ROWS_MASK } from '../lib/data/office-map-dots'

const CELL = 10
const R = 2.7
const parts: string[] = []
MAP_ROWS_MASK.forEach((row, r) => {
  for (let c = 0; c < row.length; c++) {
    if (row[c] !== '1') continue
    const x = c * CELL + CELL / 2 - R
    const y = r * CELL + CELL / 2
    parts.push(`M${x} ${y}a${R} ${R} 0 1 0 ${R * 2} 0a${R} ${R} 0 1 0 ${-R * 2} 0`)
  }
})
const w = MAP_COLS * CELL
const h = MAP_ROWS * CELL
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><path fill="#3d3d3d" d="${parts.join('')}"/></svg>\n`
writeFileSync(path.join(process.cwd(), 'public/images/site/office-dots-v1.svg'), svg)
console.log(`${parts.length} dots, ${svg.length} bytes`)
