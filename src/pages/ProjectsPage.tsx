import { Projects } from "../components/Projects";
import { SectionWrapper } from "../components/SectionWrapper";
import { ContactCTA } from "../components/ContactCTA";
import { SectionHeader } from "../components/SectionHeader";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";

export function ProjectsPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium">
            My <span className="text-brand-ink">Work</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Marketing campaigns, brand development, and sustainable growth projects
          </p>
        </div>
      </div>

      {/* Case studies */}
      {caseStudies.length > 0 && (
        <section aria-labelledby="case-studies-title" className="px-4 pb-16 md:pb-24">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              id="case-studies-title"
              eyebrow="Case studies"
              title="The full story"
              lead="The challenge, what I did, and what changed."
            />
            <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <li key={study.slug} className="min-w-0">
                  <CaseStudyCard study={study} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
