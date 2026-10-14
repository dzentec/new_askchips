---
phase: "2"
slug: "core-marketing-sourcing-pages"
status: approved
shadcn_initialized: false
preset: none
created: "2026-10-14"
reviewed_at: "2026-10-14T21:41:00Z"
---

# Phase 2 - UI Design Contract: Core Marketing & Sourcing Pages

> Visual and interaction contract for Phase 2: Core Marketing & Sourcing Pages. Governs the layout, typography, components, state management, and asset integration for `index.html` (Home), `components.html` (Components Sourcing), and `about.html` (About & Quality Assurance).

---

## Design System Foundations

| Property | Specification |
|----------|---------------|
| Style Archetype | Clean Industrial / Hi-Tech |
| Canvas Background | `#f8fafc` (`slate-50`) with subtle radial engineering grid pattern |
| Surface Cards | `#ffffff` (`white`) with `#e2e8f0` (`slate-200`) border, `rounded-xl`, `shadow-sm` |
| Primary Typography | Inter (`sans-serif`) for headers, navigation, labels, and body |
| Monospace Typography | JetBrains Mono (`monospace`) for specs, part numbers, metrics, and technical codes |
| Iconography | Lucide Icons (rendered as scalable SVG elements via inline or ESM script) |
| Layout Shell | Multi-page Vite with shared sticky `<header id="global-header">` and `<footer id="global-footer">` |

---

## Color System (60-30-10 Rule)

| Role | Color Name | Hex Code | Tailwind Token | Application Area |
|------|------------|----------|-----------------|------------------|
| **Dominant (60%)** | White / Slate Light | `#ffffff` / `#f8fafc` | `bg-white`, `bg-slate-50` | Primary page canvas, card backgrounds, section alternations |
| **Secondary (30%)** | Slate Dark & Slate Borders | `#0f172a` / `#1e293b` / `#e2e8f0` | `slate-900`, `slate-800`, `border-slate-200` | Headings, dark contrast cards, divider lines, body text (`text-slate-600`) |
| **Accent (10%)** | Cobalt Blue | `#2563eb` (hover: `#1d4ed8`) | `bg-blue-600`, `text-blue-600` | Primary action buttons (CTA), active state badges, key metric highlights |
| **Accent (Quality)** | Tech Emerald | `#059669` | `bg-emerald-600`, `text-emerald-600` | Verified checkmarks, anti-counterfeit status tags, ISO trust badges |
| **Warning/Notice** | Industrial Amber | `#d97706` | `bg-amber-600`, `text-amber-600` | Lead-time badges, urgent quote indicators |
| **Destructive** | Crimson Red | `#dc2626` | `bg-red-600`, `text-red-600` | Error messages, file removal |

### Accent Boundary Rules
- **Cobalt Blue (`#2563eb`)** is strictly applied to interactive triggers: primary buttons (`Get Instant Quote`, `Upload BOM File`), focused links, and active interactive tabs.
- **Tech Emerald (`#059669`)** is strictly applied to verification elements: 100% Genuine badges, ISO certification shields, and system readiness indicators.
- Accent colors must **never** be used as generic container backgrounds or raw body text.

---

## Spacing & Grid System

All padding, margins, and gaps must follow the 4px baseline scale:
- `xs` (4px): Icon-to-text spacing, small status tag padding (`px-2 py-0.5`).
- `sm` (8px): Button internal gaps, form field labels, list item margins.
- `md` (16px): Card internal padding on mobile, standard grid column gaps.
- `lg` (24px): Card internal padding on desktop, metric block margins.
- `xl` (32px): Subtitle margins, grid row gaps.
- `2xl` (48px): Section padding on tablet/mobile (`py-12`).
- `3xl` (64px): Section padding on desktop (`py-16` / `py-20`).

Container width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## Typography Hierarchy

| Level | Size | Weight | Tracking / Leading | Font Family | Usage |
|-------|------|--------|---------------------|-------------|-------|
| Hero Display | `text-4xl md:text-5xl lg:text-6xl` | Bold (700) | `tracking-tight leading-[1.1]` | Inter | Primary hero headlines |
| Section H2 | `text-3xl md:text-4xl` | Bold (700) | `tracking-tight leading-snug` | Inter | Major section headings |
| Subsection H3 | `text-xl md:text-2xl` | Semibold (600) | `leading-normal` | Inter | Card titles, feature names |
| Card Title H4 | `text-lg` | Semibold (600) | `leading-normal` | Inter | Capability items, equipment names |
| Body Lead | `text-lg md:text-xl` | Regular (400) | `leading-relaxed text-slate-600` | Inter | Section introductory summaries |
| Body Text | `text-base` | Regular (400) | `leading-relaxed text-slate-600` | Inter | Default paragraph text |
| Metric Value | `text-3xl md:text-4xl` | Extrabold (800) | `font-mono tracking-tight text-slate-900` | JetBrains Mono | Numerical indicators |
| Microcopy / Tag | `text-xs md:text-sm` | Medium (500) | `uppercase tracking-wider font-mono` | JetBrains Mono | Category badges, spec labels |

