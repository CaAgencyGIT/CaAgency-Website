import { useTranslations } from 'next-intl'
import { faqKeys } from '@/lib/data/faq-schema'

// The first two questions are always listed; the rest open from a
// "View all questions" toggle so the section stays short.
const VISIBLE = 2

export default function FAQ() {
  const t = useTranslations('faq')

  const renderQuestion = (key: (typeof faqKeys)[number], index: number) => (
    <details key={key} name="home-faq">
      <summary id={`faq-question-${index}`}>{t(`questions.${key}.question`)}</summary>
      <div id={`faq-answer-${index}`}>
        <p>{t(`questions.${key}.answer`)}</p>
      </div>
    </details>
  )

  return (
    <section className="rd-section rd-faq">
      <div className="rd-section-heading">
        <div>
          <p className="rd-eyebrow">{t('eyebrow')}</p>
          <h2>{t('heading')}</h2>
        </div>
      </div>
      <div className="rd-faq-list">
        {faqKeys.slice(0, VISIBLE).map((key, index) => renderQuestion(key, index))}
        <details className="rd-faq-more">
          <summary>
            <span className="rd-faq-more-open">{t('showAll')}</span>
            <span className="rd-faq-more-close">{t('showLess')}</span>
          </summary>
          <div>{faqKeys.slice(VISIBLE).map((key, index) => renderQuestion(key, index + VISIBLE))}</div>
        </details>
      </div>
    </section>
  )
}
