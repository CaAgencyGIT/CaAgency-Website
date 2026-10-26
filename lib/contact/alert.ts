// Phone push (ntfy, same topic as the finance dashboard) when an enquiry can't
// be emailed, so a broken mail setup is noticed within minutes, not days.
// Never includes the visitor's details; at most one push per 30 minutes per
// server process. A missing topic or ntfy outage never affects the visitor.
const THROTTLE_MS = 30 * 60_000
let lastPushAt = Number.NEGATIVE_INFINITY

export async function alertContactFailure(error: unknown, now = Date.now()): Promise<boolean> {
  const topic = process.env.NTFY_TOPIC
  if (!topic || now - lastPushAt < THROTTLE_MS) return false
  lastPushAt = now
  const reason = error instanceof Error ? error.message.slice(0, 160) : 'unknown error'
  try {
    const res = await fetch('https://ntfy.sh/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic,
        title: 'Website enquiry not delivered',
        message: `A contact form submission could not be emailed to info@caagency.com (${reason}). A private copy is saved on the server.`,
        priority: 4,
        tags: ['warning'],
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) console.error(`Contact alert push failed: HTTP ${res.status}`)
    return res.ok
  } catch (err) {
    console.error(`Contact alert push failed: ${err instanceof Error ? err.message : String(err)}`)
    return false
  }
}

/** Test hook: forget the last push so the throttle starts fresh. */
export function resetContactAlertThrottle() {
  lastPushAt = Number.NEGATIVE_INFINITY
}
