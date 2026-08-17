'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function ProcessView() {
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
    
    
    <section data-screen-label="Process hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', minHeight: '64vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,#121C2B 100%))', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(18px,4vh,46px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(03)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>
    <div data-r="1" data-r-now="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>The UXVel growth engine</div>
    <h1 data-r="1" data-r-now="1" data-r-d="90" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(56px,9.5vw,150px)', lineHeight: '.9', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Process</h1>
    <p data-r="1" data-r-now="1" data-r-d="170" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '48ch'}}>Discover. Define. Design. Develop. Distribute. Drive.</p>
    </div>
    </div>
    </section>
    
    <section id="process" data-screen-label="Process" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px)', background: 'var(--c-process,var(--c-bg2,#121C2B))', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 'clamp(40px,6vh,80px)', maxWidth: '900px'}}>
    <h2 data-scrub="1" data-scrub-tail="3" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', margin: '0'}}>Understand the problem. Build the right system. Create momentum.</h2>
    </div>
    <div data-col="fit" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(34px,5vw,88px)', alignItems: 'center'}}>
    <div data-r="1" data-engine="1" style={{position: 'relative', width: '100%', aspectRatio: '1/1', maxWidth: 'clamp(280px,32vw,480px)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{position: 'absolute', inset: '0', borderRadius: '50%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}></div>
    <div style={{position: 'absolute', inset: '11%', borderRadius: '50%', border: '1px dashed var(--c-line2,rgba(255,255,255,.10))', animation: 'uxvSpin 120s linear infinite'}}></div>
    <div style={{position: 'absolute', inset: '27%', borderRadius: '50%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}></div>
    <div style={{position: 'absolute', inset: '27%', borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%,var(--c-accent-wash,rgba(77,166,255,.12)) 0%,transparent 70%)'}}></div>
    <svg viewBox="0 0 200 200" aria-hidden="true" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', transform: 'rotate(-90deg)', overflow: 'visible'}}>
    <circle data-engine-arc="1" cx="100" cy="100" r="100" fill="none" stroke="var(--c-accent,#4DA6FF)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="628" strokeDashoffset="628"></circle>
    </svg>
    <div data-engine-pulse="1" style={{position: 'absolute', inset: '0', pointerEvents: 'none', transition: 'transform .25s linear'}}>
    <span style={{position: 'absolute', left: '50%', top: '-4px', width: '8px', height: '8px', marginLeft: '-4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', boxShadow: '0 0 18px 4px var(--c-accent-sh,rgba(77,166,255,.34))'}}></span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(0deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="0" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(0deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>01</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(60deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="1" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-60deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>02</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(120deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="2" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-120deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>03</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(180deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="3" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-180deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>04</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(240deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="4" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-240deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>05</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(300deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="5" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#121C2B)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#4DA6FF)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-300deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>06</span>
    </div>
    <div style={{position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center', padding: '0 16%'}}>
    <div data-engine-idx="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontSize: 'clamp(44px,5.4vw,84px)', lineHeight: '.9', color: 'var(--c-h,#fff)'}}>01</div>
    <div data-engine-title="1" style={{font: 'var(--weight-semibold) 11.5px/1.4 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>Discover</div>
    <div style={{width: '26px', height: '1px', background: 'var(--c-line,rgba(255,255,255,.16))'}}></div>
    <div style={{font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>SIX STAGES</div>
    </div>
    </div>
    <div data-r="1" data-r-d="120" style={{display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-step-row="1" data-i="0" data-title="Discover" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>01</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Discover</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Research the business, market, users, and opportunity.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="1" data-title="Define" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>02</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Define</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Clarify the positioning, strategy, and priorities.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="2" data-title="Design" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>03</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Design</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Create the experience, content, and visual system.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="3" data-title="Develop" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>04</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Develop</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Build fast, scalable, secure technology.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="4" data-title="Distribute" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>05</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Distribute</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Launch content, social, advertising, and video.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="5" data-title="Drive" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#4DA6FF)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>06</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Drive</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Generate leads, measure performance, and optimize.</p>
    </div>
    </div>
    </div>
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
