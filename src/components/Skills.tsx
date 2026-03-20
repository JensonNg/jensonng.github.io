import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Marketing & Strategy",
    skills: [
      { name: "Growth Marketing", level: 90 },
      { name: "Content Strategy", level: 88 },
      { name: "Brand Development", level: 82 },
      { name: "Campaign Management", level: 85 },
    ],
  },
  {
    category: "Digital & Analytics",
    skills: [
      { name: "Google Analytics / GA4", level: 85 },
      { name: "SEO / SEM", level: 80 },
      { name: "Email Marketing (Mailchimp, Klaviyo)", level: 83 },
      { name: "Social Media Advertising", level: 80 },
    ],
  },
  {
    category: "Creative",
    skills: [
      { name: "Copywriting", level: 92 },
      { name: "Video Scripting & Production", level: 80 },
      { name: "Visual Storytelling", level: 78 },
      { name: "Figma / Design Basics", level: 70 },
    ],
  },
];

const tools = [
  "Google Analytics", "Notion", "HubSpot", "Mailchimp", "Klaviyo",
  "Figma", "Canva", "Adobe Premiere", "Meta Ads Manager", "LinkedIn Campaign Manager",
  "Ahrefs", "WordPress", "Webflow",
];

export function Skills() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="rounded-lg border border-border p-5">
            <h3 className="font-semibold text-sm mb-4">{cat.category}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-sm mb-3">Tools & Platforms</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
