import { Metadata } from 'next'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import VideoPlayer from '@/components/ui/VideoPlayer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeadingAccent from '@/components/ui/HeadingAccent'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { workVideos, posterFor, VIDEO_PUBLICATION_DATE } from '@/lib/data/videos'
import { brandLogos } from '@/lib/data/brands'
import { caseStudies, caseStudyForVideo } from '@/lib/data/case-studies'
import { creatorCases } from '@/lib/data/creator-cases'
import { brandWatermarks, filmCaseStudies, filmDescription, filmLabel, filmSrc, films, REDESIGN_MEDIA_PUBLISHED, workFilms, workGridOrder } from '@/lib/data/redesign-media'
import { organizationRef } from '@/lib/seo/schema'

// Safety net next to the on-save revalidation in lib/revalidate.ts.
export const revalidate = 3600

// VideoObject schema for SEO
const videoSchemaList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [...workVideos.filter((video) => workGridOrder.some((e) => e.type === 'video' && e.src === video.src)).map((video, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'VideoObject',
      name: video.name,
      description: `Influencer marketing campaign for ${video.brand} by CA Agency`,
      contentUrl: `https://caagency.com${video.src}`,
      thumbnailUrl: `https://caagency.com${posterFor(video.src)}`,
      uploadDate: video.published ?? VIDEO_PUBLICATION_DATE,
      publisher: organizationRef,
    },
  })),
  // October 2026 redesign films, added after the existing work.
  ...workFilms.map((key, index) => ({
    '@type': 'ListItem',
    position: workGridOrder.filter((e) => e.type === 'video').length + index + 1,
    item: {
      '@type': 'VideoObject',
      name: filmLabel(key),
      description: filmDescription(key),
      contentUrl: `https://caagency.com${filmSrc(key)}`,
      thumbnailUrl: `https://caagency.com${posterFor(filmSrc(key))}`,
      uploadDate: REDESIGN_MEDIA_PUBLISHED,
      publisher: organizationRef,
    },
  })),
  // Creator showcases (Oct 2026), the five rows under the grid.
  ...creatorCases.filter((study) => study.videoSrc).map((study, index) => ({
    '@type': 'ListItem',
    position: workGridOrder.filter((e) => e.type === 'video').length + workFilms.length + index + 1,
    item: {
      '@type': 'VideoObject',
      name: study.title,
      description: study.summary,
      contentUrl: `https://caagency.com${study.videoSrc}`,
      thumbnailUrl: `https://caagency.com${posterFor(study.videoSrc)}`,
      uploadDate: REDESIGN_MEDIA_PUBLISHED,
      publisher: organizationRef,
    },
  }))],
}

