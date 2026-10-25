// Contact-form copy is resolved on the server and handed to the client form as
// plain strings: every message is static text, so shipping next-intl's ICU
// formatter to /contact (~15 KB gz) bought nothing.
export const CONTACT_FORM_LABEL_KEYS = [
  'aboutYouLabel',
  'aboutYouPlaceholder',
  'addPlatform',
  'basedIn',
  'basedInPlaceholder',
  'brandName',
  'brandSuccess',
  'campaignTiming',
  'catBeauty',
  'catFashion',
  'catHaircare',
  'catLifestyle',
  'catMakeup',
  'catOther',
  'catSkincare',
  'catTech',
  'collaborationLabel',
  'collaborationPlaceholder',
  'companyPlaceholder',
  'contentCategories',
  'countryCode',
  'email',
  'emailPlaceholder',
  'errDates',
  'errEmail',
  'errFollowers',
  'errHandle',
  'errPhone',
  'errProfiles',
  'errRequired',
  'errSummary',
  'errUrl',
  'errorMessage',
  'errorTitle',
  'followers',
  'followersPlaceholder',
  'fullName',
  'handleOrUrl',
  'handlePlaceholder',
  'helpMeChoose',
  'mediaKit',
  'mediaKitPlaceholder',
  'namePlaceholder',
  'noTalentMatch',
  'optional',
  'personalEmailPlaceholder',
  'phonePlaceholder',
  'phoneWhatsapp',
  'platform',
  'platformOther',
  'profile',
  'remove',
  'removeProfile',
  'required',
  'sendAnotherMessage',
  'sendEnquiry',
  'sending',
  'socialProfiles',
  'socialProfilesHint',
  'submitApplication',
  'subscribers',
  'talentOfInterest',
  'talentSearchPlaceholder',
  'talentSuccess',
  'timingDates',
  'timingFrom',
  'timingMonth',
  'timingTo',
  'timingUndecided',
  'workEmail',
] as const

export type ContactFormLabelKey = (typeof CONTACT_FORM_LABEL_KEYS)[number]
export type ContactFormLabels = Readonly<Record<ContactFormLabelKey, string>>

type MessageTree = { readonly [key: string]: unknown }

function namespace(messages: MessageTree, name: string): MessageTree {
  const value = messages[name]
  return value && typeof value === 'object' ? (value as MessageTree) : {}
}

// Form-specific copy lives in `contactForm`; generic actions shared with the
// rest of the site (e.g. sendAnotherMessage) live in `common`.
export function buildContactFormLabels(messages: MessageTree): ContactFormLabels {
  const form = namespace(messages, 'contactForm')
  const common = namespace(messages, 'common')

  const entries = CONTACT_FORM_LABEL_KEYS.map((key) => {
    const value = form[key] ?? common[key]
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`Missing contact form label "${key}" (looked in contactForm and common)`)
    }
    return [key, value] as const
  })

  return Object.fromEntries(entries) as ContactFormLabels
}
