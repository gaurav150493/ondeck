# Project conventions for Claude — `ondeck`

Keep this file terse. It is loaded every session.

## 1. What this repo is

The **Next.js 16 App Router** marketing site for OnDeck Global, an iGaming platform vendor.
Static, no backend, no database, no auth. Built from the Figma file `OnDeck Global`
(page `Home page`): `Design 1` is the desktop reference, `Frame 24` the mobile one.

Design notes live in `design/desktop-structure.md` and `design/mobile-structure.md`.

## 2. Stack

Next **16.3** · React **19** · TypeScript · **SCSS modules** (no Tailwind, no component kit,
no state library, no icon package, no animation library yet).
Deployed with **PM2** (`ecosystem.config.js`, `npm start`), not Vercel.

## 3. Layout

```
src/app/                    routes, metadata, robots, sitemap
src/common/                 brand-level reusables: Button, SectionHeading, icons, JsonLd
src/components/<section>/   one folder per page section
src/config/                 site.config.ts
src/shared/                 cross-cutting types
src/styles/                 globals.scss, container.module.scss, variables/, viewPortMixins.scss
```

Each section folder holds `Component.tsx`, `Component.module.scss`,
`<name>.constants.ts` and `<name>.types.ts`. Constants files that hold JSX (icons) are `.tsx`.

# 4. Rules

Append-only numbered list. Add a bullet with a short why when a new rule is agreed.

1. **No comments.** The code says what it does. The single exception: when one file serves
   more than one module, mark the boundaries with `module start` / `module end` and nothing
   else. This is a hard requirement — the client has its own tech team and the code must not
   read as machine-written.
2. **Sections are components, content is data.** Every repeating block — cards, stats, rows,
   logos, footer columns — is a typed array in `<name>.constants.ts` that the component maps
   over. Never hand-write repeated markup.
3. **Shared before specific.** A button, heading, or icon goes in `src/common/` and is used
   from there. Check it before building anything new.
4. **Server Components by default.** `"use client"` only for state, effects or an event
   handler. Nothing on this site needs it yet.
5. **No colour literal outside `src/styles/variables/_colors.scss`.** Reach every colour
   through a variable. If a shade has no token, add the token.
6. **Mobile first.** Base styles are the mobile design; `min-width` mixins from
   `viewPortMixins.scss` add the wider layouts. Never write a `max-width` query.
7. **Never invent copy.** If the design shows lorem ipsum, ship lorem ipsum. If a section has
   no heading, it has no heading. Content is the client's to supply.
8. **Respect `prefers-reduced-motion`** on anything that animates.
9. **The capabilities diagram keeps text, connector and image as separate elements**, each
   carrying `data-node` / `data-line`, so the hover animation can highlight a label and its
   line together without restructuring.
10. **Measure from the API, not from screenshots.** `GET /v1/files/:key` carries exact
    geometry, colour and typography for every node; `/v1/files/:key/images` gives the source
    image fills and `/v1/images` renders any node. Estimating from screenshots is what made
    the first two passes look wrong.
11. **Every page ships real HTML.** Static rendering, `generateMetadata` per route, semantic
    landmarks, `sitemap.ts` and `robots.ts` kept in step with the route list. SEO is a stated
    client requirement, not a nice-to-have.

## 5. After every task

Run all three: `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## 6. Known gaps

- Assets are **real Figma exports**. Raster art in `public/images/**` (image fills, plus the
  hero and capabilities art rendered at @2x); vectors in `public/icons/**`. The icon module
  `src/common/icons/index.tsx` is **generated** from those SVGs with `currentColor` swapped in
  — regenerate it rather than hand-editing.
- Desktop geometry and the full type scale come from the **REST API**, not screenshots.
  Section gaps are a uniform **60px**; container is 1160 with 60px insets.
- **Mobile is unmeasured** beyond container width (447) and inset (17).
- The font is **Inter**, confirmed in Figma.
- **Nav and footer link to routes that do not exist yet** (`/platform/*`, `/products/*`, …).
