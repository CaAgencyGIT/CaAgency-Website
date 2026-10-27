"""Generate 1200x630 link-preview (Open Graph) images in the site's black style.

Photo on the left, CA Agency mark plus a title and a spaced label on the right,
matching public/images/site/og-cover-v2.jpg. Run from apps/website:

    python3 scripts/generate-og-images.py

Outputs land in public/images/site/og/. Bump the version suffix when an image
changes, so social networks that cache previews by URL pick up the new one.
"""

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
OUT = PUBLIC / 'images/site/og'
W, H = 1200, 630
BG = (14, 14, 14)
PHOTO_W, PHOTO_H, PAD = 420, 586, 22

# The CA agency mark, cut from the main cover so the logo matches exactly.
LOGO = Image.open(PUBLIC / 'images/site/og-cover-v2.jpg').convert('RGB').crop((800, 130, 1040, 305))
SERIF = ImageFont.truetype(str(PUBLIC / 'fonts/Anegra.woff2'), 48)
LABEL = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 15)

LOCATION_LABEL = 'INFLUENCER MARKETING'

# (output path relative to OUT, photo, title, label)
PAGES = [
    ('influencer-marketing-dubai-v2.jpg', 'images/hero/albina-medicube.webp', 'Dubai', LOCATION_LABEL),
    ('influencer-marketing-uae-v2.jpg', 'images/hero/melly-huda-beauty-916.webp', 'United Arab Emirates', LOCATION_LABEL),
    ('influencer-marketing-saudi-arabia-v2.jpg', 'images/hero/dariia-ysl.webp', 'Saudi Arabia', LOCATION_LABEL),
    ('influencer-marketing-gcc-v2.jpg', 'images/hero/khutjo-medicube.webp', 'The GCC', LOCATION_LABEL),
    ('influencer-marketing-asia-v2.jpg', 'images/hero/collage-v2/albina-medicube-poster-v1.webp', 'Asia', LOCATION_LABEL),
    ('influencer-marketing-korea-v2.jpg', 'images/hero/collage-v2/khutjo-welcome-korea-v1.webp', 'Korea', LOCATION_LABEL),
    ('korean-skincare-influencer-marketing-v2.jpg', 'images/hero/melani-skin1004.webp', 'Korean Skincare', 'K-BEAUTY INFLUENCER MARKETING'),
    ('influencer-marketing-usa-v2.jpg', 'images/hero/collage-v2/rebecca-ellis-brooklyn-v1.webp', 'United States', LOCATION_LABEL),
    ('influencer-marketing-uk-v2.jpg', 'images/hero/collage-v2/rebecca-lolavie-v1.webp', 'United Kingdom', LOCATION_LABEL),
    ('influencer-marketing-canada-v2.jpg', 'images/hero/collage-v2/yasaman-prada-beauty-v1.webp', 'Canada', LOCATION_LABEL),
    ('influencer-marketing-australia-v2.jpg', 'images/hero/collage-v2/melly-brush-v1.webp', 'Australia', LOCATION_LABEL),
    ('about-v1.jpg', 'images/site/ca-office-v1.webp', 'About CA Agency', 'GLOBAL BEAUTY INFLUENCER MARKETING'),
    ('contact-v1.jpg', 'images/site/ca-office-v1.webp', 'Get in touch', 'BRANDS · CREATORS · PARTNERSHIPS'),
    ('work-v1.jpg', 'images/video-thumbs/rd-showreel-1-v9.jpg', 'Our Work', 'CAMPAIGNS · CREATOR CONTENT'),
]


def services():
    """The five service pages, read from lib/data/services.ts."""
    src = (ROOT / 'lib/data/services.ts').read_text()
    slugs = re.findall(r"^\s{4}slug: '([^']+)'", src, re.M)
    titles = re.findall(r"^\s{4}title: '([^']+)'", src, re.M)
    images = re.findall(r"^\s{4}image: '/([^']+)'", src, re.M)
    return [(f'services/{s}.jpg', i, t, 'INFLUENCER MARKETING SERVICES') for s, t, i in zip(slugs, titles, images)]


def render(out, photo, title, label):
    im = Image.new('RGB', (W, H), BG)
    ph = Image.open(PUBLIC / photo).convert('RGB')
    scale = max(PHOTO_W / ph.width, PHOTO_H / ph.height)
    ph = ph.resize((round(ph.width * scale), round(ph.height * scale)), Image.LANCZOS)
    x0 = (ph.width - PHOTO_W) // 2
    ph = ph.crop((x0, 0, x0 + PHOTO_W, PHOTO_H))  # keep the top: faces
    mask = Image.new('L', (PHOTO_W, PHOTO_H), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, PHOTO_W - 1, PHOTO_H - 1), 18, fill=255)
    im.paste(ph, (PAD, PAD), mask)

    cx = PAD + PHOTO_W + (W - PAD - PHOTO_W) // 2
    im.paste(LOGO, (cx - LOGO.width // 2, 110))
    d = ImageDraw.Draw(im)
    lines, cur = [], ''
    for word in title.split():
        trial = f'{cur} {word}'.strip()
        if cur and d.textlength(trial, font=SERIF) > 600:
            lines.append(cur)
            cur = word
        else:
            cur = trial
    lines.append(cur)
    y = 340
    for line in lines:
        d.text((cx, y), line, font=SERIF, fill=(245, 245, 245), anchor='mt')
        y += 60
    d.text((cx, y + 24), '   '.join(' '.join(w) for w in label.split(' ')), font=LABEL, fill=(170, 170, 170), anchor='mt')

    path = OUT / out
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, quality=86, optimize=True, progressive=True)
    print(path.relative_to(ROOT))


if __name__ == '__main__':
    for page in PAGES + services():
        render(*page)
