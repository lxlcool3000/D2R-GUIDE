# D2R Guide (Refactored) — How to Run

## Why you saw CORS errors
Opening `index.html` via `file://` blocks ES Module loading in Chrome.
Use a tiny local server instead (any http:// URL is fine).

## Option A — Node (no install beyond Node itself)
1) Open a terminal here (this folder).
2) Run: `node server.js`
3) Visit: http://localhost:5173

## Option B — npx http-server (if you prefer)
- `npx http-server -c-1 -p 5173 .`

## CSP already adjusted
The page now allows:
- `script-src` for local files + Tailwind CDN + jsDelivr
- `connect-src` includes jsDelivr so Chart.js sourcemap fetch won't be blocked
- `'unsafe-inline'` is enabled to support existing inline event handlers

For stricter production, self-host CDN files and remove `'unsafe-inline'`.
