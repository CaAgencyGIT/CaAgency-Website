import { WORLD_COLS, WORLD_ROWS, WORLD_ROWS_MASK } from '@/lib/data/world-map-dots'

// Dot-matrix world as a standalone SVG (public/images/site/world-dots-v1.svg),
// so the 1,651 land dots are one cached image instead of markup repeated in
// every homepage's HTML and RSC payload. Regenerate with
// `npx tsx scripts/build-world-dots-svg.ts`; a unit test keeps it in sync.
export const WORLD_DOTS_CELL = 10
export const WORLD_DOTS_SRC = '/images/site/world-dots-v1.svg'

export function worldDotsSvg(fill = '#3f3d3a'): string {
  const C = WORLD_DOTS_CELL
  const R = 2.6
  const d = WORLD_ROWS_MASK.flatMap((row, r) =>
    [...row].flatMap((cell, c) =>
      cell === '1' ? [`M${c * C + C / 2 - R} ${r * C + C / 2}a${R} ${R} 0 1 0 ${2 * R} 0a${R} ${R} 0 1 0 ${-2 * R} 0`] : [],
    ),
  ).join('')
  const w = WORLD_COLS * C
  const h = WORLD_ROWS * C
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><path fill="${fill}" d="${d}"/></svg>\n`
}
