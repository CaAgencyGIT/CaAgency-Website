import { formatFollowerCount } from '@/lib/contact/followers'
import { HELP_ME_CHOOSE, type BrandEnquiry, type CampaignTiming, type ContactFormData, type TalentApplication } from '@/lib/contact/validation'

const PLATFORM_LABELS = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', other: 'Other' } as const
const CATEGORY_LABELS = {
  beauty: 'Beauty', skincare: 'Skincare', makeup: 'Makeup', haircare: 'Haircare',
  fashion: 'Fashion', lifestyle: 'Lifestyle', other: 'Other',
} as const

export function escapeHtml(text: string): string {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function formatMonth(value: string): string {
  const [y, m] = value.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

function formatDate(value: string): string {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export function describeTiming(timing: CampaignTiming): string {
  if (!timing) return 'Not provided'
  if (timing.mode === 'undecided') return 'Not decided yet'
  if (timing.mode === 'month') return `Around ${formatMonth(timing.month)}`
  return timing.to ? `${formatDate(timing.from)} – ${formatDate(timing.to)}` : `From ${formatDate(timing.from)}`
}

function describeTalents(talents: string[]): string {
  if (!talents.length) return 'Not provided'
  return talents.map((t) => (t === HELP_ME_CHOOSE ? 'Help me choose' : t)).join(', ')
}

function profileLink(handle: string, platform: TalentApplication['profiles'][number]['platform']): string | null {
  if (/^https?:\/\//i.test(handle)) return handle
  const name = handle.replace(/^@/, '')
  if (platform === 'instagram') return `https://www.instagram.com/${name}/`
  if (platform === 'tiktok') return `https://www.tiktok.com/@${name}`
  if (platform === 'youtube') return `https://www.youtube.com/@${name}`
  return null
}

type Row = [label: string, value: string, href?: string | null]

function brandRows(d: BrandEnquiry): Row[] {
  return [
    ['Full name', d.fullName],
    ['Work email', d.email, `mailto:${d.email}`],
    ['Brand / agency', d.company],
    ['Phone / WhatsApp', d.phone || 'Not provided', d.phone ? `tel:${d.phone.replace(/[^\d+]/g, '')}` : null],
    ['Talent of interest', describeTalents(d.talents)],
    ['Preferred campaign timing', describeTiming(d.timing)],
  ]
}

function talentRows(d: TalentApplication): Row[] {
  return [
    ['Full name', d.fullName],
    ['Email', d.email, `mailto:${d.email}`],
    ['Phone / WhatsApp', d.phone || 'Not provided', d.phone ? `tel:${d.phone.replace(/[^\d+]/g, '')}` : null],
    ['Based in', d.basedIn || 'Not provided'],
    ['Content categories', d.categories.length ? d.categories.map((c) => CATEGORY_LABELS[c]).join(', ') : 'Not provided'],
    ['Media kit / portfolio', d.mediaKit || 'Not provided', d.mediaKit || null],
  ]
}

function profileLines(d: TalentApplication): Array<{ platform: string; handle: string; href: string | null; count: string }> {
  return d.profiles.map((p) => ({
    platform: PLATFORM_LABELS[p.platform],
    handle: p.handle,
    href: profileLink(p.handle, p.platform),
    count: `${formatFollowerCount(p.followers)} ${p.platform === 'youtube' ? 'subscribers' : 'followers'}${
      p.followersInput.replace(/,/g, '') !== String(p.followers) ? ` (entered as “${p.followersInput}”)` : ''
    }`,
  }))
}

export function buildContactEmail(d: ContactFormData): { subject: string; html: string; text: string } {
  const isBrand = d.formType === 'brand'
  const kind = isBrand ? 'Brand enquiry' : 'Talent application'
  const subject = isBrand ? `Brand enquiry: ${d.company} (${d.fullName})` : `Talent application: ${d.fullName}`
  const rows = isBrand ? brandRows(d) : talentRows(d)
  const profiles = isBrand ? [] : profileLines(d)
  const messageLabel = isBrand ? 'Collaboration' : 'About them and their content'

  const cell = ([label, value, href]: Row) => `
    <tr>
      <td style="padding:8px 12px 8px 0;vertical-align:top;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap">${escapeHtml(label)}</td>
      <td style="padding:8px 0;vertical-align:top">${href ? `<a href="${escapeHtml(href)}" style="color:#111">${escapeHtml(value)}</a>` : escapeHtml(value)}</td>
    </tr>`

  const html = `<!DOCTYPE html>
<html><body style="margin:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.55">
  <div style="max-width:640px;margin:0 auto;padding:24px">
    <div style="background:#0e0e0e;color:#fff;padding:22px 26px;border-radius:12px 12px 0 0">
      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:.7">CA Agency website</div>
      <div style="font-size:22px;margin-top:4px">${kind}</div>
    </div>
    <div style="background:#fff;padding:22px 26px;border-radius:0 0 12px 12px">
      <table style="border-collapse:collapse;width:100%">${rows.map(cell).join('')}</table>
      ${profiles.length ? `
      <div style="margin-top:18px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px">Social profiles (self-reported counts)</div>
      <table style="border-collapse:collapse;width:100%;margin-top:6px">${profiles.map((p) => `
        <tr>
          <td style="padding:6px 12px 6px 0;white-space:nowrap">${escapeHtml(p.platform)}</td>
          <td style="padding:6px 12px 6px 0">${p.href ? `<a href="${escapeHtml(p.href)}" style="color:#111">${escapeHtml(p.handle)}</a>` : escapeHtml(p.handle)}</td>
          <td style="padding:6px 0;white-space:nowrap">${escapeHtml(p.count)}</td>
        </tr>`).join('')}
      </table>` : ''}
      <div style="margin-top:18px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px">${messageLabel}</div>
      <p style="margin:6px 0 0;white-space:pre-wrap">${escapeHtml(d.message)}</p>
    </div>
  </div>
</body></html>`

  const text = [
    `${kind} (CA Agency website)`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(profiles.length
      ? ['', 'Social profiles (self-reported counts):', ...profiles.map((p) => `- ${p.platform}: ${p.handle} — ${p.count}`)]
      : []),
    '',
    `${messageLabel}:`,
    d.message,
  ].join('\n')

  return { subject, html, text }
}
