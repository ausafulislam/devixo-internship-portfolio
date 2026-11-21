'use strict';

window.PortfolioNavigation = (() => {
  const MENU_OPEN_CLASS = 'menu-open';

  const state = {
    menuButton: null,
    menuLabel: null,
    menuCloseButton: null,
    navPanel: null,
    lastFocused: null,
    closeTimer: null,
    isOpen: false
  };

  function getFocusableElements() {
    if (!state.navPanel) {
      return [];
    }

    return Array.from(state.navPanel.querySelectorAll('a[href], button:not([disabled])'));
  }

  function setMenuLabel(text) {
    if (window.PortfolioInteractions?.setRollText) {
      window.PortfolioInteractions.setRollText(state.menuLabel, text);
      return;
    }

    state.menuLabel.textContent = text;
  }

  function openMenu() {
    if (!state.navPanel || state.isOpen) {
      return;
    }

    window.clearTimeout(state.closeTimer);
    state.navPanel.classList.remove('is-closing');
    state.isOpen = true;
    state.lastFocused = document.activeElement;
    document.body.classList.add(MENU_OPEN_CLASS);
    state.menuButton.setAttribute('aria-expanded', 'true');
    state.menuButton.setAttribute('aria-label', 'Close navigation menu');
    setMenuLabel('Close');
    state.navPanel.classList.add('is-open');
    state.navPanel.setAttribute('aria-hidden', 'false');
    state.navPanel.removeAttribute('inert');

    window.setTimeout(() => {
      if (!state.isOpen) {
        return;
      }

      const initialFocus = state.menuCloseButton || getFocusableElements()[0];
      if (initialFocus instanceof HTMLElement) {
        initialFocus.focus();
      }
    }, 320);
  }

  function closeMenu(options = {}) {
    const restoreFocus = options.restoreFocus !== false;

    if (!state.navPanel || !state.isOpen) {
      return;
    }

    state.isOpen = false;
    document.body.classList.remove(MENU_OPEN_CLASS);
    state.menuButton.setAttribute('aria-expanded', 'false');
    state.menuButton.setAttribute('aria-label', 'Open navigation menu');
    setMenuLabel('Menu');
    state.navPanel.classList.add('is-closing');
    state.navPanel.classList.remove('is-open');
    state.navPanel.setAttribute('aria-hidden', 'true');
    state.navPanel.setAttribute('inert', '');

    window.clearTimeout(state.closeTimer);
    state.closeTimer = window.setTimeout(() => {
      if (state.navPanel) {
        state.navPanel.classList.remove('is-closing');
      }
    }, 420);

    if (restoreFocus && state.lastFocused instanceof HTMLElement) {
      state.lastFocused.focus();
    }
  }

  function toggleMenu() {
    if (state.isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  }

  function handleKeydown(event) {
    if (!state.isOpen) {
      return;
    }

    if (event.key === 'Escape') {
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableElements();
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleDocumentClick(event) {
    if (!state.isOpen) {
      return;
    }

    if (state.navPanel.contains(event.target) || state.menuButton.contains(event.target)) {
      return;
    }

    closeMenu({ restoreFocus: false });
  }

  function prepareMenuLinks() {
    const links = Array.from(state.navPanel.querySelectorAll('.nav-link'));
    links.forEach((link, index) => {
      link.style.setProperty('--stagger-index', String(index));
      link.style.setProperty('--reverse-delay', `${(links.length - index - 1) * 24}ms`);
    });
  }

  function init() {
    state.menuButton = document.getElementById('menu-button');
    state.menuLabel = document.querySelector('.menu-button-label');
    state.menuCloseButton = document.getElementById('menu-close-button');
    state.navPanel = document.getElementById('nav-menu-panel');

    if (!state.menuButton || !state.menuLabel || !state.navPanel) {
      return;
    }

    prepareMenuLinks();
    state.menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMenu();
    });
    state.menuCloseButton?.addEventListener('click', () => closeMenu());
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleDocumentClick);

    state.navPanel.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        const hash = link.getAttribute('href');
        const target = hash ? document.querySelector(hash) : null;
        closeMenu({ restoreFocus: false });

        if (!target) {
          return;
        }

        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }

        window.setTimeout(() => target.focus({ preventScroll: true }), 420);
      });
    });
  }

  return {
    init,
    openMenu,
    closeMenu
  };
})();
