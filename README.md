# CA Agency website

Next.js 16 + Prisma 7 on PostgreSQL (container `caagency-postgres`, database
`caagency_website`, port 5432). In production the site is served by systemd
`caagency-website.service` on 127.0.0.1:3001 behind Caddy and a Cloudflare
Tunnel. Finance is a separate service on port 3000.

## Deploy from GitHub without deployment keys

Open **Actions → Deploy → Run workflow**, select `master`, and run it after CI
passes. Select `dry_run` to check preflight without replacing the live release.
Pushing or merging into the default branch automatically deploys after CI
succeeds for the same commit. Pull requests and failed CI do not deploy.
Manual deployment and dry runs remain available through this workflow.

CI and deployment jobs run in disposable, isolated virtual machines on our
server, labeled `caagency-website-ci`. Each VM handles one job, then its disk
is discarded. These jobs consume no GitHub-hosted runner minutes.

The workflow authenticates to the server with GitHub OIDC and uses GitHub's
automatic, read-only job token to fetch the exact commit. No SSH deploy key,
personal access token, or deployment secret needs to be configured. The server
requires the `server-production` environment, the default branch, the approved
workflow, and successful push CI for the same commit. It builds a separate
checkout, then uses the server's existing health checks and automatic rollback.
Database migrations still require the reviewed, manual server procedure.

Server setup and recovery: `infra/deploy/github-oidc/README.md` in the parent
server workspace. Deployment logs: `/var/lib/caagency-deploy/jobs/` (root only).

## Data and services

- Application: `/srv/caagency-website`, systemd `caagency-website.service`
  (listens only on 127.0.0.1:3001; Caddy and the Cloudflare Tunnel provide public HTTPS).
- Runtime settings: `/etc/caagency-website/app.env`, root:caagency-web 0640.
- Database: PostgreSQL `caagency_website` (role `caagency_website`) in the
  `caagency-postgres` container on 127.0.0.1:5432, next to the finance database.
- Local media: `/var/lib/caagency-website/media` (`MEDIA_DIRECTORY`).
- Private preview form captures: `/var/lib/caagency-website/contact-captures`
  (`CONTACT_CAPTURE_DIRECTORY`).
- Runtime account: `caagency-web`, no interactive login.
- For local development, `.env.local` (ignored, mode 600) points `MEDIA_DIRECTORY`
  and `CONTACT_CAPTURE_DIRECTORY` at the git-ignored `.data/` directory.

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
fields (jsonb) keep the original application data shape.
Builds prerender the current database, so make sure it is reachable and current
before a release.

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

## Backups and data authority

The server's PostgreSQL database `caagency_website` is authoritative for website
writes; the finance database is independently authoritative.

`deploy/backup-website.sh` (installed as `/usr/local/sbin/caagency-website-backup`)
creates a private `pg_dump` of `caagency_website` with matching environment and
media under `/var/backups/caagency-website`. The nightly
`caagency-offsite-backup.timer` runs it and uploads the encrypted archive to R2.
