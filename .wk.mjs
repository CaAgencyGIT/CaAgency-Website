import { webkit, devices } from 'playwright';
const b = await webkit.launch({ env: { ...process.env, LD_LIBRARY_PATH: '/tmp/claude-1000/-home-user-Ca-Agency-caagency-website-server/7a5dc806-1eb9-426a-af2e-bd52f5a6fac0/scratchpad/wklibs/root/usr/lib/x86_64-linux-gnu' } });
const ctx = await b.newContext(devices['iPhone 14']);
for (const path of ['/','/about','/work']) {
  const p = await ctx.newPage(); const logs=[];
  p.on('console', m=>{ if(m.type()==='error') logs.push(m.text().slice(0,100)) });
  await p.goto('http://127.0.0.1:3002'+path, { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(4000);
  await p.evaluate(()=>document.querySelectorAll('[role=dialog]:not(.rd-menu),[class*=cookie],[class*=Cookie]').forEach(e=>e.remove()));
  const vids=p.locator('video'); const n=await vids.count(); const out=[];
  for (let i=0;i<Math.min(n,6);i++){ const v=vids.nth(i); if(!await v.isVisible().catch(()=>false)) continue; await v.scrollIntoViewIfNeeded().catch(()=>{}); await p.waitForTimeout(1200);
    const a=await v.evaluate(x=>({t:x.currentTime,p:x.paused,rs:x.readyState,src:x.currentSrc.split('/').pop(),err:x.error?.code}));
    await p.waitForTimeout(2000);
    const c=await v.evaluate(x=>({t:x.currentTime,p:x.paused,rs:x.readyState}));
    out.push(`${a.src||'(none)'} t ${a.t.toFixed(2)}->${c.t.toFixed(2)} paused=${c.p} rs=${c.rs}${a.err?' ERR'+a.err:''}`); }
  console.log(path, n, '\n  '+out.join('\n  '), logs.length?'\n  console: '+logs.slice(0,3).join(' | '):'');
  await p.close();
}
await b.close();
