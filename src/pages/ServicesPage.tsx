import { useState } from "react";
import {
  Megaphone,
  Video,
  PenTool,
  BarChart3,
  Sparkles,
  ArrowRight,
  Check,
  MessageSquare,
  Layers,
  Target,
  TrendingUp,
  Camera,
  FileText,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  deliverables: string[];
  tools: string[];
  idealFor: string;
}

const packages: ServicePackage[] = [
  {
    id: "growth-marketing",
    title: "Growth Marketing Strategy",
    subtitle: "Data-Driven Campaigns",
    description:
      "End-to-end marketing strategy that bridges data-driven insights with creative storytelling. From audience research to campaign execution, I help brands grow sustainably.",
    icon: <TrendingUp className="w-7 h-7" />,
    accentFrom: "#f2994a",
    accentTo: "#f2c94c",
    glowColor: "rgba(242,201,76,0.2)",
    deliverables: [
      "Marketing strategy & roadmap",
      "Audience research & segmentation",
      "Campaign planning & execution",
      "Performance tracking & optimization",
      "Monthly reporting & insights",
    ],
    tools: ["Google Analytics", "HubSpot", "Salesforce", "Meta Ads", "LinkedIn Ads"],
    idealFor: "Startups & scale-ups looking to build sustainable growth engines",
  },
  {
    id: "content-creation",
    title: "Content Creation & Video",
    subtitle: "Visual Storytelling",
    description:
      "Compelling short-form video content, social media assets, and visual storytelling that captures attention and drives engagement across platforms.",
    icon: <Video className="w-7 h-7" />,
    accentFrom: "#f2994a",
    accentTo: "#eb5757",
    glowColor: "rgba(242,153,74,0.2)",
    deliverables: [
      "Short-form video production (Reels, TikTok)",
      "Social media content calendar",
      "Visual asset creation & design",
      "Food & lifestyle photography",
      "Video editing & post-production",
    ],
    tools: ["Premiere Pro", "After Effects", "Canva", "Figma", "iPhone Photography"],
    idealFor: "Brands wanting to elevate their social media presence with authentic content",
  },
  {
    id: "ux-writing",
    title: "UX Writing & Copywriting",
    subtitle: "Words That Convert",
    description:
      "Microcopy, product copy, and conversion-focused writing that guides users through seamless digital experiences while maintaining brand voice consistency.",
    icon: <PenTool className="w-7 h-7" />,
    accentFrom: "#f2c94c",
    accentTo: "#6fcf97",
    glowColor: "rgba(111,207,151,0.2)",
    deliverables: [
      "UX microcopy & interface text",
      "Landing page copy & CTAs",
      "Email marketing sequences",
      "Brand voice guidelines",
      "A/B testing copy variations",
    ],
    tools: ["Figma", "Notion", "Google Optimize", "Mailchimp", "Hemingway"],
    idealFor: "Product teams and digital platforms needing clear, conversion-focused copy",
  },
  {
    id: "communications",
    title: "Communications Strategy",
    subtitle: "Brand & PR",
    description:
      "Strategic communications that build brand authority and stakeholder trust. From press releases to internal comms, I craft messaging that resonates.",
    icon: <MessageSquare className="w-7 h-7" />,
    accentFrom: "#6fcf97",
    accentTo: "#f2c94c",
    glowColor: "rgba(242,201,76,0.2)",
    deliverables: [
      "Communication hierarchy & framework",
      "Press releases & media kits",
      "Stakeholder messaging",
      "Crisis communication planning",
      "Internal communications strategy",
    ],
    tools: ["Salesforce", "Mailchimp", "Notion", "Slack", "PR Newswire"],
    idealFor: "Organizations needing unified, strategic messaging across all channels",
  },
];

function PackageCard({
  pkg,
  isExpanded,
  onToggle,
}: {
  pkg: ServicePackage;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
        isExpanded
          ? "ring-1 ring-primary/30 shadow-[0_0_40px_" + pkg.glowColor + "]"
          : "glass-highlight hover:shadow-[0_0_30px_" + pkg.glowColor + "]"
      }`}
    >
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left focus:outline-none group"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="p-3 rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${pkg.accentFrom}15, ${pkg.accentTo}15)`,
            }}
          >
            <span
              style={{
                background: `linear-gradient(135deg, ${pkg.accentFrom}, ${pkg.accentTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {pkg.icon}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${pkg.accentFrom}20, ${pkg.accentTo}20)`,
                  color: pkg.accentFrom,
                }}
              >
                {pkg.subtitle}
              </span>
            </div>
            <h3 className="text-xl font-bold">{pkg.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Expand Arrow */}
          <div
            className={`p-2 rounded-full transition-all duration-300 ${
              isExpanded ? "rotate-90 bg-primary/10" : "group-hover:bg-muted"
            }`}
          >
            <ArrowRight
              className={`w-5 h-5 transition-colors ${
                isExpanded ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-5">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Deliverables */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              What You Get
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {pkg.deliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: pkg.accentFrom }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {pkg.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
            <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-medium text-primary">Ideal for: </span>
              <span className="text-xs text-muted-foreground">{pkg.idealFor}</span>
            </div>
          </div>

          {/* CTA */}
          <Link to="/contact">
            <Button
              className="w-full mt-2 font-semibold"
              style={{
                background: `linear-gradient(135deg, ${pkg.accentFrom}, ${pkg.accentTo})`,
                color: "#000",
              }}
            >
              Let's Discuss This Package
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>("growth-marketing");

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Creative Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            What I Can <span className="text-primary">Offer</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Flexible creative packages tailored to your needs – from growth marketing strategy
            to content creation and everything in between.
          </p>
        </div>

        {/* How I Work Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Discovery",
                description: "We start with a conversation to understand your goals, audience, and challenges.",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: "Strategy",
                description: "I craft a tailored approach combining data insights with creative solutions.",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "Execution",
                description: "Delivering measurable results while building sustainable brand growth.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-bold text-primary">0{i + 1}</span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            <h2 className="text-xl font-semibold text-primary">Service Packages</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
          </div>

          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isExpanded={expandedId === pkg.id}
              onToggle={() => handleToggle(pkg.id)}
            />
          ))}
        </div>

        {/* Custom Package Note */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass glass-highlight rounded-2xl p-8 text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-r from-[#f2994a]/20 to-[#f2c94c]/20 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Need a Custom Package?</h3>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Every brand is unique. I'm happy to create a tailored package that combines
              elements from multiple services to perfectly fit your needs and budget.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-[#f2994a] to-[#f2c94c] hover:from-[#e0893e] hover:to-[#e0b93e] text-black font-semibold mt-2">
                Let's Chat About Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
