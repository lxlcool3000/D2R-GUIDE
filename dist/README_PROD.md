# D2R Guide — Production Build

## Build CSS (one-time per change)
npm install
npm run build:css

## Run locally (with strict CSP)
npm run serve   # http://localhost:5173

## Deploy
- Upload the whole folder to your static host (Nginx/Apache/Netlify/etc.).
- No external fonts. Chart.js is loaded from jsDelivr (allowed in CSP). If you prefer fully offline, download chart.umd.min.js into /js/vendor and change index.html accordingly, then remove jsDelivr from CSP.
