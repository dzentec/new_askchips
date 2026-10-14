---
phase: "4"
slug: "interactive-bom-upload-inquiry-rfq-system"
status: approved
shadcn_initialized: false
preset: none
created: "2026-10-14"
reviewed_at: "2026-10-14T22:07:30Z"
---

# Phase 4 - UI Design Contract: Interactive BOM Upload & Inquiry / RFQ System

> Visual and interaction contract for Phase 4: Interactive BOM Upload & Universal RFQ System. Governs the drag-and-drop BOM spreadsheet inspector, the universal RFQ modal dialog, and `contact.html`.

---

## Design System Foundations

| Property | Specification |
|----------|---------------|
| Style Archetype | Clean Industrial / Hi-Tech |
| Canvas Background | `#f8fafc` (`slate-50`) with subtle radial engineering grid pattern |
| Modal Surface | `#ffffff` (`white`) with `#e2e8f0` (`slate-200`) border, `rounded-2xl`, `shadow-2xl` |
| Backdrop Overlay | `bg-slate-900/60 backdrop-blur-sm fixed inset-0 z-50` |
| Typography | Inter (`sans-serif`) for UI labels, form controls, and body; JetBrains Mono (`monospace`) for RFQ tracking IDs, file sizes, and row counts |
| Iconography | Lucide Icons (rendered as scalable SVG elements) |

---

## Color System (60-30-10 Rule)

| Role | Color Name | Hex Code | Tailwind Token | Application Area |
|------|------------|----------|-----------------|------------------|
| **Dominant (60%)** | White / Slate Light | `#ffffff` / `#f8fafc` | `bg-white`, `bg-slate-50` | Form surface, input background, contact card canvas |
| **Secondary (30%)** | Slate Dark & Slate Neutral | `#0f172a` / `#1e293b` / `#e2e8f0` | `slate-900`, `slate-800`, `border-slate-300` | Headings, labels, modal header, inactive borders |
| **Accent (10%)** | Cobalt Blue | `#2563eb` (hover: `#1d4ed8`) | `bg-blue-600`, `border-blue-600`, `text-blue-600` | Submit buttons, dragover border highlight, active project type pills |
| **Accent (Success)** | Tech Emerald | `#059669` | `bg-emerald-600`, `text-emerald-600` | File attached badge, submission confirmation checkmark, SLA tag |
| **Destructive** | Crimson Red | `#dc2626` | `bg-red-600`, `text-red-600` | File removal button, input validation error outlines |

---

## Typography Hierarchy

| Level | Size | Weight | Tracking / Leading | Font Family | Usage |
|-------|------|--------|---------------------|-------------|-------|
| Hero Display | `text-3xl md:text-4xl lg:text-5xl` | Bold (700) | `tracking-tight leading-tight` | Inter | Contact page hero headline |
| Modal Title | `text-xl md:text-2xl` | Bold (700) | `tracking-tight` | Inter | RFQ modal heading |
| Section H2 | `text-2xl md:text-3xl` | Bold (700) | `tracking-tight` | Inter | Contact page section headings |
| Form Label | `text-xs md:text-sm` | Semibold (600) | `text-slate-800` | Inter | Input field labels |
| Monospace Meta | `text-xs` | Medium (500) | `font-mono text-slate-500` | JetBrains Mono | File size, row count, tracking ID |
| Error Text | `text-xs` | Medium (500) | `text-red-600` | Inter | Field validation error text |

---

## Interactive Components & Contracts

### 1. Interactive BOM Upload Widget (`#bom-uploader`)

- **Empty Dropzone State**:
  - Container with `border-2 border-dashed border-slate-300 rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-colors`.
  - Hover / Dragover state: `border-blue-500 bg-blue-50/50`.
  - Icon: Cloud upload SVG in `text-blue-500`.
  - Primary text: `Click to select BOM file or drag & drop here`.
  - Microcopy: `Supports Excel (.xlsx, .xls) and CSV up to 15MB • Confidentiality Guaranteed`.
- **Validation Engine**:
  - Allowed extensions: `.xlsx`, `.xls`, `.csv`, `.txt`, `.zip`.
  - Max size: `15 * 1024 * 1024` bytes (15MB).
  - Rejection: Displays red inline warning banner if format or size is invalid.
- **Attached File Preview State**:
  - Border transitions to solid `border-emerald-200 bg-emerald-50/40 rounded-xl p-4`.
  - File details row:
    - Green document SVG icon (`text-emerald-600`).
    - File name (`font-semibold text-slate-900 truncate`).
    - File size in KB/MB (`font-mono text-xs text-slate-500`).
    - Detected row count preview badge (e.g., `42 line items detected`).
    - Accessible "Remove File" button (`text-red-600 hover:text-red-700 text-xs font-semibold`).

