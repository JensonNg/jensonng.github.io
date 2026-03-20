import { Button } from "./ui/button";
import { Instagram, Linkedin, Mail, ArrowDown, Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}

// Animated Role Text – large, bold, accent colored
function AnimatedRoleText() {
  const roles = [
    "Growth Marketing Strategist",
    "Content Creator & Video Editor",
    "UX Writing Expert",
    "Communications Strategist",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[2.6em] overflow-hidden relative">
      <span
        className={`
          block bg-gradient-to-r from-[#f2994a] to-[#f2c94c] bg-clip-text text-transparent
          transition-all duration-400 ease-out
          ${isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
        `}
      >
        {roles[currentIndex]}
      </span>
    </div>
  );
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
          src="https://www.youtube.com/embed/s7e06VN60JY?rel=0&modestbranding=1&autoplay=1"
          title="Son Nguyen - Growth Marketing Strategist"
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
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
              className={`absolute ${dot.size} bg-primary/40 rounded-full animate-pulse`}
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
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(242,201,76,0.15)] relative z-10"
              />
              {/* Keyword cloud – bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap justify-center gap-1.5 px-2 pb-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary/80 border border-primary/20 backdrop-blur-sm">Storyteller</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm">Strategist</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary/80 border border-primary/20 backdrop-blur-sm">Vietnam 🇻🇳</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm">Coffee Lover</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary/80 border border-primary/20 backdrop-blur-sm">UX Writer</span>
              </div>
              {/* Bottom gradient mask */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-[11]" />
            </div>

            {/* Centered content */}
            <div className="max-w-2xl text-center space-y-8 flex-shrink">
              {/* Greeting + Name */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg tracking-wide">Xin Chào!</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]">
                  Hi, I'm <span className="text-primary">Son Nguyen</span>
                </h1>
              </div>

              {/* Animated Role */}
              <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                <AnimatedRoleText />
              </div>

              {/* Tagline */}
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                I create content that doesn't just convert, it connects.
                Where <span className="text-primary font-medium">growth marketing meets sustainable impact</span>.
              </p>

              {/* Mobile photos – show below tagline on small screens */}
              <div className="flex md:hidden items-end justify-center gap-4 pt-2">
                <div className="relative w-[140px]">
                  <img
                    src="/images/son-hero-left.png"
                    alt="Son Nguyen"
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(242,201,76,0.15)] relative z-10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-[11]" />
                </div>
                <div className="relative w-[140px]">
                  <img
                    src="/images/son-hero-right.png"
                    alt="Son Nguyen laughing"
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(242,201,76,0.15)] relative z-10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-[11]" />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 hover:border-primary/60 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#f2994a] to-[#f2c94c] shadow-[0_0_20px_rgba(242,201,76,0.4)] group-hover:shadow-[0_0_30px_rgba(242,201,76,0.6)] transition-all duration-300">
                    <Play className="w-4 h-4 text-black ml-0.5" fill="black" />
                  </span>
                  <span className="text-sm font-medium">Get to know me</span>
                </button>

                <Link to="/projects">
                  <Button
                    className="bg-gradient-to-r from-[#f2994a] to-[#f2c94c] hover:from-[#e0893e] hover:to-[#e0b93e] text-black font-semibold shadow-[0_0_15px_rgba(242,201,76,0.3)] px-8"
                  >
                    View My Work
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/soninsthlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-white/10 rounded-full hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sonngoc.nguyen@hyperisland.se"
                  className="p-2.5 border border-white/10 rounded-full hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/foodstuckers.sthlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-white/10 rounded-full hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  title="Instagram @foodstuckers.sthlm"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right photo – laughing */}
            <div className="hidden md:block flex-shrink-0 w-[200px] lg:w-[280px] xl:w-[320px] relative">
              <img
                src="/images/son-hero-right.png"
                alt="Son Nguyen laughing"
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(242,201,76,0.15)] relative z-10"
              />
              {/* Keyword cloud – bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap justify-center gap-1.5 px-2 pb-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm">Food Blogger</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary/80 border border-primary/20 backdrop-blur-sm">Sweden 🇸🇪</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm">iPhonegrapher</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary/80 border border-primary/20 backdrop-blur-sm">Creative</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm">AI Enthusiast</span>
              </div>
              {/* Bottom gradient mask */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-[11]" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => scrollToSection('explore')}
              className="p-2 hover:bg-muted rounded-full transition-colors animate-bounce"
              aria-label="Scroll to explore section"
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
