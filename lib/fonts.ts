import localFont from 'next/font/local'
import { Work_Sans, Jost as JostFont } from 'next/font/google'

// Custom fonts - placeholder files created, replace with actual fonts
export const Anegra = localFont({
  src: '../public/fonts/Anegra.woff2',
  variable: '--font-anegra',
  display: 'swap',
  weight: '100 900',
  fallback: ['sans-serif'],
})

// Talent-card names: Shippori Mincho ExtraBold, the face of the approved
// cover lettering, subset to Latin (13 KB). Only used in the card header.
export const TalentName = localFont({
  src: '../public/fonts/ShipporiMincho-ExtraBold-latin.woff2',
  variable: '--font-talent-name',
  display: 'swap',
  weight: '800',
  fallback: ['Georgia', 'serif'],
  preload: false,
})

export const WorkSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const Jost = JostFont({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: false,
})
