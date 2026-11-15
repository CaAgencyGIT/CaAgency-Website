'use client'

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'

export type DirectoryEntry = {
  slug: string
  /** Name plus any other names the talent is known by (e.g. the card name). */
  names: string[]
}

interface TalentDirectoryProps {
  /** Search index for the roster; the cards themselves come in as children
   * (server-rendered TalentGrid) and are shown/hidden by data-talent-slug,
   * so the grid's code and data never ship to the browser. */
  entries: DirectoryEntry[]
  children: ReactNode
  labels: {
    search: string
    placeholder: string
    clear: string
    /** Contains a `{query}` placeholder. */
    noResults: string
  }
}

// Letters that NFD does not decompose into base letter + combining mark.
const FOLD: Record<string, string> = {
  ß: 'ss', æ: 'ae', œ: 'oe', ø: 'o', đ: 'd', ð: 'd', ł: 'l', ı: 'i', þ: 'th',
}

/**
 * Case- and accent-insensitive search key: NFD + strip combining marks,
 * lower-case, fold a few stand-alone letters, treat hyphens/dots as spaces,
 * drop apostrophes, then trim and collapse whitespace.
 */
export function normalizeTalentQuery(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/[ßæœøđðłıþ]/g, (ch) => FOLD[ch] ?? ch)
    .replace(/['’‘`´]/g, '')
    .replace(/[-‐‑–—_.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export default function TalentDirectory({ entries, labels, children }: TalentDirectoryProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const gridRef = useRef<HTMLDivElement>(null)

  const index = useMemo(
    () => entries.map(({ slug, names }) => ({ slug, keys: names.map(normalizeTalentQuery) })),
    [entries]
  )

  const needle = normalizeTalentQuery(deferredQuery)
  const matches = useMemo(
    () => (needle ? new Set(index.filter(({ keys }) => keys.some((key) => key.includes(needle))).map(({ slug }) => slug)) : null),
    [index, needle]
  )

  // Hide non-matching cards in place; clearing shows all in their original order.
  useEffect(() => {
    gridRef.current?.querySelectorAll<HTMLElement>('[data-talent-slug]').forEach((card) => {
      card.hidden = matches ? !matches.has(card.dataset.talentSlug ?? '') : false
    })
    // A group (e.g. YouTube Voices) hides with its heading when none of its cards match.
    gridRef.current?.querySelectorAll<HTMLElement>('[data-talent-group]').forEach((group) => {
      group.hidden = !group.querySelector('[data-talent-slug]:not([hidden])')
    })
  }, [matches])

  const showNoResults = matches !== null && matches.size === 0

  const clear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div>
      <form
        role="search"
        className="mb-8 flex justify-end mobile:mb-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor={inputId} className="sr-only">
          {labels.search}
        </label>
        <div className="relative w-full max-w-[360px] mobile:max-w-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="pointer-events-none absolute start-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#666666]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && query) {
                event.preventDefault()
                setQuery('')
              }
            }}
            placeholder={labels.placeholder}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="search"
            className="h-12 w-full appearance-none rounded-full border border-[#DCDCDC] bg-white ps-11 pe-11 font-work-sans text-[16px] text-[#141414] placeholder:text-[#666666] transition-colors hover:border-[#bdbdbd] focus:border-[#141414] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
          />
          {query && (
            <button
              type="button"
              onClick={clear}
              aria-label={labels.clear}
              className="absolute end-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[#666666] transition-colors hover:bg-[#f2f2f2] hover:text-[#141414] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#141414]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          )}
        </div>
      </form>

      <p aria-live="polite" role="status" className={showNoResults ? 'py-12 text-center font-work-sans text-[16px] text-[#666666]' : 'sr-only'}>
        {showNoResults ? labels.noResults.replace('{query}', deferredQuery.trim()) : ''}
      </p>

      <div ref={gridRef} hidden={showNoResults}>
        {children}
      </div>
    </div>
  )
}