### 2. Universal RFQ Modal Dialog (`#rfq-modal`)

- **Triggering Contract**:
  - Any element with `data-trigger="rfq-modal"` automatically opens the modal.
  - Global method `window.openRfqModal(options)` allows pre-filling project type, PCB specs, or attached file name.
- **Modal Header**:
  - Title: `Request for Quotation (RFQ)`.
  - Subtitle: `24-Hour Technical Review & Pricing SLA`.
  - Close button with `aria-label="Close dialog"` and Escape key listener.
- **Form Fields**:
  1. `projectType`: Pills selector: `Electronic Components`, `PCB Fabrication`, `Turnkey PCBA`, `BOM Cost-Down`.
  2. `fullName`: Text input, required.
  3. `email`: Email input, required (valid email regex).
  4. `company`: Text input, required.
  5. `phone`: Tel/text input, optional.
  6. `bomUpload`: Embedded interactive BOM dropzone.
  7. `message`: Textarea for special requirements, target pricing, or tolerances.
- **Submission Feedback State**:
  - Submit button shows spinning SVG loader and `Processing RFQ...`.
  - Upon submission (mock network delay ~600ms):
    - Confetti or checkmark circle animation in Tech Emerald (`#059669`).
    - Generated RFQ Reference Number (e.g. `ASK-2026-8941`) in JetBrains Mono.
    - Confirmation notice: `Thank you! Your quotation request has been dispatched to our engineering team in Shenzhen & Hong Kong. You will receive an itemized quote within 24 hours.`
    - "Done" button to dismiss dialog.

### 3. Contact & Direct Sales Page (`contact.html`)

- **Hero & Trust Badge**: "DIRECT INQUIRY & GLOBAL ENGINEERING SUPPORT".
- **2-Column Layout**:
  - **Left Column (7 cols)**: Dedicated Full-Scale RFQ Form with embedded BOM uploader, PCB spec summary import, and real-time validation.
  - **Right Column (5 cols)**: Direct Contact Channels & Facilities Directory:
    1. **Shenzhen Quality Lab & HQ**:
       - Address: High-Tech Industrial Park, Nanshan District, Shenzhen, China
       - Phone: `+86 755 8329 1188`
       - Email: `rfq@askchips.com`
       - Operating Hours: Mon – Sat 08:30 – 20:30 (UTC+8)
    2. **Hong Kong Logistics Hub**:
       - Address: Kowloon International Logistics Center, Hong Kong
       - Email: `logistics@askchips.com`
       - Rapid Air Dispatch: Daily via DHL, FedEx, UPS
    3. **Engineering Support Guarantee**:
       - `< 24 Hours Response Time`
       - `Bilateral Non-Disclosure Agreement (NDA) Available`
       - `Direct Field Application Engineer (FAE) Assigned`

---

## Component States & Copywriting Contract

| Element | Default State | Hover / Active State | Loading State | Error State |
|---------|---------------|----------------------|---------------|-------------|
| Universal Modal CTA | "Upload BOM File" (`bg-blue-600 text-white`) | `bg-blue-700 shadow-md` | N/A | N/A |
| RFQ Submit Button | "Submit RFQ Request" (`bg-blue-600 text-white font-semibold`) | `bg-blue-700 shadow-md` | "Processing RFQ..." with spinner | Disabled if required inputs empty |
| Dropzone Box | Dashed slate-300 border, slate-50 background | Dashed blue-500, blue-50/50 background | "Reading Spreadsheet..." | Red border with error text below |
| Remove File Button | "Remove File" (`text-red-600`) | `text-red-700 underline` | N/A | N/A |

---

## Checker Sign-Off Checklist

- [x] Dimension 1 Copywriting: Clear B2B procurement terms, accurate file types (.xlsx, .xls, .csv), and 24h SLA.
- [x] Dimension 2 Visuals: Clean Industrial aesthetic with high-contrast borders and modal backdrop blur.
- [x] Dimension 3 Color: 60-30-10 distribution respected (Slate-50 canvas, Dark Slate modal highlights, Cobalt Blue `#2563eb` CTA, Tech Emerald `#059669` success).
- [x] Dimension 4 Typography: Inter for form UI, JetBrains Mono for RFQ reference IDs, file sizes, and row counts.
- [x] Dimension 5 Spacing: Strictly 4px increments across all form inputs, modals, and contact columns.
- [x] Dimension 6 Registry Safety: Zero fragile external dependencies; pure native Vanilla JavaScript ES module.
- [x] Dimension 7 Asset Provenance: All icons and assets adhere to standard Lucide SVG and local project paths.

**Status**: approved
