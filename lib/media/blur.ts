import previews from '@/lib/generated/image-blur.json'

const BLUR = previews as Record<string, string>

/**
 * next/image placeholder props for a public photo: a ~200-byte blurred preview
 * (scripts/build-image-blur.mjs) shown until the photo arrives, or nothing when
 * the photo has no preview (the tile then keeps its plain background colour).
 */
export function blurProps(src: string): { placeholder: 'blur'; blurDataURL: string } | Record<string, never> {
  const key = src.replace(/^https?:\/\/[^/]+/, '').split('?')[0]
  const blurDataURL = BLUR[key]
  return blurDataURL ? { placeholder: 'blur', blurDataURL } : {}
}
