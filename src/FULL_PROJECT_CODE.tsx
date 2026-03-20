// ============================================================
// SON NGUYEN PORTFOLIO - FULL PROJECT CODE FOR CLAUDE CODE
// ============================================================
// This file contains ALL the source code for the portfolio.
// Each section is marked with the file path where it belongs.
// Copy each section into its respective file.
// ============================================================

// ============================================================
// FILE: /styles/globals.css
// ============================================================
/*
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #16a34a;
  --primary-foreground: oklch(1 0 0);
  --secondary: #15803d;
  --secondary-foreground: oklch(1 0 0);
  --tertiary: #14532d;
  --tertiary-foreground: oklch(1 0 0);
  --quaternary: #166534;
  --quaternary-foreground: oklch(1 0 0);
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #f0fdf4;
  --accent-foreground: #365314;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: #16a34a;
  --primary-foreground: oklch(1 0 0);
  --secondary: #15803d;
  --secondary-foreground: oklch(1 0 0);
  --tertiary: #14532d;
  --tertiary-foreground: oklch(1 0 0);
  --quaternary: #166534;
  --quaternary-foreground: oklch(1 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: #15803d;
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-tertiary: var(--tertiary);
  --color-tertiary-foreground: var(--tertiary-foreground);
  --color-quaternary: var(--quaternary);
  --color-quaternary-foreground: var(--quaternary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h2 { font-size: var(--text-xl); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h4 { font-size: var(--text-base); font-weight: var(--font-weight-medium); line-height: 1.5; }
    p { font-size: var(--text-base); font-weight: var(--font-weight-normal); line-height: 1.5; }
    label { font-size: var(--text-base); font-weight: var(--font-weight-medium); line-height: 1.5; }
    button { font-size: var(--text-base); font-weight: var(--font-weight-medium); line-height: 1.5; }
    input { font-size: var(--text-base); font-weight: var(--font-weight-normal); line-height: 1.5; }
  }
}

html {
  font-size: var(--font-size);
}
*/

// ============================================================
// FILE: /App.tsx
// ============================================================
/*
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
    <div className="min-h-screen">
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
        <section id="cv" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <div className="space-y-2">
              </div>
              <CVDownload />
            </div>
          </div>
        </section>
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
  );
}
*/

// ============================================================
// FILE: /components/Head.tsx
// ============================================================
/*
import { useEffect } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function Head({ 
  title = "Son Nguyen - Growth Marketing Strategist | Sustainable Brand Growth",
  description = "Welcome to my journey where growth marketing meets sustainable impact. Expert in UX Writing & Communications Strategy, helping brands grow authentically while making a positive difference.",
  image = "https://images.unsplash.com/photo-1748297816227-1e5f3e602a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJrZXRpbmclMjBzdHJhdGVnaXN0JTIwcG9ydHJhaXQlMjBncmVlbnxlbnwxfHx8fDE3NTc3NzA3NDl8MA&ixlib=rb-4.1.0&q=80&w=1200",
  url = window.location.href
}: HeadProps) {
  
  useEffect(() => {
    document.title = title;
    
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('description', description, false);
    setMetaTag('keywords', 'Growth Marketing Strategist, UX Writing, Communications Strategy, Sustainable Marketing, Brand Growth, Environmental Science, Stockholm, Son Nguyen', false);
    setMetaTag('author', 'Son Nguyen', false);
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('og:type', 'website');
    setMetaTag('og:site_name', 'Son Nguyen Portfolio');
    setMetaTag('og:locale', 'en_US');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:creator', '@sonngoc');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0', false);
    setMetaTag('robots', 'index, follow', false);
    setMetaTag('theme-color', '#16a34a', false);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Son Nguyen",
      "jobTitle": "Growth Marketing Strategist",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://linkedin.com/in/soninsthlm",
        "https://instagram.com/foodstuckers.sthlm"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Stockholm",
        "addressCountry": "Sweden"
      },
      "knowsAbout": [
        "Growth Marketing",
        "UX Writing", 
        "Communications Strategy",
        "Sustainable Marketing",
        "Environmental Science"
      ]
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, image, url]);

  return null;
}
*/

