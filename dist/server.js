const http = require('http'), fs = require('fs'), path = require('path');
const port = process.env.PORT || 5173, root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.ico':'image/x-icon'};

const server = http.createServer((req,res)=>{
  if (req.url==='/favicon.ico'){ const svg=path.join(root,'favicon.svg'); if(fs.existsSync(svg)){res.writeHead(200,{'Content-Type':'image/svg+xml'});return res.end(fs.readFileSync(svg));} res.writeHead(204);return res.end();}
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(root, urlPath==='/'?'/index.html':urlPath);
  if(!fp.startsWith(root)){res.writeHead(403);return res.end('Forbidden');}
  fs.stat(fp,(e,s)=>{
    if(e){res.writeHead(404);return res.end('Not found');}
    if(s.isDirectory()) fp=path.join(fp,'index.html');
    fs.readFile(fp,(err,data)=>{
      if(err){res.writeHead(500);return res.end('Server error');}
      // Allow Tailwind CDN + Chart.js + Google Fonts
      const csp = [
  "default-src 'self'",
  "script-src 'self' https://cdn.jsdelivr.net",
  "style-src 'self'",
  "style-src-elem 'self'",
  "font-src 'self' data:",
  "connect-src 'self' https://cdn.jsdelivr.net data: blob:",
  "img-src 'self' data: blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'"
].join('; ');

      res.setHeader('Content-Security-Policy', csp);
      res.setHeader('X-Frame-Options','SAMEORIGIN');
      const ext = path.extname(fp).toLowerCase();
      res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'});
      res.end(data);
    });
  });
});
server.listen(port,()=>console.log('http://localhost:'+port));
