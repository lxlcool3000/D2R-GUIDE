# Repository Guidelines

## Project Structure & Module Organization
- App root: `index.html`, `server.js`, `tailwind.config.js`.
- Source: `js/` (app logic), `css/` (`input.css` source, `styles.css`, generated `tailwind.css`).
- Assets: `assets/` (e.g., fonts under `assets/fonts/`).
- Build output: in-place CSS (`css/tailwind.css`) and optional `dist/` snapshot.
- Utilities: `scripts/` (packaging), `tools/` (doc tooling), `release/` (zips).

## Build, Test, and Development Commands
- Install deps: `npm install`
- Build CSS: `npm run build:css` (Tailwind from `css/input.css` → `css/tailwind.css`).
- Run locally: `npm run serve` (serves root on `http://localhost:5173`).
- Alternative static serve: `npx http-server -c-1 -p 5173 .`
- No automated test runner is configured.

## Coding Style & Naming Conventions
- JavaScript: 2‑space indent, semicolons, single quotes acceptable; prefer small, pure functions.
- Filenames: JS `lowerCamelCase` (e.g., `classData.js`, `main.js`); CSS `kebab-case` (e.g., `styles.css`); assets lowercase.
- HTML: keep inline scripts minimal; prefer modules in `js/`.
- Tailwind: update `tailwind.config.js` `content` globs if adding files.

## Testing Guidelines
- Current status: no framework. Add unit tests only if you also add the runner.
- Manual checks: build CSS, start server, verify core flows (navigation, modals, AI advisor, charts) in the browser console for errors.
- If adding tests, colocate under `js/__tests__/` and name `*.test.js`.

## Commit & Pull Request Guidelines
- Commits: imperative mood, focused scope. Use prefixes like `feat:`, `fix:`, `chore:`, `docs:`, `build:`.
- PRs: include a concise description, screenshots/GIFs for UI changes, reproduction steps for fixes, and link related issues. Keep changes narrowly scoped.

## Security & Configuration Tips
- CSP: server sets CSP by default; toggle report-only with `CSP_REPORT_ONLY=1`.
- API key: features using `/api/ai-advice` require `GOOGLE_API_KEY` in env.
- Node: prefer Node 18+ (built‑in `fetch`); older versions require `node-fetch`.

## Agent-Specific Instructions
- Do not rename or relocate files without need. Keep changes minimal and in the style above. When adding files, update paths and `tailwind.config.js` globs accordingly.