// ============================================================
// FILE: /components/Logo.tsx
// ============================================================
/*
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  if (variant === 'minimal') {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <span className="font-bold text-primary">SN</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} relative group cursor-pointer`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30" />
      <div className="absolute inset-0.5 bg-gradient-to-br from-secondary/15 to-tertiary/15 rounded-full transition-all duration-300 group-hover:scale-105" />
      <div className="relative w-full h-full bg-gradient-to-br from-background to-accent rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
        <div className="relative flex items-center justify-center">
          <span className="font-bold text-primary transition-all duration-300 group-hover:scale-110">S</span>
          <span className="font-bold text-secondary ml-0.5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">N</span>
        </div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-tertiary rounded-full opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary" />
      </div>
      <div className="absolute inset-0 rounded-full border border-primary/0 transition-all duration-500 group-hover:border-primary/20 group-hover:scale-125" />
      <div className="absolute inset-0 rounded-full border border-secondary/0 transition-all duration-700 group-hover:border-secondary/15 group-hover:scale-150" />
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Header.tsx
// ============================================================
/*
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Linkedin, Mail, Instagram, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMyInfoOpen, setMobileMyInfoOpen] = useState(false);
  const [mobileMyWorkOpen, setMobileMyWorkOpen] = useState(false);

  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Go to home"
        >
          <Logo size="md" />
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>My Information</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('about')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">About</button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('education')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Education</button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('experience')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Experience</button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('skills')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Skills</button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('contact')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Contact</button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>My Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('creative-work')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Content Creation</button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection('projects')} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left">Projects</button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/soninsthlm/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/foodstuckers.sthlm" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:sonngoc.nguyen@hyperisland.se" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <Button onClick={() => scrollToSection('contact')} size="sm">Let's talk</Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <div className="border-b pb-2">
              <button onClick={() => setMobileMyInfoOpen(!mobileMyInfoOpen)} className="flex items-center justify-between w-full text-left hover:text-primary transition-colors py-2">
                <span>My Information</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMyInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMyInfoOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button onClick={() => scrollToSection('about')} className="block text-left hover:text-primary transition-colors py-2 w-full">About</button>
                  <button onClick={() => scrollToSection('education')} className="block text-left hover:text-primary transition-colors py-2 w-full">Education</button>
                  <button onClick={() => scrollToSection('experience')} className="block text-left hover:text-primary transition-colors py-2 w-full">Experience</button>
                  <button onClick={() => scrollToSection('skills')} className="block text-left hover:text-primary transition-colors py-2 w-full">Skills</button>
                  <button onClick={() => scrollToSection('contact')} className="block text-left hover:text-primary transition-colors py-2 w-full">Contact</button>
                </div>
              )}
            </div>

            <div className="border-b pb-2">
              <button onClick={() => setMobileMyWorkOpen(!mobileMyWorkOpen)} className="flex items-center justify-between w-full text-left hover:text-primary transition-colors py-2">
                <span>My Work</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMyWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMyWorkOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button onClick={() => scrollToSection('creative-work')} className="block text-left hover:text-primary transition-colors py-2 w-full">Content Creation</button>
                  <button onClick={() => scrollToSection('projects')} className="block text-left hover:text-primary transition-colors py-2 w-full">Projects</button>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 pt-4 border-t">
              <a href="https://www.linkedin.com/in/soninsthlm/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="https://instagram.com/foodstuckers.sthlm" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="mailto:sonngoc.nguyen@hyperisland.se" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
            </div>
            
            <Button onClick={() => scrollToSection('contact')} size="sm" className="mt-4 w-full">Let's talk</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
*/

// ============================================================
// FILE: /components/Hero.tsx
// ============================================================
/*
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

function AnimatedRoleText() {
  const roles = [
    { text: "Growth Marketing Strategist", accent: "text-white", bgAccent: "bg-primary" },
    { text: "Content Creator & Video Editor", accent: "text-white", bgAccent: "bg-secondary" }, 
    { text: "UX Writing Expert", accent: "text-white", bgAccent: "bg-tertiary" },
    { text: "Communications Strategist", accent: "text-white", bgAccent: "bg-quaternary" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];

  return (
    <div className="relative h-12 flex items-center overflow-hidden">
      <div className="relative">
        <h2 className={`text-lg md:text-xl font-medium transition-all duration-300 ease-out transform relative ${isAnimating ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <span className="flex items-center relative">
            <span className={`w-1 h-1 rounded-full ${currentRole.bgAccent} mr-3 animate-pulse opacity-70`} />
            <span className="relative inline-block">
              <span className={`relative z-10 px-3 py-1 rounded-md transition-all duration-300 ease-out ${currentRole.accent} ${currentRole.bgAccent} ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
                {currentRole.text}
              </span>
              <div className={`absolute inset-0 rounded-md blur-sm transition-all duration-300 ease-out ${currentRole.bgAccent} opacity-20 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-20'}`} />
            </span>
          </span>
        </h2>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 ${currentRole.bgAccent} rounded-full animate-ping opacity-30`}
            style={{
              right: `${10 + i * 15}%`,
              top: `${40 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">       
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl leading-tight">Xin Chao! </h1>
                <h1 className="text-4xl md:text-6xl leading-tight"> I'm <span className="text-primary">Son Nguyen</span></h1>
                <div className="space-y-3">
                  <AnimatedRoleText />
                  <div className="flex flex-wrap gap-2"></div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to my journey where <span className="text-primary font-medium">growth marketing meets sustainable impact</span>. 
                With a Master's in Environmental Science and expertise in UX Writing + Communications Strategy, I help brands grow 
                authentically while making a positive difference.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  <span className="font-medium text-primary">My creative toolkit?</span> From short-form video and content creation 
                  to strategic UX writing and communications, I turn complex ideas into compelling brand stories. Whether it's Instagram 
                  Reels, campaign videos, or conversion-focused copy - I create content that doesn't just convert, it connects.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform rotate-2"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/s7e06VN60JY?rel=0&modestbranding=1&controls=1&showinfo=0" 
                    title="Son Nguyen - Growth Marketing Strategist Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-2xl shadow-lg w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent rounded-2xl" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4 space-y-4">
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-3">Ready to explore?</p>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button className="bg-primary hover:bg-primary/90 flex-1" onClick={() => scrollToSection('creative-work')}>View Creative Work</Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex-1" onClick={() => scrollToSection('projects')}>View Projects</Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white flex-1" onClick={() => scrollToSection('contact')}>Contact Me</Button>
                    <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex-1" onClick={() => scrollToSection('cv')}>Download CV</Button>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-primary/10 pt-4">
                <p className="text-xs font-medium text-foreground text-center mb-3">Connect with me</p>
                <div className="flex justify-center gap-3">
                  <a href="https://linkedin.com/in/soninsthlm" target="_blank" rel="noopener noreferrer" className="p-3 bg-background/50 hover:bg-primary hover:text-white rounded-lg transition-all border border-primary/20" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                  <a href="mailto:sonngoc.nguyen@hyperisland.se" className="p-3 bg-background/50 hover:bg-primary hover:text-white rounded-lg transition-all border border-primary/20" title="Email"><Mail className="w-5 h-5" /></a>
                  <a href="https://instagram.com/foodstuckers.sthlm" target="_blank" rel="noopener noreferrer" className="p-3 bg-background/50 hover:bg-primary hover:text-white rounded-lg transition-all border border-primary/20" title="Instagram @foodstuckers.sthlm"><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button onClick={() => scrollToSection('about')} className="p-2 hover:bg-muted rounded-full transition-colors animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
*/

