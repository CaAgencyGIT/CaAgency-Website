'use client'

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

// Brand / influencer switch for the contact page form. Both forms stay
// mounted so typed values survive switching tabs; the brand form is default.
export default function ContactTabs({
  tabs,
  label,
}: {
  tabs: Array<{ id: string; label: string; intro: string; panel: ReactNode }>
  label: string
}) {
  const [active, setActive] = useState(tabs[0].id)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  // WAI-ARIA tabs: arrows move between tabs (mirrored for RTL), Home/End jump.
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const rtl = getComputedStyle(e.currentTarget).direction === 'rtl'
    const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key]
    let next: number | undefined
    if (step) next = (index + step + tabs.length) % tabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = tabs.length - 1
    if (next === undefined) return
    e.preventDefault()
    setActive(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className="mb-6 inline-flex rounded-full border border-black/15 p-1">
        {tabs.map((tab, index) => {
          const on = tab.id === active
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el }}
              id={`contact-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`contact-panel-${tab.id}`}
              tabIndex={on ? 0 : -1}
              onKeyDown={(e) => onKeyDown(e, index)}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 font-jost text-[12px] font-medium uppercase tracking-[0.16em] transition-colors mobile:px-4 mobile:text-[11px] ${
                on ? 'bg-[#0e0e0e] text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`contact-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`contact-tab-${tab.id}`}
          hidden={tab.id !== active}
        >
          <p className="mb-8 max-w-[560px] font-work-sans text-[16px] leading-[1.75] text-foreground-body mobile:mb-6 mobile:text-[14.5px] mobile:leading-[1.7]">{tab.intro}</p>
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
