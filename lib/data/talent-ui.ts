// Fixed labels of a talent profile (components/site/TalentProfile.tsx).
// Translations live in lib/data/people-translated/.

export interface TalentUi {
  roleYoutube: string
  roleSocial: string
  fallbackBio: string
  fallbackDescription: string
  shareFallback: string
  collaborate: string
  getInTouch: string
  campaigns: string
  moreYoutube: string
  moreTalents: string
  backToTalents: string
}

export const englishTalentUi: TalentUi = {
  "roleYoutube": "YouTube Creator",
  "roleSocial": "Instagram & TikTok Influencer",
  "fallbackBio": "{name} is a talented content creator represented by CA Agency. Known for creating engaging content that resonates with audiences across social media platforms.",
  "fallbackDescription": "{name} is a creator represented by CA Agency. Explore their content, audience, and brand partnership opportunities.",
  "shareFallback": "Check out {name}, a talented creator at CA Agency",
  "collaborate": "Interested in collaborating with {name}?",
  "getInTouch": "Get in Touch",
  "campaigns": "Campaigns with CA Agency",
  "moreYoutube": "More YouTube Creators",
  "moreTalents": "More Talents",
  "backToTalents": "Back to All Talents"
}
