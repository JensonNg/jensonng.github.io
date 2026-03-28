import { About } from "../components/About";
import { Education } from "../components/Education";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

import { CVSection } from "../components/CVSection";
import { SectionWrapper } from "../components/SectionWrapper";
import { ContactCTA } from "../components/ContactCTA";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export function AboutPage() {
  const location = useLocation();

  // Scroll to hash section (e.g., /about#cv)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.hash]);

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Growth Marketing meets Sustainable Impact – learn about my background and approach
          </p>
        </div>
      </div>

      {/* About Section */}
      <SectionWrapper
        sectionId="about"
        title="Who I Am"
        description="Growth Marketing Manager bridging conversion-focused copy with sustainable brand building"
        badge="About"
        defaultExpanded={true}
      >
        <About />
      </SectionWrapper>

      {/* Brand Book Callout */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/brand-book" className="block">
          <div className="glass glass-highlight rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/40 transition-all group max-w-4xl mx-auto">
            <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg">The Sowilo Mark — Personal Brand Identity</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Norse mythology meets Vietnamese heritage. Explore my complete brand system with logo variations, color palette, typography, and narrative.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        </Link>
      </div>

      {/* Education */}
      <SectionWrapper
        sectionId="education"
        title="Education"
        description="Academic background in Environmental Science and Creative Writing"
        badge="Education"
        defaultExpanded={false}
      >
        <Education />
      </SectionWrapper>

      {/* Experience */}
      <SectionWrapper
        sectionId="experience"
        title="Experience"
        description="Click on each role to explore my journey in Growth Marketing and Communications"
        badge="Experience"
        defaultExpanded={false}
      >
        <ExperienceTimeline />
      </SectionWrapper>

      {/* CV & Certificates */}
      <SectionWrapper
        sectionId="cv"
        title="CV & Certificates"
        description="Download my resume, cover letter, and professional certifications"
        badge="Documents"
        defaultExpanded={false}
      >
        <CVSection />
      </SectionWrapper>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
