# Architecture Research

**Domain:** Modern B2B PCB & Electronic Components Web Portal
**Researched:** 2026-10-14
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
├──────────────────────────────┬──────────────────────────────┤
│  Multi-Page HTML Templates   │      Interactive Modules     │
│  - index.html (Home)         │      - BOM Upload Widget     │
│  - components.html           │      - PCB Configurator      │
│  - pcb.html (PCB & PCBA)     │      - RFQ Modal System      │
│  - about.html                │      - Mobile Drawer Nav     │
│  - contact.html              │                              │
├──────────────────────────────┴──────────────────────────────┤
│                      Shared UI Foundation                   │
├─────────────────────────────────────────────────────────────┤
│  - CSS Design Tokens (Tailwind CSS Clean Industrial theme)  │
│  - Global Header & Footer Components                        │
│  - Reusable Form Validators & Notifications                 │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `navbar.js` | Top navigation, active state, mobile menu toggle, sticky header shadow | Vanilla JS module loaded on all pages |
| `bom-uploader.js` | Drag & drop zone, file type/size validation, file preview, state sync with RFQ | Modular JS component with event emitter |
| `pcb-configurator.js` | State management of PCB specs (layers, dimensions, finish, quantity), dynamic price/summary card update | Reactive Vanilla JS state store |
| `rfq-modal.js` | Lead capture dialog, input validation, success notification, BOM/PCB data payload packaging | Accessible modal dialog pattern |
| `theme.css` | Tailored typography, color variables, grid backgrounds, badge styles | Tailwind directives + custom utility classes |

## Recommended Project Structure

```
askchips/
├── .planning/                  # GSD planning documentation
├── .init_docs/                 # Original reference materials & legacy assets
├── public/                     # Static assets served as-is
│   ├── favicon.svg
│   └── images/                 # Processed & optimized legacy images
│       ├── about/
│       ├── benefit/
│       ├── components/
│       ├── equipment/
│       └── pcb/
├── src/                        # Source scripts and styles
│   ├── css/
│   │   └── main.css            # Tailwind & custom tokens
│   ├── js/
│   │   ├── main.js             # Global utilities & initialization
│   │   ├── bom-uploader.js     # BOM drag-and-drop & validator
│   │   ├── pcb-configurator.js # Interactive PCB spec calculator
│   │   └── rfq-modal.js        # Inquiry modal & form handler
├── index.html                  # Home page
├── components.html             # Electronic components sourcing page
├── pcb.html                    # PCB & PCBA manufacturing page
├── about.html                  # About AskChips & Quality assurance
├── contact.html                # Contact & Direct RFQ page
├── package.json
├── vite.config.js              # Multi-page build configuration
└── tailwind.config.js          # Design tokens & color system
```

### Structure Rationale

- **Multi-page HTML at root:** Standard Vite multi-page convention; yields clean production outputs and direct static deployment.
- **`src/js/` modularity:** Isolates complex interactive logic (`pcb-configurator.js`, `bom-uploader.js`) so pages only load the scripts they need.
- **`public/images/`:** Directly serves optimized legacy assets without complex path rewriting.

## Architectural Patterns

### Pattern 1: Reactive State for PCB Configurator

Keep state plain and predictable without framework overhead.

```javascript
class PCBConfigurator {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.state = {
      boardType: 'FR4',
      layers: 2,
      dimensions: { width: 100, height: 100, unit: 'mm' },
      quantity: 10,
      thickness: 1.6,
      copperWeight: '1oz',
      surfaceFinish: 'HASL with lead',
      solderMask: 'Green',
      silkscreen: 'White'
    };
    this.init();
  }

  update(key, value) {
    this.state[key] = value;
    this.renderSummary();
  }

  renderSummary() {
    // updates sticky spec summary card
  }
}
```

### Pattern 2: Global RFQ Dispatcher

A unified event listener allows any button on any page (`data-action="open-rfq"`, `data-subject="PCB Quote"`) to trigger the RFQ modal pre-filled with context.

## Anti-Patterns to Avoid

- **Monolithic Single File:** Do not dump all pages into one giant 3000-line index.html; keep clear, SEO-friendly multi-page URLs.
- **Unbounded CSS Sprawl:** Avoid inline ad-hoc styles; use centralized Tailwind utility classes and CSS design tokens.

---
*Architecture research for: AskChips B2B Portal*
*Researched: 2026-10-14*
