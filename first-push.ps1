# first-push.ps1 — one-time: connect this folder to GitHub and push it.
# Run:  powershell -ExecutionPolicy Bypass -File .\first-push.ps1
# After this, use push.ps1 for every change.

Set-Location $PSScriptRoot
$ErrorActionPreference = 'Continue'   # git writes progress to stderr; do not treat that as fatal

$repo = 'https://github.com/kumarrajaux-King/uxvel-site.git'

function Fail($msg) { Write-Host "`n$msg`n" -ForegroundColor Red; exit 1 }

Write-Host "`n=== UxVel: first push to GitHub ===`n" -ForegroundColor Cyan

git --version *> $null
if ($LASTEXITCODE -ne 0) { Fail "Git is not installed. Run: winget install --id Git.Git -e   then reopen PowerShell." }

# Identity, only if missing
if (-not (git config --global user.name))  { git config --global user.name  (Read-Host 'Your name for commits') }
if (-not (git config --global user.email)) { git config --global user.email (Read-Host 'Your GitHub email') }

# Repo
if (-not (Test-Path .git)) { git init | Out-Null; Write-Host "Initialised git repo." -ForegroundColor Green }

git add -A
git commit -m "UxVel site: Next.js static export" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Write-Host "Committed." -ForegroundColor Green }
else { Write-Host "Nothing new to commit (fine - previous run already committed)." -ForegroundColor Yellow }

git branch -M main

# Remote: list first, so a missing origin is not an error
$remotes = @(git remote)
if ($remotes -contains 'origin') {
  $existing = (git remote get-url origin).Trim()
  if ($existing -ne $repo) {
    Write-Host "Repointing origin: $existing -> $repo" -ForegroundColor Yellow
    git remote set-url origin $repo
  } else {
    Write-Host "origin already set correctly." -ForegroundColor DarkGray
  }
} else {
  git remote add origin $repo
  Write-Host "Added origin $repo" -ForegroundColor Green
}

Write-Host "`nPushing... a browser window may open to sign in to GitHub.`n" -ForegroundColor Cyan
git push -u origin main --force
if ($LASTEXITCODE -ne 0) {
  Fail "Push failed. Most likely causes: the repo does not exist on GitHub yet, or sign-in was cancelled. Create https://github.com/kumarrajaux-King/uxvel-site (empty, no README) and run this again."
}

Write-Host "`nPushed. Next: add the four FTP secrets in GitHub -> Settings -> Secrets and variables -> Actions." -ForegroundColor Green
Write-Host 'Then every later change is:  powershell -ExecutionPolicy Bypass -File .\push.ps1 "what changed"' -ForegroundColor Green
Write-Host ""
