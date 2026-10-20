#!/usr/bin/env python3
"""Observe the approved handover without running application jobs or timers."""
import argparse
import datetime as dt
import json
from pathlib import Path
import subprocess
import time
import urllib.request

TIMERS = [
    "caagency-backup.timer", "caagency-sync.timer", "caagency-bank.timer",
    "caagency-invoice-mailbox.timer", "caagency-finance-monitor.timer",
]
SERVICES = ["caagency-website.service", "caagency-finance.service", "caddy.service",
            "cloudflared-caagency-finance.service"]


def command(*args):
    return subprocess.run(args, capture_output=True, text=True, timeout=10).stdout.strip()


def sample():
    result = {"at": dt.datetime.now(dt.timezone.utc).isoformat(), "http": {},
              "services": {}, "timers": {}, "ok": True}
    for label, url in [("website", "https://caagency.com/"),
                       ("finance", "https://finance.caagency.com/signin")]:
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "CAAgency-Cutover-Observation/1"})
            with urllib.request.urlopen(request, timeout=15) as response:
                ok = response.status == 200
                if label == "website":
                    ok = ok and response.headers.get("X-CA-Origin") == "caagency-server"
                result["http"][label] = {"status": response.status, "ok": ok}
        except Exception as error:
            result["http"][label] = {"ok": False, "error": type(error).__name__}
    for name in SERVICES:
        result["services"][name] = command("systemctl", "is-active", name)
    for name in TIMERS:
        result["timers"][name] = {
            "active": command("systemctl", "is-active", name),
            "enabled": command("systemctl", "is-enabled", name),
        }
    try:
        with urllib.request.urlopen("http://127.0.0.1:20241/metrics", timeout=5) as response:
            metrics = response.read(1_000_000).decode()
        result["tunnel_connections"] = sum(float(line.rsplit(" ", 1)[1]) for line in metrics.splitlines()
                                            if line.startswith("cloudflared_tunnel_ha_connections "))
    except Exception as error:
        result["tunnel_error"] = type(error).__name__
        result["tunnel_connections"] = 0
    result["ok"] = (all(item["ok"] for item in result["http"].values())
                    and all(state == "active" for state in result["services"].values())
                    and all(item == {"active": "inactive", "enabled": "disabled"}
                            for item in result["timers"].values())
                    and result["tunnel_connections"] > 0)
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--started-at", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--once", action="store_true")
    args = parser.parse_args()
    started = dt.datetime.fromisoformat(args.started_at.replace("Z", "+00:00"))
    deadline = started + dt.timedelta(hours=24)
    output = Path(args.output)
    samples = failures = 0
    while True:
        entry = sample()
        samples += 1
        failures += not entry["ok"]
        with output.open("a") as stream:
            stream.write(json.dumps(entry) + "\n")
        if not entry["ok"] or samples == 1 or samples % 60 == 0:
            print(json.dumps({"at": entry["at"], "ok": entry["ok"],
                              "samples": samples, "failed_samples": failures}), flush=True)
        if args.once:
            return
        if dt.datetime.now(dt.timezone.utc) >= deadline:
            with output.open("a") as stream:
                stream.write(json.dumps({"completed": True, "at": entry["at"],
                                         "samples": samples, "failed_samples": failures}) + "\n")
            return
        time.sleep(min(60, max(0, (deadline - dt.datetime.now(dt.timezone.utc)).total_seconds())))


if __name__ == "__main__":
    main()
