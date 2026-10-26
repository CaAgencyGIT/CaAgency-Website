import mobileVideos from '@/lib/generated/mobile-videos.json'

// Phones get a lighter encode of every site video (432x768, ~1.2 Mbps,
// "-m.mp4" next to the original). Desktop keeps the full-quality file.
// Only videos with an encode on disk (listed at build time) switch, so a
// missing phone file can never stop a video from playing.
export const MOBILE_VIDEO_MEDIA = '(max-width: 767px)'

const hasMobile = new Set<string>(mobileVideos)

export function mobileVideoSrc(src: string): string | null {
  return hasMobile.has(src) ? src.replace(/\.mp4$/, '-m.mp4') : null
}

// For videos created in the browser (after hydration): choose once, at mount.
export function pickVideoSrc(src: string): string {
  if (typeof window === 'undefined') return src
  const mobile = mobileVideoSrc(src)
  return mobile && window.matchMedia(MOBILE_VIDEO_MEDIA).matches ? mobile : src
}
