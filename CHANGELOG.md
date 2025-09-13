# Changelog

## v1.1.0 — Stable (2025-09-13)

- Charts
  - Unify to local Chart.js v3 (no CDN) for both local and Pages.
  - Replace-canvas init and safe destroy to avoid rare `clear` errors.
- Inline build
  - Removed inline build and related workflows/scripts to reduce complexity.
- i18n & Filters
  - Centralized UI strings and tag labels; language switch updates all controls.
  - Added BP type labels, tooltips, and consistent placeholders.
  - Added active chip rows with click-to-remove.
- Breakpoints (BP)
  - Note/labels localized; table rendering stabilized across languages.
- Pages workflow
  - Publish `dist-site/` with `index.html`, `css/`, `js/`, `assets/` and local vendor.
- CSP & Server
  - Local server CSP kept strict but compatible with local assets and vendor files.

Notes:
- User root favicon set via `lxlcool3000/lxlcool3000.github.io` to eliminate root `/favicon.ico` 404 across Projects Pages.
- Project Pages URL: `https://lxlcool3000.github.io/D2R-GUIDE/`.
