'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function HomeView() {
  const { rootRef, toggleMenu, closeMenu, toggleTheme } = useSite({ intro: true });

  return (
    <div ref={rootRef} style={{position: 'relative', background: 'var(--c-bg,#0E1413)', color: 'var(--c-body,var(--c-body,rgba(255,255,255,.62)))', fontFamily: 'var(--font-sans)'}}>
    
    <div aria-hidden="true" style={{display: 'none'}}>
    <img data-logo-white="1" src="/brand/logo-white.png" alt="" />
    <img data-logo-ink="1" src="/brand/logo-ink.png" alt="" />
    </div>
    
    
    
    <div data-rail="1" style={{position: 'fixed', right: 'clamp(14px,2.2vw,30px)', top: '50%', transform: 'translateY(-50%)', zIndex: '60', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', pointerEvents: 'none', mixBlendMode: 'difference'}}>
    <div style={{font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-h,#fff)'}} data-rail-pct="1">0%</div>
    <div style={{position: 'relative', width: '1px', height: 'min(30vh,220px)', background: 'var(--c-line,rgba(255,255,255,.16))'}}>
    <div data-rail-fill="1" style={{position: 'absolute', left: '-1px', top: '0', width: '3px', height: '0%', background: 'var(--c-lime,#7FEAEA)'}}></div>
    </div>
    <div style={{writingMode: 'vertical-rl', fontSize: '9.5px', letterSpacing: '.34em', textTransform: 'uppercase', color: 'var(--c-body2,rgba(255,255,255,.56))', fontWeight: '500'}}>Scroll to discover</div>
    </div>
    
    <header style={{position: 'fixed', top: '0', left: '0', right: '0', zIndex: '70', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(18px,2.4vw,30px) clamp(20px,5vw,72px)', transition: 'background .5s ease,backdrop-filter .5s ease,padding .5s ease'}} data-nav="1">
    <Link href="/" data-cursor="grow" aria-label="UxVel home" style={{display: 'flex', alignItems: 'center'}}><img data-logo="1" src="/brand/logo-white.png" alt="UxVel" style={{height: 'clamp(22px,1.9vw,29px)', width: 'auto', display: 'block'}} /></Link>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
    <button onClick={toggleTheme} data-cursor="grow" data-mag="0.18" aria-label="Toggle colour theme" style={{display: 'flex', alignItems: 'center', gap: '9px', background: 'var(--c-accent-wash,var(--c-accent-wash,rgba(107,213,198,.12)))', border: '1px solid var(--c-line,var(--c-line,rgba(255,255,255,.16)))', borderRadius: '999px', padding: '11px 17px', cursor: 'pointer', font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', backdropFilter: 'blur(10px)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh1">
    <span style={{width: '13px', height: '13px', borderRadius: '50%', border: '1.5px solid var(--c-accent,#6BD5C6)', background: 'linear-gradient(90deg,var(--c-accent,#6BD5C6) 0 50%,transparent 50% 100%)', display: 'block', flex: 'none'}}></span>
    <span data-theme-label="1">Light</span>
    </button>
    <button onClick={toggleMenu} data-cursor="grow" data-mag="0.22" aria-label="Open menu" style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c-line2,rgba(255,255,255,.10))', border: '1px solid var(--c-line,rgba(255,255,255,.16))', borderRadius: '999px', padding: '11px 18px 11px 20px', cursor: 'pointer', font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', backdropFilter: 'blur(10px)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh2">
    <span data-menu-label="1">Menu</span>
    <span style={{display: 'flex', flexDirection: 'column', gap: '4px', width: '16px'}}>
    <span data-bar="1" style={{display: 'block', height: '1.5px', background: 'var(--c-accent,#6BD5C6)', transition: 'transform .45s cubic-bezier(.7,0,.2,1)'}}></span>
    <span data-bar="2" style={{display: 'block', height: '1.5px', background: 'var(--c-accent,#6BD5C6)', transition: 'transform .45s cubic-bezier(.7,0,.2,1)'}}></span>
    </span>
    </button>
    </div>
    </header>
    
    <div data-menu="1" style={{position: 'fixed', inset: '0', zIndex: '65', background: 'var(--c-menu,var(--c-bg2,#17211F))', opacity: '0', pointerEvents: 'none', transform: 'translate3d(0,-100%,0)', transition: 'transform .8s cubic-bezier(.76,0,.24,1),opacity .5s ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(90px,12vh,150px) clamp(20px,5vw,72px) clamp(30px,5vh,60px)'}}>
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
    <a href="mailto:hello@uxvel.com" data-cursor="grow" style={{font: 'var(--weight-medium) clamp(15px,1.3vw,19px)/1.4 var(--font-sans)', color: 'var(--c-accent,#6BD5C6)'}}>hello@uxvel.com</a>
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
    
    <video data-hero-video="1" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4" autoPlay muted loop playsInline style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', objectFit: 'cover', zIndex: '0', opacity: 'var(--c-video,1)', filter: 'saturate(0.18) contrast(1.14) brightness(0.92)'}}></video>
    <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', zIndex: '0', pointerEvents: 'none', background: 'var(--c-hero,linear-gradient(90deg,rgba(8,20,18,.86) 0%,rgba(8,20,18,.52) 44%,rgba(8,20,18,.18) 100%))'}}></div>
    
    <section data-vh="1" id="hero" data-screen-label="Hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '720px'}}>
    <h2 style={{display: 'flex', flexWrap: 'wrap', gap: '0.25em', fontFamily: '\'Instrument Serif\',Georgia,serif', fontSize: 'clamp(26px,3vw,42px)', fontWeight: '400', lineHeight: '1.08', letterSpacing: '.005em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', margin: '0'}}>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="150">WE</span>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="230">BUILD</span>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="310">END-TO-END</span>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="390">AI</span>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="470">AUTOMATION</span>
    <span data-r="1" data-r-now="1" data-r-y="32" data-r-d="550">SYSTEMS.</span>
    </h2>
    <p data-r="1" data-r-now="1" data-r-d="900" style={{marginTop: '24px', fontFamily: '\'Helvetica Now Var\',\'Helvetica Neue\',Helvetica,Arial,sans-serif', fontSize: '14px', lineHeight: '1.65', color: 'var(--c-hi,rgba(255,255,255,.85))', maxWidth: '260px'}}>We provide all-in-one AI automation services in one place.</p>
    <div data-r="1" data-r-now="1" data-r-d="1060" style={{display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginTop: '34px'}}>
    <Link href="/contact" data-cursor="grow" data-mag="0.3" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--c-accent,#6BD5C6)', color: 'var(--c-on-accent,#17211F)', font: 'var(--weight-semibold) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '18px 27px', borderRadius: '999px', transition: 'box-shadow .45s ease,background .35s ease'}} className="uxvh4">Start a Project<span style={{fontSize: '15px'}}>↗</span></Link>
    <Link href="/work" data-cursor="grow" data-mag="0.3" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--c-h,#fff)', font: 'var(--weight-medium) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '18px 27px', borderRadius: '999px', border: '1px solid var(--c-line,rgba(255,255,255,.16))', backdropFilter: 'blur(6px)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh2">View Our Work</Link>
    </div>
    </div>
    </section>
    
    <section data-screen-label="Clients" style={{position: 'relative', zIndex: '1', background: 'var(--c-strip,rgba(14,20,19,.55))', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--c-line,rgba(255,255,255,.16))', borderBottom: '1px solid var(--c-line,rgba(255,255,255,.16))', padding: 'clamp(24px,3.2vw,40px) 0'}}>
    <div style={{display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(18px,3vw,44px)', alignItems: 'center'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11px/1.5 var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', maxWidth: '14ch', paddingLeft: 'clamp(20px,5vw,72px)'}}>Trusted by teams building what is next</div>
    <div data-r="1" data-r-d="140" style={{overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent 0,#000 5%,#000 92%,transparent 100%)'}}>
    <div style={{display: 'flex', width: 'max-content', animation: 'uxvMarquee 26s linear infinite'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 'clamp(24px,4vw,60px)', paddingRight: 'clamp(24px,4vw,60px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Techouts</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Flyrlink</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Aarniksha Solutions</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>DermSaga</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Advyra</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    </div>
    <div aria-hidden="true" style={{display: 'flex', alignItems: 'center', gap: 'clamp(24px,4vw,60px)', paddingRight: 'clamp(24px,4vw,60px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Techouts</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Flyrlink</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Aarniksha Solutions</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>DermSaga</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.012em', color: 'var(--c-body3,rgba(255,255,255,.66))', whiteSpace: 'nowrap'}}>Advyra</span><span style={{width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lime,#7FEAEA)', flex: 'none'}}></span>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section data-vh="1" id="about" data-screen-label="Problem" data-hero-pad="1" style={{position: 'relative', zIndex: '1', background: 'var(--c-problem,linear-gradient(180deg,rgba(14,20,19,.04) 0%,rgba(14,20,19,.62) 100%))', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'start'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))', paddingTop: '10px'}}>(01)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(26px,3.6vh,44px)', minWidth: '0'}}>
    <h2 data-scrub="1" data-scrub-tail="3" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.4vw,52px)', lineHeight: '1.08', letterSpacing: '.005em', textTransform: 'uppercase', color: 'var(--c-h,#fff)', maxWidth: '26ch', margin: '0'}}>Growth becomes difficult when everything is disconnected.</h2>
    <div data-col="two" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'start'}}>
    <p data-r="1" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.72 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '52ch'}}>Many businesses have separate teams for strategy, design, development, marketing, and sales. UXVel connects every stage into one clear system so ideas move faster and opportunities do not get lost between departments.</p>
    <div data-r="1" data-r-d="120" style={{display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div style={{padding: '16px 0', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-h,#fff)'}}>Design.</div>
    <div style={{padding: '16px 0', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-h,#fff)'}}>Intelligence.</div>
    <div style={{padding: '16px 0', font: 'var(--weight-semibold) clamp(17px,1.7vw,26px)/1 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-accent,#6BD5C6)'}}>Growth.</div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section id="services" data-screen-label="Services" style={{position: 'relative', zIndex: '1', padding: 'clamp(70px,10vh,140px) clamp(20px,5vw,72px) clamp(80px,12vh,160px)', background: 'var(--c-services,linear-gradient(180deg,#0E1413 0%,var(--c-bg2,#17211F) 100%))'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div data-col="idx" style={{display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(38px,5.5vh,72px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(02)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '0'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>One partner. Every stage of growth.</div>
    <h2 data-scrub="1" data-scrub-tail="4" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', maxWidth: '24ch', margin: '0'}}>From the first insight to the next stage of growth.</h2>
    </div>
    </div>
    <div data-slab="1" data-col="three" style={{display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '2px', overflow: 'hidden'}}>
    <div data-r="1" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>01</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Research</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>UX research, competitor and market research, user interviews, and workshops that uncover the real problem before anything gets designed.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    <div data-r="1" data-r-d="70" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>02</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>UX</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Personas, user journeys, mindmaps, sitemaps, and product strategy that turn research into a clear, buildable plan.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    <div data-r="1" data-r-d="140" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>03</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Design</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Figma UI design and design systems for web, product, and mobile — built for consistency as the business scales.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    <div data-r="1" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>04</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Development</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Next.js, Shopify, Webflow, Framer, WordPress, and custom SaaS builds — fast, scalable, and secure.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    <div data-r="1" data-r-d="70" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>05</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Marketing</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Social, Meta and Google campaigns, SEO content, and AI-assisted video production that carry the brand into the market.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    <div data-r="1" data-r-d="140" data-card="1" data-cursor="grow" style={{background: 'var(--c-card,#0E1413)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>06</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Growth</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Landing pages, CRM, lead capture, and conversion optimization that turn traffic and attention into pipeline.</p>
    <Link href="/services" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></Link>
    </div>
    </div>
    </div>
    </section>
    
    <section id="process" data-screen-label="Process" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px)', background: 'var(--c-process,var(--c-bg2,#17211F))', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 'clamp(40px,6vh,80px)', maxWidth: '900px'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>The UXVel growth engine</div>
    <h2 data-scrub="1" data-scrub-tail="3" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', margin: '0'}}>Understand the problem. Build the right system. Create momentum.</h2>
    </div>
    <div data-col="fit" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(34px,5vw,88px)', alignItems: 'center'}}>
    <div data-r="1" data-engine="1" style={{position: 'relative', width: '100%', aspectRatio: '1/1', maxWidth: 'clamp(280px,32vw,480px)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{position: 'absolute', inset: '0', borderRadius: '50%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}></div>
    <div style={{position: 'absolute', inset: '11%', borderRadius: '50%', border: '1px dashed var(--c-line2,rgba(255,255,255,.10))', animation: 'uxvSpin 120s linear infinite'}}></div>
    <div style={{position: 'absolute', inset: '27%', borderRadius: '50%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}></div>
    <div style={{position: 'absolute', inset: '27%', borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%,var(--c-accent-wash,rgba(107,213,198,.12)) 0%,transparent 70%)'}}></div>
    <svg viewBox="0 0 200 200" aria-hidden="true" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', transform: 'rotate(-90deg)', overflow: 'visible'}}>
    <circle data-engine-arc="1" cx="100" cy="100" r="100" fill="none" stroke="var(--c-accent,#6BD5C6)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="628" strokeDashoffset="628"></circle>
    </svg>
    <div data-engine-pulse="1" style={{position: 'absolute', inset: '0', pointerEvents: 'none', transition: 'transform .25s linear'}}>
    <span style={{position: 'absolute', left: '50%', top: '-4px', width: '8px', height: '8px', marginLeft: '-4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', boxShadow: '0 0 18px 4px var(--c-accent-sh,rgba(107,213,198,.34))'}}></span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(0deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="0" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(0deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>01</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(60deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="1" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-60deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>02</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(120deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="2" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-120deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>03</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(180deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="3" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-180deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>04</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(240deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="4" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-240deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>05</span>
    </div>
    <div style={{position: 'absolute', inset: '0', transform: 'rotate(300deg)', pointerEvents: 'none'}}>
    <span data-engine-node="1" data-i="5" style={{position: 'absolute', left: '50%', top: '-7px', width: '14px', height: '14px', marginLeft: '-7px', borderRadius: '50%', background: 'var(--c-process,#17211F)', border: '1.5px solid var(--c-line,rgba(255,255,255,.16))', pointerEvents: 'auto', cursor: 'pointer', transition: 'background .5s ease,border-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)'}}>
    <span data-engine-ping="1" style={{display: 'none', position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid var(--c-accent,#6BD5C6)', animation: 'uxvPing 2.2s cubic-bezier(.2,.8,.2,1) infinite'}}></span>
    </span>
    <span data-engine-label="1" style={{position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%) rotate(-300deg)', font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))', transition: 'color .5s ease'}}>06</span>
    </div>
    <div style={{position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center', padding: '0 16%'}}>
    <div data-engine-idx="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontSize: 'clamp(44px,5.4vw,84px)', lineHeight: '.9', color: 'var(--c-h,#fff)'}}>01</div>
    <div data-engine-title="1" style={{font: 'var(--weight-semibold) 11.5px/1.4 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>Discover</div>
    <div style={{width: '26px', height: '1px', background: 'var(--c-line,rgba(255,255,255,.16))'}}></div>
    <div style={{font: 'var(--weight-medium) 11px/1 var(--font-mono)', letterSpacing: '.16em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>SIX STAGES</div>
    </div>
    </div>
    <div data-r="1" data-r-d="120" style={{display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-step-row="1" data-i="0" data-title="Discover" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>01</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Discover</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Research the business, market, users, and opportunity.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="1" data-title="Define" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>02</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Define</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Clarify the positioning, strategy, and priorities.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="2" data-title="Design" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>03</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Design</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Create the experience, content, and visual system.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="3" data-title="Develop" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>04</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Develop</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Build fast, scalable, secure technology.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="4" data-title="Distribute" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>05</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Distribute</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Launch content, social, advertising, and video.</p>
    </div>
    </div>
    <div data-step-row="1" data-i="5" data-title="Drive" data-cursor="grow" style={{position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(14px,1.6vw,26px)', alignItems: 'baseline', padding: 'clamp(15px,1.7vh,22px) 0 clamp(15px,1.7vh,22px) 20px', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', cursor: 'pointer', opacity: '.42', transition: 'opacity .45s ease'}}>
    <span data-step-bar="1" style={{position: 'absolute', left: '0', top: '-1px', bottom: '0', width: '2px', background: 'var(--c-accent,#6BD5C6)', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform .55s cubic-bezier(.2,.8,.2,1)'}}></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#6BD5C6)'}}>06</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0'}}>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(22px,2.1vw,32px)', lineHeight: '1.05', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Drive</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.6 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '42ch'}}>Generate leads, measure performance, and optimize.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <div data-pin-wrap="1" style={{position: 'relative', zIndex: '1', background: 'var(--c-inv,#F6FDFC)'}}>
    <div data-pin-sticky="1" style={{position: 'sticky', top: '0', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(var(--c-inv-dot,#A7E9E2) 1px,transparent 1px)', backgroundSize: '30px 30px', opacity: '.3', pointerEvents: 'none'}}></div>
    <div style={{position: 'relative', padding: 'clamp(18px,3.4vh,40px) clamp(20px,5vw,72px) clamp(12px,2vh,22px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,22px)', maxWidth: '1440px', margin: '0 auto', width: '100%'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '18px'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
    <div style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#16786A)'}}>Four capability groups</div>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(25px,3.2vw,50px)', lineHeight: '1.06', letterSpacing: '-.008em', color: 'var(--c-inv-h,#123A33)', maxWidth: '24ch', margin: '0'}}>The capabilities behind meaningful digital growth.</h2>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#16786A)'}}>Swipe to explore <span data-pin-arrow="1" style={{display: 'inline-block', transition: 'transform .4s ease'}}>→</span></div>
    </div>
    <div style={{position: 'relative', height: '2px', background: 'var(--c-inv-line,#C8F2ED)', borderRadius: '2px', overflow: 'hidden'}}>
    <div data-pin-bar="1" style={{position: 'absolute', left: '0', top: '0', height: '100%', width: '0%', background: 'var(--c-lime,#7FEAEA)'}}></div>
    </div>
    </div>
    <div style={{position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(16px,3vh,34px)'}}>
    <div data-pin-track="1" style={{display: 'flex', gap: 'clamp(16px,1.6vw,26px)', padding: '0 clamp(20px,5vw,72px)', width: 'max-content', alignItems: 'stretch', willChange: 'transform'}}>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#C8F2ED)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.16" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>RESEARCH</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E3F8F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{width: '16px', height: '16px', border: '1.5px solid var(--c-inv-ac,#1E8C7A)', borderRadius: '50%', display: 'block'}}></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1E8C7A)'}}>A1 · 01/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Strategy and Research</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', maxWidth: '30ch'}}>Uncover the real problem before anything gets designed.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#DFF6F2)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>UX research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Competitor research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Market research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>User interviews</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Brainstorming</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Miro workshops</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Personas</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>User journeys</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Mindmaps</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Sitemaps</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Product strategy</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#C8F2ED)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.21" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>DESIGN</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E3F8F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{width: '14px', height: '14px', border: '1.5px solid var(--c-inv-ac,#1E8C7A)', display: 'block', transform: 'rotate(45deg)'}}></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1E8C7A)'}}>A2 · 02/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Experience and Design</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', maxWidth: '30ch'}}>Turn research into a clear, buildable plan.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#DFF6F2)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>UX/UI design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Figma prototypes</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Design systems</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Brand identity</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Responsive design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>SaaS dashboards</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Mobile app design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Developer handoff</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#C8F2ED)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.26" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>BUILD</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E3F8F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{display: 'flex', flexDirection: 'column', gap: '3px'}}><span style={{width: '16px', height: '1.5px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span><span style={{width: '11px', height: '1.5px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span><span style={{width: '16px', height: '1.5px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1E8C7A)'}}>A3 · 03/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Development</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', maxWidth: '30ch'}}>Fast, scalable, and secure technology.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#DFF6F2)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Next.js</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Shopify</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Webflow</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Framer</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>WordPress</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Custom SaaS products</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Headless CMS</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>API integrations</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>AI-powered products</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#C8F2ED)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.31" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>GROWTH</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E3F8F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{display: 'flex', alignItems: 'flex-end', gap: '3px'}}><span style={{width: '3px', height: '7px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span><span style={{width: '3px', height: '12px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span><span style={{width: '3px', height: '17px', background: 'var(--c-inv-ac,#1E8C7A)', display: 'block'}}></span></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1E8C7A)'}}>A4 · 04/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Growth and Creative</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', maxWidth: '30ch'}}>Carry the brand into the market.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#DFF6F2)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Social media strategy</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Meta campaigns</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Google campaigns</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Landing pages</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>SEO content</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Lead generation</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Adobe Photoshop</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Illustrator</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>After Effects</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>Premiere Pro</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#374743)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#6BD5C6)', flex: 'none', transform: 'translateY(-3px)'}}></span>AI video and Higgsfield workflows</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div style={{position: 'relative', zIndex: '1', background: '#F6FDFC', borderTop: '1px solid var(--c-inv-line,#C8F2ED)', borderBottom: '1px solid var(--c-inv-line,#C8F2ED)', overflow: 'hidden', padding: 'clamp(18px,2.4vw,30px) 0'}}>
    <div style={{display: 'flex', width: 'max-content', animation: 'uxvMarquee 34s linear infinite'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 'clamp(28px,3.6vw,58px)', paddingRight: 'clamp(28px,3.6vw,58px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Next.js</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Shopify</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Webflow</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Framer</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>WordPress</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Figma</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Miro</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Adobe</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Meta</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Google</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Higgsfield</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    </div>
    <div aria-hidden="true" style={{display: 'flex', alignItems: 'center', gap: 'clamp(28px,3.6vw,58px)', paddingRight: 'clamp(28px,3.6vw,58px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Next.js</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Shopify</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Webflow</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Framer</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>WordPress</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Figma</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Miro</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Adobe</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Meta</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Google</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Higgsfield</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2FAF97)'}}></span>
    </div>
    </div>
    </div>
    
    <section id="work" data-screen-label="Work" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px) 0', background: 'var(--c-work,#0E1413)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 'clamp(38px,5.5vh,72px)', maxWidth: '880px'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>Selected work. Built for momentum.</div>
    <h2 data-scrub="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', margin: '0'}}>Different challenges. One standard of clarity.</h2>
    </div>
    <div data-stack="1" style={{display: 'flex', flexDirection: 'column', gap: 'clamp(20px,3vh,40px)', paddingBottom: 'clamp(30px,6vh,80px)'}}>
    <Link data-col="split" href="/techouts" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '96px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#17211F)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#6BD5C6)'}}>01</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Enterprise AI, integration, cloud, commerce</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>From Technical Depth to Enterprise Confidence</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Techouts</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/techouts.jpg" alt="Techouts project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/flyrlink" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '112px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg3,#1E2A28)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#6BD5C6)'}}>02</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Marketplace, booking, expert economy</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Making Expertise Instantly Accessible</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Flyrlink</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/flyrlink.jpg" alt="Flyrlink project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/aarniksha-solutions" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '128px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#17211F)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#6BD5C6)'}}>03</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Recruitment, staffing, workforce solutions</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Designing Trust Into the Talent Economy</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Aarniksha Solutions</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/aarniksha-solutions.jpg" alt="Aarniksha Solutions project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/dermsaga" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '144px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg3,#1E2A28)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#6BD5C6)'}}>04</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Healthcare, dermatology, patient experience</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>A More Confident Path to Care</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>DermSaga</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/dermsaga.jpg" alt="DermSaga project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    <Link data-col="split" href="/advyra" data-stack-card="1" data-cursor="grow" style={{position: 'sticky', top: '160px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(20px,3vw,48px)', alignItems: 'center', background: 'var(--c-bg2,#17211F)', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '18px', padding: 'clamp(20px,2.2vw,34px)', color: 'inherit', overflow: 'hidden', willChange: 'transform'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,24px)', minWidth: '0'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.12em', color: 'var(--c-accent,#6BD5C6)'}}>05</span><span style={{font: 'var(--weight-medium) 12px/1.5 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))'}}>Luxury e-commerce, Shopify, lifestyle</span></div>
    <h3 style={{fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,40px)', lineHeight: '1.1', letterSpacing: '-.028em', color: 'var(--c-h,#fff)', margin: '0', textWrap: 'balance'}}>Where Heritage Becomes a Modern Commerce Experience</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--c-line2,rgba(255,255,255,.10))', paddingTop: '16px'}}>
    <span style={{font: 'var(--weight-semibold) clamp(15px,1.3vw,19px)/1 var(--font-display)', color: 'var(--c-h,#fff)'}}>Advyra</span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--c-accent,#6BD5C6)'}}>View case study →</span>
    </div>
    </div>
    <div style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10', width: '100%', border: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <img src="/work/advyra.jpg" alt="Advyra project cover" loading="lazy" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
    </div>
    </Link>
    </div>
    </div>
    </section>
    
    <section data-screen-label="Impact" style={{position: 'relative', zIndex: '1', padding: 'clamp(80px,12vh,160px) clamp(20px,5vw,72px)', background: 'var(--c-inv,#F6FDFC)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(36px,5vh,66px)'}}>
    <div data-col="split" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.75fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end'}}>
    <h2 data-scrub="1" data-scrub-dark="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-inv-h,#123A33)', maxWidth: '24ch', margin: '0'}}>Beautiful work is the beginning. Business impact is the measure.</h2>
    <div data-r="1" style={{display: 'flex', gap: 'clamp(20px,3vw,44px)', paddingBottom: '8px'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '2px solid var(--c-inv-ac3,#2FAF97)', paddingLeft: '14px'}}>
    <span style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#16786A)'}}>Client engagements</span>
    <span style={{font: 'var(--weight-regular) 13.5px/1.5 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)'}}>Across five industries</span>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '2px solid var(--c-inv-ac3,#2FAF97)', paddingLeft: '14px'}}>
    <span style={{font: 'var(--weight-semibold) 11px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#16786A)'}}>Delivery pipeline</span>
    <span style={{font: 'var(--weight-regular) 13.5px/1.5 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)'}}>Research to launch, one team</span>
    </div>
    </div>
    </div>
    <div data-slab="1" data-col="five" style={{display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: '1px', background: 'var(--c-inv-line,#C8F2ED)', border: '1px solid var(--c-inv-line,#C8F2ED)', borderRadius: '8px', overflow: 'hidden'}}>
    <div data-r="1" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Clearer positioning</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', flex: '1'}}>Enterprise capability areas connected into one coherent growth narrative.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1E8C7A)'}}>Techouts</span>
    </div>
    <div data-r="1" data-r-d="60" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Stronger trust</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', flex: '1'}}>A patient journey built on education and proof, reviewed by the clinic.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1E8C7A)'}}>DermSaga</span>
    </div>
    <div data-r="1" data-r-d="120" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Better service discovery</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', flex: '1'}}>A clearer path for clients to find and book the right expert.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1E8C7A)'}}>Flyrlink</span>
    </div>
    <div data-r="1" data-r-d="180" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>Faster decision-making</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', flex: '1'}}>Process transparency that helps employers self-qualify sooner.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1E8C7A)'}}>Aarniksha Solutions</span>
    </div>
    <div data-r="1" data-r-d="240" style={{background: 'var(--c-inv-card,#fff)', padding: 'clamp(20px,2.2vw,32px)', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 'clamp(200px,20vw,250px)'}}>
    <h4 style={{font: 'var(--weight-semibold) clamp(16px,1.4vw,21px)/1.2 var(--font-display)', letterSpacing: '-.02em', color: 'var(--c-inv-h,#123A33)', margin: '0'}}>More connected customer journeys</h4>
    <p style={{font: 'var(--weight-regular) 14.5px/1.62 var(--font-sans)', color: 'var(--c-inv-body,#4B5C57)', flex: '1'}}>Heritage storytelling linked directly to collection and purchase.</p>
    <span style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-inv-ac,#1E8C7A)'}}>Advyra</span>
    </div>
    </div>
    <div data-r="1" style={{display: 'flex', justifyContent: 'flex-start'}}>
    <Link href="/work" data-cursor="grow" data-mag="0.3" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--c-inv-dot,#A7E9E2)', color: 'var(--c-inv-ac2b,#135F54)', font: 'var(--weight-medium) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '18px 28px', borderRadius: '999px', transition: 'background .4s ease,border-color .4s ease'}} className="uxvh7">View Our Work <span>→</span></Link>
    </div>
    </div>
    </section>
    
    <section id="contact" data-screen-label="CTA" style={{position: 'relative', zIndex: '1', padding: 'clamp(90px,15vh,200px) clamp(20px,5vw,72px)', background: 'linear-gradient(180deg,#17211F 0%,#0E1413 100%)', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: '0', background: 'radial-gradient(70% 60% at 50% 0%,rgba(107,213,198,.16) 0%,rgba(23,33,31,0) 70%)', pointerEvents: 'none'}}></div>
    <div style={{position: 'relative', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(26px,3.6vh,42px)', textAlign: 'center'}}>
    <div data-r="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--uxv-accent,#6BD5C6)'}}>Design. Intelligence. Growth.</div>
    <h2 data-scrub="1" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(30px,4.6vw,76px)', lineHeight: '1.03', letterSpacing: '-.012em', color: '#fff', margin: '0', textWrap: 'balance'}}>Bring us the problem before you bring us the brief.</h2>
    <p data-r="1" data-r-d="120" style={{font: 'var(--weight-regular) clamp(15px,1.25vw,19px)/1.7 var(--font-sans)', color: 'rgba(255,255,255,.62)', maxWidth: '62ch'}}>Tell us where your business is today, where you want to go, and what is getting in the way. UXVel will help you find the opportunity, design the experience, build the system, and create the growth path.</p>
    <div data-r="1" data-r-d="200" style={{display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center'}}>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" data-mag="0.32" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--uxv-accent,#6BD5C6)', color: '#17211F', font: 'var(--weight-semibold) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '20px 30px', borderRadius: '999px', transition: 'box-shadow .45s ease,background .35s ease'}} className="uxvh8">Start a Project <span>↗</span></a>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" data-mag="0.32" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', font: 'var(--weight-medium) 14px/1 var(--font-sans)', letterSpacing: '.04em', padding: '20px 30px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.22)', transition: 'border-color .4s ease,background .4s ease'}} className="uxvh9">Book a Strategy Call</a>
    </div>
    </div>
    </section>
    
    <footer data-screen-label="Footer" style={{position: 'relative', zIndex: '1', background: '#0E1413', borderTop: '1px solid rgba(255,255,255,.10)', padding: 'clamp(50px,7vh,90px) clamp(20px,5vw,72px) clamp(24px,3vh,36px)'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,72px)'}}>
    <div data-col="foot" style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(4,minmax(0,1fr))', gap: 'clamp(24px,3vw,48px)'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
    <Link href="/" aria-label="UxVel home" style={{display: 'flex', alignItems: 'center'}}><img src="/brand/logo-white.png" alt="UxVel" style={{height: 'clamp(26px,2.2vw,34px)', width: 'auto', display: 'block'}} /></Link>
    <p style={{font: 'var(--weight-regular) 15px/1.65 var(--font-sans)', color: 'rgba(255,255,255,.56)', maxWidth: '30ch'}}>Start with the challenge. End with momentum.</p>
    <a href="mailto:hello@uxvel.com" data-cursor="grow" style={{font: 'var(--weight-medium) 15px/1 var(--font-sans)', color: 'var(--uxv-accent,#6BD5C6)'}}>hello@uxvel.com</a>
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
