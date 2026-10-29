'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const EMPTY_PREVIEW = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

export default function DeferredCollageImage({ src, alt, sizes, preview, desktopHero }: {
  src: string
  alt: string
  sizes: string
  preview?: string
  desktopHero: boolean
}) {
  const ref = useRef<HTMLPictureElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.dispatchEvent(new Event('collage-photo-hydrated'))
    if (!('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => setActive(true))
      return () => cancelAnimationFrame(frame)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setActive(true)
      observer.disconnect()
    }, { rootMargin: '0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const image = { src, sizes, fill: true, quality: 90, className: 'home-collage-media' } as const

  return (
    <>
      <picture ref={ref} className="collage-deferred-image absolute inset-0" data-photo-state={active ? 'active' : 'waiting'}>
        {/* A data URL prevents even the preload scanner from requesting the
            real mobile photo. Desktop hero images still load directly from
            SSR markup, without waiting for hydration or the observer. */}
        {/* The parser-time observer can disable this source before hydration.
            Suppress that one expected media-attribute mismatch; React removes
            the source when its own observer activates the photo. */}
        {!active && <source suppressHydrationWarning media={desktopHero ? '(max-width: 760px)' : undefined} srcSet={preview ?? EMPTY_PREVIEW} />}
        <Image {...image} alt={alt} loading={active ? 'eager' : 'lazy'}
          {...(preview ? { placeholder: 'blur', blurDataURL: preview } as const : {})} />
      </picture>
      <noscript>
        <style>{'.collage-deferred-image{display:none!important}'}</style>
        {/* Blur placeholders need JS to clear, so the no-JS fallback uses the
            real image without one. Tile geometry stays reserved in CSS. */}
        <Image {...image} alt={alt} loading="lazy" />
      </noscript>
    </>
  )
}
