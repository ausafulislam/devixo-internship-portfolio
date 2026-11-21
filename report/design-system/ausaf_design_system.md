---
name: "Ausaf Developer Portfolio"
description: "High-contrast portfolio design system for Ausaf Developer, pairing stark white surfaces and electric cobalt blue blocks with bold geometric sans and expressive italic serif typography."
---

## Overview

Ausaf Developer Portfolio is a high-contrast, modern personal portfolio design system built for a multidisciplinary UI/UX Designer and Front-End Developer. It pairs gallery-clean white surfaces with bold, full-bleed electric cobalt blue (`#1638FF`) section blocks, oversized mixed-typographic headlines, and crisp pill-shaped interactive elements.

The aesthetic balances Swiss-grid discipline with expressive typographic warmth: heavy uppercase geometric grotesque headlines collide with sweeping italic serif accents, while generous negative space keeps every section scannable, confident, and uncluttered.

## Colors

The palette is anchored by pure gallery white (`#FFFFFF`) and electric cobalt blue (`#1638FF`), supported by deep ink charcoal (`#1A1B25`) for crisp readability and subtle cool-tinted neutrals for secondary metadata and hairline dividers.

- **Primary & Primary Container:** Deep cobalt (`#0023CB`) for high-contrast interactive controls and electric cobalt (`#1638FF`) for full-bleed feature bands, oversized display accents, and primary pill CTAs.
- **Surfaces:** Stark white (`#FFFFFF`) as the primary canvas alternating with `#1638FF` cobalt bands and soft cool off-white (`#F4F2FF`) for subtle card elevation.
- **Dark Mode:** Deep ink navy (`#12131D`) with crisp light neutral text (`#E2E1F0`) and luminous periwinkle-cobalt accents (`#BCC2FF`), preserving the high-contrast visual rhythm.

```yaml
colors:
  cobalt: "#1638FF"
  light:
    primary: "#0023CB"
    on-primary: "#FFFFFF"
    primary-container: "#1638FF"
    on-primary-container: "#FFFFFF"
    secondary: "#4A56B0"
    on-secondary: "#FFFFFF"
    secondary-container: "#DFE0FF"
    on-secondary-container: "#172480"
    tertiary: "#871200"
    on-tertiary: "#FFFFFF"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    background: "#FFFFFF"
    on-background: "#1A1B25"
    surface: "#FFFFFF"
    surface-dim: "#DAD8E7"
    surface-bright: "#FFFFFF"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#F4F2FF"
    surface-container: "#EEECFB"
    surface-container-high: "#E8E7F6"
    surface-container-highest: "#E2E1F0"
    on-surface: "#1A1B25"
    surface-variant: "#E1E1F7"
    on-surface-variant: "#444657"
    outline: "#757689"
    outline-variant: "#C5C5DA"
    inverse-surface: "#1A1B25"
    inverse-on-surface: "#FFFFFF"
    inverse-primary: "#BCC2FF"
  dark:
    primary: "#BCC2FF"
    on-primary: "#00189A"
    primary-container: "#1638FF"
    on-primary-container: "#FFFFFF"
    secondary: "#BCC2FF"
    on-secondary: "#172480"
    secondary-container: "#313D97"
    on-secondary-container: "#DFE0FF"
    tertiary: "#FFB4A5"
    on-tertiary: "#650B00"
    error: "#FFB4AB"
    on-error: "#690005"
    background: "#12131D"
    on-background: "#E2E1F0"
    surface: "#12131D"
    surface-dim: "#0C0D17"
    surface-bright: "#383844"
    surface-container-lowest: "#0C0D17"
    surface-container-low: "#1A1B25"
    surface-container: "#1E1F29"
    surface-container-high: "#282934"
    surface-container-highest: "#33343F"
    on-surface: "#E2E1F0"
    surface-variant: "#444657"
    on-surface-variant: "#C5C5DA"
    outline: "#8E8FA3"
    outline-variant: "#444657"
    inverse-surface: "#FFFFFF"
    inverse-on-surface: "#1A1B25"
    inverse-primary: "#1638FF"
```

## Typography

The typographic identity relies on dramatic contrast between three Google Fonts:

