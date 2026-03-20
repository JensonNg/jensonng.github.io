import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Linkedin, Mail, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive(path) ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Go to home"
        >
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link to="/projects" className={navLinkClass("/projects")}>
            Projects
          </Link>
          <Link to="/services" className={navLinkClass("/services")}>
            Services
          </Link>
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

          <Link to="/contact">
            <Button size="sm">Let's talk</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            <Link
              to="/"
              onClick={closeMobile}
              className={`py-3 px-3 rounded-lg transition-colors ${
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobile}
              className={`py-3 px-3 rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={closeMobile}
              className={`py-3 px-3 rounded-lg transition-colors ${
                isActive("/projects")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/services"
              onClick={closeMobile}
              className={`py-3 px-3 rounded-lg transition-colors ${
                isActive("/services")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
            >
              Services
            </Link>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
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
            <Link to="/contact" onClick={closeMobile} className="pt-2">
              <Button size="sm" className="w-full">
                Let's talk
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
