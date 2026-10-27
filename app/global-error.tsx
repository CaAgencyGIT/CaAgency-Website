'use client'

import { useEffect } from 'react'
import { getErrorCopy, localeFromPath } from '@/lib/error-copy'

// Replaces the root layout when that layout itself throws, so it renders its
// own <html> and <body> and cannot rely on the site stylesheet or fonts.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const locale = localeFromPath(typeof window === 'undefined' ? '/' : window.location.pathname)
  const t = getErrorCopy(locale)

  useEffect(() => {
    console.error('Root layout error:', error)
  }, [error])

  const button = {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: 999,
    fontSize: 16,
    fontFamily: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
  } as const

  return (
    <html lang={locale} dir={t.dir}>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: 20,
          background: '#fff',
          color: '#111',
          fontFamily: 'Georgia, "Times New Roman", serif',
          textAlign: 'center',
        }}
      >
        <main style={{ maxWidth: 600 }}>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.12, margin: '0 0 24px' }}>{t.title}</h1>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: '26px', color: '#555', margin: '0 0 40px' }}>{t.body}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
            <button type="button" onClick={reset} style={{ ...button, border: 0, background: '#141414', color: '#fff' }}>
              {t.retry}
            </button>
            {/* A plain anchor: a full page load recovers from a broken layout. */}
            <a href={t.homeHref} style={{ ...button, border: '1px solid rgba(0,0,0,0.2)', color: '#111' }}>
              {t.home}
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
