import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';
import { initPcbConfigurator } from './components/pcb-configurator.js';

function bootstrap() {
  initHeader();
  initFooter();

  if (document.getElementById('configurator-root')) {
    initPcbConfigurator('configurator-root');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
