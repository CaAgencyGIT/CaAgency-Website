import { describe, it, expect } from 'vitest'
import { pickClientMessages } from '@/i18n/client-messages'
import enMessages from '@/messages/en.json'
import arMessages from '@/messages/ar.json'
import koMessages from '@/messages/ko.json'

// Mirrors i18n/client-messages.ts — 'footer' and 'locations' moved back to
// server-only when Footer became a server component.
const CLIENT_NAMESPACES = [
  'breadcrumbs',
  'common',
  'contactForm',
  'cookies',
  'errors',
  'faq',
  'nav',
]

describe('pickClientMessages', () => {
  it('keeps only whitelisted namespaces', () => {
    const picked = pickClientMessages(enMessages)
    expect(Object.keys(picked).sort()).toEqual([...CLIENT_NAMESPACES].sort())
  })

  it('drops server-only namespaces from the client payload', () => {
    const picked = pickClientMessages(enMessages)
    for (const serverOnly of ['home', 'services', 'work', 'about', 'metadata', 'blog']) {
      expect(picked).not.toHaveProperty(serverOnly)
    }
  })

  it('passes namespace content through untouched, including arrays', () => {
    const picked = pickClientMessages(enMessages) as unknown as typeof enMessages
    expect(picked.contactForm).toBe(enMessages.contactForm)
    const faq = { items: [{ q: 'Q', a: 'A' }] }
    expect(pickClientMessages({ faq }).faq).toBe(faq)
  })

  it('skips whitelisted namespaces missing from the source', () => {
    const picked = pickClientMessages({ nav: { home: 'Home' } })
    expect(Object.keys(picked)).toEqual(['nav'])
  })

  it('every locale bundle provides all client namespaces', () => {
    for (const messages of [enMessages, arMessages, koMessages]) {
      const picked = pickClientMessages(messages)
      expect(Object.keys(picked).sort()).toEqual([...CLIENT_NAMESPACES].sort())
    }
  })
})
