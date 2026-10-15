/**
 * AskChips Back-to-Top Floating Action Component
 * Provides an accessible, smooth scroll-to-top button with industrial aesthetic.
 */

export function initBackToTop() {
  if (typeof document === 'undefined') return;

  let btn = document.getElementById('btn-back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'btn-back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.title = 'Back to top';
    btn.className = 'fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-white/95 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200/90 shadow-md hover:shadow-xl backdrop-blur-md transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 group';
    btn.innerHTML = `
      <svg class="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    `;
    document.body.appendChild(btn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
