type ContactMessage = { subject: string; html: string; text: string; replyTo: string }

export async function sendGraphContact(message: ContactMessage): Promise<void> {
  if (process.env.EMAIL_DELIVERY_ENABLED !== 'true') throw new Error('Email delivery is disabled')
  const clientId = process.env.AZURE_AD_CLIENT_ID || process.env.AZ_CLIENT_ID
  const clientSecret = process.env.AZURE_AD_CLIENT_SECRET || process.env.AZ_CLIENT_SECRET
  const tenantId = process.env.AZURE_AD_TENANT_ID || process.env.AZ_TENANT_ID
  if (!clientId || !clientSecret || !tenantId) throw new Error('Microsoft mail configuration is incomplete')
  const tokenResponse = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`, {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, scope: 'https://graph.microsoft.com/.default', grant_type: 'client_credentials' }),
    signal: AbortSignal.timeout(10_000),
  })
  if (!tokenResponse.ok) throw new Error(`Microsoft mail authentication failed (${tokenResponse.status})`)
  const token = await tokenResponse.json() as { access_token?: string }
  if (!token.access_token) throw new Error('Microsoft mail authentication returned no token')
  // Contact forms always deliver to the agency mailbox; caller input cannot
  // choose recipients or use the endpoint as a general-purpose mail relay.
  const response = await fetch('https://graph.microsoft.com/v1.0/users/info%40caagency.com/sendMail', {
    method: 'POST', headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: {
      subject: message.subject, body: { contentType: 'HTML', content: message.html },
      toRecipients: [{ emailAddress: { address: 'info@caagency.com' } }],
      replyTo: [{ emailAddress: { address: message.replyTo } }],
    } }),
    signal: AbortSignal.timeout(15_000),
  })
  if (response.status !== 202) throw new Error(`Microsoft did not accept the contact email (${response.status})`)
}
