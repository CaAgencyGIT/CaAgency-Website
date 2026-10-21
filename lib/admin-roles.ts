/**
 * Who may use the website admin. Sign-in goes through the CA Agency Dashboard's
 * Entra app (dashboard.caagency.com), which hands out app roles in the ID token's
 * `roles` claim. Only these two may edit caagency.com content; any other
 * @caagency.com account is refused.
 */
export const WEBSITE_ADMIN_ROLES = ['Dashboard.Admin', 'Dashboard.WebsiteEditor'] as const

const COMPANY_DOMAIN = '@caagency.com'

/** The Entra app roles from a `roles` claim, keeping only strings. */
export function rolesFromClaim(claim: unknown): string[] {
  return Array.isArray(claim) ? claim.filter((r): r is string => typeof r === 'string') : []
}

export function canEditWebsite(email: string | null | undefined, roles: unknown): boolean {
  if (!email || !email.toLowerCase().endsWith(COMPANY_DOMAIN)) return false
  const have = rolesFromClaim(roles)
  return WEBSITE_ADMIN_ROLES.some((role) => have.includes(role))
}
