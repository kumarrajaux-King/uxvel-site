# Deploying uxvel.com — Git → GitHub Actions → Hostinger

Push to `main` → GitHub builds the site → the build is uploaded to Hostinger over FTPS → uxvel.com is updated. No manual upload, no build step on the server.

Hostinger shared hosting has no Node runtime, so the site is built as a **static export** (`output: 'export'`) and served as plain files. PHP is available on that plan, so the contact form posts to `public/contact.php`.

---

## 1. Put the code on GitHub

From this folder:

```bash
git init
git add .
git commit -m "UxVel site: Next.js static export"
git branch -M main
git remote add origin https://github.com/kumarrajaux-King/uxvel-site.git
git push -u origin main --force     # --force only if the repo already has the old files
```

## 2. Get the FTP details from Hostinger

hPanel → **Files → FTP Accounts**. You need:

| Value | Where it comes from | Example |
| --- | --- | --- |
| FTP host | "FTP IP / hostname" | `ftp.uxvel.com` or an IP |
| FTP username | the account username | `u123456789.uxvel` |
| FTP password | set/reset it on that page | — |
| Remote directory | the site's web root | `public_html/` (primary domain) or `domains/uxvel.com/public_html/` (addon domain) |

Create an FTP account dedicated to deploys if you can — easier to rotate later.

## 3. Add the secrets to GitHub

GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:

- `FTP_SERVER` — the FTP host
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR` — e.g. `public_html/` (keep the trailing slash)

## 4. First deploy

Push anything to `main`, or run the workflow manually: **Actions → Build and deploy to Hostinger → Run workflow**. The run takes about 2 minutes: install → build → upload only the files that changed.

## 5. Point the domain

**If the domain is registered at Hostinger:** hPanel → Domains → the domain is already attached to the hosting; make sure the site's document root is the folder in `FTP_REMOTE_DIR`.

**If it is registered elsewhere:** point the nameservers at Hostinger:

```
ns1.dns-parking.com
ns2.dns-parking.com
```

(Hostinger shows the exact pair in hPanel → Domains → DNS/Nameservers.) Propagation is usually under an hour, up to 24.

Then hPanel → **Websites → Manage → SSL** and issue the free Let's Encrypt certificate. The `.htaccess` already forces HTTPS and strips `www`.

## 6. Turn on the contact mailbox

The form posts to `/contact.php`, which mails the enquiry.

1. hPanel → **Emails** → create `hello@uxvel.com` (recipient) and `website@uxvel.com` (sender).
2. If you use different addresses, change `CONTACT_TO` / `CONTACT_FROM` at the top of `public/contact.php`.
3. Prefer a hosted form service instead? Set `NEXT_PUBLIC_FORM_ENDPOINT` in the repo (e.g. a Formspree URL) — the form will post there and the PHP file can be deleted.

---

## Everyday workflow

```bash
# edit copy or design in app/<route>/view.jsx
npm run dev            # check locally
git commit -am "Update services copy"
git push               # live in ~2 minutes
```

Watch the run in the **Actions** tab. A red run means the site was not touched — the previous version stays live.

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| Action fails at "Deploy" | Wrong FTP secret, or the remote dir does not exist. Check `FTP_REMOTE_DIR` against hPanel's File Manager path. |
| Site loads but CSS is missing | The upload landed in the wrong folder — the web root must contain `index.html`, not a nested `out/` folder. |
| Old page still showing | Hostinger CDN/cache: hPanel → Websites → Manage → **Purge cache**, then hard-reload. |
| Contact form says "Opening your email app" | `contact.php` returned an error — check the sender mailbox exists and matches `CONTACT_FROM`. |
| 404 on a sub-page | `.htaccess` did not upload (it is a hidden file). The workflow copies it explicitly; confirm it exists in the web root. |

## What this setup does not do

Static export means no server-rendered pages, no API routes and no on-demand image optimisation. If you later need those (a CMS, gated content, dynamic data), the site has to move to a Hostinger VPS running Node, or to Vercel — the app code stays the same, only `output: 'export'` and this workflow change.
