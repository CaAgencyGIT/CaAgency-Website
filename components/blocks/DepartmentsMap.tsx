import { WORLD_COLS, WORLD_LAT1, WORLD_LON0, WORLD_ROWS, WORLD_ROWS_MASK, WORLD_STEP } from '@/lib/data/world-map-dots'

const CELL = 10
const W = WORLD_COLS * CELL
const H = WORLD_ROWS * CELL
const toXY = (lon: number, lat: number) => ({
  x: ((lon - WORLD_LON0) / WORLD_STEP) * CELL,
  y: ((WORLD_LAT1 - lat) / WORLD_STEP) * CELL,
})

const DOTS = WORLD_ROWS_MASK.flatMap((row, r) =>
  [...row].flatMap((cell, c) => (cell === '1' ? [{ cx: c * CELL + CELL / 2, cy: r * CELL + CELL / 2 }] : [])),
)

// One pin per department, at the market it is named after.
const PINS = [
  { id: 'north-america', ...toXY(-98, 39) },
  { id: 'europe', ...toXY(10, 49) },
  { id: 'middle-east', ...toXY(55.3, 25.2) },
  { id: 'asia', ...toXY(127, 37.5) },
]

// Homepage "Our Departments" world map (Oct 2026): a quiet dot-matrix world
// with a pin on each of the four regions listed below it.
export default function DepartmentsMap() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="departments-map block h-auto w-full" aria-hidden="true">
      {DOTS.map((d) => (
        <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={2.6} fill="#d8d4cd" />
      ))}
      {PINS.map((p) => (
        <g key={p.id}>
          <circle cx={p.x} cy={p.y} r={18} className="departments-map-pulse" />
          <circle cx={p.x} cy={p.y} r={8} fill="#111" />
        </g>
      ))}
    </svg>
  )
}
