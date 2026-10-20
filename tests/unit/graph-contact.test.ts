import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { sendGraphContact } from '@/lib/contact/graph'

const fetchMock = vi.fn()
const message = {subject:'Contact test',html:'<p>Private test</p>',text:'Private test',replyTo:'visitor@example.com'}
beforeEach(() => {
  vi.stubGlobal('fetch', fetchMock);fetchMock.mockReset()
  vi.stubEnv('AZ_CLIENT_ID','test-client');vi.stubEnv('AZ_CLIENT_SECRET','test-secret');vi.stubEnv('AZ_TENANT_ID','test-tenant')
  vi.stubEnv('EMAIL_DELIVERY_ENABLED','true')
})
afterEach(() => { vi.unstubAllGlobals();vi.unstubAllEnvs() })

describe('Microsoft contact delivery', () => {
  it('makes no network requests while delivery is disabled', async () => {
    vi.stubEnv('EMAIL_DELIVERY_ENABLED','false')
    await expect(sendGraphContact(message)).rejects.toThrow('disabled')
    expect(fetchMock).not.toHaveBeenCalled()
  })
  it('delivers only to the fixed agency mailbox and preserves the visitor reply-to', async () => {
    fetchMock.mockResolvedValueOnce(Response.json({access_token:'test-token'})).mockResolvedValueOnce(new Response(null,{status:202}))
    await sendGraphContact(message)
    expect(fetchMock.mock.calls[1][0]).toBe('https://graph.microsoft.com/v1.0/users/info%40caagency.com/sendMail')
    const payload = JSON.parse(fetchMock.mock.calls[1][1].body)
    expect(payload.message.toRecipients).toEqual([{emailAddress:{address:'info@caagency.com'}}])
    expect(payload.message.replyTo).toEqual([{emailAddress:{address:'visitor@example.com'}}])
  })
  it('fails when authentication or submission is not accepted', async () => {
    fetchMock.mockResolvedValueOnce(new Response(null,{status:401}))
    await expect(sendGraphContact(message)).rejects.toThrow('authentication failed')
    fetchMock.mockResolvedValueOnce(Response.json({access_token:'test-token'})).mockResolvedValueOnce(new Response(null,{status:403}))
    await expect(sendGraphContact(message)).rejects.toThrow('did not accept')
  })
})
