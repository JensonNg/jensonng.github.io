import { ArrowLeft, Download, Zap, Sun, Globe, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export default function BrandBookPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Logo size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Brand <span className="text-primary">Identity</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A personal brand system built on the Sowilo rune — the Viking symbol for sun
            and the letter S in Elder Futhark script.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-start gap-6">
              {/* Large rune illustration */}
              <div className="hidden md:block flex-shrink-0">
                <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                  <path d="M15 10 L65 80 L15 80 L65 190" stroke="url(#story-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.15"/>
                  <defs>
                    <linearGradient id="story-grad" x1="15" y1="10" x2="65" y2="190">
                      <stop stopColor="#F2C94C"/>
                      <stop offset="1" stopColor="#F2994A"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    The Sowilo Rune — <span className="text-primary">ᛊ</span>
                  </h2>
                  <p className="text-muted-foreground italic">Old Norse: "Sol" — The Sun</p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The mark at the heart of this identity is <strong className="text-foreground">Sowilo (ᛊ)</strong>,
                    a rune from the Elder Futhark — the oldest runic alphabet used across Scandinavia over a thousand
                    years ago. Sowilo represents the sun, and its angular, lightning-bolt form carries meanings of
                    energy, victory, and forward motion.
                  </p>
                  <p>
                    For Son, this symbol bridges two worlds. It is the letter <strong className="text-foreground">S</strong> — his
                    initial — rendered in the language of his adopted home, Sweden. A Vietnamese storyteller who found
                    his creative voice in Stockholm, Son chose the Sowilo rune because it speaks to who he is: someone
                    who brings light and momentum to every brand he touches.
                  </p>
                  <p>
                    The shape itself tells a story of transformation — a single stroke that changes direction twice,
                    moving upward, pivoting, and surging forward again. Much like a growth marketing career built
                    across continents, cultures, and industries — from grassroots NGOs in Hanoi to global brands
                    in Stockholm — the mark embodies resilience, adaptability, and the power of a well-told story.
                  </p>
                  <p>
                    Set in <strong className="text-primary">Solar Gold</strong> against deep black, the Sowilo rune
                    becomes both a personal signature and a brand promise: clarity through creativity, impact through
                    intention, and always — forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Symbolism */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Key <span className="text-primary">Symbolism</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                title: "Sun & Light",
                rune: "ᛊ",
                description: "Sowilo literally means \"sun\" — illumination, warmth, and the power to make things grow."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Energy & Momentum",
                rune: "⚡",
                description: "The angular lightning-bolt shape conveys kinetic energy — campaigns that move, content that strikes."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "East Meets North",
                rune: "🇻🇳 → 🇸🇪",
                description: "A Vietnamese name initialed in Viking script — two cultures woven into one mark."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Forward Motion",
                rune: "↗",
                description: "The stroke always resolves downward and forward — growth, progress, the next chapter."
              }
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/20 transition-colors">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Logo <span className="text-primary">Variations</span>
          </h2>

          {/* Primary Mark - Dark */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Primary Mark - Dark</p>
              <div className="bg-[#111] rounded-3xl p-8 border border-white/5">
                <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
                  <rect x="4" y="4" width="192" height="192" rx="48" fill="#111" stroke="url(#v-ring)" strokeWidth="3"/>
                  <path d="M50 16 L110 80 L50 80 L110 184" stroke="url(#v-gold)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <defs>
                    <linearGradient id="v-ring" x1="0" y1="0" x2="200" y2="200">
                      <stop stopColor="#F2C94C" stopOpacity="0.5"/>
                      <stop offset="1" stopColor="#F2994A" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="v-gold" x1="50" y1="16" x2="110" y2="184">
                      <stop stopColor="#F2C94C"/>
                      <stop offset="0.5" stopColor="#F2994A"/>
                      <stop offset="1" stopColor="#F2C94C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Primary Mark - Light</p>
              <div className="bg-[#F5F5F5] rounded-3xl p-8">
                <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
                  <rect x="4" y="4" width="192" height="192" rx="48" fill="#FFF" stroke="#E0E0E0" strokeWidth="2"/>
                  <path d="M50 16 L110 80 L50 80 L110 184" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Horizontal lockups */}
          <div className="space-y-4 mb-6">
            <div className="glass rounded-2xl p-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">Horizontal Lockup - Dark</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#111] rounded-xl p-3 border border-primary/20">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                      <path d="M12 4 L27 20 L12 20 L27 44" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary tracking-wider">SON</div>
                    <div className="text-2xl font-light text-foreground/80 tracking-wider">NGUYEN</div>
                  </div>
                </div>

                <div className="h-12 w-px bg-white/10 hidden md:block" />

                <div className="flex items-center gap-3">
                  <div className="bg-[#111] rounded-lg p-2 border border-primary/20">
                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                      <path d="M12 4 L27 20 L12 20 L27 44" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-bold text-primary tracking-wider">SON NGUYEN</div>
                    <div className="text-[10px] text-muted-foreground tracking-[0.2em]">GROWTH MARKETING STRATEGIST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked lockup */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="glass rounded-2xl p-8 flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Stacked - Dark</p>
              <div className="text-center space-y-3">
                <div className="bg-[#111] rounded-2xl p-5 border border-primary/20 inline-block">
                  <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path d="M12 2 L27 20 L12 20 L27 46" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary tracking-[0.3em]">SON</div>
                  <div className="text-xl font-light text-foreground/80 tracking-[0.3em]">NGUYEN</div>
                </div>
                <div className="w-16 h-px bg-primary/30 mx-auto" />
                <div className="text-[10px] text-muted-foreground tracking-[0.3em]">
                  GROWTH MARKETING<br/>STRATEGIST
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Mark Only</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                    <path d="M5 5 L30 40 L5 40 L30 95" stroke="#F2C94C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[10px] text-muted-foreground mt-2">Gold</p>
                </div>
                <div className="text-center">
                  <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                    <path d="M5 5 L30 40 L5 40 L30 95" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[10px] text-muted-foreground mt-2">White</p>
                </div>
                <div className="text-center bg-[#F5F5F5] rounded-xl p-4">
                  <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                    <path d="M5 5 L30 40 L5 40 L30 95" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[10px] text-muted-foreground mt-2">Dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Color <span className="text-primary">Palette</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Solar Gold", hex: "#F2C94C", role: "Primary", textDark: true },
              { name: "Amber", hex: "#F2994A", role: "Secondary", textDark: true },
              { name: "Warm Red", hex: "#EB5757", role: "Tertiary", textDark: false },
              { name: "Deep Black", hex: "#111111", role: "Background", textDark: false },
              { name: "Off White", hex: "#F5F5F5", role: "Light BG", textDark: true },
              { name: "Muted", hex: "#888888", role: "Body Text", textDark: true },
            ].map((color, i) => (
              <div key={i} className="space-y-2">
                <div
                  className="h-20 rounded-xl border border-white/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="text-sm font-semibold">{color.name}</p>
                  <p className="text-xs text-muted-foreground">{color.hex}</p>
                  <p className="text-xs text-muted-foreground">{color.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Typo<span className="text-primary">graphy</span>
          </h2>
          <div className="glass rounded-2xl p-8 space-y-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Headlines</p>
              <p className="text-3xl font-bold text-primary">Inter Bold</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Subheadings</p>
              <p className="text-2xl font-light text-foreground/80">Inter Light</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Body</p>
              <p className="text-base text-muted-foreground">Inter Regular — Body copy, descriptions, and UI text</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold">Download Brand Assets</h3>
            <p className="text-sm text-muted-foreground">
              Get the full logo kit SVG with all variations, color palette, and brand story — ready to import into Figma.
            </p>
            <a
              href="/brand/son-nguyen-logo-kit.svg"
              download="son-nguyen-logo-kit.svg"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Logo Kit (.svg)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
