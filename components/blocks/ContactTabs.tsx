'use client'

import { useState, type ReactNode } from 'react'

// Brand / influencer switch for the contact page form. Both forms stay
// mounted so typed values survive switching tabs; the brand form is default.
export default function ContactTabs({
  tabs,
}: {
  tabs: Array<{ id: string; label: string; intro: string; panel: ReactNode }>
}) {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <div>
      <div role="tablist" aria-label="Contact form" className="mb-6 inline-flex rounded-full border border-white/25 p-1">
        {tabs.map((tab) => {
          const on = tab.id === active
          return (
            <button
              key={tab.id}
              id={`contact-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`contact-panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 font-jost text-[12px] font-medium uppercase tracking-[0.16em] transition-colors mobile:px-4 mobile:text-[11px] ${
                on ? 'bg-white text-[#0e0e0e]' : 'text-white/75 hover:text-white'
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
          <p className="mb-8 max-w-[560px] font-work-sans text-[16px] leading-[1.75] text-white/75">{tab.intro}</p>
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
