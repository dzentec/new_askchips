/**
 * AskChips Global Header Component
 * Provides sticky navigation, active route highlighting, and accessible mobile drawer.
 */

export function renderHeader(currentPath) {
  const normPath = currentPath === '/' ? '/index.html' : currentPath;

  const navLinks = [
    { name: 'Home', href: '/index.html' },
    { name: 'Components', href: '/components.html' },
    { name: 'PCB & PCBA', href: '/pcb.html' },
    { name: 'About', href: '/about.html' },
    { name: 'Contact', href: '/contact.html' },
  ];

  const desktopLinksHtml = navLinks.map(link => {
    const isActive = normPath.endsWith(link.href) || (link.href === '/index.html' && (normPath === '/' || normPath.endsWith('/index.html')));
    const activeClasses = isActive 
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' 
      : 'text-slate-600 hover:text-slate-900 font-medium pb-1 border-b-2 border-transparent hover:border-slate-300 transition-colors';
    
    return `<a href="${link.href}" class="text-sm ${activeClasses}">${link.name}</a>`;
  }).join('');

  const mobileLinksHtml = navLinks.map(link => {
    const isActive = normPath.endsWith(link.href) || (link.href === '/index.html' && (normPath === '/' || normPath.endsWith('/index.html')));
    const activeClasses = isActive
      ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium border-l-4 border-transparent';

    return `<a href="${link.href}" class="mobile-nav-link flex items-center px-4 py-3 rounded-r-lg text-base transition-colors ${activeClasses}">${link.name}</a>`;
  }).join('');

  return `
    <header role="banner" id="site-header" class="w-full">
      <nav role="navigation" aria-label="Main Navigation" class="w-full backdrop-blur-md bg-white/95 border-b border-slate-200/90 transition-shadow duration-200" id="main-nav">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            
            <!-- Brand Logo -->
            <a href="/index.html" class="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg py-1" aria-label="Faseen AskChips Home">
              <img src="/images/main/faseen_logo_dark.svg" alt="Faseen Logo" class="h-9 w-auto">
            </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            ${desktopLinksHtml}
          </div>

          <!-- Right Action & Mobile Toggle -->
          <div class="flex items-center gap-4">
            <button type="button" data-trigger="rfq-modal" class="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-150 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-cloud"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
              Upload BOM File
            </button>

            <!-- Mobile Hamburger Button -->
            <button type="button" id="mobile-menu-btn" class="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" aria-label="Open Navigation Menu" aria-expanded="false" aria-controls="mobile-drawer">
              <svg id="menu-icon-open" class="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="menu-icon-close" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Drawer Overlay & Panel -->
      <div id="mobile-drawer" class="lg:hidden hidden border-t border-slate-200/80 bg-white/98 shadow-xl transition-all duration-300">
        <div class="px-4 pt-3 pb-6 space-y-2">
          ${mobileLinksHtml}
          <div class="pt-4 border-t border-slate-200/60 mt-4">
            <button type="button" data-trigger="rfq-modal" class="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
              Upload BOM File
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  `;
}

export function initHeader() {
  const container = document.getElementById('global-header');
  if (!container) return;

  container.className = 'sticky top-0 z-50 w-full block';
  container.innerHTML = renderHeader(window.location.pathname);

  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const nav = document.getElementById('main-nav');

  if (menuBtn && drawer) {
    let isOpen = false;

    const toggleMenu = () => {
      isOpen = !isOpen;
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu');
      
      if (isOpen) {
        drawer.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
      } else {
        drawer.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    });

    // Close when clicking mobile links
    const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isOpen) toggleMenu();
      });
    });
  }

  // Sticky header scroll shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  }, { passive: true });
}
