import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import TalentCardVideo from './TalentCardVideo'

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'twitch' | 'kick'
  url: string
}

interface TalentCardProps {
  slug: string
  name: string
  imageUrl: string
  videoSrc?: string
  /** Finished card artwork (4:5): shown whole on its edge-colour backing. */
  artwork?: { src: string; top: string; bottom: string }
  sizes: string
  priority?: boolean
  instagramUrl?: string
  tiktokUrl?: string
  youtubeUrl?: string
  twitchUrl?: string
  kickUrl?: string
  socialLinks?: SocialLink[]
  className?: string
}

// Social media icons as SVG components
export const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
  const icons = {
    instagram: (
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-5 h-5">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
      </svg>
    ),
    twitch: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
        <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/>
      </svg>
    ),
    kick: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5">
        <path d="M2.86957 1.5h6.84782v4.56522H12V3.78261h2.2826V1.5h6.8478v6.84783h-2.2826v2.28257h-2.2826v2.7392h2.2826v2.2826h2.2826V22.5h-6.8478v-2.2826H12v-2.2826H9.71739V22.5H2.86957v-21Z"/>
      </svg>
    ),
  }
  return icons[platform] || null
}

export default function TalentCard({
  slug,
  name,
  imageUrl,
  videoSrc,
  artwork,
  sizes,
  priority = false,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
  twitchUrl,
  kickUrl,
  socialLinks,
  className,
}: TalentCardProps) {
  // Build social links array from individual props or use provided array
  const links: SocialLink[] = socialLinks || [
    ...(instagramUrl ? [{ platform: 'instagram' as const, url: instagramUrl }] : []),
    ...(youtubeUrl ? [{ platform: 'youtube' as const, url: youtubeUrl }] : []),
    ...(tiktokUrl ? [{ platform: 'tiktok' as const, url: tiktokUrl }] : []),
    ...(twitchUrl ? [{ platform: 'twitch' as const, url: twitchUrl }] : []),
    ...(kickUrl ? [{ platform: 'kick' as const, url: kickUrl }] : []),
  ]

  const primaryLink = `/talents/${slug}`

  // Phones (Oct 2026): artwork cards show the whole 4:5 artwork with a small
  // name and socials underneath, instead of laid over the face.
  const art = Boolean(artwork)

  return (
    <div
      className={cn(
        'talent-card relative w-full aspect-3/4 rounded-card overflow-hidden flex flex-col justify-end',
        'group ring-1 ring-black/5 shadow-e2 hover:ring-black/15 hover:shadow-e3',
        art && 'mobile:aspect-auto mobile:overflow-visible mobile:rounded-none mobile:bg-transparent mobile:shadow-none mobile:ring-0 mobile:hover:ring-0 mobile:hover:shadow-none',
        className
      )}
    >
      <div className={cn('absolute inset-0', art && 'mobile:relative mobile:inset-auto mobile:aspect-4/5 mobile:overflow-hidden mobile:rounded-[12px] mobile:ring-1 mobile:ring-black/5')}>
        {/* Card artwork fills the 3:4 frame from the top on larger screens;
            only ~3% is trimmed from each side, clear of the logo and name. */}
        <Image
          src={artwork?.src ?? imageUrl}
          alt={name}
          fill
          quality={artwork ? 75 : 60}
          preload={priority}
          loading={priority ? undefined : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className={artwork ? 'object-cover object-top' : 'object-cover object-center'}
          sizes={sizes}
        />
        {videoSrc && <TalentCardVideo src={videoSrc} />}

        {/* Gradient Overlay for text readability */}
        {artwork ? (
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-black/65 to-transparent mobile:hidden" />
        ) : (
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        )}
        {/* Subtle deepen-on-hover layer for editorial focus */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </div>

      <Link
        href={primaryLink}
        // 25 cards in view would each prefetch a profile payload on scroll.
        prefetch={false}
        aria-label={`View ${name}'s profile`}
        className="absolute inset-0 z-10 rounded-card focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
      />

      {/* Content Container */}
      <div
        className={cn(
          'pointer-events-none relative z-20 flex flex-col items-center justify-center pb-6 px-3 transition-transform duration-500 ease-out group-hover:-translate-y-1',
          art && 'mobile:items-stretch mobile:p-0 mobile:group-hover:translate-y-0'
        )}
      >
        <h3
          className={cn(
            'font-anegra text-[22px] mobile:text-[18px] font-semibold tracking-[0] text-white text-center',
            art && 'mobile:px-0.5 mobile:pt-2.5 mobile:text-start mobile:text-[14px] mobile:leading-[1.25] mobile:font-normal mobile:text-foreground-dark'
          )}
        >
          {name}
        </h3>

        {/* Social Icons — always visible on touch (incl. tablets), reveal on hover where hover exists */}
        {links.length > 0 && (
          <div
            className={cn(
              'pointer-events-auto flex items-center justify-center gap-2 mt-2 transition-[opacity,translate] duration-500 ease-out pointer-fine:opacity-0 pointer-fine:translate-y-2 pointer-fine:group-hover:opacity-100 pointer-fine:group-hover:translate-y-0 pointer-fine:group-focus-within:opacity-100 pointer-fine:group-focus-within:translate-y-0',
              art && 'mobile:mt-0.5 mobile:-ms-2.5 mobile:justify-start mobile:gap-0'
            )}
          >
            {links.map((link, index) => (
              <a
                key={`${link.platform}-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex min-h-11 min-w-11 items-center justify-center rounded-full text-white transition-colors hover:text-white/70 focus-visible:outline-white',
                  art && 'mobile:min-h-9 mobile:min-w-9 mobile:text-foreground-dark/70 mobile:hover:text-foreground-dark mobile:[&_svg]:h-[14px] mobile:[&_svg]:w-[14px]'
                )}
                aria-label={`${name} on ${link.platform}`}
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
