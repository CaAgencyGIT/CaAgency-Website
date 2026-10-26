import { chromium } from 'playwright';
const [,, base, outDir, ...paths] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => { try { localStorage.setItem('ca-agency-cookie-consent', 'declined') } catch {} });
for (const path of paths) {
  const p = await ctx.newPage();
  await p.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
  const H = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(200); }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800);
  const name = path === '/' ? 'home' : path.replace(/\//g, '_').slice(1);
  await p.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
  const info = await p.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('h1,h2,h3,h4,p,a,button')) {
      const t = el.innerText?.trim(); if (!t) continue;
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); if (!r.width) continue;
      out.push(`${el.tagName} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily.split(',')[0].slice(0,14)} y${Math.round(r.top + scrollY)} x${Math.round(r.left)} w${Math.round(r.width)} h${Math.round(r.height)} :: ${t.slice(0,40).replace(/\n/g,' ')}`);
    }
    return out.filter(l => /^H[1-4]|^P|BUTTON/.test(l)).slice(0, 45).join('\n');
  });
  console.log(`== ${path} height ${H}\n${info}`);
  await p.close();
}
await b.close();
