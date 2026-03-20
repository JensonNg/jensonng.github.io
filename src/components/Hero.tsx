import { ArrowDown, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl py-20 md:py-32">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">
            Open to opportunities
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Son Nguyen
            <br />
            <span className="text-primary">Growth Marketing</span>
            <br />
            Strategist
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I help sustainable brands grow through data-driven marketing, compelling content,
            and authentic storytelling. Based in Stockholm — working globally.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Button onClick={() => scrollToSection("contact")}>
              Let's talk
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("projects")}>
              View my work
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/son-nguyen-marketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/JensonNg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
          className="mt-16 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ArrowDown className="h-4 w-4" />
          Scroll to explore
        </button>
      </div>
    </section>
  );
}
