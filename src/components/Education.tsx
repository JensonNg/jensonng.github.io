import { Badge } from "./ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science — Environmental Science",
    school: "Stockholm University",
    period: "2018 – 2021",
    location: "Stockholm, Sweden",
    description:
      "Specialized in environmental communication and sustainability management. Thesis focused on corporate sustainability reporting and greenwashing in marketing.",
    tags: ["Sustainability", "Environmental Policy", "Research Methods"],
  },
  {
    degree: "Creative Writing & Communications",
    school: "Online / Self-directed",
    period: "2021 – Present",
    location: "Remote",
    description:
      "Continuous learning through courses in copywriting, digital marketing, content strategy, and visual storytelling.",
    tags: ["Copywriting", "Content Strategy", "Digital Marketing"],
  },
];

export function Education() {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <div
          key={edu.degree}
          className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school} · {edu.location}</p>
                </div>
                <Badge variant="outline" className="text-xs shrink-0">
                  {edu.period}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
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
