import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { locales } from '@/i18n/config'
import {
  CONTACT_FORM_LABEL_KEYS,
  buildContactFormLabels,
} from '@/lib/contact/form-labels'

function loadMessages(locale: string) {
  return JSON.parse(readFileSync(`messages/${locale}.json`, 'utf8'))
}

describe('buildContactFormLabels', () => {
  it.each(locales)('resolves every label for %s', (locale) => {
    const labels = buildContactFormLabels(loadMessages(locale))

    for (const key of CONTACT_FORM_LABEL_KEYS) {
      expect(labels[key], key).toBeTypeOf('string')
      expect(labels[key].trim(), key).not.toBe('')
    }
  })

  it('takes sendAnotherMessage from the common namespace', () => {
    const labels = buildContactFormLabels(loadMessages('en'))

    expect(labels.sendAnotherMessage).toBe('Send another message')
  })

  it('throws when a label is missing so a build fails instead of shipping raw keys', () => {
    const messages = loadMessages('en')
    delete messages.contactForm.email

    expect(() => buildContactFormLabels(messages)).toThrow(/email/)
  })

  it('covers every key the form components read', () => {
    const source = ['components/blocks/contact/ContactForms.tsx', 'components/blocks/contact/fields.tsx']
      .map((file) => readFileSync(file, 'utf8'))
      .join('\n')
    const used = new Set([...source.matchAll(/\blabels\.([a-zA-Z]+)/g)].map((m) => m[1]))

    expect([...used].sort()).toEqual([...CONTACT_FORM_LABEL_KEYS].sort())
  })
})
