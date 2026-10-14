/**
 * Universal RFQ Modal Dialog Component
 * AskChips Clean Industrial Design System
 */

import { initBomUploader } from './bom-uploader.js';

let modalMounted = false;
let activeModalContainer = null;
let currentBomFile = null;

export function initRfqModal() {
  if (modalMounted) return;
  modalMounted = true;

  // Create modal container if not present
  let modalRoot = document.getElementById('global-rfq-modal');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'global-rfq-modal';
    document.body.appendChild(modalRoot);
  }
  activeModalContainer = modalRoot;

  // Global click delegator for elements with data-trigger="rfq-modal"
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-trigger="rfq-modal"]');
    if (trigger) {
      e.preventDefault();
      const projectType = trigger.getAttribute('data-project-type') || 'Electronic Components';
      openRfqModal({ projectType });
    }
  });

  // Listen for Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModalContainer && activeModalContainer.innerHTML.trim() !== '') {
      closeRfqModal();
    }
  });

  // Expose global function
  window.openRfqModal = openRfqModal;
  window.closeRfqModal = closeRfqModal;
}

export function openRfqModal(options = {}) {
  if (!activeModalContainer) {
    initRfqModal();
  }

  const initialProjectType = options.projectType || 'Electronic Components';
  let selectedProjectType = initialProjectType;
  currentBomFile = null;

  // Check for saved PCB config in localStorage
  let savedPcbConfig = null;
  try {
    const raw = localStorage.getItem('askchips_pcb_config');
    if (raw) savedPcbConfig = JSON.parse(raw);
  } catch (err) {
    console.warn('Could not read pcb config', err);
  }

  // If PCB config is present, default to PCB or PCBA
  if (savedPcbConfig && !options.projectType) {
    selectedProjectType = 'PCB Fabrication';
  }

  function renderModal() {
    activeModalContainer.innerHTML = `
      <div id="rfq-modal-backdrop" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
        <div id="rfq-modal-dialog" class="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col relative" role="dialog" aria-modal="true" aria-labelledby="rfq-modal-title">
          
          <!-- Header -->
          <div class="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-mono font-semibold mb-1">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                24-HOUR RFQ TURNAROUND
              </div>
              <h3 id="rfq-modal-title" class="text-xl font-bold text-slate-900">Request for Quotation (RFQ)</h3>
            </div>
            <button type="button" id="rfq-close-btn" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 flex items-center justify-center transition" aria-label="Close dialog">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Body Form Container -->
          <div id="rfq-modal-body" class="p-6 overflow-y-auto flex-grow space-y-6">
            
            <!-- Detected PCB Config Banner -->
            ${savedPcbConfig ? `
              <div id="attached-pcb-spec-chip" class="border border-blue-200 bg-blue-50/60 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div class="font-mono text-slate-700 truncate">
                    <span class="font-bold text-blue-900">PCB Specs Attached:</span> ${savedPcbConfig.layers}, ${savedPcbConfig.lengthMm}×${savedPcbConfig.widthMm}mm, ${savedPcbConfig.quantity}
                  </div>
                </div>
                <button type="button" id="btn-clear-saved-pcb" class="text-slate-400 hover:text-red-600 transition flex-shrink-0 font-medium">Clear</button>
              </div>
            ` : ''}

            <!-- Project Type Selection -->
            <div>
              <label class="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">Project Category</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                ${['Electronic Components', 'PCB Fabrication', 'Turnkey PCBA', 'BOM Cost-Down'].map(type => {
                  const active = selectedProjectType === type;
                  return `
                    <button type="button" data-project-type="${type}"
                      class="project-type-chip py-2 px-2 rounded-lg text-xs font-mono font-semibold text-center border transition ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                      }">
                      ${type}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Contact Information Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="rfq-name" class="block text-xs font-semibold text-slate-800 mb-1">Full Name <span class="text-red-500">*</span></label>
                <input type="text" id="rfq-name" placeholder="e.g. Alex Johnson"
                  class="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                <span id="err-name" class="hidden text-[11px] text-red-600 mt-1 block">Full name is required.</span>
              </div>
              <div>
                <label for="rfq-email" class="block text-xs font-semibold text-slate-800 mb-1">Work Email <span class="text-red-500">*</span></label>
                <input type="email" id="rfq-email" placeholder="alex@company.com"
                  class="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                <span id="err-email" class="hidden text-[11px] text-red-600 mt-1 block">Valid corporate email is required.</span>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="rfq-company" class="block text-xs font-semibold text-slate-800 mb-1">Company / Organization <span class="text-red-500">*</span></label>
                <input type="text" id="rfq-company" placeholder="e.g. Vertex Robotics Inc."
                  class="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                <span id="err-company" class="hidden text-[11px] text-red-600 mt-1 block">Company name is required.</span>
              </div>
              <div>
                <label for="rfq-phone" class="block text-xs font-semibold text-slate-800 mb-1">Phone / WhatsApp (Optional)</label>
                <input type="tel" id="rfq-phone" placeholder="+1 (555) 000-0000"
                  class="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
              </div>
            </div>

            <!-- BOM Dropzone Container -->
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1.5">Attach BOM or Gerber File</label>
              <div id="modal-bom-uploader"></div>
            </div>

            <!-- Additional Notes Textarea -->
            <div>
              <label for="rfq-notes" class="block text-xs font-semibold text-slate-800 mb-1">Notes / Target Pricing / Lead-Time Constraints (Optional)</label>
              <textarea id="rfq-notes" rows="2" placeholder="List any specific manufacturer preferences, target lead times, or alternative part substitution rules..."
                class="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"></textarea>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <span class="text-[11px] font-mono text-slate-500">100% Confidential • NDA Guaranteed</span>
            <div class="flex items-center gap-3">
              <button type="button" id="rfq-cancel-btn" class="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-200/70 transition">
                Cancel
              </button>
              <button type="button" id="rfq-submit-btn" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow">
                Submit RFQ Request
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    bindModalEvents();
  }

  function bindModalEvents() {
    const dialog = activeModalContainer.querySelector('#rfq-modal-dialog');
    const backdrop = activeModalContainer.querySelector('#rfq-modal-backdrop');
    const closeBtn = activeModalContainer.querySelector('#rfq-close-btn');
    const cancelBtn = activeModalContainer.querySelector('#rfq-cancel-btn');
    const submitBtn = activeModalContainer.querySelector('#rfq-submit-btn');
    const clearPcbBtn = activeModalContainer.querySelector('#btn-clear-saved-pcb');

    // Close listeners
    [closeBtn, cancelBtn].forEach(b => {
      if (b) b.addEventListener('click', closeRfqModal);
    });

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeRfqModal();
      });
    }

    if (clearPcbBtn) {
      clearPcbBtn.addEventListener('click', () => {
        try { localStorage.removeItem('askchips_pcb_config'); } catch (e) {}
        savedPcbConfig = null;
        const chip = activeModalContainer.querySelector('#attached-pcb-spec-chip');
        if (chip) chip.remove();
      });
    }

    // Project type selector chips
    activeModalContainer.querySelectorAll('.project-type-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        selectedProjectType = chip.getAttribute('data-project-type');
        activeModalContainer.querySelectorAll('.project-type-chip').forEach(c => {
          c.classList.remove('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-sm');
          c.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-700');
        });
        chip.classList.add('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-sm');
        chip.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-700');
      });
    });

    // Mount embedded BOM uploader
    initBomUploader('modal-bom-uploader', {
      onFileChange: (meta) => {
        currentBomFile = meta;
      }
    });

    // Form submission
    if (submitBtn) {
      submitBtn.addEventListener('click', handleSubmit);
    }
  }

  function handleSubmit() {
    const nameInput = activeModalContainer.querySelector('#rfq-name');
    const emailInput = activeModalContainer.querySelector('#rfq-email');
    const companyInput = activeModalContainer.querySelector('#rfq-company');
    const phoneInput = activeModalContainer.querySelector('#rfq-phone');
    const notesInput = activeModalContainer.querySelector('#rfq-notes');

    const errName = activeModalContainer.querySelector('#err-name');
    const errEmail = activeModalContainer.querySelector('#err-email');
    const errCompany = activeModalContainer.querySelector('#err-company');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('border-red-500', 'bg-red-50/20');
      errName.classList.remove('hidden');
      isValid = false;
    } else {
      nameInput.classList.remove('border-red-500', 'bg-red-50/20');
      errName.classList.add('hidden');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add('border-red-500', 'bg-red-50/20');
      errEmail.classList.remove('hidden');
      isValid = false;
    } else {
      emailInput.classList.remove('border-red-500', 'bg-red-50/20');
      errEmail.classList.add('hidden');
    }

    // Validate Company
    if (!companyInput.value.trim()) {
      companyInput.classList.add('border-red-500', 'bg-red-50/20');
      errCompany.classList.remove('hidden');
      isValid = false;
    } else {
      companyInput.classList.remove('border-red-500', 'bg-red-50/20');
      errCompany.classList.add('hidden');
    }

    if (!isValid) return;

    // Show loading state
    const submitBtn = activeModalContainer.querySelector('#rfq-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Processing RFQ...
    `;

    // Mock network transmission
    setTimeout(() => {
      const trackingId = 'ASK-2026-' + Math.floor(1000 + Math.random() * 9000);
      showSuccessScreen(trackingId, {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        company: companyInput.value.trim(),
        projectType: selectedProjectType,
        fileAttached: currentBomFile ? currentBomFile.name : null
      });
    }, 600);
  }

  function showSuccessScreen(trackingId, details) {
    const dialog = activeModalContainer.querySelector('#rfq-modal-dialog');
    if (!dialog) return;

    dialog.innerHTML = `
      <div class="p-8 sm:p-10 text-center space-y-6">
        <!-- Success Icon -->
        <div class="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-3">
            STATUS: DISPATCHED TO ENGINEERING
          </div>
          <h3 class="text-2xl font-bold text-slate-900">RFQ Received Successfully</h3>
          <p class="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span class="font-semibold text-slate-900">${details.name}</span>. Our technical procurement engineers in Shenzhen and Hong Kong are reviewing your request.
          </p>
        </div>

        <!-- Tracking ID Box -->
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto">
          <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">RFQ Reference Code</div>
          <div class="text-xl font-extrabold font-mono text-blue-600 tracking-wider mt-0.5">${trackingId}</div>
          <div class="text-[11px] font-mono text-emerald-600 mt-1">Guaranteed Response within 24 Hours</div>
        </div>

        ${details.fileAttached ? `
          <div class="text-xs font-mono text-slate-500">
            Attached File: <span class="text-slate-800 font-semibold">${details.fileAttached}</span>
          </div>
        ` : ''}

        <div class="pt-2">
          <button type="button" id="rfq-done-btn"
            class="px-8 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow">
            Done
          </button>
        </div>
      </div>
    `;

    const doneBtn = dialog.querySelector('#rfq-done-btn');
    if (doneBtn) {
      doneBtn.addEventListener('click', closeRfqModal);
    }
  }

  renderModal();
}

export function closeRfqModal() {
  if (activeModalContainer) {
    activeModalContainer.innerHTML = '';
  }
}
