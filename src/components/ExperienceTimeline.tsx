import { useState } from "react";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  Briefcase,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Badge } from "./ui/badge";

interface Position {
  title: string;
  period: string;
  responsibilities: string[];
}

interface TimelineEntry {
  company: string;
  location: string;
  positions: Position[];
  description: string;
  impact: string;
  logo?: string;
  linkedinUrl?: string;
  accentColor: string;
}

const experiences: TimelineEntry[] = [
  // === LATEST EMPLOYMENTS ===
  {
    company: "Mitigram",
    location: "Mitigram AB, Stockholm",
    positions: [
      {
        title: "Creative Marketing Strategist",
        period: "August 2024 - Present",
        responsibilities: [
          "Leads brand and growth strategy, bridging data-driven insights with design to elevate Mitigram's positioning in digital trade finance",
          "Coordinating all projects within Marketing and Communications to ensure consistency and alignment with brand vision",
          "Collaborating with Executive Team to build a new Communication Hierarchy for unified messaging",
          "Developing brand guidelines for cohesive storytelling and visual identity across all channels",
        ],
      },
    ],
    description:
      "A digital platform streamlining trade finance by connecting corporations, financial institutions, and insurers.",
    impact:
      "Built comprehensive communication hierarchy and enhanced brand consistency across all channels",
    accentColor: "#f2c94c",
  },
  {
    company: "Epidemic Sound",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Copyright Screener",
        period: "October 2024 - August 2025",
        responsibilities: [
          "Reviewed and validated music licensing compliance, ensuring copyright integrity across global content platforms",
          "Collaborating with team to optimize claims on YouTube, increasing revenue",
          "Demonstrating understanding of copyright laws related to music and content creation",
        ],
      },
    ],
    description:
      "Leading music and sound effects platform for content creators worldwide.",
    impact: "Optimized YouTube claims process resulting in measurable revenue increases",
    accentColor: "#f2994a",
  },
  {
    company: "H&M",
    location: "H&M, Stockholm",
    positions: [
      {
        title: "Senior Sales Advisor",
        period: "September 2024 - May 2025",
        responsibilities: [
          "Drove sales growth and enhanced customer experience through personalized styling",
          "Showcasing fashion expertise to enhance customer experience and promote new brand vision",
          "Collaborating with team members to achieve sales targets",
        ],
      },
    ],
    description:
      "Working at the second upgraded H&M store in the world, showcasing the new vision as a fashion brand.",
    impact:
      "Enhanced customer experience at flagship upgraded store showcasing H&M's new brand vision",
    accentColor: "#6fcf97",
  },
  // === EARLIER CAREER ===
  {
    company: "RFSL",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Program Officer",
        period: "April 2022 - December 2023",
        responsibilities: [
          "Spearheaded sexual health interventions and boosted digital engagement",
          "Collaborated with partners and clients for social media campaigns and press releases",
          "Created content and visual posts for Facebook ads, LinkedIn ads, and webinars",
          "Managed communication with members and donors through CRM (Salesforce)",
        ],
      },
    ],
    description:
      "Sweden's largest LGBTQ+ rights organization working for equal rights and representation.",
    impact:
      "Spearheaded sexual health interventions and boosted digital engagement",
    accentColor: "#f2994a",
  },
  {
    company: "Seed Planter",
    location: "Vietnam",
    positions: [
      {
        title: "Marketing Lead",
        period: "June 2020 - February 2021",
        responsibilities: [
          "Revamped branding and led teams for impactful projects during the period",
          "Establishing and maintaining Facebook fanpage, monitoring campaigns",
          "Designing and implementing the strategic plan for projects",
          "Recruiting delegates for workshops and supervising volunteers",
        ],
      },
    ],
    description:
      "Social enterprise focused on sustainable agriculture and community development.",
    impact:
      "Revamped branding and led teams delivering impactful social enterprise projects",
    accentColor: "#f2994a",
  },
  {
    company: "CARE",
    location: "Vietnam",
    positions: [
      {
        title: "Digital Marketer",
        period: "September 2019 - July 2020",
        responsibilities: [
          "Elevated ethnic minority start-ups via digital marketing and storytelling",
          "Spearheaded projects and website launch",
          "Created content strategies for sustainable development programs",
        ],
      },
    ],
    description:
      "International humanitarian organization dedicated to fighting global poverty and empowering communities.",
    impact:
      "Elevated ethnic minority start-ups through digital marketing and impactful storytelling",
    accentColor: "#f2994a",
  },
  {
    company: "Hanoi Pride",
    location: "Hanoi, Vietnam",
    positions: [
      {
        title: "Internal Secretary for Communications",
        period: "April 2019 - June 2020",
        responsibilities: [
          "Led media campaigns and facilitated Pride Parade collaboration",
          "Oversaw communication activities and controlled quality of media",
          "Responsible for communicating with external media outlets",
        ],
      },
    ],
    description:
      "Annual LGBTQ+ pride celebration promoting visibility and equality in Vietnam.",
    impact: "Led media campaigns and successful Pride Parade collaborations",
    accentColor: "#f2c94c",
  },
  {
    company: "GreenHub",
    location: "Vietnam",
    positions: [
      {
        title: "Communications Officer",
        period: "May 2018 - February 2019",
        responsibilities: [
          "Spearheaded projects and website launch for environmental initiatives",
          "Supervised communication activities and controlled quality of media",
          "Managed marketing campaign and built new website",
        ],
      },
    ],
    description:
      "Environmental NGO enabling sustainable communities through conservation and development.",
    impact:
      "Spearheaded projects and website launch for environmental initiatives",
    accentColor: "#6fcf97",
  },
];

