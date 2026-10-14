---
phase: "5"
slug: "production-polish-responsive-qa-seo-build-verification"
status: approved
shadcn_initialized: false
preset: none
created: "2026-10-14"
reviewed_at: "2026-10-14T22:20:00Z"
---

# Phase 5 - UI Design Contract: Production Polish, Responsive QA, SEO & Build Verification

> Comprehensive visual, responsive, accessibility, and SEO specification governing the final production release across all 5 entrypoint pages (`index.html`, `components.html`, `pcb.html`, `about.html`, `contact.html`) and global components.

---

## Design System Foundations

| Property | Specification |
|----------|---------------|
| Style Archetype | Clean Industrial / Hi-Tech |
| Canvas Background | `#f8fafc` (`slate-50`) with subtle radial engineering grid pattern |
| Content Containers | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Primary Surface | `#ffffff` (`white`) with `#e2e8f0` (`slate-200`) borders, `rounded-xl`, `shadow-sm` |
| Typography | Inter (`sans-serif`) for all editorial, headings, and body UI; JetBrains Mono (`monospace`) for engineering metrics, part numbers, RFQ IDs, and technical matrices |
| Iconography | Lucide Icons (scalable SVGs, `stroke-width: 2px` or `1.5px` depending on hierarchy) |
| Grid & Spacing | Strict 4px/8px modular rhythm (4px base, 8px micro-padding, 16px/24px component padding, 32px/48px/64px section rhythm) |

---

## Color System (60-30-10 Rule) & WCAG AA Ratios

| Role | Color Name | Hex Code | Tailwind Token | Application Area | Contrast Ratio (vs Background) |
|------|------------|----------|-----------------|------------------|--------------------------------|
| **Dominant (60%)** | White / Slate Light | `#ffffff` / `#f8fafc` | `bg-white`, `bg-slate-50` | Page canvas, card backgrounds, modal dialogs | Canvas base |
| **Secondary (30%)** | Slate Dark & Structural | `#0f172a` / `#1e293b` / `#334155` / `#e2e8f0` | `slate-900`, `slate-800`, `slate-700`, `border-slate-200` | Headings, labels, body text, table borders, dividers | `slate-900`: 16.0:1 (AAA), `slate-700`: 7.2:1 (AAA) |
| **Accent (10%)** | Cobalt Blue | `#2563eb` (hover: `#1d4ed8`) | `bg-blue-600`, `text-blue-600`, `border-blue-600` | Primary CTAs, active tab indicators, focus rings, link hovers | `white` on `#2563eb`: 4.6:1 (AA) |
| **Accent (Trust/Success)**| Tech Emerald | `#059669` | `bg-emerald-600`, `text-emerald-600`, `bg-emerald-50` | Quality badges, ISO verified chips, SLA indicators, success toast | `#059669` on `white`: 4.5:1 (AA) |
| **Destructive/Alert** | Crimson Red | `#dc2626` | `bg-red-600`, `text-red-600`, `bg-red-50` | Form validation errors, file deletion actions | `#dc2626` on `white`: 4.5:1 (AA) |

---

## Multi-Viewport Responsive Matrix

### 1. Viewport Breakpoint Definitions

| Breakpoint | Width Range | Target Devices | Primary Layout Behavior |
|------------|-------------|----------------|-------------------------|
| **Mobile (Small to Large)** | 320px – 639px (`< sm`) | iPhone 13/14/15, Pixel, Galaxy | Single-column stack, full-width buttons, collapsible drawer menu, horizontal scrollable data tables with scroll indicators, sticky header. |
| **Tablet** | 640px – 1023px (`sm` to `md`/`lg`) | iPad Mini, iPad Air, Surface | 2-column card reflows, dual-column specs, simplified table views, full navigation with compact spacing. |
| **Desktop / Laptop** | 1024px – 1279px (`lg`) | MacBook Pro 13/14, 1080p screens | Full multi-column grids (3–4 columns), sticky sidebar widgets (PCB configurator summary), expanded table views. |
| **Wide Desktop** | 1280px+ (`xl` & `2xl`) | 1440p / 4K displays | Centered `max-w-7xl` container, comfortable whitespace, maximum visual fidelity. |

### 2. Viewport-Specific Component Behaviors

```
+---------------------------------------------------------------------------------------------------+
| COMPONENT                  | MOBILE (< 640px)                | TABLET (640px - 1023px) | DESKTOP (1024px+)       |
+----------------------------+---------------------------------+-------------------------+-------------------------+
| Global Header              | Brand + Menu Hamburger          | Brand + Nav links       | Brand + Links + CTA     |
| Mobile Drawer              | Full-screen slide-in with scrim | Hidden                  | Hidden                  |
| PCB Configurator Matrix    | Single column, summary at base  | 2-column grid           | Split: Config + Sticky  |
| Capability Data Tables     | Horizontal scroll + swipe cues  | Full table / compact    | Full width, dense rows  |
| Hero Section               | Left-aligned stack, full CTA    | 2-column or centered    | High-impact split/grid  |
| BOM Drag-and-Drop Dropzone | Tap-to-pick card, compact info  | Full drag/drop zone     | Full drag/drop + hover  |
| RFQ Modal Dialog           | Full-width card with scroll     | Centered dialog (640px) | Centered dialog (720px) |
| Footer                     | Accordion / 1-column stack      | 2-column grid           | 4-column rich hierarchy |
+---------------------------------------------------------------------------------------------------+
```

