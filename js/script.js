'use strict';

function initializePortfolio() {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  window.PortfolioNavigation?.init();
  window.PortfolioInteractions?.init();

  window.requestAnimationFrame(() => {
    document.body.classList.add('is-ready');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio, { once: true });
} else {
  initializePortfolio();
}
