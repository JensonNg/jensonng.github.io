import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";
import { RichText } from "./RichText";

/** The cover image, or a tile in the case study's colours when there is none yet. */
export function CaseStudyCover({ study, className = "", eager = false }: { study: CaseStudy; className?: string; eager?: boolean }) {
  if (study.cover) {
    return (
      <div className={`overflow-hidden bg-surface-2 ${className}`}>
        <img
          src={study.cover}
          alt={study.coverAlt ?? ""}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  const { brand } = study;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${brand.bgFrom}, ${brand.bgTo})` }}
    >
      <div aria-hidden="true" className="absolute size-32 rounded-full opacity-40 blur-[60px]" style={{ backgroundColor: brand.color }} />
      {/* Client colours are content, so the tile keeps them in both themes. */}
      <span
        aria-hidden="true"
        className="relative flex size-14 items-center justify-center rounded-2xl text-xl font-bold shadow-lg"
        style={{ backgroundColor: brand.color, color: "#000" }}
      >
        {brand.initials}
      </span>
    </div>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <CaseStudyCover study={study} className="mx-2 mt-2 aspect-[1200/630] rounded-xl" />
      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-ink">
          {study.client} · {study.category}
          {study.status === "draft" && <span className="ml-2 text-destructive">Draft</span>}
        </p>
        <h3 className="text-lg font-semibold leading-snug md:text-xl">{study.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          <RichText text={study.cardResult} />
        </p>
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-ink">
          Read the case study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </span>
      </div>
    </Link>
  );
}
