'use strict';

window.PortfolioNavigation = (() => {
  const state = {
    elements: []
  };

  function init() {
    state.elements = Array.from(document.querySelectorAll('[data-navigation]'));
  }

  return {
    init
  };
})();
