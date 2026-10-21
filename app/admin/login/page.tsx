import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth-config'
import { signInWithMicrosoft } from './actions'
import { canEditWebsite } from '@/lib/admin-roles'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>
}) {
  // Check if already authenticated
  const session = await auth()
  if (canEditWebsite(session?.user?.email, session?.user?.roles)) {
    redirect('/admin')
  }

  const params = await searchParams
  const error = params.error

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-section-x">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Heading as="h1" color="white" className="mb-4">
            Admin Login
          </Heading>
          <p className="text-foreground-white/70 text-sm">
            Sign in with your CA Agency Microsoft account. You need the Admin or Website editor role.
          </p>
        </div>

        <div className="bg-background-dark border border-foreground-white/20 rounded-lg p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error === 'AccessDenied'
                ? 'Access denied. Your account needs the Admin or Website editor role. Ask an admin to assign it in the CA Agency Dashboard (Users & roles explains how).'
                : `Authentication error: ${error}`}
            </div>
          )}

          <form action={signInWithMicrosoft}>
            <Button
              variant="primary"
              className="w-full"
              type="submit"
            >
              Sign in with Microsoft
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-foreground-white/50 mt-6">
          Roles are managed in Microsoft Entra on the CA Agency Dashboard app.
        </p>
      </div>
    </div>
  )
}
