import '@/app/public-utilities.css'
import { notFound } from 'next/navigation'

// Catch-all for unmatched paths under a locale segment (e.g. /ar/does-not-exist).
// Without it, Next falls back to the root English not-found; throwing notFound()
// here renders the localized app/[locale]/not-found.tsx instead.
export default function CatchAllNotFound() {
  notFound()
}
