# Requirements: AskChips Website Redesign

**Defined:** 2026-10-14
**Core Value:** Deliver a reliable, visually stunning, and frictionless digital portal that maximizes inquiry conversion through interactive BOM uploads, real-time PCB specification configuration, and credible presentation of manufacturing capabilities.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Architecture, Design System & Asset Foundation (ARCH)

- [ ] **ARCH-01**: Multi-page Vite workspace configured with clean HTML entrypoints (index, components, pcb, about, contact)
- [ ] **ARCH-02**: Clean Industrial / Hi-Tech design system established with Tailwind CSS (neutral canvas, electric blue/emerald accents, Inter + JetBrains Mono)
- [ ] **ARCH-03**: Legacy high-res assets migrated from `.init_docs/origin_old_site` into `public/images/` and optimized for responsive rendering
- [ ] **ARCH-04**: Reusable global header with responsive navigation drawer and sticky state
- [ ] **ARCH-05**: Reusable global footer with company links, certifications, and contact channels

### Core Marketing & Sourcing Pages (MKTG)

- [ ] **MKTG-01**: Home page (`index.html`) featuring hero value prop, quick RFQ trigger, core service pillars, and trust metrics
- [ ] **MKTG-02**: Components sourcing page (`components.html`) presenting IC categories, authorized distributor ties, guarantee badges, and direct BOM upload trigger
- [ ] **MKTG-03**: About page (`about.html`) presenting company history, testing facilities, ISO certifications, and QC inspection process

### PCB & PCBA Capabilities & Interactive Configurator (PCB)

- [ ] **PCB-01**: PCB & PCBA page (`pcb.html`) detailing rigid, flex, metal-core, and assembly capabilities with rich technical tolerance tables
- [ ] **PCB-02**: Interactive PCB specification calculator allowing selection of layers, base material, thickness, copper weight, and surface finish
- [ ] **PCB-03**: Reactive PCB spec summary card that updates dynamically in real-time as parameters change and auto-binds to the RFQ inquiry flow

### Interactive BOM Upload & Inquiry / RFQ System (INQ)

- [ ] **INQ-01**: Interactive BOM file upload tool with drag-and-drop zone, file type validation (.xlsx, .xls, .csv), and size check
- [ ] **INQ-02**: Client-side BOM inspector preview showing detected filename, size, and parsed row count
- [ ] **INQ-03**: Universal RFQ modal dialog pre-fillable from any page CTA with client-side form validation
- [ ] **INQ-04**: Contact page (`contact.html`) with office information, direct inquiry form, and interactive submission feedback

### Quality, SEO & Production Build (QUAL)

- [ ] **QUAL-01**: Fully responsive layout verified on mobile, tablet, and desktop viewports
- [ ] **QUAL-02**: Complete SEO metadata, OpenGraph tags, semantic HTML5 structure, and accessibility markup
- [ ] **QUAL-03**: Zero-error production build generated via `npm run build`

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Multilingual & Portals

- **I18N-01**: Multi-language localization switcher (English, Russian, Chinese)
- **PORT-01**: Customer portal with account dashboard and RFQ tracking code history
- **PRIC-01**: Real-time automated pricing engine API for standard 2-layer PCBs

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| E-commerce cart and automated consumer payment | High-mix B2B electronics manufacturing operates via custom RFQ quotation |
| Live ERP warehouse inventory API synchronization | Focus is on high-converting client BOM intake and RFQ routing in v1 |
| Heavy 3D WebGL PCB model rendering | Degrades load time and mobile performance; interactive 2D configurator and crisp photography are preferred |

## Traceability

Which phases cover which requirements.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ARCH-01 | Phase 1 | Pending |
| ARCH-02 | Phase 1 | Pending |
| ARCH-03 | Phase 1 | Pending |
| ARCH-04 | Phase 1 | Pending |
| ARCH-05 | Phase 1 | Pending |
| MKTG-01 | Phase 2 | Pending |
| MKTG-02 | Phase 2 | Pending |
| MKTG-03 | Phase 2 | Pending |
| PCB-01 | Phase 3 | Pending |
| PCB-02 | Phase 3 | Pending |
| PCB-03 | Phase 3 | Pending |
| INQ-01 | Phase 4 | Pending |
| INQ-02 | Phase 4 | Pending |
| INQ-03 | Phase 4 | Pending |
| INQ-04 | Phase 4 | Pending |
| QUAL-01 | Phase 5 | Pending |
| QUAL-02 | Phase 5 | Pending |
| QUAL-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 18
- Unmapped: 0 ✓

---
*Requirements defined: 2026-10-14*
*Last updated: 2026-10-14 after initial definition*
