import '@/app/public-utilities.css'
import MarketLandingRoute, { marketMetadata } from '@/components/site/MarketLandingRoute'

export const revalidate = 3600

export const metadata = marketMetadata('germany')

export default function Page() {
  return <MarketLandingRoute market="germany" />
}