### 3. Touch & Tap Target Contracts
- All interactive elements (links, buttons, form inputs, radio pills, checkboxes) MUST have an effective touch target of at least **44 × 44 pixels** on mobile viewports (`min-h-[44px] min-w-[44px]` or adequate surrounding padding).
- Zero horizontal layout shift or accidental side-scrolling: `html, body` must enforce `overflow-x: hidden` with proper container constraints (`w-full max-w-full`).

---

## Accessibility & Keyboard Interaction Contract (WCAG 2.1 AA)

### 1. Focus Management & Visible Indicators
- **Standard Focus Ring**: `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none`.
- Must never suppress default outline without providing an explicit `focus-visible:` ring.
- **Skip Link**: Each page must include a hidden-until-focused skip link at the top of `<body>`:
  ```html
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none">
    Skip to main content
  </a>
  ```

### 2. ARIA Landmarks & Accessible Names
- Semantic Landmarks:
  - `<header role="banner" id="global-header">`
  - `<main role="main" id="main-content">`
  - `<footer role="contentinfo" id="global-footer">`
  - `<dialog role="dialog" aria-modal="true" aria-labelledby="rfq-modal-title">`
- Accessible Icon Buttons:
  - Mobile menu toggle: `aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-nav"`
  - Modal close button: `aria-label="Close dialog"`
  - File removal button: `aria-label="Remove attached BOM file"`
- Live Regions:
  - BOM dropzone status: `aria-live="polite"`
  - RFQ form submit feedback: `aria-live="assertive"`

---

## Semantic SEO, OpenGraph & Structured Schema Contract

### 1. Title & Meta Description Standards

| Page | Canonical Path | Page Title Standard | Meta Description (140-160 chars) |
|------|----------------|---------------------|----------------------------------|
| **Home** | `/` (`index.html`) | `AskChips — Precision Component Sourcing & Turnkey PCB Manufacturing` | Tier-1 B2B sourcing for electronic components, high-density PCB fabrication (1-32 layers), and rapid turnkey PCBA assembly. In-house testing & ISO certified. |
| **Components** | `/components.html` | `Electronic Component Sourcing & Distribution — AskChips` | Authorized global supply chain for ICs, passive components, semiconductors, and microcontrollers. 100% authentic with factory traceability & lab QC. |
| **PCB & PCBA** | `/pcb.html` | `PCB Fabrication & Turnkey PCBA Assembly Capabilities — AskChips` | Quick-turn prototype and high-density PCB manufacturing up to 32 layers. Advanced surface finishes, rigid-flex, and full turnkey SMT assembly with automated AOI. |
| **About Us** | `/about.html` | `About AskChips — Quality Control, Testing Lab & Certifications` | Learn about AskChips' 18+ years of supply chain expertise, dual Shenzhen/Hong Kong logistics hubs, in-house anti-counterfeit testing lab, and ISO 9001 certifications. |
| **Contact / RFQ** | `/contact.html` | `Contact & Request for Quote (RFQ) — AskChips` | Submit your BOM or PCB files for an instant manufacturing quotation. Direct contact for our Shenzhen HQ and Hong Kong Global Logistics Center. 24h SLA. |

### 2. Social Meta Tags (OpenGraph & Twitter Cards)
Each page MUST declare:
- `<meta property="og:site_name" content="AskChips">`
- `<meta property="og:type" content="website">`
- `<meta property="og:title" content="...">`
- `<meta property="og:description" content="...">`
- `<meta property="og:url" content="https://askchips.com/...">`
- `<meta property="og:image" content="https://askchips.com/images/og-preview.png">`
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title" content="...">`
- `<meta name="twitter:description" content="...">`
- `<meta name="twitter:image" content="https://askchips.com/images/og-preview.png">`

### 3. Structured JSON-LD Schemas

```
+---------------------------------------------------------------------------------------------------+
| PAGE             | PRIMARY SCHEMA TYPE   | KEY PROPERTIES                                         |
+------------------+-----------------------+--------------------------------------------------------+
| index.html       | Organization, WebSite | name, url, logo, contactPoint, certification, sameAs   |
| components.html  | CollectionPage        | name, description, hasPart (Component Categories)      |
| pcb.html         | Service               | name, provider, serviceType, offers, areaServed        |
| about.html       | AboutPage             | name, description, foundingLocation, knowsAbout        |
| contact.html     | ContactPage           | mainEntity: LocalBusiness / PostalAddress / telephone  |
+---------------------------------------------------------------------------------------------------+
```

---

## Production Build & Static Asset Verification Standards

1. **Compilation Guarantee**:
   - `npm run build` MUST compile all 5 entrypoint HTML documents into `dist/` with zero Rollup/Vite resolution errors.
   - Bundle size checks: Total compiled CSS < 45 kB, compiled JS < 75 kB.
2. **Asset Path Guarantee**:
   - Zero missing or broken image references. All migrated webp/svg assets in `public/images/` must resolve properly both in development and production builds.
3. **Runtime Guarantee**:
   - Zero unhandled JavaScript errors, missing DOM target crashes, or console warnings on any page during standard user journeys.
4. **Browser Verification**:
   - Verified via automated headless Chrome DevTools session testing viewports (375px mobile, 768px tablet, 1440px desktop), modal interaction, BOM uploader, and navigation drawer.

---

*Contract Approved: Ready for Phase 5 Plan generation (`05-01-PLAN.md` & `05-02-PLAN.md`)*
