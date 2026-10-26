import type { AbstractIntlMessages } from 'next-intl'

/**
 * Namespaces consumed by client components via useTranslations(). Everything
 * else in messages/*.json is only read by server components (through the
 * request config / getTranslations), so passing the full bundle to
 * NextIntlClientProvider would serialize ~15KB of server-only strings into
 * every page's RSC payload for nothing.
 *
 * If a client component starts using a new namespace, add it here — next-intl
 * fails loudly with MISSING_MESSAGE in development when one is absent.
 */
// 'footer' and 'locations' were dropped when Footer became a server
// component — it now reads the full catalog server-side.
const CLIENT_NAMESPACES = [
  'breadcrumbs',
  'common',
  'contactForm',
  'cookies',
  'errors',
  'faq',
  'nav',
] as const

// Parameter is Record<string, unknown> rather than AbstractIntlMessages: the
// raw en.json import contains arrays (read via t.raw), which next-intl supports at runtime but its message type rejects.
export function pickClientMessages(messages: Record<string, unknown>): AbstractIntlMessages {
  // Defensive: a null/non-object catalog (broken locale file, bad override)
  // should degrade to MISSING_MESSAGE errors downstream, not crash the
  // layout render with a TypeError from the `in` operator.
  if (!messages || typeof messages !== 'object') {
    return {} as AbstractIntlMessages
  }
  return Object.fromEntries(
    CLIENT_NAMESPACES.filter((ns) => ns in messages).map((ns) => [ns, messages[ns]])
  ) as AbstractIntlMessages
}
