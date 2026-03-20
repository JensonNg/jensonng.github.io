import { MapPin, Linkedin, Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="glass-strong border-t border-white/[0.06]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Address */}
          <div className="space-y-4">
            <Logo size="md" />
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <address className="not-italic">
                Vega, Handen<br />
                13648, Stockholm<br />
                Sweden
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('creative-work')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Content Creation
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-foreground">Connect</h3>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/soninsthlm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/foodstuckers.sthlm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sonngoc.nguyen@hyperisland.se"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Son Nguyen. Made with Love</p>
        </div>
      </div>
    </footer>
  );
}