---

## Page Layout Specifications

### 1. Home Page (`index.html`)

#### A. Hero Section (`#hero`)
- **Headline**: "Precision Sourcing & Turnkey PCB Manufacturing"
- **Sub-headline**: "Single-source procurement for tier-1 electronic components, high-density PCBs, and rapid PCBA assembly. Backed by in-house anti-counterfeit laboratory inspection."
- **CTAs**:
  - Primary: "Upload BOM for Instant Quote" (`bg-blue-600 text-white hover:bg-blue-700 shadow-md flex items-center gap-2`) -> routes to `#quick-quote` or opens RFQ modal.
  - Secondary: "Explore PCB Capabilities" (`bg-white text-slate-900 border border-slate-300 hover:bg-slate-50`) -> links to `pcb.html`.
- **Metrics Ribbon (4 Cards)**:
  1. `18+ Years`: "Industry Experience & Supply Chain Mastery"
  2. `50,000+`: "Completed Orders for Global Hardware Teams"
  3. `99.8%`: "On-Time Dispatch for Prototypes & Mass Production"
  4. `100%`: "Genuine Guarantee with In-House Lab Testing"

#### B. Core Service Pillars (`#services`)
- 3 High-density cards with hover elevation (`hover:border-blue-400 transition-all`):
  1. **Electronic Components Sourcing**: Active ICs, microcontrollers, passive components, obsolete allocation rescue. 200+ authorized line cards.
  2. **PCB Prototype & Mass Production**: 1-32 layers, HDI, Rigid-Flex, aluminum substrates. 24h quick-turn prototyping.
  3. **Turnkey PCBA Assembly**: High-speed SMT lines, THT, BGA X-ray inspection, conformal coating, and full functional testing.

#### C. Trust & Authorized Line Card Network (`#distributors`)
- Section heading: "Tier-1 Supply Chain & Direct Line Network"
- Grid of 15 distributor/manufacturer logos (using `public/images/distributor/01.webp` to `15.webp`):
  - Texas Instruments, STMicroelectronics, Microchip, Analog Devices, NXP, Infineon, Murata, TDK, etc.
  - Styled with subtle grayscale-to-color hover transition and clean white tile enclosure.

#### D. Why Choose AskChips / Quality Pillars (`#why-us`)
- 4 Engineering pillars with tech icons:
  1. **In-House Testing Laboratory**: Physical, optical, X-ray, and electrical testing before dispatch.
  2. **Global Logistics Hubs**: Dual operations in Shenzhen & Hong Kong for expedited customs clearance.
  3. **Dedicated Field Engineers**: Senior engineers reviewing BOMs for lifecycle obsolescence & second-sourcing.
  4. **Strict Counterfeit Zero-Tolerance**: Comprehensive return and replacement warranty with traceable certs.

#### E. Testimonials / Proof Grid (`#testimonials`)
- 3 Customer case quotes from aerospace, IoT, and industrial automation clients highlighting fast turnaround and zero-defect quality.

#### F. Quick BOM Intake / CTA Strip (`#quick-quote`)
- Dark Slate industrial banner (`bg-slate-900 text-white rounded-2xl p-8 md:p-12`) with instant drag-and-drop BOM intake trigger and 24-hour turnaround SLA guarantee.

---

### 2. Components Sourcing Page (`components.html`)

#### A. Components Hero
- **Headline**: "Direct Semiconductor & Passive Component Sourcing"
- **Sub-headline**: "Eliminate counterfeit risks and allocation delays. Direct access to 15,000,000+ verifiable SKUs with guaranteed factory traceability."
- **Quick Action**: Prominent BOM file drop trigger right in hero.

#### B. Component Taxonomy Grid (`#categories`)
- 8 Primary Categories with technical spec chips:
  1. **Microcontrollers & Processors** (ARM Cortex, RISC-V, DSPs, FPGAs) — `public/images/components/01.webp`
  2. **Power Management ICs** (DC-DC Converters, LDOs, PMICs, Gate Drivers) — `public/images/components/02.webp`
  3. **Memory & Storage** (Flash, EEPROM, DDR4/DDR5, SRAM) — `public/images/components/03.webp`
  4. **Analog & Mixed Signal** (Op-Amps, ADC/DAC, Interfaces, Isolation) — `public/images/components/04.webp`
  5. **Discrete Semiconductors** (MOSFETs, IGBTs, Schottky Diodes, Transistors) — `public/images/components/05.webp`
  6. **Passive Components** (MLCC Capacitors, Chip Resistors, Inductors) — `public/images/components/06.webp`
  7. **Connectors & Electromechanical** (Board-to-board, Terminal blocks, Relays) — `public/images/components/07.webp`
  8. **Wireless & RF Modules** (Wi-Fi 6, BLE, LoRa, Cellular IoT) — `public/images/components/08.webp`

