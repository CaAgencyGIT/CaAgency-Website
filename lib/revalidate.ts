import { revalidatePath } from 'next/cache'
import { routing } from '@/i18n/routing'
import { schedulePurgePublicSite } from '@/lib/edge-purge'

export function revalidateTalentsPages() {
  revalidatePath('/talents')
  // Individual talent profile pages (ISR) so edits propagate immediately.
  revalidatePath('/talents/[slug]', 'page')
  revalidatePath('/')
  for (const locale of routing.locales) {
    if (locale !== routing.defaultLocale) {
      revalidatePath(`/${locale}/talents`)
    }
  }
  schedulePurgePublicSite()
}

export function revalidateBlogPages() {
  revalidatePath('/blog')
  revalidatePath('/blog/[slug]', 'page')
  revalidatePath('/')
  schedulePurgePublicSite()
}

export function revalidateSitePages() {
  const paths = [
    '/',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/business-license',
    '/privacy-policy',
    '/terms-of-service',
    '/influencer-marketing-dubai',
    '/influencer-marketing-uae',
    '/influencer-marketing-saudi-arabia',
    '/influencer-marketing-gcc',
    '/influencer-marketing-korea',
    '/influencer-marketing-asia',
    '/influencer-marketing-usa',
    '/influencer-marketing-uk',
    '/influencer-marketing-canada',
    '/influencer-marketing-australia',
    '/korean-skincare-influencer-marketing',
    '/beauty-influencer-marketing-agency',
    '/skincare-influencer-marketing-agency',
  ]

  for (const path of paths) {
    revalidatePath(path)
  }

  for (const locale of routing.locales) {
    if (locale !== routing.defaultLocale) {
      revalidatePath(`/${locale}`)
      revalidatePath(`/${locale}/about`)
      revalidatePath(`/${locale}/services`)
      revalidatePath(`/${locale}/contact`)
    }
  }
  schedulePurgePublicSite()
}
