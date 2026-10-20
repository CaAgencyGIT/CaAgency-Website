# CA Agency website on caagency-server

This checkout runs the live main website on caagency-server after the approved
19 October 2026 hosting cutover. See
`../cloudflare-preparation/SERVER-CUTOVER-STATUS-20261019.txt` for current status.
Finance is a separate service on port 3000. The website listens only on
127.0.0.1:3001. Caddy and the existing named Cloudflare Tunnel provide public
HTTPS. The live Cloudflare zones and tunnel remain in Sweetflips until the
separately gated account migration; the production Turnstile widget is already
in the user's mcserverpitufo account.

The previous Cloudflare production checkout remains at
`/home/user/Ca Agency/caagency-website`; its D1/R2 data is retained for recovery.

## Data and services

- Application: `/srv/caagency-website`, systemd `caagency-website.service`.
- Runtime settings: `/etc/caagency-website/app.env`, root:caagency-web 0640.
- Database: PostgreSQL `caagency_website` (role `caagency_website`) in the `caagency-postgres`
  container on 127.0.0.1:5432, next to the finance database. Since 20 October 2026.
- Retired SQLite database (rollback only): `/var/lib/caagency-website/website.sqlite`.
- Local media: `/var/lib/caagency-website/media`.
- Private preview form captures: `/var/lib/caagency-website/contact-captures`.
- Runtime account: `caagency-web`, no interactive login.
- Temporary public preview: `caagency-website-preview-tunnel.service`.

The website service is active and enabled at boot. The temporary preview tunnel
is stopped and disabled. All five finance timers must remain disabled. No timer
was installed for the website or cutover observation. A bounded 24-hour
`caagency-cutover-observation.service` records read-only availability checks.

## Build and verification

```bash
npm ci
npm run db:generate
npm run build:server
npx tsc --noEmit
npm run lint
npm test
```

`DATABASE_URL` must be a `postgresql://` URL. Source build settings are stored in
ignored mode-600 `.env.local`. Migrations are Prisma migrations in
`prisma/pg-migrations`, applied by `npm run db:migrate:deploy`. The JSON array
fields (jsonb) preserve the D1/SQLite application data shape.
`scripts/copy-sqlite-to-postgres.mjs` performed the one-time SQLite → PostgreSQL
copy with a field-by-field readback comparison. `prisma/server-migrations` is
the historical SQLite schema.
Builds prerender the current local database, so refresh it before a release.

Use `output: standalone` plus public and `.next/static` assets when installing.
Remove traced `.env*` files from the deployment and use the runtime env file.
The local media directory is independent of application releases. The Next.js
cache and prerender files need write access for ISR and revalidation.

## Email and login

Turnstile verification requires action `contact` and the exact configured
frontend hostname. Private preview captures are enabled with `PREVIEW_MODE=true`;
they never send mail. No real message was sent during preparation.
Production delivery uses Microsoft Graph with the existing Entra application
credentials. `EMAIL_DELIVERY_ENABLED=true` is required independently of preview
mode. Recipients are fixed to info@caagency.com, with the visitor as reply-to.
Production delivery is enabled. The credentials and Mail.Send role were
verified, as was read access to the info mailbox. On 19 October one authorized
test through the actual production delivery function arrived exactly once in
the info mailbox at 01:12:51 UTC. Browser form/Turnstile verification is still
pending; do not repeat the transport test or resend if delivery is uncertain.

NextAuth still uses Microsoft Entra ID. Admin and authentication use the
existing `https://www.caagency.com` origin, with production callback
`https://www.caagency.com/api/auth/callback/microsoft-entra-id`. Public website
pages remain canonical on `https://caagency.com`. Caddy redirects bare-domain
admin/auth requests to www and serves www admin APIs/assets without redirects,
preserving secure host-only cookies and the same-origin content policy. The temporary
trycloudflare preview hostname was not added to Entra. Session enforcement and
admin operations were verified locally with a short-lived synthetic test
session. Public Microsoft sign-in initiation uses the canonical callback;
interactive Microsoft sign-in remains to be tested by the user. The production
session secret was preserved from the production environment.

## Handover and rollback

See `../cloudflare-preparation/SERVER-CUTOVER-STATUS-20261019.txt`. The fresh
D1 export and media reconciliation are complete. The reviewed Caddy template
is now installed despite its historical NOT-ACTIVE filename. The server's
PostgreSQL database `caagency_website` is authoritative for website writes. Do not restore old D1 data
over it or return traffic to D1 without reconciling newer server writes.
The finance database is independently authoritative. Leave the old server
unchanged and keep timers disabled. Nameserver/account migration is gated by
24-hour observation, acceptance checks, administrative access and HTTPS readiness.

`deploy/backup-website.sh` (installed as `/usr/local/sbin/caagency-website-backup`)
creates a private `pg_dump` of `caagency_website` with matching environment and
media under `/var/backups/caagency-website`. The nightly
`caagency-offsite-backup.timer` runs it and uploads the encrypted archive to R2.
