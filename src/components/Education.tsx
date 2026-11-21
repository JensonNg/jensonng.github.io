import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  const education: {
    institution: string;
    degree: string;
    specialization?: string;
    period: string;
    location: string;
    description?: string;
    achievements?: string[];
  }[] = [
    {
      institution: "Hyper Island",
      degree: "Emerging Tech for Creatives (HVE, 65 credits)",
      specialization: "Pass with distinction in 4 of 7 modules",
      period: "2025 – 2026",
      location: "Stockholm, Sweden",
    },
    {
      institution: "Hyper Island",
      degree: "UX Design (HVE, 80 credits)",
      specialization: "Pass with distinction in 5 of 7 modules",
      period: "2023 – 2024",
      location: "Stockholm, Sweden",
    },
    {
      institution: "Hyper Island",
      degree: "Sustainability Change Leadership (HVE, 55 credits)",
      specialization: "Pass with distinction in Leading in Complexity",
      period: "2023 – 2024",
      location: "Stockholm, Sweden",
    },
    {
      institution: "Hyper Island",
      degree: "Future Scenarios (HVE, 15 credits)",
      specialization: "Strategic foresight & scenario planning",
      period: "2023",
      location: "Stockholm, Sweden",
    },
    {
      institution: "Södertörn University",
      degree: "MSc Environmental Science, Communications for Public Health",
      period: "2021 – 2023",
      location: "Stockholm, Sweden",
      description: "Combines environmental science with communication strategy, with a focus on public health and sustainability communication.",
      achievements: [
        "Environmental communication strategies",
        "Sustainability advocacy",
        "Research methodology",
      ]
    },
    {
      institution: "Silliman University",
      degree: "Academic Fellowship, Environmental Education",
      period: "2018",
      location: "Philippines",
    },
    {
      institution: "Hanoi University of Natural Resources and Environment",
      degree: "Bachelor of Engineering in Marine Management",
      period: "2014 – 2018",
      location: "Hanoi, Vietnam",
    }
  ];

  const certifications = [
    "LinkedIn Content & Creative Design · LinkedIn Marketing Academy (2026)",
    "LinkedIn Advertising Fundamentals · LinkedIn Marketing Academy (2026)",
    "English for Digital Marketers · Linköping University, pass with distinction (2023)",
    "Google Ads Essential Training",
    "SEO Foundations & Keyword Strategy",
    "Introduction to Generative AI",
    "Figma for UX Design",
    "Master Digital Marketing",
    "LinkedIn Sales Navigator Best Practices",
    "Search Inside Yourself"
  ];

  const languages = [
    { name: "English", level: "Full professional proficiency" },
    { name: "Swedish", level: "Intermediate (B1/B2)" },
    { name: "Vietnamese", level: "Native" },
  ];

  return (
    <div className="p-6">
      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="overflow-hidden border-l-4 border-l-primary glass">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-brand-ink" />
                    {edu.degree}
                  </CardTitle>
                  <div className="text-sm text-brand-ink font-medium">{edu.institution}</div>
                  {edu.specialization && (
                    <p className="text-muted-foreground text-sm">{edu.specialization}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            {edu.description && (
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
              
              {edu.achievements && (
              <div className="space-y-2">
                <div className="font-medium flex items-center gap-2 text-xs">
                  <Award className="w-3 h-3 text-brand-ink" />
                  Key Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <Badge key={achIndex} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
              )}
            </CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="glass glass-highlight border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="font-medium mb-2 text-sm">Additional Certifications</div>
              <p className="text-xs text-muted-foreground">
                Continuous learning in digital marketing, advertising and AI
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-primary/50 text-brand-ink hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="glass glass-highlight border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="font-medium text-sm">Languages</div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="text-sm font-medium text-brand-ink">{lang.name}</div>
                  <div className="text-xs text-muted-foreground">{lang.level}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}