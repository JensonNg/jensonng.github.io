import { Head } from "./components/Head";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CreativeWork } from "./components/CreativeWork";
import { CVDownload } from "./components/CVDownload";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SectionWrapper } from "./components/SectionWrapper";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Ambient glow orbs — Solar Amber radial glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[rgba(242,201,76,0.08)] blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[rgba(242,201,76,0.05)] blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-[rgba(242,153,74,0.04)] blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="relative z-10">
        <Head />
        <Header />
        <main>
          <Hero />
          
          <SectionWrapper
            sectionId="about"
            title="About Me"
            description="Growth Marketing meets Sustainable Impact - Learn about my background and approach"
            badge="About Me"
            defaultExpanded={true}
          >
            <About />
          </SectionWrapper>

          <SectionWrapper
            sectionId="creative-work"
            title="Content Creation"
            description="Short-form video, content creation, and visual storytelling"
            badge="Creative Work"
            defaultExpanded={true}
          >
            <CreativeWork />
          </SectionWrapper>

          <SectionWrapper
            sectionId="education"
            title="Education"
            description="Academic background in Environmental Science and Creative Writing"
            badge="Education"
            defaultExpanded={false}
          >
            <Education />
          </SectionWrapper>

          <SectionWrapper
            sectionId="experience"
            title="Experience"
            description="Latest work experience in Growth Marketing and Communications"
            badge="Experience"
            defaultExpanded={false}
          >
            <Experience />
          </SectionWrapper>

          <SectionWrapper
            sectionId="skills"
            title="Skills & Expertise"
            description="Technical skills and creative competencies"
            badge="Skills"
            defaultExpanded={false}
          >
            <Skills />
          </SectionWrapper>

          <SectionWrapper
            sectionId="projects"
            title="Featured Projects"
            description="Recent work in sustainable marketing and brand development"
            badge="Projects"
            defaultExpanded={false}
          >
            <Projects />
          </SectionWrapper>
          {/* CV Download */}
          <section id="cv" className="py-8">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-4">
                <div className="space-y-2">
                </div>
                <CVDownload />
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-2 mb-8">
              </div>
              <Contact />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