// ============================================================
// FILE: /components/SectionWrapper.tsx
// ============================================================
/*
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface SectionWrapperProps {
  title: string;
  description?: string;
  badge?: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
  sectionId: string;
}

export function SectionWrapper({ title, description, badge, defaultExpanded = false, children, sectionId }: SectionWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleExpandSection = (event: CustomEvent) => {
      if (event.detail.sectionId === sectionId) {
        setIsExpanded(true);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };
    window.addEventListener('expandSection', handleExpandSection as EventListener);
    return () => {
      window.removeEventListener('expandSection', handleExpandSection as EventListener);
    };
  }, [sectionId]);

  return (
    <section id={sectionId} className="py-4">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border border-border/50 shadow-sm">
          <Button
            variant="ghost"
            onClick={toggleExpanded}
            className="w-full p-6 h-auto flex items-center justify-between hover:bg-accent/50 transition-colors rounded-none"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {isExpanded ? <ChevronDown className="w-5 h-5 text-primary" /> : <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                {badge && <Badge variant="outline" className="border-primary text-primary">{badge}</Badge>}
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl text-foreground mb-2">{title}</h2>
                {description && <p className="text-muted-foreground text-sm max-w-2xl">{description}</p>}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">{isExpanded ? 'Click to minimize' : 'Click to expand'}</div>
          </Button>
          {isExpanded && (
            <div className="border-t border-border/30">{children}</div>
          )}
        </Card>
      </div>
    </section>
  );
}
*/

