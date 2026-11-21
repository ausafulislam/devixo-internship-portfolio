# Ausaf Ul Islam Portfolio

A complete static portfolio website for Ausaf Ul Islam, a Full-Stack Developer and AI Engineer. The site presents his profile, services, technical skills, education, experience, five featured projects, contact details, and social links.

The implementation follows the approved desktop and mobile design references and the design system stored in `report/design-system/ausaf_design_system.md`.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Google Fonts for the typography specified by the approved design system

No frameworks, CSS libraries, JavaScript libraries, animation libraries, UI kits, packages, or build tools are used.

## Features

- Sticky navbar with brand and pill-shaped Menu button
- Floating rounded navigation panel with dimmed, blurred backdrop, minimal close button, and hidden scrollbar
- Oversized vertical section links with clip-path reveal, staggered entrance, and smooth reverse close
- Staggered 3D letter-roll hover effect on navigation links and site CTAs
- Keyboard-accessible menu with Escape-to-close, backdrop close, focus trapping, and scroll locking
- Light and dark mode toggle with saved preference
- One-line serif hero lockup, text reveal animation, enlarged display heading, overlapping portrait, and up-arrow talk CTA
- Services cobalt showcase band with six service pills
- About, technical skills, education, experience, featured projects, contact, and footer sections
- Five project cards using the organized local project images and verified external links
- Sixth GitHub call-to-action card
- Contact form with inline validation and success status
- Scroll-based section reveals and animated about-section stat counters using `IntersectionObserver`
- Active section highlighting in navigation
- Bold card styling with 3D tilt hover, rolling button text, footer link interactions, and no image lift effects
- Responsive layouts for large desktop, standard desktop, laptop, tablet, and mobile screens
- Reduced-motion support through `prefers-reduced-motion`
- Semantic HTML, accessible labels, meaningful alt text, and skip link

## Project Structure

```text
Portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── script.js
│   ├── navigation.js
│   └── interactions.js
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile-ausaf.png
│   │   ├── projects/
│   │   │   ├── project-01.png
│   │   │   ├── project-02.png
│   │   │   ├── project-03.png
│   │   │   ├── project-04.png
│   │   │   └── project-05.png
│   │   ├── education/
│   │   └── general/
│   ├── icons/
│   └── fonts/
├── screenshots/
│   ├── desktop/
│   │   └── design/
│   │       └── code.html
│   └── mobile/
│       └── design/
│           └── code.html
├── report/
│   └── design-system/
│       └── ausaf_design_system.md
├── README.md
└── .gitignore
```

## File Responsibilities

- `index.html`: Semantic structure for all portfolio sections and file references.
- `css/style.css`: Design tokens, reset, typography, layouts, components, and section styling.
- `css/responsive.css`: Desktop, tablet, and mobile media queries.
- `css/animations.css`: Keyframes, transitions, hover effects, reveal states, and reduced-motion handling.
- `js/navigation.js`: Floating menu panel, backdrop, close control, stagger state, focus handling, scroll locking, section navigation, and mode toggle.
- `js/interactions.js`: Letter-roll text wrapping and interactions, scroll reveals, active section tracking, and contact form validation.
- `js/script.js`: Shared initialization for navigation and interaction modules.
- `report/design-system/ausaf_design_system.md`: Approved design-system reference.
- `screenshots/desktop/design/code.html`: Approved desktop design reference.
- `screenshots/mobile/design/code.html`: Approved mobile design reference.

The design reference files are kept for comparison and are not production dependencies.

## Run Locally

No build step or dependency installation is required.

Open `index.html` directly in a browser.

For a local server, run this command from the project root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Screenshots

- [Desktop design reference](screenshots/desktop/design/code.html)
- [Mobile design reference](screenshots/mobile/design/code.html)
