import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface Metric {
  value: string;
  label: string;
}

interface LogoBrand {
  name: string;
  initials: string;
  color: string;
  bgFrom: string;
  bgTo: string;
}

// Consistent logo thumbnail component
function BrandLogo({ brand, size = "normal" }: { brand: LogoBrand; size?: "normal" | "featured" }) {
  const height = size === "featured" ? "h-[280px]" : "h-[160px]";
  return (
    <div className={`${height} w-full flex items-center justify-center relative overflow-hidden`}
      style={{ background: `linear-gradient(135deg, ${brand.bgFrom}, ${brand.bgTo})` }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full blur-[60px] opacity-30"
          style={{ backgroundColor: brand.color }}
        />
      </div>
      {/* Logo content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {brand.initials === 'ᛊ' ? (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-primary/30 bg-[#111]">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
              <path d="M14 4 L28 20 L14 20 L28 44" stroke="#F2C94C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg border border-white/10"
            style={{ backgroundColor: brand.color, color: '#000' }}
          >
            {brand.initials}
          </div>
        )}
        <span className="text-sm font-semibold tracking-wide text-white/90">{brand.name}</span>
      </div>
    </div>
  );
}

export function Projects() {
  const navigate = useNavigate();

  const handleReadMore = (url: string) => {
    if (url.startsWith('/')) {
      navigate(url);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const projects = [
    {
      title: "Personal Brand Identity - The Sowilo Mark",
      description: "Designed a personal brand identity rooted in Norse mythology. The Sowilo rune (ᛊ) — the Elder Futhark symbol for 'S' meaning 'sun' — becomes a lightning bolt mark that bridges Vietnamese heritage with Scandinavian home. Developed a complete brand system including logo variations, color palette, typography, and brand narrative.",
      brand: {
        name: "Son Nguyen",
        initials: "ᛊ",
        color: "#F2C94C",
        bgFrom: "#111111",
        bgTo: "#1a1a0a",
      } as LogoBrand,
      technologies: ["Brand Identity", "Logo Design", "Visual System", "Brand Narrative"],
      period: "2026",
      organization: "Personal Brand",
      role: "Brand Designer & Strategist",
      quote: "A Vietnamese name initialed in Viking script — two cultures woven into one mark.",
      readMoreUrl: "/brand-book",
      featured: true,
      metrics: [
        { value: "8", label: "Logo variations" },
        { value: "6", label: "Brand colors" },
        { value: "4", label: "Key symbols" },
      ] as Metric[],
    },
    {
      title: "Final UX Design Project: Asekio Web Builder",
      description: "Collaborated on UX transformation for Asekio, an AI website builder. Enhanced onboarding via user journey mapping & prototyping, laid the foundation for their modular design system, and boosted engagement through usability testing & iterative design.",
      brand: {
        name: "Asekio",
        initials: "A",
        color: "#6366f1",
        bgFrom: "#1e1b4b",
        bgTo: "#312e81",
      } as LogoBrand,
      technologies: ["UX Design", "Design Systems", "Usability Testing", "AI/UX Integration"],
      period: "Mar – Jun 2024",
      organization: "Team Project",
      role: "UX Designer & Strategist",
      quote: "Structure meets story – and strategy leads both.",
      readMoreUrl: "https://www.hampusdesign.com/projekt/asekio",
      featured: true,
      metrics: [],
    },
    {
      title: "RFSL Utbildning – Digital Marketing & Communication",
      description: "Created portfolios and general offers for the company to bring to workshops and conferences. Collaborated with clients and stakeholders to get testimonials and interviews. Designed sales materials and built brand guidelines and key visuals for the products.",
      brand: {
        name: "RFSL Utbildning",
        initials: "R",
        color: "#e040a0",
        bgFrom: "#4a0e2e",
        bgTo: "#2d0a1e",
      } as LogoBrand,
      technologies: ["Digital Marketing", "Brand Guidelines", "Sales Materials", "Stakeholder Relations"],
      period: "Aug 2022 – Jun 2023",
      organization: "RFSL",
      role: "Digital Marketing & Communication",
      quote: "Building brand visibility that amplifies voices for equal rights.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "2,000", label: "Website visitors" },
        { value: "400", label: "LinkedIn followers in 3 months" },
        { value: "300", label: "Event participants" },
      ] as Metric[],
    },
    {
      title: "Hanoi Pride 2019 – Internal Secretary for Communication",
      description: "Oversaw all communication activities and controlled quality of media including images, videos, and articles. Responsible for communicating with external media outlets, resulting in significant press coverage and donor engagement.",
      brand: {
        name: "Hanoi Pride",
        initials: "HP",
        color: "#f472b6",
        bgFrom: "#831843",
        bgTo: "#500724",
      } as LogoBrand,
      technologies: ["Media Relations", "PR & Press", "Event Communication", "Campaign Management"],
      period: "Apr 2019 – Jun 2020",
      organization: "Hanoi Pride",
      role: "Internal Secretary for Communication",
      quote: "164K people reached – amplifying visibility through strategic storytelling.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "164K", label: "People reached on Facebook" },
        { value: "7,000", label: "Pride Parade participants" },
        { value: "~20", label: "News articles & interviews" },
        { value: "~20", label: "Donors & partners" },
      ] as Metric[],
    },
    {
      title: "Seed Planter – Marketing Lead",
      description: "Established and maintained Facebook fanpage and monitored campaigns. Designed and implemented strategic plans for social enterprise projects. Recruited delegates for workshops, supervised volunteers, and prepared content and press for stakeholders.",
      brand: {
        name: "Seed Planter",
        initials: "SP",
        color: "#4ade80",
        bgFrom: "#052e16",
        bgTo: "#14532d",
      } as LogoBrand,
      technologies: ["Marketing Strategy", "Social Media", "Content Creation", "Stakeholder Communication"],
      period: "Jun 2020 – Feb 2021",
      organization: "Seed Planter",
      role: "Marketing Lead",
      quote: "Revamped branding and led teams for impactful social enterprise projects.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "350K", label: "People reached on Facebook" },
        { value: "6,000", label: "Organic likes & follows" },
        { value: "1,500", label: "Event participants/year" },
      ] as Metric[],
    },
    {
      title: "Hanoi Queer – Communication Team Leader",
      description: "Allocated human resources and supported project communication. Supervised all communication activities, controlled quality of media including images, videos, and articles. Managed marketing campaigns and the organization's website.",
      brand: {
        name: "Hanoi Queer",
        initials: "HQ",
        color: "#c084fc",
        bgFrom: "#3b0764",
        bgTo: "#581c87",
      } as LogoBrand,
      technologies: ["Campaign Management", "Content Quality", "Social Media", "Website Management"],
      period: "Communication Team",
      organization: "Hanoi Queer",
      role: "Communication Team Leader",
      quote: "150K people reached – building community through strategic digital presence.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "150K", label: "People reached on Facebook" },
        { value: "20,000", label: "Organic likes & follows" },
        { value: "51", label: "Events & campaigns" },
        { value: "1,100", label: "Event participants/year" },
      ] as Metric[],
    },
    {
      title: "GreenHub – Communication Officer",
      description: "Allocated human resources and supported project communication for environmental initiatives. Supervised communication activities, controlled quality of media, and managed marketing campaigns while building a new website for the organization.",
      brand: {
        name: "GreenHub",
        initials: "GH",
        color: "#22d3ee",
        bgFrom: "#042f2e",
        bgTo: "#134e4a",
      } as LogoBrand,
      technologies: ["Environmental Communication", "Digital Marketing", "Website Development", "Storytelling"],
      period: "Sep 2019 – Jul 2020",
      organization: "GreenHub",
      role: "Communication Officer",
      quote: "Elevating ethnic minority start-ups through digital marketing and impactful storytelling.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "65K", label: "People reached on Facebook" },
        { value: "3,000", label: "Organic likes & follows" },
        { value: "500", label: "Event participants/year" },
      ] as Metric[],
    },
    {
      title: "Ara-Tay Coffee – Digital Marketing Manager",
      description: "Created portfolios and applications to call for sponsorship. Collected stories and information from local people and stakeholders. Managed marketing campaigns and built brand guidelines and key visuals for the products.",
      brand: {
        name: "Ara-Tay Coffee",
        initials: "AT",
        color: "#f59e0b",
        bgFrom: "#451a03",
        bgTo: "#78350f",
      } as LogoBrand,
      technologies: ["Brand Guidelines", "Visual Identity", "Sponsorship", "Community Storytelling"],
      period: "Digital Marketing",
      organization: "Ara-Tay Coffee",
      role: "Digital Marketing Manager",
      quote: "Building brand identity from the ground up, rooted in local stories and community.",
      readMoreUrl: "#",
      featured: false,
      metrics: [
        { value: "8,000", label: "People reached on Facebook" },
        { value: "1,681", label: "Organic likes & follows" },
        { value: "400", label: "Event participants/year" },
      ] as Metric[],
    },
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
        {/* Featured projects – full width */}
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
                <BrandLogo brand={project.brand} size="featured" />
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

                  {/* Metrics */}
                  {project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center p-2 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

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
                {project.readMoreUrl !== '#' && (
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      onClick={() => handleReadMore(project.readMoreUrl)}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Read More
                    </Button>
                  </div>
                )}
              </CardContent>
            </motion.div>
          </motion.div>
        ))}

        {/* Non-featured projects – 2-column grid on desktop */}
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
                <BrandLogo brand={project.brand} size="normal" />
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

                  {/* Metrics */}
                  {project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center p-2 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

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

                {project.readMoreUrl !== '#' && (
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      onClick={() => handleReadMore(project.readMoreUrl)}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Read More
                    </Button>
                  </div>
                )}
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
        </div>
      </motion.div>
    </div>
  );
}
