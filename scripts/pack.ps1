
Param([switch]$SkipInstall)
$ErrorActionPreference = "Stop"
$ROOT = Resolve-Path (Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) "..")
Set-Location $ROOT

if (-Not $SkipInstall) {
  if (Test-Path package-lock.json) { npm ci } else { npm install }
}
npm run build:css

$DIST = Join-Path $ROOT "dist"
if (Test-Path $DIST) { Remove-Item $DIST -Recurse -Force }
New-Item -ItemType Directory -Path (Join-Path $DIST "css"), (Join-Path $DIST "js") | Out-Null

Copy-Item "index.html","favicon.svg","README_PROD.md" -Destination $DIST
Copy-Item "css/tailwind.css","css/styles.css" -Destination (Join-Path $DIST "css")

# ✅ Copy the *contents* of js/ into dist/js (avoid 'already exists')
Copy-Item -Path (Join-Path $ROOT "js\*") -Destination (Join-Path $DIST "js") -Recurse -Force

Copy-Item "server.js" -Destination $DIST

$REL = Join-Path $ROOT "release"
if (-Not (Test-Path $REL)) { New-Item -ItemType Directory -Path $REL | Out-Null }
$TS  = Get-Date -Format "yyyyMMdd-HHmmss"
$ZIP = Join-Path $REL ("D2R-pack-{0}.zip" -f $TS)
if (Test-Path $ZIP) { Remove-Item $ZIP -Force }
Compress-Archive -Path (Join-Path $DIST "*") -DestinationPath $ZIP
Write-Host "Created: $ZIP"
