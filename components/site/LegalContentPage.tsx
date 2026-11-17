import Heading from '@/components/ui/Heading'
import { LegalPageContent } from '@/lib/site-content/site-types'
import { sanitizeTrustedHtml } from '@/lib/sanitize'

export default function LegalContentPage({
  content,
  lastUpdatedLabel = 'Last updated: {date}',
  notice,
}: {
  content: LegalPageContent
  /** "Last updated: {date}" in the page's language */
  lastUpdatedLabel?: string
  /** Translated pages: a line saying the English version is the authoritative text, with a link to it. */
  notice?: { text: string; href: string; linkLabel: string }
}) {
  return (
    <section className="bg-background-light py-[100px] mobile:py-[50px] px-section-x">
      <div className="max-w-container mx-auto">
        <div className="max-w-[900px]">
          <Heading as="h1" color="dark" className="mb-6">
            {content.title}
          </Heading>

          <p className="font-work-sans text-[15px] text-gray-600 mb-10">
            <strong>{lastUpdatedLabel.replace('{date}', content.lastUpdated)}</strong>
          </p>

          {notice && (
            <p className="mb-10 rounded-card border border-black/10 bg-background-soft p-5 font-work-sans text-[15px] leading-[1.7] text-foreground-body">
              {notice.text}{' '}
              <a href={notice.href} hrefLang="en" className="font-medium underline decoration-current/30 underline-offset-4 hover:decoration-current">
                {notice.linkLabel}
              </a>
            </p>
          )}

          <div
            className="legal-content space-y-10 font-work-sans text-[16px] leading-[30px] text-foreground-dark [&_h2]:mb-4 [&_h2]:font-anegra [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:tracking-[0] [&_h3]:mb-3 [&_h3]:font-anegra [&_h3]:text-[20px] [&_h3]:font-semibold [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:ms-6 [&_ul]:list-disc [&_li]:mb-2 [&_a]:font-medium [&_a]:underline [&_a]:decoration-current/30 [&_a]:underline-offset-4 [&_a]:hover:decoration-current"
            dangerouslySetInnerHTML={{ __html: sanitizeTrustedHtml(content.html) }}
          />
        </div>
      </div>
    </section>
  )
}
