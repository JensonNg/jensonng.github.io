import { Projects } from "../components/Projects";
import { CreativeWork } from "../components/CreativeWork";
import { SectionWrapper } from "../components/SectionWrapper";
import { ContactCTA } from "../components/ContactCTA";

export function ProjectsPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Work</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Marketing campaigns, content creation, food blog, documentary, and visual storytelling
          </p>
        </div>
      </div>

      {/* Creative Work */}
      <SectionWrapper
        sectionId="creative-work"
        title="Content Creation"
        description="Short-form video, content creation, and visual storytelling"
        badge="Creative Work"
        defaultExpanded={true}
      >
        <CreativeWork />
      </SectionWrapper>

      {/* Projects */}
      <SectionWrapper
        sectionId="projects"
        title="Featured Projects"
        description="Recent work in sustainable marketing and brand development"
        badge="Projects"
        defaultExpanded={true}
      >
        <Projects />
      </SectionWrapper>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