function TimelineItem({
  entry,
  index,
  isExpanded,
  onToggle,
  isLast,
}: {
  entry: TimelineEntry;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative group">
      {/* Timeline connector line */}
      {!isLast && (
        <div
          className="absolute left-6 md:left-1/2 top-14 bottom-0 w-px md:-translate-x-px"
          style={{
            background: `linear-gradient(to bottom, ${entry.accentColor}40, ${entry.accentColor}10)`,
          }}
        />
      )}

      <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              isExpanded ? "scale-150" : "group-hover:scale-125"
            }`}
            style={{
              borderColor: entry.accentColor,
              backgroundColor: isExpanded ? entry.accentColor : "transparent",
              boxShadow: isExpanded ? `0 0 12px ${entry.accentColor}60` : "none",
            }}
          />
        </div>

        {/* Spacer for mobile */}
        <div className="w-12 flex-shrink-0 md:hidden" />

        {/* Content card */}
        <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? "" : ""}`}>
          <div
            className={`glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
              isExpanded
                ? "ring-1 shadow-lg"
                : "glass-highlight hover:scale-[1.01]"
            }`}
            style={{
              ringColor: isExpanded ? `${entry.accentColor}40` : undefined,
              boxShadow: isExpanded ? `0 0 30px ${entry.accentColor}15` : undefined,
            }}
            onClick={onToggle}
          >
            {/* Card header */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Company name */}
                  <div className="flex items-center gap-2 mb-1">
                    <Building2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: entry.accentColor }}
                    />
                    <h3 className="font-bold text-lg">{entry.company}</h3>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    {entry.location}
                  </div>

                  {/* Position titles */}
                  {entry.positions.map((pos, i) => (
                    <div key={i} className="mb-2 last:mb-0">
                      <div className="font-medium text-sm">{pos.title}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {pos.period}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expand indicator */}
                <div
                  className={`p-1.5 rounded-full transition-all duration-300 ${
                    isExpanded ? "bg-primary/10 rotate-180" : ""
                  }`}
                >
                  <ChevronDown
                    className="w-4 h-4 text-muted-foreground"
                    style={{ color: isExpanded ? entry.accentColor : undefined }}
                  />
                </div>
              </div>

              {/* Position count badge */}
              {entry.positions.length > 1 && (
                <Badge
                  variant="secondary"
                  className="mt-2 text-xs"
                  style={{
                    backgroundColor: `${entry.accentColor}15`,
                    color: entry.accentColor,
                  }}
                >
                  {entry.positions.length} positions
                </Badge>
              )}
            </div>

            {/* Expanded content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 space-y-4">
                <div
                  className="h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${entry.accentColor}30, transparent)`,
                  }}
                />

                {/* Company description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>

                {/* Responsibilities per position */}
                {entry.positions.map((pos, posIdx) => (
                  <div key={posIdx}>
                    {entry.positions.length > 1 && (
                      <h4
                        className="text-sm font-semibold mb-2 flex items-center gap-2"
                        style={{ color: entry.accentColor }}
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                        {pos.title}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {pos.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: entry.accentColor }}
                          />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Impact */}
                <div
                  className="flex items-start gap-2 p-3 rounded-xl"
                  style={{
                    backgroundColor: `${entry.accentColor}08`,
                    borderLeft: `2px solid ${entry.accentColor}40`,
                  }}
                >
                  <TrendingUp
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: entry.accentColor }}
                  />
                  <div>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: entry.accentColor }}
                    >
                      Impact:{" "}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {entry.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for the other side (desktop) */}
        <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      <div className="relative max-w-5xl mx-auto space-y-6">
        {/* Center line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

        {experiences.map((entry, index) => (
          <TimelineItem
            key={index}
            entry={entry}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      {/* Career summary */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-primary font-medium">7+ years</span> of experience across
          marketing, communications, and content creation in{" "}
          <span className="text-primary font-medium">Sweden & Vietnam</span>
        </p>
      </div>
    </div>
  );
}
