# uxvel.com

Next.js 14 (App Router) site for UxVel, exported as static files and deployed to Hostinger on every push to `main`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

## Structure

| Path | What it is |
| --- | --- |
| `app/<route>/page.jsx` | Server component: page metadata (title, description, canonical, OG) |
| `app/<route>/view.jsx` | Client component: the page markup, styles inline exactly as designed |
| `app/globals.css` | Design tokens, base rules, keyframes, responsive rules, hover states |
| `components/useSite.js` | Mounts the motion runtime on the page root |
| `components/useContactForm.js` | Contact form submit (posts to `/contact.php`) |
| `lib/site-runtime.js` | Scroll reveals, text scrub, cursor, menu, theme, pinned scroller, growth engine |
| `public/contact.php` | PHP mail endpoint that runs on Hostinger |
| `public/.htaccess` | HTTPS + canonical host, caching, 404 |

## Editing content

Copy and layout live in `app/<route>/view.jsx`. Styles are inline objects on each element, so a text or colour change is a one-line edit. Commit, push to `main`, and the live site updates.

## Adding a page

1. `mkdir app/new-page`
2. Add `view.jsx` (`'use client'`, uses `useSite()`) and `page.jsx` (exports `metadata`, renders the view)
3. Add the route to `app/sitemap.js`
