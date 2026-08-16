# first-push.ps1 — one-time: connect this folder to GitHub and push it.
# Run once:  .\first-push.ps1
# After this, use .\push.ps1 for every change.

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$repo = 'https://github.com/kumarrajaux-King/uxvel-site.git'

Write-Host "`n=== UxVel: first push to GitHub ===`n" -ForegroundColor Cyan

# 0. Git present?
try { git --version | Out-Null } catch {
  Write-Host "Git is not installed. Run:  winget install --id Git.Git -e" -ForegroundColor Red
  Write-Host "Then close and reopen PowerShell and run this script again."
  exit 1
}

# 1. Identity (only set if missing)
if (-not (git config --global user.name))  { git config --global user.name  (Read-Host 'Your name for commits') }
if (-not (git config --global user.email)) { git config --global user.email (Read-Host 'Your GitHub email') }

# 2. Init if needed
if (-not (Test-Path .git)) {
  git init | Out-Null
  Write-Host "Initialised a new git repo here." -ForegroundColor Green
}

# 3. Never commit these
if (Test-Path node_modules) { Write-Host "node_modules present - .gitignore excludes it." -ForegroundColor DarkGray }

# 4. Stage and commit
git add -A
if (git diff --cached --quiet) {
  Write-Host "Nothing new to commit." -ForegroundColor Yellow
} else {
  git commit -m "UxVel site: Next.js static export" | Out-Null
  Write-Host "Committed." -ForegroundColor Green
}

git branch -M main

# 5. Remote
$existing = git remote get-url origin 2>$null
if ($existing) {
  if ($existing -ne $repo) {
    Write-Host "Repointing origin from $existing to $repo" -ForegroundColor Yellow
    git remote set-url origin $repo
  }
} else {
  git remote add origin $repo
}

# 6. Push. --force replaces the old static build sitting in the repo.
Write-Host "`nPushing to $repo (a browser window may open to sign in)...`n" -ForegroundColor Cyan
git push -u origin main --force

Write-Host "`nDone. Next: add the four FTP secrets in GitHub -> Settings -> Secrets and variables -> Actions." -ForegroundColor Green
Write-Host "Then every later change is just:  .\push.ps1 `"what you changed`"`n" -ForegroundColor Green
