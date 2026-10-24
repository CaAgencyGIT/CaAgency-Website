# Dev stage (dev.caagency.com)

Dev stage: a fixed URL that always shows the `website-redesign` branch. It runs next to production
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

## One-time install (on caagency-server)

1. Create the preview user and a read-only GitHub key for it:

   ```bash
   sudo useradd --system --create-home --home-dir /var/lib/caagency-website-redesign --shell /usr/sbin/nologin caagency-redesign
   sudo -u caagency-redesign mkdir -p -m 700 /var/lib/caagency-website-redesign/.ssh
   sudo -u caagency-redesign ssh-keygen -t ed25519 -N "" -C caagency-redesign-preview -f /var/lib/caagency-website-redesign/.ssh/id_ed25519
   sudo -u caagency-redesign sh -c 'ssh-keyscan github.com >> /var/lib/caagency-website-redesign/.ssh/known_hosts'
   sudo cat /var/lib/caagency-website-redesign/.ssh/id_ed25519.pub
   ```

   Add the printed key on GitHub: repository Settings > Deploy keys > Add
   deploy key, leave "Allow write access" off.
2. Clone the branch and run the setup (creates the database copy, media
   copy and env file, builds the branch, starts the preview and its timer):

   ```bash
   sudo -u caagency-redesign env HOME=/var/lib/caagency-website-redesign git clone --branch website-redesign --single-branch git@github.com:CaAgencyGIT/CaAgency-Website.git /var/lib/caagency-website-redesign/src
   sudo /var/lib/caagency-website-redesign/src/deploy/redesign-preview/setup-preview.sh
   curl -I http://127.0.0.1:3002/
   ```
3. Add `Caddyfile.redesign.snippet` to the active Caddyfile, with a password
   hash from `caddy hash-password`, then `sudo systemctl reload caddy`
   (Caddy older than 2.8 spells the directive `basicauth`).
4. In the Cloudflare Tunnel, add public hostname `dev.caagency.com`
   pointing to the same Caddy origin as caagency.com.

## Operation

- Logs: `journalctl -u caagency-website-redesign-update -u caagency-website-redesign`
- Commit currently shown: `cat /srv/caagency-website-redesign/.preview-commit`
- Refresh the data copy: drop `caagency_website_redesign` and run
  `setup-preview.sh` again.
- Remove after release: disable both units and the timer, drop the database,
  delete the preview paths, and remove the Caddy and tunnel entries.
