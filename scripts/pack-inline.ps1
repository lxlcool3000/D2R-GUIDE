
Param([switch]$SkipInstall)
$ErrorActionPreference = "Stop"
$ROOT = Resolve-Path (Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) "..")
Set-Location $ROOT

if (-Not $SkipInstall) {
  if (Test-Path package-lock.json) { npm ci } else { npm install }
}

npm run build:css
node tools/pack-inline.mjs

Write-Host "Inline pack done. See dist-inline/ and release/*.zip"