// ============================================================
// FILE: /components/About.tsx
// ============================================================
/*
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Target, Users, Lightbulb, Video } from "lucide-react";
// NOTE: Profile image uses figma:asset - replace with your actual image path
// import sonProfileImage from 'figma:asset/1e960cafd215c602f918461bdf659ed69ec10c28.png';

export function About() {
  const achievements = [
    { number: "6+", label: "Years Experience" },
    { number: "1500+", label: "Blog Followers" },
    { number: "8+", label: "Organizations" },
    { number: "3", label: "Languages" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const expandAndScrollToSection = (sectionId: string) => {
    const expandEvent = new CustomEvent('expandSection', { detail: { sectionId } });
    window.dispatchEvent(expandEvent);
  };

  return (
    <div className="p-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Growth Marketing Strategist who bridges conversion-focused copy with sustainable brand building. 
              With expertise in UX Writing + Communications Strategy, I help purpose-driven brands scale authentically.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl">
                My <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Creative Approach</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I combine UX Writing principles with growth strategy to create messaging that converts and connects. 
                At Mitigram, I've built comprehensive communication hierarchies that drive user engagement while 
                maintaining authentic brand voice across all platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My environmental science background gives me a unique lens for translating complex concepts into 
                compelling, actionable brand stories. I specialize in sustainable growth strategies for conscious brands, 
                leveraging user psychology to craft conversion-focused copy that resonates with purpose-driven consumers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <div className="relative w-full aspect-[4/5] max-h-[400px] overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
                <ImageWithFallback
                  src={sonProfileImage}
                  alt="Son Nguyen - Growth Marketing Strategist"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="text-sm font-medium text-foreground text-center mb-4">My Impact by Numbers</h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl text-primary font-bold">{achievement.number}</div>
                    <p className="text-xs text-muted-foreground">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/5 to-tertiary/5 border border-secondary/20 rounded-lg p-4 space-y-4">
              <h4 className="text-sm font-medium text-foreground">What makes me different?</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Video className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Content Creation & Video Editing</p>
                    <p className="text-xs text-muted-foreground">Short-form video, Reels, and visual storytelling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Strategic UX Writing</p>
                    <p className="text-xs text-muted-foreground">Converting copy that connects with users</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Sustainable Growth Focus</p>
                    <p className="text-xs text-muted-foreground">Long-term brand building over quick wins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-quaternary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Environmental Science Background</p>
                    <p className="text-xs text-muted-foreground">Complex ideas made simple & compelling</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-secondary/10 pt-3">
                <Button variant="outline" size="sm" onClick={() => expandAndScrollToSection('experience')} className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  See My Experience <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Education.tsx
// ============================================================
/*
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Malmo Universitet",
      degree: "Master's Degree in Communication for Development",
      specialization: "Digital Communication & Social Change",
      period: "2024 - 2026",
      location: "Malmo, Sweden",
      description: "Advanced studies in strategic communication for development and social change, focusing on digital transformation and human-centered communication strategies in international contexts.",
      achievements: ["Strategic communication for social impact", "Digital transformation methodologies", "Cross-cultural communication strategies", "Development communication theory"]
    },
    {
      institution: "Sodertorn Hogskolan",
      degree: "Master's Degree in Environmental Science in Communications",
      specialization: "Environmental Communication & Sustainability",
      period: "2021 - 2023",
      location: "Stockholm, Sweden",
      description: "Specialized program combining environmental science with communication strategies, focusing on sustainability communication and environmental advocacy in digital contexts.",
      achievements: ["Environmental communication strategies", "Sustainability advocacy", "Research methodology", "Digital storytelling for environmental causes"]
    }
  ];

  const certifications = [
    "Front-end Development (Mar-23)",
    "Learning Local SEO (Oct-22)",
    "Facebook Digital Marketing (Apr-22)",
    "Google Ads Essential Training (Aug-22)",
    "SEO Keyword Strategy (Aug-22)",
    "SEO Foundations (Aug-22)"
  ];

  return (
    <div className="p-6">
      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <div className="text-sm text-primary font-medium">{edu.institution}</div>
                  <p className="text-muted-foreground text-sm">{edu.specialization}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</div>
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
              <div className="space-y-2">
                <div className="font-medium flex items-center gap-2 text-xs">
                  <Award className="w-3 h-3 text-secondary" />Key Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <Badge key={achIndex} variant="secondary" className="text-xs">{achievement}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="font-medium mb-2 text-sm">Additional Certifications</div>
              <p className="text-xs text-muted-foreground">Continuous learning in digital marketing and development</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors text-xs">{cert}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Experience.tsx
// ============================================================
/*
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Mitigram",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Creative Marketing Strategist",
          period: "November 2024 - Present",
          responsibilities: [
            "Coordinating all projects within Marketing and Communications to ensure consistency and alignment with brand vision and strategic goals",
            "Collaborating closely with the Executive Team and Head of Marketing to build a new Communication Hierarchy that streamlines and unifies messaging, voice, and tone across all platforms and channels",
            "Developing and implementing brand guidelines to ensure cohesive storytelling and visual identity, delivering a seamless experience across all channels",
            "Working cross-functional collaboration with agencies, sales, customer managers, and partners to align marketing content and ensure a cohesive, engaging brand presence"
          ]
        },
        {
          title: "Marketing & Content Developer",
          period: "August 2024 - January 2025",
          responsibilities: [
            "Covering inbound marketing efforts within the Lead Generation team, supporting commercial teams through tailored campaigns targeting diverse customer segments",
            "Managing social media content creation, sales material development, and testimonial production to enhance brand visibility and support sales efforts",
            "Collaborating with marketing initiatives for commercial events, including planning, promotion, and execution to drive audience engagement",
            "Coordinating PR efforts and partner communications, crafting announcements and press releases for collaborative projects"
          ]
        }
      ],
      description: "A digital platform streamlining trade finance by connecting corporations, financial institutions, and insurers.",
      impact: "Built comprehensive communication hierarchy and enhanced brand consistency across all channels"
    },
    {
      company: "Epidemic Sound",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Copyright Screener",
          period: "October 2024 - August 2025",
          responsibilities: [
            "Reviewing short videos and categorising them to ensure proper copyright compliance",
            "Collaborating with team members to optimize claims on YouTube, resulting in increased revenue",
            "Demonstrating understanding of copyright laws related to music and content creation"
          ]
        }
      ],
      description: "Leading music and sound effects platform for content creators worldwide.",
      impact: "Optimized YouTube claims process resulting in measurable revenue increases"
    },
    {
      company: "H&M",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Senior Sales Advisor",
          period: "September 2024 - March 2025",
          responsibilities: [
            "Providing exceptional sales promotions and customer service for the Kids and Women's floors at the store",
            "Showcasing fashion expertise to enhance the customer experience and promote the new vision of the brand",
            "Collaborating with team members to achieve sales targets and create a welcoming shopping environment"
          ]
        }
      ],
      description: "Working at the second upgraded H&M store in the world.",
      impact: "Enhanced customer experience at flagship upgraded store showcasing H&M's new brand vision"
    },
    {
      company: "RFSL (Swedish Federation for LGBTQ+ Rights)",
      location: "Stockholm, Sweden",
      positions: [
        {
          title: "Assistant Communication Officer and Content Creator",
          period: "August 2022 - June 2023",
          responsibilities: [
            "Collaborated with partners and clients for social media campaigns and press releases",
            "Created content and visual posts for Facebook ads, LinkedIn ads, and online webinars",
            "Prepared materials for email marketing, newsletters, and physical marketing materials",
            "Managed communication with members and donors through email marketing and CRM (Salesforce)"
          ]
        }
      ],
      description: "Sweden's largest LGBTQ+ rights organization working for equal rights and representation.",
      impact: "Enhanced digital engagement and donor communication through strategic content creation"
    }
  ];

  return (
    <div className="p-6">
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4" />{exp.company}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />{exp.location}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {exp.positions.length} position{exp.positions.length > 1 ? 's' : ''}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground pt-2">{exp.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="space-y-3 last:border-b-0 border-b border-border/30 pb-6 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{position.title}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3" />{position.period}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {position.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>{resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-2 border-t border-border/30">
                <div className="text-xs">
                  <span className="font-medium text-primary">Impact: </span>
                  <span className="text-muted-foreground">{exp.impact}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Skills.tsx
// ============================================================
/*
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Palette, Code, Megaphone, Heart, Languages, Award, Lightbulb, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Communication",
      icon: Megaphone,
      color: "text-primary",
      skills: [
        { name: "LinkedIn Ads", level: 85 },
        { name: "Content Creation", level: 95 },
        { name: "Copywriting", level: 88 },
        { name: "Marketing Planning", level: 95 },
        { name: "Branding Strategy", level: 90 },
        { name: "Project Management", level: 90 },
        { name: "WordPress", level: 70 },
        { name: "HubSpot", level: 65 },
        { name: "Salesforce", level: 60 }
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      color: "text-secondary",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Canva", level: 95 },
        { name: "HTML/CSS", level: 65 },
        { name: "UI/UX Design", level: 80 },
        { name: "Visual Communication", level: 90 }
      ]
    },
    {
      title: "Research & Analytics",
      icon: Lightbulb,
      color: "text-tertiary",
      skills: [
        { name: "Data Analysis", level: 75 },
        { name: "User Research", level: 86 },
        { name: "A/B Testing", level: 70 },
        { name: "Market Research", level: 87 }
      ]
    },
    {
      title: "Sustainability & Social Impact",
      icon: Heart,
      color: "text-accent-foreground",
      skills: [
        { name: "Environmental Communication", level: 95 },
        { name: "Sustainable Strategy", level: 90 },
        { name: "Social Impact Measurement", level: 85 },
        { name: "Stakeholder Engagement", level: 88 },
        { name: "CSR Communications", level: 87 }
      ]
    }
  ];

  const languages = [
    { language: "Vietnamese", level: "Native", percentage: 100, flag: "VN" },
    { language: "English", level: "Fluent", percentage: 95, flag: "GB" },
    { language: "Swedish", level: "Conversational", percentage: 60, flag: "SE" }
  ];

  const certifications = [
    { title: "Learn About AI Features Certificate Course", organization: "LinkedIn", year: "2025", type: "AI & Marketing", credentialId: "zvk3feih9yi5" },
    { title: "Master Digital Marketing", organization: "LinkedIn", year: "2022", type: "Digital Marketing", credentialId: "Available" },
    { title: "Figma for UX Design", organization: "LinkedIn", year: "2023", type: "UX Design", credentialId: "Available" },
    { title: "Mentor Recognition Certificate", organization: "Jobbspranget", year: "2025", type: "Leadership", credentialId: "d3ffc26d-03cc-4a0a" }
  ];

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-sm">
                  <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                    <category.icon className="w-4 h-4" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-muted text-primary"><Languages className="w-4 h-4" /></div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span className="font-medium text-xs">{lang.language}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                  <Progress value={lang.percentage} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-muted text-secondary"><Award className="w-4 h-4" /></div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-3 space-y-1">
                  <div className="font-medium text-xs">{cert.title}</div>
                  <p className="text-xs text-muted-foreground">{cert.organization}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    <Badge variant="secondary" className="text-xs">{cert.type}</Badge>
                  </div>
                  {cert.credentialId && <p className="text-xs text-muted-foreground/80 mt-1">ID: {cert.credentialId}</p>}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/CreativeWork.tsx
// ============================================================
/*
import { ExternalLink, Instagram as InstagramIcon, Linkedin as LinkedinIcon, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
// NOTE: These are figma:asset imports - replace with your actual thumbnail paths
// import instagramThumbnail1 from "figma:asset/84ace3ae11e9f0f382a10a4ccc3eae5ef42aa9ac.png";
// import instagramThumbnail2 from "figma:asset/b9d29cf634fdf1ebba58a9a6471bb26ba1e2f1c5.png";
// import instagramThumbnail3 from "figma:asset/4125bcc198a601d52d88051146403a12d203cde7.png";
// import linkedinThumbnail1 from "figma:asset/c74ad8233c7850b416c0d322784aaae053a99f61.png";
// import linkedinThumbnail2 from "figma:asset/4124704a542996e3710071803911cce88096775c.png";
// import linkedinThumbnail3 from "figma:asset/47f32426d8547b89328c9ab1d8fee70e80030de1.png";

interface InstagramVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  embedCode: string;
  postUrl: string;
}

interface LinkedInVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  embedCode: string;
  postUrl: string;
}

export function CreativeWork() {
  const [selectedInstagram, setSelectedInstagram] = useState<InstagramVideo | null>(null);
  const [selectedLinkedIn, setSelectedLinkedIn] = useState<LinkedInVideo | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedInstagram) {
      setTimeout(() => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      }, 100);
    }
  }, [selectedInstagram]);

  const instagramVideos: InstagramVideo[] = [
    {
      id: "ig-1",
      title: "Coffee in Paris Review",
      thumbnailUrl: instagramThumbnail1,
      embedCode: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/CZ9LT5cg_M8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/reel/CZ9LT5cg_M8/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"><div style="display: flex; flex-direction: row; align-items: center;"><div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div><div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"><div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div><div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;"></div><div style="padding-top: 8px;"><div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div></a></div></blockquote>',
      postUrl: ""
    },
    {
      id: "ig-2",
      title: "RFSL Interview - EATHAN Representative",
      thumbnailUrl: instagramThumbnail2,
      embedCode: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/CbrwHLrImE7/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/tv/CbrwHLrImE7/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"><div style="padding-top: 8px;"><div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div></a></div></blockquote>',
      postUrl: ""
    },
    {
      id: "ig-3",
      title: "Vietnam in my memory",
      thumbnailUrl: instagramThumbnail3,
      embedCode: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C-VAiONCaXR/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/reel/C-VAiONCaXR/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"><div style="padding-top: 8px;"><div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div></a></div></blockquote>',
      postUrl: "https://www.instagram.com/reel/C-VAiONCaXR/"
    }
  ];

  const linkedinVideos: LinkedInVideo[] = [
    {
      id: "li-1",
      title: "Trade Finance Facts - Mitigram",
      thumbnailUrl: linkedinThumbnail1,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7309476958042513408?collapsed=1" height="770" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      postUrl: "https://www.linkedin.com/posts/mitigram-ab_tradefinance-datadriven-financialinnovation-activity-7310254131414237184-6ztr"
    },
    {
      id: "li-2",
      title: "Breakdown the Steps - The Series",
      thumbnailUrl: linkedinThumbnail2,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7321165718819946496?collapsed=1" height="895" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      postUrl: "https://www.linkedin.com/posts/mitigram-ab_series-tradefinance-mitigram-activity-7321165875233861633-1Cro"
    },
    {
      id: "li-3",
      title: "Webinar Highlight Series",
      thumbnailUrl: linkedinThumbnail3,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7354067003080433664?collapsed=1" height="770" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      postUrl: "https://www.linkedin.com/posts/mitigram-ab_tariffs-trade-globaltrade-activity-7354087995903242241-_d8t"
    }
  ];

  const defaultInstagramThumbnail = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=800&fit=crop";
  const defaultLinkedInThumbnail = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop";

  return (
    <div className="p-6 space-y-12">
      {// INSTAGRAM SECTION }
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <InstagramIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl">Instagram Reels</h2>
            <p className="text-sm text-muted-foreground">@foodstuckers.sthlm</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramVideos.map((video, index) => (
            <motion.div key={video.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="cursor-pointer" onClick={() => video.embedCode && setSelectedInstagram(video)}>
              <div className="group relative overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img src={video.thumbnailUrl || defaultInstagramThumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="https://instagram.com/foodstuckers.sthlm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-opacity">
            <InstagramIcon className="w-5 h-5" />View All on Instagram<ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {// LINKEDIN SECTION }
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <LinkedinIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl">LinkedIn Posts</h2>
            <p className="text-sm text-muted-foreground">Professional Content</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linkedinVideos.map((video, index) => (
            <motion.div key={video.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 + 0.2 }} whileHover={{ y: -8, scale: 1.02 }} className="cursor-pointer" onClick={() => video.embedCode && setSelectedLinkedIn(video)}>
              <div className="group relative overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img src={video.thumbnailUrl || defaultLinkedInThumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="https://www.linkedin.com/company/mitigram-ab/posts/?feedView=videos&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-opacity">
            <LinkedinIcon className="w-5 h-5" />View All on LinkedIn<ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {// Instagram Modal }
      <Dialog open={selectedInstagram !== null} onOpenChange={(open) => !open && setSelectedInstagram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedInstagram && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 text-primary" />{selectedInstagram.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">Watch the Instagram Reel in full.</DialogDescription>
              </DialogHeader>
              <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: selectedInstagram.embedCode }} />
              {selectedInstagram.postUrl && (
                <a href={selectedInstagram.postUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-opacity">
                  <InstagramIcon className="w-5 h-5" />View on Instagram<ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {// LinkedIn Modal }
      <Dialog open={selectedLinkedIn !== null} onOpenChange={(open) => !open && setSelectedLinkedIn(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedLinkedIn && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <LinkedinIcon className="w-5 h-5 text-primary" />{selectedLinkedIn.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">Watch the LinkedIn Post in full.</DialogDescription>
              </DialogHeader>
              <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: selectedLinkedIn.embedCode }} />
              {selectedLinkedIn.postUrl && (
                <a href={selectedLinkedIn.postUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-opacity">
                  <LinkedinIcon className="w-5 h-5" />View on LinkedIn<ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <motion.div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          <span className="font-medium text-primary">More Content Available:</span> Additional video samples, raw footage, specific Reels, and detailed case studies available upon request. I can provide examples tailored to your specific content needs.
        </p>
      </motion.div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Projects.tsx
// ============================================================
/*
import { Card, CardContent } from "./ui/card";
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
      image: "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBidWlsZGVyJTIwdXglMjBkZXNpZ24lMjBhaXxlbnwxfHx8fDE3NTc3NjI3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["UX Design", "Design Systems", "Usability Testing", "AI/UX Integration"],
      period: "Mar - Jun 2024",
      organization: "Team Project",
      role: "UX Designer & Strategist",
      quote: "Structure meets story - and strategy leads both.",
      readMoreUrl: "https://www.hampusdesign.com/projekt/asekio",
      featured: true
    },
    {
      title: "LingoClip x K-Pop Fandom Campaign",
      description: "Developed the 'Speak Like Your K-Pop Idol with LingoClip' campaign - a mental-health-aware, music-driven strategy to engage global Gen Z language learners.",
      image: "https://images.unsplash.com/photo-1683533439495-dd8eec14f6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwbWFya2V0aW5nJTIwY2FtcGFpZ24lMjBkaWdpdGFsfGVufDF8fHx8MTc1Nzc2Mjc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Digital Marketing", "Brand Storytelling", "Gen Z Engagement", "Cultural Marketing"],
      period: "Jan - Jun 2023",
      organization: "Linkoping University",
      role: "Creative Strategist & Digital Marketing Lead",
      quote: "By blending cultural relevance with emotional resonance, we turned language learning into a movement.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Zero Waste Academy (Vietnam)",
      description: "Created a two-week educational initiative to inspire waste reduction in Vietnamese schools.",
      image: "https://images.unsplash.com/photo-1669293020268-3112a1f69eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZXJvJTIwd2FzdGUlMjBhY2FkZW15JTIwZWR1Y2F0aW9uJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzU3NzYyNzY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Sustainability Education", "Systems Thinking", "Youth Leadership", "Environmental Impact"],
      period: "Feb - Mar 2024",
      organization: "Hyper Island",
      role: "Project Founder & Sustainability Lead",
      quote: "A dream rooted in five years of reflection - turned into real-world action.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "UX Research: Swedish Youth & Finance Apps",
      description: "Conducted qualitative research on how Swedish youth interact with finance apps during economic uncertainty.",
      image: "https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwZmluYW5jZSUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NTc3NjI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["UX Research", "Behavioral Insights", "User Journey Mapping", "Qualitative Analysis"],
      period: "Oct - Nov 2023",
      organization: "Self-led",
      role: "UX Researcher",
      quote: "I designed for my own demographic - with curiosity, care, and clarity.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Ethical Investment Feature for Banking App",
      description: "Co-created an in-app feature to help users identify investment funds aligned with personal values.",
      image: "https://images.unsplash.com/photo-1592698765727-387c9464cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGludmVzdG1lbnQlMjBiYW5raW5nJTIwZXRoaWNhbHxlbnwxfHx8fDE3NTc3NjI3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["UX Design", "Ethical Design", "Rapid Prototyping", "User Testing"],
      period: "Nov - Dec 2023",
      organization: "Team Design Sprint",
      role: "UX Designer & Researcher",
      quote: "Sustainable investing needs sustainable design thinking.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Strategic Plan Handbook: Raoul Wallenberg Academy",
      description: "Led the creation of a strategic sustainability playbook for the Cube Project.",
      image: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMGhhbmRib29rJTIwYWNhZGVteXxlbnwxfHx8fDE3NTc3NjI3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Strategic Planning", "Sustainability Strategy", "Participatory Design", "Circular Economy"],
      period: "Nov - Dec 2023",
      organization: "Hyper Island",
      role: "Lead Strategist",
      quote: "Clarity, community, and circularity guided our plan.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "UX Ethics Case Study: Time-Saving Bias in Foodora",
      description: "Investigated how speed-focused UX design can unintentionally harm user trust.",
      image: "https://images.unsplash.com/photo-1581019055756-93b5361f9536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGV0aGljcyUyMGNhc2UlMjBzdHVkeSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc3NjI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["UX Ethics", "Case Study Research", "Design Analysis", "User Trust"],
      period: "Jan - Feb 2024",
      organization: "Independent Study",
      role: "UX Ethics Researcher",
      quote: "Speed should never compromise trust - but design should balance both.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Data Analysis: IKEA's Life at Home",
      description: "Analyzed IKEA's 'Life at Home' dataset using Python and Looker.",
      image: "https://images.unsplash.com/photo-1701076814704-01670e45d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBpa2VhJTIwaG9tZSUyMHJlc2VhcmNofGVufDF8fHx8MTc1Nzc2Mjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "Looker", "Data Analysis", "Behavioral Research"],
      period: "Feb - Apr 2024",
      organization: "Independent Research",
      role: "Data & UX Researcher",
      quote: "Data becomes insight when translated with empathy.",
      readMoreUrl: "#",
      featured: false
    },
    {
      title: "Internal Comms Strategy for Sustainable Leadership",
      description: "Created an internal communication framework for RWA's Cube Project to strengthen stakeholder alignment.",
      image: "https://images.unsplash.com/photo-1591202928585-ae660165f73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hbCUyMGNvbW11bmljYXRpb25zJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU3NzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Internal Communications", "Strategic Planning", "Stakeholder Alignment", "Leadership Development"],
      period: "Jan - Feb 2024",
      organization: "Raoul Wallenberg Academy",
      role: "Communications Strategist",
      quote: "Change starts within - communication is the catalyst.",
      readMoreUrl: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const hoverVariants = {
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="p-6">
      <motion.div className="grid gap-6" variants={containerVariants} initial="hidden" animate="visible">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} whileHover="hover">
            <motion.div className={`overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 ${project.featured ? 'md:grid md:grid-cols-2 md:gap-0' : ''}`} variants={hoverVariants}>
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                  <ImageWithFallback src={project.image} alt={project.title} className={`w-full object-cover transition-transform duration-500 ${project.featured ? 'h-[280px]' : 'h-[160px]'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                {project.featured && (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.3 }} className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground text-xs backdrop-blur-sm bg-primary/90">Featured Project</Badge>
                  </motion.div>
                )}
              </div>
              <CardContent className={`p-4 ${project.featured ? 'flex flex-col justify-between' : ''}`}>
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
                    <blockquote className="text-xs italic text-primary border-l-2 border-primary/30 pl-3">"{project.quote}"</blockquote>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs border border-border/30 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5 animate-pulse"></span>{tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-xs h-7 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200" onClick={() => { if (project.readMoreUrl !== '#') window.open(project.readMoreUrl, '_blank', 'noopener,noreferrer'); }} disabled={project.readMoreUrl === '#'}>
                    <ExternalLink className="w-3 h-3 mr-1" />{project.readMoreUrl === '#' ? 'Coming Soon' : 'Read More'}
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/CVDownload.tsx
// ============================================================
/*
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function CVDownload() {
  const CV_URL = "https://github.com/JensonNg/Son_Nguyen_CV.pdf/blob/main/Son_Nguyen_CV.pdf";
  
  const handleDownload = () => {
    window.open(CV_URL, '_blank');
  };

  return (
    <section id="cv" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Get the full details of my professional background and project outcomes
            </p>
          </div>
          <div className="pt-2">
            <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <Download className="w-5 h-5 mr-2" />Download
            </Button>
            <p className="text-xs text-muted-foreground mt-3">PDF format - Updated January 2025 - 2 pages</p>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

// ============================================================
// FILE: /components/Contact.tsx
// ============================================================
/*
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    const mailtoLink = `mailto:sonngoc.nguyen@hyperisland.se?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Son,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`)}`;
    try {
      window.location.href = mailtoLink;
      setSubmitStatus({ type: 'success', message: 'Email client opened! If it didn\'t open automatically, please contact me directly at sonngoc.nguyen@hyperisland.se' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Unable to open email client. Please contact me directly at sonngoc.nguyen@hyperisland.se' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sonngoc.nguyen@hyperisland.se", link: "mailto:sonngoc.nguyen@hyperisland.se" },
    { icon: Phone, label: "Phone", value: "+46 767666509", link: "tel:+46767666509" },
    { icon: MapPin, label: "Location", value: "Stockholm, Sweden", link: null }
  ];

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground text-sm">
              Feel free to reach out through any of these methods. I typically respond within 24 hours.
              The contact form will open your email client to send me a direct message.
            </p>
          </div>
          <div className="space-y-3">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg"><info.icon className="w-4 h-4 text-primary" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-medium text-sm hover:text-primary transition-colors">{info.value}</a>
                      ) : (
                        <span className="font-medium text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-3">
            <div className="text-xs font-medium">Areas of Collaboration</div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary text-primary text-xs">Growth Marketing</Badge>
              <Badge variant="outline" className="border-secondary text-secondary text-xs">Sustainability Strategy</Badge>
              <Badge variant="outline" className="border-tertiary text-tertiary text-xs">UX Research</Badge>
              <Badge variant="outline" className="border-accent text-accent-foreground text-xs">Content Creation</Badge>
              <Badge variant="outline" className="border-secondary text-secondary text-xs">Brand Development</Badge>
            </div>
          </div>
        </div>
        <Card>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="text-xs" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="text-xs" required />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="subject" className="text-xs">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" className="text-xs" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={4} className="text-xs" required />
              </div>
              {submitStatus.type && (
                <div className={`flex items-center gap-2 p-3 rounded-lg text-xs ${submitStatus.type === 'success' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                  {submitStatus.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {submitStatus.message}
                </div>
              )}
              <Button type="submit" className="w-full text-xs" disabled={isSubmitting}>
                <Send className="w-3 h-3 mr-2" />{isSubmitting ? 'Opening Email...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
*/

