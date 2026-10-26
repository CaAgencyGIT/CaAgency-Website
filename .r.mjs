import { chromium } from 'playwright';
const [,, url, out] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1' });
await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
const H = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(250); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800);
await p.screenshot({ path: out, fullPage: true });
// measure visible text styles
const info = await p.evaluate(() => {
  const seen = new Map();
  for (const el of document.querySelectorAll('h1,h2,h3,h4,p,a,button,li,span')) {
    const t = el.innerText?.trim(); if (!t || el.children.length > 2) continue;
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); if (!r.width) continue;
    const k = `${el.tagName} ${cs.fontSize} lh${cs.lineHeight} ls${cs.letterSpacing} w${cs.fontWeight} ${cs.textTransform} ${cs.fontFamily.split(',')[0]}`;
    if (!seen.has(k)) seen.set(k, `${t.slice(0, 50).replace(/\n/g,' ')} @x${Math.round(r.left)} w${Math.round(r.width)}`);
  }
  return [...seen].slice(0, 60).map(([k, v]) => k + ' :: ' + v).join('\n');
});
console.log('height', H); console.log(info);
await b.close();
