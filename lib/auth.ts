import { auth } from '@/lib/auth-config'
import { redirect } from 'next/navigation'
import { canEditWebsite } from '@/lib/admin-roles'

export async function getAuthSession() {
  const session = await auth()
  return session
}

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

// For API routes: throws an error that callers catch
export async function requireAuth() {
  const session = await getAuthSession()

  if (!session || !canEditWebsite(session.user?.email, session.user?.roles)) {
    throw new UnauthorizedError()
  }

  return session
}

// For page components: redirects to login
export async function requireAuthWithRedirect() {
  const session = await getAuthSession()

  if (!session || !canEditWebsite(session.user?.email, session.user?.roles)) {
    redirect('/admin/login')
  }

  return session
}
