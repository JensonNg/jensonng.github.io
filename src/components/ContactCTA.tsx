import { Button } from "./ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactCTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="glass glass-highlight rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let's <span className="text-brand-ink">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in collaboration? Whether it's growth marketing, content creation, or brand strategy – I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="https://linkedin.com/in/soninsthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground font-semibold shadow-glow-strong px-8"
              >
                <Linkedin className="w-4 h-4 mr-2" /> Connect on LinkedIn
              </Button>
            </a>
            <a href="mailto:sonngoc.nguyen@hyperisland.se">
              <Button
                variant="outline"
                className="border-primary text-brand-ink hover:bg-primary hover:text-primary-foreground px-8"
              >
                <Mail className="w-4 h-4 mr-2" /> Email Me
              </Button>
            </a>
          </div>
          <Link to="/contact" className="inline-block text-sm text-muted-foreground hover:text-brand-ink transition-colors">
            or fill out a contact form <ArrowRight className="w-3 h-3 inline ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
