import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Where are you based?",
    a: "In Stockholm, Sweden. I have worked with teams in Sweden and Vietnam, on site and remotely.",
  },
  {
    q: "Which languages do you work in?",
    a: "Vietnamese (native), English (fluent) and Swedish (conversational).",
  },
  {
    q: "What kind of work do you take on?",
    a: "Growth marketing strategy, content and video, UX writing and copy, and communications and PR. I am strongest where a complex product needs a clear story, especially in B2B and sustainability.",
  },
  {
    q: "How does a project start?",
    a: "With a conversation about your goals, audience and challenges. From there I shape a strategy that combines data with creative ideas, then deliver and measure the results.",
  },
  {
    q: "Where can I see your CV?",
    a: "On the About page, under CV & Certificates, where you can preview and download it.",
  },
];

// Native <details> keeps the answers keyboard- and screen-reader-friendly without JavaScript.
export function WorkingWithMe() {
  return (
    <section aria-labelledby="faq-title" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">Working with me</p>
            <h2 id="faq-title" className="text-3xl md:text-5xl font-medium leading-[1.1]">
              Questions people ask first
            </h2>
          </div>
          <div className="min-w-0 space-y-3">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-border">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-medium transition-colors hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDown
                    className="size-5 shrink-0 text-brand-ink transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm md:text-base leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
