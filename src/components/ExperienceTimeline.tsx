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
  description?: string;
  impact?: string;
  logo?: string;
  linkedinUrl?: string;
  accentColor: string;
}

const experiences: TimelineEntry[] = [
  // === LATEST EXPERIENCE ===
  {
    company: "Mitigram",
    location: "B2B Fintech & AI · Stockholm",
    positions: [
      {
        title: "Marketing Manager",
        period: "Aug 2024 – Present",
        responsibilities: [
          "Built the brand guidelines and tone of voice; designed a Communication Hierarchy that governs messaging across teams",
          "Co-own the Alfred for Banks AI product launch: 30+ SQLs and two banks onboarded since June 2026",
          "Delivered ~4.8M paid impressions at SEK 38.56 CPM (LinkedIn, Google)",
          "Run the webinar programme: ~120 registrations per session, ~90% attendance, 60–70% converting to MQLs",
          "Run media relations via Cision: 6–7 releases in six months, earning 4 articles and 12 further mentions",
          "Wrote the first customer case study (UniCredit and Brückner Group, ~80% shorter guarantee processing)",
          "Run presence at Sibos and GTR; build battlecards, one-pagers and decks for sales and account management",
          "Own employer branding and NPS; mentored five marketing interns; built an AI knowledge hub for content",
        ],
      },
    ],
    description:
      "A B2B trade finance platform connecting corporates, banks and insurers. As the sole hands-on marketer, I own positioning, content, paid media, media relations, events and sales enablement end to end.",
    impact:
      "30+ SQLs and two banks onboarded from the Alfred for Banks AI launch; ~4.8M paid impressions at SEK 38.56 CPM",
    accentColor: "#f2c94c",
  },
  {
    company: "Bachable.io",
    location: "Self-employed · Remote, Sweden",
    positions: [
      {
        title: "Marketing & Branding",
        period: "Oct 2025 - Present",
        responsibilities: [
          "Lead brand strategy and messaging for a new collaborative online music-notation platform",
          "Write onboarding content and product storytelling, from alpha through public launch",
          "Support growth since the public launch, now approaching 300 users",
        ],
      },
    ],
    description:
      "A collaborative online music-notation platform where musicians write, engrave and share scores together.",
    impact: "Publicly launched, now approaching 300 users",
    accentColor: "#f2994a",
  },
  {
    company: "Voluntarily Baking / Melt'd",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Social Media & Content Producer",
        period: "Aug 2026 – Present",
        responsibilities: [
          "Film, photograph and edit short-form video for TikTok and Instagram for a baking creator and her pop-up brand",
          "Grew Melt'd to 1,500 organic followers from 15 posts; three pop-ups, each sold out; videos peak at 18K views",
        ],
      },
    ],
    description:
      "A baking creator and her pop-up dessert brand in Stockholm.",
    impact: "1,500 organic followers from 15 posts and three sold-out pop-ups",
    accentColor: "#f2994a",
  },
  {
    company: "Epidemic Sound",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Copyright Screener",
        period: "Oct 2024 – Aug 2025",
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
        period: "Sep 2024 – May 2025",
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
  {
    company: "RFSL Utbildning",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Communications Officer & Content Creator",
        period: "Aug 2022 – Dec 2023",
        responsibilities: [
          "Marketed B2B inclusion training with IKEA, Cevera and Humble Brands",
          "Grew organic social following by 300%+ in three months; produced six campaign videos and three photoshoots",
          "Created paid social, email and newsletter content; managed Salesforce for member communications",
        ],
      },
    ],
    description:
      "The training arm of RFSL, Sweden's largest LGBTQ+ rights organisation, offering inclusion training to organisations.",
    impact: "300%+ organic social growth in three months; B2B inclusion training with IKEA, Cevera and Humble Brands",
    accentColor: "#f2c94c",
  },
  // === EARLIER EXPERIENCE ===
  {
    company: "Devoteam G Cloud",
    location: "Stockholm, Sweden",
    positions: [
      {
        title: "Digital Marketing Specialist (Internship)",
        period: "Jan 2024 – Mar 2024",
        responsibilities: [
          "Contributed to UX wireframe design for a new Generative AI service landing page",
          "Developed content strategy and a podcast template to showcase client case studies",
        ],
      },
    ],
    description: "Google Cloud partner helping organisations adopt cloud and AI.",
    accentColor: "#f2c94c",
  },
  {
    company: "ITAgenturen",
    location: "Sweden",
    positions: [
      {
        title: "Content Developer",
        period: "Feb 2023 – Apr 2023",
        responsibilities: [],
      },
    ],
    accentColor: "#f2994a",
  },
  {
    company: "An Nam Restaurang",
    location: "Uppsala, Sweden",
    positions: [
      {
        title: "Marketing & Sales Manager",
        period: "Jul 2021 – Mar 2022",
        responsibilities: [],
      },
    ],
    accentColor: "#6fcf97",
  },
  {
    company: "Seed Planter",
    location: "Ho Chi Minh City, Vietnam",
    positions: [
      {
        title: "Marketing Team Lead & Community Coordinator",
        period: "Nov 2019 – Apr 2022",
        responsibilities: [
          "Built and led a team of four marketers across six campaigns",
          "Created brand guidelines, key visuals and sponsorship proposals",
          "Ran Facebook Ads and email campaigns for the community",
          "Ran community events with 20+ impact entrepreneurs and partners",
        ],
      },
    ],
    description: "An impact enterprise community supporting social entrepreneurs in Vietnam.",
    impact: "Led a team of four marketers across six campaigns",
    accentColor: "#f2c94c",
  },
  {
    company: "Hanoi Queer Organization / Hanoi Pride",
    location: "Hanoi, Vietnam",
    positions: [
      {
        title: "Communications Manager",
        period: "Jan 2019 – Jun 2020",
        responsibilities: [
          "Led major media campaigns on social media; recruited and supervised communications staff and volunteers",
          "Represented the organisation with 20+ press and media partners",
        ],
      },
    ],
    description: "The organisers of Hanoi Pride, promoting LGBTQ+ visibility and equality in Vietnam.",
    accentColor: "#f2994a",
  },
  {
    company: "CARE International / GreenHub",
    location: "Vietnam",
    positions: [
      {
        title: "Digital Marketing & Communications Officer",
        period: "May 2018 – Jul 2020",
        responsibilities: [
          "Co-designed and delivered Vietnam's first Zero Waste Academy, training 60 environmental officers in three cities",
          "Ran Facebook campaigns for social enterprise brands; wrote quarterly reports for international donors",
        ],
      },
    ],
    description:
      "International humanitarian and environmental organisations working on poverty, sustainable communities and waste.",
    impact: "Co-designed Vietnam's first Zero Waste Academy, training 60 environmental officers",
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
                isExpanded ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"
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
                {entry.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                )}

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
                {entry.impact && (
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
                )}
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
          <span className="text-primary font-medium">8 years</span> across brand, content,
          campaigns, PR and events in{" "}
          <span className="text-primary font-medium">Sweden & Vietnam</span>
        </p>
      </div>
    </div>
  );
}
