/**
 * AskChips PCB & PCBA Capabilities Catalog Component
 * Renders comprehensive engineering specifications, interactive accordions with full-size diagrams,
 * PCBA comparison matrix by default, and standalone 4-column 9-step order workflow cards.
 */

import { pcbProductionCapabilities, pcbaCapabilities, orderWorkflowSteps } from '../data/pcb-specs-data.js';

export function renderCapabilitiesCatalog() {
  return `
    <div class="space-y-16" id="specs-catalog">
      
      <!-- Primary Catalog Tabs: Manufacturing Encyclopedia & DFM Guide -->
      <div class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-1">
              Manufacturing Encyclopedia & DFM Guide
            </span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comprehensive Technical Capability Tables
            </h2>
          </div>

          <!-- Tab Controls: PCBA first (default active), PCB second -->
          <div class="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium" role="tablist">
            <button type="button" class="catalog-tab-btn active px-4 py-2 rounded-lg font-semibold transition-all shadow-sm bg-white text-blue-600" data-tab="tab-pcba">
              PCBA Assembly Matrix
            </button>
            <button type="button" class="catalog-tab-btn px-4 py-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 transition-all" data-tab="tab-pcb">
              PCB Fabrication (59 Specs)
            </button>
          </div>
        </div>

        <!-- Tab Content 1 (DEFAULT ACTIVE): PCBA Capabilities Matrix -->
        <div id="tab-pcba" class="catalog-tab-pane space-y-6">
          <div class="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr class="bg-slate-900 text-white">
                    <th class="py-3.5 px-4 font-semibold uppercase tracking-wider border-b border-slate-800 w-1/4">Assembly Feature</th>
                    <th class="py-3.5 px-4 font-semibold uppercase tracking-wider border-b border-slate-800 text-blue-300 w-3/8">Economic PCBA</th>
                    <th class="py-3.5 px-4 font-semibold uppercase tracking-wider border-b border-slate-800 text-emerald-300 w-3/8">Standard PCBA</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                  ${renderPcbaTableRows()}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Tab Content 2 (COLLAPSED BY DEFAULT): PCB Production Capabilities (Accordions) -->
        <div id="tab-pcb" class="catalog-tab-pane hidden space-y-4">
          <div class="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 sm:p-5 flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-xs sm:text-sm text-blue-900 leading-relaxed">
              Click on any section header to expand engineering limits, tolerances, and high-resolution IPC cross-section pattern diagrams.
            </p>
          </div>

          <div class="space-y-3" id="pcb-accordions">
            ${renderPcbAccordions()}
          </div>
        </div>
      </div>

      <!-- Dedicated Standalone Section: 9-Step Order Workflow (4 Columns Grid) -->
      <div class="pt-10 border-t border-slate-200/90" id="order-workflow-section">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Manufacturing Protocol
          </span>
          <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            9-Step PCB & PCBA Order & Delivery Workflow
          </h3>
          <p class="mt-2 text-sm sm:text-base text-slate-600">
            Systematic end-to-end procurement process from instant file intake and engineering DFM review to high-precision SMT assembly and global delivery.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${renderWorkflowCards()}
        </div>
      </div>

    </div>
  `;
}

function renderPcbAccordions() {
  return pcbProductionCapabilities.map(group => {
    const rowsHtml = group.rows.map(row => {
      // Full-size direct image display in table cell (no modal zoom required)
      const patternHtml = row.patternImg
        ? `
          <div class="p-1.5 bg-white rounded-lg border border-slate-200/90 shadow-xs inline-block max-w-full">
            <img src="${row.patternImg}" alt="${row.feature} Diagram" class="w-auto max-h-28 object-contain rounded mx-auto" loading="lazy">
          </div>
        `
        : `<span class="text-slate-300 font-mono text-[11px]">—</span>`;

      return `
        <tr class="hover:bg-slate-50/80 transition border-b border-slate-100 align-top">
          <td class="py-3 px-4 font-semibold text-slate-900 w-1/4">${row.feature}</td>
          <td class="py-3 px-4 font-mono text-slate-800 text-xs w-1/4">
            <span class="inline-block bg-slate-100 px-2 py-0.5 rounded border border-slate-200">${row.capability}</span>
          </td>
          <td class="py-3 px-4 text-xs text-slate-600 w-1/4">${row.notes || '<span class="text-slate-300">—</span>'}</td>
          <td class="py-3 px-4 text-center w-1/4">${patternHtml}</td>
        </tr>
      `;
    }).join('');

    // All accordions collapsed by default
    return `
      <div class="industrial-card overflow-hidden">
        <button type="button" class="accordion-header w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-slate-50 text-left transition" aria-expanded="false">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-slate-400"></span>
            <span class="text-base font-bold text-slate-900">${group.title}</span>
            <span class="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              ${group.rows.length} specs
            </span>
          </div>
          <svg class="accordion-chevron w-5 h-5 text-slate-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="accordion-body hidden border-t border-slate-100 bg-white">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/4">Feature</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/4">Capability</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/4">Engineering Notes</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider text-center w-1/4">Pattern Reference</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderPcbaTableRows() {
  return pcbaCapabilities.map(row => `
    <tr class="hover:bg-slate-50 transition border-b border-slate-100">
      <td class="py-3 px-4 font-semibold text-slate-900">${row.feature}</td>
      <td class="py-3 px-4 text-slate-700 bg-slate-50/50">${row.economic}</td>
      <td class="py-3 px-4 text-slate-900 font-semibold bg-emerald-50/20">${row.standard}</td>
    </tr>
  `).join('');
}

function renderWorkflowCards() {
  return orderWorkflowSteps.map(step => `
    <div class="industrial-card p-5 flex flex-col justify-between group hover:border-blue-500 hover:shadow-md transition-all bg-white">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 font-mono font-bold text-xs flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            0${step.step}
          </span>
          <div class="w-10 h-10 rounded-lg bg-slate-50 p-1.5 flex items-center justify-center border border-slate-100">
            <img src="${step.icon}" alt="Step ${step.step}" class="w-full h-full object-contain">
          </div>
        </div>
        <h4 class="text-sm font-bold text-slate-900 mb-1.5">${step.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${step.description}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span class="text-slate-500 font-medium">Stage 0${step.step}</span>
        <span class="text-emerald-600 font-semibold flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified
        </span>
      </div>
    </div>
  `).join('');
}

export function initCapabilitiesCatalog() {
  const container = document.getElementById('capabilities-catalog-mount');
  if (!container) return;

  container.innerHTML = renderCapabilitiesCatalog();

  // Tab switching logic (PCBA vs PCB)
  const tabBtns = container.querySelectorAll('.catalog-tab-btn');
  const tabPanes = container.querySelectorAll('.catalog-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => {
        b.classList.remove('active', 'bg-white', 'text-blue-600', 'shadow-sm');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('active', 'bg-white', 'text-blue-600', 'shadow-sm');
      btn.classList.remove('text-slate-600');

      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });

  // Accordion toggle logic (all collapsed by default)
  const accordionHeaders = container.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const body = header.nextElementSibling;
      const chevron = header.querySelector('.accordion-chevron');
      const dot = header.querySelector('span.rounded-full');

      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        body.classList.add('hidden');
        chevron.classList.remove('rotate-180', 'text-blue-600');
        if (dot) dot.classList.replace('bg-blue-600', 'bg-slate-400');
      } else {
        header.setAttribute('aria-expanded', 'true');
        body.classList.remove('hidden');
        chevron.classList.add('rotate-180', 'text-blue-600');
        if (dot) dot.classList.replace('bg-slate-400', 'bg-blue-600');
      }
    });
  });
}
