# Bakehouse Lane — Responsive Retail Home Page

A polished, fully responsive Home Page for a fictional neighborhood bakery,
built for the **Moh Technology — Frontend Developer Internship Assessment**
(Responsive Retail Home Page task).

**Business chosen:** Bakery

> This is a UI/UX-focused static mockup. There is intentionally no backend,
> authentication, cart, checkout, or real API integration — per the
> assessment's implementation constraint. All product data lives in
> [`src/data/products.js`](./src/data/products.js).

## Live preview

Run locally (see **Getting started** below). If you're hosting this on
Vercel/Netlify, add your deployed URL here before submitting:

- Live demo: `https://bakehouse-xi.vercel.app/`
- Repository: `https://github.com/Hrithi28/Bakehouse`

## Design direction

- **Palette** — warm flour white (`#FAF3E7`) background, deep cocoa
  (`#3A2418`) text and footer, toasted honey (`#E8A33D`) and rust-red
  (`#C1502E`) accents, muted sage (`#7C8B6F`) for secondary tags.
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) for
  display headings (warm, slightly organic serif) paired with
  [Work Sans](https://fonts.google.com/specimen/Work+Sans) for body copy
  and UI text.
- **Signature detail** — product cards are styled like bakery order
  tickets, with a perforated tear-line between the image and the details
  and the price stamped inside a circular tag. The hero echoes the same
  idea with a rotating "Baked Fresh Daily" stamp and rising steam wisps
  above the loaf illustration.
- **Motion** — ambient CSS animation in the hero (steam rise, slow stamp
  rotation) plus a one-shot scroll-reveal on section and card entrance via
  a small `IntersectionObserver` hook. Everything respects
  `prefers-reduced-motion`.
- **Product imagery** — since this is a static mockup with no photography
  budget, each product uses a category-themed gradient tile with a small
  hand-drawn line-art glyph (`src/assets/icons.jsx`) instead of a stock
  photo. Swap `ProductImage` for real `<img>`/CDN assets when photography
  is available — the component boundary is deliberately isolated for that.

## Features

- Sticky, scroll-aware navigation bar with a static-functional search field
  and a mobile slide-down drawer menu
- Hero/banner section with a clear CTA and an animated signature scene
- Product grid with **12 mock products** across 6 categories (Breads,
  Pastries, Cakes, Cookies, Pies, Muffins), each with name, price,
  category, rating, and an optional "Bestseller" / "New" badge
- Static-functional category filter chips and live text search — both
  operate on the in-memory mock array, no network calls
- Brand story section with a four-step process strip
- Structured footer with link columns, a non-submitting newsletter mockup,
  and social links
- Fully responsive from ~360px mobile up through large desktop, with
  distinct layouts for mobile, tablet, and desktop breakpoints
- Accessible focus states, semantic landmarks (`header`, `main`, `nav`,
  `footer`), and `aria-label`s on icon-only controls

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) (no CRA,
  fast dev server and build)
- Plain CSS with a small design-token layer (`src/index.css`) — no CSS
  framework, so every visual decision is explicit and easy to audit
- No state management library — the only interactive state (active
  category, search term) is lifted to `App.jsx` with `useState`

## Project structure

```
bakehouse/
├── index.html                  # Vite entry HTML, loads Google Fonts
├── public/
│   └── wheat-favicon.svg
└── src/
    ├── main.jsx                 # React root
    ├── App.jsx                  # Page composition + lifted filter/search state
    ├── index.css                # Design tokens, resets, shared utility classes
    ├── assets/
    │   └── icons.jsx             # Hand-drawn SVG icon set (nav, socials, product glyphs)
    ├── data/
    │   └── products.js           # Static mock product data (12 items)
    ├── hooks/
    │   ├── useScrollReveal.js    # IntersectionObserver-based reveal-on-scroll
    │   └── useLockBodyScroll.js  # Locks body scroll while mobile drawer is open
    └── components/
        ├── Navbar/                # Sticky header, search, mobile drawer
        ├── Hero/                  # Banner section with animated signature scene
        ├── SectionHeading/        # Shared eyebrow + title + description block
        ├── CategoryFilter/        # Filter chip group (atomic)
        ├── ProductGrid/           # Filters + renders ProductCard list
        ├── ProductCard/           # Ticket-styled product card (atomic)
        ├── ProductImage/          # Category gradient + glyph placeholder (atomic)
        ├── Badge/                 # Small pill label, e.g. "Bestseller" (atomic)
        ├── StoryPanel/            # Brand story + process steps
        └── Footer/                # Link columns, newsletter mockup, socials
```

Each component folder owns its own `.jsx` and `.css` file, so styles never
leak across components and every piece can be lifted or reused on its own.

## Getting started

Requires Node.js 18+.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

## Deploying

The project is a standard Vite + React app, so it deploys as-is to
[Vercel](https://vercel.com) or [Netlify](https://netlify.com):

- **Build command:** `npm run build`
- **Output directory:** `dist`

No environment variables or backend services are required.

## Notes for reviewers

- Search and category filtering are real interactions (they update state
  and re-render), but they only ever operate on the static array in
  `src/data/products.js` — nothing is fetched, persisted, or sent
  anywhere, in line with the assessment's "UI/UX only" constraint.
- "Add to order" and the cart icon in the nav are intentionally
  non-functional visual affordances (no state change on click) — they
  demonstrate the intended interaction surface without implementing real
  cart logic, per the brief.
