// tools/pack-inline.mjs
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s, 'utf8'); };

function transformToInline(html, dbSrc, classDataSrc) {
  // Extract main module script block
  const scriptOpen = '<script type="module">';
  const scriptClose = '</script>';
  const startIdx = html.indexOf(scriptOpen);
  const endIdx = html.indexOf(scriptClose, startIdx + scriptOpen.length);
  if (startIdx === -1 || endIdx === -1) throw new Error('Could not locate module <script> block in index.html');

  const before = html.slice(0, startIdx);
  const scriptBody = html.slice(startIdx + scriptOpen.length, endIdx);
  const after = html.slice(endIdx + scriptClose.length);

  // Remove module imports
  let body = scriptBody
    .replace(/\n?\s*import\s+\{\s*db\s*\}\s+from\s+['\"]\.\/js\/db\.js['\"];?/g, '')
    .replace(/\n?\s*import\s+\{\s*classData\s*\}\s+from\s+['\"]\.\/js\/classData\.js['\"];?/g, '');

  // Prepare inline data blocks (convert exports to const)
  const dbInline = dbSrc.replace(/export\s+const\s+db\s*=/, 'const db =');
  const classInline = classDataSrc.replace(/export\s+const\s+classData\s*=/, 'const classData =');

  // Keep module semantics so dynamic import() works and falls back gracefully
  const newScript = `<script type="module">\n${dbInline}\n\n${classInline}\n\n${body}\n</script>`;
  return before + newScript + after;
}

function main() {
  const indexPath = path.join(ROOT, 'index.html');
  const dbPath = path.join(ROOT, 'js', 'db.js');
  const classPath = path.join(ROOT, 'js', 'classData.js');

  const html = read(indexPath);
  const dbSrc = read(dbPath);
  const classSrc = read(classPath);

  let inlined = transformToInline(html, dbSrc, classSrc);

  // Inline Chart.js for file:// compatibility (avoid CSP/CDN and ensure availability)
  try {
    const chartCdn = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js';
    const res = execSync(`curl -L --silent ${chartCdn}`, { encoding: 'utf8' });
    if (res && res.length > 1024) {
      // Replace external script tag if present; otherwise inject inline chart before module script
      const externalRe = /<script[^>]+src=\"https:\/\/cdn\.jsdelivr\.net\/npm\/chart\.js[^>]*><\/script>/i;
      if (externalRe.test(inlined)) {
        inlined = inlined.replace(externalRe, `<script>\n${res}\n</script>`);
      } else {
        inlined = inlined.replace('<script type="module">', `<script>\n${res}\n</script>\n<script type="module">`);
      }
    }
  } catch (e) {
    // If curl not available or fetch failed, keep original tag; file:// might still work online
    console.warn('[pack:inline] inline Chart.js skipped:', e.message || e);
  }

  const outDir = path.join(ROOT, 'dist-inline');
  // Write HTML
  write(path.join(outDir, 'index.html'), inlined);

  // Copy assets/css minimal set
  const copyPairs = [
    ['favicon.svg', 'favicon.svg'],
    ['README_PROD.md', 'README_PROD.md'],
    ['css/tailwind.css', 'css/tailwind.css'],
    ['css/styles.css', 'css/styles.css'],
  ];
  for (const [src, dest] of copyPairs) {
    const s = path.join(ROOT, src);
    if (fs.existsSync(s)) {
      const d = path.join(outDir, dest);
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
    }
  }

  // Optionally include server.js for parity
  const serverPath = path.join(ROOT, 'server.js');
  if (fs.existsSync(serverPath)) fs.copyFileSync(serverPath, path.join(outDir, 'server.js'));

  // Zip to release folder
  const relDir = path.join(ROOT, 'release');
  if (!fs.existsSync(relDir)) fs.mkdirSync(relDir, { recursive: true });
  const ts = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\..+$/, '')
    .replace('T', '-');
  const zipPath = path.join(relDir, `D2R-inline-pack-${ts}.zip`);

  // Try zip (POSIX), fall back to tar -a (Win), then PowerShell Compress-Archive
  try {
    // Prefer working directory set to outDir so archive has clean root
    execSync(`zip -r "${zipPath}" .`, { stdio: 'ignore', cwd: outDir });
  } catch {
    try {
      execSync(`tar -a -cf "${zipPath}" -C "${outDir}" .`, { stdio: 'ignore' });
    } catch {
      try {
        const psCmd = `Compress-Archive -Path '${outDir}/*' -DestinationPath '${zipPath}' -Force`;
        execSync(`powershell -NoProfile -Command "${psCmd}"`, { stdio: 'ignore' });
      } catch {}
    }
  }

  console.log(`[pack:inline] Wrote ${path.relative(ROOT, outDir)}`);
  if (fs.existsSync(zipPath)) {
    console.log(`[pack:inline] Zip -> ${path.relative(ROOT, zipPath)}`);
  } else {
    console.warn('[pack:inline] Zip step skipped (no archiver found)');
  }
}

main();
