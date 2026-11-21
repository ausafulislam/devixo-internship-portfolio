'use strict';

function initializePortfolio() {
  window.PortfolioNavigation?.init();
  window.PortfolioInteractions?.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio, { once: true });
} else {
  initializePortfolio();
}
