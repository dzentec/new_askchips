---
phase: "3"
slug: "pcb-pcba-capabilities-interactive-configurator"
status: approved
shadcn_initialized: false
preset: none
created: "2026-10-14"
reviewed_at: "2026-10-14T21:57:30Z"
---

# Phase 3 - UI Design Contract: PCB & PCBA Capabilities & Interactive Configurator

> Visual and interaction contract for Phase 3: PCB & PCBA Capabilities & Interactive Configurator. Governs the layout, parameter state engine, technical matrices, and responsive summary card for `pcb.html`.

---

## Design System Foundations

| Property | Specification |
|----------|---------------|
| Style Archetype | Clean Industrial / Hi-Tech |
| Canvas Background | `#f8fafc` (`slate-50`) with subtle radial engineering grid pattern |
| Surface Cards | `#ffffff` (`white`) with `#e2e8f0` (`slate-200`) border, `rounded-xl`, `shadow-sm` |
| Primary Typography | Inter (`sans-serif`) for headers, navigation, labels, and descriptions |
| Monospace Typography | JetBrains Mono (`monospace`) for all dimensions, tolerances, layer counts, and summary specs |
| Iconography | Lucide Icons (rendered as scalable SVG elements) |
| Layout Shell | Multi-page Vite with shared sticky `<header id="global-header">` and `<footer id="global-footer">` |

---

## Color System (60-30-10 Rule)

| Role | Color Name | Hex Code | Tailwind Token | Application Area |
|------|------------|----------|-----------------|------------------|
| **Dominant (60%)** | White / Slate Light | `#ffffff` / `#f8fafc` | `bg-white`, `bg-slate-50` | Page canvas, configurator form container, technical table backgrounds |
| **Secondary (30%)** | Slate Dark & Slate Borders | `#0f172a` / `#1e293b` / `#e2e8f0` | `slate-900`, `slate-800`, `border-slate-200` | Headings, table headers, inactive option pills, border dividers, body copy |
| **Accent (10%)** | Cobalt Blue | `#2563eb` (hover: `#1d4ed8`) | `bg-blue-600`, `border-blue-600`, `text-blue-600` | Active selected option pill, primary "Submit RFQ" button, focused input borders |
| **Accent (Quality)** | Tech Emerald | `#059669` | `bg-emerald-600`, `text-emerald-600` | Fast 24h lead-time badge, standard capability indicators, IPC-A-610 badges |
| **Warning/Advanced** | Industrial Amber | `#d97706` | `bg-amber-600`, `text-amber-600` | Advanced capability flags (e.g. 3mil trace, micro-via, heavy copper) |

### Accent Boundary Rules
- **Active Selection**: Option buttons (chips) toggle between inactive (`bg-white border-slate-300 text-slate-700 hover:border-slate-400`) and active (`bg-blue-600 border-blue-600 text-white font-semibold shadow-sm`).
- **Color Swatches**: Solder mask color pickers show authentic circular swatches with active high-contrast ring (`ring-2 ring-blue-600 ring-offset-2`).
- **Summary Highlight**: Calculated estimated lead-time chips use Tech Emerald (`bg-emerald-50 text-emerald-700 border border-emerald-200`).

---

## Typography Hierarchy

| Level | Size | Weight | Tracking / Leading | Font Family | Usage |
|-------|------|--------|---------------------|-------------|-------|
| Hero Display | `text-4xl md:text-5xl` | Bold (700) | `tracking-tight leading-[1.15]` | Inter | PCB hero headline |
| Section H2 | `text-2xl md:text-3xl` | Bold (700) | `tracking-tight leading-snug` | Inter | Section & Tab headings |
| Subsection H3 | `text-lg md:text-xl` | Semibold (600) | `leading-normal` | Inter | Configurator field group labels |
| Table Header | `text-xs md:text-sm` | Semibold (600) | `uppercase tracking-wider font-mono` | JetBrains Mono | Spec table headers |
| Table Data | `text-xs md:text-sm` | Regular/Medium | `font-mono text-slate-700` | JetBrains Mono | Tolerance values, layers, limits |
| Summary Key | `text-xs` | Medium (500) | `uppercase text-slate-500 font-mono` | JetBrains Mono | Summary parameter name |
| Summary Value | `text-sm font-semibold` | Semibold (600) | `text-slate-900 font-mono` | JetBrains Mono | Summary parameter value |

