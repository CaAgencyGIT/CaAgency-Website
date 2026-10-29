import { setRequestLocale } from 'next-intl/server'
import RootDocument from '@/components/layout/RootDocument'
import '../globals.css'
import '../admin.css'

export { metadata, viewport } from '@/lib/seo/root-metadata'

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  setRequestLocale('en')

  return (
    <RootDocument locale="en" dir="ltr" includePublicSchema={false}>
      {children}
    </RootDocument>
  )
}
