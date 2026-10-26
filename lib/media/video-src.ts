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

// The light encode is 540px wide; a film shown no wider than this many
// device pixels looks the same from it (Oct 2026: small desktop grid tiles on
// standard and 1.25-1.5x screens; Retina tiles keep the full-quality file).
const LIGHT_ENCODE_MAX_DEVICE_PX = 600

// For videos created in the browser (after hydration): choose once, at mount.
// `renderWidth` is the element's CSS width, when known.
export function pickVideoSrc(src: string, renderWidth?: number): string {
  if (typeof window === 'undefined') return src
  const mobile = mobileVideoSrc(src)
  if (!mobile) return src
  if (window.matchMedia(MOBILE_VIDEO_MEDIA).matches) return mobile
  return renderWidth && renderWidth * window.devicePixelRatio <= LIGHT_ENCODE_MAX_DEVICE_PX ? mobile : src
}
