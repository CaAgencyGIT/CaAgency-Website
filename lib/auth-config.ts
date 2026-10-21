import NextAuth from 'next-auth'
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id'
import { canEditWebsite, rolesFromClaim } from '@/lib/admin-roles'

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: '/api/auth',
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AZURE_AD_CLIENT_ID || process.env.AZ_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || process.env.AZ_CLIENT_SECRET!,
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID || process.env.AZ_TENANT_ID}/v2.0`,
      authorization: {
        params: {
          scope: 'openid profile email',
        },
      },
    }),
  ],
  callbacks: {
    // Company account AND the Admin or Website editor app role (assigned in Entra on the dashboard app).
    async signIn({ user, profile }) {
      return canEditWebsite(user.email, profile?.roles)
    },
    async jwt({ token, user, profile }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      if (profile) {
        token.roles = rolesFromClaim(profile.roles)
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.roles = rolesFromClaim(token.roles)
      }
      return session
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  trustHost: process.env.AUTH_TRUST_HOST === 'true',
})
