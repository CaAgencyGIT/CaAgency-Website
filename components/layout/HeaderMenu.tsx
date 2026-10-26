'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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
  useEffect(() => {
    if (!open) return
    // Phones have no hover: warm the menu's pages as soon as it opens, so a
    // tap swaps the page without waiting on the network.
    for (const item of items) router.prefetch(localizeHref(item.href, locale))
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, items, locale, router])

  return (
    <>
      <button type="button" className="rd-header-burger" aria-label={openLabel} aria-expanded={open} onClick={() => setOpen(true)}>
        <span />
        <span />
      </button>

      <div className={`rd-menu${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label={menuLabel} inert={!open}>
        <div className="rd-menu-top">
          <Link href={localizeHref('/', locale)} prefetch={false} onClick={() => setOpen(false)}>
            <Image src="/images/site/logo_payoff.svg" alt="CA Agency" width={343} height={274} className="h-[52px] w-auto invert max-[760px]:h-[42px]" />
          </Link>
          <button type="button" className="rd-menu-close" aria-label={closeLabel} onClick={() => setOpen(false)}>
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
