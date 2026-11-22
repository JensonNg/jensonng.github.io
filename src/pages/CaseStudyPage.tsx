import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies, getCaseStudy, type CaseStudy } from "../data/caseStudies";
import { blogPosts } from "../data/blogPosts";
import { getTestimonials } from "../data/testimonials";
import { RichText } from "../components/RichText";
import { TestimonialCard } from "../components/Testimonials";
import { PostCard, SectionHeader as NumberedHeader } from "../components/blog/BlogParts";
import { CaseStudyCover } from "../components/CaseStudyCard";
import { ContactCTA } from "../components/ContactCTA";

function Section({ number, label, id, children }: { number: string; label: string; id: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mx-auto flex max-w-[760px] flex-col gap-6 px-4 pt-14 md:pt-16">
      <NumberedHeader number={number} label={label} id={id} />
      {children}
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text, i) => (
        <p key={i} className="m-0 text-[17px] leading-[30px] text-muted-foreground md:text-lg md:leading-[31px]">
          <RichText text={text} />
        </p>
      ))}
    </>
  );
}

function nextCaseStudy(current: CaseStudy): CaseStudy | undefined {
  if (caseStudies.length < 2) return undefined;
  const i = caseStudies.findIndex((c) => c.slug === current.slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

export function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <Navigate to="/projects" replace />;

  const quotes = getTestimonials(study.testimonials);
  const related = study.relatedPosts.flatMap((s) => blogPosts.find((p) => p.slug === s) ?? []);
  const numberOf = (s: string) => String(blogPosts.findIndex((p) => p.slug === s) + 1).padStart(2, "0");
  const next = nextCaseStudy(study);

  // Sections are numbered in order, skipping any that are empty.
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  return (
    <main className="pt-24">
      <article>
        {study.status === "draft" && (
          <div role="note" className="container mx-auto max-w-6xl px-4 pt-6">
            <p className="rounded-2xl border border-dashed border-destructive bg-destructive/10 px-5 py-4 text-sm text-destructive">
              <strong>Draft.</strong> Only visible in <code>npm run dev</code>. Fill in the red notes, then move it to the{" "}
              <code>published</code> list in <code>src/data/caseStudies.ts</code>.
            </p>
          </div>
        )}

        {/* Head */}
        <header className="container mx-auto max-w-6xl px-4 pt-10 md:pt-14">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-ink"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
          <div className="mt-6 max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
              {study.client} · {study.category}
            </p>
            <h1 className="text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl">{study.title}</h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              <RichText text={study.summary} />
            </p>
          </div>
        </header>

        {/* Cover */}
        <div className="container mx-auto mt-10 max-w-6xl px-4">
          <CaseStudyCover study={study} className="aspect-[1200/630] rounded-3xl border border-border" eager />
        </div>

        {/* At a glance + results */}
        <div className="container mx-auto mt-8 grid max-w-6xl gap-4 px-4 lg:grid-cols-[1fr_auto]">
          <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 md:grid-cols-3 md:p-8">
            {study.facts.map((fact) => (
              <div key={fact.label} className="flex min-w-0 flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">{fact.label}</dt>
                <dd className="m-0 break-words text-[15px] leading-6 text-foreground/80">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-ink underline decoration-primary/40 underline-offset-4"
                    >
                      {fact.value} <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : (
                    <RichText text={fact.value} />
                  )}
                </dd>
              </div>
            ))}
          </dl>
          {study.metrics.length > 0 && (
            <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 lg:w-[360px] lg:grid-cols-1">
              {study.metrics.map((m) => (
                <li
                  key={m.label}
                  className="flex flex-col justify-center gap-1 rounded-2xl border border-primary/30 bg-primary/5 p-6"
                >
                  <span className="text-4xl font-medium text-brand-ink md:text-5xl">{m.value}</span>
                  <span className="text-sm leading-snug text-muted-foreground">{m.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Body */}
        <Section number={num()} label="The challenge" id="challenge">
          <Paragraphs items={study.challenge} />
        </Section>

        <Section number={num()} label="The approach" id="approach">
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {study.approach.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="m-0 mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Step {i + 1}</p>
                <h3 className="m-0 mb-3 text-xl font-semibold leading-snug">{step.title}</h3>
                <p className="m-0 text-base leading-[28px] text-muted-foreground">
                  <RichText text={step.text} />
                </p>
                {step.points && (
                  <ul className="m-0 mt-4 flex flex-col gap-2 pl-5 text-base leading-[26px] text-muted-foreground marker:text-brand-ink">
                    {step.points.map((point) => (
                      <li key={point}>
                        <RichText text={point} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {study.gallery && study.gallery.length > 0 && (
          <div className="container mx-auto mt-14 grid max-w-6xl gap-4 px-4 md:grid-cols-2">
            {study.gallery.map((img) => (
              <figure key={img.src} className={`m-0 ${img.wide ? "md:col-span-2" : ""}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-2xl border border-border bg-white" />
                {img.caption && <figcaption className="pt-3 text-xs text-muted-foreground">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <Section number={num()} label="The results" id="results">
          <Paragraphs items={study.results} />
          {study.link &&
            (study.link.href.startsWith("/") ? (
              <Link
                to={study.link.href}
                className="inline-flex min-h-12 items-center gap-2 self-start rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {study.link.label} <ArrowRight className="size-4" />
              </Link>
            ) : (
              <a
                href={study.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 self-start rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {study.link.label} <ArrowUpRight className="size-4" />
              </a>
            ))}
        </Section>

        {study.learnings.length > 0 && (
          <Section number={num()} label="What I learned" id="learnings">
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {study.learnings.map((text) => (
                <li key={text} className="rounded-2xl border border-border bg-card p-5 text-base leading-[27px] text-muted-foreground md:px-8 md:py-6">
                  <RichText text={text} />
                </li>
              ))}
            </ul>
          </Section>
        )}

        {study.credits && (
          <div className="mx-auto max-w-[760px] px-4 pt-10">
            <p className="m-0 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground/80">Credits.</span> <RichText text={study.credits} />
            </p>
          </div>
        )}
      </article>

      {/* Testimonials */}
      {quotes.length > 0 && (
        <section aria-labelledby="working-with-me" className="container mx-auto max-w-6xl px-4 pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Working with me</p>
          <h2 id="working-with-me" className="mt-3 mb-8 text-3xl font-medium leading-[1.1] md:text-4xl">
            What colleagues and clients say
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {quotes.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </section>
      )}

      {/* Related reading */}
      {related.length > 0 && (
        <section aria-labelledby="related-reading" className="container mx-auto max-w-6xl px-4 pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Related reading</p>
          <h2 id="related-reading" className="mt-3 mb-8 text-3xl font-medium leading-[1.1] md:text-4xl">
            More on how I think about this
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} number={numberOf(p.slug)} />
            ))}
          </div>
        </section>
      )}

      {/* Next case study */}
      {next && (
        <section aria-label="Next case study" className="container mx-auto max-w-6xl px-4 pt-20">
          <Link
            to={`/work/${next.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 transition-shadow hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:flex-row md:items-center md:justify-between md:p-8"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Next case study</span>
              <span className="mt-2 block text-xl font-semibold leading-snug md:text-2xl">{next.title}</span>
            </span>
            <ArrowRight className="size-6 shrink-0 text-brand-ink transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </section>
      )}

      <ContactCTA />
    </main>
  );
}
