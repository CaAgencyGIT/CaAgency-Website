import '@/app/public-utilities.css'
import MarketLandingRoute, { marketMetadata } from '@/components/site/MarketLandingRoute'

export const revalidate = 3600

export const metadata = marketMetadata('melbourne')

export default function Page() {
  return <MarketLandingRoute market="melbourne" />
}