// ============================================================
// FILE: /components/Footer.tsx
// ============================================================
/*
import { MapPin, Linkedin, Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-primary/10 to-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <Logo size="md" />
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <address className="not-italic">
                Vega, Handen<br />13648, Stockholm<br />Sweden
              </address>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('creative-work')} className="text-muted-foreground hover:text-primary transition-colors text-left">Content Creation</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Contact</button>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-foreground">Connect</h3>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/soninsthlm/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary/10 rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com/foodstuckers.sthlm" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary/10 rounded-lg transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="mailto:sonngoc.nguyen@hyperisland.se" className="p-2 hover:bg-primary/10 rounded-lg transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Son Nguyen. Made with Love</p>
        </div>
      </div>
    </footer>
  );
}
*/

// ============================================================
// NOTES FOR CLAUDE CODE:
// ============================================================
// 1. This project uses Tailwind CSS v4 with custom CSS variables for theming
// 2. The green color theme uses: primary (#16a34a), secondary (#15803d), tertiary (#14532d), quaternary (#166534)
// 3. UI components (shadcn/ui) are in /components/ui/ - you'll need to set those up separately
// 4. Images use figma:asset imports - replace with your actual image paths
// 5. The project uses motion (framer-motion) for animations
// 6. Hash-based routing (#about, #creative-work, etc.) for shareable section links
// 7. CV downloads link to GitHub: https://github.com/JensonNg/Son_Nguyen_CV.pdf/blob/main/Son_Nguyen_CV.pdf
// 8. Contact form uses mailto: links (no backend needed)
// 9. Deploy URL: https://son-creative-portfolio.figma.site/
// ============================================================

export {};