// Mixed order (Oct 2026 client feedback): existing work and redesign films
// interleaved so the same creator never shows twice in a row — see
// workGridOrder. Each tile still links to its brand's case study where one
// exists.
const workVideosBySrc = new Map(workVideos.map((video) => [video.src, video]))
const gridVideos = workGridOrder.map((entry) => {
  if (entry.type === 'video') {
    const video = workVideosBySrc.get(entry.src)!
    // DELERE's burned-in mark is faint; a bolder copy sits exactly on top of it.
    const watermark = ['DELERE'].includes(video.brand) ? brandWatermarks[video.brand] : undefined
    // Sharpened re-encode of the original upload (Oct 2026); case-study lookup stays on the catalog src.
    const src = video.src.replace(/-web-v1\.mp4$/, '-sharp-v2.mp4')
    return { src, brand: video.brand, study: caseStudyForVideo(video.src), watermark, coversBurnedIn: !!watermark }
  }
  return {
    src: filmSrc(entry.key),
    brand: films[entry.key].brand,
    // Older work videos have the brand wordmark burned in; the redesign films
    // don't, so they get the same treatment as an overlay.
    watermark: brandWatermarks[films[entry.key].brand],
    study: caseStudies.find(({ slug }) => slug === filmCaseStudies[entry.key]),
  }
})

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'work' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/work',
    keywords: [
      'influencer campaigns',
      'branded content',
      'Instagram Reels',
      'TikTok content',
      'influencer portfolio',
      'brand collaborations',
      'campaign examples',
    ],
    imageAlt: 'CA Agency Portfolio',
  })
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'work' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(videoSchemaList)}</script>

      {/* Hero Section — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-section-y-desktop mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="flex flex-col md:flex-row gap-[50px]">
            <div className="hero-rise-media w-full md:w-1/2">
              <Heading as="h1" color="dark" className="mb-6 tracking-[0.1px]">
                {t('heading')}
              </Heading>
              <Text color="dark" size="base" className="mb-6 text-[16px] leading-[28px] mobile:text-[15px] mobile:leading-[1.7]">
                <strong>{t('heroP1')}</strong>
              </Text>
              <Text color="dark" size="base" className="text-[16px] leading-[28px] mobile:text-[15px] mobile:leading-[1.7]">
                {t('heroP2')}
              </Text>
            </div>
            <div className="w-full md:w-1/2 hidden mobile:hidden"></div>
          </div>
        </div>
      </section>

      {/* Video Grid Section — 3 per row, larger tiles (client request, Oct 2026). */}
      <section className="bg-background-base px-section-x">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[36px] tablet:gap-[24px] mobile:gap-[10px]">
            {gridVideos.map((video, index) => {
              const study = video.study
              return (
                <div key={video.src} className="group hover-lift relative w-full aspect-9/16 rounded-card mobile:aspect-4/5 mobile:rounded-[12px] overflow-hidden ring-1 ring-black/5 hover:ring-black/15 hover:shadow-e3">
                  <VideoPlayer
                    src={video.src}
                    poster={posterFor(video.src)}
                    posterSizes="(max-width: 767px) 50vw, (max-width: 1059px) 33vw, 330px"
                    // First mobile row (2 columns); on mobile the second
                    // poster was the LCP element and loaded lazily.
                    posterPriority={index < 2}
                    aspectRatio="9:16"
                    autoplay
                    muted
                    loop
                    // Client decision: autoplay this muted grid regardless of
                    // prefers-reduced-motion (Oct 2026).
                    ignoreReducedMotion
                    // Phones: a calmer 4:5 crop so more of the grid fits on screen.
                    className="rounded-card mobile:aspect-4/5 mobile:rounded-[12px]"
                  />
                  {'watermark' in video && video.watermark && (
                    <Image
                      src={video.watermark.src}
                      alt=""
                      aria-hidden="true"
                      width={video.watermark.width}
                      height={video.watermark.height}
                      sizes="200px"
                      style={{ width: `${video.watermark.widthPct}%`, top: 'coversBurnedIn' in video && video.coversBurnedIn ? '47%' : '50%' }}
                      className="pointer-events-none absolute left-1/2 z-[1] h-auto -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.45))_drop-shadow(0_2px_14px_rgba(0,0,0,0.35))]"
                    />
                  )}
                  {study && (
                    // Case-study routes are English-only (site) pages, so use
                    // next/link directly — no locale prefix.
                    <Link
                      href={`/case-studies/${study.slug}`}
                      aria-label={`${video.brand} case study`}
                      className="absolute inset-0 z-[1] flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 focus-visible:opacity-100 group-hover:opacity-100 mobile:opacity-100"
                    >
                      <span className="w-full p-4 mobile:px-2.5 mobile:py-2">
                        <span className="block font-anegra text-[18px] mobile:text-[13px] font-semibold text-white leading-tight">
                          {video.brand}
                        </span>
                        <span className="block font-work-sans text-[13px] mobile:hidden text-white/80">
                          {t('viewCaseStudy')} →
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              )
            })}
            {/* Creator showcases (Oct 2026): five rows appended after all
                existing work, in the client's order. Their media keeps the
                post's own overlays, so no watermark is added. */}
            {creatorCases.map((study) => (
              <div key={study.slug} className="group hover-lift relative w-full aspect-9/16 rounded-card mobile:aspect-4/5 mobile:rounded-[12px] overflow-hidden ring-1 ring-black/5 hover:ring-black/15 hover:shadow-e3">
                {study.image ? (
                  <Image
                    src={study.image.src}
                    alt={`${study.creatorName} for ${study.brand}`}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1059px) 33vw, 330px"
                    quality={75}
                    className="object-cover"
                  />
                ) : (
                  <VideoPlayer
                    src={study.videoSrc}
                    poster={posterFor(study.videoSrc)}
                    posterSizes="(max-width: 767px) 50vw, (max-width: 1059px) 33vw, 330px"
                    aspectRatio="9:16"
                    autoplay
                    muted
                    loop
                    ignoreReducedMotion
                    label={`${study.brand} video by ${study.creatorName}`}
                    className="rounded-card mobile:aspect-4/5 mobile:rounded-[12px]"
                  />
                )}
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`${study.brand} case study with ${study.creatorName}`}
                  className="absolute inset-0 z-[1] flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 focus-visible:opacity-100 group-hover:opacity-100 mobile:opacity-100"
                >
                  <span className="w-full p-4 mobile:px-2.5 mobile:py-2">
                    <span className="block font-anegra text-[18px] mobile:text-[13px] font-semibold text-white leading-tight">
                      {study.brand}
                    </span>
                    <span className="block font-work-sans text-[13px] mobile:text-[11px] text-white/85">
                      {study.creatorName}
                    </span>
                    <span className="block font-work-sans text-[13px] mobile:hidden text-white/80">
                      {t('viewCaseStudy')} →
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-5 text-[40px] tablet:text-[32px] mobile:text-[26px]">
            {t('ctaTitle')}
          </Heading>
          <HeadingAccent className="mb-6" />
          <Text color="dark" size="base" className="max-w-[600px] mx-auto mb-8 opacity-80">
            {t('ctaText')}
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" locale={locale as Locale}>{tCommon('getStarted')}</Button>
            <Button href="/services" locale={locale as Locale} variant="dark">{tCommon('ourServices')}</Button>
            <Button href="/talents" locale={locale as Locale} variant="dark">{tCommon('meetOurTalents')}</Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Brand Carousel */}
      <section className="bg-background-base py-[50px] px-0">
        <BrandCarousel images={brandLogos} />
      </section>
    </>
  )
}
