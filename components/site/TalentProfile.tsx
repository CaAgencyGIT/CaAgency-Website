import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ShareButtons from '@/components/ui/ShareButtons'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'
import { talentCardArt, talentCoverSrc } from '@/lib/data/talent-cards'
import type { CaseStudy } from '@/lib/data/case-studies'
import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { TalentUi } from '@/lib/data/talent-ui'
import { localizeHref } from '@/lib/i18n/client-paths'
import type { Locale } from '@/i18n/config'

// Body of a talent profile, shared by the English route
// (app/(site)/talents/[slug]) and the translated one
// (app/[locale]/talents/[slug]). `bio` is the text to show: the roster bio in
// English, or its translation.

export interface TalentProfileData {
  slug: string
  name: string
  imageUrl: string
  category: string
  instagramUrl: string | null
  tiktokUrl: string | null
  youtubeUrl: string | null
  twitchUrl: string | null
}

interface TalentProfileProps {
  talent: TalentProfileData
  bio: string | null
  relatedTalents: { id: string; slug: string; name: string; imageUrl: string }[]
  campaignIntroduction?: string
  campaigns: CaseStudy[]
  ui: TalentUi
  caseStudyUi: CaseStudyUi
  locale: string
}

export default function TalentProfile({ talent, bio, relatedTalents, campaigns, campaignIntroduction, ui, caseStudyUi, locale }: TalentProfileProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 max-w-[500px]">
              <div className={`relative ${talentCardArt[talent.slug] ? 'aspect-[1122/1241] bg-[#f4f4f2]' : 'aspect-[4/5]'} rounded-2xl overflow-hidden`}>
                <Image
                  src={talentCoverSrc(talent.slug, talent.imageUrl)}
                  alt={talentCardArt[talent.slug]?.alt ?? talent.name}
                  fill
                  quality={talentCardArt[talent.slug] ? 90 : undefined}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <Heading as="h1" color="dark" className="mb-4 text-[48px] tablet:text-[40px] mobile:text-[32px]">
                {talent.name}
              </Heading>

              <Text color="dark" size="sm" className="mb-2 opacity-60 uppercase tracking-widest">
                {talent.category === 'youtube' ? ui.roleYoutube : ui.roleSocial}
              </Text>

              {bio && (
                <Text color="dark" size="base" className="mb-8 opacity-80 leading-relaxed">
                  {bio}
                </Text>
              )}

              {!bio && (
                <Text color="dark" size="base" className="mb-8 opacity-80 leading-relaxed">
                  {ui.fallbackBio.replace('{name}', talent.name)}
                </Text>
              )}

              {/* Share Buttons */}
              <div className="mb-8">
                <ShareButtons
                  url={`https://caagency.com${localizeHref(`/talents/${talent.slug}`, locale)}`}
                  title={`${talent.name} | CA Agency`}
                  description={bio || ui.shareFallback.replace('{name}', talent.name)}
                />
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {talent.instagramUrl && (
                  <a
                    href={talent.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                )}
                {talent.tiktokUrl && (
                  <a
                    href={talent.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    TikTok
                  </a>
                )}
                {talent.youtubeUrl && (
                  <a
                    href={talent.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                )}
                {talent.twitchUrl && (
                  <a
                    href={talent.twitchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Twitch
                  </a>
                )}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-black/10">
                <Text color="dark" size="sm" className="mb-4 opacity-60">
                  {ui.collaborate.replace('{name}', talent.name)}
                </Text>
                <Button locale={locale as Locale} href="/contact">
                  {ui.getInTouch}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      {campaigns.length > 0 && (
        <section className="bg-background-soft py-[80px] mobile:py-[50px] px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <Heading as="h2" color="dark" className="mb-10 text-[32px] mobile:mb-6 mobile:text-[24px]">
              {ui.campaigns}
            </Heading>
            {campaignIntroduction && (
              <p className="mb-8 max-w-[720px] text-lg leading-relaxed">{campaignIntroduction}</p>
            )}
            <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]">
              {campaigns.map((cs) => (
                <CaseStudyCard key={cs.slug} study={cs} playVideo ui={caseStudyUi} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Talents */}
      {relatedTalents.length > 0 && (
        <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <Heading as="h2" color="dark" className="mb-10 text-[32px]">
              {talent.category === 'youtube' ? ui.moreYoutube : ui.moreTalents}
            </Heading>
            <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-2 gap-6">
              {relatedTalents.map((related) => (
                <Link
                  key={related.id}
                  href={localizeHref(`/talents/${related.slug}`, locale)}
                  className="group"
                >
                  <div className={`relative ${talentCardArt[related.slug] ? 'aspect-[1122/1241] bg-[#f4f4f2]' : 'aspect-[4/5]'} rounded-xl overflow-hidden mb-3`}>
                    <Image
                      src={talentCoverSrc(related.slug, related.imageUrl)}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 50vw, 310px"
                    />
                  </div>
                  <Text color="dark" size="sm" className="font-medium group-hover:text-foreground-subtle transition-colors">
                    {related.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Talents */}
      <section className="bg-background-base py-[50px] px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto text-center">
          <Button locale={locale as Locale} href="/talents" variant="dark">
            ← {ui.backToTalents}
          </Button>
        </div>
      </section>
    </>
  )
}
