import { MAP_ROWS_MASK } from '@/lib/data/office-map-dots'

export const OFFICE_MAP_CELL = 10

// The office map's dot matrix, rendered on the server: the dots never change,
// so neither the mask nor hundreds of <circle> nodes ship to the browser as
// JavaScript or hydrate. The client OfficeMap places this inside its <svg>.
export default function OfficeMapDots() {
  const cell = OFFICE_MAP_CELL
  const dots: Array<{ cx: number; cy: number; d: number }> = []
  MAP_ROWS_MASK.forEach((row, r) => {
    for (let c = 0; c < row.length; c++) {
      if (row[c] === '1') dots.push({ cx: c * cell + cell / 2, cy: r * cell + cell / 2, d: c * 9 + r * 4 })
    }
  })
  return (
    <g>
      {dots.map((d) => (
        <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={2.7} className="office-map-dot" style={{ animationDelay: `${d.d}ms` }} />
      ))}
    </g>
  )
}
