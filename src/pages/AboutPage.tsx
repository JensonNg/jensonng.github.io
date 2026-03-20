import { About } from "../components/About";
import { Education } from "../components/Education";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { Skills } from "../components/Skills";
import { CVSection } from "../components/CVSection";
import { SectionWrapper } from "../components/SectionWrapper";
import { ContactCTA } from "../components/ContactCTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        description="Growth Marketing Strategist bridging conversion-focused copy with sustainable brand building"
        badge="About"
        defaultExpanded={true}
      >
        <About />
      </SectionWrapper>

      {/* Education */}
      <SectionWrapper
        sectionId="education"
        title="Education"
        description="Academic background in Environmental Science and Creative Writing"
        badge="Education"
        defaultExpanded={true}
      >
        <Education />
      </SectionWrapper>

      {/* Experience */}
      <SectionWrapper
        sectionId="experience"
        title="Experience"
        description="Click on each role to explore my journey in Growth Marketing and Communications"
        badge="Experience"
        defaultExpanded={true}
      >
        <ExperienceTimeline />
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper
        sectionId="skills"
        title="Skills & Expertise"
        description="Technical skills and creative competencies"
        badge="Skills"
        defaultExpanded={true}
      >
        <Skills />
      </SectionWrapper>

      {/* CV & Certificates */}
      <SectionWrapper
        sectionId="cv"
        title="CV & Certificates"
        description="Download my resume, cover letter, and professional certifications"
        badge="Documents"
        defaultExpanded={true}
      >
        <CVSection />
      </SectionWrapper>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
