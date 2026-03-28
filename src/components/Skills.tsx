import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Palette,
  Megaphone,
  Heart,
  Languages,
  Award,
  Lightbulb,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Communication",
      icon: Megaphone,
      color: "text-primary",
      bgColor: "bg-primary/10 border-primary/20 text-primary",
      skills: [
        "Content Creation", "Marketing Planning", "Branding Strategy",
        "Project Management", "Copywriting", "LinkedIn Ads",
        "WordPress", "HubSpot", "Salesforce"
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      color: "text-secondary",
      bgColor: "bg-secondary/10 border-secondary/20 text-secondary",
      skills: [
        "Canva", "Visual Communication", "Adobe Creative Suite",
        "UI/UX Design", "Figma", "HTML/CSS"
      ]
    },
    {
      title: "Research & Analytics",
      icon: Lightbulb,
      color: "text-tertiary",
      bgColor: "bg-tertiary/10 border-tertiary/20 text-tertiary",
      skills: [
        "Market Research", "User Research",
        "Data Analysis", "A/B Testing"
      ]
    },
    {
      title: "Sustainability & Social Impact",
      icon: Heart,
      color: "text-accent-foreground",
      bgColor: "bg-accent/10 border-accent/20 text-accent-foreground",
      skills: [
        "Environmental Communication", "Sustainable Strategy",
        "Stakeholder Engagement", "CSR Communications",
        "Social Impact Measurement"
      ]
    }
  ];

  const languages = [
    { language: "Vietnamese", level: "Native", flag: "🇻🇳" },
    { language: "English", level: "Fluent", flag: "🇬🇧" },
    { language: "Swedish", level: "Conversational", flag: "🇸🇪" }
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
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${category.bgColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
            <CardContent className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span className="font-medium text-xs">{lang.language}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {lang.level}
                  </Badge>
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
