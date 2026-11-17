import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/ui/Heading'
import type { BusinessLicenseContent } from '@/lib/site-content/site-types'
import { localizeHref } from '@/lib/i18n/client-paths'

// Body of the business-license page, shared by the English and translated routes.

export const englishBusinessLicenseLabels = {
  imageAlt: 'CA Agency Business License',
  companyInformation: 'Company Information',
  legalDocuments: 'Legal Documents',
}

export default function BusinessLicenseBody({
  content,
  labels = englishBusinessLicenseLabels,
  locale = 'en',
}: {
  content: BusinessLicenseContent
  labels?: typeof englishBusinessLicenseLabels
  locale?: string
}) {
  return (
    <section className="bg-background-soft py-[100px] mobile:py-[50px] px-section-x">
      <div className="max-w-container mx-auto">
        <Heading as="h1" color="dark" className="mb-10">
          {content.title}
        </Heading>
        <div className="flex flex-col lg:flex-row gap-[60px]">
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-card p-4 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
              <Image
                src={content.imageUrl}
                alt={labels.imageAlt}
                width={600}
                height={800}
                className="rounded-[12px] w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-card p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)] mb-8">
              <h2 className="font-anegra text-[26px] text-foreground-dark mb-6 tracking-wide">
                {labels.companyInformation}
              </h2>

              <div className="space-y-5 font-work-sans text-[16px]">
                {content.companyInfo.map((item) => (
                  <div key={item.label} className={item.href ? 'pt-4 border-t border-gray-100' : ''}>
                    <span className="text-[13px] uppercase tracking-[2px] text-gray-500 block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-accent-red font-medium hover:underline text-[18px] whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground-dark font-medium text-[18px] whitespace-pre-line block">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-card p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)] mb-8">
              <h3 className="font-anegra text-[22px] text-foreground-dark mb-4 tracking-wide">
                {content.about.title}
              </h3>
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index} className={`font-work-sans text-[15px] leading-[26px] text-gray-700 ${index < content.about.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph.text}
                </p>
              ))}
            </div>

            <div className="bg-white rounded-card p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
              <h3 className="font-anegra text-[22px] text-foreground-dark mb-4 tracking-wide">
                {labels.legalDocuments}
              </h3>
              <div className="space-y-3">
                {content.documents.map((document) => (
                  <Link
                    key={document.href}
                    href={localizeHref(document.href, locale)}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-colors group"
                  >
                    <span className="font-work-sans font-medium text-foreground-dark">{document.label}</span>
                    <span className="text-accent-red group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
