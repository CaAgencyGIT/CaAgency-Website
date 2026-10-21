import { describe, expect, it } from 'vitest'
import { canEditWebsite, rolesFromClaim } from '@/lib/admin-roles'

describe('website admin access', () => {
  it('allows company accounts with the Admin or Website editor app role', () => {
    expect(canEditWebsite('amor@caagency.com', ['Dashboard.Admin'])).toBe(true)
    expect(canEditWebsite('Editor@CAagency.com', ['Dashboard.Viewer', 'Dashboard.WebsiteEditor'])).toBe(true)
  })

  it('refuses company accounts without one of those roles (the old domain-only rule)', () => {
    expect(canEditWebsite('amor@caagency.com', [])).toBe(false)
    expect(canEditWebsite('amor@caagency.com', undefined)).toBe(false)
    expect(canEditWebsite('amor@caagency.com', ['Dashboard.Viewer', 'Dashboard.FinanceAdmin', 'Dashboard.TalentManager'])).toBe(false)
  })

  it('refuses other domains even with the role', () => {
    expect(canEditWebsite('someone@gmail.com', ['Dashboard.Admin'])).toBe(false)
    expect(canEditWebsite('x@caagency.com.evil.io', ['Dashboard.Admin'])).toBe(false)
    expect(canEditWebsite(null, ['Dashboard.Admin'])).toBe(false)
  })

  it('reads only string roles from the claim', () => {
    expect(rolesFromClaim(['Dashboard.Admin', 7, null])).toEqual(['Dashboard.Admin'])
    expect(rolesFromClaim('Dashboard.Admin')).toEqual([])
  })
})
