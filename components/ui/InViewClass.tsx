'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// Adds `is-shown` to a wrapper once it scrolls into view, so a server-rendered
// child can start its CSS animation without shipping its markup as client JS.
export default function InViewClass({ children, className, threshold = 0.3 }: { children: ReactNode; className?: string; threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return (
    <div ref={ref} className={`${className ?? ''}${shown ? ' is-shown' : ''}`}>
      {children}
    </div>
  )
}
