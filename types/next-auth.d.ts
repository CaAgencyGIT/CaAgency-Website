import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      /** Entra app roles of the CA Agency Dashboard app (e.g. Dashboard.WebsiteEditor). */
      roles: string[]
      name?: string | null
      image?: string | null
    }
  }

  interface User {
    id: string
    email: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    roles?: string[]
  }
}
