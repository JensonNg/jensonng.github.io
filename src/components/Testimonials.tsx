import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { testimonials, type Testimonial } from "../data/testimonials";
import { SectionHeader } from "./SectionHeader";

function CompanyMark({ t }: { t: Testimonial }) {
  if (t.logo) {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1">
        <img src={t.logo} alt={`${t.company} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xs font-bold text-brand-ink"
    >
      {t.initials}
    </span>
  );
}

/** One testimonial: headline, quote, then who said it. Used on the homepage and on case study pages. */
export function TestimonialCard({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <figure className={`glass m-0 flex flex-col rounded-2xl p-6 md:p-8 ${className}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">{t.relation}</p>
      <h3 className="mb-3 text-lg font-semibold leading-snug md:text-xl">"{t.headline}"</h3>
      <blockquote className="m-0 mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        <p className="m-0">{t.text}</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <CompanyMark t={t} />
        <div className="min-w-0">
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="break-words text-xs text-muted-foreground">
            {t.role} @ {t.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => setCurrent((c) => Math.min(c, maxIndex)), [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  // Swipe/drag support
  const dragRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    const threshold = 50;
    if (diff > threshold) next();
    else if (diff < -threshold) prev();
  };

  const navButton =
    "flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <section aria-labelledby="testimonials-title" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          id="testimonials-title"
          eyebrow="Testimonials"
          title="What people say"
          lead="Managers, clients and teammates from Sweden and Vietnam."
          action={
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/in/soninsthlm"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand-ink"
              >
                <Linkedin className="size-4" /> All on LinkedIn
              </a>
              <button type="button" onClick={prev} disabled={current === 0} aria-label="Previous testimonial" className={navButton}>
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" onClick={next} disabled={current >= maxIndex} aria-label="Next testimonial" className={navButton}>
                <ChevronRight className="size-4" />
              </button>
            </div>
          }
        />

        {/* Cards - swipeable */}
        <div
          ref={dragRef}
          className="cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            className="flex select-none gap-6 transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(calc(-${current} * (${isMobile ? "100%" : "50%"} + ${isMobile ? 24 : 12}px)))` }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} className={`shrink-0 ${isMobile ? "w-full" : "w-[calc(50%-12px)]"}`} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className="flex size-6 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
