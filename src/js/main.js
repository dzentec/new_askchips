import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';

function bootstrap() {
  initHeader();
  initFooter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
