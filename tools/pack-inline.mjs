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

  // Strip CDN-only tags not needed for offline (Tailwind CDN, Google Fonts)
  try {
    inlined = inlined
      .replace(/<script[^>]*src=\"https:\/\/cdn\.tailwindcss\.com\"[^>]*><\/script>\s*/ig, '')
      .replace(/<link[^>]*href=\"https:\/\/fonts\.googleapis\.com[^>]*>\s*/ig, '')
      .replace(/<link[^>]*href=\"https:\/\/fonts\.gstatic\.com[^>]*>\s*/ig, '');
    // Ensure local CSS files are linked for offline styles
    const cssLinks = ['<link rel="stylesheet" href="css/tailwind.css">', '<link rel="stylesheet" href="css/styles.css">'].join('\n    ');
    if (!/href=\"css\/tailwind\.css\"/i.test(inlined)) {
      inlined = inlined.replace(/<title>[^<]*<\/title>/i, (m)=> m + "\n    " + cssLinks);
    }
  } catch {}

  // Remove any external Chart.js script tags; inline build uses offline renderer
  try {
    inlined = inlined.replace(/<script[^>]+src=\"https:\/\/cdn\.jsdelivr\.net\/npm\/chart\.js[^>]*><\/script>\s*/ig, '');
  } catch {}

  // Mark as inline build to adjust runtime behavior if needed
  try {
    inlined = inlined.replace('<script type="module">', '<script>window.IS_INLINE=true;</script>\n<script type="module">');
  } catch {}

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
