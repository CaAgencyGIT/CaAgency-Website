# Website redesign demo

Working agreement for the redesign branch. It stays open as a draft PR
against `master` until the redesign is explicitly approved for release.

## Scope

- Pages kept: Home, About, Talents, Work, Services, Blog, Contact.
- All current copy and button labels stay exactly as they are (including the
  `messages/` translations and database-backed content).
- Only design, layout, media and content placement change.

## How production is released today

- Production branch: `master`.
- GitHub Actions: `.github/workflows/ci.yml` runs lint, type check, unit tests
  and a build on pushes to `master` and on pull requests into `master`. It
  never deploys.
- Production runs on caagency-server as systemd `caagency-website.service`
  (`/srv/caagency-website`, 127.0.0.1:3001) behind Caddy and the Cloudflare
  Tunnel. A release is a manual build on the server (`npm ci`,
  `npm run db:migrate:deploy`, `npm run build:server`), installing the
  standalone output into `/srv/caagency-website` and restarting the service.
- Vercel is retired for this project (`vercel.json` and the Vercel workflows
  were removed in October 2026).

Pushes to the redesign branch therefore only trigger the pull request CI
checks; nothing in this repository can update production from that branch.

## Demo URL

https://redesign.caagency.com always shows the latest commit on
`website-redesign`. It is a separate preview service on caagency-server with
its own database and media copy; see `deploy/redesign-preview/README.md`.

## Release (only after explicit approval)

1. Tag the current production commit, e.g. `prod-before-redesign`, and keep a
   copy of `/srv/caagency-website` plus a backup from `deploy/backup-website.sh`.
2. Merge the approved PR into `master`.
3. Release `master` on the server with the usual build and restart.

Rollback: check out the tag (or restore the saved `/srv/caagency-website`
copy) and restart `caagency-website.service`.