#### C. Quality & Anti-Counterfeit Inspection Highlights
- Step-by-step visual inspection card detailing:
  - Visual inspection under 40x magnification
  - Marking permanency & surface acetone test
  - X-ray die and wire-bond integrity
  - Solderability and lead oxidation analysis

#### D. Sourcing Services Matrix
- Table or cards highlighting: Scheduled Orders, Buffer Stock Agreements, Obsolete Part Cross-Referencing, and Tape-and-Reel Re-packaging.

---

### 3. About & Quality Page (`about.html`)

#### A. Company Story & Facilities Hero
- **Headline**: "Engineering Trust Into Every Component & Circuit"
- **Sub-headline**: "Founded with a single mission: to deliver uncompromising authenticity and industrial-grade electronics manufacturing to global technology leaders."

#### B. In-House Inspection Laboratory Showcase (`#lab-equipment`)
- Grid of 9 real laboratory equipment photos (`public/images/about/001.webp` – `009.webp`):
  1. `001.webp`: High-Resolution X-Ray Inspection System (Internal die and wire bond verification)
  2. `002.webp`: Automated Optical Inspection (AOI) Station
  3. `003.webp`: Metallurgical High-Power Microscope (Marking and lead frame examination)
  4. `004.webp`: Chemical Decapsulation Station (Die inspection and manufacturer logo validation)
  5. `005.webp`: Solderability Testing Bath (MIL-STD-202 Method 208 lead wettability)
  6. `006.webp`: Heated Chemical Testing (Acetone/acid scrape testing for resurfacing detection)
  7. `007.webp`: Digital IC Parametric Analyzer (Electrical threshold and curve tracing)
  8. `008.webp`: Constant Temperature & Humidity Environmental Aging Chamber
  9. `009.webp`: Anti-Static Clean Packaging & Vacuum Heat Sealing Line

#### C. 6-Step Quality Control Workflow Pipeline (`#qc-workflow`)
- Step 1: Receiving & Documentation Verification
- Step 2: Packaging & Anti-Static Integrity Inspection
- Step 3: High-Magnification Optical & Marking Analysis
- Step 4: Non-Destructive X-Ray Radiography
- Step 5: Destructive Physical Analysis (DPA / Decapsulation upon request)
- Step 6: Certificate of Conformance (CoC) & Secure Packaging

#### D. Certifications & Standards Wall (`#certifications`)
- ISO 9001:2015 Quality Management Certified
- ISO 14001 Environmental Management Certified
- RoHS & REACH Compliant
- IPC-A-610 Class 2 & Class 3 Workmanship Standards
- UL 94V-0 Flammability Rating Certified

---

## Component States & Copywriting Contract

| Element | Default State | Hover / Active State | Loading State | Error State |
|---------|---------------|----------------------|---------------|-------------|
| Primary CTA Button | "Get Instant Quote" or "Upload BOM File" (`bg-blue-600 text-white`) | `bg-blue-700 shadow-md` | "Processing Quote..." with SVG spinner | Disabled with red notification toast |
| Category Card | Slate-200 border, white background | Border-blue-500, slight translate-y (`-translate-y-1 shadow-md`) | N/A | N/A |
| Equipment Card | Slate-200 border, zoom-on-hover image container | Image scale-105, border-blue-400 | Skeleton shimmer | Image fallback placeholder |
| Quick BOM Dropzone | Dashed slate-300 border, cloud upload icon | Dashed blue-500 border, blue-50 background | "Reading File Data..." | "Invalid format (.xlsx, .csv only)" |

---

## Checker Sign-Off Checklist

- [x] Dimension 1 Copywriting: Clear, professional industrial terminology without fluff.
- [x] Dimension 2 Visuals: Clean Industrial aesthetic with real factory and equipment photos (`001.webp` to `009.webp`).
- [x] Dimension 3 Color: 60-30-10 distribution respected (Slate-50, Slate-900/200, Cobalt Blue `#2563eb`, Emerald `#059669`).
- [x] Dimension 4 Typography: Inter for structure, JetBrains Mono for metrics and specs.
- [x] Dimension 5 Spacing: Strictly 4px increments across all containers, cards, and sections.
- [x] Dimension 6 Registry Safety: Zero external fragile registry blocks; native Tailwind utility classes.
- [x] Dimension 7 Asset Provenance: All referenced assets validated against migrated `public/images/`.

**Status**: approved
