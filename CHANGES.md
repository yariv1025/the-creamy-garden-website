# Creamy Garden — Changes & Roadmap

## What Was Changed (This Session)

### 1. Menu Section — Cinematic Atmosphere
- Added a `menu-bg-canvas` layer behind the entire menu: floating ingredient SVGs (tomatoes, basil leaves, avocados, croissants, pasta shapes, mushrooms) rise slowly from the bottom on looping CSS animations (`ing-rise` keyframe).
- Each ingredient has randomised speed (`--dur`), stagger delay (`--delay`), horizontal drift (`--dx`), rotation (`--spin`), and opacity (`--op`) to feel organic, not mechanical.
- The canvas is `position: absolute; inset: 0` on the menu `<section>`, so it sits behind all content.
- `prefers-reduced-motion` hides the canvas entirely for users who request less motion.

### 2. Menu Design — Photo-Rich Open Layout
- Replaced the old parchment-box card grid with an **open, editorial layout**: transparent background, no border, no box-shadow on the outer wrapper.
- Added **photo cards** (`.ck-photo-card`) for sections with images (pizza, pasta, potato, salads, drinks, desserts):
  - Uniform 4:3 image ratio on every card.
  - Hover: card lifts (+4 px) and the photo slow-zooms (7 s `ease` transition).
  - Card body shows: item name (Playfair Display serif), flavour note in italic, optional badge (e.g. "Soon"), and gold price.
- **Drink pills** (`.ck-drink-pill`) replace list rows for beverages — rounded chips in a flex-wrap row.
- Section headings use a gold gradient rule (`ck-rule`) that fades left-to-right (RTL-aware).
- List-item rows (sauces, toppings) get a subtle gold highlight on hover with a small inset shift (`ck-item-row`).
- An illustration disclaimer appears at the bottom of the menu.

### 3. Typography & Font Sizing
- Nav links: increased letter-spacing and font size for legibility.
- `section-title` and `section-subtitle`: bumped up across the board.
- Find Us / Contact section: larger label and value fonts.
- All changes follow the existing Playfair Display + Raleway design language.

### 4. Hero Tagline
- Updated the hero subtitle to immediately communicate *what is served*: creamed potatoes, Neapolitan pizzas, handmade pastas — rather than a vague "fresh handmade" tagline.

### 5. SEO & Verification
- Added Google Search Console HTML verification file.
- Added Google Search Console `<meta>` verification tag in `<head>`.
- Updated business phone number throughout (WhatsApp href, Schema.org, social links).

---

## What Still Needs to Be Done (The Plan)

### A. Cinematic Animations — Full Section Coverage *(urgent — in progress)*
**Problem:** The `ing-rise` animation uses `translateY(-108vh)`, which is ~1× the viewport height. If the menu section is 2–3× the viewport tall, the top half of the section has no floating elements visible.

**Fix:**
1. Change keyframe travel to `translateY(-300vh)` so ingredients always cross the full section height regardless of viewport.
2. Scatter a second batch of ingredient elements starting at `bottom: 30%`, `bottom: 60%`, `bottom: 80%` of the section — so elements are visible at the top portions of the section *immediately* on scroll, not only after the full upward journey completes.
3. Vary `--dur` for mid-section starters to be shorter (12–18 s) so they feel lively in those zones.

### B. Menu Section — Scroll-Reveal on Cards
- Individual `.ck-photo-card` elements should fade+rise in as the user scrolls each section into view (stagger by column index).
- Currently the stagger reveal only targets direct children of `.ck-menu`, which are `.ck-section` divs — not the individual cards inside them. Add a second pass in the `IntersectionObserver` loop to also observe `.ck-photo-card` and `.ck-drink-pill` elements.

### C. Parallax Depth on Section Header
- The `#menu .section-title` and `.menu-order-btn` could subtly shift on scroll (5–10 px parallax) to reinforce the "cinematic" depth feel, consistent with the hero section.

### D. Mobile Responsiveness Audit
- Test the 2-column → 1-column card grid breakpoints at 600 px and 380 px with the new photo cards and drinks pills.
- Ensure the floating ingredient canvas looks right at mobile sizes (may need fewer / smaller elements).

### E. Ingredient Animation — Variety
- Add 2–3 more ingredient shapes: a pasta strand, a cheese wedge, a small herb sprig.
- Vary opacity range between `0.22` and `0.42` so near-elements feel closer/further (depth cue).

### F. "Coming Soon" Badges
- Desserts section currently shows "Soon" badges on churros/sahlab in some language translations. Decide: keep badges or remove once items are available. Wire up a single config flag in the translations object to toggle.

### G. Performance
- The 13+ ingredient SVGs are inlined as HTML. Consider extracting them to a `<defs>` block + `<use>` references to reduce DOM size.
- Lazy-load the gallery images below the fold.
