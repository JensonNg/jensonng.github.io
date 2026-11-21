import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactCTA() {
  return (
    <section className="px-4 py-16 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 px-6 py-14 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-secondary/25 blur-[80px]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Let's work together</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-[1.15]">
              Have a complex product that needs a clear story?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Tell me what you are building and where it needs to go.
            </p>
            <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Let's talk <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://linkedin.com/in/soninsthlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </div>
            <a
              href="mailto:sonngoc.nguyen@hyperisland.se"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-brand-ink hover:underline"
            >
              or email sonngoc.nguyen@hyperisland.se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
