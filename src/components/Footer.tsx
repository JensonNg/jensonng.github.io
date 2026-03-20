import { MapPin, Linkedin, Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating content that connects.<br />
              Growth marketing meets sustainable impact.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/in/soninsthlm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/foodstuckers.sthlm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:sonngoc.nguyen@hyperisland.se"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Explore</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link to="/about#cv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                CV & Certificates
              </Link>
              <Link to="/brand" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Brand Book
              </Link>
              <span className="text-sm text-muted-foreground/50 flex items-center gap-1.5">
                Blog <span className="text-[10px] text-primary/60 border border-primary/20 rounded-full px-1.5 py-0.5">Coming Soon</span>
              </span>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:sonngoc.nguyen@hyperisland.se"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                sonngoc.nguyen@hyperisland.se
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Stockholm, Sweden
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-4 py-5 flex items-center justify-center text-xs text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} Son Nguyen. Made with Love <span className="text-primary">&#9829;</span></p>
        </div>
      </div>
    </footer>
  );
}
