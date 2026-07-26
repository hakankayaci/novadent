# Product

## Register

brand

## Users

Pet owners in and around Edirne, most often reaching the page on a phone, frequently
while something is already wrong: a cat that stopped eating, a dog hit by a car, a
vaccination that is overdue. A smaller second audience crosses the Bulgarian or Greek
border and needs the same information in a language they read.

The job is nearly always one of three things, in this order of urgency:

1. Get the clinic on the phone right now.
2. Get directions to the door.
3. Decide whether this is the right clinic at all — who the vet is, what the rooms
   look like, whether anyone will pick up at 2am.

Everything else on the page is secondary to those three.

## Product Purpose

A single-page site for CanbazVet Veteriner Kliniği (Şükrüpaşa, Edirne), run by
veterinarian Berk Canbaz. It exists to convert a worried owner into a phone call or a
navigation start, and to rank for local veterinary searches in Edirne.

Success looks like: a visitor on a 320px phone can call the clinic without scrolling,
understands within one screen who will treat their animal, and can see the actual
rooms before handing over their pet.

## Brand Personality

Clinical, warm, plain-spoken.

Not "premium", not playful, not corporate-medical. The voice is a competent vet
explaining something at the table without jargon and without rushing: *"Operasyonlar
muayene odasında değil, kendi ameliyathanesinde yapılır."* Concrete claims, no
adjectives doing the work.

The emotional target is relief, not delight. A worried owner should feel that someone
sensible is on the other end of the phone.

## Anti-references

- **Fabricated trust.** No invented star ratings, no review "themes" nobody wrote, no
  fake verified badges, no follower counts pulled from nowhere. Reviews live on Google;
  the page links there and asserts nothing of its own. This is a load-bearing rule, not
  a stylistic preference — a clinic that fakes its reviews is lying about medicine.
- **Stock-photo veterinary.** Generic smiling-vet-with-golden-retriever imagery. The
  clinic's own rooms are the asset; use them.
- **SaaS landing page grammar.** Hero metric row, eight identical icon+heading+text
  cards, a small uppercase eyebrow above every section, gradient text.
- **Editorial-magazine cosplay.** Display serif + italic + drop caps + ruled columns.
  This is a neighbourhood clinic, not a quarterly.
- **Turkish-first as an excuse.** Bulgarian and Greek are either done properly — real
  glyphs, every string, correct `lang` — or not offered.

## Design Principles

1. **The phone number is the product.** Every screen, every width, every language has a
   reachable call action. Nothing decorative may push it below the fold on mobile.
2. **Show the rooms.** Trust in a clinic is built by photographs of the actual
   operating table, not by claims about sterility. Real imagery beats copy.
3. **Say only what is true.** Every number on the page traces to something verifiable
   in `src/data/site.ts` or to the clinic's own commitment, explicitly labelled as
   such. If it cannot be sourced, it does not ship.
4. **Four languages or none.** Copy lives in one typed contract; a missing translation
   is a build error, not a silent fallback to Turkish.
5. **Motion enhances, never gates.** Content is visible by default. A reveal that fails
   to fire must leave a readable page, not a blank one.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA**, verified rather than asserted.

- Contrast audited numerically; the palette carries explicit rules about which greens
  may be text (see `design-system/MASTER.md`).
- Skip link is the first focusable element, keyboard-only, animated in.
- Full keyboard paths for the language menu, mobile drawer and FAQ accordion, including
  focus trapping and focus restoration.
- Touch targets ≥ 44px, asserted by Playwright at 320px, 390px and desktop.
- `prefers-reduced-motion` resolves reveals instantly instead of hiding content.
- Turkish, Bulgarian and Greek all render in a font that actually contains their
  alphabets; `<html lang>` follows the active language for screen-reader pronunciation.
- The page must remain fully readable with JavaScript disabled.
