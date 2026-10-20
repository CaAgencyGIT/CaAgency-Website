# Deploying the talent photo fix to caagency-server

**What this ships:** a two-line fix in `app/api/talents/route.ts` (commit `88a19e5`).
`GET /api/talents` was not returning each talent's `id` and `order`, so saving a
talent in the admin panel sent `PATCH /api/talents/undefined` and failed with
"Talent not found". There are no database migrations.

The steps come from `README.md` and `deploy/` on the `migration/website-postgres`
branch. The README says what to install but not the exact copy commands, so step 5
is inferred: check it against how the last release was installed.

## 1. Get the code

- Merge PR #84 (`migration/website-postgres`) into `master`. The fix is already
  merged into that branch.
- In the server's source checkout, run `git pull`. Use the same checkout the previous
  release was built from. It must contain commit `88a19e5`.

## 2. Back up first

```bash
sudo /usr/local/sbin/caagency-website-backup
```

This runs `pg_dump` of `caagency_website` plus the env file and media into
`/var/backups/caagency-website`.

## 3. Build

```bash
npm ci
npm run db:generate
npm run build:server
```

- `.env.local` must hold a `postgresql://` `DATABASE_URL`.
- The build prerenders from the live database, so Postgres must be up.
- Optionally run `npx tsc --noEmit && npm run lint && npm test` first.

## 4. Keep a rollback copy

```bash
sudo cp -a /srv/caagency-website /srv/caagency-website-before-talentfix-20261020
```

## 5. Install the new release (inferred, verify)

- Copy the standalone output (`.next/standalone/`) into `/srv/caagency-website`.
- Also copy `public/` and `.next/static/` into it.
- Delete any `.env*` files that got copied in. The service reads
  `/etc/caagency-website/app.env` instead.
- Keep the `caagency-web` ownership on the app directory and write access on
  `.next/cache`.
- Do not touch `/var/lib/caagency-website/media`. It is independent of releases.

## 6. Restart and check

```bash
sudo systemctl restart caagency-website
sudo systemctl status caagency-website
journalctl -u caagency-website -n 50
curl -s http://127.0.0.1:3001/api/talents | head -c 400
```

Each talent in the `curl` output should now have `id` and `order` fields.

## 7. Test in the admin panel

Open `https://www.caagency.com/admin`, edit a talent's photo and click Save.
It should save with no "Talent not found" error.

## Rollback

```bash
sudo systemctl stop caagency-website
# restore /srv/caagency-website from the -before-talentfix copy
sudo systemctl start caagency-website
```

The database is not touched, so nothing needs restoring there.

Do not enable the finance timers, and do not restore any SQLite or D1 data.
