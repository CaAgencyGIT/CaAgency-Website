'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { localizeHref } from '@/lib/i18n/client-paths'

const RING_TEXT = 'CREATORS WHO SHAPE CULTURE · CA AGENCY · '

// Full-screen menu behind the header's menu button: large uppercase links
// on black, with a slowly turning ring of text in the corner.
export default function HeaderMenu({
  locale,
  items,
  openLabel,
  closeLabel,
  menuLabel,
}: {
  locale: string
  items: Array<{ href: string; label: string }>
  openLabel: string
  closeLabel: string
  menuLabel: string
}) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  // Dialog focus: move into the menu on open, back to the menu button on close.
  useEffect(() => {
    if (open) closeRef.current?.focus()
    else if (wasOpen.current) burgerRef.current?.focus()
    wasOpen.current = open
  }, [open])

  useEffect(() => {
    if (!open) return
    // Phones have no hover: warm the menu's pages as soon as it opens, so a
    // tap swaps the page without waiting on the network.
    for (const item of items) router.prefetch(localizeHref(item.href, locale))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab' || !menuRef.current) return
      // Keep Tab inside the open menu (aria-modal).
      const focusable = menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus() }
    }
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, items, locale, router])

  return (
    <>
      <button ref={burgerRef} type="button" className="rd-header-burger" aria-label={openLabel} aria-expanded={open} onClick={() => setOpen(true)}>
        <span />
        <span />
      </button>

      <div ref={menuRef} className={`rd-menu${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label={menuLabel} inert={!open}>
        <div className="rd-menu-top">
          <Link href={localizeHref('/', locale)} prefetch={false} onClick={() => setOpen(false)}>
            <Image src="/images/site/logo_payoff.svg" alt="CA Agency" width={343} height={274} className="h-[52px] w-auto invert max-[760px]:h-[42px]" />
          </Link>
          <button ref={closeRef} type="button" className="rd-menu-close" aria-label={closeLabel} onClick={() => setOpen(false)}>
            <span />
            <span />
          </button>
        </div>

        <nav aria-label={menuLabel}>
          <ul>
            {items.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: open ? `${120 + i * 55}ms` : '0ms' }}>
                <Link href={localizeHref(item.href, locale)} prefetch={false} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <svg className="rd-menu-ring" viewBox="0 0 300 300" aria-hidden="true">
          <defs>
            <path id="rd-menu-ring-path" d="M150 150 m-120 0 a120 120 0 1 1 240 0 a120 120 0 1 1 -240 0" />
          </defs>
          <text>
            <textPath href="#rd-menu-ring-path" textLength="745">
              {RING_TEXT}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  )
}
