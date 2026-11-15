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

    <python with pillow, numpy, opencv-python-headless, rembg[cpu]> scripts/talent-covers/build_covers.py

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

sys.path.insert(0, str(Path(__file__).resolve().parent))
from neutralize import neutralize  # noqa: E402  backdrop -> #F4F4F2, person untouched

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = ROOT / 'public/images/talents/cards'
VERSION = 'v9'
SS = 4  # supersampling for the header

TOK = json.loads((HERE / 'header.json').read_text())
COVERS = json.loads((HERE / 'covers.json').read_text())
def _rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


INK = _rgb(TOK['ink'])
DIVIDER = _rgb(TOK['divider']['color'])
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
    avail = TOK['name']['fitWidth']
    return avail * cap / widest, cap / 1000  # cap height (of W), cap per font unit


def clear_old_header(img: np.ndarray, boxes, seed: int) -> np.ndarray:
    """Replace each old-ink box with the background around it.

    A smooth (quadratic) colour surface is fitted to a ring of background
    15-45 px outside the box, skipping anything that is not background (ink,
    hair, compression halos), so the fill matches the true ivory and not the
    light halos lossy compression leaves next to dark letters. Fine grain with
    the ring's own strength is added back, and the edge is feathered.
    """
    out = img.astype(np.float32)
    H, W = img.shape[:2]
    rng = np.random.default_rng(seed)
    for x0, y0, x1, y1 in boxes:
        bx0, by0, bx1, by1 = max(0, x0 - 8), max(0, y0 - 8), min(W, x1 + 9), min(H, y1 + 9)
        rx0, ry0, rx1, ry1 = max(0, bx0 - 45), max(0, by0 - 45), min(W, bx1 + 45), min(H, by1 + 45)
        yy, xx = np.mgrid[ry0:ry1, rx0:rx1]
        inner = (xx >= bx0 - 15) & (xx < bx1 + 15) & (yy >= by0 - 15) & (yy < by1 + 15)
        patch = out[ry0:ry1, rx0:rx1]
        ring = ~inner
        med = np.median(patch[ring], axis=0)
        ok = ring & (np.abs(patch - med).max(axis=2) < 6)
        X = np.stack([np.ones_like(xx), xx / W, yy / H, (xx / W) ** 2, (yy / H) ** 2, xx * yy / (W * H)], -1).astype(np.float32)
        A = X[ok]
        fill = np.empty_like(patch)
        resid_sd = []
        for c in range(3):
            coef, *_ = np.linalg.lstsq(A, patch[..., c][ok], rcond=None)
            fill[..., c] = X @ coef
            resid_sd.append(float(np.std(patch[..., c][ok] - A @ coef)))
        sd = float(np.mean(resid_sd))
        grain = rng.normal(0, 1, patch.shape[:2]).astype(np.float32)
        grain = cv2.GaussianBlur(grain, (0, 0), 0.8)
        grain *= sd / max(1e-6, float(grain.std()))
        fill += grain[..., None]
        # feathered mask: 1 inside the box, fading to 0 over 6 px outside it
        m = np.zeros(patch.shape[:2], np.float32)
        m[(xx >= bx0) & (xx < bx1) & (yy >= by0) & (yy < by1)] = 1
        m = cv2.GaussianBlur(cv2.dilate(m, np.ones((7, 7), np.uint8)), (0, 0), 2.5)
        m = np.clip(m, 0, 1)[..., None]
        out[ry0:ry1, rx0:rx1] = patch * (1 - m) + fill * m
    return np.clip(out + 0.5, 0, 255).astype(np.uint8)


def draw_header(base: Image.Image, name: str, cap_w: float, cap_per_unit: float) -> Image.Image:
    W, H = base.size
    w4 = W * SS
    lg = TOK['logo']
    logo = svg_mask(lg['svg'], round(lg['width'] * w4))
    top = lg['top'] * w4
    bottom = top + logo.height
    band_h = round(bottom + 0.03 * w4)
    ink = Image.new('L', (w4, band_h), 0)
    div = Image.new('L', (w4, band_h), 0)
    # logo: the master export, unchanged shape and proportions
    ink.paste(logo, (round(lg['left'] * w4), round(top)), logo)
    # divider: light grey, the full height of the logo block
    dx = round(TOK['divider']['x'] * w4)
    t = max(SS, round(TOK['divider']['thickness'] * w4))
    ImageDraw.Draw(div).rectangle([dx - t // 2, round(top), dx - t // 2 + t - 1, round(bottom) - 1], fill=255)
    # name: one line, cap height centred on the logo block, ink centred
    # horizontally between the divider and the right edge of the card
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
    cols = np.nonzero(np.asarray(txt).max(axis=0) > 40)[0]
    txt = txt.crop((int(cols[0]), 0, int(cols[-1]) + 1, band_h))
    x0, x1 = TOK['name']['centerBetween']
    ink.paste(txt, (round((x0 + x1) / 2 * w4 - txt.width / 2), 0), txt)
    ink = ink.resize((W, round(band_h / SS)), Image.LANCZOS)
    div = div.resize((W, round(band_h / SS)), Image.LANCZOS)
    out = base.copy()
    out.paste(Image.new('RGB', div.size, DIVIDER), (0, 0), div)
    out.paste(Image.new('RGB', ink.size, INK), (0, 0), ink)
    return out


def main(only=None):
    cap_w, cap_per_unit = name_metrics()
    print(f'common cap height = {cap_w:.4f} x width')
    for slug, c in COVERS.items():
        if only and slug not in only:
            continue
        src = np.asarray(Image.open(ROOT / c['source']).convert('RGB'))
        clean = clear_old_header(src, c.get('erase', []), seed=sum(map(ord, slug)))
        clean = neutralize(clean, c.get('erase', []))
        img = draw_header(Image.fromarray(clean), c['name'], cap_w, cap_per_unit)
        dst = OUT / f'{slug}-{VERSION}.webp'
        img.save(dst, 'WEBP', quality=95, method=6)
        print(dst.relative_to(ROOT), img.size)


if __name__ == '__main__':
    main(set(sys.argv[1:]) or None)
