# Redesign preview (redesign.caagency.com)

Fixed demo URL for the `website-redesign` branch. It runs next to production
on caagency-server and is fully separate from it:

| | Production | Redesign preview |
|---|---|---|
| Service | `caagency-website.service` | `caagency-website-redesign.service` |
| Port | 127.0.0.1:3001 | 127.0.0.1:3002 |
| User | `caagency-web` | `caagency-redesign` |
| App | `/srv/caagency-website` | `/srv/caagency-website-redesign` |
| Env | `/etc/caagency-website/app.env` | `/etc/caagency-website-redesign/app.env` |
| Database | `caagency_website` | `caagency_website_redesign` (copy) |
| Media | `/var/lib/caagency-website/media` | `/var/lib/caagency-website-redesign/media` (copy) |
| Updates | manual release from `master` | timer, every 2 minutes, from `website-redesign` |

The preview runs with `PREVIEW_MODE=true`: noindex, no analytics, contact
form submissions are stored locally and never emailed. The updater refuses to
run if the env file points at the production database or enables mail or
cache purging, and the preview service cannot see production paths.

## One-time install (as root on caagency-server)

1. Give `caagency-redesign` read access to GitHub: a read-only deploy key in
   `/var/lib/caagency-website-redesign/.ssh/` (or set `REPO_URL`).
2. Copy this folder to the server and run `./setup-preview.sh`. It creates the
   user, the database copy, the media copy and the env file, builds the
   branch and starts the preview and its update timer.
3. Add `Caddyfile.redesign.snippet` to the active Caddyfile (set a password
   hash with `caddy hash-password`) and reload Caddy.
4. In the Cloudflare Tunnel, add public hostname `redesign.caagency.com`
   pointing to the same Caddy origin as caagency.com.

## Operation

- Logs: `journalctl -u caagency-website-redesign-update -u caagency-website-redesign`
- Commit currently shown: `cat /srv/caagency-website-redesign/.preview-commit`
- Refresh the data copy: drop `caagency_website_redesign` and run
  `setup-preview.sh` again.
- Remove after release: disable both units and the timer, drop the database,
  delete the preview paths, and remove the Caddy and tunnel entries.
