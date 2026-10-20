#!/usr/bin/env bash
# Private website backup: PostgreSQL dump of caagency_website, runtime env and media.
# Installed as /usr/local/sbin/caagency-website-backup; caagency-offsite-backup uploads the newest archive.
set -euo pipefail
umask 077
WEBSITE_STATE=/var/lib/caagency-website
WEBSITE_BACKUPS=/var/backups/caagency-website
install -d -o root -g root -m 0700 "$WEBSITE_BACKUPS"
WEBSITE_STAMP=$(date -u +%Y%m%dT%H%M%SZ)
WEBSITE_TEMP=$(mktemp -d "$WEBSITE_BACKUPS/.snapshot-XXXXXX")
trap 'rm -rf -- "$WEBSITE_TEMP"' EXIT
docker exec caagency-postgres sh -c 'pg_dump -U "$POSTGRES_USER" -d caagency_website -Fc' > "$WEBSITE_TEMP/website.dump"
docker exec -i caagency-postgres pg_restore --list < "$WEBSITE_TEMP/website.dump" > /dev/null
cp /etc/caagency-website/app.env "$WEBSITE_TEMP/app.env"
tar -czf "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz" -C "$WEBSITE_TEMP" website.dump app.env -C "$WEBSITE_STATE" media
sha256sum "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz" > "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.sha256"
printf 'Created private website backup: %s\n' "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz"
