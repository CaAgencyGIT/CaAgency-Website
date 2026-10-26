import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { faqKeys } from '@/lib/data/faq-schema'
import { localizeHref } from '@/lib/i18n/client-paths'

// The homepage lists the first two questions and links to the FAQ page,
// which lists them all (Oct 2026). Both share the accordion styling.
const VISIBLE = 2

export default function FAQ({ locale = 'en', variant = 'home' }: { locale?: string; variant?: 'home' | 'page' }) {
  const t = useTranslations('faq')
  const faqHref = localizeHref('/faq', locale)
  const page = variant === 'page'
  const keys = page ? faqKeys : faqKeys.slice(0, VISIBLE)

  return (
    <section className={`rd-section rd-faq${page ? ' rd-faq-page' : ''}`}>
      <div className="rd-section-heading">
        <div>
          {page ? (
            <>
              <p className="rd-eyebrow">{t('eyebrow')}</p>
              <h1>{t('heading')}</h1>
            </>
          ) : (
            <Link href={faqHref} className="rd-faq-heading-link">
              <p className="rd-eyebrow">{t('eyebrow')}</p>
              <h2>{t('heading')}</h2>
            </Link>
          )}
        </div>
      </div>
      <div className="rd-faq-list">
        {keys.map((key, index) => (
          <details key={key} name={page ? 'faq' : 'home-faq'}>
            <summary id={`faq-question-${index}`}>{t(`questions.${key}.question`)}</summary>
            <div id={`faq-answer-${index}`}>
              <p>{t(`questions.${key}.answer`)}</p>
            </div>
          </details>
        ))}
        {!page && (
          <Link href={faqHref} className="rd-faq-all">
            {t('showAll')}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
