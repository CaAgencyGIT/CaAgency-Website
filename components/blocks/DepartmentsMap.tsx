import { WORLD_COLS, WORLD_LAT1, WORLD_LON0, WORLD_ROWS, WORLD_ROWS_MASK, WORLD_STEP } from '@/lib/data/world-map-dots'

const CELL = 10
const W = WORLD_COLS * CELL
const H = WORLD_ROWS * CELL
const toXY = (lon: number, lat: number) => ({
  x: ((lon - WORLD_LON0) / WORLD_STEP) * CELL,
  y: ((WORLD_LAT1 - lat) / WORLD_STEP) * CELL,
})

// Which department a land dot belongs to (rough continent boundaries); the
// other continents stay neutral.
function regionOf(lon: number, lat: number) {
  if ((lon < -50 && lat > 8) || (lon < -10 && lat > 58)) return 'north-america'
  if (lon >= 34 && lon <= 63 && lat >= 12 && lat < (lon >= 44 ? 40 : 36)) return 'middle-east'
  if (lon >= -25 && lon <= 45 && lat >= 36) return 'europe'
  if ((lon > 45 && lat >= 40) || (lon > 63 && lat > -11)) return 'asia'
  return null
}

const DOTS = WORLD_ROWS_MASK.flatMap((row, r) =>
  [...row].flatMap((cell, c) => {
    if (cell !== '1') return []
    const lon = WORLD_LON0 + (c + 0.5) * WORLD_STEP
    const lat = WORLD_LAT1 - (r + 0.5) * WORLD_STEP
    return [{ cx: c * CELL + CELL / 2, cy: r * CELL + CELL / 2, region: regionOf(lon, lat) }]
  }),
)

// One pin per department, at the market it is named after.
const PINS = [
  { id: 'north-america', ...toXY(-98, 39) },
  { id: 'europe', ...toXY(10, 49) },
  { id: 'middle-east', ...toXY(55.3, 25.2) },
  { id: 'asia', ...toXY(127, 37.5) },
]

// Homepage "Our Departments" world map (Oct 2026): a quiet dot-matrix world
// with the four department continents in blue and a glowing green pin on
// each region's market.
export default function DepartmentsMap() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="departments-map block h-auto w-full" aria-hidden="true">
      {DOTS.map((d) => (
        <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={2.6} fill={d.region ? '#5b8def' : '#dcd8d1'} />
      ))}
      {PINS.map((p) => (
        <g key={p.id}>
          <circle cx={p.x} cy={p.y} r={20} className="departments-map-pulse" />
          <circle cx={p.x} cy={p.y} r={8} className="departments-map-pin" />
        </g>
      ))}
    </svg>
  )
}
