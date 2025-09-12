// tools/gen-doc.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IGNORE_DIRS = new Set([".git", "node_modules", ".next", "out", ".vercel", ".vscode", ".idea"]);
const SHOW_DIST = true; // 需要输出 dist 结构
const MAX_DEPTH = 6;
const MAX_ITEMS_PER_DIR = 200; // 防失控

function readJSON(p) { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; } }
function isBinaryFile(name) { return /\.(png|jpe?g|gif|webp|avif|ico|pdf|wasm|woff2?|ttf|otf|mp4|mp3|aac|zip|rar)$/i.test(name); }
function humanSize(bytes) {
  const u = ["B","KB","MB","GB","TB"]; let i=0; let n=bytes;
  while (n>=1024 && i<u.length-1) { n/=1024; i++; }
  return `${n.toFixed(n<10?2:n<100?1:0)} ${u[i]}`;
}

function walk(dir, depth=0) {
  if (depth>MAX_DEPTH) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true }).slice(0, MAX_ITEMS_PER_DIR);
  const res = [];
  for (const e of entries) {
    if (IGNORE_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    try {
      if (e.isDirectory()) {
        res.push({ type:"dir", name:e.name, children: walk(full, depth+1) });
      } else {
        const stat = fs.statSync(full);
        res.push({ type:"file", name:e.name, size: stat.size });
      }
    } catch {}
  }
  return res;
}
function treeToMarkdown(tree, prefix="") {
  let out = "";
  for (const n of tree) {
    if (n.type==="dir") {
      out += `${prefix}📁 ${n.name}\n`;
      out += treeToMarkdown(n.children, prefix + "│  ");
    } else {
      const size = n.size!=null ? ` (${humanSize(n.size)})` : "";
      out += `${prefix}📄 ${n.name}${size}\n`;
    }
  }
  return out;
}

const pkg = readJSON(path.join(ROOT, "package.json"));
const tsconfig = readJSON(path.join(ROOT, "tsconfig.json"));
const vite = fs.existsSync(path.join(ROOT, "vite.config.ts")) || fs.existsSync(path.join(ROOT, "vite.config.js"));
const webpack = fs.existsSync(path.join(ROOT, "webpack.config.js"));
const rollup = fs.existsSync(path.join(ROOT, "rollup.config.js"));

const envFiles = fs.readdirSync(ROOT).filter(f => f.startsWith(".env"));
const eslint = fs.existsSync(path.join(ROOT, ".eslintrc.js")) || fs.existsSync(path.join(ROOT, ".eslintrc.cjs")) || fs.existsSync(path.join(ROOT, ".eslintrc.json"));
const prettier = fs.existsSync(path.join(ROOT, ".prettierrc")) || fs.existsSync(path.join(ROOT, ".prettierrc.js")) || fs.existsSync(path.join(ROOT, "prettier.config.js"));

const srcDir = ["src","app","packages","server","backend","functions"].filter(d => fs.existsSync(path.join(ROOT,d)));
const publicDir = ["public","static"].filter(d => fs.existsSync(path.join(ROOT,d)));
const distDir = ["dist","build",".next","out"].filter(d => fs.existsSync(path.join(ROOT,d)));

const rootTree = walk(ROOT);
const distTree = SHOW_DIST && distDir.length ? walk(path.join(ROOT, distDir[0])) : [];

let sizeDist = 0;
if (distTree.length && distDir[0]) {
  function sumSize(nodes){let s=0; for(const n of nodes){ if(n.type==="file") s+=n.size||0; else s+=sumSize(n.children);} return s; }
  sizeDist = sumSize(distTree);
}

function codeFence(md){ return "```" + md; } // 防止编辑器自动闭合

const md = `
# 开发者指南

> 本文由 \`tools/gen-doc.mjs\` 自动生成，请根据实际情况在标注的 **TODO** 处补充说明。

## 项目概览
- 项目根目录：\`${path.basename(ROOT)}\`
- 构建工具：${vite ? "Vite" : webpack ? "Webpack" : rollup ? "Rollup" : "（未检测到经典前端构建配置）"}
- TypeScript：${tsconfig ? "是" : "否"}
- ESLint：${eslint ? "是" : "否"}
- Prettier：${prettier ? "是" : "否"}
- 环境变量文件：${envFiles.length ? envFiles.join(", ") : "未检测到"}
- 产物目录：${distDir[0] ?? "（未检测到）"}
- 产物体积：${sizeDist ? humanSize(sizeDist) : "N/A"}

## 运行与构建

${pkg ? `**Node 版本**：**TODO**（建议记录本机与 CI 的 Node 版本）  

