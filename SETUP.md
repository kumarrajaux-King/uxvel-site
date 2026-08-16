# UxVel — end-to-end setup: Claude → Git → Hostinger → uxvel.com

One-time setup is steps 1–6 (about 40 minutes, most of it waiting for DNS). After that, every change follows the loop in step 7 and is live in roughly two minutes.

```
  you ask for a change
        ↓
  Claude edits the design / code
        ↓
  git commit + push to main          ← the only manual link (see step 5 for how to automate it)
        ↓
  GitHub Actions: npm ci → npm run build → static site in out/
        ↓
  FTPS upload to Hostinger public_html/
        ↓
  https://uxvel.com  (live, ~2 min after the push)
```

---

## Step 1 — Get the code onto your machine

1. Download the `uxvel-next` folder from the chat.
2. Unzip it somewhere permanent, e.g. `~/Sites/uxvel`.
3. Install Node 20 if you do not have it: <https://nodejs.org> (LTS).
4. Check it runs:

```bash
cd ~/Sites/uxvel
npm install
npm run dev          # open http://localhost:3000
```

Click through /services, /work, /contact. If those look right locally, they will look right live.

## Step 2 — Push the code to GitHub

```bash
git init
git add .
git commit -m "UxVel site: Next.js static export"
git branch -M main
git remote add origin https://github.com/kumarrajaux-King/uxvel-site.git
git push -u origin main --force
```

`--force` replaces the old static build that is in the repo today. To keep it recoverable, first run `git clone` of the current repo and `git tag old-static && git push origin old-static`.

**Checkpoint:** GitHub shows `app/`, `components/`, `lib/`, `public/`, `.github/workflows/deploy.yml`.

## Step 3 — Collect the Hostinger FTP details

hPanel → **Files → FTP Accounts**. Create a deploy account (or reuse the main one) and note:

| Needed | Where | Example |
| --- | --- | --- |
| Host | "FTP IP / hostname" | `ftp.uxvel.com` |
| Username | account username | `u123456789.deploy` |
| Password | set it here | — |
| Remote dir | hPanel → File Manager, the folder holding the site | `public_html/` |

If uxvel.com is an **addon** domain the path is usually `domains/uxvel.com/public_html/`. Confirm in File Manager — the folder you pick must be the one the domain serves.

## Step 4 — Add the secrets to GitHub

Repo → **Settings → Secrets and variables → Actions → New repository secret**. Add exactly these four names:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR` (with trailing slash, e.g. `public_html/`)

**Checkpoint:** repo → **Actions** → "Build and deploy to Hostinger" → **Run workflow**. It should finish green in about two minutes, and File Manager should now show `index.html`, `services/`, `work/`, `_next/`.

## Step 5 — Close the Claude → Git link

Claude in this chat can edit files and hand them to you, but cannot push to your repo. Pick one of these so the handoff is not manual:

**Option A — Claude Code (recommended).** Install it on your machine, open the project folder, and ask it to make the change. It edits the files, commits and pushes for you, so the whole chain is automatic from your instruction to the live site:

```bash
npm install -g @anthropic-ai/claude-code
cd ~/Sites/uxvel
claude
# then: "update the hero headline on the home page and push"
```

**Option B — GitHub Desktop.** Download the changed files from this chat, drop them into the folder, and press Commit → Push. Two clicks, no terminal.

**Option C — Edit on github.com.** For a copy tweak: open `app/services/view.jsx`, press the pencil, edit, Commit changes. The Action runs on commit.

## Step 6 — Point uxvel.com at the site and turn on HTTPS

1. **Domain registered at Hostinger:** hPanel → Websites → Manage → confirm the domain serves the folder from step 3.
2. **Registered elsewhere:** at your registrar set the nameservers to the pair shown in hPanel → Domains → DNS/Nameservers (usually `ns1.dns-parking.com` / `ns2.dns-parking.com`). Allow up to 24 hours; usually under an hour.
3. hPanel → Websites → Manage → **SSL** → issue the free certificate.
4. hPanel → Emails → create `hello@uxvel.com` and `website@uxvel.com` so the contact form can send.

The shipped `.htaccess` already forces HTTPS, drops `www`, sets caching and serves `404.html`.

**Checkpoint:** <https://uxvel.com> loads with a padlock; <http://www.uxvel.com> redirects to it.

## Step 7 — The everyday loop

```bash
git pull                       # start from what is live
# make the change (or let Claude Code make it)
npm run dev                    # check locally
git commit -am "Update work page intro"
git push
```

Watch **Actions** for the green tick, then hard-reload the page. If Hostinger's cache holds an old version: hPanel → Websites → Manage → **Purge cache**.

A red run means **nothing was uploaded** — the live site keeps the last good version. Fix and push again.

---

## Verify the whole chain once

1. Change one word in `app/about/view.jsx`.
2. `git commit -am "test deploy" && git push`.
3. Actions goes green (~2 min).
4. The word is live on <https://uxvel.com/about/>.

If all four happen, the integration is done and you never touch FTP again.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Action fails at Install/Build | Read the log — a syntax error in the file you edited. Run `npm run build` locally to see the same error. |
| Action fails at Deploy | Wrong FTP secret, or `FTP_REMOTE_DIR` does not exist. Check the path in File Manager. |
| Site live but unstyled | Files landed in the wrong folder. The web root must contain `index.html` directly, not `out/index.html`. |
| Sub-pages 404 | `.htaccess` missing from the web root (it is hidden — enable "show hidden files" in File Manager). The workflow copies it every run. |
| Contact form falls back to the mail app | `contact.php` errored. Confirm `CONTACT_FROM` matches a real mailbox on the domain. |
| Changes not visible | Hostinger cache — purge it, then hard-reload (Cmd/Ctrl+Shift+R). |

## What each part owns

| Part | Owns |
| --- | --- |
| This Claude project | Design source (`.dc.html`) and the Next.js code generated from it |
| GitHub repo `uxvel-site` | The single source of truth for what should be live |
| `.github/workflows/deploy.yml` | Build and upload — the only thing that writes to the server |
| Hostinger `public_html/` | Serves the built files; never edit files there by hand (the next deploy overwrites them) |
