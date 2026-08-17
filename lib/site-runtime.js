/* Shared runtime for UXVel sub-pages: theme, reveals, scrub, cursor, menu, pin scroller, engine. */

const LIGHT = {
  '--c-bg':'#FFFFFF','--c-bg2':'#F4FAFE','--c-bg3':'#FFFFFF','--c-card':'#FFFFFF',
  '--c-h':'#0D3B66','--c-hi':'#3A4557','--c-body':'#4D5B70','--c-body2':'#64748B','--c-body3':'#3A4557',
  '--c-dim':'#64748B','--c-muted':'#94A3B8','--c-tail':'#94A3B8',
  '--c-line':'#CBD5E1','--c-line2':'#E2E8F0','--c-ghost':'rgba(13,59,102,.10)',
  '--c-accent':'#0A79E0','--c-accent-hi':'#008789','--c-on-accent':'#FFFFFF',
  '--c-accent-br':'rgba(0,160,161,.45)','--c-accent-wash':'rgba(0,184,185,.09)','--c-accent-sh':'rgba(0,160,161,.22)',
  '--c-lime':'#00C2C4','--c-lime-dim':'rgba(0,194,196,.34)',
  '--c-strip':'#E6F4F5','--c-problem':'linear-gradient(180deg,#FFFFFF 0%,#F4FAFE 100%)',
  '--c-services':'linear-gradient(180deg,#FFFFFF 0%,#F4FAFE 100%)','--c-process':'#E9F8F8','--c-work':'#F7F9FB',
  '--c-menu':'#FFFFFF','--c-video':'0',
  '--c-hero':'radial-gradient(110% 85% at 76% 16%,#D0F1F1 0%,rgba(208,241,241,0) 62%),linear-gradient(180deg,#FFFFFF 0%,#F4FAFE 100%)',
  '--c-inv':'#0D3B66','--c-inv-card':'#134472','--c-inv-h':'#FFFFFF','--c-inv-body':'rgba(255,255,255,.70)','--c-inv-body2':'rgba(255,255,255,.78)',
  '--c-inv-ac':'#7FD8FF','--c-inv-ac2':'#6FD3D4','--c-inv-ac2b':'#A3E3E4','--c-inv-ac3':'#14D4D4','--c-inv-deep':'#FFFFFF',
  '--c-inv-line':'rgba(255,255,255,.20)','--c-inv-line2':'rgba(255,255,255,.14)','--c-inv-chip':'rgba(255,255,255,.10)',
  '--c-inv-ghost':'rgba(255,255,255,.06)','--c-inv-dot':'rgba(255,255,255,.22)'
};

const NAVY = {
  '--c-bg':'#082744','--c-bg2':'#0B3255','--c-bg3':'#0D3B66','--c-card':'#0B3255',
  '--c-h':'#FFFFFF','--c-hi':'rgba(255,255,255,.74)','--c-body':'rgba(255,255,255,.64)','--c-body2':'rgba(255,255,255,.58)','--c-body3':'rgba(255,255,255,.72)',
  '--c-dim':'rgba(255,255,255,.50)','--c-muted':'rgba(255,255,255,.40)','--c-tail':'rgba(255,255,255,.32)',
  '--c-line':'rgba(255,255,255,.18)','--c-line2':'rgba(255,255,255,.11)','--c-ghost':'rgba(255,255,255,.06)',
  '--c-accent':'#7FD8FF','--c-accent-hi':'#A3E3E4','--c-on-accent':'#082744',
  '--c-accent-br':'rgba(127,234,234,.45)','--c-accent-wash':'rgba(127,234,234,.10)','--c-accent-sh':'rgba(127,234,234,.22)',
  '--c-lime':'#14D4D4','--c-lime-dim':'rgba(20,212,212,.34)',
  '--c-strip':'rgba(11,50,85,.62)','--c-problem':'linear-gradient(180deg,#082744 0%,#0B3255 100%)',
  '--c-services':'linear-gradient(180deg,#0B3255 0%,#082744 100%)','--c-process':'#0B3255','--c-work':'#082744',
  '--c-menu':'#082744','--c-video':'0.42',
  '--c-hero':'radial-gradient(110% 85% at 76% 16%,rgba(20,212,212,.20) 0%,rgba(20,212,212,0) 60%),linear-gradient(90deg,rgba(8,39,68,.92) 0%,rgba(8,39,68,.62) 46%,rgba(8,39,68,.30) 100%)',
  '--c-inv':'#E6F4F5','--c-inv-card':'#FFFFFF','--c-inv-h':'#0D3B66','--c-inv-body':'#4D5B70','--c-inv-body2':'#3A4557',
  '--c-inv-ac':'#0A79E0','--c-inv-ac2':'#33A6FF','--c-inv-ac2b':'#6FD3D4','--c-inv-ac3':'#00C2C4','--c-inv-deep':'#082744',
  '--c-inv-line':'#CBD5E1','--c-inv-line2':'#E2E8F0','--c-inv-chip':'rgba(13,59,102,.07)',
  '--c-inv-ghost':'rgba(13,59,102,.05)','--c-inv-dot':'#A3E3E4'
};

