import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Palette, 
  Code, 
  Megaphone, 
  Heart, 
  Languages,
  Award,
  Lightbulb,
  Users
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Communication",
      icon: Megaphone,
      color: "text-primary",
      skills: [
        { name: "LinkedIn Ads", level: 85 },
        { name: "Content Creation", level: 95 },
        { name: "Copywriting", level: 88 },
        { name: "Marketing Planning", level: 95 },
        { name: "Branding Strategy", level: 90 },
        { name: "Project Management", level: 90 },
        { name: "WordPress", level: 70 },
        { name: "HubSpot", level: 65 },
        { name: "Salesforce", level: 60 }
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      color: "text-secondary",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Canva", level: 95 },
        { name: "HTML/CSS", level: 65 },
        { name: "UI/UX Design", level: 80 },
        { name: "Visual Communication", level: 90 }
      ]
    },
    {
      title: "Research & Analytics",
      icon: Lightbulb,
      color: "text-tertiary",
      skills: [
        { name: "Data Analysis", level: 75 },
        { name: "User Research", level: 86 },
        { name: "A/B Testing", level: 70 },
        { name: "Market Research", level: 87 }
      ]
    },
    {
      title: "Sustainability & Social Impact",
      icon: Heart,
      color: "text-accent-foreground",
      skills: [
        { name: "Environmental Communication", level: 95 },
        { name: "Sustainable Strategy", level: 90 },
        { name: "Social Impact Measurement", level: 85 },
        { name: "Stakeholder Engagement", level: 88 },
        { name: "CSR Communications", level: 87 }
      ]
    }
  ];

  const languages = [
    { language: "Vietnamese", level: "Native", percentage: 100, flag: "🇻🇳" },
    { language: "English", level: "Fluent", percentage: 95, flag: "🇬🇧" },
    { language: "Swedish", level: "Conversational", percentage: 60, flag: "🇸🇪" }
  ];

  const certifications = [
    {
      title: "Learn About AI Features Certificate Course",
      organization: "LinkedIn",
      year: "2025",
      type: "AI & Marketing",
      credentialId: "zvk3feih9yi5"
    },
    {
      title: "Master Digital Marketing",
      organization: "LinkedIn",
      year: "2022",
      type: "Digital Marketing",
      credentialId: "Available"
    },
    {
      title: "Figma for UX Design",
      organization: "LinkedIn",
      year: "2023",
      type: "UX Design",
      credentialId: "Available"
    },
    {
      title: "Mentor Recognition Certificate",
      organization: "Jobbsprånget",
      year: "2025",
      type: "Leadership",
      credentialId: "d3ffc26d-03cc-4a0a"
    }
  ];

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-sm">
                  <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                    <category.icon className="w-4 h-4" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-muted text-primary">
                  <Languages className="w-4 h-4" />
                </div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span className="font-medium text-xs">{lang.language}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                  <Progress value={lang.percentage} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-muted text-secondary">
                  <Award className="w-4 h-4" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-3 space-y-1">
                  <div className="font-medium text-xs">{cert.title}</div>
                  <p className="text-xs text-muted-foreground">{cert.organization}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground/80 mt-1">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}