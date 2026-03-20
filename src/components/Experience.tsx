import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Growth Marketing Manager",
    company: "Sustainable Brands Co.",
    period: "Jan 2023 – Present",
    location: "Stockholm, Sweden",
    type: "Full-time",
    description:
      "Leading growth marketing initiatives for a portfolio of sustainable consumer brands. Responsible for performance marketing, content strategy, and brand partnerships.",
    achievements: [
      "Grew organic social following by 140% in 12 months",
      "Launched email marketing program reaching 25k subscribers",
      "Reduced customer acquisition cost by 30% through channel optimization",
    ],
    tags: ["Growth Marketing", "SEO/SEM", "Email Marketing", "Analytics"],
  },
  {
    role: "Content & Marketing Strategist",
    company: "Green Communications Agency",
    period: "Jun 2021 – Dec 2022",
    location: "Stockholm, Sweden",
    type: "Full-time",
    description:
      "Developed and executed content marketing strategies for clients in sustainability, clean tech, and environmental sectors.",
    achievements: [
      "Managed content for 8+ client accounts simultaneously",
      "Produced 100+ pieces of long-form content, video scripts, and social media campaigns",
      "Increased average client engagement rate from 2.1% to 5.8%",
    ],
    tags: ["Content Strategy", "Copywriting", "Social Media", "Video Production"],
  },
  {
    role: "Marketing & Communications Intern",
    company: "WWF Sweden",
    period: "Jan 2021 – May 2021",
    location: "Stockholm, Sweden",
    type: "Internship",
    description:
      "Supported the communications team with campaign creation, social media management, and donor engagement content.",
    achievements: [
      "Assisted with Earth Hour 2021 digital campaign",
      "Created content for Instagram and LinkedIn channels",
      "Helped grow newsletter subscriber base by 8%",
    ],
    tags: ["NGO Communications", "Campaign Management", "Social Media"],
  },
];

export function Experience() {
  return (
    <div className="space-y-4">
      {experience.map((job) => (
        <div
          key={job.role + job.company}
          className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" className="text-xs">{job.type}</Badge>
                  <Badge variant="outline" className="text-xs">{job.period}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
              <ul className="space-y-1 mb-3">
                {job.achievements.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
