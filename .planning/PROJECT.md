# AskChips Website Redesign

## What This Is

A modern, high-converting B2B web platform for AskChips, a full-service electronic components sourcing and PCB manufacturing / PCBA assembly provider. It transforms the legacy site into a world-class digital experience for global hardware engineers and procurement teams, featuring rich interactive tools including a BOM file upload interface and a PCB specification configurator.

## Core Value

Deliver a reliable, visually stunning, and frictionless digital portal that maximizes inquiry conversion through interactive BOM uploads, real-time PCB specification configuration, and credible presentation of manufacturing capabilities.

## Business Context

- **Customer**: Hardware engineers, OEM/ODM manufacturers, and electronics procurement professionals.
- **Revenue model**: B2B turnkey manufacturing, PCB fabrication contracts, and component sourcing volume.
- **Success metric**: Qualified RFQs submitted and BOM files uploaded.
- **Strategy notes**: Modernize legacy presence to compete with tier-1 international PCB & component suppliers.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Modern multi-page architecture (Home, Components, PCB & PCBA, About, Contact/RFQ) powered by Vite, Tailwind CSS / Vanilla tokens, and Vanilla JS
- [ ] Clean Industrial / Hi-Tech aesthetic: crisp typography (Inter / JetBrains Mono), bright neutral palette with electric blue/emerald accents, subtle grids, and smooth micro-interactions
- [ ] Interactive BOM upload tool: drag-and-drop area, Excel/CSV format validation, file preview, and RFQ form binding
- [ ] Interactive PCB & PCBA configurator: layers (1-32), materials (FR4, Aluminum, Rogers, Ceramic), board thickness, surface finish, copper weight, and live specification summary
- [ ] Interactive RFQ / Contact system: clean modal & inline forms with instant validation and user feedback
- [ ] Asset preservation & enhancement: reuse and optimize high-resolution equipment photos, certifications, process diagrams, and partner logos from `.init_docs/origin_old_site`
- [ ] SEO, performance, and accessibility: structured schema metadata, OpenGraph tags, semantic HTML5, and responsive mobile-first layouts

### Out of Scope

- E-commerce cart and automated payment checkout - B2B electronics manufacturing operates via custom RFQ quotation
- Live ERP warehouse inventory API synchronization - initial focus is on BOM intake and lead routing
- Non-English localization in v1 - codebase will be structured for future i18n, but English is the primary international B2B target for launch

## Context

- Redesigning and modernizing from legacy site resources located in `.init_docs/origin_old_site` (including equipment photos, technical specifications, and company background).
- Brand is established as AskChips.
- Target audience demands high trust, clear technical parameters, fast load times, and intuitive engineering inquiry tools.

## Constraints

- **Tech Stack**: Vite + modern CSS (Tailwind / CSS tokens) + Vanilla JavaScript for zero-friction maintainability and lightning-fast performance.
- **Visual Style**: Clean Industrial / Hi-Tech (modern light/neutral canvas with tech accents).
- **Primary Language**: English.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Brand: AskChips | Modern brand identity aligned with project requirements | - Pending |
| Clean Industrial / Hi-Tech style | Conveys institutional trust, technical precision, and modern manufacturing quality | - Pending |
| Vite + Multi-page architecture | Ensures snappy navigation, clean URLs, and modular component reusability | - Pending |
| Interactive BOM & PCB Configurator | Reduces inquiry friction and increases B2B conversion | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? Move to Out of Scope with reason
2. Requirements validated? Move to Validated with phase reference
3. New requirements emerged? Add to Active
4. Decisions to log? Add to Key Decisions
5. "What This Is" still accurate? Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-14 after initialization*
