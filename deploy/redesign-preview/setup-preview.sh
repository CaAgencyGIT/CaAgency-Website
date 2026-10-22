#!/usr/bin/env bash
# One-time setup of the redesign preview on caagency-server. Run as root.
# Creates its own user, directories, database copy and media copy; nothing
# here modifies the production service, files or database.
set -euo pipefail
umask 027

RUN_USER=caagency-redesign
STATE=/var/lib/caagency-website-redesign
APP=/srv/caagency-website-redesign
ETC=/etc/caagency-website-redesign
DB=caagency_website_redesign
HERE=$(cd "$(dirname "$0")" && pwd)

id "$RUN_USER" >/dev/null 2>&1 || useradd --system --home-dir "$STATE" --shell /usr/sbin/nologin "$RUN_USER"
install -d -o "$RUN_USER" -g "$RUN_USER" -m 0750 "$STATE" "$STATE/media" "$STATE/contact-captures" "$APP"
install -d -o root -g "$RUN_USER" -m 0750 "$ETC"

# Separate role and database, seeded from a snapshot of production.
pg() { docker exec -i caagency-postgres sh -c 'psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d postgres -tA'; }
if [ -z "$(echo "SELECT 1 FROM pg_database WHERE datname = '$DB';" | pg)" ]; then
  DB_PASSWORD=$(openssl rand -hex 24)
  pg <<SQL
CREATE ROLE $DB LOGIN PASSWORD '$DB_PASSWORD';
CREATE DATABASE $DB OWNER $DB;
REVOKE CONNECT ON DATABASE $DB FROM PUBLIC;
SQL
  docker exec caagency-postgres sh -c 'pg_dump -U "$POSTGRES_USER" -d caagency_website -Fc --no-owner --no-acl' \
    | docker exec -i caagency-postgres sh -c "pg_restore -U \"\$POSTGRES_USER\" -d $DB --no-owner --no-acl --role=$DB"
  if [ ! -f "$ETC/app.env" ]; then
    sed -e "s|CHANGE_ME@|$DB_PASSWORD@|" -e "s|AUTH_SECRET=CHANGE_ME_RANDOM|AUTH_SECRET=$(openssl rand -base64 32)|" \
      "$HERE/app.env.example" > "$ETC/app.env"
    chown root:"$RUN_USER" "$ETC/app.env"; chmod 0640 "$ETC/app.env"
  fi
fi

rsync -a --delete /var/lib/caagency-website/media/ "$STATE/media/"
chown -R "$RUN_USER:$RUN_USER" "$STATE/media"

if [ ! -d "$STATE/src/.git" ]; then
  runuser -u "$RUN_USER" -- env HOME="$STATE" git clone --branch website-redesign --single-branch \
    "${REPO_URL:-git@github.com:CaAgencyGIT/CaAgency-Website.git}" "$STATE/src"
fi

install -m 0750 "$HERE/update-preview.sh" /usr/local/sbin/caagency-redesign-update
install -m 0644 "$HERE"/caagency-website-redesign*.service "$HERE"/caagency-website-redesign-update.timer /etc/systemd/system/
systemctl daemon-reload
systemctl enable caagency-website-redesign.service
/usr/local/sbin/caagency-redesign-update
systemctl enable --now caagency-website-redesign-update.timer
echo "Preview running on 127.0.0.1:3002. Add the Caddy snippet and the tunnel hostname next."
