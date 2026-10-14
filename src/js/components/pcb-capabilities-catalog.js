/**
 * AskChips PCB & PCBA Capabilities Catalog Component
 * Renders comprehensive engineering specifications, interactive accordions,
 * pattern diagrams with lightbox zoom, PCBA comparison matrix, and order workflow.
 */

import { pcbProductionCapabilities, pcbaCapabilities, orderWorkflowSteps } from '../data/pcb-specs-data.js';

export function renderCapabilitiesCatalog() {
  return `
    <div class="space-y-12" id="specs-catalog">
      
      <!-- Primary Catalog Tabs -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Manufacturing Encyclopedia & DFM Guide
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Comprehensive Technical Capability Tables
          </h2>
        </div>

        <!-- Tab Controls -->
        <div class="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium" role="tablist">
          <button type="button" class="catalog-tab-btn active px-4 py-2 rounded-lg font-semibold transition-all shadow-sm bg-white text-blue-600" data-tab="tab-pcb">
            PCB Fabrication (59 Specs)
          </button>
          <button type="button" class="catalog-tab-btn px-4 py-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 transition-all" data-tab="tab-pcba">
            PCBA Assembly Matrix
          </button>
          <button type="button" class="catalog-tab-btn px-4 py-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 transition-all" data-tab="tab-workflow">
            9-Step Order Workflow
          </button>
        </div>
      </div>

      <!-- Tab Content 1: PCB Production Capabilities (Accordions) -->
      <div id="tab-pcb" class="catalog-tab-pane space-y-4">
        <div class="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-xs sm:text-sm text-blue-900 leading-relaxed">
            Click on any section header to expand engineering limits and IPC standards. Click on any <strong>Pattern thumbnail</strong> in the right-hand column to view the high-resolution cross-section diagram and layout rules.
          </p>
        </div>

        <div class="space-y-3" id="pcb-accordions">
          ${renderPcbAccordions()}
        </div>
      </div>

      <!-- Tab Content 2: PCBA Capabilities Matrix -->
      <div id="tab-pcba" class="catalog-tab-pane hidden space-y-6">
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

      <!-- Tab Content 3: How to Place Order (9 Steps) -->
      <div id="tab-workflow" class="catalog-tab-pane hidden space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          ${renderWorkflowCards()}
        </div>
      </div>

    </div>

    <!-- Image Lightbox Modal for Pattern Zoom -->
    <div id="pattern-modal" class="fixed inset-0 z-50 hidden bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span class="text-xs font-mono text-blue-600 font-semibold block">TECHNICAL CROSS-SECTION DIAGRAM</span>
            <h3 id="pattern-modal-title" class="text-base font-bold text-slate-900">Pattern Reference</h3>
          </div>
          <button type="button" id="pattern-modal-close" class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition" aria-label="Close pattern zoom">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="py-6 flex-grow flex items-center justify-center overflow-auto bg-slate-50 rounded-xl my-4 p-4 border border-slate-100">
          <img id="pattern-modal-img" src="" alt="Pattern Diagram" class="max-h-[60vh] max-w-full object-contain drop-shadow">
        </div>
        <div class="flex justify-end">
          <button type="button" id="pattern-modal-done" class="px-5 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPcbAccordions() {
  return pcbProductionCapabilities.map((group, idx) => {
    const isFirst = idx === 0;
    const rowsHtml = group.rows.map(row => {
      const patternHtml = row.patternImg
        ? `
          <button type="button" class="pattern-thumb-btn group flex items-center gap-2 p-1 rounded border border-slate-200 bg-white hover:border-blue-500 hover:shadow-sm transition" data-img="${row.patternImg}" data-title="${row.feature}">
            <img src="${row.patternImg}" alt="${row.feature}" class="w-12 h-9 object-contain rounded bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
            <span class="text-[11px] text-blue-600 group-hover:underline font-mono">Zoom</span>
          </button>
        `
        : `<span class="text-slate-300 font-mono text-[11px]">—</span>`;

      return `
        <tr class="hover:bg-slate-50 transition border-b border-slate-100">
          <td class="py-2.5 px-4 font-semibold text-slate-900 w-1/4">${row.feature}</td>
          <td class="py-2.5 px-4 font-mono text-slate-800 text-xs w-1/3">
            <span class="inline-block bg-slate-100 px-2 py-0.5 rounded border border-slate-200">${row.capability}</span>
          </td>
          <td class="py-2.5 px-4 text-xs text-slate-600 w-1/4">${row.notes || '<span class="text-slate-300">—</span>'}</td>
          <td class="py-2.5 px-4 text-center w-1/6">${patternHtml}</td>
        </tr>
      `;
    }).join('');

    return `
      <div class="industrial-card overflow-hidden">
        <button type="button" class="accordion-header w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-slate-50 text-left transition" aria-expanded="${isFirst}">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full ${isFirst ? 'bg-blue-600' : 'bg-slate-400'}"></span>
            <span class="text-base font-bold text-slate-900">${group.title}</span>
            <span class="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              ${group.rows.length} specs
            </span>
          </div>
          <svg class="accordion-chevron w-5 h-5 text-slate-400 transform transition-transform duration-200 ${isFirst ? 'rotate-180 text-blue-600' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="accordion-body ${isFirst ? '' : 'hidden'} border-t border-slate-100 bg-white">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/4">Feature</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/3">Capability</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider w-1/4">Engineering Notes</th>
                  <th class="py-2.5 px-4 font-semibold uppercase tracking-wider text-center w-1/6">Pattern</th>
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
    <div class="industrial-card p-5 flex flex-col justify-between group hover:border-blue-400 transition-all">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-mono font-bold text-xs flex items-center justify-center">
            0${step.step}
          </span>
          <img src="${step.icon}" alt="Step ${step.step}" class="w-8 h-8 object-contain">
        </div>
        <h4 class="text-sm font-bold text-slate-900 mb-1.5">${step.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${step.description}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Step 0${step.step} of 09</span>
        <span class="text-blue-600 font-medium">AskChips Direct</span>
      </div>
    </div>
  `).join('');
}

export function initCapabilitiesCatalog() {
  const container = document.getElementById('capabilities-catalog-mount');
  if (!container) return;

  container.innerHTML = renderCapabilitiesCatalog();

  // Tab switching logic
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

  // Accordion toggle logic
  const accordionHeaders = container.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const body = header.nextElementSibling;
      const chevron = header.querySelector('.accordion-chevron');

      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        body.classList.add('hidden');
        chevron.classList.remove('rotate-180', 'text-blue-600');
      } else {
        header.setAttribute('aria-expanded', 'true');
        body.classList.remove('hidden');
        chevron.classList.add('rotate-180', 'text-blue-600');
      }
    });
  });

  // Lightbox Pattern Zoom logic
  const modal = document.getElementById('pattern-modal');
  const modalImg = document.getElementById('pattern-modal-img');
  const modalTitle = document.getElementById('pattern-modal-title');
  const modalClose = document.getElementById('pattern-modal-close');
  const modalDone = document.getElementById('pattern-modal-done');

  const openPatternModal = (src, title) => {
    if (!modal || !modalImg || !modalTitle) return;
    modalImg.src = src;
    modalTitle.textContent = title;
    modal.classList.remove('hidden');
  };

  const closePatternModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
  };

  const thumbBtns = container.querySelectorAll('.pattern-thumb-btn');
  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-img');
      const title = btn.getAttribute('data-title');
      openPatternModal(src, title);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closePatternModal);
  if (modalDone) modalDone.addEventListener('click', closePatternModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePatternModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closePatternModal();
    }
  });
}