---

## Page Architecture & Layout (`pcb.html`)

### 1. Hero Section (`#pcb-hero`)
- **Headline**: "Precision PCB Fabrication & Turnkey PCBA Assembly"
- **Sub-headline**: "From rapid 24-hour prototypes to high-volume multi-layer production. 1 to 32 layers, HDI micro-vias, flex-rigid substrates, and automated SMT assembly."
- **Quick Links / Anchor Navigation Bar**:
  - `Configure Specifications` (`#configurator`)
  - `PCB Capabilities Table` (`#capabilities-table`)
  - `PCBA Assembly Standards` (`#pcba-assembly`)

### 2. Interactive PCB Configurator (`#configurator`)
A 2-column engineering workbench:
- **Left Column (2/3 width on desktop)**: Parameter selection groups.
- **Right Column (1/3 width on desktop)**: Sticky real-time specification summary card (`#spec-summary`).

#### Configurator Form Fields & Options
1. **Layer Count**:
   - Options: `1 Layer`, `2 Layers` (default), `4 Layers`, `6 Layers`, `8 Layers`, `10 Layers`, `12 Layers`, `16+ Layers`.
2. **Base Material**:
   - Options: `FR4 Standard TG140` (default), `High-TG170 FR4`, `Rogers (RF High-Freq)`, `Aluminum Core`, `Polyimide Flex`.
3. **Board Dimensions**:
   - Number inputs: Length (`mm`) × Width (`mm`). Default: `100` × `100` mm.
   - Quick presets: `50x50mm`, `100x100mm`, `150x100mm`, `Custom`.
4. **Board Thickness**:
   - Options: `0.6mm`, `0.8mm`, `1.0mm`, `1.2mm`, `1.6mm` (default), `2.0mm`, `2.4mm`.
5. **Copper Weight (Outer/Inner)**:
   - Options: `1oz / 1oz` (default), `2oz / 1oz`, `2oz / 2oz`, `3oz / 2oz (Heavy Copper)`.
6. **Surface Finish**:
   - Options: `Lead-Free HASL (RoHS)` (default), `ENIG (Immersion Gold)`, `HASL with Lead`, `Immersion Silver`, `OSP`.
7. **Solder Mask Color**:
   - Color swatch options: `Green` (default `#15803d`), `Matte Black` (`#1e293b`), `Blue` (`#2563eb`), `Red` (`#dc2626`), `White` (`#f8fafc`), `Yellow` (`#eab308`).
8. **Silkscreen Color**:
   - Options: `White` (default), `Black`.
9. **Order Quantity**:
   - Options: `5 pcs` (default), `10 pcs`, `20 pcs`, `50 pcs`, `100 pcs`, `500 pcs`, `1000+ pcs`.

#### Sticky Spec Summary Card (`#spec-summary`)
- Card surface: `bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 sticky top-24`.
- **Top Badge**: "LIVE SPECIFICATION SUMMARY".
- **Dynamic Parameter Rows** (JetBrains Mono):
  - Layers & Material
  - Dimensions & Total Area ($m^2$)
  - Thickness & Copper Weight
  - Surface Finish & Colors
  - Quantity
- **Calculated Turnaround SLA**:
  - `24 Hours Express` for 1-2 layers small batch.
  - `48-72 Hours` for 4-6 layers.
  - `5-7 Days` for 8+ layers or Rogers/Flex.
- **Action Button**: "Submit Parameters for Instant RFQ"
  - Stores configured state into `localStorage.getItem('askchips_pcb_config')` and pre-populates RFQ modal / routes to `contact.html?source=pcb_config`.

