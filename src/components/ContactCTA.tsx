import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactCTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="glass glass-highlight rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in collaboration? Whether it's growth marketing, content creation, or brand strategy – I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-[#f2994a] to-[#f2c94c] hover:from-[#e0893e] hover:to-[#e0b93e] text-black font-semibold shadow-[0_0_15px_rgba(242,201,76,0.3)] px-8"
              >
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="mailto:sonngoc.nguyen@hyperisland.se">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black px-8"
              >
                Email Me Directly
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
