const STATS = [
  { value: "8", label: "years in marketing" },
  { value: "4.8M", label: "paid impressions" },
  { value: "30+", label: "SQLs from an AI launch" },
  { value: "3", label: "languages" },
];

// Best-known names first, then current work.
const PLACES = ["H&M", "Epidemic Sound", "CARE International", "Mitigram", "Bachable.io", "RFSL Utbildning"];

export function ProofStrip() {
  return (
    <section aria-label="Track record" className="px-4 pb-8">
      <div className="container mx-auto max-w-5xl">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-card px-5 py-5 md:py-6 flex flex-col gap-1">
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-3xl md:text-4xl text-brand-ink leading-none tabular-nums">{value}</dd>
              <dd className="text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="text-hint">Worked with</span>
          {PLACES.map((place, i) => (
            <span key={place} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-border" />}
              <span className="font-medium text-foreground/80">{place}</span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
