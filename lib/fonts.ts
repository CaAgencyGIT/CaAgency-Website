import localFont from 'next/font/local'
import { Work_Sans, Jost as JostFont, DM_Sans, Instrument_Serif } from 'next/font/google'

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
  preload: false,
})

// October 2026 redesign typography.
export const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const InstrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})