1. **Red Hat Display** (`headline`): Heavy, tight-tracked geometric sans-serif used in uppercase for monumental section titles, hero display words (`DESIGNER`), and brand wordmarks (`AUSAF.`).
2. **Instrument Serif** (`editorial`): Expressive italic serif used to punctuate headlines (`I'm`, `ui/ux`, `design needs`), pill tags, and personal signature moments.
3. **Instrument Sans** (`body` and `label`): Crisp neo-grotesque sans-serif for readable body paragraphs, navigation links, form inputs, and uppercase micro-labels.

```yaml
typography:
  display-xl:
    fontFamily: "Red Hat Display"
    fontSize: 88px
    fontWeight: 900
    lineHeight: 92px
    letterSpacing: -2px
  display-xl-mobile:
    fontFamily: "Red Hat Display"
    fontSize: 32px
    fontWeight: 900
    lineHeight: 36px
    letterSpacing: -1px
  display-lg:
    fontFamily: "Red Hat Display"
    fontSize: 56px
    fontWeight: 900
    lineHeight: 60px
    letterSpacing: -1.5px
  display-lg-mobile:
    fontFamily: "Red Hat Display"
    fontSize: 30px
    fontWeight: 900
    lineHeight: 34px
    letterSpacing: -0.75px
  editorial-xl:
    fontFamily: "Instrument Serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 76px
    letterSpacing: -1px
  editorial-xl-mobile:
    fontFamily: "Instrument Serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.5px
  editorial-lg:
    fontFamily: "Instrument Serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 54px
    letterSpacing: -0.5px
  editorial-lg-mobile:
    fontFamily: "Instrument Serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Red Hat Display"
    fontSize: 36px
    fontWeight: 800
    lineHeight: 42px
    letterSpacing: -0.5px
  headline-lg-mobile:
    fontFamily: "Red Hat Display"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 30px
    letterSpacing: -0.25px
  headline-md:
    fontFamily: "Red Hat Display"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.25px
  title-lg:
    fontFamily: "Instrument Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  title-md:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Instrument Sans"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: 0.75px
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: "Instrument Sans"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.75px
```

## Layout & Spacing

The layout uses a 12-column responsive grid centered inside a `1240px` max-width container on desktop (`24px` horizontal padding on mobile, `40px` on tablet, `48px` on desktop), while full-bleed color bands span `100%` of the viewport width.

A strict `4px` / `8px` spacing rhythm governs all internal padding and section gaps. Sections alternate between generous vertical breathing room (`96px` on desktop, `64px` on mobile) and tight component-level gaps (`16px`–`24px`).

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 96px
  page-margin: 24px
```

## Elevation & Depth

Elevation is flat and architectural. Hierarchy is established through stark surface contrast (white vs. `#1638FF` cobalt vs. `#F4F2FF` soft lavender-white), crisp `1px` hairline borders (`outline-variant`), and generous negative space rather than heavy drop shadows. Interactive cards use subtle tonal shifts and hairline border emphasis on hover.

## Shapes

The shape language pairs sharp architectural grids with friendly, tactile pill geometry:

- **Buttons, Badges & Service Tags:** Always full pill (`9999px`) to echo the signature floating pill clusters and CTA buttons.
- **Content Cards & Project Frames:** Softly rounded (`16px`–`24px`) for modern visual polish without feeling bubbly.
- **Form Inputs:** Clean `12px` rounded rectangles with crisp `1px` borders.

```yaml
rounded:
  sm: 6px
  DEFAULT: 12px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
```

## Motion & Micro-interaction

Motion is crisp, tactile, and restrained. Pill buttons and interactive cards respond within `150ms` using `transform` and `opacity` transitions only, with subtle upward lift (`-2px`) on hover. Nothing loops infinitely or animates layout geometry.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

- **Tone:** Confident, direct, human, and design-fluent. No buzzword fluff ("elevate", "seamlessly", "reimagine").
- **Capitalisation:** Display lockups pair ALL-CAPS geometric sans with lowercase/title-case italic serif (`ALL YOUR` + *design needs*). Action buttons and micro-labels use uppercase (`LET'S CHAT`, `BOOK A CALL`, `VIEW LIVE DEMO`). Body copy uses standard sentence case.
- **Labels:** Action-oriented verb phrases (`Let's Chat`, `View Case Study`, `Send Message`).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
