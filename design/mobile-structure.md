# OnDeck Global — Mobile (`Frame 24`), measured

Frame **480 × 6324**. Content column **447**, left inset **17**.
Section gaps are a uniform **57px** (desktop is 60).

Values below are from the Figma REST API, not screenshots.

## Section order and boxes

| Section | Box | Top |
|---|---|---|
| 1 hero | 911.3 × 691 (art bleeds left) | 0 |
| 2 products | 447 × 789 | 748 |
| 3 capabilities | 1049 × 598 (bleeds) | 1594 |
| 4 services | 448 × 577 | 2249 |
| 5 stack | 447 × 870.1 | 2883 |
| 6 facts | 447 × 177 | 3810 |
| 7 providers | 454 × 253 | 4044 |
| 8 news | 446 × 969 | 4354 |
| 9 CTA | 447 × 341 | 5380 |
| footer | 819 × 550 | 5778 |

## Type — mobile vs desktop

| Role | Mobile | Desktop |
|---|---|---|
| Eyebrow | 400 / 12 / 14.5 | 400 / 16 / 19.36 |
| Hero eyebrow | 400 / 12 / 14.5 / ls .6 | 600 / 16 / ls .8 |
| H1 line 1 | 600 / 36 / 60 | 600 / 55 / 60 |
| H1 line 2 | 600 / 36 / 43.6 | 600 / 60 / 72.6 |
| Hero tagline | 400 / 16 / 19.4 | 400 / 16 / 28 |
| Section H2 | 400 / 22 / 26.6 | 400 / 28 / 33.89 |
| Product title | 600 / 16 / 19.4 | same |
| Product copy | 400 / 14 / 20 | 400 / 12 / 20 |
| Capability title | 600 / 14 / 16.9 | 600 / 13 / 16 |
| Service title | 600 / 16 / 19.4 | 600 / 13 / 15.73 |
| Service copy | 400 / 14 / 16.9 | 400 / 10 / 15 |
| Stack bullets | 400 / 14 / 20 | 400 / 12 / 20 |
| Facts value | 400 / 36 / 43.6 | same |
| Facts label | 600 / 14 / 16.9 | 600 / 13 / 15.73 |
| News tag | 600 / 16 / 19.4 | 600 / 10 / 12.1 |
| News title | 400 / 14 / 20 | 400 / 12 / 20 |
| CTA heading | 400 / 24 / 29 | 400 / 32 / 38.73 |
| CTA subtitle | 400 / 14 / 16.9 | 400 / 16 / 19.36 |
| Button label | 400 / 12 / 14.5 | 400 / 14 / 16.94 |
| Footer col head | 400 / 16 / 19.4 | 400 / 12 / 14.52 |

## Layout differences that are not just type

- **Hero**: art is a **461px block above** the copy, not a background. Desktop overlays.
- **CTA**: same — image block (442 × 219) above the copy. Desktop overlays.
- **Products**: 2 columns × 3 rows, 22px gaps.
- **Capabilities**: nodes become a vertical list over the faded render.
- **Services**: stacked rows, icon left.
- **Stack**: stays **image-left (208) / copy-right (238)** — it does not stack.
- **Facts**: a **horizontal carousel** — five 150px cards, 5px gap, running past the
  frame, with an `auto scroll` group and three dots. Built as a native scroll-snap rail.
- **News**: single column, and each card regains a `Learn More >` that desktop omits.
- **Footer**: link columns are 124px wide with 35px gaps, wrapping 3 then 2.

## Open
- The facts carousel's **dots and auto-scroll** are animation behaviour — the dots are not
  built, because non-functional indicators are worse than none. Needs a designer decision
  alongside the rest of the animation work.
- Mobile header still has no navigation in the design.
