import { MetadataRoute } from 'next'

const baseUrl = 'https://caagency.com'
const disallow = ['/api', '/admin']

// Named so that search and answer engines (ChatGPT, Claude, Perplexity,
// Gemini, Apple Intelligence) keep full access even if the `*` rule changes.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  if (process.env.PREVIEW_MODE === 'true') return { rules: { userAgent: '*', disallow: '/' } }
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: aiCrawlers, allow: '/', disallow },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/sitemap-video.xml`],
    host: baseUrl,
  }
}
