import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon, type SocialLink } from '@/components/blocks/TalentCard'
import { ArrowUpRight } from './icons'

export type AgencyTalent = {
  slug: string
  /** Name shown on the card (may differ from the record, e.g. Beatrix Kamerolli). */
  name: string
  firstName: string
  lastName: string
  /** Header-less portrait, 1122:1241, untouched master file. */
  image: string
  alt: string
  socials: SocialLink[]
}

// Agency Index talent card (Nov 2026): identity band with the official logo,
// a fine divider and the two-line live-text name, the portrait at its native
// 1122:1241 shape, then the social links and a profile arrow. Markup and class
// names follow the approved reference (approved-page/app.js) so its CSS applies
// unchanged.
export default function AgencyTalentCard({
  talent,
  eager,
  sizes,
  profileAria,
  socialAria,
}: {
  talent: AgencyTalent
  eager: boolean
  sizes: string
  profileAria: string
  socialAria: (platform: string) => string
}) {
  const href = `/talents/${talent.slug}`
  return (
    <article className="talent-card" data-talent-slug={talent.slug}>
      <Link className="card-visual" href={href} prefetch={false} aria-label={profileAria}>
        <header className="card-identity">
          {/* eslint-disable-next-line @next/next/no-img-element -- small vector logo */}
          <img src="/images/site/logo_payoff.svg" alt="" width={46} height={39} />
          <h3 className="card-name">
            <span>{talent.firstName}</span>
            {talent.lastName && <span>{talent.lastName}</span>}
          </h3>
        </header>
        <div className="portrait-wrap">
          {/* unoptimized: the portrait masters are served byte-for-byte as supplied */}
          <Image
            src={talent.image}
            alt={talent.alt}
            width={1122}
            height={1241}
            sizes={sizes}
            unoptimized
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            decoding="async"
          />
        </div>
      </Link>
      <div className="card-utility">
        <div className="socials">
          {talent.socials.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={socialAria(link.platform)}>
              <SocialIcon platform={link.platform} />
            </a>
          ))}
        </div>
        <Link className="profile-link" href={href} prefetch={false} aria-label={profileAria}>
          <span aria-hidden="true">
            <ArrowUpRight />
          </span>
        </Link>
      </div>
    </article>
  )
}
