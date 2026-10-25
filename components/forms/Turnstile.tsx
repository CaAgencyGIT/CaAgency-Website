'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'

type TurnstileApi = {
  render: (container: HTMLElement, options: { sitekey: string; action: string; callback: (token: string) => void; 'expired-callback': () => void; 'error-callback': () => void }) => string
  remove: (id: string) => void
}
declare global { interface Window { turnstile?: TurnstileApi } }

export default function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const ready = useCallback(() => setLoaded(true), [])
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  useEffect(() => {
    const api = window.turnstile
    // Without a key (e.g. the dev preview) Turnstile throws and takes the whole
    // page down; skip it — the form simply can't submit without a token.
    if (!sitekey || !loaded || !container.current || !api) return
    const id = api.render(container.current, {
      sitekey,
      action: 'contact', callback: onToken,
      'expired-callback': () => onToken(''), 'error-callback': () => onToken(''),
    })
    return () => { api.remove(id) }
  }, [sitekey, loaded, onToken])
  if (!sitekey) return null
  return <>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={ready} />
    <div ref={container} />
  </>
}
