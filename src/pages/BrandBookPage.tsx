import { ArrowLeft, Download, Zap, Sun, Globe, TrendingUp, Monitor, Smartphone, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cinzel = { fontFamily: "'Cinzel', serif" };

function SowiloSVG({ size = 120, stroke = "#F2C94C", strokeWidth = 8, className = "" }: {
  size?: number; stroke?: string; strokeWidth?: number; className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" className={className}>
      <path
        d={`M50 16 L110 80 L50 80 L110 184`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function BrandBookPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Large animated rune */}
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-[80px] bg-primary/20 rounded-full scale-150" />
            <div className="relative bg-[#0a0a0a] rounded-[32px] p-8 border border-primary/20">
              <SowiloSVG size={160} strokeWidth={7} />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-primary/60 text-sm tracking-[0.4em] uppercase">Brand Identity System</p>
            <h1 className="text-5xl md:text-6xl font-bold" style={cinzel}>
              <span className="text-primary">Son</span>{" "}
              <span className="text-foreground">Nguyen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A personal brand built on the Sowilo rune — the Elder Futhark symbol
              for the sun, rendered as a lightning bolt that bridges cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header bar */}
            <div className="bg-primary/5 border-b border-primary/10 px-8 py-4">
              <h2 className="text-sm tracking-[0.3em] uppercase text-primary/70">The Story Behind the Mark</h2>
            </div>

            <div className="p-8 md:p-12 md:flex gap-10">
              {/* Side rune */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-4">
                <SowiloSVG size={80} stroke="#F2C94C" strokeWidth={5} className="opacity-10" />
                <div className="w-px h-full bg-gradient-to-b from-primary/20 to-transparent mt-4" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-1" style={cinzel}>
                    Sowilo — <span className="text-primary">ᛊ</span>
                  </h3>
                  <p className="text-muted-foreground italic text-sm">Old Norse: "Sol" — The Sun</p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
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
                    across continents — from grassroots NGOs in Hanoi to global brands
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
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={cinzel}>
            Key <span className="text-primary">Symbolism</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <Sun className="w-5 h-5" />, title: "Sun & Light", desc: "Sowilo literally means \"sun\" — illumination, warmth, and the power to make things grow." },
              { icon: <Zap className="w-5 h-5" />, title: "Energy & Momentum", desc: "The angular lightning-bolt shape conveys kinetic energy — campaigns that move, content that strikes." },
              { icon: <Globe className="w-5 h-5" />, title: "East Meets North", desc: "A Vietnamese name initialed in Viking script — two cultures woven into one mark." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Forward Motion", desc: "The stroke always resolves downward and forward — growth, progress, the next chapter." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all group">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" style={cinzel}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={cinzel}>
            Logo <span className="text-primary">System</span>
          </h2>

          {/* Primary Marks */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Dark mark */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Primary Mark — Dark</p>
              </div>
              <div className="p-10 flex justify-center bg-[#0a0a0a]">
                <div className="rounded-[28px] p-6 border border-primary/20 bg-[#111]">
                  <SowiloSVG size={100} strokeWidth={6} />
                </div>
              </div>
            </div>

            {/* Light mark */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Primary Mark — Light</p>
              </div>
              <div className="p-10 flex justify-center bg-[#F5F5F5]">
                <div className="rounded-[28px] p-6 border border-gray-200 bg-white shadow-sm">
                  <SowiloSVG size={100} stroke="#1A1A1A" strokeWidth={6} />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Lockups */}
          <div className="glass rounded-2xl overflow-hidden mb-6">
            <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Horizontal Lockups</p>
            </div>
            <div className="p-8 space-y-8">
              {/* Large lockup */}
              <div className="flex items-center justify-center gap-5 py-4">
                <div className="bg-[#111] rounded-2xl p-4 border border-primary/20">
                  <SowiloSVG size={56} strokeWidth={4} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary tracking-[0.15em]" style={cinzel}>SON</div>
                  <div className="text-3xl font-light text-foreground/70 tracking-[0.15em]" style={cinzel}>NGUYEN</div>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* With tagline */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="bg-[#111] rounded-xl p-2.5 border border-primary/20">
                  <SowiloSVG size={36} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary tracking-[0.15em]" style={cinzel}>SON NGUYEN</div>
                  <div className="text-[10px] text-muted-foreground tracking-[0.25em]">GROWTH MARKETING STRATEGIST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked + Mark Only */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Stacked */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Stacked Lockup</p>
              </div>
              <div className="p-10 flex justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-[#111] rounded-2xl p-5 border border-primary/20 inline-block">
                    <SowiloSVG size={72} strokeWidth={4} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary tracking-[0.25em]" style={cinzel}>SON</div>
                    <div className="text-2xl font-light text-foreground/70 tracking-[0.25em]" style={cinzel}>NGUYEN</div>
                  </div>
                  <div className="w-12 h-px bg-primary/30 mx-auto" />
                  <div className="text-[10px] text-muted-foreground tracking-[0.3em] leading-relaxed">
                    GROWTH MARKETING<br/>STRATEGIST
                  </div>
                </div>
              </div>
            </div>

            {/* Mark Only */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Mark Only</p>
              </div>
              <div className="p-10 flex items-center justify-center gap-8">
                <div className="text-center space-y-2">
                  <SowiloSVG size={64} strokeWidth={5} />
                  <p className="text-[10px] text-muted-foreground">Gold</p>
                </div>
                <div className="text-center space-y-2">
                  <SowiloSVG size={64} stroke="#FFFFFF" strokeWidth={5} />
                  <p className="text-[10px] text-muted-foreground">White</p>
                </div>
                <div className="text-center space-y-2 bg-[#F5F5F5] rounded-xl p-3">
                  <SowiloSVG size={64} stroke="#1A1A1A" strokeWidth={5} />
                  <p className="text-[10px] text-gray-500">Dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={cinzel}>
            Color <span className="text-primary">Palette</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Solar Gold", hex: "#F2C94C", role: "Primary" },
              { name: "Amber", hex: "#F2994A", role: "Secondary" },
              { name: "Warm Red", hex: "#EB5757", role: "Tertiary" },
              { name: "Deep Black", hex: "#111111", role: "Background" },
              { name: "Off White", hex: "#F5F5F5", role: "Light BG" },
              { name: "Muted", hex: "#888888", role: "Body Text" },
            ].map((color, i) => (
              <div key={i} className="space-y-2">
                <div
                  className="aspect-square rounded-xl border border-white/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="text-xs font-semibold">{color.name}</p>
                  <p className="text-[10px] text-muted-foreground">{color.hex}</p>
                  <p className="text-[10px] text-muted-foreground">{color.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={cinzel}>
            Typo<span className="text-primary">graphy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Display — Cinzel</p>
              </div>
              <div className="p-8 space-y-4">
                <p className="text-4xl text-primary" style={cinzel}>Aa Bb Cc</p>
                <p className="text-2xl text-foreground/80" style={cinzel}>Headlines & Brand Name</p>
                <p className="text-sm text-muted-foreground">
                  Cinzel — inspired by Roman inscriptions, with the monumental weight that echoes carved runes.
                  Used for the brand name, section titles, and display text.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Body — Inter</p>
              </div>
              <div className="p-8 space-y-4">
                <p className="text-4xl text-primary font-bold">Aa Bb Cc</p>
                <p className="text-2xl text-foreground/80 font-light">Subheadings & Body</p>
                <p className="text-sm text-muted-foreground">
                  Inter — clean, modern, highly legible. Used for body copy, UI elements, descriptions,
                  and all functional text throughout the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand in Action — Website */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center" style={cinzel}>
            Brand in <span className="text-primary">Action</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            The brand system comes to life across this portfolio website — every element reflects the Sowilo identity.
          </p>

          {/* Website mockup */}
          <div className="glass rounded-2xl overflow-hidden mb-6">
            <div className="bg-primary/5 border-b border-primary/10 px-6 py-3 flex items-center justify-between">
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Portfolio Website</p>
              <a href="/" className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                Visit <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Desktop mockup */}
            <div className="p-8 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Desktop</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                {/* Browser chrome */}
                <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-[#111] rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center">
                      sonnguyen.dev
                    </div>
                  </div>
                </div>
                {/* Page content mockup */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="bg-[#111] rounded-lg p-1.5 border border-primary/20">
                      <SowiloSVG size={20} strokeWidth={2} />
                    </div>
                    <div className="flex gap-4">
                      {["About", "Projects", "Services", "Contact"].map(item => (
                        <span key={item} className="text-[9px] text-muted-foreground">{item}</span>
                      ))}
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="text-center py-6 space-y-2">
                    <p className="text-[9px] text-primary/60">Xin Chao!</p>
                    <p className="text-lg font-bold">Hi, I'm <span className="text-primary" style={cinzel}>Son Nguyen</span></p>
                    <p className="text-xs text-primary/70" style={cinzel}>Growth Marketing Strategist</p>
                    <p className="text-[9px] text-muted-foreground max-w-xs mx-auto mt-2">
                      I create content that doesn't just convert, it connects.
                    </p>
                  </div>
                  {/* Cards */}
                  <div className="grid grid-cols-4 gap-2">
                    {["About Me", "Projects", "Services", "Contact"].map(card => (
                      <div key={card} className="rounded-lg bg-white/[0.03] border border-white/5 p-2 text-center">
                        <div className="w-4 h-4 rounded bg-primary/10 mx-auto mb-1" />
                        <p className="text-[8px] text-muted-foreground">{card}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="p-8 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Mobile</span>
              </div>
              <div className="flex justify-center">
                <div className="w-[200px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  {/* Status bar */}
                  <div className="bg-[#0a0a0a] px-4 py-1.5 flex items-center justify-between">
                    <span className="text-[7px] text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-1.5 rounded-sm bg-muted-foreground/40" />
                      <div className="w-2 h-1.5 rounded-sm bg-muted-foreground/40" />
                    </div>
                  </div>
                  {/* Header */}
                  <div className="px-3 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="bg-[#111] rounded p-1 border border-primary/20">
                      <SowiloSVG size={14} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="w-3 h-[1px] bg-muted-foreground" />
                      <div className="w-3 h-[1px] bg-muted-foreground" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-3 py-4 text-center space-y-1.5">
                    <p className="text-[7px] text-primary/60">Xin Chao!</p>
                    <p className="text-[10px] font-bold">Hi, I'm <span className="text-primary">Son</span></p>
                    <p className="text-[7px] text-primary/70" style={cinzel}>Growth Marketing Strategist</p>
                    <p className="text-[6px] text-muted-foreground leading-relaxed mt-1">
                      Where growth marketing meets sustainable impact.
                    </p>
                  </div>
                  {/* Cards */}
                  <div className="px-3 pb-4 grid grid-cols-2 gap-1.5">
                    {["About", "Projects", "Services", "Contact"].map(card => (
                      <div key={card} className="rounded bg-white/[0.03] border border-white/5 p-1.5 text-center">
                        <div className="w-2.5 h-2.5 rounded bg-primary/10 mx-auto mb-0.5" />
                        <p className="text-[6px] text-muted-foreground">{card}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand elements callout */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Sowilo Mark", desc: "Logo in header and footer, linking to home" },
              { label: "Solar Gold Accents", desc: "Primary color for CTAs, highlights, and interactive elements" },
              { label: "Cinzel + Inter", desc: "Display font for headings, Inter for body — inscribed meets modern" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-primary" style={cinzel}>{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass rounded-2xl p-10 space-y-5">
            <div className="inline-block bg-[#111] rounded-2xl p-4 border border-primary/20">
              <SowiloSVG size={48} strokeWidth={3.5} />
            </div>
            <h3 className="text-2xl font-bold" style={cinzel}>Download Brand Assets</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Full logo kit with all variations, color palette, typography, and brand story — ready to import into Figma.
            </p>
            <a
              href="/brand/son-nguyen-logo-kit.svg"
              download="son-nguyen-logo-kit.svg"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
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
