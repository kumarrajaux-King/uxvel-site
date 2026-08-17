'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function AarnikshaView() {
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
    
    <section data-screen-label="Case study hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', minHeight: '64vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,#121C2B 100%))', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(18px,4vh,46px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>CASE STUDY</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>
    <div data-r="1" data-r-now="1" style={{display: 'flex', alignItems: 'center', gap: '8px', font: 'var(--weight-medium) 11.5px/1 var(--font-mono)', letterSpacing: '.06em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}><Link href="/" data-cursor="grow" style={{color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Home</Link><span>/</span><Link href="/work" data-cursor="grow" style={{color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Work</Link><span>/</span><span style={{color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Aarniksha Solutions</span></div>
    <div data-r="1" data-r-now="1" data-r-d="60" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>Recruitment, staffing, workforce solutions</div>
    <h1 data-r="1" data-r-now="1" data-r-d="120" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(34px,5.2vw,76px)', lineHeight: '1.04', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance', maxWidth: '20ch'}}>Designing Trust Into the Talent Economy</h1>
    <p data-r="1" data-r-now="1" data-r-d="180" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '58ch'}}>UXVel framed Aarniksha as a long-term workforce partner by connecting employer needs, service clarity, industry expertise, process transparency, and candidate opportunity.</p>
    <div data-r="1" data-r-now="1" data-r-d="240"><a href="https://aarnikshasolutions.com/" target="_blank" rel="noopener noreferrer" data-cursor="grow" data-mag="0.28" style={{display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'var(--c-h,#fff)', font: 'var(--weight-medium) 13px/1 var(--font-sans)', letterSpacing: '.04em', padding: '13px 22px', borderRadius: '999px', border: '1px solid var(--c-line,rgba(255,255,255,.16))', transition: 'border-color .35s ease,background .35s ease'}} className="uxvh2">Visit Aarniksha Solutions <span>↗</span></a></div>
    </div>
    </div>
    </section>
    
    <section data-screen-label="Cover" style={{position: 'relative', zIndex: '1', padding: 'clamp(50px,7vh,90px) clamp(20px,5vw,72px) 0', background: 'var(--c-bg,#0B1220)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,48px)'}}>
    <div data-r="1" style={{position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}><img src="/work/aarniksha-solutions.jpg" alt="Aarniksha Solutions case study cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} /></div>
    <div data-col="fit" data-r="1" data-r-d="80" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 'clamp(20px,3vw,40px)', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: 'clamp(22px,3vh,34px)'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}><span style={{font: 'var(--weight-semibold) 10.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Client</span><span style={{font: 'var(--weight-medium) 15px/1.4 var(--font-display)', color: 'var(--c-h,#fff)'}}>Aarniksha Solutions</span></div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}><span style={{font: 'var(--weight-semibold) 10.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Industry</span><span style={{font: 'var(--weight-regular) 14.5px/1.4 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))'}}>Recruitment, staffing, workforce solutions</span></div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}><span style={{font: 'var(--weight-semibold) 10.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Scope</span><span style={{font: 'var(--weight-regular) 14.5px/1.4 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))'}}>Positioning, content architecture, website</span></div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}><span style={{font: 'var(--weight-semibold) 10.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>Technology</span><span style={{font: 'var(--weight-regular) 14.5px/1.4 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))'}}>Web platform</span></div>
    </div>
    </div>
    </section>
    
    <section data-screen-label="Narrative" style={{position: 'relative', zIndex: '1', padding: 'clamp(70px,10vh,130px) clamp(20px,5vw,72px)', background: 'var(--c-bg,#0B1220)'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'start'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))', paddingTop: '10px'}}>(01)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(46px,6vh,80px)', minWidth: '0', maxWidth: '74ch'}}>
    <div data-r="1" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2vw,32px)', lineHeight: '1.1', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Context</h2>
    <p style={{font: 'var(--weight-regular) clamp(15px,1.15vw,17.5px)/1.75 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Aarniksha Solutions provides recruitment, staffing, and workforce services to employers across industries.</p>
    </div>
    <div data-r="1" data-r-d="60" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2vw,32px)', lineHeight: '1.1', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>The tension</h2>
    <p style={{font: 'var(--weight-regular) clamp(15px,1.15vw,17.5px)/1.75 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>The digital story for a staffing partner needed to speak to two very different audiences at once — employers with a hiring problem, and candidates evaluating an opportunity — without diluting either message.</p>
    </div>
    <div data-r="1" data-r-d="120" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2vw,32px)', lineHeight: '1.1', letterSpacing: '.004em', color: 'var(--c-accent,#4DA6FF)', margin: '0'}}>The insight</h2>
    <p style={{font: 'var(--weight-regular) clamp(15px,1.15vw,17.5px)/1.75 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Trust in staffing is built on transparency: employers commit faster when the process, expertise, and track record are visible up front, not discovered mid-conversation.</p>
    </div>
    <div data-r="1" data-r-d="180" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2vw,32px)', lineHeight: '1.1', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>The intervention</h2>
    <p style={{font: 'var(--weight-regular) clamp(15px,1.15vw,17.5px)/1.75 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>UXVel connected employer needs, service architecture, industry expertise, process transparency, leadership, careers, and enquiry into a more confident path from hiring challenge to consultation.</p>
    </div>
    </div>
    </div>
    </section>
    
    <section data-screen-label="System" style={{position: 'relative', zIndex: '1', padding: '0 clamp(20px,5vw,72px) clamp(70px,10vh,130px)', background: 'var(--c-bg,#0B1220)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div data-col="idx" style={{display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(30px,4.5vh,54px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(02)</div>
    <h2 data-scrub="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(26px,3.2vw,50px)', lineHeight: '1.1', letterSpacing: '-.006em', color: 'var(--c-h,#fff)', margin: '0', maxWidth: '22ch'}}>The system</h2>
    </div>
    <div data-slab="1" data-col="fit" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '2px', overflow: 'hidden'}}>
    <div data-r="1" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(24px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: 'clamp(160px,16vw,200px)'}}><h3 style={{font: 'var(--weight-semibold) 15.5px/1.3 var(--font-display)', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>User journey</h3><p style={{font: 'var(--weight-regular) 14px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Distinct paths for employers and candidates from the homepage down.</p></div>
    <div data-r="1" data-r-d="60" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(24px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: 'clamp(160px,16vw,200px)'}}><h3 style={{font: 'var(--weight-semibold) 15.5px/1.3 var(--font-display)', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Information architecture</h3><p style={{font: 'var(--weight-regular) 14px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Services, industries, and process organized for quick self-qualification.</p></div>
    <div data-r="1" data-r-d="120" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(24px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: 'clamp(160px,16vw,200px)'}}><h3 style={{font: 'var(--weight-semibold) 15.5px/1.3 var(--font-display)', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Content</h3><p style={{font: 'var(--weight-regular) 14px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>Process-transparent copy replacing generic staffing-agency language.</p></div>
    <div data-r="1" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(24px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: 'clamp(160px,16vw,200px)'}}><h3 style={{font: 'var(--weight-semibold) 15.5px/1.3 var(--font-display)', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Lead flow</h3><p style={{font: 'var(--weight-regular) 14px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))'}}>A direct route from service page to consultation enquiry.</p></div>
    </div>
    </div>
    </section>
    
    <section data-screen-label="Outcomes" style={{position: 'relative', zIndex: '1', padding: '0 clamp(20px,5vw,72px) clamp(70px,10vh,130px)', background: 'var(--c-bg,#0B1220)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)'}}>
    <div data-col="idx" style={{display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(03)</div>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(26px,3.2vw,50px)', lineHeight: '1.1', letterSpacing: '-.006em', color: 'var(--c-h,#fff)', margin: '0'}}>Outcomes</h2>
    </div>
    <div data-col="fit" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(14px,1.6vw,20px)'}}>
    <div data-r="1" style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '12px', padding: '20px 22px'}}><span style={{width: '7px', height: '7px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none'}}></span><span style={{font: 'var(--weight-medium) 15px/1.3 var(--font-display)', color: 'var(--c-h,#fff)'}}>Clearer positioning</span></div>
    <div data-r="1" data-r-d="60" style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '12px', padding: '20px 22px'}}><span style={{width: '7px', height: '7px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none'}}></span><span style={{font: 'var(--weight-medium) 15px/1.3 var(--font-display)', color: 'var(--c-h,#fff)'}}>Better service discovery</span></div>
    <div data-r="1" data-r-d="120" style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c-bg2,#121C2B)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '12px', padding: '20px 22px'}}><span style={{width: '7px', height: '7px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none'}}></span><span style={{font: 'var(--weight-medium) 15px/1.3 var(--font-display)', color: 'var(--c-h,#fff)'}}>Faster decision-making</span></div>
    </div>
    <p data-r="1" style={{font: 'var(--weight-regular) 13px/1.6 var(--font-sans)', color: 'var(--c-muted,rgba(255,255,255,.38))', fontStyle: 'italic'}}>Verified metrics are added once confirmed by the client.</p>
    </div>
    </section>
    
    <section data-screen-label="Gallery" style={{position: 'relative', zIndex: '1', padding: '0 clamp(20px,5vw,72px) clamp(80px,12vh,150px)', background: 'var(--c-bg,#0B1220)'}}>
    <div data-col="fit" style={{maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(20px,2.6vw,32px)'}}>
    <div data-r="1" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}><div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}><img src="/work/aarniksha-solutions-1.jpg" alt="Employer services overview" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} /></div><span style={{font: 'var(--weight-medium) 12.5px/1.4 var(--font-sans)', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Employer services overview</span></div>
    <div data-r="1" data-r-d="60" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}><div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}><img src="/work/aarniksha-solutions-2.jpg" alt="Process transparency section" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} /></div><span style={{font: 'var(--weight-medium) 12.5px/1.4 var(--font-sans)', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Process transparency section</span></div>
    <div data-r="1" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}><div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}><img src="/work/aarniksha-solutions-3.jpg" alt="Enquiry flow" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} /></div><span style={{font: 'var(--weight-medium) 12.5px/1.4 var(--font-sans)', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Enquiry flow</span></div>
    <div data-r="1" data-r-d="60" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}><div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}><img src="/work/aarniksha-solutions-4.jpg" alt="Industry expertise pages" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} /></div><span style={{font: 'var(--weight-medium) 12.5px/1.4 var(--font-sans)', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Industry expertise pages</span></div>
    </div>
    </section>
    
    <section id="contact" data-screen-label="CTA" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px)', background: 'linear-gradient(180deg,#121C2B 0%,#0B1220 100%)', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: '0', background: 'radial-gradient(70% 60% at 50% 0%,rgba(77,166,255,.16) 0%,rgba(18,28,43,0) 70%)', pointerEvents: 'none'}}></div>
    <div style={{position: 'relative', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(24px,3.4vh,38px)', textAlign: 'center'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--uxv-accent,#4DA6FF)'}}>Have a complex challenge?</div>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,4vw,58px)', lineHeight: '1.06', letterSpacing: '-.01em', color: '#fff', margin: '0'}}>Bring us the problem before you bring us the brief.</h2>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" data-mag="0.32" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--uxv-accent,#4DA6FF)', color: '#121C2B', font: 'var(--weight-semibold) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '19px 29px', borderRadius: '999px', transition: 'box-shadow .45s ease,background .35s ease'}} className="uxvh8">Start a Project <span>↗</span></a>
    <div data-r="1" data-r-d="100" style={{display: 'flex', flexWrap: 'wrap', gap: '22px', justifyContent: 'center', marginTop: '8px', paddingTop: '26px', borderTop: '1px solid rgba(255,255,255,.14)', width: '100%', maxWidth: '520px'}}>
    <Link href="/dermsaga" data-cursor="grow" style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', font: 'var(--weight-medium) 13px/1 var(--font-sans)', letterSpacing: '.02em'}}>Next project: DermSaga <span>→</span></Link>
    <Link href="/work" data-cursor="grow" style={{color: 'rgba(255,255,255,.5)', font: 'var(--weight-medium) 13px/1 var(--font-sans)', letterSpacing: '.02em'}}>View all work</Link>
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
