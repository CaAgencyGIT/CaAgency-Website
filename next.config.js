import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: 'standalone',
  skipProxyUrlNormalize: true,
  serverExternalPackages: ['@prisma/client', '@prisma/adapter-better-sqlite3', 'better-sqlite3'],
  async redirects() {
    return [
      // English is the default locale and is permanently canonical without a prefix.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // /images/site (directory) -> logo (avoids 404 from crawlers)
      { source: '/images/site', destination: '/images/site/logo.svg', permanent: false },
      // Case studies removed in the July 2026 renovation; URLs are indexed.
      { source: '/case-studies/medicube-skincare', destination: '/case-studies', permanent: true },
      { source: '/case-studies/morphe-collaboration', destination: '/case-studies', permanent: true },
      // Redirect the removed talent's old profile to the current roster.
      { source: '/talents/milla-muladze', destination: '/talents', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'caagency.com',
      },
      {
        protocol: 'https',
        hostname: 'caagency.co.uk',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [45, 60, 70, 75],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          ...(process.env.PREVIEW_MODE === 'true' ? [{key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive'}] : []),
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https://*.public.blob.vercel-storage.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.public.blob.vercel-storage.com https://challenges.cloudflare.com; frame-src https://www.google.com https://challenges.cloudflare.com; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
      {
        source: '/(assets|images|fonts|videos)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const configured = withNextIntl(bundleAnalyzer({
  ...nextConfig,
  reactCompiler: true,
  experimental: {
    cpus: 2,
    // Inline CSS into the HTML instead of a render-blocking <link>. Tried off
    // in Oct 2026 (PR #78): the document shrank, but production Lighthouse
    // attributed ~200ms of extra FCP/LCP on the homepage (text LCP) to the
    // render-blocking stylesheet, so it is back on. The cost is that the CSS
    // is also embedded in the RSC payload.
    inlineCss: true,
  },
}))

export default configured
