import Image from 'next/image'
import InViewClass from '@/components/ui/InViewClass'
import { WORLD_COLS, WORLD_LAT1, WORLD_LON0, WORLD_ROWS, WORLD_STEP } from '@/lib/data/world-map-dots'
import { WORLD_DOTS_CELL, WORLD_DOTS_SRC } from '@/lib/data/world-dots-svg'

const CELL = WORLD_DOTS_CELL
const W = WORLD_COLS * CELL
const H = WORLD_ROWS * CELL
const toXY = (lon: number, lat: number) => ({
  x: ((lon - WORLD_LON0) / WORLD_STEP) * CELL,
  y: ((WORLD_LAT1 - lat) / WORLD_STEP) * CELL,
})

// One pin per department, at the market it is named after. Middle East
// (Dubai HQ) is the hub every route flows from.
const PINS = [
  { id: 'north-america', label: 'North America', dy: 44, ...toXY(-98, 39) },
  { id: 'europe', label: 'Europe', dy: -32, ...toXY(10, 49) },
  { id: 'middle-east', label: 'Middle East', dy: 44, ...toXY(55.3, 25.2) },
  { id: 'asia', label: 'Asia', dy: 44, ...toXY(127, 37.5) },
]

// Homepage "Our Departments" world map (Oct 2026): a quiet dot-matrix world
// with a glowing green pin on each department's market and dashed routes
// flowing from the Dubai HQ to the other regions.
const HUB = PINS.find((p) => p.id === 'middle-east')!
// A gentle arc from the hub to each other region, as on the contact map.
const ROUTES = PINS.filter((p) => p !== HUB).map(
  (p) => `M ${HUB.x} ${HUB.y} Q ${(HUB.x + p.x) / 2} ${Math.min(HUB.y, p.y) - Math.max(50, Math.abs(HUB.x - p.x) * 0.22)} ${p.x} ${p.y}`,
)

// Routes draw in once the map scrolls into view (InViewClass adds is-shown).
export default function DepartmentsMap() {
  return (
    <InViewClass className="relative">
    {/* The land dots are one cached image; routes and pins sit on top in
        the same coordinate space. */}
    <Image src={WORLD_DOTS_SRC} alt="" aria-hidden width={W} height={H} unoptimized className="block h-auto w-full" />
    <svg viewBox={`0 0 ${W} ${H}`} className="departments-map absolute inset-0 h-full w-full" aria-hidden="true">
      {ROUTES.map((d, i) => (
        <g key={d}>
          <path d={d} className="departments-map-route" fill="none" />
          <circle r={5} className="departments-map-traveller">
            <animateMotion dur={`${3.4 + i * 0.7}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}
      {PINS.map((p) => (
        <g key={p.id}>
          <circle cx={p.x} cy={p.y} r={20} className="departments-map-pulse" />
          <circle cx={p.x} cy={p.y} r={8} className="departments-map-pin" />
          <text x={p.x} y={p.y + p.dy} textAnchor="middle" className="departments-map-label">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
    </InViewClass>
  )
}
