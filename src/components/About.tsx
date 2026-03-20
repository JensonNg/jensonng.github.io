import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Target, Users, Lightbulb, Video } from "lucide-react";
import { Link } from "react-router-dom";
import sonProfileImage from 'figma:asset/1e960cafd215c602f918461bdf659ed69ec10c28.png';

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
    // Dispatch custom event to expand the section
    const expandEvent = new CustomEvent('expandSection', {
      detail: { sectionId }
    });
    window.dispatchEvent(expandEvent);
  };

  return (
    <div className="p-6 space-y-8">
        {/* Top: Text + Profile Image */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Growth Marketing Manager who bridges conversion-focused copy with sustainable brand building.
              With expertise in UX Writing + Communications Strategy, I help purpose-driven brands scale authentically.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl">
                My <span className="bg-gradient-to-r from-[#f2994a] to-[#f2c94c] bg-clip-text text-transparent">Creative Approach</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I combine UX Writing principles with growth strategy to create messaging that converts and connects.
                At Mitigram, I've built comprehensive communication hierarchies that drive user engagement while
                maintaining authentic brand voice across all platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My environmental science background gives me a unique lens for translating complex concepts into
                compelling, actionable brand stories. I specialize in sustainable growth strategies for conscious brands,
                leveraging user psychology to craft conversion-focused copy that resonates with purpose-driven consumers. ✨
              </p>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative max-w-[320px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
                <ImageWithFallback
                  src={sonProfileImage}
                  alt="Son Nguyen - Growth Marketing Manager"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Stats + What Makes Me Different – full width */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Achievement Stats */}
          <div className="glass glass-highlight rounded-xl p-6">
            <h4 className="text-base font-medium text-foreground text-center mb-6">My Impact by Numbers</h4>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-primary font-bold">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Me Different */}
          <div className="glass glass-highlight rounded-xl p-4 space-y-4">
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
              <Link to="/about#experience">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-black"
                >
                  See My Experience <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}