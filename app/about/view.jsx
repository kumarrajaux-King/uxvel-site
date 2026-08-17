'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function AboutView() {
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
    
    
    <section data-screen-label="About hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', minHeight: '64vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,#121C2B 100%))', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(18px,4vh,46px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(01)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>
    <div data-r="1" data-r-now="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>Design. Intelligence. Growth.</div>
    <h1 data-r="1" data-r-now="1" data-r-d="90" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(56px,9.5vw,150px)', lineHeight: '.9', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>About</h1>
    <p data-r="1" data-r-now="1" data-r-d="170" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '48ch'}}>Start with the challenge. End with momentum.</p>
    </div>
    </div>
    </section>
    
    <section data-vh="1" id="about" data-screen-label="Problem" data-hero-pad="1" style={{position: 'relative', zIndex: '1', background: 'var(--c-problem,linear-gradient(180deg,rgba(11,18,32,.04) 0%,rgba(11,18,32,.62) 100%))', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'start'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))', paddingTop: '10px'}}>(01)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(26px,3.6vh,44px)', minWidth: '0'}}>
    <h2 data-scrub="1" data-scrub-tail="3" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.4vw,52px)', lineHeight: '1.08', letterSpacing: '.005em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', maxWidth: '26ch', margin: '0'}}>Growth becomes difficult when everything is disconnected.</h2>
    <div data-col="two" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'start'}}>
    <p data-r="1" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.72 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '52ch'}}>Many businesses have separate teams for strategy, design, development, marketing, and sales. UXVel connects every stage into one clear system so ideas move faster and opportunities do not get lost between departments.</p>
    <div data-r="1" data-r-d="120" style={{display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div style={{padding: '16px 0', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-h,#fff)'}}>Design.</div>
    <div style={{padding: '16px 0', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-h,#fff)'}}>Intelligence.</div>
    <div style={{padding: '16px 0', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-accent,#4DA6FF)'}}>Growth.</div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section data-screen-label="Clients" style={{position: 'relative', zIndex: '1', background: 'var(--c-strip,rgba(11,18,32,.55))', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--c-line,rgba(255,255,255,.16))', borderBottom: '1px solid var(--c-line,rgba(255,255,255,.16))', padding: 'clamp(24px,3.2vw,40px) 0'}}>
    <div style={{display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(18px,3vw,44px)', alignItems: 'center'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11px/1.5 var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', maxWidth: '14ch', paddingLeft: 'clamp(20px,5vw,72px)'}}>Trusted by teams building what is next</div>
    <div data-r="1" data-r-d="140" style={{overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent 0,#000 5%,#000 92%,transparent 100%)'}}>
    <div style={{display: 'flex', width: 'max-content', animation: 'uxvMarquee 26s linear infinite'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 'clamp(24px,4vw,60px)', paddingRight: 'clamp(24px,4vw,60px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Techouts</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Flyrlink</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Aarniksha Solutions</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>DermSaga</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Advyra</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    </div>
    <div aria-hidden="true" style={{display: 'flex', alignItems: 'center', gap: 'clamp(24px,4vw,60px)', paddingRight: 'clamp(24px,4vw,60px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Techouts</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Flyrlink</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Aarniksha Solutions</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>DermSaga</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Advyra</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FD8FF)', flex: 'none'}}></span>
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
