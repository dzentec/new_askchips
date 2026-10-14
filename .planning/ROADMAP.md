# Roadmap: AskChips Website Redesign

## Overview

A structured, phased transformation of AskChips from legacy web pages into a premier, high-converting B2B electronics component sourcing and PCB/PCBA manufacturing portal. The roadmap establishes a robust Vite and Tailwind design foundation, constructs the primary marketing showcase pages using enhanced legacy assets, integrates interactive engineering tooling (BOM file upload & PCB specification configurator), and finalizes production build quality.

## Phases

- [x] **Phase 1: Foundation, Design System & Asset Migration** - Scaffolding Vite multi-page project, Tailwind CSS tokens, global header/footer, and asset migration.
- [x] **Phase 2: Core Marketing & Sourcing Pages** - Implementing Home (`index.html`), Components Sourcing (`components.html`), and About (`about.html`).
- [x] **Phase 3: PCB & PCBA Capabilities & Interactive Configurator** - Implementing `pcb.html`, technical capability tables, and the reactive PCB specification calculator.
- [x] **Phase 4: Interactive BOM Upload & Inquiry / RFQ System** - Implementing client-side BOM drag-and-drop tool, spreadsheet inspector, global RFQ modal, and Contact (`contact.html`).
- [x] **Phase 5: Production Polish, Responsive QA, SEO & Build Verification** - Cross-device responsive QA, OpenGraph/SEO metadata, accessibility audit, and zero-error production build.

## Phase Details

### Phase 1: Foundation, Design System & Asset Migration
**Goal**: Establish a modern, lightning-fast multi-page Vite architecture with a Clean Industrial design system, reusable global layout elements, and migrated legacy image assets.
**Depends on**: Nothing (first phase)
**Requirements**: ARCH-01, ARCH-02, ARCH-03, ARCH-04, ARCH-05
**UI hint**: yes
**Success Criteria**:
  1. Vite multi-page project runs cleanly locally with zero build or runtime warnings.
  2. Tailwind CSS theme defines Clean Industrial color tokens (slate neutrals, tech electric blue `#2563eb`, emerald `#059669`) and typography (Inter + JetBrains Mono).
  3. Legacy image assets from `.init_docs/origin_old_site` are consolidated into `public/images/` and accessible.
  4. Global sticky navigation header and footer are implemented with responsive mobile navigation drawer.
**Plans**: 3 plans

Plans:
- [x] 01-01: Initialize Vite multi-page environment and configure Tailwind CSS tokens & typography
- [x] 01-02: Consolidate and organize legacy image assets into public directory
- [x] 01-03: Implement global navigation header with mobile drawer and comprehensive industrial footer

---

### Phase 2: Core Marketing & Sourcing Pages
**Goal**: Build the primary brand authority pages (Home, Components, About) that articulate AskChips' value proposition, quality guarantees, and distribution network.
**Depends on**: Phase 1
**Requirements**: MKTG-01, MKTG-02, MKTG-03
**UI hint**: yes
**Success Criteria**:
  1. Home page (`index.html`) displays high-impact hero section, core service cards, key numbers/metrics, and instant inquiry triggers.
  2. Components page (`components.html`) showcases IC categories, distribution guarantees, quality control procedures, and BOM call-to-actions.
  3. About page (`about.html`) presents company history, manufacturing facilities, testing equipment showcases, and ISO/UL certification displays.
**Plans**: 3 plans

Plans:
- [x] 02-01: Build high-converting Home page (`index.html`) with hero, service pillars, and trust signals
- [x] 02-02: Build Components Sourcing page (`components.html`) with category taxonomy and distributor assurances
- [x] 02-03: Build About & Quality page (`about.html`) with inspection workflows, equipment galleries, and certifications

---

### Phase 3: PCB & PCBA Capabilities & Interactive Configurator
**Goal**: Deliver the technical showcase for PCB & PCBA manufacturing, including dense engineering specification matrices and an interactive parameter configurator.
**Depends on**: Phase 2
**Requirements**: PCB-01, PCB-02, PCB-03
**UI hint**: yes
**Success Criteria**:
  1. PCB & PCBA page (`pcb.html`) renders comprehensive technical capability tables (layer count, trace/space, hole tolerances, finishes, base materials).
  2. Interactive PCB configurator enables users to select layers (1-32), dimensions, board thickness, copper weight, surface finish, and quantity.
  3. Reactive PCB spec summary card calculates real-time parameters and auto-binds selected specs into the RFQ inquiry flow.
**Plans**: 2 plans

Plans:
- [x] 03-01: Construct `pcb.html` layout with detailed technical specification tables and manufacturing galleries
- [x] 03-02: Develop reactive PCB specification calculator component with sticky real-time summary card

---

### Phase 4: Interactive BOM Upload & Inquiry / RFQ System
**Goal**: Build the conversion engine of the site, featuring drag-and-drop BOM spreadsheet upload, in-browser file validation, and a universal RFQ inquiry modal.
**Depends on**: Phase 3
**Requirements**: INQ-01, INQ-02, INQ-03, INQ-04
**UI hint**: yes
**Success Criteria**:
  1. User can drag-and-drop or select Excel/CSV BOM files with client-side file size and MIME-type validation.
  2. BOM inspector previews file details (name, size, row count preview) and attaches metadata to inquiry payload.
  3. Universal RFQ modal dialog opens from any page CTA with input validation, submission animation, and confirmation dialog.
  4. Contact page (`contact.html`) provides direct contact information, inquiry routing, and location details.
**Plans**: 2 plans

Plans:
- [x] 04-01: Implement interactive BOM upload widget with client-side validation and file preview
- [x] 04-02: Implement universal RFQ modal dialog, state dispatcher, and standalone `contact.html`

---

### Phase 5: Production Polish, Responsive QA, SEO & Build Verification
**Goal**: Ensure the entire digital experience is flawless across devices, meets strict performance and SEO standards, and compiles cleanly to static production assets.
**Depends on**: Phase 4
**Requirements**: QUAL-01, QUAL-02, QUAL-03
**UI hint**: yes
**Success Criteria**:
  1. All pages adapt seamlessly across desktop, tablet, and mobile screens with zero layout clipping or horizontal overflow.
  2. Complete SEO meta descriptions, OpenGraph tags, schema markup, and accessible ARIA attributes across all 5 pages.
  3. `npm run build` generates optimized, zero-error production static assets ready for deployment.
**Plans**: 2 plans

Plans:
- [x] 05-01: Perform cross-device responsive QA and accessibility/SEO metadata hardening
- [x] 05-02: Validate production build bundle, asset paths, and run end-to-end verification

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation, Design System & Asset Migration | 3/3 | Complete | 2026-10-14 |
| 2. Core Marketing & Sourcing Pages | 3/3 | Complete | 2026-10-14 |
| 3. PCB & PCBA Capabilities & Interactive Configurator | 2/2 | Complete | 2026-10-14 |
| 4. Interactive BOM Upload & Inquiry / RFQ System | 2/2 | Complete | 2026-10-14 |
| 5. Production Polish, Responsive QA, SEO & Build Verification | 2/2 | Complete | 2026-10-14 |
