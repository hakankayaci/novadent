---
name: NOVADENT
description: A calm, precise dental-clinic system shaped by porcelain light, surgical navy, and one luminous cyan guide.
colors:
  surgical-navy: "#06172E"
  clinical-navy: "#0A2342"
  navy-surface: "#10325A"
  navy-support: "#1A4774"
  navy-text-light: "#DDE8F2"
  luminous-cyan: "#08B7D3"
  cyan-action: "#007E9A"
  cyan-mid: "#009DBA"
  cyan-highlight: "#39C9DF"
  cyan-wash: "#DDF7FA"
  porcelain-calm: "#F8F6F1"
  porcelain-light: "#FCFBF8"
  porcelain-warm: "#F3EFE7"
  porcelain-line: "#E4DDD0"
  mist: "#E8F1F3"
  copy: "#142033"
  copy-soft: "#475569"
  copy-muted: "#64748B"
  white: "#FFFFFF"
  google-gold: "#F4B400"
  whatsapp: "#25D366"
  whatsapp-text: "#062813"
typography:
  display:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.75rem + 3.4vw, 5.35rem)"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "\"wght\" 720, \"FLAR\" 24, \"VOLM\" 18"
  headline:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.45rem + 2.25vw, 3.85rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1.15vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.022em"
  lead:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 0.98rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Commissioner, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  focus: "4px"
  control: "12px"
  surface: "16px"
  panel: "24px"
  round: "9999px"
spacing:
  compact: "8px"
  small: "12px"
  base: "16px"
  comfortable: "24px"
  generous: "32px"
  control-min: "44px"
  gutter: "clamp(1rem, 3vw, 3rem)"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.whatsapp-text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  button-navy:
    backgroundColor: "{colors.surgical-navy}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  language-trigger:
    backgroundColor: "{colors.porcelain-light}"
    textColor: "{colors.surgical-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "8px"
    height: "44px"
  google-proof:
    backgroundColor: "{colors.porcelain-light}"
    textColor: "{colors.surgical-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
    height: "44px"
  photo-surface:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.surface}"
  dark-panel:
    backgroundColor: "{colors.surgical-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: NOVADENT

## Overview

**Creative North Star: "Luminous Shade Guide"**

NOVADENT balances the quiet luminosity of porcelain with the confidence of a precise clinical core. Warm light fields make information feel calm and hospitable; surgical-navy regions create focus without becoming cold. Real clinic photography carries the evidence, while the identity is integrated into the architecture instead of being framed as a decorative badge.

The system is refined and direct rather than ornamental. One cyan floss route is the reusable authored gesture: it guides attention, suggests continuity, and then yields to clear typography and photography. Density stays editorial, motion stays restrained, and every interaction should make the next action obvious.

**Key Characteristics:**

- Warm porcelain reading fields against decisive surgical navy.
- One-family Commissioner typography with expressive variable display settings.
- Real photography, asymmetric editorial grids, and generous negative space.
- A single luminous cyan guide instead of repeated decorative effects.
- Ambient depth, restrained corners, visible focus, and complete reduced-motion behavior.

## Colors

The palette reads as illuminated ceramic, precise instrumentation, and trustworthy public evidence.

### Primary

- **Surgical Navy:** The structural color for hero copy, contact panels, footers, and decisive actions.
- **Clinical Navy:** A nearby supporting depth used when the primary navy needs tonal separation.
- **Luminous Cyan:** The identity accent for the floss route, key words, focus, and directional emphasis.

### Secondary

- **Cyan Action:** The accessible cyan for links and labels on light fields.
- **Cyan Wash:** A quiet evidence or selected-state surface; it should never dominate an entire view.
- **Mist:** A cool neutral placeholder and photographic support surface.

### Tertiary

- **Google Gold:** Exclusively marks Google stars and rating evidence.
- **WhatsApp Green:** Exclusively identifies WhatsApp actions, paired with its dark semantic text color.

### Neutral

- **Porcelain Calm:** The default page atmosphere and primary reading field.
- **Porcelain Light:** A lifted light surface for menus and compact controls.
- **Porcelain Warm:** A subtle alternate light field that keeps stacked sections distinct.
- **Porcelain Line:** The warm divider tone when navy-alpha borders are inappropriate.
- **Copy / Copy Soft / Copy Muted:** A deliberate text hierarchy for primary prose, explanatory text, and tertiary metadata.
- **White:** Used for text and sparse highlights on navy, not as the default page world.

### Named Rules

**The Porcelain-and-Navy Rule.** Alternate quiet light reading fields with decisive navy regions; do not flatten the experience into continuous blue.

**The Single Cyan Guide Rule.** Cyan guides focus and action, but it never washes every surface or competes with photography.

**The Evidence Gold Rule.** Gold belongs only to Google star evidence and is never a general decorative accent.

## Typography

**Display Font:** Commissioner variable (with Arial and sans-serif fallbacks)
**Body Font:** Commissioner variable (with Arial and sans-serif fallbacks)

**Character:** Commissioner provides a single multilingual voice across Latin, Greek, and Cyrillic. Variable flare and volume give large headlines a proprietary silhouette, while body copy stays clear and neutral.

### Hierarchy

- **Display** (720, responsive display scale, 0.98 line-height): Hero statements only; use the variable flare and volume settings and keep line count short.
- **Headline** (700, responsive headline scale, 1.04 line-height): Major section transitions and trust statements.
- **Title** (700, responsive title scale, 1.12 line-height): Subsection and panel headings.
- **Lead** (400, responsive lead scale, 1.65 line-height): Introductory copy with a maximum readable measure of 72 characters.
- **Body** (400, 1rem, 1.625 line-height): Explanations, reviews, and supporting information.
- **Label** (700, 0.75rem, 0.22em tracking): Short uppercase eyebrows only; never use it for sentence-length content.

