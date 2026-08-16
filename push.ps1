# push.ps1 — the everyday one-liner: commit everything and deploy.
# Usage:  powershell -ExecutionPolicy Bypass -File .\push.ps1 "Update work page intro"

param([string]$m = "")

Set-Location $PSScriptRoot
$ErrorActionPreference = 'Continue'

if (-not $m) { $m = "Update " + (Get-Date -Format 'yyyy-MM-dd HH:mm') }

git pull --rebase 2>&1 | Out-Null

git add -A
$staged = git diff --cached --name-only
if (-not $staged) {
  Write-Host "`nNo changes to push - already up to date.`n" -ForegroundColor Yellow
  exit 0
}

Write-Host "`nChanged:" -ForegroundColor Cyan
$staged | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }

git commit -m $m 2>&1 | Out-Null
Write-Host "Committed: $m" -ForegroundColor Green

git push
if ($LASTEXITCODE -ne 0) { Write-Host "`nPush failed - see the message above.`n" -ForegroundColor Red; exit 1 }

Write-Host "`nPushed. GitHub Actions is building - live in about two minutes." -ForegroundColor Green
Write-Host "Watch: https://github.com/kumarrajaux-King/uxvel-site/actions`n" -ForegroundColor DarkGray
