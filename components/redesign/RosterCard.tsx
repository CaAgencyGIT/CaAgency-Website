import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon, type SocialLink } from '@/components/blocks/TalentCard'
import Film, { type VideoLabels } from '@/components/redesign/Film'
import type { FilmKey } from '@/lib/data/redesign-media'

export interface RosterTalent {
  slug: string
  name: string
  imageUrl: string
  instagramUrl?: string
  tiktokUrl?: string
  youtubeUrl?: string
  twitchUrl?: string
  kickUrl?: string
}

// Talent card for the redesign: a hover-to-play creator film where one exists,
// otherwise the roster photo. Name links to the profile; icons to socials.
export default function RosterCard({
  talent,
  film,
  sizes,
  priority = false,
  labels,
}: {
  talent: RosterTalent
  film?: FilmKey
  sizes: string
  priority?: boolean
  labels?: VideoLabels
}) {
  const links: SocialLink[] = [
    ...(talent.instagramUrl ? [{ platform: 'instagram' as const, url: talent.instagramUrl }] : []),
    ...(talent.youtubeUrl ? [{ platform: 'youtube' as const, url: talent.youtubeUrl }] : []),
    ...(talent.tiktokUrl ? [{ platform: 'tiktok' as const, url: talent.tiktokUrl }] : []),
    ...(talent.twitchUrl ? [{ platform: 'twitch' as const, url: talent.twitchUrl }] : []),
    ...(talent.kickUrl ? [{ platform: 'kick' as const, url: talent.kickUrl }] : []),
  ]
  const profile = `/talents/${talent.slug}`

  return (
    <article className="rd-talent-card">
      {film ? (
        <Film film={film} sizes={sizes} priority={priority} playOnHover labels={labels} />
      ) : (
        <Link href={profile} prefetch={false} tabIndex={-1} aria-hidden="true" className="rd-talent-photo block">
          <Image
            src={talent.imageUrl}
            alt=""
            fill
            quality={60}
            sizes={sizes}
            preload={priority}
            loading={priority ? undefined : 'lazy'}
            className="object-cover"
          />
        </Link>
      )}
      <div className="rd-talent-meta">
        <h3>
          <Link href={profile} prefetch={false} aria-label={`View ${talent.name}'s profile`}>
            {talent.name}
          </Link>
        </h3>
        {links.length > 0 && (
          <div className="rd-socials [&_svg]:size-[13px]">
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${talent.name} on ${link.platform}`}
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
