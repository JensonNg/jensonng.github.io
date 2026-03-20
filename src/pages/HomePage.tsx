import { Hero } from "../components/Hero";
import { ContactCTA } from "../components/ContactCTA";
import { ArrowRight, Briefcase, GraduationCap, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main>
      <Hero />

      {/* Quick Navigation Cards */}
      <section id="explore" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Explore My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Dive deeper into my background, projects, and creative work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* About Card */}
            <Link to="/about" className="group">
              <div className="glass glass-highlight rounded-2xl p-6 space-y-4 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(242,201,76,0.15)]">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">About Me</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My background, education, experience, skills, and what drives my approach to growth marketing.
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Projects Card */}
            <Link to="/projects" className="group">
              <div className="glass glass-highlight rounded-2xl p-6 space-y-4 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(242,153,74,0.15)]">
                <div className="p-3 bg-secondary/10 rounded-xl w-fit">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Projects & Creative Work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Marketing campaigns, content creation, food blog, documentary, and visual storytelling.
                </p>
                <div className="flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                  View work <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Services Card */}
            <Link to="/services" className="group">
              <div className="glass glass-highlight rounded-2xl p-6 space-y-4 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(111,207,151,0.15)]">
                <div className="p-3 bg-tertiary/10 rounded-xl w-fit">
                  <Sparkles className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-semibold">Services</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creative packages for growth marketing, content creation, UX writing, and communications.
                </p>
                <div className="flex items-center gap-2 text-tertiary text-sm font-medium group-hover:gap-3 transition-all">
                  Explore packages <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* CV & Certificates Card */}
            <Link to="/about#cv" className="group">
              <div className="glass glass-highlight rounded-2xl p-6 space-y-4 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(242,201,76,0.15)]">
                <div className="p-3 bg-quaternary/10 rounded-xl w-fit">
                  <Download className="w-6 h-6 text-quaternary" />
                </div>
                <h3 className="text-lg font-semibold">CV & Certificates</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Download my resume, cover letter, and professional certifications.
                </p>
                <div className="flex items-center gap-2 text-quaternary text-sm font-medium group-hover:gap-3 transition-all">
                  View all <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