export function install(root, props){
  if(!root) return null;
  const S = {
    root, props: props || {}, dead:false, reveals:[], scrubs:[], mags:[], frames:0,
    mouse:{x:-999,y:-999}, ring:{x:-999,y:-999}, menuOpen:false, theme:'dark', engine:null
  };
  S.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  S.fine = !window.matchMedia || window.matchMedia('(pointer: fine)').matches;
  const level = () => { const m = S.props.motionLevel || 'cinematic'; return m === 'restrained' ? 0.55 : m === 'maximal' ? 1.5 : 1; };

  /* ---- theme ---- */
  function readTheme(){
    let v = null;
    try { v = window.localStorage.getItem('uxvel-theme'); } catch(e){}
    if(v === 'light' || v === 'dark' || v === 'navy') return v;
    return S.props.theme === 'light' ? 'light' : (S.props.theme === 'navy' ? 'navy' : 'dark');
  }
  function applyTheme(){
    const t = S.theme;
    const vars = t === 'light' ? LIGHT : (t === 'navy' ? NAVY : null);
    Object.keys(LIGHT).forEach(k => { (vars && vars[k]) ? root.style.setProperty(k, vars[k]) : root.style.removeProperty(k); });
    if(t === 'dark' && S.props.accent) root.style.setProperty('--c-accent', S.props.accent);
    if(S.props.accent) root.style.setProperty('--uxv-accent', S.props.accent);
    document.body.style.background = t === 'light' ? '#FFFFFF' : (t === 'navy' ? '#082744' : '#0B1220');
    const lbl = root.querySelector('[data-theme-label]');
    if(lbl) lbl.textContent = t === 'dark' ? 'Navy' : (t === 'navy' ? 'Light' : 'Dark');
    const lref = root.querySelector(t === 'light' ? '[data-logo-ink]' : '[data-logo-white]');
    const lsrc = lref ? lref.src : (t === 'light' ? '/brand/logo-ink.png' : '/brand/logo-white.png');
    root.querySelectorAll('[data-logo]').forEach(img => { if(lsrc) img.src = lsrc; });
    S.light = t === 'light';
    S.navy = t === 'navy';
  }
  S.theme = readTheme();
  applyTheme();

  /* ---- cursor ---- */
  let cursorWrap = null, cursorRing = null, cursorDot = null;
  function buildCursor(){
    if(cursorWrap) return;
    cursorWrap = document.createElement('div');
    cursorWrap.style.cssText = 'position:fixed;inset:0;z-index:200;pointer-events:none;mix-blend-mode:difference';
    cursorRing = document.createElement('div');
    cursorRing.style.cssText = 'position:absolute;left:0;top:0;width:34px;height:34px;margin:-17px 0 0 -17px;border:1px solid rgba(255,255,255,.85);border-radius:50%;transition:width .3s ease,height .3s ease,margin .3s ease,background .3s ease;will-change:transform';
    cursorDot = document.createElement('div');
    cursorDot.style.cssText = 'position:absolute;left:0;top:0;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:#fff;will-change:transform';
    cursorWrap.appendChild(cursorRing); cursorWrap.appendChild(cursorDot);
    root.appendChild(cursorWrap);
    root.addEventListener('pointerover', e => {
      const on = !!(e.target && e.target.closest && e.target.closest('[data-cursor]'));
      cursorRing.style.width = on ? '62px' : '34px';
      cursorRing.style.height = on ? '62px' : '34px';
      cursorRing.style.margin = on ? '-31px 0 0 -31px' : '-17px 0 0 -17px';
      cursorRing.style.background = on ? 'rgba(255,255,255,.16)' : 'transparent';
    });
    applyCursorPref();
  }
  function applyCursorPref(){
    const off = S.props.customCursor === false || !S.fine;
    if(cursorWrap) cursorWrap.style.display = off ? 'none' : 'block';
    root.style.cursor = off ? '' : 'none';
  }

  /* ---- menu ---- */
  const menu = root.querySelector('[data-menu]');
  const bars = Array.prototype.slice.call(root.querySelectorAll('[data-bar]'));
  const menuLabel = root.querySelector('[data-menu-label]');
  function openMenu(){
    if(!menu) return;
    S.menuOpen = true;
    menu.style.opacity = '1'; menu.style.pointerEvents = 'auto'; menu.style.transform = 'translate3d(0,0,0)';
    if(menuLabel) menuLabel.textContent = 'Close';
    if(bars[0]) bars[0].style.transform = 'translateY(2.75px) rotate(45deg)';
    if(bars[1]) bars[1].style.transform = 'translateY(-2.75px) rotate(-45deg)';
  }
  function closeMenu(){
    if(!menu) return;
    S.menuOpen = false;
    menu.style.opacity = '0'; menu.style.pointerEvents = 'none'; menu.style.transform = 'translate3d(0,-100%,0)';
    if(menuLabel) menuLabel.textContent = 'Menu';
    bars.forEach(b => { b.style.transform = 'none'; });
  }

  /* ---- engine ---- */
  function initEngine(){
    const wrap = root.querySelector('[data-engine]');
    if(!wrap || S.engine) return;
    const e = {
      wrap,
      arc: root.querySelector('[data-engine-arc]'),
      pulse: root.querySelector('[data-engine-pulse]'),
      idx: root.querySelector('[data-engine-idx]'),
      title: root.querySelector('[data-engine-title]'),
      nodes: Array.prototype.slice.call(root.querySelectorAll('[data-engine-node]')),
      rows: Array.prototype.slice.call(root.querySelectorAll('[data-step-row]')),
      active:-1, hold:-1, holdT:0
    };
    S.engine = e;
    const pick = i => { e.hold = i; e.holdT = performance.now(); setStep(i); };
    e.nodes.forEach((n,i) => n.addEventListener('click', () => pick(i)));
    e.rows.forEach((r,i) => {
      r.addEventListener('click', () => pick(i));
      if(S.fine) r.addEventListener('pointerenter', () => pick(i));
    });
    setStep(0);
  }
  function setStep(i){
    const e = S.engine;
    if(!e || i === e.active) return;
    e.active = i;
    e.nodes.forEach((n,j) => {
      const on = j <= i, cur = j === i;
      n.style.background = on ? 'var(--c-accent,#4DA6FF)' : 'var(--c-process,#121C2B)';
      n.style.borderColor = on ? 'var(--c-accent,#4DA6FF)' : 'var(--c-line,rgba(255,255,255,.16))';
      n.style.transform = cur ? 'scale(1.55)' : 'scale(1)';
      const ping = n.querySelector('[data-engine-ping]');
      if(ping) ping.style.display = cur ? 'block' : 'none';
      const lbl = n.parentNode.querySelector('[data-engine-label]');
      if(lbl) lbl.style.color = cur ? 'var(--c-accent,#4DA6FF)' : (on ? 'var(--c-body2,rgba(255,255,255,.56))' : 'var(--c-muted,rgba(255,255,255,.38))');
    });
    e.rows.forEach((r,j) => {
      r.style.opacity = j === i ? '1' : '.42';
      const bar = r.querySelector('[data-step-bar]');
      if(bar) bar.style.transform = j === i ? 'scaleY(1)' : 'scaleY(0)';
    });
    if(e.idx) e.idx.textContent = '0' + (i + 1);
    if(e.title && e.rows[i]) e.title.textContent = e.rows[i].getAttribute('data-title') || '';
  }

  /* ---- registration ---- */
  let railFill, railPct, nav, pinWrap, pinTrack, pinArrow, pinBar, hpxs, stackCards;
  function scan(){
    const vh = window.innerHeight;
    root.querySelectorAll('[data-r]').forEach(el => {
      if(el.__reg) return;
      el.__reg = true;
      const now = el.hasAttribute('data-r-now');
      const below = now || el.getBoundingClientRect().top > vh * 0.92;
      const d = parseInt(el.getAttribute('data-r-d') || '0', 10);
      const dy = parseFloat(el.getAttribute('data-r-y')) || 26;
      el.style.transition = 'opacity .7s cubic-bezier(.22,1,.36,1) ' + d + 'ms, transform .7s cubic-bezier(.22,1,.36,1) ' + d + 'ms';
      if(below && !S.reduced){
        el.style.opacity = '0';
        el.style.transform = 'translate3d(0,' + (dy * level()) + 'px,0)';
        S.reveals.push(el);
      }
    });
    root.querySelectorAll('[data-scrub]').forEach(el => {
      if(el.__split) return;
      el.__split = true;
      if(S.reduced) return;
      const below = el.getBoundingClientRect().top > vh * 0.9;
      const dark = el.hasAttribute('data-scrub-dark');
      const tail = parseInt(el.getAttribute('data-scrub-tail') || '0', 10);
      const words = (el.textContent || '').split(/\s+/).filter(Boolean);
      if(!words.length) return;
      el.textContent = '';
      const spans = [];
      words.forEach((w,i) => {
        const sp = document.createElement('span');
        sp.textContent = w;
        sp.style.display = 'inline-block';
        if(tail && i >= words.length - tail) sp.style.color = 'var(--c-tail,rgba(255,255,255,.42))';
        sp.style.transition = 'opacity .5s ease, filter .5s ease, transform .6s cubic-bezier(.2,.7,.2,1)';
        if(below){
          sp.style.opacity = dark ? '0.14' : '0.16';
          sp.style.transform = 'translate3d(0,' + (10 * level()) + 'px,0)';
        }
        el.appendChild(sp);
        if(i < words.length - 1) el.appendChild(document.createTextNode(' '));
        spans.push(sp);
      });
      if(below) S.scrubs.push({el, words:spans, dim: dark ? 0.14 : 0.16});
    });
    root.querySelectorAll('[data-mag]').forEach(el => {
      if(el.__mag) return;
      el.__mag = true;
      if(S.reduced || !S.fine) return;
      const amt = parseFloat(el.getAttribute('data-mag')) || 0.25;
      el.style.transition = (el.style.transition ? el.style.transition + ',' : '') + ' translate .35s cubic-bezier(.2,.8,.2,1)';
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.translate = ((e.clientX - (r.left + r.width/2)) * amt * level()).toFixed(1) + 'px ' +
                             ((e.clientY - (r.top + r.height/2)) * amt * level()).toFixed(1) + 'px';
      });
      el.addEventListener('pointerleave', () => { el.style.translate = '0 0'; });
    });
    if(!railFill){
      railFill = root.querySelector('[data-rail-fill]');
      railPct = root.querySelector('[data-rail-pct]');
      nav = root.querySelector('[data-nav]');
    }
    if(!pinWrap){
      pinWrap = root.querySelector('[data-pin-wrap]');
      pinTrack = root.querySelector('[data-pin-track]');
      pinArrow = root.querySelector('[data-pin-arrow]');
      pinBar = root.querySelector('[data-pin-bar]');
    }
    if(!stackCards){
      const c = root.querySelectorAll('[data-stack-card]');
      if(c.length) stackCards = Array.prototype.slice.call(c);
    }
    if(!S.engine) initEngine();
  }

  function revealAll(){
    S.reveals.forEach(el => { el.style.opacity = '1'; el.style.transform = 'translate3d(0,0,0)'; });
    S.reveals = [];
    S.scrubs.forEach(s => s.words.forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; }));
    S.scrubs = [];
    if(S.engine){ if(S.engine.arc) S.engine.arc.style.strokeDashoffset = '0'; setStep(5); }
    if(pinWrap && pinTrack && !pinWrap.__h && window.innerWidth > 820){
      const d = Math.max(0, pinTrack.scrollWidth - pinWrap.clientWidth + 40);
      pinWrap.__h = Math.round(window.innerHeight + d);
      pinWrap.style.height = pinWrap.__h + 'px';
    }
  }

  /* ---- frame loop ---- */
  let lastScan = 0;
  function tick(now){
    if(S.dead) return;
    const vh = window.innerHeight, lv = level();
    const narrow = window.innerWidth <= 820;
    S.frames++;
    if(now - lastScan > 350){ lastScan = now; scan(); }

    const doc = document.scrollingElement || document.documentElement;
    const sc = doc.scrollTop, max = Math.max(1, doc.scrollHeight - doc.clientHeight);
    const p = Math.min(1, Math.max(0, sc / max));
    if(railFill) railFill.style.height = (p * 100).toFixed(1) + '%';
    if(railPct) railPct.textContent = Math.round(p * 100) + '%';
    if(nav){
      const solid = sc > 40;
      nav.style.background = solid ? (S.light ? 'rgba(255,255,255,.80)' : (S.navy ? 'rgba(8,39,68,.78)' : 'rgba(10,20,32,.72)')) : 'transparent';
      nav.style.backdropFilter = solid ? 'blur(16px)' : 'none';
      nav.style.borderBottom = solid ? '1px solid ' + (S.light ? 'rgba(13,59,102,.10)' : 'rgba(255,255,255,.08)') : '1px solid transparent';
    }

    if(S.reveals.length){
      const keep = [];
      for(const el of S.reveals){
        if(el.getBoundingClientRect().top < vh * 0.88){
          el.style.opacity = '1'; el.style.transform = 'translate3d(0,0,0)';
        } else keep.push(el);
      }
      S.reveals = keep;
    }

    for(const s of S.scrubs){
      const r = s.el.getBoundingClientRect();
      const prog = Math.min(1, Math.max(0, (vh * 0.86 - r.top) / (vh * 0.42)));
      const n = s.words.length, lit = prog * (n + 3);
      for(let w=0; w<n; w++){
        const t = Math.min(1, Math.max(0, lit - w));
        s.words[w].style.opacity = (s.dim + (1 - s.dim) * t).toFixed(3);
        s.words[w].style.transform = 'translate3d(0,' + ((1 - t) * 10 * lv).toFixed(2) + 'px,0)';
      }
    }

    if(S.engine && S.engine.wrap){
      const e = S.engine, er = e.wrap.getBoundingClientRect();
      const ep = Math.min(1, Math.max(0, (vh * 0.80 - er.top) / (er.height * 0.85 + vh * 0.3)));
      if(e.arc) e.arc.style.strokeDashoffset = (628 * (1 - ep)).toFixed(1);
      if(e.pulse) e.pulse.style.transform = 'rotate(' + (ep * 360).toFixed(2) + 'deg)';
      const held = e.hold >= 0 && (now - e.holdT) < 2800;
      setStep(held ? e.hold : Math.min(5, Math.max(0, Math.floor(ep * 6.2))));
    }

    if(narrow && pinWrap && pinTrack){
      if(pinWrap.__h){ pinWrap.__h = 0; pinWrap.style.height = ''; }
      pinTrack.style.transform = '';
    }
    if(pinWrap && pinTrack && !narrow){
      const dist = Math.max(0, pinTrack.scrollWidth - pinWrap.clientWidth + 40);
      const want = Math.round(vh + dist);
      if(Math.abs((pinWrap.__h || 0) - want) > 2){ pinWrap.__h = want; pinWrap.style.height = want + 'px'; }
      const r = pinWrap.getBoundingClientRect();
      const pp = dist > 0 ? Math.min(1, Math.max(0, -r.top / dist)) : 0;
      pinTrack.style.transform = 'translate3d(' + (-pp * dist).toFixed(1) + 'px,0,0)';
      if(pinArrow) pinArrow.style.transform = 'translateX(' + (pp * 10).toFixed(1) + 'px)';
      if(pinBar) pinBar.style.width = (pp * 100).toFixed(1) + '%';
      if(!hpxs) hpxs = Array.prototype.slice.call(pinTrack.querySelectorAll('[data-hpx]'));
      if(!S.reduced) hpxs.forEach(el => {
        const amt = parseFloat(el.getAttribute('data-hpx')) || 0.2;
        el.style.transform = 'translate3d(' + (pp * dist * amt * lv).toFixed(1) + 'px,0,0)';
      });
    }

    if(narrow && stackCards){ stackCards.forEach(c => { c.style.transform = 'none'; c.style.opacity = '1'; }); }
    if(stackCards && !S.reduced && !narrow){
      for(let i=0;i<stackCards.length;i++){
        const card = stackCards[i], next = stackCards[i+1];
        if(!next){ card.style.transform = 'none'; card.style.opacity = '1'; continue; }
        const cover = Math.min(1, Math.max(0, (vh - next.getBoundingClientRect().top) / (vh * 0.8)));
        card.style.transform = 'scale(' + (1 - 0.055 * cover * lv).toFixed(4) + ')';
        card.style.opacity = (1 - 0.32 * cover).toFixed(3);
      }
    }

    if(cursorWrap && S.fine && S.props.customCursor !== false){
      S.ring.x += (S.mouse.x - S.ring.x) * 0.16;
      S.ring.y += (S.mouse.y - S.ring.y) * 0.16;
      cursorRing.style.transform = 'translate3d(' + S.ring.x.toFixed(1) + 'px,' + S.ring.y.toFixed(1) + 'px,0)';
      cursorDot.style.transform = 'translate3d(' + S.mouse.x.toFixed(1) + 'px,' + S.mouse.y.toFixed(1) + 'px,0)';
    }

    S.raf = requestAnimationFrame(tick);
  }

  /* ---- hero video + intro curtain (home) ---- */
  function playVideo(){
    const v = root.querySelector('[data-hero-video]');
    if(!v) return;
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
    const go = () => { const p = v.play(); if(p && p.catch) p.catch(() => {}); };
    go();
    v.addEventListener('canplay', go, {once:true});
    document.addEventListener('pointerdown', go, {once:true});
  }
  function buildCurtain(){
    if(!S.props.intro || S.reduced) return;
    const c = document.createElement('div');
    c.style.cssText = 'position:fixed;inset:0;z-index:300;background:' + (S.light ? '#F4FAFE' : (S.navy ? '#082744' : '#121C2B')) + ';display:flex;align-items:center;justify-content:center;transition:transform 1.1s cubic-bezier(.76,0,.24,1);will-change:transform';
    const mark = document.createElement('div');
    mark.style.cssText = 'display:flex;align-items:center;transition:opacity .5s ease';
    mark.innerHTML = '<img src="' + (S.light ? '/brand/logo-ink.png' : '/brand/logo-white.png') + '" alt="UxVel" style="height:clamp(34px,5vw,72px);width:auto;display:block">';
    const bar = document.createElement('div');
    bar.style.cssText = 'position:absolute;left:0;bottom:0;height:2px;width:0%;background:var(--c-accent,#4DA6FF);transition:width 1s cubic-bezier(.3,.8,.2,1)';
    c.appendChild(mark); c.appendChild(bar);
    root.appendChild(c);
    requestAnimationFrame(() => { bar.style.width = '100%'; });
    setTimeout(() => {
      mark.style.opacity = '0';
      setTimeout(() => {
        c.style.transform = 'translate3d(0,-101%,0)';
        setTimeout(() => { if(c.parentNode) c.parentNode.removeChild(c); }, 1300);
      }, 320);
    }, 1250);
  }

  const onMove = e => { S.mouse.x = e.clientX; S.mouse.y = e.clientY; };
  buildCursor();
  playVideo();
  buildCurtain();
  scan();
  S.raf = requestAnimationFrame(tick);
  if(S.fine) window.addEventListener('pointermove', onMove, {passive:true});
  const netTimer = setTimeout(() => { if(S.frames < 2) revealAll(); }, 2000);
  const onVis = () => { if(document.visibilityState === 'visible' && S.frames < 2) revealAll(); };
  document.addEventListener('visibilitychange', onVis);

  return {
    toggleMenu(){ S.menuOpen ? closeMenu() : openMenu(); },
    closeMenu,
    toggleTheme(){
      const order = ['dark','navy','light'];
      const i = order.indexOf(S.theme);
      S.theme = order[(i < 0 ? 0 : i + 1) % order.length];
      try { window.localStorage.setItem('uxvel-theme', S.theme); } catch(e){}
      applyTheme();
    },
    update(props){
      S.props = props || {};
      if(S.props.theme && S.props.theme !== S.theme && !S._userSet){ S.theme = S.props.theme; }
      applyTheme();
      applyCursorPref();
    },
    destroy(){
      S.dead = true;
      if(S.raf) cancelAnimationFrame(S.raf);
      clearTimeout(netTimer);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
      if(cursorWrap && cursorWrap.parentNode) cursorWrap.parentNode.removeChild(cursorWrap);
    }
  };
}
