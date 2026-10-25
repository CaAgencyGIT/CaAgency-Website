import { useTranslations } from 'next-intl'
import { faqKeys } from '@/lib/data/faq-schema'

export default function FAQ() {
  const t = useTranslations('faq')

  return (
    <section className="rd-section rd-faq">
      <div className="rd-section-heading">
        <div>
          <p className="rd-eyebrow">{t('eyebrow')}</p>
          <h2>{t('heading')}</h2>
        </div>
      </div>
      <div className="rd-faq-list">
        {faqKeys.map((key, index) => (
          <details key={key} name="home-faq">
            <summary id={`faq-question-${index}`}>{t(`questions.${key}.question`)}</summary>
            <div id={`faq-answer-${index}`}>
              <p>{t(`questions.${key}.answer`)}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
