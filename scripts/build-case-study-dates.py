"""Write lib/data/case-study-dates.json: the day each case study last changed.

The sitemap uses these as <lastmod>. A study's date is the newest commit that
touched any line of its entry in the case-study data files, read from git
blame, so it needs a full (not shallow) checkout. Run from apps/website after
adding or editing case studies:

    python3 scripts/build-case-study-dates.py

Studies missing from the file simply get no <lastmod>.
"""

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = ['lib/data/case-studies.ts', 'lib/data/creator-cases.ts', 'lib/data/profile-cases.ts']
OUT = ROOT / 'lib/data/case-study-dates.json'
SLUG = re.compile(r"^\s*slug: '([^']+)'")


def line_dates(path):
    """Commit date (YYYY-MM-DD) and text for every line of a file."""
    blame = subprocess.run(
        ['git', 'blame', '--line-porcelain', '--', path],
        cwd=ROOT, check=True, capture_output=True, text=True,
    ).stdout
    rows, stamp = [], 0
    for line in blame.splitlines():
        if line.startswith('committer-time '):
            stamp = int(line.split()[1])
        elif line.startswith('\t'):
            rows.append((stamp, line[1:]))
    return rows


def main():
    dates = {}
    for path in FILES:
        slug = None
        for stamp, text in line_dates(path):
            match = SLUG.match(text)
            if match:
                slug = match.group(1)
            # A line that closes the array or starts a new top-level statement ends the last entry.
            elif slug and re.match(r'^(\]|export |const |function |/\*\*)', text):
                slug = None
            if slug:
                dates[slug] = max(dates.get(slug, 0), stamp)
    day = lambda stamp: subprocess.run(
        ['date', '-u', '-d', f'@{stamp}', '+%Y-%m-%d'], check=True, capture_output=True, text=True
    ).stdout.strip()
    OUT.write_text(json.dumps({slug: day(stamp) for slug, stamp in sorted(dates.items())}, indent=2) + '\n')
    print(f'{len(dates)} case studies -> {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
