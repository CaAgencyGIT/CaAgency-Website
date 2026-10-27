'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { localizeHref } from '@/lib/i18n/client-paths'

// Wait this long after `load` before warming routes, so the page's own images,
// fonts and showreels never compete with the prefetches.
export const IDLE_NAV_PREFETCH_DELAY_MS = 3000

type NetworkInformation = { saveData?: boolean; effectiveType?: string }

// Desktop: once the page is loaded and quiet, prefetch the header's routes so
// a menu click swaps the page from memory instead of waiting on 2-3 round
// trips (page data is not cached at the edge). Phones keep prefetching on
// intent only (menu open, touch), and data-saver or slow links skip this.
export default function IdleNavPrefetch({ hrefs, locale }: { hrefs: readonly string[]; locale: string }) {
  const router = useRouter()

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches) return
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) return

    let timer: ReturnType<typeof setTimeout> | undefined
    let idle: number | undefined
    const warm = () => {
      for (const href of hrefs) router.prefetch(localizeHref(href, locale))
    }
    const schedule = () => {
      timer = setTimeout(() => {
        if ('requestIdleCallback' in window) idle = window.requestIdleCallback(warm, { timeout: 2000 })
        else warm()
      }, IDLE_NAV_PREFETCH_DELAY_MS)
    }
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })

    return () => {
      window.removeEventListener('load', schedule)
      if (timer) clearTimeout(timer)
      if (idle !== undefined) window.cancelIdleCallback(idle)
    }
  }, [hrefs, locale, router])

  return null
}
