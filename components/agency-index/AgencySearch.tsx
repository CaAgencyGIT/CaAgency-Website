'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'

export type SearchEntry = { slug: string; names: string[] }

const normalize = (value: string) =>
  value.normalize('NFD').replace(/\p{M}+/gu, '').toLowerCase().replace(/\s+/g, ' ').trim()

// Search for the Agency Index (Nov 2026). The roster is server-rendered; this
// hides non-matching cards in place (so clearing restores the original order),
// hides the campaign feature while searching, hides the "Beyond beauty"
// section when none of its creators match, and shows the empty state.
// Matches names case- and diacritic-insensitively.
export default function AgencySearch({
  entries,
  labels,
}: {
  entries: SearchEntry[]
  labels: { search: string; placeholder: string; clear: string; countAll: string; /** Result-count text for 0..roster size, pre-formatted on the server. */ countFound: string[] }
}) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const index = useMemo(() => entries.map((e) => ({ slug: e.slug, keys: e.names.map(normalize) })), [entries])
  const needle = normalize(query)
  const matches = useMemo(
    () => (needle ? new Set(index.filter((e) => e.keys.some((k) => k.includes(needle))).map((e) => e.slug)) : null),
    [index, needle]
  )

  useEffect(() => {
    const root = document.getElementById('roster')
    if (!root) return
    root.querySelectorAll<HTMLElement>('[data-talent-slug]').forEach((card) => {
      card.hidden = matches ? !matches.has(card.dataset.talentSlug ?? '') : false
    })
    const any = (sel: string) => !!root.querySelector(`${sel} [data-talent-slug]:not([hidden])`)
    const more = document.getElementById('additional-section')
    if (more) more.hidden = !any('#additional-roster')
    const beautyLeft = any('#first-roster') || any('#remaining-roster')
    const feature = document.getElementById('talent-in-action')
    if (feature) feature.hidden = !!matches || !beautyLeft
    const total = matches ? matches.size : entries.length
    const empty = document.getElementById('empty-state')
    if (empty) empty.hidden = total > 0
    const top = root.querySelector<HTMLElement>('.roster-top')
    if (top) top.hidden = total === 0
  }, [matches, entries.length])

  // The empty state's "View all talent" button clears the search.
  useEffect(() => {
    const reset = () => {
      setQuery('')
      inputRef.current?.focus()
    }
    window.addEventListener('agency-index:reset', reset)
    return () => window.removeEventListener('agency-index:reset', reset)
  }, [])

  return (
    <>
      <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor={id}>
          {labels.search}
        </label>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.8 4.8" />
        </svg>
        <input
          ref={inputRef}
          id={id}
          type="search"
          placeholder={labels.placeholder}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && query) {
              event.preventDefault()
              setQuery('')
            }
          }}
        />
        <button
          type="button"
          className="clear-search"
          aria-label={labels.clear}
          hidden={!query}
          onClick={() => {
            setQuery('')
            inputRef.current?.focus()
          }}
        >
          ×
        </button>
      </form>
      <p className="result-count" aria-live="polite">
        {matches ? labels.countFound[matches.size] : labels.countAll}
      </p>
    </>
  )
}

export function ResetSearchButton({ label }: { label: string }) {
  return (
    <button type="button" className="reset-search" onClick={() => window.dispatchEvent(new Event('agency-index:reset'))}>
      {label}
    </button>
  )
}
