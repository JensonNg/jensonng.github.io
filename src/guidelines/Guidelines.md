# Guidelines

The design system for this site is documented in `DESIGN.md` at the repository root. Read it before generating or editing any UI.

The rules that matter most:

- Use token classes (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `text-brand-ink`, `bg-primary`, `border-border`). Never hard-code hex colours, `text-white`, `bg-black` or `border-white/10`.
- Solar Gold (`bg-primary`) is the only accent. Gold-coloured text always uses `text-brand-ink`.
- Cinzel (`font-display`) for h1 and h2, Inter for everything else. Minimum text size 12px.
- Every component must work in both light and dark mode.
- On phones: stack buttons, keep "Let's talk" visible in the header, use 2-column grids for visual work.
- Use flexbox and grid for layout; avoid absolute positioning unless it is decorative.
