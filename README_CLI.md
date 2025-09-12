# D2R Guide — Tailwind CLI + Self-host Fonts

## Build & Run
npm install
npm run build:css
npm run serve   # http://localhost:5173

## Dev
npm run dev:css
npm run serve

## Notes
- index.html uses ./css/tailwind.css (no CDN) and ./css/styles.css.
- CSP is in server headers; no Google Fonts; system fonts by default.
- Optional self-host Noto Sans SC: put WOFF2 in /assets/fonts/ and uncomment /css/fonts.css.
- Navigation now uses event delegation; deep-link via #/{classId}; last class is remembered.
