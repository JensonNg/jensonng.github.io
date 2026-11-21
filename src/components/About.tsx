import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Target, Users, Lightbulb, Video } from "lucide-react";
import { Link } from "react-router-dom";
import sonProfileImage from 'figma:asset/1e960cafd215c602f918461bdf659ed69ec10c28.png';

export function About() {
  const achievements = [
    { number: "8", label: "Years in Marketing" },
    { number: "4.8M", label: "Paid Impressions" },
    { number: "30+", label: "SQLs from AI Launch" },
    { number: "3", label: "Languages" }
  ];

  const skillGroups = [
    { title: "Brand & Positioning", skills: ["Brand guidelines", "Tone of voice", "Messaging governance", "Battlecards"] },
    { title: "Content & PR", skills: ["Case studies", "Thought leadership", "Press releases", "Media relations", "Employer branding"] },
    { title: "Campaigns & Events", skills: ["LinkedIn & Google Ads", "Webinars", "Trade shows", "Product launches"] },
    { title: "MarTech & AI", skills: ["HubSpot", "Salesforce", "GA4", "WordPress", "SEO & AI search", "AI content workflows"] },
    { title: "Creative Tools", skills: ["Figma", "Canva", "Photoshop", "Illustrator", "Final Cut Pro", "Filming & photography"] },
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
              I'm a generalist marketer with eight years across brand, content, campaigns, PR and events in Sweden
              and Vietnam. I turn complex products into clear stories, and I build from evidence.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl">
                My <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Creative Approach</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As the sole hands-on marketer at Mitigram, a B2B trade finance platform, I own positioning, content,
                paid media, media relations, events and sales enablement end to end. I built the brand guidelines and
                the Communication Hierarchy, and I co-own the launch of Alfred for Banks, our AI product.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trained as an engineer and environmental scientist, I take concepts from idea to delivery on my own,
                design my own materials and work well in international, cross-functional teams. ✨
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
                  alt="Son Nguyen - Marketing Manager"
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
                  <div className="text-4xl text-brand-ink font-bold">
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
                <Video className="w-4 h-4 text-brand-ink flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-foreground">Content Creation & Video Editing</p>
                  <p className="text-xs text-muted-foreground">Short-form video, Reels, and visual storytelling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-brand-ink flex-shrink-0 mt-0.5" />
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
                  className="w-full border-primary text-brand-ink hover:bg-primary hover:text-primary-foreground"
                >
                  See My Experience <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="glass glass-highlight rounded-xl p-6 space-y-5">
          <h4 className="text-base font-medium text-foreground text-center">Professional Skills</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <p className="text-xs font-semibold text-brand-ink">{group.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}