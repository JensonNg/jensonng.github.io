# Solar Amber 2.0 Design System

The rules for how jensonng.github.io looks. One loud colour (Solar Gold), warm neutrals, two typefaces, two real themes.
Tokens live in `src/styles/globals.css`. Components use token classes (`bg-background`, `text-brand-ink`), never hex values.

## Colour Tokens

### Surfaces and text
| Token | Class | Dark | Light | Usage |
|-------|-------|------|-------|-------|
| `--background` | `bg-background` | `#111111` | `#F5F5F4` | Page surface |
| `--card` | `bg-card` | `#1A1817` | `#FFFFFF` | Cards, panels, base of glass |
| `--surface-2` | `bg-surface-2` | `#24211F` | `#EFEDE9` | Raised areas inside cards, image placeholders |
| `--border` | `border-border` | `#2E2A27` | `#E2DED8` | Dividers, card edges |
| `--foreground` | `text-foreground` | `#F5F5F4` | `#1C1917` | Headings and body text |
| `--muted-foreground` | `text-muted-foreground` | `#A8A29E` | `#57534E` | Supporting text |
| `--hint` | `text-hint` | `#78716C` | `#6B655F` | Placeholders, captions, fine print |

### Brand
| Token | Class | Dark | Light | Usage |
|-------|-------|------|-------|-------|
| `--primary` | `bg-primary`, `border-primary` | `#F2C94C` | `#F2C94C` | Solar Gold. Fills: primary buttons, logo, focus ring, active states. Sparingly. |
| `--primary-foreground` | `text-primary-foreground` | `#1C1917` | `#1C1917` | Text and icons on a gold fill |
| `--brand-ink` | `text-brand-ink` | `#F2C94C` | `#8A6400` | Gold-coloured text: eyebrows, links, highlighted words, icons |
| `--secondary` | `from-secondary` | `#F2994A` | `#F2994A` | Amber. Only as the start of the amber-to-gold gradient |
| `--destructive` | `text-destructive` | `#EB5757` | `#B42318` | Errors only |

**Gold is a fill, or text on dark. Never text on light.** Solar Gold on the light background is 1.5:1 and fails WCAG; use `text-brand-ink` for any gold-coloured text so it switches to Gold Ink (4.9:1) in light mode.

### Derived values
Tints are computed from `--primary`, not typed by hand:
- Soft tint: `bg-primary/10` (chips, icon tiles), `border-primary/30` (outlined accents)
- Hover on a gold fill: `hover:bg-primary-hover`
- Glow: `shadow-glow` (cards on hover), `shadow-glow-strong` (primary button)

### Contrast (WCAG 2.1)
| Pair | Dark | Light |
|------|------|-------|
| Text on background | 17.3 | 16.0 |
| Muted text on background | 7.5 | 7.0 |
| Brand ink on background | 11.9 | 4.9 |
| Text on gold fill | 11.0 | 11.0 |
| Hint on background | 3.9 (large text only) | 5.3 |

## Typography
| Role | Font | Size (mobile → desktop) | Weight |
|------|------|------|--------|
| Display (h1) | Cinzel | 40 → 72px | 500 |
| Section heading (h2) | Cinzel | 30 → 44px | 500 |
| Card heading (h3-h4) | Inter | 18 → 20px | 600 |
| Body | Inter | 16 → 18px, line-height 1.6 | 400 |
| Small | Inter | 14px | 400 |
| Label / eyebrow | Inter | 12px, uppercase, 0.14em tracking | 600 |

- `font-display` = Cinzel with Cormorant SC as fallback. Cinzel has no Vietnamese glyphs, so headings with Vietnamese text (Sơn, Hội An) fall back to Cormorant SC automatically.
- `font-sans` = Inter for everything else. No other families.
- Fonts are bundled with the site through `@fontsource` packages (imported in `src/main.tsx`). Don't add Google Fonts links: they send visitor data to Google, which the Privacy page promises not to do.
- Minimum text size is **12px**. No `text-[10px]` or smaller.
- Headings use regular-to-medium weight. Elegance comes from size, not bold.

## Spacing and Shape
- Every page starts with `<main className="pt-24">` so its content clears the fixed header, which is transparent at the top of the page.
- Container: `max-w-7xl`, side padding 16px (mobile) / 24px (desktop).
- Section rhythm: `py-16 md:py-24`.
- Radius: `rounded-full` for buttons and chips, `rounded-2xl` for cards, `rounded-3xl` for large bands and media frames, `rounded-xl` for images inside cards (nested 8-12px inset).

## Component Patterns
- **Section header:** `SectionHeader` component. Eyebrow (brand ink, 12px caps), Cinzel h2, one muted lead sentence. Use it for every section.
- **Buttons:** Primary = solid gold fill with dark label, `rounded-full`, min height 44px. One primary per section. Secondary = outline (`border-border`, transparent). Tertiary = brand-ink text link. The amber-to-gold gradient is reserved for the logo and the hero's main button.
- **Cards:** `bg-card border border-border rounded-2xl`. Hover and keyboard focus = gold ring (`hover:ring-2 ring-primary`), not scaling.
- **Work cards:** image inset 8px with `rounded-xl`, then eyebrow, title, one-line result. 2 columns on phones, 4 on desktop.
- **Chips:** 12px, `rounded-full`. Gold variant = `bg-primary/10 text-brand-ink border-primary/30`; neutral = `bg-card text-muted-foreground border-border`.
- **FAQ:** native `<details>` elements, no JavaScript.
- **Glass:** `.glass` (default panel), `.glass-strong` (header, overlays), `.glass-subtle` (background chips). Values come from the `--glass-*` tokens and change per theme.
- **Closing CTA band:** `rounded-3xl`, gold-tinted background (`bg-primary/5`), gold border at 30%, one primary action.

## Themes
- Light and dark are both first-class. The `dark` class on `<html>` switches the token values.
- First visit follows the visitor's system setting; the header toggle saves their choice in `localStorage`.
- Never style a component for one theme only. If something needs a different colour per theme, add or use a token.

## Mobile
- Design phones as their own layout: type steps down (`text-4xl sm:text-5xl md:text-7xl`), buttons stack (`flex-col sm:flex-row`) at full width.
- The mobile header shows the logo, a Blog link, "Let's talk", the theme toggle and the menu. Only the remaining pages go in the menu.
- Tap targets are at least 44px.
- Use `min-h-dvh` / `h-dvh`, not `h-screen`, for full-height sections.
- No hover-only feedback. Anything shown on hover must also show on focus.
- Wrap all animation in `motion-safe:` or add `motion-reduce:` overrides.

## Voice in the UI
- Buttons say what happens: "See my work", "Let's talk", "Download CV".
- Use a plain hyphen (-) for dashes, ranges and asides: "2019 - 2020", "Seed Planter - Marketing Lead". Never em (—) or en (–) dashes.
- The title is "Marketing Manager" everywhere: site, lockups, logo files and the brand kit.
- Lead with value, then the person: the eyebrow says hello ("Xin chào, I'm Son"), the headline says what you do for others.
