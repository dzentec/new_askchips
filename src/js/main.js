import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';
import { initPcbConfigurator } from './components/pcb-configurator.js';
import { initRfqModal, openRfqModal } from './components/rfq-modal.js';
import { initBomUploader } from './components/bom-uploader.js';
import { initCapabilitiesCatalog } from './components/pcb-capabilities-catalog.js';

function initContactPage() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  let attachedBomFile = null;

  // Initialize embedded BOM uploader on contact page
  if (document.getElementById('contact-bom-uploader')) {
    initBomUploader('contact-bom-uploader', {
      onFileChange: (meta) => {
        attachedBomFile = meta;
      }
    });
  }

  // Pre-fill PCB config if present in localStorage
  let savedPcbConfig = null;
  try {
    const raw = localStorage.getItem('askchips_pcb_config');
    if (raw) savedPcbConfig = JSON.parse(raw);
  } catch (e) {
    console.warn('Could not read pcb config', e);
  }

  const pcbSpecContainer = document.getElementById('contact-attached-pcb-spec');
  if (pcbSpecContainer && savedPcbConfig) {
    pcbSpecContainer.innerHTML = `
      <div class="border border-blue-200 bg-blue-50/70 rounded-xl p-4 flex items-center justify-between gap-3 text-xs mb-6">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div class="font-mono text-slate-800">
            <span class="font-bold text-blue-900">Custom PCB Configuration Attached:</span>
            ${savedPcbConfig.layers}, ${savedPcbConfig.material}, ${savedPcbConfig.lengthMm}×${savedPcbConfig.widthMm}mm, ${savedPcbConfig.quantity} (${savedPcbConfig.finish})
          </div>
        </div>
        <button type="button" id="btn-clear-contact-pcb" class="text-xs font-semibold text-slate-400 hover:text-red-600 transition flex-shrink-0">Clear</button>
      </div>
    `;

    const clearBtn = pcbSpecContainer.querySelector('#btn-clear-contact-pcb');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        try { localStorage.removeItem('askchips_pcb_config'); } catch (e) {}
        pcbSpecContainer.innerHTML = '';
      });
    }
  }

  // Handle contact form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const companyInput = document.getElementById('contact-company');

    let isValid = true;
    if (!nameInput.value.trim()) {
      nameInput.classList.add('border-red-500', 'bg-red-50/20');
      isValid = false;
    } else {
      nameInput.classList.remove('border-red-500', 'bg-red-50/20');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add('border-red-500', 'bg-red-50/20');
      isValid = false;
    } else {
      emailInput.classList.remove('border-red-500', 'bg-red-50/20');
    }

    if (!companyInput.value.trim()) {
      companyInput.classList.add('border-red-500', 'bg-red-50/20');
      isValid = false;
    } else {
      companyInput.classList.remove('border-red-500', 'bg-red-50/20');
    }

    if (!isValid) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Submitting RFQ...
    `;

    setTimeout(() => {
      const trackingCode = 'ASK-2026-' + Math.floor(1000 + Math.random() * 9000);
      contactForm.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div class="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-2">
              DISPATCHED TO TECHNICAL SALES
            </div>
            <h3 class="text-2xl font-bold text-slate-900">Quotation Request Successfully Submitted</h3>
            <p class="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span class="font-semibold text-slate-900">${nameInput.value}</span>. Our technical account managers have received your inquiry.
            </p>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-sm mx-auto font-mono text-left">
            <div class="text-[11px] text-slate-500 uppercase tracking-wider">Inquiry Reference Code</div>
            <div class="text-xl font-extrabold text-blue-600 tracking-wider mt-0.5">${trackingCode}</div>
            <div class="text-[11px] text-emerald-600 mt-1">Guaranteed SLA: &lt;24h Response Time</div>
          </div>

          ${attachedBomFile ? `
            <div class="text-xs font-mono text-slate-500">
              Attached File: <span class="text-slate-800 font-semibold">${attachedBomFile.name}</span> (${attachedBomFile.sizeFormatted})
            </div>
          ` : ''}

          <div class="pt-4">
            <a href="/index.html" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow">
              Return to Home
            </a>
          </div>
        </div>
      `;
    }, 600);
  });
}

function bootstrap() {
  initHeader();
  initFooter();
  initRfqModal();

  if (document.getElementById('configurator-root')) {
    initPcbConfigurator('configurator-root');
  }

  if (document.getElementById('capabilities-catalog-mount')) {
    initCapabilitiesCatalog();
  }

  if (document.getElementById('contact-form')) {
    initContactPage();
  }

  if (document.getElementById('index-bom-uploader')) {
    initBomUploader('index-bom-uploader', {
      theme: 'dark',
      onFileChange: (meta) => {
        const submitBtn = document.getElementById('index-submit-rfq-btn');
        if (submitBtn) {
          if (meta) {
            submitBtn.innerHTML = `
              <span>Submit RFQ with ${meta.name}</span>
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            `;
            try {
              sessionStorage.setItem('askchips_pending_bom', JSON.stringify({
                name: meta.name,
                sizeFormatted: meta.sizeFormatted,
                estimatedRows: meta.estimatedRows,
                extension: meta.extension
              }));
            } catch (e) {}
          } else {
            submitBtn.innerHTML = `
              <span>Proceed to Direct RFQ Intake</span>
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            `;
            try { sessionStorage.removeItem('askchips_pending_bom'); } catch (e) {}
          }
        }
      }
    });
  }

  if (document.getElementById('components-bom-uploader')) {
    initBomUploader('components-bom-uploader', {
      theme: 'dark',
      onFileChange: (meta) => {
        const submitBtn = document.getElementById('components-submit-rfq-btn');
        if (submitBtn) {
          if (meta) {
            submitBtn.innerHTML = `
              <span>Submit RFQ with ${meta.name}</span>
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            `;
            try {
              sessionStorage.setItem('askchips_pending_bom', JSON.stringify({
                name: meta.name,
                sizeFormatted: meta.sizeFormatted,
                estimatedRows: meta.estimatedRows,
                extension: meta.extension
              }));
            } catch (e) {}
          } else {
            submitBtn.innerHTML = `
              <span>Submit BOM for Instant Analysis</span>
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            `;
            try { sessionStorage.removeItem('askchips_pending_bom'); } catch (e) {}
          }
        }
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
