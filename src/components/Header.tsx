import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { Linkedin, Mail, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/soninsthlm/", label: "LinkedIn", Icon: Linkedin, external: true },
  { href: "https://instagram.com/foodstuckers.sthlm", label: "Instagram", Icon: Instagram, external: true },
  { href: "mailto:sonngoc.nguyen@hyperisland.se", label: "Email", Icon: Mail, external: false },
];

const ctaClass =
  "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const closeMobile = () => setIsMobileMenuOpen(false);

  // Transparent over the top of the page, solid once content scrolls under it.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(closeMobile, [location.pathname]);

  const isActive = (path: string) =>
    path === "/blog" ? location.pathname.startsWith("/blog") : location.pathname === path;

  const solid = scrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none ${
        solid ? "bg-background/85 backdrop-blur-xl border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 min-w-0">
          <Link to="/" className="rounded-lg shrink-0" aria-label="Go to home">
            <Logo size="md" />
          </Link>
          {/* On phones the blog sits next to the logo, one tap away instead of inside the menu. */}
          <Link
            to="/blog"
            aria-current={isActive("/blog") ? "page" : undefined}
            className={`md:hidden inline-flex min-h-10 items-center px-3 text-sm font-medium transition-colors hover:text-foreground ${
              isActive("/blog") ? "text-brand-ink" : "text-muted-foreground"
            }`}
          >
            Blog
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActive(to) ? "text-brand-ink" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <ThemeToggle isDark={isDark} onToggle={toggle} />
          <Link to="/contact" className={`${ctaClass} ml-2`}>
            Let's talk
          </Link>
        </div>

        {/* On phones the main action stays in the bar; only secondary links go in the menu. */}
        <div className="flex md:hidden items-center gap-1">
          <Link to="/contact" className={`${ctaClass} mr-1 px-4`}>
            Let's talk
          </Link>
          <ThemeToggle isDark={isDark} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl shadow-black/20"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMobile}
                aria-current={isActive(to) ? "page" : undefined}
                className={`min-h-11 flex items-center px-3 rounded-lg transition-colors ${
                  isActive(to) ? "bg-primary/10 text-brand-ink" : "hover:bg-muted"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex items-center gap-2 pt-4 mt-2 border-t border-border">
              {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
