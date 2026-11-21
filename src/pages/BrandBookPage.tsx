import { ArrowLeft, Download, Zap, Sun, Globe, TrendingUp, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cinzel = { fontFamily: "var(--font-display)" };

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
          className="flex items-center gap-2 text-muted-foreground hover:text-brand-ink transition-colors"
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
            <p className="text-brand-ink/60 text-sm tracking-[0.4em] uppercase">Brand Identity System</p>
            <h1 className="text-5xl md:text-6xl font-medium" style={cinzel}>
              <span className="text-brand-ink">Son</span>{" "}
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
              <h2 className="text-sm tracking-[0.3em] uppercase text-brand-ink/70">The Story Behind the Mark</h2>
            </div>

            <div className="p-8 md:p-12 md:flex gap-10">
              {/* Side rune */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-4">
                <SowiloSVG size={80} stroke="#F2C94C" strokeWidth={5} className="opacity-10" />
                <div className="w-px h-full bg-gradient-to-b from-primary/20 to-transparent mt-4" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-medium mb-1" style={cinzel}>
                    Sowilo — <span className="text-brand-ink">ᛊ</span>
                  </h3>
                  <p className="text-muted-foreground italic text-sm">Old Norse: "Sol" — The Sun</p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
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
                    Set in <strong className="text-brand-ink">Solar Gold</strong> against deep black, the Sowilo rune
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
          <h2 className="text-3xl font-medium mb-10 text-center" style={cinzel}>
            Key <span className="text-brand-ink">Symbolism</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <Sun className="w-5 h-5" />, title: "Sun & Light", desc: "Sowilo literally means \"sun\" — illumination, warmth, and the power to make things grow." },
              { icon: <Zap className="w-5 h-5" />, title: "Energy & Momentum", desc: "The angular lightning-bolt shape conveys kinetic energy — campaigns that move, content that strikes." },
              { icon: <Globe className="w-5 h-5" />, title: "East Meets North", desc: "A Vietnamese name initialed in Viking script — two cultures woven into one mark." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Forward Motion", desc: "The stroke always resolves downward and forward — growth, progress, the next chapter." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all group">
                <div className="p-2.5 bg-primary/10 rounded-lg text-brand-ink flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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
          <h2 className="text-3xl font-medium mb-10 text-center" style={cinzel}>
            Logo <span className="text-brand-ink">System</span>
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
                  <div className="text-3xl font-bold text-brand-ink tracking-[0.15em]" style={cinzel}>SON</div>
                  <div className="text-3xl font-light text-foreground/70 tracking-[0.15em]" style={cinzel}>NGUYEN</div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* With tagline */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="bg-[#111] rounded-xl p-2.5 border border-primary/20">
                  <SowiloSVG size={36} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-ink tracking-[0.15em]" style={cinzel}>SON NGUYEN</div>
                  <div className="text-xs text-muted-foreground tracking-[0.25em]">GROWTH MARKETING MANAGER</div>
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
                    <div className="text-2xl font-bold text-brand-ink tracking-[0.25em]" style={cinzel}>SON</div>
                    <div className="text-2xl font-light text-foreground/70 tracking-[0.25em]" style={cinzel}>NGUYEN</div>
                  </div>
                  <div className="w-12 h-px bg-primary/30 mx-auto" />
                  <div className="text-xs text-muted-foreground tracking-[0.3em] leading-relaxed">
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
                <div className="text-center space-y-2 bg-[#111111] rounded-xl p-3">
                  <SowiloSVG size={64} strokeWidth={5} />
                  <p className="text-xs text-[#A8A29E]">Gold</p>
                </div>
                <div className="text-center space-y-2 bg-[#111111] rounded-xl p-3">
                  <SowiloSVG size={64} stroke="#FFFFFF" strokeWidth={5} />
                  <p className="text-xs text-[#A8A29E]">White</p>
                </div>
                <div className="text-center space-y-2 bg-[#F5F5F4] rounded-xl p-3 border border-border">
                  <SowiloSVG size={64} stroke="#1A1A1A" strokeWidth={5} />
                  <p className="text-xs text-[#57534E]">Dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System – Solar Amber 2.0 */}
      <section className="container mx-auto px-4 pb-24" aria-labelledby="palette-title">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink text-center mb-3">Solar Amber 2.0</p>
          <h2 id="palette-title" className="text-3xl md:text-4xl font-medium mb-4 text-center" style={cinzel}>
            Colour <span className="text-brand-ink">Palette</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            One loud colour, warm neutrals, and two real themes. Every colour has a token name and a job; the
            website uses the names, never the hex values.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Background", token: "--background", dark: "#111111", light: "#F5F5F4", use: "Page surface" },
              { name: "Surface", token: "--card", dark: "#1A1817", light: "#FFFFFF", use: "Cards and panels" },
              { name: "Border", token: "--border", dark: "#2E2A27", light: "#E2DED8", use: "Dividers and card edges" },
              { name: "Text", token: "--foreground", dark: "#F5F5F4", light: "#1C1917", use: "Headings and body" },
              { name: "Muted text", token: "--muted-foreground", dark: "#A8A29E", light: "#57534E", use: "Supporting text" },
              { name: "Gold Ink", token: "--brand-ink", dark: "#F2C94C", light: "#8A6400", use: "Gold-coloured text and icons" },
            ].map((c) => (
              <div key={c.token} className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="grid grid-cols-2 h-20">
                  <div className="flex items-end p-2.5 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: c.dark, color: c.dark === "#F5F5F4" || c.dark === "#F2C94C" ? "#1C1917" : "#F5F5F4" }}>Dark</div>
                  <div className="flex items-end p-2.5 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: c.light, color: c.light === "#1C1917" || c.light === "#57534E" || c.light === "#8A6400" ? "#F5F5F4" : "#1C1917" }}>Light</div>
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold">{c.name}</p>
                    <code className="text-xs text-hint">{c.token}</code>
                  </div>
                  <p className="text-xs text-muted-foreground tabular-nums">{c.dark} · {c.light}</p>
                  <p className="text-sm text-muted-foreground">{c.use}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Solar Gold", hex: "#F2C94C", use: "Primary. Fills: buttons, logo, focus ring. Sparingly." },
              { name: "Amber", hex: "#F2994A", use: "Only in the amber-to-gold gradient." },
              { name: "Warm Red", hex: "#EB5757", use: "Errors only. Not a decorative colour." },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-4 flex items-center gap-4">
                <div className="size-14 shrink-0 rounded-xl" style={{ backgroundColor: c.hex }} />
                <div className="min-w-0">
                  <p className="font-semibold">{c.name} <span className="text-xs text-hint font-normal">{c.hex}</span></p>
                  <p className="text-sm text-muted-foreground">{c.use}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The one rule that keeps gold readable in light mode */}
          <div className="mt-6 grid md:grid-cols-2 rounded-2xl overflow-hidden border border-border">
            <div className="bg-[#F5F5F4] p-6 space-y-2">
              <p className="text-xs font-semibold text-[#B42318]">1.5 : 1 · fails WCAG</p>
              <p className="text-2xl font-medium text-[#F2C94C]" style={cinzel}>Growth marketing</p>
              <p className="text-sm text-[#57534E]">Solar Gold as text on a light background.</p>
            </div>
            <div className="bg-[#F5F5F4] p-6 space-y-2 border-t md:border-t-0 md:border-l border-[#E2DED8]">
              <p className="text-xs font-semibold text-[#1E7A4C]">4.9 : 1 · passes AA</p>
              <p className="text-2xl font-medium text-[#8A6400]" style={cinzel}>Growth marketing</p>
              <p className="text-sm text-[#57534E]">Gold Ink, used automatically for gold text in light mode.</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Gold is a fill, or text on dark. Never text on light.</strong>
          </p>
        </div>
      </section>

      {/* Typography */}
      <section className="container mx-auto px-4 pb-24" aria-labelledby="type-title">
        <div className="max-w-5xl mx-auto">
          <h2 id="type-title" className="text-3xl md:text-4xl font-medium mb-10 text-center" style={cinzel}>
            Typo<span className="text-brand-ink">graphy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="bg-primary/5 border-b border-border px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Display — Cinzel</p>
              </div>
              <div className="p-8 space-y-4">
                <p className="text-4xl text-brand-ink" style={cinzel}>Aa Bb Cc</p>
                <p className="text-2xl text-foreground/80" style={cinzel}>Headlines &amp; Brand Name</p>
                <p className="text-sm text-muted-foreground">
                  Roman-inscription capitals that echo the carved rune. Used for h1 and h2 at medium weight; elegance
                  comes from size, not bold.
                </p>
                <p className="text-2xl text-foreground/80" style={{ fontFamily: "'Cormorant SC', Georgia, serif" }}>Sơn Nguyễn · Hội An</p>
                <p className="text-sm text-muted-foreground">
                  Cinzel has no Vietnamese glyphs, so Cormorant SC takes over for those characters automatically.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="bg-primary/5 border-b border-border px-6 py-3">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Body — Inter</p>
              </div>
              <div className="p-8">
                <dl className="divide-y divide-border">
                  {[
                    { role: "Display", spec: "Cinzel 40 → 72px" },
                    { role: "Section heading", spec: "Cinzel 30 → 44px" },
                    { role: "Card heading", spec: "Inter 600, 18 → 20px" },
                    { role: "Body", spec: "Inter 400, 16 → 18px" },
                    { role: "Small", spec: "Inter 400, 14px" },
                    { role: "Label", spec: "Inter 600, 12px caps" },
                  ].map((t) => (
                    <div key={t.role} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-sm font-semibold">{t.role}</dt>
                      <dd className="text-sm text-muted-foreground tabular-nums">{t.spec}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-sm text-muted-foreground mt-4">
                  Inter for everything else: body, buttons, labels. 12px is the smallest size on the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container mx-auto px-4 pb-24" aria-labelledby="principles-title">
        <div className="max-w-5xl mx-auto">
          <h2 id="principles-title" className="text-3xl md:text-4xl font-medium mb-4 text-center" style={cinzel}>
            Brand in <span className="text-brand-ink">Action</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            How the system shows up across this website.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "One loud colour", desc: "Solar Gold marks the main action and the brand. Everything else stays calm and warm." },
              { label: "Promise, proof, ask", desc: "Pages open with one clear promise, show real work as evidence, then make one ask." },
              { label: "Two real themes", desc: "Light and dark are both designed. The site follows the visitor's setting." },
              { label: "Designed for the thumb", desc: "On phones, buttons stack, work shows in two columns and \"Let's talk\" stays in view." },
              { label: "Accessible by default", desc: "Colour pairs pass WCAG AA, focus is always visible and motion respects reduced-motion settings." },
              { label: "The Sowilo mark", desc: "Gold on a dark tile in the header and footer, in both themes, linking home." },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-brand-ink" style={cinzel}>{item.label}</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            The full rulebook is in{" "}
            <a
              href="https://github.com/JensonNg/jensonng.github.io/blob/master/DESIGN.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink underline-offset-4 hover:underline"
            >
              DESIGN.md <ExternalLink className="inline w-3 h-3" />
            </a>
            .
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass rounded-2xl p-10 space-y-5">
            <div className="inline-block bg-[#111] rounded-2xl p-4 border border-primary/20">
              <SowiloSVG size={48} strokeWidth={3.5} />
            </div>
            <h3 className="text-2xl font-medium" style={cinzel}>Download Brand Assets</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Full logo kit with all variations, color palette, typography, and brand story — ready to import into Figma.
            </p>
            <a
              href="/brand/son-nguyen-logo-kit.svg"
              download="son-nguyen-logo-kit.svg"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary-hover transition-colors"
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
