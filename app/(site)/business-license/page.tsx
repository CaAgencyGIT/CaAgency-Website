import '@/app/public-utilities.css'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import { getSiteContent } from '@/lib/site-content/service'
import { BusinessLicenseContent } from '@/lib/site-content/site-types'
import { buildPageMetadata } from '@/lib/seo/metadata'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Business License',
  description:
    'CA Agency business license and registration information. Licensed influencer marketing agency in Dubai, UAE. Registration No. 2417532.01.',
  path: '/business-license',
  localized: false,
})

export default async function BusinessLicensePage() {
  const content = await getSiteContent<BusinessLicenseContent>('business-license')

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
                alt="CA Agency Business License"
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
                Company Information
              </h2>

              <div className="space-y-5 font-work-sans text-[16px]">
                {content.companyInfo.map((item) => (
                  <div key={item.label} className={item.label === 'Contact Email' ? 'pt-4 border-t border-gray-100' : ''}>
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
                Legal Documents
              </h3>
              <div className="space-y-3">
                {content.documents.map((document) => (
                  <Link
                    key={document.href}
                    href={document.href}
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
