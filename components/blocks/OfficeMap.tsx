'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { MAP_COLS, MAP_LAT1, MAP_LON0, MAP_ROWS, MAP_ROWS_MASK, MAP_STEP } from '@/lib/data/office-map-dots'

export interface MapOffice {
  id: string
  city: string
  label: string
  division: string
  lines: string[]
  mapsUrl: string
  lon: number
  lat: number
}

const CELL = 10
const W = MAP_COLS * CELL
const H = MAP_ROWS * CELL
const toXY = (lon: number, lat: number) => ({
  x: ((lon - MAP_LON0) / MAP_STEP) * CELL,
  y: ((MAP_LAT1 - lat) / MAP_STEP) * CELL,
})

// Contact-page office map (Oct 2026, after weareera.com): dot-matrix map
// with clickable office pins; the selected office shows its details and its
// city name curves around the pin.
export default function OfficeMap({
  heading,
  intro,
  offices,
  openInMapsLabel,
}: {
  heading: string
  intro: string
  offices: MapOffice[]
  openInMapsLabel: string
}) {
  const [active, setActive] = useState(offices[0]?.id)
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        io.disconnect()
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const dots = useMemo(() => {
    const out: Array<{ cx: number; cy: number; d: number }> = []
    MAP_ROWS_MASK.forEach((row, r) => {
      for (let c = 0; c < row.length; c++) {
        if (row[c] === '1') out.push({ cx: c * CELL + CELL / 2, cy: r * CELL + CELL / 2, d: c * 9 + r * 4 })
      }
    })
    return out
  }, [])

  const pts = offices.map((o) => ({ ...o, ...toXY(o.lon, o.lat) }))
  const current = pts.find((o) => o.id === active) ?? pts[0]
  // A dashed route from every branch back to the HQ (the first office).
  const arcs = pts.slice(1).map(
    (o) => `M ${o.x} ${o.y} Q ${(pts[0].x + o.x) / 2} ${Math.min(pts[0].y, o.y) - Math.max(60, Math.abs(pts[0].x - o.x) * 0.3)} ${pts[0].x} ${pts[0].y}`,
  )

  return (
    <section ref={ref} id="offices" className={`office-map bg-[#0e0e0e] text-white px-section-x py-[100px] mobile:py-[60px]${shown ? ' is-shown' : ''}`}>
      <div className="max-w-container mx-auto grid grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-12 tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-8">
        <div className="flex flex-col">
          <h2 className="font-anegra text-[56px] tablet:text-[46px] mobile:text-[36px] leading-[1.05] text-balance">{heading}</h2>
          <div className="mt-6 h-px w-full bg-white/30" />
          <p className="mt-5 font-work-sans text-[15px] leading-[1.75] text-white/75">{intro}</p>

          <div className="mt-8 flex gap-2" role="tablist" aria-label={heading}>
            {offices.map((o) => (
              <button
                key={o.id}
                type="button"
                role="tab"
                aria-selected={o.id === current.id}
                onClick={() => setActive(o.id)}
                className={`rounded-full border px-4 py-2 font-jost text-[13px] uppercase tracking-[0.12em] transition-colors ${
                  o.id === current.id ? 'border-white bg-white text-[#0e0e0e]' : 'border-white/30 text-white/80 hover:border-white'
                }`}
              >
                {o.city}
              </button>
            ))}
          </div>

          <div key={current.id} className="office-map-detail mt-auto pt-10">
            <p className="font-jost text-[12px] uppercase tracking-[0.22em] text-white/55">{current.label}</p>
            <p className="mt-2 font-anegra text-[30px] mobile:text-[26px] leading-tight">{current.division}</p>
            <p dir="ltr" className="mt-3 font-work-sans text-[14px] leading-[1.8] text-white/75">
              {current.lines.join(', ')}
            </p>
            <a
              href={current.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-work-sans text-[14px] text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              {openInMapsLabel} <span aria-hidden="true">↗</span>
            </a>
            <div className="mt-8 h-px w-full bg-white/30" />
          </div>
        </div>

        <div className="relative self-center">
          <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible" aria-hidden="true">
            {dots.map((d, i) => (
              <circle key={i} cx={d.cx} cy={d.cy} r={2.7} className="office-map-dot" style={{ animationDelay: `${d.d}ms` }} />
            ))}
            {arcs.map((arc, i) => (
              <g key={arc}>
                <path d={arc} className="office-map-arc" fill="none" />
                <circle r={4} className="office-map-traveller">
                  <animateMotion dur={`${3.6 + i * 0.8}s`} repeatCount="indefinite" path={arc} />
                </circle>
              </g>
            ))}
            <defs>
              <path id={`city-ring-${current.id}`} d={`M ${current.x - 70} ${current.y - 18} A 70 70 0 0 1 ${current.x + 70} ${current.y - 18}`} />
            </defs>
            <text key={current.id} className="office-map-city">
              <textPath href={`#city-ring-${current.id}`} startOffset="50%" textAnchor="middle">
                {current.city.toUpperCase()}
              </textPath>
            </text>
          </svg>

          {pts.map((o) => {
            const on = o.id === current.id
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => setActive(o.id)}
                aria-label={`${o.label}: ${o.lines.join(', ')}`}
                aria-pressed={on}
                className="office-map-pin absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${(o.x / W) * 100}%`, top: `${(o.y / H) * 100}%` }}
              >
                {on && <span className="office-map-pulse" aria-hidden="true" />}
                <svg viewBox="0 0 24 32" className={`block drop-shadow transition-transform duration-300 ${on ? 'h-[42px] w-[32px] mobile:h-[32px] mobile:w-[24px]' : 'h-[30px] w-[23px] mobile:h-[24px] mobile:w-[18px] hover:scale-110'}`}>
                  <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 32 12 32s12-11.6 12-20.3C24 5.2 18.6 0 12 0z" fill="#fff" />
                  <circle cx="12" cy="11.5" r="4.2" fill="#0e0e0e" />
                </svg>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
