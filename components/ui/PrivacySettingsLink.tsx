'use client'

import { OPEN_PRIVACY_SETTINGS_EVENT } from '@/components/ui/CookieConsent'

// Footer link that reopens the Privacy Settings dialog.
export default function PrivacySettingsLink({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_PRIVACY_SETTINGS_EVENT))}>
      {label}
    </button>
  )
}
