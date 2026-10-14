/**
 * PCB Specification Interactive Configurator Component
 * AskChips Clean Industrial Design System
 */

export function initPcbConfigurator(containerId = 'configurator-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Initial State
  const state = {
    layers: '2 Layers',
    material: 'FR4 Standard TG140',
    lengthMm: 100,
    widthMm: 100,
    thickness: '1.6mm',
    copperWeight: '1oz / 1oz',
    finish: 'Lead-Free HASL (RoHS)',
    solderMask: 'Green',
    silkscreen: 'White',
    quantity: '5 pcs'
  };

  // Option Definitions
  const options = {
    layers: [
      '1 Layer', '2 Layers', '4 Layers', '6 Layers',
      '8 Layers', '10 Layers', '12 Layers', '16+ Layers'
    ],
    material: [
      { id: 'FR4 Standard TG140', name: 'FR4 Standard TG140', desc: 'Standard electronics' },
      { id: 'High-TG170 FR4', name: 'High-TG170 FR4', desc: 'High thermal durability' },
      { id: 'Rogers (RF High-Freq)', name: 'Rogers 4350B', desc: 'RF & microwave circuits' },
      { id: 'Aluminum Core', name: 'Aluminum Core', desc: 'High power LED / heatsink' },
      { id: 'Polyimide Flex', name: 'Polyimide Flex', desc: 'Flexible circuit boards' }
    ],
    thickness: ['0.6mm', '0.8mm', '1.0mm', '1.2mm', '1.6mm', '2.0mm', '2.4mm'],
    copperWeight: ['1oz / 1oz', '2oz / 1oz', '2oz / 2oz', '3oz / 2oz (Heavy)'],
    finish: [
      { id: 'Lead-Free HASL (RoHS)', name: 'Lead-Free HASL', badge: 'RoHS' },
      { id: 'ENIG (Immersion Gold)', name: 'ENIG Gold', badge: 'Gold 1-3µ"' },
      { id: 'HASL with Lead', name: 'HASL Leaded', badge: 'Standard' },
      { id: 'Immersion Silver', name: 'Immersion Silver', badge: 'High Freq' },
      { id: 'OSP', name: 'OSP Coating', badge: 'Organic' }
    ],
    solderMask: [
      { id: 'Green', hex: '#15803d', label: 'Green (Default)' },
      { id: 'Matte Black', hex: '#0f172a', label: 'Matte Black' },
      { id: 'Blue', hex: '#2563eb', label: 'Royal Blue' },
      { id: 'Red', hex: '#dc2626', label: 'Crimson Red' },
      { id: 'White', hex: '#f8fafc', border: true, label: 'Gloss White' },
      { id: 'Yellow', hex: '#eab308', label: 'Safety Yellow' }
    ],
    silkscreen: ['White', 'Black'],
    quantity: ['5 pcs', '10 pcs', '20 pcs', '50 pcs', '100 pcs', '500 pcs', '1000+ pcs']
  };

  function calculateSla() {
    const isStandard = state.material === 'FR4 Standard TG140';
    const isSmallQty = ['5 pcs', '10 pcs', '20 pcs', '50 pcs'].includes(state.quantity);

    if ((state.layers === '1 Layer' || state.layers === '2 Layers') && isStandard && isSmallQty) {
      return { time: '24 Hours Express', tag: 'Fast-Track SLA', color: 'emerald' };
    }
    if ((state.layers === '4 Layers' || state.layers === '6 Layers') && isStandard) {
      return { time: '48 – 72 Hours', tag: 'Standard Production', color: 'blue' };
    }
    if (state.material.includes('Rogers') || state.material.includes('Flex')) {
      return { time: '5 – 7 Business Days', tag: 'Specialized Substrate', color: 'amber' };
    }
    return { time: '4 – 6 Business Days', tag: 'Multi-Layer Precision', color: 'blue' };
  }

  function calculateArea() {
    const l = Number(state.lengthMm) || 100;
    const w = Number(state.widthMm) || 100;
    const qty = parseInt(state.quantity, 10) || 5;
    const singleAreaM2 = (l / 1000) * (w / 1000);
    const totalAreaM2 = singleAreaM2 * qty;
    return {
      singleCm2: (singleAreaM2 * 10000).toFixed(1),
      totalM2: totalAreaM2.toFixed(3)
    };
  }

  function render() {
    const sla = calculateSla();
    const area = calculateArea();

    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Controls (8 cols) -->
        <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          <!-- Step 1: Layers -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-semibold">01</span>
                Layer Count
              </label>
              <span class="text-xs font-mono text-slate-500">1 to 32 Layers Supported</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${options.layers.map(layer => {
                const active = state.layers === layer;
                return `
                  <button type="button" data-field="layers" data-value="${layer}"
                    class="layer-chip py-2.5 px-3 rounded-lg text-xs font-mono font-semibold transition border text-center ${
                      active
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm ring-1 ring-blue-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                    }">
                    ${layer}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Step 2: Base Material -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-semibold">02</span>
                Base Material & Substrate
              </label>
              <span class="text-xs font-mono text-slate-500">IPC-4101D Certified</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${options.material.map(mat => {
                const active = state.material === mat.id;
                return `
                  <button type="button" data-field="material" data-value="${mat.id}"
                    class="py-3 px-4 rounded-lg text-left transition border ${
                      active
                        ? 'bg-blue-50/50 border-blue-600 ring-1 ring-blue-600'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }">
                    <div class="text-xs font-mono font-bold ${active ? 'text-blue-700' : 'text-slate-900'}">${mat.name}</div>
                    <div class="text-[11px] text-slate-500 mt-0.5">${mat.desc}</div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Step 3: Board Dimensions -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-semibold">03</span>
                Board Dimensions (Length × Width)
              </label>
              <span class="text-xs font-mono text-slate-500">Max: 600 × 1200mm</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono text-slate-600 mb-1">Length (mm)</label>
                <div class="relative">
                  <input type="number" id="dim-length" min="10" max="1200" value="${state.lengthMm}"
                    class="w-full font-mono text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                  <span class="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">mm</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-mono text-slate-600 mb-1">Width (mm)</label>
                <div class="relative">
                  <input type="number" id="dim-width" min="10" max="600" value="${state.widthMm}"
                    class="w-full font-mono text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                  <span class="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">mm</span>
                </div>
              </div>
            </div>
            <!-- Dimension Presets -->
            <div class="mt-2.5 flex items-center gap-2 flex-wrap">
              <span class="text-[11px] font-mono text-slate-400">Quick Presets:</span>
              <button type="button" data-preset="50x50" class="preset-btn px-2.5 py-1 text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition">50×50mm</button>
              <button type="button" data-preset="100x100" class="preset-btn px-2.5 py-1 text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition">100×100mm</button>
              <button type="button" data-preset="150x100" class="preset-btn px-2.5 py-1 text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition">150×100mm</button>
            </div>
          </div>

          <!-- Step 4: Thickness & Copper Weight -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <!-- Thickness -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Board Thickness
              </label>
              <div class="grid grid-cols-3 gap-2">
                ${options.thickness.map(t => {
                  const active = state.thickness === t;
                  return `
                    <button type="button" data-field="thickness" data-value="${t}"
                      class="py-2 px-2 text-xs font-mono font-medium rounded-lg border text-center transition ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }">
                      ${t}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Copper Weight -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Copper Weight
              </label>
              <div class="grid grid-cols-2 gap-2">
                ${options.copperWeight.map(cw => {
                  const active = state.copperWeight === cw;
                  return `
                    <button type="button" data-field="copperWeight" data-value="${cw}"
                      class="py-2 px-2 text-xs font-mono font-medium rounded-lg border text-center transition ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }">
                      ${cw}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Step 5: Surface Finish -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-semibold">04</span>
                Surface Finish
              </label>
              <span class="text-xs font-mono text-slate-500">Anti-Oxidation Plating</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              ${options.finish.map(f => {
                const active = state.finish === f.id;
                return `
                  <button type="button" data-field="finish" data-value="${f.id}"
                    class="py-2.5 px-3 rounded-lg text-left transition border flex flex-col justify-between ${
                      active
                        ? 'bg-blue-50/60 border-blue-600 ring-1 ring-blue-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                    }">
                    <div class="text-xs font-mono font-bold ${active ? 'text-blue-700' : 'text-slate-900'}">${f.name}</div>
                    <div class="text-[10px] text-slate-500 font-mono mt-1">${f.badge}</div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Step 6: Solder Mask & Silkscreen -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <!-- Solder Mask Swatches -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Solder Mask Color
              </label>
              <div class="flex items-center gap-2.5 flex-wrap">
                ${options.solderMask.map(sm => {
                  const active = state.solderMask === sm.id;
                  return `
                    <button type="button" data-field="solderMask" data-value="${sm.id}" title="${sm.label}"
                      class="w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        sm.border ? 'border border-slate-300' : ''
                      } ${
                        active ? 'ring-2 ring-blue-600 ring-offset-2 scale-110' : 'hover:scale-105'
                      }" style="background-color: ${sm.hex}">
                      ${active ? `<svg class="w-4 h-4 ${sm.id === 'White' || sm.id === 'Yellow' ? 'text-slate-900' : 'text-white'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>` : ''}
                    </button>
                  `;
                }).join('')}
              </div>
              <div class="mt-2 text-xs font-mono text-slate-600">Selected: <span class="font-bold text-slate-900">${state.solderMask}</span></div>
            </div>

            <!-- Silkscreen -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Silkscreen Legend Color
              </label>
              <div class="grid grid-cols-2 gap-2">
                ${options.silkscreen.map(silk => {
                  const active = state.silkscreen === silk;
                  return `
                    <button type="button" data-field="silkscreen" data-value="${silk}"
                      class="py-2 px-3 text-xs font-mono font-medium rounded-lg border text-center transition ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }">
                      ${silk}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Step 7: Order Quantity -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-semibold">05</span>
                Batch Quantity
              </label>
              <span class="text-xs font-mono text-slate-500">Fast Prototyping to Mass Production</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              ${options.quantity.map(q => {
                const active = state.quantity === q;
                return `
                  <button type="button" data-field="quantity" data-value="${q}"
                    class="py-2.5 px-2 text-xs font-mono font-semibold rounded-lg border text-center transition ${
                      active
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                    }">
                    ${q}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Sticky Summary Card (4 cols) -->
        <div class="lg:col-span-4 sticky top-24">
          <div id="spec-summary" class="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800">
            <!-- Header Badge -->
            <div class="flex items-center justify-between pb-4 border-b border-slate-800">
              <span class="text-[11px] font-mono font-semibold text-blue-400 tracking-wider uppercase">SPECIFICATION SUMMARY</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <!-- Estimated SLA Badge -->
            <div class="mt-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
              <div>
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Estimated Turnaround</div>
                <div class="text-base font-bold font-mono text-emerald-400">${sla.time}</div>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">${sla.tag}</span>
            </div>

            <!-- Parameters Grid -->
            <div class="mt-5 space-y-2.5 text-xs font-mono">
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Layers:</span>
                <span class="font-bold text-white">${state.layers}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Base Material:</span>
                <span class="font-semibold text-slate-200">${state.material}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Board Size:</span>
                <span class="font-bold text-white">${state.lengthMm} × ${state.widthMm} mm</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Total Area:</span>
                <span class="text-slate-200">${area.totalM2} m² (${area.singleCm2} cm²/pc)</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Thickness:</span>
                <span class="text-slate-200">${state.thickness}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Copper Weight:</span>
                <span class="text-slate-200">${state.copperWeight}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Surface Finish:</span>
                <span class="text-slate-200">${state.finish}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Colors:</span>
                <span class="text-slate-200">${state.solderMask} / ${state.silkscreen}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/60">
                <span class="text-slate-400">Order Quantity:</span>
                <span class="font-bold text-emerald-400 text-sm">${state.quantity}</span>
              </div>
            </div>

            <!-- Submit Action Button -->
            <div class="mt-6">
              <button type="button" id="btn-submit-config"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-900/30">
                Submit Parameters for Instant RFQ
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

            <p class="mt-3 text-[11px] text-center text-slate-400 font-mono">
              Configured specs are automatically attached to your formal inquiry.
            </p>
          </div>
        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // Buttons with data-field
    container.querySelectorAll('button[data-field]').forEach(btn => {
      btn.addEventListener('click', () => {
        const field = btn.getAttribute('data-field');
        const value = btn.getAttribute('data-value');
        if (field && value) {
          state[field] = value;
          render();
        }
      });
    });

    // Preset buttons
    container.querySelectorAll('button[data-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        if (preset === '50x50') {
          state.lengthMm = 50;
          state.widthMm = 50;
        } else if (preset === '100x100') {
          state.lengthMm = 100;
          state.widthMm = 100;
        } else if (preset === '150x100') {
          state.lengthMm = 150;
          state.widthMm = 100;
        }
        render();
      });
    });

    // Dimension inputs
    const lengthInput = container.querySelector('#dim-length');
    const widthInput = container.querySelector('#dim-width');

    if (lengthInput) {
      lengthInput.addEventListener('input', (e) => {
        state.lengthMm = Number(e.target.value) || 10;
        updateSummaryOnly();
      });
    }

    if (widthInput) {
      widthInput.addEventListener('input', (e) => {
        state.widthMm = Number(e.target.value) || 10;
        updateSummaryOnly();
      });
    }

    // Submit button
    const submitBtn = container.querySelector('#btn-submit-config');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Saving Specifications...
        `;

        try {
          localStorage.setItem('askchips_pcb_config', JSON.stringify(state));
        } catch (e) {
          console.warn('LocalStorage unavailable', e);
        }

        setTimeout(() => {
          window.location.href = `/contact.html?source=pcb_config&layers=${encodeURIComponent(state.layers)}&qty=${encodeURIComponent(state.quantity)}`;
        }, 300);
      });
    }
  }

  function updateSummaryOnly() {
    const area = calculateArea();
    const summaryCard = container.querySelector('#spec-summary');
    if (!summaryCard) return;

    // Direct update to area in DOM without destroying focus on active input
    const areaText = summaryCard.querySelector('div:nth-child(4) > span:nth-child(2)');
    if (areaText) {
      areaText.textContent = `${area.totalM2} m² (${area.singleCm2} cm²/pc)`;
    }
  }

  // Initial render
  render();
}