${codeFence("bash")}
# 安装依赖
npm ci
# 开发调试
${pkg.scripts?.dev ? "npm run dev" : "（未定义 dev 脚本，**TODO**）"}
# 构建
${pkg.scripts?.build ? "npm run build" : "（未定义 build 脚本，**TODO**）"}
# 产物预览/本地服务
${pkg.scripts?.preview ? "npm run preview" : "（未定义 preview 脚本，**TODO**）"}
\`\`\`

**常用脚本**：
${Object.entries(pkg.scripts || {}).map(([k,v])=>`- \`${k}\`：\`${v}\``).join("\n") || "（无）"}
` : "_未检测到 package.json，请补充运行/构建方法。_"}

## 目录结构（Top-Level）
> 只展示部分重点目录与文件，完整见下方“完整树”。

- 源码目录：${srcDir.join(", ") || "（未检测到常见 src 目录，**TODO**）"}
- 静态资源：${publicDir.join(", ") || "（未检测到 public/static 目录，**TODO**）"}
- 构建产物：${distDir.join(", ") || "（未检测到，**TODO**）"}

## 完整目录树（截断深度：${MAX_DEPTH}）
${codeFence("")}
${treeToMarkdown(rootTree)}
\`\`\`

${distTree.length ? `
## 产物目录（${distDir[0]}）
${codeFence("")}
${treeToMarkdown(distTree)}
\`\`\`

> 说明：
> - 上述体积仅为粗略统计；建议在 CI 中产出 gzip 与 brotli 体积。
> - **TODO**：标注入口文件（如 \`index.html\`、\`assets/*.js\`）对应的源码模块，说明分包策略与缓存策略。
` : ""}

## 配置与环境（示例）
- 环境变量：
  - **TODO**：列出关键变量（如 \`VITE_API_BASE\` / \`NEXT_PUBLIC_*\`），并说明默认值与安全注意事项（哪些不能进仓库）。
- 构建配置：
  - **TODO**：说明 Vite/Webpack 主要插件、别名（如 \`@\` -> \`src\`）、代码分割策略。
- 代码规范：
  - **TODO**：ESLint 规则集、Prettier 风格、提交规范（commitlint / conventional commits）。

## 模块划分与依赖
- 关键依赖（截取）：
${pkg?.dependencies ? Object.entries(pkg.dependencies).slice(0,30).map(([k,v])=>`  - ${k}@${v}`).join("\n") : "  - （无 / **TODO**）"}
- 开发依赖（截取）：
${pkg?.devDependencies ? Object.entries(pkg.devDependencies).slice(0,30).map(([k,v])=>`  - ${k}@${v}`).join("\n") : "  - （无 / **TODO**）"}

> **TODO**：说明状态管理（如 Redux/Pinia/Zustand）、路由（React Router/Vue Router）、UI 组件库、API 层（fetch/axios/SWR/React Query）与数据流。

## 测试与质量保障
- 单元测试：**TODO**（Jest/Vitest + 覆盖率阈值）
- 端到端测试：**TODO**（Playwright/Cypress）
- CI/CD：**TODO**（GitHub Actions/其他）——构建、Lint、测试、产物上传与版本发布流程。

## 部署与运行时
- 运行环境：**TODO**（静态托管/Nginx/Node SSR/Docker 镜像）
- 健康检查与监控：**TODO**
- 回滚策略：**TODO**

## 常见问题（FAQ）
1. **构建通过但页面空白？**  
   - 检查 \`<base>\`、静态资源路径、环境变量是否注入。
2. **dist 过大/首屏慢？**  
   - 打包分析（rollup-plugin-visualizer / webpack-bundle-analyzer）；拆分第三方依赖，懒加载路由。
3. **本地与线上行为差异？**  
   - 锁定 Node 与包管理器版本；禁用隐式 polyfill，开启严格构建。

---
`;

const out = path.join(ROOT, "DEVELOPER_GUIDE.autogen.md");
fs.writeFileSync(out, md, "utf8");
console.log(`[gen-doc] ok -> ${out}`);
