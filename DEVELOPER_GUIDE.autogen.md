
# 开发者指南

> 本文由 `tools/gen-doc.mjs` 自动生成，请根据实际情况在标注的 **TODO** 处补充说明。

## 项目概览
- 项目根目录：`d2r_site_prod`
- 构建工具：（未检测到经典前端构建配置）
- TypeScript：否
- ESLint：否
- Prettier：否
- 环境变量文件：未检测到
- 产物目录：dist
- 产物体积：1.34 MB

## 运行与构建

**Node 版本**：**TODO**（建议记录本机与 CI 的 Node 版本）  

```bash
# 安装依赖
npm ci
# 开发调试
（未定义 dev 脚本，**TODO**）
# 构建
（未定义 build 脚本，**TODO**）
# 产物预览/本地服务
（未定义 preview 脚本，**TODO**）
```

**常用脚本**：
- `build:css`：`tailwindcss -i ./css/input.css -o ./css/tailwind.css --minify`
- `serve`：`node server.js`


## 目录结构（Top-Level）
> 只展示部分重点目录与文件，完整见下方“完整树”。

- 源码目录：（未检测到常见 src 目录，**TODO**）
- 静态资源：（未检测到 public/static 目录，**TODO**）
- 构建产物：dist

## 完整目录树（截断深度：6）
```
📁 assets
│  📁 fonts
│  │  📄 README.md (182 B)
📁 css
│  📄 fonts.css (712 B)
│  📄 input.css (221 B)
│  📄 styles.css (2.33 KB)
│  📄 tailwind.css (1.16 MB)
📁 dist
│  📁 css
│  │  📄 styles.css (2.33 KB)
│  │  📄 tailwind.css (1.16 MB)
│  📄 favicon.svg (270 B)
│  📄 index.html (18.1 KB)
│  📁 js
│  │  📄 classData.js (41.1 KB)
│  │  📄 db.js (24.6 KB)
│  │  📄 main.js (94.8 KB)
│  📄 README_PROD.md (468 B)
│  📄 server.js (1.71 KB)
📄 favicon.svg (270 B)
📄 index.html (18.1 KB)
📁 js
│  📄 classData.js (41.1 KB)
│  📄 db.js (24.6 KB)
│  📄 main.js (94.8 KB)
📄 package-lock.json (50.3 KB)
📄 package.json (260 B)
📄 README.md (763 B)
📄 README_CLI.md (505 B)
📄 README_PROD.md (468 B)
📁 release
│  📄 D2R-pack-20250912-113609.zip (159 KB)
│  📄 D2R-pack-20250912-164439.zip (159 KB)
📁 scripts
│  📄 migrate-inline.js (3.82 KB)
│  📄 pack.ps1 (1.15 KB)
│  📄 pack.sh (632 B)
📄 server.js (1.71 KB)
📄 tailwind.config.js (454 B)
📁 tools
│  📄 gen-doc.mjs (7.38 KB)

```


## 产物目录（dist）
```
📁 css
│  📄 styles.css (2.33 KB)
│  📄 tailwind.css (1.16 MB)
📄 favicon.svg (270 B)
📄 index.html (18.1 KB)
📁 js
│  📄 classData.js (41.1 KB)
│  📄 db.js (24.6 KB)
│  📄 main.js (94.8 KB)
📄 README_PROD.md (468 B)
📄 server.js (1.71 KB)

```

> 说明：
> - 上述体积仅为粗略统计；建议在 CI 中产出 gzip 与 brotli 体积。
> - **TODO**：标注入口文件（如 `index.html`、`assets/*.js`）对应的源码模块，说明分包策略与缓存策略。


## 配置与环境（示例）
- 环境变量：
  - **TODO**：列出关键变量（如 `VITE_API_BASE` / `NEXT_PUBLIC_*`），并说明默认值与安全注意事项（哪些不能进仓库）。
- 构建配置：
  - **TODO**：说明 Vite/Webpack 主要插件、别名（如 `@` -> `src`）、代码分割策略。
- 代码规范：
  - **TODO**：ESLint 规则集、Prettier 风格、提交规范（commitlint / conventional commits）。

## 模块划分与依赖
- 关键依赖（截取）：
  - （无 / **TODO**）
- 开发依赖（截取）：
  - tailwindcss@^3.4.10

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
   - 检查 `<base>`、静态资源路径、环境变量是否注入。
2. **dist 过大/首屏慢？**  
   - 打包分析（rollup-plugin-visualizer / webpack-bundle-analyzer）；拆分第三方依赖，懒加载路由。
3. **本地与线上行为差异？**  
   - 锁定 Node 与包管理器版本；禁用隐式 polyfill，开启严格构建。

---
