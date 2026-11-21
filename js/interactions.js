'use strict';

/** Scroll reveals, rolling text, active sections, counters, and the contact form. */
window.PortfolioInteractions = (() => {
  const validators = {
    name: (value) => value.trim().length >= 2 || 'Please enter your full name.',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Please enter a valid email address.',
    subject: (value) => value.trim().length >= 2 || 'Please enter a subject.',
    message: (value) => value.trim().length >= 10 || 'Please enter a message of at least 10 characters.'
  };

  const ROLL_SELECTORS = [
    '.nav-link > span:first-child',
    '.menu-button-label',
    '.hero-cta > span',
    '.pill',
    '.text-link'
  ];
  const NARROW_CHARS = /[iljtf.,:'’|!]/;
  const WIDE_CHARS = /[mwMW@%]/;
  const ROLL_CONTEXT = document.createElement('canvas').getContext('2d');

  function applyTextTransform(text, transform) {
    if (transform === 'uppercase') {
      return text.toUpperCase();
    }

    if (transform === 'lowercase') {
      return text.toLowerCase();
    }

    if (transform === 'capitalize') {
      return text.replace(/(^|\s)(\S)/g, (match, prefix, character) => prefix + character.toUpperCase());
    }

    return text;
  }

  // Measure transformed text so uppercase CTA labels keep even spacing.
  function getRollCharWidths(text, element) {
    const characters = Array.from(text);
    const styles = window.getComputedStyle(element);
    const transformedCharacters = Array.from(applyTextTransform(text, styles.textTransform));
    const measureCharacters = transformedCharacters.length === characters.length ? transformedCharacters : characters;
    const fontSize = Number.parseFloat(styles.fontSize) || 16;
    const letterSpacing = styles.letterSpacing === 'normal' ? 0 : Number.parseFloat(styles.letterSpacing) || 0;

    if (!ROLL_CONTEXT) {
      return characters.map((character, index) => {
        const measuredCharacter = measureCharacters[index] || character;
        let width = 0.64;

        if (measuredCharacter === ' ') {
          width = 0.32;
        } else if (NARROW_CHARS.test(measuredCharacter)) {
          width = 0.38;
        } else if (WIDE_CHARS.test(measuredCharacter)) {
          width = 0.94;
        } else if (/[A-Z0-9]/.test(measuredCharacter)) {
          width = 0.74;
        }

        return `${width}em`;
      });
    }

    ROLL_CONTEXT.font = `${styles.fontStyle} ${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;

    let previousWidth = 0;
    return characters.map((character, index) => {
      const currentWidth = ROLL_CONTEXT.measureText(measureCharacters.slice(0, index + 1).join('')).width;
      const width = currentWidth - previousWidth + letterSpacing;
      previousWidth = currentWidth;
      return `${Math.max(width, 1) / fontSize}em`;
    });
  }

  function createRollFace(character, faceClass) {
    const face = document.createElement('span');
    face.className = `roll-face ${faceClass}`;
    face.textContent = character === ' ' ? '\u00A0' : character;
    return face;
  }

  function createRollChar(character, index, total, width) {
    const char = document.createElement('span');
    char.className = 'roll-char';

    if (character === ' ') {
      char.classList.add('roll-char-space');
    }

    char.style.setProperty('--char-width', width);
    char.style.setProperty('--char-delay', `${index * 34}ms`);
    char.style.setProperty('--return-delay', `${(total - index - 1) * 16}ms`);
    char.appendChild(createRollFace(character, 'roll-face-front'));
    char.appendChild(createRollFace(character, 'roll-face-back'));
    return char;
  }

  function createRollTarget(text, element) {
    const target = document.createElement('span');
    const screenReaderText = document.createElement('span');
    const chars = document.createElement('span');
    const characters = Array.from(text);
    const widths = getRollCharWidths(text, element);

    target.className = 'roll-target';
    target.dataset.rollText = text;
    screenReaderText.className = 'roll-sr';
    screenReaderText.textContent = text;
    chars.className = 'roll-chars';
    chars.setAttribute('aria-hidden', 'true');
    characters.forEach((character, index) => {
      chars.appendChild(createRollChar(character, index, characters.length, widths[index]));
    });

    target.appendChild(screenReaderText);
    target.appendChild(chars);
    return target;
  }

  function wrapRollText(element) {
    if (!element || element.dataset.rollReady === 'true') {
      return;
    }

    const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
    if (textNodes.length === 0) {
      return;
    }

    textNodes.forEach((node) => {
      const text = node.textContent.trim();
      if (text) {
        node.parentNode.replaceChild(createRollTarget(text, element), node);
      }
    });
    element.dataset.rollReady = 'true';
  }

  function bindRollHost(host) {
    if (!host || host.dataset.rollHostReady === 'true') {
      return;
    }

    host.dataset.rollHostReady = 'true';

    host.addEventListener('pointerenter', () => {
      host.querySelectorAll('.roll-target').forEach((target) => target.classList.add('is-rolling'));
    });
    host.addEventListener('pointerleave', () => {
      host.querySelectorAll('.roll-target').forEach((target) => target.classList.remove('is-rolling'));
    });
    host.addEventListener('focus', () => {
      host.querySelectorAll('.roll-target').forEach((target) => target.classList.add('is-rolling'));
    });
    host.addEventListener('blur', () => {
      host.querySelectorAll('.roll-target').forEach((target) => target.classList.remove('is-rolling'));
    });
  }

  function bindRollInteractions() {
    document.querySelectorAll('.roll-target').forEach((target) => {
      bindRollHost(target.closest('.nav-link, .menu-button, .pill, .text-link') || target);
    });
  }

  function setRollText(element, text) {
    if (!element) {
      return;
    }

    const value = String(text).trim();
    if (!value) {
      return;
    }

    const host = element.closest('.nav-link, .menu-button, .pill, .text-link') || element;
    element.querySelectorAll('.roll-target').forEach((target) => target.remove());

    const target = createRollTarget(value, element);
    if (host.matches(':hover') || document.activeElement === host) {
      target.classList.add('is-rolling');
    }

    element.appendChild(target);
    element.dataset.rollReady = 'true';
    bindRollHost(host);
  }

  function refreshRollWidths() {
    document.querySelectorAll('.roll-target').forEach((target) => {
      const text = target.dataset.rollText;
      const element = target.parentElement;

      if (!text || !element) {
        return;
      }

      const widths = getRollCharWidths(text, element);
      target.querySelectorAll('.roll-char').forEach((char, index) => {
        char.style.setProperty('--char-width', widths[index]);
      });
    });
  }

  function initRollingText() {
    ROLL_SELECTORS.forEach((selector) => {
      document.querySelectorAll(selector).forEach(wrapRollText);
    });
    bindRollInteractions();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refreshRollWidths);
    }

    window.addEventListener('load', () => {
      window.requestAnimationFrame(refreshRollWidths);
    });

    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refreshRollWidths, 120);
    });
  }

  function initReveals() {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (elements.length === 0) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });

    elements.forEach((element) => observer.observe(element));
  }

  function initActiveSections() {
    const links = Array.from(document.querySelectorAll('.nav-link[href^="#"], .footer-nav a[href^="#"]'));
    const ids = Array.from(new Set(links.map((link) => link.getAttribute('href').slice(1))));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (links.length === 0 || sections.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeHash = `#${entry.target.id}`;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === activeHash);
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
  }

  function setCounterValue(element, value, suffix) {
    element.textContent = `${value}${suffix}`;
  }

  function animateCounter(element, target, suffix) {
    const duration = 1200;
    const startTime = performance.now();
    element.classList.add('is-counting');

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounterValue(element, Math.round(eased * target), suffix);

      if (progress < 1) {
        window.requestAnimationFrame(update);
        return;
      }

      setCounterValue(element, target, suffix);
    }

    window.requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = Array.from(document.querySelectorAll('.stat-counter[data-count-to]'));
    if (counters.length === 0) {
      return;
    }

    const items = counters.map((element) => {
      const target = Number.parseInt(element.dataset.countTo, 10);
      const suffix = element.dataset.countSuffix || '';
      return Number.isFinite(target) ? { element, target, suffix } : null;
    }).filter(Boolean);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach(({ element, target, suffix }) => setCounterValue(element, target, suffix));
      return;
    }

    items.forEach(({ element, suffix }) => setCounterValue(element, 0, suffix));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const item = items.find(({ element }) => element === entry.target);
        observer.unobserve(entry.target);

        if (item) {
          animateCounter(item.element, item.target, item.suffix);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.4
    });

    items.forEach(({ element }) => observer.observe(element));
  }

  function setFieldError(input, message) {
    const field = input.closest('.field');
    const error = document.getElementById(`${input.name}-error`);

    if (!field || !error) {
      return;
    }

    field.classList.toggle('has-error', Boolean(message));
    input.setAttribute('aria-invalid', String(Boolean(message)));
    error.textContent = message;
  }

  function validateField(input) {
    const validator = validators[input.name];

    if (!validator) {
      return true;
    }

    const result = validator(input.value);
    const message = result === true ? '' : result;
    setFieldError(input, message);
    return message === '';
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) {
      return;
    }

    const inputs = Array.from(form.querySelectorAll('input, textarea'));

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.closest('.field').classList.contains('has-error')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.hidden = true;

      let firstInvalid = null;
      inputs.forEach((input) => {
        if (!validateField(input) && !firstInvalid) {
          firstInvalid = input;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      form.reset();
      inputs.forEach((input) => setFieldError(input, ''));
      status.hidden = false;
    });
  }

  function init() {
    initRollingText();
    initReveals();
    initActiveSections();
    initCounters();
    initContactForm();
  }

  return {
    init,
    setRollText
  };
})();
