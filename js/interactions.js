'use strict';

window.PortfolioInteractions = (() => {
  const state = {
    elements: []
  };

  function init() {
    state.elements = Array.from(document.querySelectorAll('[data-interaction]'));
  }

  return {
    init
  };
})();
