"""Build every talent cover with one shared header (Nov 2026).

Each cover = the talent's portrait artwork + the same header: CA agency logo,
slim divider and the full name on one line, in one font, one size and one
position. All header geometry lives in header.json as fractions of the image
width, so it is identical on every cover and scales the same on every screen.

Sources (assets/talent-covers/source/<slug>.webp) are the approved artwork as
supplied. Some have an old header baked in ("MEET" + first name, or a full
header); the boxes listed under "erase" in covers.json are cleared first by
inpainting from the surrounding ivory, then the shared header is drawn once.
The portrait itself is never moved, scaled or retouched.

The name size is fitted once to the longest name in covers.json, so no name
wraps or gets shrunk on its own. To add a talent: drop the portrait artwork in
the source folder, add a covers.json entry, bump VERSION and run

    <python with pillow, numpy, opencv-python-headless> scripts/talent-covers/build_covers.py

then point lib/data/talent-cards.ts at the new files and run
node scripts/build-image-blur.mjs.
"""

import json
import subprocess
import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = ROOT / 'public/images/talents/cards'
VERSION = 'v7'
SS = 4  # supersampling for the header

TOK = json.loads((HERE / 'header.json').read_text())
COVERS = json.loads((HERE / 'covers.json').read_text())
INK = tuple(int(TOK['ink'][i:i + 2], 16) for i in (1, 3, 5))
FONT_PATH = str(ROOT / TOK['name']['font'])
HS = TOK['name']['horizontalScale']


def svg_mask(svg: str, width_px: int) -> Image.Image:
    """Rasterise an SVG (dark on transparent) to an alpha mask."""
    js = (
        "const sharp=require('sharp');"
        f"sharp(process.argv[1],{{density:1200}}).resize({width_px}).ensureAlpha()"
        ".extractChannel('alpha').png().toBuffer().then(b=>process.stdout.write(b))"
    )
    png = subprocess.run(['node', '-e', js, str(ROOT / svg)], cwd=ROOT,
                         check=True, capture_output=True).stdout
    from io import BytesIO
    return Image.open(BytesIO(png)).convert('L')


def name_metrics():
    """Cap height (fraction of width) that fits the longest name."""
    f = ImageFont.truetype(FONT_PATH, 1000)
    cap = f.getbbox('H')[3] - f.getbbox('H')[1]
    widest = max((f.getbbox(c['name'])[2] - f.getbbox(c['name'])[0]) * HS for c in COVERS.values())
    avail = TOK['name']['right'] - TOK['name']['left']
    return avail * cap / widest, cap / 1000  # cap height (of W), cap per font unit


def clear_old_header(img: np.ndarray, boxes) -> np.ndarray:
    if not boxes:
        return img
    mask = np.zeros(img.shape[:2], np.uint8)
    for x0, y0, x1, y1 in boxes:
        mask[max(0, y0 - 6):y1 + 7, max(0, x0 - 6):x1 + 7] = 255
    return cv2.inpaint(img, mask, 7, cv2.INPAINT_TELEA)


def draw_header(base: Image.Image, name: str, cap_w: float, cap_per_unit: float) -> Image.Image:
    W, H = base.size
    w4 = W * SS
    blk = TOK['block']
    top, bottom = blk['top'] * w4, blk['bottom'] * w4
    band_h = round(bottom + 0.03 * w4)
    m = Image.new('L', (w4, band_h), 0)
    # CA mark (vector) and the "agency" wordmark from the approved covers
    mk = TOK['mark']
    mark = svg_mask(mk['svg'], round(mk['width'] * w4))
    m.paste(mark, (round(mk['left'] * w4), round(top)), mark)
    wm = TOK['wordmark']
    word = Image.open(ROOT / wm['png']).convert('L')
    ww = round(wm['width'] * w4)
    word = word.resize((ww, round(word.height * ww / word.width)), Image.LANCZOS)
    m.paste(word, (round(wm['left'] * w4), round(wm['top'] * w4)), word)
    # divider: the full height of the logo block
    dx = round(TOK['divider']['x'] * w4)
    t = max(SS, round(TOK['divider']['thickness'] * w4))
    ImageDraw.Draw(m).rectangle([dx - t // 2, round(top), dx - t // 2 + t - 1, round(bottom) - 1], fill=255)
    # name: one line, left-anchored, cap height centred on the logo block
    font = ImageFont.truetype(FONT_PATH, round(cap_w * w4 / cap_per_unit))
    hb = font.getbbox('H')
    cap_px = hb[3] - hb[1]
    baseline = (top + bottom) / 2 + cap_px / 2
    asc = font.getmetrics()[0]
    tb = font.getbbox(name)
    pad = 4 * SS
    txt = Image.new('L', (tb[2] - tb[0] + 2 * pad, band_h), 0)
    ImageDraw.Draw(txt).text((pad - tb[0], round(baseline - asc)), name, font=font, fill=255)
    txt = txt.resize((round(txt.width * HS), band_h), Image.LANCZOS)
    m.paste(txt, (round(TOK['name']['left'] * w4) - round(pad * HS), 0), txt)
    m = m.resize((W, round(band_h / SS)), Image.LANCZOS)
    out = base.copy()
    out.paste(Image.new('RGB', m.size, INK), (0, 0), m)
    return out


def main(only=None):
    cap_w, cap_per_unit = name_metrics()
    print(f'common cap height = {cap_w:.4f} x width')
    for slug, c in COVERS.items():
        if only and slug not in only:
            continue
        src = np.asarray(Image.open(ROOT / c['source']).convert('RGB'))
        clean = clear_old_header(src[:, :, ::-1].copy(), c.get('erase', []))[:, :, ::-1]
        img = draw_header(Image.fromarray(np.ascontiguousarray(clean)), c['name'], cap_w, cap_per_unit)
        dst = OUT / f'{slug}-{VERSION}.webp'
        img.save(dst, 'WEBP', quality=92, method=6)
        print(dst.relative_to(ROOT), img.size)


if __name__ == '__main__':
    main(set(sys.argv[1:]) or None)
