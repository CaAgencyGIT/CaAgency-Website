#!/usr/bin/env bash
# Redesign preview updater: builds the latest website-redesign commit and
# restarts the preview on 127.0.0.1:3002. Installed as
# /usr/local/sbin/caagency-redesign-update and run by
# caagency-website-redesign-update.timer. It only ever reads the
# website-redesign branch and only writes the preview's own paths and database.
set -euo pipefail
umask 027

BRANCH=website-redesign
RUN_USER=caagency-redesign
STATE=/var/lib/caagency-website-redesign
SRC=$STATE/src
APP=/srv/caagency-website-redesign
ENV_FILE=/etc/caagency-website-redesign/app.env
SERVICE=caagency-website-redesign.service

exec 9>"$STATE/.update.lock"
flock -n 9 || exit 0

# Refuse to run against anything that looks like production.
refuse() { echo "Refusing to update the preview: $1" >&2; exit 1; }
grep -qx 'PREVIEW_MODE=true' "$ENV_FILE" || refuse 'PREVIEW_MODE is not true'
grep -qx 'NEXT_PUBLIC_PREVIEW_MODE=true' "$ENV_FILE" || refuse 'NEXT_PUBLIC_PREVIEW_MODE is not true'
grep -Eq '^DATABASE_URL=postgresql://[^/]+/caagency_website_redesign([?].*)?$' "$ENV_FILE" || refuse 'DATABASE_URL is not the preview database'
if grep -Eq '^(EMAIL_DELIVERY_ENABLED=true|CLOUDFLARE_PURGE_TOKEN=.)' "$ENV_FILE"; then refuse 'mail delivery or cache purge is enabled'; fi

# HOME points at the preview state dir so npm and git never touch /root.
as_user() { runuser -u "$RUN_USER" -- env HOME="$STATE" "$@"; }

as_user git -C "$SRC" fetch --quiet origin "+refs/heads/$BRANCH:refs/remotes/origin/$BRANCH"
TARGET=$(as_user git -C "$SRC" rev-parse "origin/$BRANCH")
if [ -f "$APP/.preview-commit" ] && [ "$(cat "$APP/.preview-commit")" = "$TARGET" ]; then
  exit 0
fi

echo "Building redesign preview $TARGET"
as_user git -C "$SRC" checkout --quiet --force --detach "$TARGET"
as_user git -C "$SRC" clean -fdxq -e node_modules
as_user bash -c "set -euo pipefail; set -a; . '$ENV_FILE'; set +a
  cd '$SRC'
  npm ci --no-audit --no-fund
  npm run db:migrate:deploy
  npm run build:server"

BUILD=$(mktemp -d "$STATE/.release-XXXXXX")
cp -a "$SRC/.next/standalone/." "$BUILD/"
cp -a "$SRC/.next/static" "$BUILD/.next/static"
cp -a "$SRC/public" "$BUILD/public"
find "$BUILD" -maxdepth 1 -name '.env*' -delete
echo "$TARGET" > "$BUILD/.preview-commit"
# The service's systemd sandbox only bind-mounts these as writable if they
# already exist (ReadWritePaths entries are prefixed with "-"), so an image
# request or ISR write fails with ENOENT on a release that never had them.
install -d -m 0770 -- "$BUILD/.next/cache" "$BUILD/.next/server/app" "$BUILD/.next/server/route-cache"
chown -R "$RUN_USER:$RUN_USER" "$BUILD"

systemctl stop "$SERVICE"
rsync -a --delete "$BUILD/" "$APP/"
rm -rf -- "$BUILD"
systemctl start "$SERVICE"
echo "Redesign preview now serves $TARGET"
