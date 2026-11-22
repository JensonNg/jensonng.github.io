import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { projects, type LogoBrand, type Project } from "../data/projects";

// Consistent logo thumbnail component
function BrandLogo({ brand, size = "normal", project }: { brand: LogoBrand; size?: "normal" | "featured"; project?: Project }) {
  const height = size === "featured" ? "h-[280px]" : "h-[160px]";
  if (project?.cover) {
    return (
      <div className={`${height} relative w-full overflow-hidden bg-surface-2`}>
        <img src={project.cover} alt={project.coverAlt ?? ""} loading="lazy" style={{ objectPosition: project.coverPosition }} className="h-full w-full object-cover" />
        {project.coverCredit && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
            Image: {project.coverCredit}
          </span>
        )}
      </div>
    );
  }
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
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-primary/30 bg-background">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
              <path d="M14 4 L28 20 L14 20 L28 44" stroke="#F2C94C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg border border-border"
            style={{ backgroundColor: brand.color, color: '#000' }}
          >
            {brand.initials}
          </div>
        )}
        <span className="text-sm font-semibold tracking-wide text-foreground/90">{brand.name}</span>
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
        {/* Featured projects - full width */}
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
                <BrandLogo project={project} brand={project.brand} size="featured" />
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
                          <div className="text-sm font-bold text-brand-ink">{metric.value}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="text-xs font-medium">Role: {project.role}</div>
                    <blockquote className="text-xs italic text-brand-ink border-l-2 border-primary/30 pl-3">
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

        {/* Non-featured projects - 2-column grid on desktop */}
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
                <BrandLogo project={project} brand={project.brand} size="normal" />
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
                          <div className="text-sm font-bold text-brand-ink">{metric.value}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="text-xs font-medium">Role: {project.role}</div>
                    <blockquote className="text-xs italic text-brand-ink border-l-2 border-primary/30 pl-3">
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
