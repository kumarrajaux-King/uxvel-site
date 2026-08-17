'use client';
import Link from 'next/link';
import useSite from '@/components/useSite';

export default function ServicesView() {
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
    
    
    <section data-screen-label="Services hero" data-hero-pad="1" style={{position: 'relative', zIndex: '1', minHeight: '64vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,#121C2B 100%))', borderBottom: '1px solid var(--c-line2,rgba(255,255,255,.10))'}}>
    <div data-col="idx" style={{maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(18px,4vh,46px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(02)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>
    <div data-r="1" data-r-now="1" style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-accent,#4DA6FF)'}}>One partner. Every stage of growth.</div>
    <h1 data-r="1" data-r-now="1" data-r-d="90" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(56px,9.5vw,150px)', lineHeight: '.9', letterSpacing: '-.01em', color: 'var(--c-h,#fff)', margin: '0'}}>Services</h1>
    <p data-r="1" data-r-now="1" data-r-d="170" style={{font: 'var(--weight-regular) clamp(15px,1.2vw,18px)/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '48ch'}}>Research. UX. Design. Development. Marketing. Growth.</p>
    </div>
    </div>
    </section>
    
    <section id="services" data-screen-label="Services" style={{position: 'relative', zIndex: '1', padding: 'clamp(70px,10vh,140px) clamp(20px,5vw,72px) clamp(80px,12vh,160px)', background: 'var(--c-services,linear-gradient(180deg,#0B1220 0%,var(--c-bg2,#121C2B) 100%))'}}>
    <div style={{maxWidth: '1440px', margin: '0 auto'}}>
    <div data-col="idx" style={{display: 'grid', gridTemplateColumns: 'minmax(0,.3fr) minmax(0,1.7fr)', gap: 'clamp(24px,4vw,64px)', alignItems: 'end', paddingBottom: 'clamp(38px,5.5vh,72px)'}}>
    <div style={{font: 'var(--weight-medium) 13px/1 var(--font-mono)', letterSpacing: '.1em', color: 'var(--c-muted,rgba(255,255,255,.38))'}}>(02)</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '0'}}>
    <h2 data-scrub="1" data-scrub-tail="4" style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(28px,3.9vw,62px)', lineHeight: '1.08', letterSpacing: '-.008em', color: 'var(--c-h,#fff)', maxWidth: '24ch', margin: '0'}}>From the first insight to the next stage of growth.</h2>
    </div>
    </div>
    <div data-slab="1" data-col="three" style={{display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))', border: '1px solid var(--c-line2,rgba(255,255,255,.10))', borderRadius: '2px', overflow: 'hidden'}}>
    <div data-r="1" data-card="1" id="research" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>01</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Research</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>UX research, competitor and market research, user interviews, and workshops that uncover the real problem before anything gets designed.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    <div data-r="1" data-r-d="70" data-card="1" id="ux" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>02</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>UX</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Personas, user journeys, mindmaps, sitemaps, and product strategy that turn research into a clear, buildable plan.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    <div data-r="1" data-r-d="140" data-card="1" id="design" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>03</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Design</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Figma UI design and design systems for web, product, and mobile — built for consistency as the business scales.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    <div data-r="1" data-card="1" id="development" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>04</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Development</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Next.js, Shopify, Webflow, Framer, WordPress, and custom SaaS builds — fast, scalable, and secure.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    <div data-r="1" data-r-d="70" data-card="1" id="marketing" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>05</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Marketing</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Social, Meta and Google campaigns, SEO content, and AI-assisted video production that carry the brand into the market.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    <div data-r="1" data-r-d="140" data-card="1" id="growth" data-cursor="grow" style={{background: 'var(--c-card,#0B1220)', padding: 'clamp(28px,3vw,46px)', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 'clamp(280px,29vw,372px)', transition: 'background .5s ease'}} className="uxvh5">
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}><span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-accent,#4DA6FF)'}}>06</span><span style={{flex: '1', height: '1px', background: 'var(--c-line2,rgba(255,255,255,.10))'}}></span></div>
    <h3 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(27px,2.6vw,42px)', lineHeight: '1.04', letterSpacing: '.004em', color: 'var(--c-h,#fff)', margin: '0'}}>Growth</h3>
    <p style={{font: 'var(--weight-regular) 15px/1.7 var(--font-sans)', color: 'var(--c-body2,rgba(255,255,255,.56))', maxWidth: '34ch', flex: '1'}}>Landing pages, CRM, lead capture, and conversion optimization that turn traffic and attention into pipeline.</p>
    <a href="#contact" data-cursor="grow" style={{font: 'var(--weight-medium) 11.5px/1 var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-dim,rgba(255,255,255,.48))', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'color .35s ease,gap .35s cubic-bezier(.2,.8,.2,1)'}} className="uxvh6">Explore services <span>→</span></a>
    </div>
    </div>
    </div>
    </section>
    
    
    <div data-pin-wrap="1" style={{position: 'relative', zIndex: '1', background: 'var(--c-inv,#F6FBFE)'}}>
    <div data-pin-sticky="1" style={{position: 'sticky', top: '0', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(var(--c-inv-dot,#AFDCFF) 1px,transparent 1px)', backgroundSize: '30px 30px', opacity: '.3', pointerEvents: 'none'}}></div>
    <div style={{position: 'relative', padding: 'clamp(18px,3.4vh,40px) clamp(20px,5vw,72px) clamp(12px,2vh,22px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,22px)', maxWidth: '1440px', margin: '0 auto', width: '100%'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '18px'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
    <div style={{font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#1559B8)'}}>Four capability groups</div>
    <h2 style={{fontFamily: '\'Instrument Serif\',Georgia,serif', fontWeight: '400', fontSize: 'clamp(25px,3.2vw,50px)', lineHeight: '1.06', letterSpacing: '-.008em', color: 'var(--c-inv-h,#0F2A45)', maxWidth: '24ch', margin: '0'}}>The capabilities behind meaningful digital growth.</h2>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', font: 'var(--weight-semibold) 11.5px/1 var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--c-inv-ac2,#1559B8)'}}>Swipe to explore <span data-pin-arrow="1" style={{display: 'inline-block', transition: 'transform .4s ease'}}>→</span></div>
    </div>
    <div style={{position: 'relative', height: '2px', background: 'var(--c-inv-line,#CFE6F8)', borderRadius: '2px', overflow: 'hidden'}}>
    <div data-pin-bar="1" style={{position: 'absolute', left: '0', top: '0', height: '100%', width: '0%', background: 'var(--c-lime,#7FD8FF)'}}></div>
    </div>
    </div>
    <div style={{position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(16px,3vh,34px)'}}>
    <div data-pin-track="1" style={{display: 'flex', gap: 'clamp(16px,1.6vw,26px)', padding: '0 clamp(20px,5vw,72px)', width: 'max-content', alignItems: 'stretch', willChange: 'transform'}}>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#CFE6F8)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.16" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>RESEARCH</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E4F2FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{width: '16px', height: '16px', border: '1.5px solid var(--c-inv-ac,#1B6FD6)', borderRadius: '50%', display: 'block'}}></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1B6FD6)'}}>A1 · 01/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Strategy and Research</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', maxWidth: '30ch'}}>Uncover the real problem before anything gets designed.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#E0F0FB)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>UX research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Competitor research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Market research</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>User interviews</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Brainstorming</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Miro workshops</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Personas</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>User journeys</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Mindmaps</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Sitemaps</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Product strategy</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#CFE6F8)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.21" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>DESIGN</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E4F2FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{width: '14px', height: '14px', border: '1.5px solid var(--c-inv-ac,#1B6FD6)', display: 'block', transform: 'rotate(45deg)'}}></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1B6FD6)'}}>A2 · 02/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Experience and Design</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', maxWidth: '30ch'}}>Turn research into a clear, buildable plan.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#E0F0FB)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>UX/UI design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Figma prototypes</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Design systems</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Brand identity</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Responsive design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>SaaS dashboards</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Mobile app design</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Developer handoff</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#CFE6F8)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.26" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>BUILD</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E4F2FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{display: 'flex', flexDirection: 'column', gap: '3px'}}><span style={{width: '16px', height: '1.5px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span><span style={{width: '11px', height: '1.5px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span><span style={{width: '16px', height: '1.5px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1B6FD6)'}}>A3 · 03/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Development</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', maxWidth: '30ch'}}>Fast, scalable, and secure technology.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#E0F0FB)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Next.js</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Shopify</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Webflow</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Framer</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>WordPress</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Custom SaaS products</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Headless CMS</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>API integrations</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>AI-powered products</span>
    </div>
    </div>
    <div style={{position: 'relative', width: 'clamp(300px,33vw,468px)', minHeight: 'clamp(330px,44vh,540px)', background: 'var(--c-inv-card,#fff)', border: '1px solid var(--c-inv-line,#CFE6F8)', borderRadius: '16px', padding: 'clamp(20px,2vw,32px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vh,22px)'}}>
    <div style={{position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none'}}><div data-hpx="0.31" style={{position: 'absolute', right: '-6px', bottom: '-14px', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(58px,7vw,108px)', lineHeight: '.8', letterSpacing: '-.045em', color: 'var(--c-inv-ghost,#E4F8F1)', whiteSpace: 'nowrap'}}>GROWTH</div></div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{width: '44px', height: '44px', borderRadius: '50%', background: 'var(--c-inv-chip,#E4F2FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}><span style={{display: 'flex', alignItems: 'flex-end', gap: '3px'}}><span style={{width: '3px', height: '7px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span><span style={{width: '3px', height: '12px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span><span style={{width: '3px', height: '17px', background: 'var(--c-inv-ac,#1B6FD6)', display: 'block'}}></span></span></span>
    <span style={{font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.14em', color: 'var(--c-inv-ac,#1B6FD6)'}}>A4 · 04/04</span>
    </div>
    <div style={{position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
    <h3 style={{font: 'var(--weight-semibold) clamp(19px,1.8vw,28px)/1.12 var(--font-display)', letterSpacing: '-.024em', color: 'var(--c-inv-h,#0F2A45)', margin: '0'}}>Growth and Creative</h3>
    <p style={{font: 'var(--weight-regular) 14.5px/1.55 var(--font-sans)', color: 'var(--c-inv-body,#47586E)', maxWidth: '30ch'}}>Carry the brand into the market.</p>
    </div>
    <div data-col="two" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', columnGap: 'clamp(14px,1.6vw,26px)', rowGap: '0', borderTop: '1px solid var(--c-inv-line2,#E0F0FB)', paddingTop: 'clamp(10px,1.4vh,16px)', alignContent: 'start', flex: '1'}}>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Social media strategy</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Meta campaigns</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Google campaigns</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Landing pages</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>SEO content</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Lead generation</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Adobe Photoshop</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Illustrator</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>After Effects</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>Premiere Pro</span>
    <span style={{display: 'flex', alignItems: 'baseline', gap: '8px', padding: '4px 0', font: 'var(--weight-regular) 13.5px/1.42 var(--font-sans)', color: 'var(--c-inv-body2,#33445C)'}}><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-accent,#4DA6FF)', flex: 'none', transform: 'translateY(-3px)'}}></span>AI video and Higgsfield workflows</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div style={{position: 'relative', zIndex: '1', background: '#F6FBFE', borderTop: '1px solid var(--c-inv-line,#CFE6F8)', borderBottom: '1px solid var(--c-inv-line,#CFE6F8)', overflow: 'hidden', padding: 'clamp(18px,2.4vw,30px) 0'}}>
    <div style={{display: 'flex', width: 'max-content', animation: 'uxvMarquee 34s linear infinite'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 'clamp(28px,3.6vw,58px)', paddingRight: 'clamp(28px,3.6vw,58px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Next.js</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Shopify</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Webflow</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Framer</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>WordPress</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Figma</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Miro</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Adobe</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Meta</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Google</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Higgsfield</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    </div>
    <div aria-hidden="true" style={{display: 'flex', alignItems: 'center', gap: 'clamp(28px,3.6vw,58px)', paddingRight: 'clamp(28px,3.6vw,58px)'}}>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Next.js</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Shopify</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Webflow</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Framer</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>WordPress</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Figma</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Miro</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Adobe</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Meta</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Google</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    <span style={{font: 'var(--weight-medium) clamp(16px,1.7vw,25px)/1 var(--font-display)', letterSpacing: '-.015em', color: 'var(--c-inv-deep,#16453C)'}}>Higgsfield</span><span style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-inv-ac3,#2E7DF7)'}}></span>
    </div>
    </div>
    </div>
    
    
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
