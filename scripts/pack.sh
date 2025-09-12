#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.."; pwd)"
cd "$ROOT"

if [ -f package-lock.json ]; then npm ci; else npm install; fi
npm run build:css

DIST="$ROOT/dist"
rm -rf "$DIST"
mkdir -p "$DIST/css" "$DIST/js"

cp -a index.html favicon.svg README_PROD.md "$DIST/"
cp -a css/tailwind.css css/styles.css "$DIST/css/"
# ✅ Copy js *contents* into dist/js to avoid nesting/exists errors
cp -a js/. "$DIST/js/"
cp -a server.js "$DIST/"

REL="$ROOT/release"
mkdir -p "$REL"
TS="$(date +%Y%m%d-%H%M%S)"
ZIP="$REL/D2R-pack-$TS.zip"
( cd "$DIST" && zip -r "$ZIP" . >/dev/null )
echo "Created: $ZIP"
