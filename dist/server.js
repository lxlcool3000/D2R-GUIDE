
const http = require('http');
const fs = require('fs');
const path = require('path');

// Node 18+ has global fetch; for older Node, try node-fetch
let fetchFn = global.fetch;
if (!fetchFn) {
  try { fetchFn = require('node-fetch'); }
  catch { console.warn('[server] Node < 18 and node-fetch not installed; install with: npm i node-fetch'); }
}
const fetch = (...args) => (fetchFn ? fetchFn(...args) : Promise.reject(new Error('fetch not available')));

const port = process.env.PORT || 5173;
const root = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon'
};

// --- Unified CSP (allow Tailwind CDN + jsDelivr for Chart.js + same-origin API) ---
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net/npm/chart.js",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "connect-src 'self' https://cdn.jsdelivr.net",
  "img-src 'self' data: blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'"
].join('; ');

// Header name toggle: report-only for debugging if CSP_REPORT_ONLY=1
const CSP_HEADER = process.env.CSP_REPORT_ONLY === '1'
  ? 'Content-Security-Policy-Report-Only'
  : 'Content-Security-Policy';

console.log(`[server] Using ${CSP_HEADER}: ${CSP}`);

function send(res, code, headers, body) {
  res.writeHead(code, { [CSP_HEADER]: CSP, 'X-Frame-Options': 'SAMEORIGIN', ...headers });
  res.end(body);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const ct = MIME[ext] || 'application/octet-stream';
  try {
    const data = fs.readFileSync(filePath);
    send(res, 200, { 'Content-Type': ct }, data);
  } catch (e) {
    send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Server error');
  }
}

const server = http.createServer(async (req, res) => {
  // helper: GET /__csp -> show effective server CSP header string
  if (req.method === 'GET' && req.url === '/__csp') {
    return send(res, 200, { 'Content-Type': 'application/json; charset=utf-8' },
      JSON.stringify({ header: CSP_HEADER, policy: CSP }));
  }

  // API proxy: POST /api/ai-advice
  if (req.method === 'POST' && req.url === '/api/ai-advice') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { systemPrompt, userPrompt } = JSON.parse(body || '{}');
        if (!process.env.GOOGLE_API_KEY) {
          return send(res, 500, { 'Content-Type': 'application/json' }, JSON.stringify({ error: 'Missing GOOGLE_API_KEY' }));
        }
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${process.env.GOOGLE_API_KEY}`;
        const r = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });
        const data = await r.json();
        return send(res, r.status, { 'Content-Type': 'application/json; charset=utf-8' }, JSON.stringify(data));
      } catch (err) {
        return send(res, 500, { 'Content-Type': 'application/json; charset=utf-8' }, JSON.stringify({ error: String(err) }));
      }
    });
    return;
  }

  // favicon
  if (req.url === '/favicon.ico') {
    const ico = path.join(root, 'favicon.svg');
    if (fs.existsSync(ico)) return sendFile(res, ico);
    return send(res, 204, {}, '');
  }

  // static files
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.join(root, urlPath === '/' ? '/index.html' : urlPath);
  if (!filePath.startsWith(root)) return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');

  fs.stat(filePath, (err, stat) => {
    if (err) return send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Not found');
    if (stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    return sendFile(res, filePath);
  });
});

server.listen(port, () => console.log('http://localhost:' + port));
