import Link from 'next/link';

export const metadata = { title: 'Page not found — UxVel' };

export default function NotFound() {
  return (
    <main style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '22px', padding: '40px 24px', background: 'var(--c-bg,#0B1220)', textAlign: 'center' }}>
      <div style={{ font: 'var(--weight-medium) 12px/1 var(--font-mono)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--c-muted,rgba(255,255,255,.38))' }}>404</div>
      <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(38px,6vw,84px)', lineHeight: 1, color: 'var(--c-h,#fff)', margin: 0 }}>This page moved on</h1>
      <p style={{ font: 'var(--weight-regular) 16px/1.7 var(--font-sans)', color: 'var(--c-body,rgba(255,255,255,.62))', maxWidth: '46ch', margin: 0 }}>The link is broken or the page no longer exists. Everything else is one step away.</p>
      <Link href="/" style={{ font: 'var(--weight-semibold) 13px/1 var(--font-sans)', letterSpacing: '.04em', color: 'var(--c-on-accent,#121C2B)', background: 'var(--c-accent,#4DA6FF)', borderRadius: '999px', padding: '17px 26px' }}>Back to home</Link>
    </main>
  );
}
