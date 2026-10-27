'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getErrorCopy, localeFromPath } from '@/lib/error-copy'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = getErrorCopy(localeFromPath(usePathname()))

  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div dir={t.dir} className="min-h-screen bg-background-base flex items-center justify-center px-section-x">
      <div className="text-center max-w-[600px]">
        <h1 className="font-anegra text-[length:var(--fs-h2,40px)] leading-[1.12] text-foreground-primary mb-6">
          {t.title}
        </h1>
        <p className="text-[#555] text-[16px] leading-[26px] mb-10">{t.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 bg-button-bg text-button-text font-jost font-medium rounded-full hover:bg-black transition-colors"
          >
            {t.retry}
          </button>
          <Link
            href={t.homeHref}
            className="inline-flex items-center justify-center px-8 py-4 ring-1 ring-black/20 text-foreground-primary font-jost font-medium rounded-full hover:ring-black/40 hover:bg-black/[0.03] transition-colors"
          >
            {t.home}
          </Link>
        </div>
      </div>
    </div>
  )
}
