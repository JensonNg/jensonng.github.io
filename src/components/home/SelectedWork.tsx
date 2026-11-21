import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/projects";
import { SectionHeader } from "../SectionHeader";

// One project per kind of work, each with a result a recruiter can scan.
const SELECTED = [
  { title: "Bachable.io - Brand & Launch", category: "Brand & launch", result: "Brand, messaging and launch story for a music-tech platform" },
  { title: "Seed Planter - Marketing Lead", category: "Social impact", result: "350K people reached on Facebook" },
  { title: "Hanoi Pride 2019 - Internal Secretary for Communication", category: "PR & events", result: "164K reached, 7,000 parade participants" },
  { title: "RFSL Utbildning - Digital Marketing & Communication", category: "B2B marketing", result: "400 LinkedIn followers in 3 months" },
];

function BrandTile({ project }: { project: Project }) {
  const { brand } = project;
  return (
    <div
      className="relative mx-2 mt-2 aspect-[4/3] overflow-hidden rounded-xl flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${brand.bgFrom}, ${brand.bgTo})` }}
    >
      <div
        aria-hidden="true"
        className="absolute size-24 rounded-full blur-[50px] opacity-40"
        style={{ backgroundColor: brand.color }}
      />
      {/* Client brand colours are content, so the tile keeps them in both themes. */}
      <span
        className="relative flex size-12 md:size-14 items-center justify-center rounded-2xl text-lg md:text-xl font-bold shadow-lg"
        style={{ backgroundColor: brand.color, color: "#000" }}
      >
        {brand.initials}
      </span>
    </div>
  );
}

export function SelectedWork() {
  const items = SELECTED.flatMap(({ title, category, result }) => {
    const project = projects.find((p) => p.title === title);
    return project ? [{ project, category, result }] : [];
  });

  return (
    <section id="work" aria-labelledby="work-title" className="px-4 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          id="work-title"
          eyebrow="Selected work"
          title="Proof, not promises"
          lead="Brand, campaigns and communication for startups, NGOs and B2B teams in Sweden and Vietnam."
          action={
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              All projects <ArrowRight className="size-4" />
            </Link>
          }
        />

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {items.map(({ project, category, result }) => (
            <li key={project.title} className="min-w-0">
              <Link
                to="/projects"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:ring-2 hover:ring-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <BrandTile project={project} />
                <div className="flex flex-1 flex-col gap-1 p-3 md:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-ink">{category}</p>
                  <h3 className="text-sm md:text-base font-semibold leading-snug">{project.brand.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{result}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
