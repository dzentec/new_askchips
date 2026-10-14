# Project Research Summary

**Project:** AskChips Website Redesign
**Domain:** Modern B2B Electronic Components & PCB/PCBA Portal
**Researched:** 2026-10-14
**Confidence:** HIGH

## Executive Summary

The AskChips redesign transforms a legacy B2B website into a modern, high-converting digital portal for global hardware engineers and procurement managers. Successful portals in this domain (e.g. Mouser, JLCPCB, PCBWay) succeed by instilling technical authority, providing clear capability specifications, and making the request-for-quote (RFQ) process completely frictionless.

Our recommended approach pairs a lightweight, lightning-fast Vite multi-page architecture with Tailwind CSS for a Clean Industrial / Hi-Tech aesthetic. We preserve and upgrade all rich visual assets from the original site (equipment photos, certifications, process diagrams, client trust markers) while introducing modern interactive tooling: client-side BOM file upload/validation and a dynamic PCB specification calculator.

Key risks include handling heavy spreadsheet uploads, maintaining crisp mobile responsiveness across complex technical tables, and ensuring smooth form submission feedback. These are addressed upfront through defensive validation, responsive container strategies, and unified modal dispatchers.

## Key Findings

### Recommended Stack

- **Vite 5**: Fast multi-page static site generator and dev server.
- **Tailwind CSS 3**: Clean Industrial utility styling, custom token palette (Slate neutrals, Cobalt Blue, Tech Emerald).
- **Vanilla ES2022 JavaScript**: Componentized, zero-framework runtime overhead, accessible DOM interactions.
- **Lucide Icons**: Crisp SVG iconography for hardware, supply chain, and interface elements.

### Expected Features

**Must Have (Table Stakes):**
- Modern 5-page responsive layout (Home, Components, PCB & PCBA, About, Contact).
- Interactive BOM upload with drag-and-drop and instant feedback.
- Interactive PCB spec configurator with reactive summary card.
- Comprehensive technical capability tables (layer count, tolerances, finishes, materials).
- Complete reuse of legacy photography, factory equipment showcases, and certifications.
- Clean RFQ submission modal with client-side validation.

**Should Have (Differentiators):**
- Real-time spec calculation and summary synchronization with RFQ payload.
- In-browser BOM file inspection and row counter.
- Clean Industrial design language conveying rigorous engineering quality.

### Critical Pitfalls

1. **Asset Path Inconsistencies**: Prevented by consolidating legacy assets into `public/images/`.
2. **Spreadsheet UI Freezing**: Prevented by lightweight client-side inspection rather than heavy full-workbook recalculation.
3. **Form Feedback Blackholes**: Prevented by animated loading states and confirmation modals.
4. **Generic Aesthetic**: Prevented by adopting precise technical typography (Inter + JetBrains Mono) and factory evidence.

## Implications for Roadmap

Suggested phase structure for the AskChips Redesign:

### Phase 1: Foundation, Design System & Asset Pipeline
**Rationale:** Establish project tooling, configure Vite multi-page setup, build Clean Industrial Tailwind design system, and migrate/optimize legacy images from `.init_docs/origin_old_site`.
**Delivers:** Vite workspace, base styles, navigation header, footer, typography tokens, and public asset library.

### Phase 2: Core Marketing & Capability Pages
**Rationale:** Implement the primary content pages that showcase the company's value proposition, equipment, and services using the migrated assets.
**Delivers:** Home (`index.html`), Components Sourcing (`components.html`), and About (`about.html`).

### Phase 3: PCB & PCBA Technical Showcases & Interactive Configurator
**Rationale:** PCB manufacturing is the core engineering pillar requiring dense capability tables and the interactive specification configurator.
**Delivers:** PCB & PCBA page (`pcb.html`), reactive PCB spec calculator component, and dynamic summary card.

### Phase 4: Interactive BOM Upload & RFQ / Inquiry System
**Rationale:** Provide the primary conversion mechanisms allowing customers to upload BOMs or submit targeted requests for quotes.
**Delivers:** Interactive BOM drag-and-drop tool, client-side spreadsheet inspection, global RFQ modal dialog, and Contact page (`contact.html`).

### Phase 5: Polish, Responsive QA, Performance & Build Verification
**Rationale:** Validate all user interactions, test responsive layouts across desktop/tablet/mobile, audit SEO metadata, and verify production Vite build.
**Delivers:** Production build bundle, accessibility and performance audit, end-to-end verification.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Vite + Tailwind + Vanilla JS is proven, ultra-fast, and easy to deploy |
| Features | HIGH | Table stakes and differentiators mapped directly from industry best practices |
| Architecture | HIGH | Clean multi-page static structure with modular JS components |
| Pitfalls | HIGH | Clear prevention strategies for asset paths, BOM files, and forms |

**Overall confidence:** HIGH

---
*Research completed: 2026-10-14*
*Ready for roadmap: yes*
