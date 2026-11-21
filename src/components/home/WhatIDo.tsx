import { ArrowRight, MessageSquare, PenTool, TrendingUp, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader";

const SERVICES = [
  { Icon: TrendingUp, title: "Growth marketing strategy", text: "Audience research, campaign planning and reporting that ties creative work to results." },
  { Icon: Video, title: "Content and video", text: "Short-form video, social assets and visual storytelling." },
  { Icon: PenTool, title: "UX writing and copy", text: "Product copy and microcopy that keeps the brand voice consistent." },
  { Icon: MessageSquare, title: "Communications and PR", text: "Press, stakeholder and internal communication that builds trust." },
];

export function WhatIDo() {
  return (
    <section aria-labelledby="services-title" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          id="services-title"
          eyebrow="How I can help"
          title="Strategy, story and the work in between"
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {SERVICES.map(({ Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 md:p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-brand-ink">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-ink hover:underline underline-offset-4">
            Service packages <ArrowRight className="size-4" />
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 text-brand-ink hover:underline underline-offset-4">
            About me <ArrowRight className="size-4" />
          </Link>
          <Link to="/about#cv" className="inline-flex items-center gap-2 text-brand-ink hover:underline underline-offset-4">
            CV and certificates <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
