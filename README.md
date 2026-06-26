# Wireframe — content & nav planning (THROWAWAY)

Grayscale, real typography, **no design**. Purpose: read copy in context and dial in nav
labels / dropdown contents / section structure — *not* visuals. The real site lives in
`../../client/` (Astro). This folder is disposable.

## Run it

```bash
cd planning/wireframe
npx serve .        # or: python3 -m http.server 8000
```

Then open the printed URL. Edit any `.html` and refresh.

## Rules we're holding
- **Neutrals only.** No brand color. If it looks designed, we've drifted.
- Tailwind v4 browser build + `@tailwindplus/elements` (no build step). Throwaway-appropriate.
- Every label/section here is a *proposal* to react to, not a decision.
- **PLUS-FIRST, ALWAYS.** Every section must START from a real Tailwind Plus marketing block
  (`~/Downloads/marketing-v4/html` = tailwindcss.com/plus/ui-blocks/marketing), then be adapted
  for content + grayscaled (strip `dark:`, swap `indigo`→`gray`). Only hand-build when truly
  nothing in the catalog fits. Catalog covers: heroes, features, bento, stats, testimonials,
  logo-clouds, pricing, FAQ, CTA, team, blog, contact, newsletters, banners, footers, headers,
  flyout-menus, 404, and full page-examples.

## Pages
- `index.html` — homepage content skeleton (the three-layers spine)
- `_nav.html` — reference: the nav + both dropdowns expanded, with label candidates
- (more page skeletons added as we dial in the homepage)

## Source of truth
Naming/structure decisions, once made here, get written back to `../01-site-hierarchy.md`
and `../02-homepage.md`. This wireframe is the *scratchpad*; the docs are the record.
