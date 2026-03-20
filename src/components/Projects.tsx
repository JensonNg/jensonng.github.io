import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "EcoGrowth Campaign",
    company: "Sustainable Brands Co.",
    year: "2023",
    description:
      "End-to-end growth marketing campaign for a sustainable home products brand. Developed multi-channel strategy spanning email, social, and paid media resulting in 3x ROI.",
    outcomes: ["3x ROI", "+65% new customers", "1.2M reach"],
    tags: ["Growth Marketing", "Paid Media", "Email"],
    link: null,
  },
  {
    title: "Green Voice Content Series",
    company: "Green Communications Agency",
    year: "2022",
    description:
      "12-month content series for a clean tech client. Produced 50+ articles, video scripts, and social campaigns establishing them as a thought leader in sustainable tech.",
    outcomes: ["50+ content pieces", "+300% organic traffic", "Industry award nominee"],
    tags: ["Content Marketing", "SEO", "Thought Leadership"],
    link: null,
  },
  {
    title: "Youth Climate Action Hub",
    company: "Personal Project",
    year: "2021",
    description:
      "Built and grew a community platform connecting young climate activists. Managed content, partnerships, and community engagement strategy.",
    outcomes: ["2,000+ community members", "15 partner organizations", "Featured in Swedish media"],
    tags: ["Community Building", "Content Creation", "Partnerships"],
    link: null,
  },
];

export function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.company} · {project.year}
              </p>
            </div>
            {project.link && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View
                </a>
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-medium"
              >
                {outcome}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
