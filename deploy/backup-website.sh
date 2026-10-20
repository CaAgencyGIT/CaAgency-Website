#!/usr/bin/env bash
set -euo pipefail
umask 077
WEBSITE_STATE=/var/lib/caagency-website
WEBSITE_BACKUPS=/var/backups/caagency-website
install -d -o root -g root -m 0700 "$WEBSITE_BACKUPS"
WEBSITE_STAMP=$(date -u +%Y%m%dT%H%M%SZ)
WEBSITE_TEMP=$(mktemp -d "$WEBSITE_BACKUPS/.snapshot-XXXXXX")
trap 'rm -rf -- "$WEBSITE_TEMP"' EXIT
python3 - "$WEBSITE_STATE/website.sqlite" "$WEBSITE_TEMP/website.sqlite" <<'PY'
import sqlite3,sys
source=sqlite3.connect('file:'+sys.argv[1]+'?mode=ro',uri=True)
dest=sqlite3.connect(sys.argv[2]);source.backup(dest);dest.close();source.close()
PY
cp /etc/caagency-website/app.env "$WEBSITE_TEMP/app.env"
tar -czf "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz" -C "$WEBSITE_TEMP" website.sqlite app.env -C "$WEBSITE_STATE" media
sha256sum "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz" > "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.sha256"
printf 'Created private website backup: %s\n' "$WEBSITE_BACKUPS/website-$WEBSITE_STAMP.tar.gz"
