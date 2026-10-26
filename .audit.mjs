import { chromium, devices } from 'playwright';
import fs from 'fs';
const O='/home/user/Ca Agency/caagency-website-server/.preview-shots/mobile-audit';
const pages=['/','/about','/talents','/work','/services','/contact','/blog','/case-studies/abib-campaign','/talents/albina-mavriqi','/services/influencer-campaigns','/ar','/zh/contact'];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const report={};
for (const [dname, dev] of [['iphone', devices['iPhone 14']], ['android', devices['Pixel 7']]]) {
  const ctx = await b.newContext({ ...dev, defaultBrowserType: undefined });
  for (const path of pages) {
    const p = await ctx.newPage(); const errs=[];
    p.on('pageerror', e=>errs.push(e.message.slice(0,120)));
    await p.goto('http://127.0.0.1:3002'+path, { waitUntil: 'networkidle', timeout: 60000 }).catch(e=>errs.push('nav '+e.message.slice(0,80)));
    await p.evaluate(()=>document.querySelectorAll('[role=dialog]:not(.rd-menu),[class*=cookie],[class*=Cookie]').forEach(e=>e.remove()));
    const H = await p.evaluate(()=>document.documentElement.scrollHeight);
    for (let y=0;y<H;y+=500){ await p.evaluate(y=>scrollTo(0,y),y); await p.waitForTimeout(90);}
    await p.waitForTimeout(1500);
    const r = await p.evaluate(()=>{
      const vw=innerWidth, out=[];
      for (const e of document.querySelectorAll('body *')) { const b=e.getBoundingClientRect(); if (b.width>0 && (b.right>vw+1 || b.left< -1)) { const cs=getComputedStyle(e); let anc=e.parentElement, clipped=false; while(anc){ const s=getComputedStyle(anc); if(['hidden','clip','auto','scroll'].includes(s.overflowX)){clipped=true;break} anc=anc.parentElement } if(!clipped && cs.position!=='fixed') out.push((e.tagName+'.'+String(e.className).slice(0,40)).trim()) } }
      const small=[...document.querySelectorAll('p,span,a,li,label,button,dt,dd,small')].filter(e=>{const s=getComputedStyle(e); const t=(e.childNodes[0]?.nodeType===3)&&e.textContent.trim().length>2; return t && e.offsetParent && parseFloat(s.fontSize)<11}).map(e=>e.textContent.trim().slice(0,24)+'@'+getComputedStyle(e).fontSize);
      const taps=[...document.querySelectorAll('a[href],button,select,input:not([type=hidden]),[role=tab]')].filter(e=>{const b=e.getBoundingClientRect(); return e.offsetParent && b.width>0 && (b.height<32 || b.width<32) && !e.closest('p,li,dd')}).map(e=>(e.getAttribute('aria-label')||e.textContent.trim()).slice(0,20)+' '+Math.round(e.getBoundingClientRect().width)+'x'+Math.round(e.getBoundingClientRect().height));
      const vids=[...document.querySelectorAll('video')].map(v=>({src:(v.currentSrc||'').split('/').pop(), mob:(v.currentSrc||'').endsWith('-m.mp4'), playing:!v.paused&&v.readyState>2}));
      return { overflow: document.documentElement.scrollWidth>vw, overflowEls:[...new Set(out)].slice(0,6), small:[...new Set(small)].slice(0,8), taps:[...new Set(taps)].slice(0,10), vids: {n:vids.length, loaded:vids.filter(v=>v.src).length, desktopFile:vids.filter(v=>v.src&&!v.mob).map(v=>v.src).slice(0,4), playing:vids.filter(v=>v.playing).length} };
    });
    r.errors=errs;
    report[`${dname} ${path}`]=r;
    await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(300);
    await p.screenshot({ path:`${O}/${dname}${path.replace(/\//g,'_')||'_home'}.png`, fullPage: true }).catch(()=>{});
    await p.close();
  }
  await ctx.close();
}
fs.writeFileSync(O+'/report.json', JSON.stringify(report,null,1));
for (const [k,r] of Object.entries(report)) console.log(k.padEnd(42), 'overflow:',r.overflow, '| vids', r.vids.loaded+'/'+r.vids.n, 'desktopFile', r.vids.desktopFile.length, '| small', r.small.length, '| taps', r.taps.length, '| errs', r.errors.length);
await b.close();
