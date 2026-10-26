'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import { clsx } from 'clsx'
import { localizeHref, stripLocalePrefix } from '@/lib/i18n/client-paths'

export default function IntentPrefetchLink({
  href,
  locale,
  children,
  className,
  activeClassName,
  inactiveClassName,
  markCurrent = true,
}: {
  href: string
  locale: string
  children: ReactNode
  className?: string
  activeClassName?: string
  inactiveClassName?: string
  markCurrent?: boolean
}) {
  const [intent, setIntent] = useState(false)
  const pathname = stripLocalePrefix(usePathname())
  const active = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={localizeHref(href, locale)}
      prefetch={intent ? null : false}
      onMouseEnter={() => setIntent(true)}
      onFocus={() => setIntent(true)}
      onTouchStart={() => setIntent(true)}
      aria-current={markCurrent && active ? 'page' : undefined}
      className={clsx(className, active ? activeClassName : inactiveClassName)}
    >
      {children}
    </Link>
  )
}
