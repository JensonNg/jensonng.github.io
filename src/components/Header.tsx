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
    // Update URL hash
    window.location.hash = id;
    
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Handle initial load with hash and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Go to home"
        >
          <Logo size="md" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* My Information Group */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>My Information</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('about')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          About
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('education')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Education
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('experience')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Experience
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('skills')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Skills
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Contact
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* My Work Group */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>My Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('creative-work')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Content Creation
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('projects')}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          Projects
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Social Links and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/soninsthlm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/foodstuckers.sthlm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:sonngoc.nguyen@hyperisland.se"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            size="sm"
          >
            Let's talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {/* My Information Group */}
            <div className="border-b pb-2">
              <button
                onClick={() => setMobileMyInfoOpen(!mobileMyInfoOpen)}
                className="flex items-center justify-between w-full text-left hover:text-primary transition-colors py-2"
              >
                <span>My Information</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMyInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMyInfoOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('education')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>

            {/* My Work Group */}
            <div className="border-b pb-2">
              <button
                onClick={() => setMobileMyWorkOpen(!mobileMyWorkOpen)}
                className="flex items-center justify-between w-full text-left hover:text-primary transition-colors py-2"
              >
                <span>My Work</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMyWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMyWorkOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    onClick={() => scrollToSection('creative-work')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Content Creation
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="block text-left hover:text-primary transition-colors py-2 w-full"
                  >
                    Projects
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t">
              <a 
                href="https://www.linkedin.com/in/soninsthlm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/foodstuckers.sthlm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:sonngoc.nguyen@hyperisland.se"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            
            {/* Mobile CTA Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="mt-4 w-full"
            >
              Let's talk
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}