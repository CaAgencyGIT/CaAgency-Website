"""Recolour the warm ivory backdrop of a talent cover to neutral off-white.

    out = I + w(x) * (T - B(x))

I is the input, T the target #F4F4F2, B(x) a smooth estimate of the local
backdrop colour and w = 1 - alpha the backdrop's share of each pixel. Only the
backdrop's contribution to a pixel is swapped, so the grain/texture of the
backdrop (I - B) is kept, hair strands keep their own colour and just lose the
warm ivory that shows through them, and pixels where alpha > 0.98 are returned
bit-for-bit unchanged.

alpha comes from BiRefNet (rembg's `birefnet-portrait` ONNX weights, run at
1024x1024 with float output, no min-max stretch), remapped so raw alpha >= 0.98
is exactly 1 (untouched) and <= 0.02 exactly 0 (pure backdrop); the erased
header-ink boxes are forced to backdrop. No extra matting pass (pymatting) is
used: the backdrop shift |T - B| is only ~4-10 levels per channel, so an alpha
error e at a fringe pixel costs at most e*|T - B| (< 1-3 levels), and
closed-form matting was riskier on white headbands/knitwear that are almost
the backdrop colour. (birefnet-general gives practically the same mattes.)

Usage (after the existing clear_old_header() step):
    clean = clear_old_header(src, boxes, seed)
    out = neutralize(clean, boxes)

Dependencies (all CPU):
    numpy, opencv-python-headless, pillow,
    rembg[cpu] >= 2.0 (only for the model download/onnxruntime session),
    onnxruntime.
The model (~930 MB) is downloaded on first use to ~/.rembg/models/ (or
$U2NET_HOME) and the session is cached per process.

Deterministic: fixed model, single-threaded-equivalent maths in numpy/opencv,
no randomness. Runtime ~8-10 s per image on CPU, almost all of it the model.
"""

from __future__ import annotations

import functools

import cv2
import numpy as np
from PIL import Image

TARGET = np.array([244.0, 244.0, 242.0], np.float32)
MODEL = 'birefnet-portrait'
CORE = 0.98   # alpha above this: person, untouched
CLEAR = 0.02  # alpha below this: pure backdrop


@functools.lru_cache(maxsize=2)
def _session(model: str = MODEL):
    from rembg import new_session
    return new_session(model)


def person_alpha(rgb: np.ndarray, model: str = MODEL) -> np.ndarray:
    """Float32 HxW alpha in [0, 1] from BiRefNet (no min-max normalisation)."""
    sess = _session(model).inner_session
    im = Image.fromarray(rgb).resize((1024, 1024), Image.Resampling.LANCZOS)
    a = np.asarray(im, np.float32)
    a = a / max(float(a.max()), 1.0)
    a = (a - np.array([0.485, 0.456, 0.406], np.float32)) / np.array([0.229, 0.224, 0.225], np.float32)
    out = sess.run(None, {sess.get_inputs()[0].name: a.transpose(2, 0, 1)[None].astype(np.float32)})[0][0, 0]
    p = 1.0 / (1.0 + np.exp(-out.astype(np.float64)))
    p = cv2.resize(p.astype(np.float32), (rgb.shape[1], rgb.shape[0]), interpolation=cv2.INTER_CUBIC)
    return np.clip(p, 0.0, 1.0)


def _poly_terms(xx, yy, W, H):
    x = xx / W - 0.5
    y = yy / H - 0.5
    return np.stack([np.ones_like(x), x, y, x * x, y * y, x * y, x ** 3, y ** 3, x * x * y, x * y * y], -1)


def backdrop(rgb: np.ndarray, alpha: np.ndarray, sigma: float = 24.0) -> tuple[np.ndarray, np.ndarray]:
    """Smooth local backdrop colour B (HxWx3 float32) and the mask it was fitted on.

    A cubic surface is fitted (robustly) to clear backdrop pixels, then the
    residual is smoothed locally with normalised convolution so vignettes and
    gradients near the subject are followed; far from any backdrop sample the
    estimate falls back to the global surface.
    """
    H, W = alpha.shape
    img = rgb.astype(np.float32)
    # clear backdrop: alpha ~ 0 and at least 6 px away from anything that is not
    near = (alpha > CLEAR).astype(np.uint8)
    dist = cv2.distanceTransform(1 - near, cv2.DIST_L2, 5)
    bg = (alpha < CLEAR) & (dist >= 6)
    # global cubic fit, two robust passes, on a subsample
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    X = _poly_terms(xx, yy, W, H)
    sel = bg.copy()
    step = np.zeros_like(bg)
    step[::4, ::4] = True
    for _ in range(3):
        m = sel & step
        A = X[m]
        coef = np.linalg.lstsq(A, img[m], rcond=None)[0]  # 10x3
        P = X @ coef
        res = np.abs(img - P).max(axis=2)
        sel = bg & (res < max(4.0, 3.0 * float(np.median(res[bg]) * 1.4826 + 0.5)))
    # local residual smoothing at quarter resolution
    s = 4
    hs, ws = (H + s - 1) // s, (W + s - 1) // s
    r = cv2.resize((img - P) * sel[..., None], (ws, hs), interpolation=cv2.INTER_AREA)
    m = cv2.resize(sel.astype(np.float32), (ws, hs), interpolation=cv2.INTER_AREA)
    rb = cv2.GaussianBlur(r, (0, 0), sigma / s)
    mb = cv2.GaussianBlur(m, (0, 0), sigma / s)
    eps = 0.02
    loc = rb / (mb + eps)[..., None]
    loc = cv2.resize(loc, (W, H), interpolation=cv2.INTER_CUBIC)
    B = P + loc
    return B.astype(np.float32), sel


def refine_alpha(rgb: np.ndarray, a: np.ndarray, erase_boxes=()) -> np.ndarray:
    """Clean up the network alpha without ever lowering the person's core."""
    a = a.astype(np.float32).copy()
    H, W = a.shape
    for x0, y0, x1, y1 in erase_boxes or ():
        # erased header ink is backdrop by definition
        a[max(0, y0 - 10):min(H, y1 + 11), max(0, x0 - 10):min(W, x1 + 11)] = 0.0
    # remap so that CLEAR..CORE spans 0..1 (core exactly 1, clear exactly 0)
    return np.clip((a - CLEAR) / (CORE - CLEAR), 0.0, 1.0)


def neutralize(rgb: np.ndarray, erase_boxes=(), *, alpha: np.ndarray | None = None, return_debug: bool = False):
    """uint8 HxWx3 in -> uint8 HxWx3 out. See module docstring."""
    assert rgb.dtype == np.uint8 and rgb.ndim == 3 and rgb.shape[2] == 3
    a_raw = person_alpha(rgb) if alpha is None else alpha.astype(np.float32)
    a = refine_alpha(rgb, a_raw, erase_boxes)
    B, bgsel = backdrop(rgb, a)
    w = (1.0 - a)[..., None]
    out = rgb.astype(np.float32) + w * (TARGET - B)
    out = np.clip(np.floor(out + 0.5), 0, 255).astype(np.uint8)
    out[a >= 1.0] = rgb[a >= 1.0]  # bit-exact person core
    if return_debug:
        return out, dict(alpha_raw=a_raw, alpha=a, B=B, bg=bgsel)
    return out
