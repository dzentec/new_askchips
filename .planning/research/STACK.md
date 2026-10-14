# Stack Research

**Domain:** Modern B2B PCB & Electronic Components Web Portal
**Researched:** 2026-10-14
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Vite | ^5.4.0 | Build Tool & Dev Server | Near-instant HMR, fast multi-page build support (`rollupOptions.input`), native ES modules, lightweight footprint |
| Tailwind CSS | ^3.4.0 | Utility CSS & Design System | Rapid prototyping of Clean Industrial aesthetic, custom color tokens, responsive utilities, purge-optimized production bundles |
| Vanilla JavaScript (ES2022) | Native | Interactivity & App Logic | Zero runtime overhead, maximum longevity and maintainability for multi-page static marketing + interactive forms |
| PostCSS & Autoprefixer | Latest | CSS Processing | Vendor prefixing, CSS nesting support, seamless Tailwind integration |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Lucide Icons | ^0.450.0 | High-Tech SVG Iconography | Clean, consistent industrial & hardware iconography (chips, circuit boards, layers, checkmarks) |
| SheetJS (xlsx) or PapaParse | Latest (ESM / CDN) | Client-side BOM Processing | Parsing uploaded BOM Excel (`.xlsx`, `.xls`) or CSV files directly in browser for instant preview |
| Canvas-Confetti or Micro-animations (CSS) | Latest | Visual Feedback | Micro-interactions when submitting RFQ or BOM files to delight users |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Vite Multi-Page Plugin / Rollup | Multi-page HTML bundling | Configured in `vite.config.js` for `index.html`, `about.html`, `components.html`, `pcb.html`, `contact.html` |
| Prettier | Code formatting | Enforces clean HTML/JS/CSS formatting across team |

## Installation

```bash
# Initialize Vite project
npm create vite@latest . -- --template vanilla

# Core Styling & Tooling
npm install -D tailwindcss postcss autoprefixer lucide
npx tailwindcss init -p
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Multi-Page Vite + Vanilla JS | Next.js / Nuxt | Use when server-side database auth, dynamic CMS dashboards, or server actions are strictly required |
| Tailwind CSS | Vanilla CSS / CSS Modules | Use if strict no-build workflow is mandated by legacy hosting |
| Client-side BOM Validator | Heavy Server Worker | Use client-side preview for instant feedback; forward file payload to backend API on form submission |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| jQuery (legacy site legacy) | Outdated DOM manipulation, unnecessary 90KB bundle penalty | Native DOM APIs (`querySelector`, `addEventListener`, `fetch`) |
| Heavy full-stack React/Next.js for static pages | Unnecessary hydration cost, complex deployment, slower initial content paint | Vite multi-page static site with targeted JS modules |
| Unoptimized legacy PNG/JPG assets | High bandwidth usage, slow mobile loading | WebP/AVIF formats with responsive `<picture>` tags |

## Stack Patterns by Variant

**Multi-Page Routing:**
- Use distinct HTML entry points (`index.html`, `components.html`, `pcb.html`, `about.html`, `contact.html`) sharing a common `navbar.js`, `footer.js`, and `theme.css`.

**BOM Upload Component:**
- Client-side drag-and-drop file receiver with MIME-type verification, size limit validation (e.g. 15MB), and optional client preview.

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Vite 5 | Tailwind CSS 3 | Native support via standard PostCSS plugin |
| Lucide Icons | Vanilla ESM | Importable directly via ESM bundle or icon sprite |

## Sources

- Vite Official Multi-Page Guide (`vitejs.dev/guide/build.html#multi-page-app`)
- Tailwind CSS Official Documentation
- SheetJS Community Documentation

---
*Stack research for: AskChips B2B Portal*
*Researched: 2026-10-14*