### 3. Technical Capabilities Matrix (`#capabilities-table`)
Dense engineering comparison table structured into 4 capability tiers:

| Parameter Category | Standard Capability | Advanced / Prototype Capability | Manufacturing Tolerance |
|--------------------|---------------------|---------------------------------|-------------------------|
| Layer Count | 1 – 16 Layers | Up to 32 Layers | - |
| Base Materials | FR4 (Tg 140/170), Aluminum | Rogers 4350B/4003C, Polyimide Flex | IPC-4101D |
| Board Thickness | 0.4mm – 3.2mm | 0.2mm – 6.0mm | ±10% |
| Max Board Size | 500mm × 600mm | 600mm × 1200mm | ±0.2mm |
| Min Track / Spacing | 4mil / 4mil (0.1mm) | 3mil / 3mil (0.075mm) | ±20% |
| Min Mechanical Drill | 0.20mm (8mil) | 0.15mm (6mil) | ±0.05mm (PTH) |
| Laser Micro-Via | 0.10mm (4mil) | 0.075mm (3mil) | ±0.025mm |
| Aspect Ratio | 8:1 | 12:1 | - |
| Copper Thickness | 1oz – 3oz | 4oz – 6oz (Heavy Copper) | IPC-6012 Class 3 |
| Solder Mask Bridge | 4mil (0.1mm) | 3mil (0.075mm) | - |
| Impedance Tolerance | ±10% | ±5% (Differential / Single-ended) | TDR Tested |

### 4. Turnkey PCBA Assembly Standards (`#pcba-assembly`)
- SMT Line Capabilities:
  - 4 High-speed Yamaha / Panasonic SMT lines.
  - Placement accuracy: ±0.03mm (01005 passive placement, 0.35mm ultra-fine pitch BGA).
  - Inspection: Inline 3D Solder Paste Inspection (SPI), Automated Optical Inspection (AOI), and Transmission X-Ray for void analysis.
  - Soldering environments: 10-zone nitrogen reflow oven and lead-free selective wave soldering.
  - Conformal coating & potting services.

---

## Interactive State Engine & Contracts

```javascript
// State structure maintained in src/js/components/pcb-configurator.js
const pcbState = {
  layers: '2',
  material: 'FR4 Standard TG140',
  lengthMm: 100,
  widthMm: 100,
  thickness: '1.6mm',
  copperWeight: '1oz / 1oz',
  finish: 'Lead-Free HASL (RoHS)',
  solderMask: 'Green',
  silkscreen: 'White',
  quantity: '5 pcs'
};
```

### Event Bindings
- Clicking option chip updates `pcbState`, toggles `.border-blue-600 .bg-blue-600 .text-white` classes, and calls `renderSummary()`.
- Changing dimension inputs immediately re-calculates area in $m^2$ and updates summary badge.
- Clicking "Submit Parameters for Instant RFQ" serializes `pcbState` to `localStorage` and opens inquiry dialog.

---

## Checker Sign-Off Checklist

- [x] Dimension 1 Copywriting: Precise electrical engineering terminology (mil, mm, oz, TG170, ENIG, OSP).
- [x] Dimension 2 Visuals: Clean Industrial layout, 2-column configurator workbench, high-density technical matrix.
- [x] Dimension 3 Color: 60-30-10 distribution respected (Slate-50 canvas, Dark Slate `#0f172a` summary card, Cobalt Blue `#2563eb` active selection, Emerald `#059669` lead-time).
- [x] Dimension 4 Typography: Inter for structure, JetBrains Mono for dimensions, tolerances, and parameter codes.
- [x] Dimension 5 Spacing: Strictly 4px increments across all configurator options, table rows, and containers.
- [x] Dimension 6 Registry Safety: Pure vanilla ES module and native Tailwind utility classes.
- [x] Dimension 7 Asset Integration: Clean diagrams from `public/images/table/` incorporated where relevant.

**Status**: approved
