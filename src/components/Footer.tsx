import { MapPin, Linkedin, Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="glass-strong border-t border-white/[0.06]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Address */}
          <div className="space-y-4">
            <Link to="/">
              <Logo size="md" />
            </Link>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <address className="not-italic">
                Stockholm, Sweden
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about#cv"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                CV & Certificates
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
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
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground space-y-2">
          <p>&copy; {new Date().getFullYear()} Son Nguyen. Made with Love</p>
          <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
