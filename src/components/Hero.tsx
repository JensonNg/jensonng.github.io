import { ArrowDown, Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}

// Video Modal
function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/s7e06VN60JY?rel=0&modestbranding=1&autoplay=1"
          title="Son Nguyen - Marketing Manager"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section id="hero" className="min-h-[85dvh] flex items-center justify-center px-4 pt-24 pb-12 md:pb-16 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating sparkle dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '18%', left: '12%', delay: '0s', size: 'w-1 h-1' },
            { top: '72%', right: '8%', delay: '2s', size: 'w-1.5 h-1.5' },
            { top: '35%', right: '15%', delay: '4s', size: 'w-1 h-1' },
            { top: '60%', left: '20%', delay: '1s', size: 'w-0.5 h-0.5' },
            { top: '85%', left: '45%', delay: '3s', size: 'w-1 h-1' },
          ].map((dot, i) => (
            <div
              key={i}
              className={`absolute ${dot.size} bg-primary/40 rounded-full motion-safe:animate-pulse`}
              style={{
                top: dot.top,
                left: dot.left,
                right: (dot as any).right,
                animationDelay: dot.delay,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          {/* 3-column layout: photo | content | photo */}
          <div className="flex items-center justify-center gap-0 md:gap-4 lg:gap-8">
            {/* Left photo – composed look */}
            <div className="hidden md:block flex-shrink-0 w-[200px] lg:w-[280px] xl:w-[320px] relative">
              <img
                src="/images/son-hero-left.png"
                alt="Son Nguyen"
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_var(--glow)] relative z-10"
              />
              {/* Keyword cloud – bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap justify-center gap-1.5 px-2 pb-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-brand-ink/80 border border-primary/20 backdrop-blur-sm">Storyteller</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/60 border border-border backdrop-blur-sm">Strategist</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-brand-ink/80 border border-primary/20 backdrop-blur-sm">Vietnam 🇻🇳</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/60 border border-border backdrop-blur-sm">Coffee Lover</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-brand-ink/80 border border-primary/20 backdrop-blur-sm">UX Writer</span>
              </div>
              {/* Bottom gradient mask */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-[11]" />
            </div>

            {/* Centered content */}
            <div className="max-w-2xl text-center space-y-7 flex-shrink min-w-0">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
                  Xin chào, I'm Son Nguyen
                </p>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.1]">
                  I turn complex B2B products into <span className="text-brand-ink">clear stories</span>.
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                  Marketing Manager in Stockholm with eight years across brand, content, campaigns and PR
                  in Sweden and Vietnam. I create content that doesn't just convert, it connects.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow-strong transition-[filter] hover:brightness-105"
                >
                  See my work
                </Link>
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Play className="size-3.5 ml-0.5" fill="currentColor" />
                  </span>
                  Get to know me
                </button>
              </div>

              {/* Phones show the photos after the call to action, so the promise comes first. */}
              <div className="flex md:hidden items-end justify-center gap-4 pt-2">
                <div className="relative w-[140px]">
                  <img
                    src="/images/son-hero-left.png"
                    alt="Son Nguyen"
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_var(--glow)] relative z-10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent z-[11]" />
                </div>
                <div className="relative w-[140px]">
                  <img
                    src="/images/son-hero-right.png"
                    alt="Son Nguyen laughing"
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_var(--glow)] relative z-10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent z-[11]" />
                </div>
              </div>
            </div>

            {/* Right photo – laughing */}
            <div className="hidden md:block flex-shrink-0 w-[200px] lg:w-[280px] xl:w-[320px] relative">
              <img
                src="/images/son-hero-right.png"
                alt="Son Nguyen laughing"
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_var(--glow)] relative z-10"
              />
              {/* Keyword cloud – bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap justify-center gap-1.5 px-2 pb-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/60 border border-border backdrop-blur-sm">Food Blogger</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-brand-ink/80 border border-primary/20 backdrop-blur-sm">Sweden 🇸🇪</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/60 border border-border backdrop-blur-sm">iPhonegrapher</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-brand-ink/80 border border-primary/20 backdrop-blur-sm">Creative</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/60 border border-border backdrop-blur-sm">AI Enthusiast</span>
              </div>
              {/* Bottom gradient mask */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-[11]" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => scrollToSection('work')}
              className="hidden md:inline-flex p-2 hover:bg-muted rounded-full transition-colors motion-safe:animate-bounce"
              aria-label="Scroll to selected work"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
