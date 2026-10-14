---
phase: "1"
slug: "foundation-design-system-asset-migration"
status: approved
shadcn_initialized: false
preset: none
created: "2026-10-14"
reviewed_at: "2026-10-14T21:12:00Z"
---

# Phase 1 - UI Design Contract

> Visual and interaction contract for Phase 1: Foundation, Design System & Asset Migration. Generated according to Clean Industrial / Hi-Tech standards for AskChips.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none (Native HTML5 + Tailwind CSS v3) |
| Icon library | Lucide Icons (SVG ESM / inline) |
| Font | Inter (sans-serif) + JetBrains Mono (monospace) |

---

## Visual Direction & Brand Identity

**Aesthetic Philosophy:** Clean Industrial / Hi-Tech
- **Target Perception:** High technical competence, rigorous ISO quality control, reliable tier-1 B2B component and PCB supply chain.
- **Canvas & Framing:** Bright, crisp slate canvas with high-contrast borders (`#e2e8f0`), subtle engineering grid backgrounds (`radial-gradient`), crisp cards with subtle elevation (`shadow-sm`, `hover:shadow-md`).
- **Accent Philosophy:** Deliberate technical accents—Cobalt Blue (`#2563eb`) signifies engineering intelligence, and Tech Emerald (`#059669`) signifies verified quality, stock availability, and manufacturing readiness.

---

## Spacing Scale

Declared values (strictly multiples of 4):

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, tight badge padding, inline status dots |
| sm | 8px | Button inline gap, form label margin, chip tags |
| md | 16px | Standard component padding, card internal spacing, grid gutters |
| lg | 24px | Card container padding, modal header spacing |
| xl | 32px | Section sub-header margin, column gutters |
| 2xl | 48px | Section vertical spacing on tablet, container padding |
| 3xl | 64px | Major page section vertical breaks, hero padding |

Exceptions: none

---

## Typography

| Role | Font Family | Size | Weight | Line Height |
|------|-------------|------|--------|-------------|
| Display | Inter, sans-serif | 48px (`text-5xl`) | 700 (Bold) | 1.15 |
| Heading 1 | Inter, sans-serif | 36px (`text-4xl`) | 700 (Bold) | 1.2 |
| Heading 2 | Inter, sans-serif | 28px (`text-3xl`) | 600 (Semibold) | 1.25 |
| Heading 3 | Inter, sans-serif | 20px (`text-xl`) | 600 (Semibold) | 1.35 |
| Body Large | Inter, sans-serif | 18px (`text-lg`) | 400 (Regular) | 1.5 |
| Body Regular | Inter, sans-serif | 16px (`text-base`) | 400 (Regular) | 1.5 |
| Label / Small | Inter, sans-serif | 14px (`text-sm`) | 500 (Medium) | 1.4 |
| Monospace / Specs | JetBrains Mono, monospace | 13px (`text-xs`) | 500 (Medium) | 1.4 |

---

## Color

Applied according to the 60-30-10 rule:

| Role | Value | Token / Hex | Usage |
|------|-------|-------------|-------|
| **Dominant (60%)** | White & Slate Light | `#ffffff` / `#f8fafc` (`slate-50`) | Page background, main content area, white card surfaces |
| **Secondary (30%)** | Slate Dark & Slate Neutral | `#0f172a` (`slate-900`), `#1e293b` (`slate-800`), `#e2e8f0` (`slate-200`) | Header background, footer background, card borders, secondary text |
| **Accent (10%)** | Cobalt Blue & Tech Emerald | `#2563eb` (`blue-600`), `#059669` (`emerald-600`) | Primary CTA buttons, active navigation indicator, verified checkmarks |
| **Destructive** | Crimson Red | `#dc2626` (`red-600`) | File removal, form clearing, critical error banners |

### Explicit Accent Usage Boundaries
Accent is strictly reserved for:
1. Primary CTA button backgrounds (`#2563eb` with `#1d4ed8` hover state).
2. Active navigation link underline / indicator pill.
3. Trust & certification checkmark icons (`#059669`).
4. Live PCB parameter highlight chips.

Accent is **never** applied to generic borders, secondary links, or body backgrounds.

---

## Layout Components & Contracts

### 1. Global Navigation Header (`header`)
- **Structure:** Left: AskChips Logo with tech icon emblem; Center: Navigation links (`Home`, `Components`, `PCB & PCBA`, `About`, `Contact`); Right: Primary CTA button (`Upload BOM`) + Mobile Hamburger Menu toggle button.
- **Behavior:** Sticky top with backdrop blur (`backdrop-blur-md bg-white/90 border-b border-slate-200`).
- **Mobile Drawer:** Slides down or from right on `<1024px` viewport; contains full link tree and explicit touch targets (min 44px height).

### 2. Global Industrial Footer (`footer`)
- **Structure:** Dark Slate surface (`bg-slate-900 text-slate-300`). 4 Columns:
  1. Company Overview & Certification Badges (ISO9001, RoHS, UL).
  2. Capabilities & Sourcing (Direct links to components and PCB services).
  3. Support & Resources (FAQ, RFQ guide, BOM templates, terms).
  4. Global Contacts (Inquiry email, phone, location address, operating hours).
- **Sub-footer:** Copyright `© 2026 AskChips Inc. All rights reserved.` + Privacy policy link.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary Navigation CTA | "Upload BOM File" |
| Hero Secondary CTA | "Explore PCB Capabilities" |
| Header Mobile Menu Button | "Open Navigation Menu" / "Close Navigation Menu" (ARIA label) |
| Empty State (BOM dropzone) | Heading: "Drag & drop your BOM file here" <br> Body: "Supports Excel (.xlsx, .xls) and CSV up to 15MB" |
| Error State (Invalid format) | Heading: "Unsupported file type" <br> Body: "Please upload a valid spreadsheet file (.xlsx, .xls, or .csv)" |
| Error State (File too large) | Heading: "File size limit exceeded" <br> Body: "Your file exceeds the 15MB limit. Please compress or email directly to rfq@askchips.com" |
| Destructive Action | Action: Remove uploaded file <br> Button: "Remove File" |

---

## UI Considerations

Applicable state considerations resolved: 5 covered, 0 backstop, 0 unresolved.

| Category | Element(s) | Status | Resolution / Reason |
|----------|------------|--------|---------------------|
| empty | BOM Drag-and-Drop Dropzone | ✓ covered | When no file is attached, displays dashed slate border, upload cloud icon, and documented copy: "Drag & drop your BOM file here". |
| populated | BOM Attached Card | ✓ covered | Displays file name, file size badge, green checkmark icon, and accessible "Remove File" button. |
| loading | RFQ / Form Submit CTA | ✓ covered | Disables button, adds spinning SVG spinner, and updates text to "Processing...". |
| error | Validation Banners & Inputs | ✓ covered | Inputs highlight with `border-red-500` and display text-xs crimson error explanation below input. |
| overflow | Mobile Navigation Drawer | ✓ covered | Full viewport height overlay with `overflow-y-auto` preventing body scroll while open. |

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| none | none | not required (Vanilla HTML/Tailwind) |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS
- [x] Dimension 7 Inventory Provenance: PASS

**Approval:** approved 2026-10-14
