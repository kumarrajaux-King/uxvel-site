# push.ps1 — the everyday one-liner: commit everything and deploy.
# Usage:  .\push.ps1 "Update work page intro"
#         .\push.ps1                 (uses a timestamp as the message)

param([string]$m = "")

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not $m) { $m = "Update " + (Get-Date -Format 'yyyy-MM-dd HH:mm') }

Write-Host "`nPulling latest..." -ForegroundColor Cyan
git pull --rebase 2>$null

git add -A
if (git diff --cached --quiet) {
  Write-Host "No changes to push - already up to date." -ForegroundColor Yellow
  exit 0
}

git status --short
git commit -m $m | Out-Null
Write-Host "Committed: $m" -ForegroundColor Green

git push
Write-Host "`nPushed. GitHub Actions is building now - live in about two minutes." -ForegroundColor Green
Write-Host "Watch it: https://github.com/kumarrajaux-King/uxvel-site/actions`n" -ForegroundColor DarkGray
