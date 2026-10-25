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
})
