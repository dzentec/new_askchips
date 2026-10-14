# Feature Research

**Domain:** Modern B2B PCB & Electronic Components Web Portal
**Researched:** 2026-10-14
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist in modern electronics sourcing and PCB manufacturing portals. Missing these makes the supplier look unprofessional or obsolete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clean Industrial Visual Hierarchy | Engineers and procurement officers scan technical data rapidly; clean typography and clear tables build trust | LOW | Neutral palette, slate borders, emerald/blue status highlights, monospace part numbers |
| Interactive BOM File Upload | B2B customers have 50-500 line bills of materials in Excel/CSV; uploading must be frictionless | MEDIUM | Drag-and-drop zone, file size/format check, instant upload feedback, optional column mapping |
| Interactive PCB Spec Configurator | Engineers need to select layers, substrate material, copper thickness, surface finish, and quantity to get quotes | MEDIUM | Reactive parameter controls, instant spec summary card, auto-binds to RFQ form |
| Multi-Page Information Architecture | Clear navigation across Home, Components, PCB & PCBA capabilities, About company, and RFQ/Contact | LOW | Consistent header/footer, active route indicator, mobile responsive drawer |
| Rich Capability Showcases | Proof of manufacturing quality: SMT lines, AOI testing, X-Ray inspection, ISO/UL certifications | LOW | Reusing & optimizing equipment photos from legacy assets |
| Instant RFQ Submission & Validation | Direct path to lead capture with immediate validation and success confirmation modal | LOW | Contact details, project deadline, note, file attachment reference |

### Differentiators (Competitive Advantage)

Features that set AskChips apart from generic distributor websites.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Real-time PCB Spec Matrix & Summary Card | Sticky summary card that updates dynamically as users change layers, board thickness, or surface finish | MEDIUM | Provides immediate clarity on configured board parameters before clicking "Submit RFQ" |
| BOM Intake Preview & Validation | Parses client Excel/CSV and displays row count and sample preview directly in the browser | MEDIUM | Eliminates anxiety over whether the file was corrupted or uploaded properly |
| High-Density Technical Capability Tables | Clear technical tolerances (min trace/space, hole size, impedance control, surface finish comparison) | LOW | Transcribed and modernized from legacy tables into responsive interactive cards/tabs |
| Trust Badges & Supply Chain Guarantee | Prominent display of 100% genuine components guarantee, test reports, and factory certifications | LOW | Highlighted across hero sections, footer, and dedicated About section |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem appealing on paper but degrade the B2B conversion experience.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Complex Self-Service E-commerce Checkout | People think of consumer retail checkout | Custom PCB and high-volume component orders fluctuate constantly by volume, lead time, and tariffs; self-checkout causes order disputes | High-converting RFQ and fast quotation turnaround |
| Compulsory User Registration before Quote | Gathering user accounts early | Huge bounce rate for procurement managers who just want a quote for a BOM | Guest RFQ with email confirmation |
| Heavy 3D WebGL PCB Viewers in Hero Banner | Looks flashy | Slows page load by 5-10 seconds on mobile or low-spec office PCs; distracts from core action | Sleek SVG animations, crisp photography, and interactive UI controls |

## Feature Dependencies

```
[Design System & Tokens]
    └──> [Global Layout: Nav/Footer]
             └──> [Core Pages: Home, About, Components, PCB]
                      ├──> [Interactive PCB Configurator] ──> [RFQ Submission Modal]
                      └──> [Interactive BOM Upload Tool]  ──> [RFQ Submission Modal]
```

### Dependency Notes

- **PCB Configurator and BOM Upload Tool connect to RFQ Modal:** When a user configures a PCB or uploads a BOM, the parameters flow directly into the final inquiry form.
- **Global Layout precedes Page Content:** Ensures consistent brand identity, header navigation, and mobile menu across all 5 pages.

## MVP Definition

### Launch With (v1)

- [ ] Complete 5-page site: Home, Components, PCB & PCBA, About, Contact
- [ ] Clean Industrial aesthetic with dark/light harmony, electric blue & emerald accents
- [ ] Interactive BOM upload with client-side drag-and-drop & validation
- [ ] Interactive PCB & PCBA spec calculator / configurator with live spec summary
- [ ] Interactive RFQ modal and contact forms with client validation
- [ ] Complete asset reuse from `.init_docs/origin_old_site` (equipment images, specs, partner logos)
- [ ] Mobile responsive layout and SEO meta tags

### Add After Validation (v1.x)

- [ ] Multi-language switcher (EN / RU / CN)
- [ ] Customer inquiry tracking code generator

### Future Consideration (v2+)

- [ ] Customer portal with account dashboard and order history
- [ ] Automated real-time pricing API for standard 2-layer PCBs

## Sources

- Industry standard B2B electronics suppliers (JLCPCB, PCBWay, Mouser, Digikey, Sierra Circuits)
- AskChips legacy site documentation (`.init_docs/origin_old_site`)

---
*Feature research for: AskChips B2B Portal*
*Researched: 2026-10-14*
