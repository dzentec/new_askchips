# Pitfalls Research

**Domain:** Modern B2B PCB & Electronic Components Web Portal
**Researched:** 2026-10-14
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Broken Asset Paths During Multi-Page Static Bundling

**What goes wrong:**
Images or links work during development (`/img/...`), but fail when deployed in subdirectories or after Vite build.

**Why it happens:**
Hardcoded root-relative paths without Vite asset handling or inconsistent folder naming.

**How to avoid:**
Centralize legacy assets into `public/images/` and configure Vite base paths properly. Standardize all asset references.

**Phase to address:**
Phase 1 (Scaffolding & Asset Setup).

---

### Pitfall 2: Overly Complex Client-side BOM Parsing Crashing the UI

**What goes wrong:**
Engineers upload custom multi-tab Excel files or 10,000-row industrial BOMs, freezing the browser thread.

**Why it happens:**
Synchronous heavy parsing of arbitrary spreadsheets without file size limits or web worker offloading.

**How to avoid:**
1. Enforce strict file size limits (e.g. max 15MB).
2. Validate file type and parse only the first sheet / first 50 rows for preview.
3. Treat the file primarily as an inquiry attachment for backend processing while showing a clean preview of detected row count and columns.

**Phase to address:**
Phase 3 (BOM Upload & Interactive Tools).

---

### Pitfall 3: Form Submission Failures & Lack of User Feedback

**What goes wrong:**
A user clicks "Submit RFQ", the form hangs without a spinner, or fails silently with no error message, leading to lost customer leads.

**Why it happens:**
Uncaught promise rejections or missing validation states.

**How to avoid:**
Implement clear client-side validation, disabled loading state on button with spinner, and explicit success modal with inquiry summary and reference ID.

**Phase to address:**
Phase 4 (RFQ Modal & Contact Integration).

---

### Pitfall 4: Generic "Consumer SaaS" Look Instead of Industrial Trust

**What goes wrong:**
The site looks like a whimsical tech startup rather than an established electronic manufacturing and supply chain partner.

**Why it happens:**
Using pastel colors, generic cartoon illustrations, or overly playful typography.

**How to avoid:**
Adopt the "Clean Industrial / Hi-Tech" visual system:
- High-contrast, clean typography (Inter + JetBrains Mono for specs and part numbers)
- Slate/charcoal text on clean white/off-white backgrounds
- Technical accent blue (`#2563eb`) and manufacturing emerald (`#059669`)
- Real factory photography, certification seals (ISO9001, RoHS, UL), and precise spec tables

**Phase to address:**
Phase 1 & Phase 2 (Design System & Page Implementation).

## "Looks Done But Isn't" Checklist

- [ ] **BOM Upload:** Does it handle drag-and-drop, click-to-upload, and keyboard accessibility?
- [ ] **PCB Configurator:** Does changing layers dynamically adjust recommended thickness or options?
- [ ] **Mobile Responsiveness:** Do technical specification tables scroll horizontally without breaking page width?
- [ ] **Asset Quality:** Are all equipment photos crisp and properly aspect-ratio locked?

---
*Pitfalls research for: AskChips B2B Portal*
*Researched: 2026-10-14*
