'use client'

import { useEffect } from 'react'

const selector = '[data-reveal], [data-stagger]'

export default function RevealObserver() {
  useEffect(() => {
    const observed = new WeakSet<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement
          if (entry.isIntersecting) {
            element.dataset.revealed = 'true'
            if (element.dataset.revealOnce !== 'false') observer.unobserve(element)
          } else if (element.dataset.revealOnce === 'false') {
            delete element.dataset.revealed
          }
        }
      },
      // Start just before content enters the screen, so it is already
      // settling by the time the visitor sees it.
      { rootMargin: '0px 0px 40px' }
    )

    const register = (root: ParentNode) => {
      const elements = [
        ...(root instanceof Element && root.matches(selector) ? [root] : []),
        ...root.querySelectorAll(selector),
      ]
      for (const element of elements) {
        if (observed.has(element)) continue
        observed.add(element)
        observer.observe(element)
      }
    }

    register(document)
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) register(node)
        }
      }
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [])

  return null
}
