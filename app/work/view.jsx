'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function WorkView() {
  const { rootRef, toggleMenu, closeMenu, toggleTheme } = useSite();

  return (
    <div ref={rootRef} style={{position: 'relative', background: 'var(--c-bg,#0B1220)', color: 'var(--c-body,rgba(255,255,255,.62))', fontFamily: 'var(--font-sans)'}}>
    
    <div data-rail="1" style={{position: 'fixed', right: 'clamp(14px,2.2vw,30px)', top: '50%', transform: 'translateY(-50%)', zIndex: '60', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', pointerEvents: 'none', mixBlendMode: 'difference'}}>
    <div style={{font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-h,#fff)'}} data-rail-pct="1">0%</div>
    <div style={{position: 'relative', width: '1px', height: 'min(30vh,220px)', background: 'var(--c-line,rgba(255,255,255,.16))'}}>
    <div data-rail-fill="1" style={{position: 'absolute', left: '-1px', top: '0', width: '3px', height: '0%', background: 'var(--c-lime,#7FD8FF)'}}></div>
    </div>
    <div style={{writingMode: 'vertical-rl', fontSize: '9.5px', letterSpacing: '.34em', textTransform: 'uppercase', color: 'var(--c-body2,rgba(255,255,255,.56))', fontWeight: '500'}}>Scroll to discover</div>
    </div>
    
    <header style={{position: 'fixed', top: '0', left: '0', right: '0', zIndex: '70', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(18px,2.4vw,30px) clamp(20px,5vw,72px)', transition: 'background .5s ease,backdrop-filter .5s ease,padding .5s ease'}} data-nav="1">
    <Link href="/" data-cursor="grow" aria-label="UxVel home" style={{display: 'flex', alignItems: 'center'}}><img data-logo="1" src="/brand/logo-white.png" alt="UxVel" style={{height: 'clamp(22px,1.9vw,29px)', width: 'auto', display: 'block'}} /></Link>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
    <button onClick={toggleTheme} data-cursor="grow" data-mag="0.18" aria-label="Toggle colour theme" style={{display: 'flex', alignItems: 'center', gap: '9px', background: 'var(--c-accent-wash,var(--c-accent-wash,rgba(77,166,255,.12)))', border: '1px solid var(--c-line,var(--c-line,rgba(255,255,255,.16)))', borderRadius: '999px', padding: '11px 17px', cursor: 'pointer', font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', backdropFilter: 'blur(10px)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh1">
    <span style={{width: '13px', height: '13px', borderRadius: '50%', border: '1.5px solid var(--c-accent,#4DA6FF)', background: 'linear-gradient(90deg,var(--c-accent,#4DA6FF) 0 50%,transparent 50% 100%)', display: 'block', flex: 'none'}}></span>
    <span data-theme-label="1">Light</span>
    </button>
    <button onClick={toggleMenu} data-cursor="grow" data-mag="0.22" aria-label="Open menu" style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c-line2,rgba(255,255,255,.10))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '11px 18px 11px 20px', cursor: 'pointer', font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', backdropFilter: 'blur(10px)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh2">
    <span data-menu-label="1">Menu</span>
    <span style={{display: 'flex', flexDirection: 'column', gap: '4px', width: '16px'}}>
    <span data-bar="1" style={{display: 'block', height: '1.5px', background: 'var(--c-accent,#4DA6FF)', transition: 'transform .45s cubic-bezier(.7,0,.2,1)'}}></span>
    <span data-bar="2" style={{display: 'block', height: '1.5px', background: 'var(--c-accent,#4DA6FF)', transition: 'transform .45s cubic-bezier(.7,0,.2,1)'}}></span>
    </span>
    </button>
    </div>
    </header>
    
    <div data-menu="1" style={{position: 'fixed', inset: '0', zIndex: '65', background: 'var(--c-menu,var(--c-bg2,#121C2B))', opacity: '0', pointerEvents: 'none', transform: 'translate3d(0,-100%,0)', transition: 'transform .8s cubic-bezier(.76,0,.24,1),opacity .5s ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(90px,12vh,150px) clamp(20px,5vw,72px) clamp(30px,5vh,60px)'}}>
    <div data-col="split" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,.65fr)', gap: 'clamp(28px,5vw,80px)', alignItems: 'end'}}>
    <nav style={{display: 'flex', flexDirection: 'column', gap: 'clamp(4px,1vh,10px)'}}>
    <Link href="/services" onClick={closeMenu} data-cursor="grow" style={{font: 'var(--weight-semibold) clamp(34px,5.6vw,76px)/1.02 var(--font-display)', letterSpacing: '-.035em', color: 'var(--c-h,#fff)', padding: '4px 0', transition: 'color .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)', transformOrigin: 'left'}} className="uxvh3">Services</Link>
    <Link href="/process" onClick={closeMenu} data-cursor="grow" style={{font: 'var(--weight-semibold) clamp(34px,5.6vw,76px)/1.02 var(--font-display)', letterSpacing: '-.035em', color: 'var(--c-h,#fff)', padding: '4px 0', transition: 'color .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)', transformOrigin: 'left'}} className="uxvh3">Process</Link>
    <Link href="/work" onClick={closeMenu} data-cursor="grow" style={{font: 'var(--weight-semibold) clamp(34px,5.6vw,76px)/1.02 var(--font-display)', letterSpacing: '-.035em', color: 'var(--c-h,#fff)', padding: '4px 0', transition: 'color .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)', transformOrigin: 'left'}} className="uxvh3">Work</Link>
    <Link href="/about" onClick={closeMenu} data-cursor="grow" style={{font: 'var(--weight-semibold) clamp(34px,5.6vw,76px)/1.02 var(--font-display)', letterSpacing: '-.035em', color: 'var(--c-h,#fff)', padding: '4px 0', transition: 'color .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)', transformOrigin: 'left'}} className="uxvh3">About</Link>
    <Link href="/contact" onClick={closeMenu} data-cursor="grow" style={{font: 'var(--weight-semibold) clamp(34px,5.6vw,76px)/1.02 var(--font-display)', letterSpacing: '-.035em', color: 'var(--c-h,#fff)', padding: '4px 0', transition: 'color .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)', transformOrigin: 'left'}} className="uxvh3">Contact</Link>
    </nav>
    <div style={{display: 'flex', flexDirection: 'column', gap: '22px', paddingBottom: '12px'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
    <div style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Start with the challenge</div>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" style={{font: 'var(--weight-medium) clamp(15px,1.3vw,19px)/1.4 var(--font-sans)', color: 'var(--c-accent,#4DA6FF)'}}>hello@uxvel.com</a>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <a href="https://instagram.com/" data-cursor="grow" style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--c-body,rgba(255,255,255,.62))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '9px 14px'}}>Instagram</a>
    <a href="https://linkedin.com/" data-cursor="grow" style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--c-body,rgba(255,255,255,.62))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '9px 14px'}}>LinkedIn</a>
    <a href="https://behance.net/" data-cursor="grow" style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--c-body,rgba(255,255,255,.62))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '9px 14px'}}>Behance</a>
    <a href="https://x.com/" data-cursor="grow" style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--c-body,rgba(255,255,255,.62))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '9px 14px'}}>X</a>
    <a href="https://youtube.com/" data-cursor="grow" style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--c-body,rgba(255,255,255,.62))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '9px 14px'}}>YouTube</a>
    </div>
    </div>
    </div>
    </div>
    
    
    <section data-screen-label="Work hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', minHeight: '64vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,#121C2B 100%))', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(18px,4vh,46px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(04)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>
    <div data-r="1" data-r-now="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>Selected work. Built for momentum.</div>
    <h1 data-r="1" data-r-now="1" data-r-d="90" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(56px,9.5vw,150px)', lineHeight: '.9', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Work</h1>
    <p data-r="1" data-r-now="1" data-r-d="170" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '48ch'}}>Selected work. Built for momentum.</p>
    </div>
    </div>
    </section>
    
    <section id="work" data-screen-label="Work" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px) 0', background: 'var(--c-work,#0B1220)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 'clamp(38px,5.5vh,72px)', maxWidth: '880px'}}>
    <h2 data-scrub="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', margin: '0'}}>Different challenges. One standard of clarity.</h2>
    </div>
    <div data-stack="1" style={{display: 'flex', flexDirection: 'column', gap: 'clamp(20px,3vh,40px)', paddingBottom: 'clamp(30px,6vh,80px)'}}>
    <Link data-col="split" href="/techouts" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '96px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#4DA6FF)'}}>01</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Enterprise AI, integration, cloud, commerce</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>From Technical Depth to Enterprise Confidence</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Techouts</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/techouts.jpg" alt="Techouts project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/flyrlink" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '112px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg3,#1A2635)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#4DA6FF)'}}>02</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Marketplace, booking, expert economy</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Making Expertise Instantly Accessible</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Flyrlink</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/flyrlink.jpg" alt="Flyrlink project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/aarniksha-solutions" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '128px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#4DA6FF)'}}>03</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Recruitment, staffing, workforce solutions</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Designing Trust Into the Talent Economy</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Aarniksha Solutions</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/aarniksha-solutions.jpg" alt="Aarniksha Solutions project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/dermsaga" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '144px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg3,#1A2635)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#4DA6FF)'}}>04</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Healthcare, dermatology, patient experience</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>A More Confident Path to Care</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>DermSaga</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/dermsaga.jpg" alt="DermSaga project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/advyra" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '160px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#4DA6FF)'}}>05</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Luxury e-commerce, Shopify, lifestyle</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Where Heritage Becomes a Modern Commerce Experience</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Advyra</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/advyra.jpg" alt="Advyra project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    </div>
    </div>
    </section>
    
    
    <section data-screen-label="Impact" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px)', background: 'var(--c-inv,#F6FBFE)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(36px,5vh,66px)'}}>
    <div data-col="split" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.75fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end'}}>
    <h2 data-scrub="1" data-scrub-dark="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-inv-h,#0F2A45)', maxWidth: '24ch', margin: '0'}}>Beautiful work is the beginning. Business impact is the measure.</h2>
    <div data-r="1" style={{display: 'flex', gap: 'clamp(20px,3vw,44px)', paddingBottom: '8px'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '2px solid var(--c-inv-ac3,#2E7DF7)', paddingLeft: '14px'}}>
    <span style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#1559B8)'}}>Client engagements</span>
    <span style={{font: 'var(--weight-regular) 13.5px/1.5 var(--font-sans)', color: 'var(--c-inv-body,#47586E)'}}>Across five industries</span>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '2px solid var(--c-inv-ac3,#2E7DF7)', paddingLeft: '14px'}}>
    <span style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#1559B8)'}}>Delivery pipeline</span>
    <span style={{font: 'var(--weight-regular) 13.5px/1.5 var(--font-sans)', color: 'var(--c-inv-body,#47586E)'}}>Research to launch, one team</span>
    </div>
    </div>
    </div>
    <div data-slab="1" data-col="five" style={{display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: '1px', background: 'var(--c-inv-line,#CFE6F8)', border: '1px solid var(--c-inv-line,#CFE6F8)', borderRadius: '8px', overflow: 'hidden'}}>
    <div data-r="1" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Clearer positioning</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', flex: '1'}}>Enterprise capability areas connected into one coherent growth narrative.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1B6FD6)'}}>Techouts</span>
    </div>
    <div data-r="1" data-r-d="60" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Stronger trust</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', flex: '1'}}>A patient journey built on education and proof, reviewed by the clinic.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1B6FD6)'}}>DermSaga</span>
    </div>
    <div data-r="1" data-r-d="120" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Better service discovery</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', flex: '1'}}>A clearer path for clients to find and book the right expert.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1B6FD6)'}}>Flyrlink</span>
    </div>
    <div data-r="1" data-r-d="180" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Faster decision-making</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', flex: '1'}}>Process transparency that helps employers self-qualify sooner.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1B6FD6)'}}>Aarniksha Solutions</span>
    </div>
    <div data-r="1" data-r-d="240" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>More connected customer journeys</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', flex: '1'}}>Heritage storytelling linked directly to collection and purchase.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1B6FD6)'}}>Advyra</span>
    </div>
    </div>
    <div data-r="1" style={{display: 'flex', justifyContent: 'flex-start'}}>
    <Link href="/work" data-cursor="grow" data-mag="0.3" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--c-inv-dot,#AFDCFF)', color: 'var(--c-inv-ac2b,#10428F)', font: 'var(--weight-medium) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '18px 28px', borderRadius: '999px', transition: 'background .4s ease,border-color .4s ease'}} className="uxvh7">View Our Work <span>→</span></Link>
    </div>
    </div>
    </section>
    
    
    <section id="contact" data-screen-label="CTA" style={{position: 'relative', zIndex: '1', padding: 'clamp(90px,15vh,200px) clamp(20px,5vw,72px)', background: 'linear-gradient(180deg,#121C2B 0%,#0B1220 100%)', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: '0', background: 'radial-gradient(70% 60% at 50% 0%,rgba(77,166,255,.16) 0%,rgba(18,28,43,0) 70%)', pointerEvents: 'none'}}></div>
    <div style={{position: 'relative', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(26px,3.6vh,42px)', textAlign: 'center'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--uxv-accent,#4DA6FF)'}}>Design. Intelligence. Growth.</div>
    <h2 data-scrub="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(30px,4.6vw,76px)', lineHeight: '1.03', letterSpacing: '-.012em', color: '#fff', margin: '0', textWrap: 'balance'}}>Bring us the problem before you bring us the brief.</h2>
    <p data-r="1" data-r-d="120" style={{font: 'var(--weight-regular) clamp(15px,1.25vw,19px)/1.7 var(--font-sans)', color: 'rgba(255,255,255,.62)', maxWidth: '62ch'}}>Tell us where your business is today, where you want to go, and what is getting in the way. UXVel will help you find the opportunity, design the experience, build the system, and create the growth path.</p>
    <div data-r="1" data-r-d="200" style={{display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center'}}>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" data-mag="0.32" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--uxv-accent,#4DA6FF)', color: '#121C2B', font: 'var(--weight-semibold) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '20px 30px', borderRadius: '999px', transition: 'box-shadow .45s ease,background .35s ease'}} className="uxvh8">Start a Project <span>↗</span></a>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" data-mag="0.32" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', font: 'var(--weight-medium) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '20px 30px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.22)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh9">Book a Strategy Call</a>
    </div>
    </div>
    </section>
    
    
    <footer data-screen-label="Footer" style={{position: 'relative', zIndex: '1', background: '#0B1220', borderTop: '1px solid rgba(255,255,255,.10)', padding: 'clamp(50px,7vh,90px) clamp(20px,5vw,72px) clamp(24px,3vh,36px)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,72px)'}}>
    <div data-col="foot" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(4,minmax(0,1fr))', gap: 'clamp(24px,3vw,48px)'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
    <Link href="/" aria-label="UxVel home" style={{display: 'flex', alignItems: 'center'}}><img src="/brand/logo-white.png" alt="UxVel" style={{height: 'clamp(26px,2.2vw,34px)', width: 'auto', display: 'block'}} /></Link>
    <p style={{font: 'var(--weight-regular) 15px/1.65 var(--font-sans)', color: 'rgba(255,255,255,.56)', maxWidth: '30ch'}}>Start with the challenge. End with momentum.</p>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" style={{font: 'var(--weight-medium) 15px/1 var(--font-sans)', color: 'var(--uxv-accent,#4DA6FF)'}}>hello@uxvel.com</a>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <div style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.36)'}}>Explore</div>
    <Link href="/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Home</Link>
    <Link href="/services" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Services</Link>
    <Link href="/process" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Process</Link>
    <Link href="/work" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Work</Link>
    <Link href="/about" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>About</Link>
    <Link href="/contact" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Contact</Link>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <div style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.36)'}}>Case studies</div>
    <Link href="/techouts" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Techouts</Link>
    <Link href="/flyrlink" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Flyrlink</Link>
    <Link href="/aarniksha-solutions" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Aarniksha Solutions</Link>
    <Link href="/dermsaga" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>DermSaga</Link>
    <Link href="/advyra" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Advyra</Link>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <div style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.36)'}}>Capabilities</div>
    <Link href="/services#research" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Strategy and Research</Link>
    <Link href="/services#design" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Experience and Design</Link>
    <Link href="/services#development" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Development</Link>
    <Link href="/services#growth" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Growth and Creative</Link>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <div style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.36)'}}>Follow</div>
    <a href="https://instagram.com/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Instagram</a>
    <a href="https://linkedin.com/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>LinkedIn</a>
    <a href="https://behance.net/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>Behance</a>
    <a href="https://x.com/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>X</a>
    <a href="https://youtube.com/" style={{fontSize: '14.5px', color: 'rgba(255,255,255,.62)'}}>YouTube</a>
    </div>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,.10)', paddingTop: '22px'}}>
    <span style={{font: 'var(--weight-regular) 13px/1 var(--font-sans)', color: 'rgba(255,255,255,.40)'}}>© 2026 UXVel. All rights reserved.</span>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,.40)'}}>Design. Intelligence. Growth.</span>
    </div>
    </div>
    </footer>
    
    </div>
  );
}
