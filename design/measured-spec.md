# Measured spec — desktop (`Design 1`, 1280 wide)

Read from Figma's Properties panel (exact values, not sampled).

## Palette

Solids: `#FFFFFF` · `#000000` · `#D2D2D2` (muted text) · `#B57A27` (gold) ·
`#00B9FF` (cyan) · `#329EFB` (blue) · `#164983` (deep blue) · `#000000` @ 70%

Gradients:
- heading gold — `#FFEC98 → #B57A27`
- button gold — `#F7E98A → #FDBC39 → #CD993E`
- border gold — `#F7EA8B → #E6B154`
- gold alt — `#FCD571 → #C99339`, `#B57A27 → #4F3511`
- bronze — `#533C22 → #BFA36E → #533C22`
- blue — `#2882E9 → #164983`, `#57AFFF → #003BFF`, `#5CB4FF → #005AFF`
- blue radial — `#0058FF → #003599`

## Type — Inter throughout

| Role | Weight | Size | Line height | Tracking |
|---|---|---|---|---|
| H1 line 1 `Build. Launch.` | 600 | 55px | 60px | 0 |
| H1 line 2 `Scale. Win.` | 600 | 60px | 100% | 0 |
| Eyebrow | 600 | 16px | 100% | 5% |
| Section H2 | 400 | 28px | 100% | 0 |
| Body / tagline | 400 | 16px | 28px | 0 |
| Button label | 400 | 16px | 100% | 0 |

## Layout

Container **1160px**, inset **60px** each side of the 1280 frame.

### Section 1 — hero, 1280 × 673
Full-bleed **background image** with content overlaid — not a two-column split.
1px gradient border (`#F7EA8B → #E6B154`).
- eyebrow Top 208, Left 60
- H1 Top 239, Left 57 (212 × 120)
- `Scale. Win.` Top 365, Left 57 (321 × 73)
- tagline Top 437, Left 59 (240 × 56)

### Section 2 — iGaming products, 1162 × 498
- H2 Top 766, Left 59 (307 × 68)
- card row Top 873, Left 61 — fixed 1160 wide, hug 358 high, **gap 11px**
- card **184 × 358**, radius **8px**, border **0.5px `#B57A27`**
- image fills 184 × 223, scale **crop**
- text frame 183 × 135, padding **15px**, gap **10px**

### Section 11 — core capabilities, 1160 × 347.9 (Top 1291)
One panel, render as background. Copy left, nodes flanking the platform graphic.
- `heading` 282 × 197.17, Top 1355, Left 60, radius 8
- `list` 916.57 × 347.9, Top 1291, Left 303.43 — overlaps behind the copy
- H2 breaks explicitly: `Engineered for scale.` / `Build for growth.`

### Section 4 — iGaming services, 1160 × 168
Eyebrow `#00B9FF`, no H2. Five items in one row, each **icon left / text right**,
ending in `Learn More >`.

### Section 5 — one modern stack, 1156 × 422
H2 breaks `One platform. Two ways` / `to move forward.`
Two cards, each **50% image / 50% copy**, title at the top of the copy column.

### Section 9 — closing CTA, 1280 × 242
Full-bleed band with a background image. Copy left, button centre, artwork right.

### Footer
Left block is logo → social icons → copyright, stacked. Link columns to the right.

### Layer map (`Design 1 > Frame 23`)
Section 1 hero · 2 products · 11 capabilities · 4 services · 5 stack · 6 facts ·
7 providers · 8 news · 9 CTA · Footer. Sections 3 and 10 are hidden alternates.

### Still on estimates
1160 × 156 (facts) · 1166 × 307 (providers) · 1163 × 375 (news) — section boxes only,
no per-element measurements yet.

## Still to measure
- Mobile (`Frame 24`) type scale and card sizes — only container width (447) and
  inset (17) are confirmed so far.
- Per-section vertical padding, derived from each section's Top.
- Button box height and padding.

## Logo — three lockups, not one

The file carries the same lockup at three sizes with different internal spacing.
Using one everywhere is wrong; the header mark is noticeably wider-set than the footer's.

| Placement | Box | Node | File |
|---|---|---|---|
| Desktop header | 227 × 46 | `1:1269` (Brand Name) | `logo-header.png` |
| Mobile header | 190 × 39 | `60:1615` | same file, CSS width 190 |
| Footer | 149 × 42 box / 149 × 46 render | `10:1546` | `logo-footer.png` |

The footer box is 42 but its render bounds are 46 — the extra 4px is the glow, so the
exported asset is 46 tall and must be rendered at 46, not squashed to the box height.
