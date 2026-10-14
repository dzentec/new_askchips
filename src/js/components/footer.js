/**
 * AskChips Industrial Footer Component
 * 4-column structured layout with corporate overview, capabilities, resources, and contact data.
 */

export function renderFooter() {
  return `
    <footer class="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <!-- Column 1: Brand & Quality Trust (4 cols) -->
          <div class="lg:col-span-4 space-y-6">
            <a href="/index.html" class="inline-block">
              <img src="/images/main/askchips-logo-white.svg" alt="AskChips Logo" class="h-10 w-auto">
            </a>
            <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your one-stop industrial supply chain partner for electronic components sourcing, precision multi-layer PCB fabrication, and turnkey SMT assembly.
            </p>
            
            <!-- Quality & Certifications Badges -->
            <div class="pt-2">
              <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">Certified Quality Standards</span>
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  ISO 9001:2015
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  RoHS Compliant
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  UL Recognized
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  IPC-A-610 Class 2/3
                </span>
              </div>
            </div>
          </div>

          <!-- Column 2: Capabilities & Services (3 cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Capabilities & Sourcing
            </h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="/components.html" class="text-slate-400 hover:text-white transition-colors">Electronic Components Sourcing</a></li>
              <li><a href="/pcb.html" class="text-slate-400 hover:text-white transition-colors">Rigid FR4 PCBs (1-32 Layers)</a></li>
              <li><a href="/pcb.html" class="text-slate-400 hover:text-white transition-colors">Flexible & Rigid-Flex PCBs</a></li>
              <li><a href="/pcb.html" class="text-slate-400 hover:text-white transition-colors">Aluminum & Metal Core PCBs</a></li>
              <li><a href="/pcb.html" class="text-slate-400 hover:text-white transition-colors">Turnkey PCBA Assembly</a></li>
              <li><a href="/components.html" class="text-slate-400 hover:text-white transition-colors">Hard-to-Find & EOL Components</a></li>
            </ul>
          </div>

          <!-- Column 3: Quality & Resources (2 cols) -->
          <div class="lg:col-span-2 space-y-4">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Support & Tools
            </h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="/contact.html" class="text-slate-400 hover:text-white transition-colors">Upload BOM Spreadsheet</a></li>
              <li><a href="/pcb.html" class="text-slate-400 hover:text-white transition-colors">PCB Spec Configurator</a></li>
              <li><a href="/about.html" class="text-slate-400 hover:text-white transition-colors">Testing & Inspection Lab</a></li>
              <li><a href="/about.html" class="text-slate-400 hover:text-white transition-colors">Counterfeit Avoidance Policy</a></li>
              <li><a href="/contact.html" class="text-slate-400 hover:text-white transition-colors">Direct RFQ Inquiry</a></li>
            </ul>
          </div>

          <!-- Column 4: Global Inquiries (3 cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Inquiry & Headquarters
            </h3>
            <div class="space-y-3 text-sm text-slate-400">
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 flex-shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <div>
                  <span class="block text-slate-200 font-medium">BOM & RFQ Email:</span>
                  <a href="mailto:rfq@askchips.com" class="text-blue-400 hover:underline">rfq@askchips.com</a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 flex-shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <span class="block text-slate-200 font-medium">Global Sales Support:</span>
                  <span class="font-mono text-xs text-slate-300">+86 755 8320 6818</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 flex-shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <span class="block text-slate-200 font-medium">Supply Operations:</span>
                  <span class="text-xs">Shenzhen High-Tech Park & Hong Kong Logistics Hub</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Sub-footer Divider & Legal -->
        <div class="pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All Global Sourcing & Manufacturing Lines Operational</span>
          </div>
          <div>
            © 2026 AskChips Inc. All rights reserved. Professional B2B Electronics Supply Chain.
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function initFooter() {
  const container = document.getElementById('global-footer');
  if (container) {
    container.innerHTML = renderFooter();
  }
}
