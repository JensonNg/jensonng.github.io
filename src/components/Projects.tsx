import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Final UX Design Project: Asekio Web Builder",
      description: "Collaborated on UX transformation for Asekio, an AI website builder. Enhanced onboarding via user journey mapping & prototyping, laid the foundation for their modular design system, and boosted engagement through usability testing & iterative design.",
      image: "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBidWlsZGVyJTIwdXglMjBkZXNpZ24lMjBhaXxlbnwxfHx8fDE3NTc3NjI3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["UX Design", "Design Systems", "Usability Testing", "AI/UX Integration"],
      period: "Mar – Jun 2024",
      organization: "Team Project",
      role: "UX Designer & Strategist",
      quote: "Structure meets story — and strategy leads both.",
      readMoreUrl: "https://www.hampusdesign.com/projekt/asekio",
      featured: true
    },
    {
      title: "LingoClip x K-Pop Fandom Campaign",
      description: "Developed the 'Speak Like Your K-Pop Idol with LingoClip' campaign — a mental-health-aware, music-driven strategy to engage global Gen Z language learners. Increased engagement through K-pop-led brand storytelling and applied 3-month digital marketing analysis to boost user acquisition.",
      image: "https://images.unsplash.com/photo-1683533439495-dd8eec14f6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwbWFya2V0aW5nJTIwY2FtcGFpZ24lMjBkaWdpdGFsfGVufDF8fHx8MTc1Nzc2Mjc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Digital Marketing", "Brand Storytelling", "Gen Z Engagement", "Cultural Marketing"],
      period: "Jan – Jun 2023",
      organization: "Linköping University",
      role: "Creative Strategist & Digital Marketing Lead",
      quote: "By blending cultural relevance with emotional resonance, we turned language learning into a movement.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Zero Waste Academy (Vietnam)",
      description: "Created a two-week educational initiative to inspire waste reduction in Vietnamese schools. Tackled 79M lbs of plastic waste challenges with youth-led learning and delivered a scalable education model blending leadership and systems thinking.",
      image: "https://images.unsplash.com/photo-1669293020268-3112a1f69eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZXJvJTIwd2FzdGUlMjBhY2FkZW15JTIwZWR1Y2F0aW9uJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzU3NzYyNzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Sustainability Education", "Systems Thinking", "Youth Leadership", "Environmental Impact"],
      period: "Feb – Mar 2024",
      organization: "Hyper Island",
      role: "Project Founder & Sustainability Lead",
      quote: "A dream rooted in five years of reflection — turned into real-world action.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "UX Research: Swedish Youth & Finance Apps",
      description: "Conducted qualitative research on how Swedish youth interact with finance apps during economic uncertainty. Mapped barriers and motivators in digital banking usage and provided design recommendations grounded in empathy and behavioral insights.",
      image: "https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwZmluYW5jZSUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NTc3NjI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["UX Research", "Behavioral Insights", "User Journey Mapping", "Qualitative Analysis"],
      period: "Oct – Nov 2023",
      organization: "Self-led",
      role: "UX Researcher",
      quote: "I designed for my own demographic — with curiosity, care, and clarity.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Ethical Investment Feature for Banking App",
      description: "Co-created an in-app feature to help users identify investment funds aligned with personal values. Applied rapid ideation (Crazy 8s) + user testing cycles and advocated for transparency and ethical decision-making in fintech UX.",
      image: "https://images.unsplash.com/photo-1592698765727-387c9464cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGludmVzdG1lbnQlMjBiYW5raW5nJTIwZXRoaWNhbHxlbnwxfHx8fDE3NTc3NjI3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["UX Design", "Ethical Design", "Rapid Prototyping", "User Testing"],
      period: "Nov – Dec 2023",
      organization: "Team Design Sprint",
      role: "UX Designer & Researcher",
      quote: "Sustainable investing needs sustainable design thinking.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Strategic Plan Handbook: Raoul Wallenberg Academy",
      description: "Led the creation of a strategic sustainability playbook for the Cube Project, using experiential and participatory design. Analyzed business risks and circular economy opportunities, co-created a vision aligned with RWA's educational mission.",
      image: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMGhhbmRib29rJTIwYWNhZGVteXxlbnwxfHx8fDE3NTc3NjI3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Strategic Planning", "Sustainability Strategy", "Participatory Design", "Circular Economy"],
      period: "Nov – Dec 2023",
      organization: "Hyper Island",
      role: "Lead Strategist",
      quote: "Clarity, community, and circularity guided our plan.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "UX Ethics Case Study: Time-Saving Bias in Foodora",
      description: "Investigated how speed-focused UX design can unintentionally harm user trust. Used Foodora as a live case and offered ethical design guidelines to balance usability with transparency.",
      image: "https://images.unsplash.com/photo-1581019055756-93b5361f9536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGV0aGljcyUyMGNhc2UlMjBzdHVkeSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc3NjI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["UX Ethics", "Case Study Research", "Design Analysis", "User Trust"],
      period: "Jan – Feb 2024",
      organization: "Independent Study",
      role: "UX Ethics Researcher",
      quote: "Speed should never compromise trust — but design should balance both.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Data Analysis: IKEA's Life at Home",
      description: "Analyzed IKEA's 'Life at Home' dataset using Python and Looker. Uncovered behavioral patterns and living trends, framed insights into actionable design opportunities with empathy-driven approach.",
      image: "https://images.unsplash.com/photo-1701076814704-01670e45d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBpa2VhJTIwaG9tZSUyMHJlc2VhcmNofGVufDF8fHx8MTc1Nzc2Mjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Looker", "Data Analysis", "Behavioral Research"],
      period: "Feb – Apr 2024",
      organization: "Independent Research",
      role: "Data & UX Researcher",
      quote: "Data becomes insight when translated with empathy.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Internal Comms Strategy for Sustainable Leadership",
      description: "Created an internal communication framework for RWA's Cube Project to strengthen stakeholder alignment. Mapped internal communication flows and proposed tactical and strategic content to empower leadership.",
      image: "https://images.unsplash.com/photo-1591202928585-ae660165f73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hbCUyMGNvbW11bmljYXRpb25zJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU3NzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Internal Communications", "Strategic Planning", "Stakeholder Alignment", "Leadership Development"],
      period: "Jan – Feb 2024",
      organization: "Raoul Wallenberg Academy",
      role: "Communications Strategist",
      quote: "Change starts within — communication is the catalyst.",
      readMoreUrl: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="p-6">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured project — full width */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div
              className="overflow-hidden rounded-xl glass glass-glow hover:shadow-xl transition-shadow duration-300 md:grid md:grid-cols-2 md:gap-0"
              variants={hoverVariants}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 h-[280px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute top-3 left-3"
                >
                  <Badge className="bg-primary text-primary-foreground text-xs backdrop-blur-sm bg-primary/90">
                    Featured Project
                  </Badge>
                </motion.div>
              </div>

              <CardContent className="p-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-xs font-medium">{project.title}</div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">{project.period}</Badge>
                      <Badge variant="secondary" className="text-xs">{project.organization}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium">Role: {project.role}</div>
                    <blockquote className="text-xs italic text-primary border-l-2 border-primary/30 pl-3">
                      "{project.quote}"
                    </blockquote>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs border border-border/30 backdrop-blur-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5 animate-pulse"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    onClick={() => {
                      if (project.readMoreUrl !== '#') {
                        window.open(project.readMoreUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={project.readMoreUrl === '#'}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {project.readMoreUrl === '#' ? 'Coming Soon' : 'Read More'}
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}

        {/* Non-featured projects — 2-column grid on desktop */}
        <div className="grid md:grid-cols-2 gap-6">
        {projects.filter(p => !p.featured).map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div
              className="overflow-hidden rounded-xl glass glass-glow hover:shadow-xl transition-shadow duration-300 h-full"
              variants={hoverVariants}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 h-[160px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-xs font-medium">{project.title}</div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">{project.period}</Badge>
                      <Badge variant="secondary" className="text-xs">{project.organization}</Badge>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-medium">Role: {project.role}</div>
                    <blockquote className="text-xs italic text-primary border-l-2 border-primary/30 pl-3">
                      "{project.quote}"
                    </blockquote>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs border border-border/30 backdrop-blur-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5 animate-pulse"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    onClick={() => {
                      if (project.readMoreUrl !== '#') {
                        window.open(project.readMoreUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={project.readMoreUrl === '#'}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {project.readMoreUrl === '#' ? 'Coming Soon' : 'Read More'}
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
        </div>
      </motion.div>
    </div>
  );
}