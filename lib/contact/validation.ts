import { parseFollowerCount } from '@/lib/contact/followers'

export const MAX_CONTACT_BODY_BYTES = 24 * 1024
export const MIN_FORM_TIME_MS = 750

export const SOCIAL_PLATFORMS = ['instagram', 'tiktok', 'youtube', 'other'] as const
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]

export const CONTENT_CATEGORIES = ['beauty', 'skincare', 'makeup', 'haircare', 'fashion', 'lifestyle', 'tech', 'other'] as const
export type ContentCategory = (typeof CONTENT_CATEGORIES)[number]

export const HELP_ME_CHOOSE = 'help-me-choose'
export const MAX_SOCIAL_PROFILES = 10
export const MAX_TALENTS = 30

export type CampaignTiming =
  | { mode: 'month'; month: string }
  | { mode: 'dates'; from: string; to: string }
  | { mode: 'undecided' }
  | null

export type SocialProfile = { platform: SocialPlatform; handle: string; followersInput: string; followers: number }

type Common = { fullName: string; email: string; phone: string; message: string; website: string; _formTime: number }

export type BrandEnquiry = Common & {
  formType: 'brand'
  company: string
  talents: string[]
  timing: CampaignTiming
}

export type TalentApplication = Common & {
  formType: 'talent'
  basedIn: string
  categories: ContentCategory[]
  profiles: SocialProfile[]
  mediaKit: string
}

export type ContactFormData = BrandEnquiry | TalentApplication

type ValidationResult =
  | { ok: true; data: ContactFormData }
  | { ok: false; code: 'INVALID_REQUEST' | 'BOT_REJECTED'; error: string }

export const contactFieldLimits = {
  fullName: 200,
  email: 320,
  phone: 40,
  company: 200,
  message: 5000,
  basedIn: 200,
  mediaKit: 500,
  handle: 300,
  followers: 20,
  talent: 120,
  website: 500,
} as const

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/
const datePattern = /^\d{4}-\d{2}-\d{2}$/
// Digits with an optional leading "+" and common separators.
const phonePattern = /^\+?[\d\s().-]{6,40}$/

const invalid = (error: string): ValidationResult => ({ ok: false, code: 'INVALID_REQUEST', error })

function str(value: unknown, max: number): string | null {
  if (value === undefined || value === null) return ''
  if (typeof value !== 'string' || value.length > max) return null
  return value.trim()
}

export function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

// "@name", "name" or a full http(s) profile link.
export function isValidHandle(value: string): boolean {
  if (/^https?:\/\//i.test(value)) return isHttpUrl(value)
  return /^@?[\w.\-]{1,100}$/u.test(value)
}

function parseTiming(raw: unknown): CampaignTiming | undefined {
  if (raw === undefined || raw === null || raw === '') return null
  if (typeof raw !== 'object' || Array.isArray(raw)) return undefined
  const t = raw as Record<string, unknown>
  if (t.mode === 'undecided') return { mode: 'undecided' }
  if (t.mode === 'month' && typeof t.month === 'string' && monthPattern.test(t.month)) return { mode: 'month', month: t.month }
  if (t.mode === 'dates' && typeof t.from === 'string' && datePattern.test(t.from)) {
    const to = typeof t.to === 'string' && datePattern.test(t.to) ? t.to : ''
    if (to && to < t.from) return undefined
    return { mode: 'dates', from: t.from, to }
  }
  if (t.mode === '' || t.mode === undefined) return null
  return undefined
}

export function validateContactPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return invalid('Invalid request body')
  const raw = input as Record<string, unknown>
  const formType = raw.formType
  if (formType !== 'brand' && formType !== 'talent') return invalid('Invalid form type')

  const fullName = str(raw.fullName, contactFieldLimits.fullName)
  const email = str(raw.email, contactFieldLimits.email)
  const phone = str(raw.phone, contactFieldLimits.phone)
  const message = str(raw.message, contactFieldLimits.message)
  const website = str(raw.website, contactFieldLimits.website)
  if ([fullName, email, phone, message, website].some((v) => v === null)) return invalid('One or more fields are invalid')

  if (website) return { ok: false, code: 'BOT_REJECTED', error: 'Submission rejected' }
  const formTime = raw._formTime
  if (typeof formTime !== 'number' || !Number.isFinite(formTime) || formTime < MIN_FORM_TIME_MS) {
    return { ok: false, code: 'BOT_REJECTED', error: 'Submission rejected' }
  }

  if (!fullName || !email || !message) return invalid('Missing required fields')
  if (!emailPattern.test(email!)) return invalid('Invalid email format')
  if (phone && !phonePattern.test(phone)) return invalid('Invalid phone number')

  const common = { fullName: fullName!, email: email!, phone: phone!, message: message!, website: '', _formTime: formTime }

  if (formType === 'brand') {
    const company = str(raw.company, contactFieldLimits.company)
    if (!company) return invalid('Brand or agency name is required')
    const talentsRaw = raw.talents ?? []
    if (!Array.isArray(talentsRaw) || talentsRaw.length > MAX_TALENTS) return invalid('Invalid talent selection')
    const talents: string[] = []
    for (const item of talentsRaw) {
      const name = str(item, contactFieldLimits.talent)
      if (!name) return invalid('Invalid talent selection')
      if (!talents.includes(name)) talents.push(name)
    }
    const timing = parseTiming(raw.timing)
    if (timing === undefined) return invalid('Invalid campaign timing')
    return { ok: true, data: { ...common, formType, company, talents, timing } }
  }

  const basedIn = str(raw.basedIn, contactFieldLimits.basedIn)
  const mediaKit = str(raw.mediaKit, contactFieldLimits.mediaKit)
  if (basedIn === null || mediaKit === null) return invalid('One or more fields are invalid')
  if (mediaKit && !isHttpUrl(mediaKit)) return invalid('Invalid media kit link')

  const categoriesRaw = raw.categories ?? []
  if (!Array.isArray(categoriesRaw) || categoriesRaw.some((c) => !CONTENT_CATEGORIES.includes(c as ContentCategory))) {
    return invalid('Invalid content categories')
  }
  const categories = [...new Set(categoriesRaw as ContentCategory[])]

  const profilesRaw = raw.profiles
  if (!Array.isArray(profilesRaw) || profilesRaw.length === 0 || profilesRaw.length > MAX_SOCIAL_PROFILES) {
    return invalid('At least one social profile is required')
  }
  const profiles: SocialProfile[] = []
  for (const item of profilesRaw) {
    if (!item || typeof item !== 'object') return invalid('Invalid social profile')
    const p = item as Record<string, unknown>
    const platform = p.platform as SocialPlatform
    const handle = str(p.handle, contactFieldLimits.handle)
    const followersInput = str(p.followers, contactFieldLimits.followers)
    if (!SOCIAL_PLATFORMS.includes(platform) || !handle || !followersInput) return invalid('Incomplete social profile')
    if (!isValidHandle(handle)) return invalid('Invalid social handle or link')
    const followers = parseFollowerCount(followersInput)
    if (followers === null) return invalid('Invalid follower count')
    profiles.push({ platform, handle, followersInput, followers })
  }

  return { ok: true, data: { ...common, formType, basedIn: basedIn!, categories, profiles, mediaKit: mediaKit! } }
}
