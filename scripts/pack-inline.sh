#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.."; pwd)"
cd "$ROOT"

if [ -f package-lock.json ]; then npm ci; else npm install; fi
npm run build:css

node tools/pack-inline.mjs

echo "Inline pack done. See dist-inline/ and release/*.zip"