### Named Rules

**The One-Family Rule.** Use Commissioner for every language and role; hierarchy comes from scale, weight, spacing, and controlled variable axes rather than extra font families.

**The Short-Display Rule.** Display lines are promises or anchors, not paragraphs; supporting nuance belongs in lead or body text below.

## Layout

The shared content shell is capped at 86rem and uses a fluid gutter from 1rem to 3rem. Section rhythm is generous and responsive, scaling from 4rem to 7rem. Reading measures stop at 72 characters even when the surrounding grid is wider.

Primary visual compositions may use an asymmetric 43/57 text-to-image split on large screens. At mobile sizes, photography appears as its own first block and copy follows on a separate navy field; important text is never compressed over the image. Editorial grids use rules, spacing, and deliberate span changes rather than a wall of equal cards. The layout must remain naturally contained from 320px through wide desktop sizes without relying on horizontal clipping.

Touch targets are at least 44px. Sticky navigation stays compact, and the mobile action bar appears only after the opening has left the viewport so it does not compete with the first decision.

## Elevation & Depth

Depth is ambient and restrained. Tonal contrast, photography, and navy-to-porcelain adjacency do most of the work; shadows are reserved for true lifted layers such as sticky navigation, menus, maps, and major information panels.

### Shadow Vocabulary

- **Surface Ambient** (`0 12px 36px -24px rgba(6, 23, 46, 0.32)`): Gentle separation for small lifted surfaces.
- **Panel Lift** (`0 24px 64px -32px rgba(6, 23, 46, 0.42)`): Major map, menu, and information panels only.
- **Header Drift** (`0 12px 30px -26px rgba(6, 23, 46, 0.45)`): Compact sticky navigation separation.

### Named Rules

**The Ambient-Only Rule.** A shadow may clarify layer or state, but it must never become the visual subject.

**The Flat-By-Default Rule.** Section content rests flat; lift is earned by navigation, disclosure, or a genuinely elevated panel.

## Shapes

The form language uses restrained soft geometry: 12px for controls, 16px for image surfaces, and 24px only for major panels. Hairline dividers, open editorial rows, and square section boundaries counterbalance the rounded controls. Full circles are reserved for icons and platform marks.

Focus uses a compact 4px corner and a visible 3px luminous-cyan outline. Photography may be clipped to the 16px surface radius, but image grids should preserve asymmetry rather than turning every asset into an isolated tile.

## Components

Components feel refined and direct. Controls are compact, readable, and specific to their action; platform colors appear only when the platform itself is the destination.

### Buttons

- **Shape:** Gently softened control corners (12px), with a 48px preferred height and a 44px absolute minimum.
- **Primary WhatsApp:** WhatsApp green with dark semantic text, bold copy, and the local official glyph.
- **Primary Navy:** Surgical navy with white text for high-confidence internal or Google actions.
- **Outline on Dark:** Transparent with a low-contrast white border; hover adds only a quiet white wash.
- **Hover / Focus:** A restrained 2px lift or tonal shift over 300ms; focus always uses the global cyan outline.

### Chips

- **Style:** Language and evidence chips use 12px corners, compact padding, a faint border, and explicit text beside the icon or flag.
- **State:** Selected language uses cyan wash; inactive options remain porcelain and darken on hover.

### Cards / Containers

- **Corner Style:** Image surfaces use 16px; major dark information panels use 24px.
- **Background:** Porcelain and white organize reading; navy carries decisive information; mist supports unloaded imagery.
- **Shadow Strategy:** Flat by default, using Panel Lift only when the surface is genuinely above the page.
- **Border:** Prefer hairline rules and section dividers over boxed cards.
- **Internal Padding:** 24px on compact panels and 32px on major panels.

### Navigation

The sticky header sits on translucent porcelain with navy text and a faint lower rule. Desktop links are text-first and compact. Mobile keeps only the brand, visible flag-plus-code language control, and a 44px menu trigger; its opened navigation is a full-width porcelain disclosure rather than an overlaying dark drawer.

### Google Proof

Use the official multicolor Google G, gold stars, the sourced score and count, and concise public-review attribution. A verification check may accompany a plain-language verified-reviews label, but no visual treatment should imply editorial authorship or a separate NOVADENT certification.

### Image Grid

Real clinic images use object-cover, explicit dimensions, responsive sizes, and a subtle hover scale. A dark-to-transparent caption veil is acceptable for legibility; logos, follower counts, and artificial social metrics are not overlaid.

### Luminous Floss Guide

The cyan route draws once over 1.35s while the branded clinic plate resolves into the generated smile portrait. Its endpoint lands on the upper teeth, triggers one restrained two-beat glint, and then fades so the portrait remains clean. This is the sole authored motion signature; reduced motion shows the final portrait immediately with no glint.

## Do's and Don'ts

### Do:

- **Do** establish each view with one clear hierarchy before adding supporting detail.
- **Do** let real clinic photography and sourced public evidence carry trust.
- **Do** keep platform marks local, official in form, and attached only to platform actions.
- **Do** preserve the porcelain-versus-navy rhythm across new surfaces.
- **Do** keep all four scripts in the same Commissioner hierarchy and test long translated labels.
- **Do** keep content visible without JavaScript and make every animated state reduced-motion safe.

### Don't:

- **Don't** use gold outside Google stars or turn cyan into a full-page wash.
- **Don't** introduce gradient text, glossy glass-card stacks, or repeated decorative motion.
- **Don't** place long or essential copy directly over photography on mobile.
- **Don't** replace editorial rows with a grid of identical rounded cards.
- **Don't** use stock patients, fabricated counts, or decorative trust claims.
- **Don't** solve responsive overflow by clipping the page.
