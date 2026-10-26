#!/usr/bin/env python3
"""One-off: color-grade and sharpen the homepage hero collage photos so they
read as one consistent, polished set instead of seven mismatched sources.

Pipeline per image: gray-world white-balance correction, mild per-channel
autocontrast, a shared warm editorial tint + saturation lift, then an unsharp
mask. Run once; output goes to public/images/hero/graded/.
"""
import os
from PIL import Image, ImageOps, ImageEnhance, ImageFilter, ImageStat

SRC_DIR = os.path.join(os.path.dirname(__file__), '..', 'public')
OUT_DIR = os.path.join(SRC_DIR, 'images', 'hero', 'graded')
os.makedirs(OUT_DIR, exist_ok=True)

IMAGES = [
    ('images/hero/albina-medicube.webp', 'albina-medicube.webp'),
    ('assets/rev-2026-07/hero-slide-1-916.jpg', 'hero-slide-1-916.webp'),
    ('images/hero/dariia-ysl.webp', 'dariia-ysl.webp'),
    ('images/hero/khutjo-medicube.webp', 'khutjo-medicube.webp'),
    ('images/hero/melly-huda-beauty-916.webp', 'melly-huda-beauty-916.webp'),
    ('assets/rev-2026-07/rhode-grid-vertical.jpg', 'rhode-grid-vertical.webp'),
    ('images/hero/melani-skin1004.webp', 'melani-skin1004.webp'),
]

def white_balance(im):
    stat = ImageStat.Stat(im)
    r, g, b = stat.mean
    gray = (r + g + b) / 3
    def scale(c, mean):
        factor = max(0.85, min(1.15, gray / mean)) if mean else 1.0
        return c.point(lambda x, f=factor: max(0, min(255, round(x * f))))
    rc, gc, bc = im.split()
    return Image.merge('RGB', (scale(rc, r), scale(gc, g), scale(bc, b)))

def grade(path_in, path_out):
    im = Image.open(path_in).convert('RGB')
    im = white_balance(im)
    im = ImageOps.autocontrast(im, cutoff=1)
    # Shared warm editorial tint: lift reds a touch, pull blue back slightly.
    rc, gc, bc = im.split()
    rc = rc.point(lambda x: min(255, round(x * 1.025)))
    bc = bc.point(lambda x: round(x * 0.975))
    im = Image.merge('RGB', (rc, gc, bc))
    im = ImageEnhance.Color(im).enhance(1.08)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=130, threshold=3))
    im.save(path_out, 'WEBP', quality=90, method=6)
    print(f'{os.path.basename(path_in)} -> {os.path.basename(path_out)} ({im.size[0]}x{im.size[1]})')

for src_rel, out_name in IMAGES:
    grade(os.path.join(SRC_DIR, src_rel), os.path.join(OUT_DIR, out_name))
