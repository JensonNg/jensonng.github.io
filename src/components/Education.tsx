import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Malmö Universitet",
      degree: "Master's Degree in Communication for Development",
      specialization: "Digital Communication & Social Change",
      period: "2024 - 2026",
      location: "Malmö, Sweden",
      description: "Advanced studies in strategic communication for development and social change, focusing on digital transformation and human-centered communication strategies in international contexts.",
      achievements: [
        "Strategic communication for social impact",
        "Digital transformation methodologies",
        "Cross-cultural communication strategies",
        "Development communication theory"
      ]
    },
    {
      institution: "Södertörn Högskolan",
      degree: "Master's Degree in Environmental Science in Communications",
      specialization: "Environmental Communication & Sustainability",
      period: "2021 - 2023",
      location: "Stockholm, Sweden",
      description: "Specialized program combining environmental science with communication strategies, focusing on sustainability communication and environmental advocacy in digital contexts.",
      achievements: [
        "Environmental communication strategies",
        "Sustainability advocacy",
        "Research methodology",
        "Digital storytelling for environmental causes"
      ]
    }
  ];

  const certifications = [
    "Front-end Development (Mar-23)",
    "Learning Local SEO (Oct-22)",
    "Facebook Digital Marketing (Apr-22)",
    "Google Ads Essential Training (Aug-22)",
    "SEO Keyword Strategy (Aug-22)",
    "SEO Foundations (Aug-22)"
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
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <div className="text-sm text-primary font-medium">{edu.institution}</div>
                  <p className="text-muted-foreground text-sm">{edu.specialization}</p>
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
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
              
              <div className="space-y-2">
                <div className="font-medium flex items-center gap-2 text-xs">
                  <Award className="w-3 h-3 text-secondary" />
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="glass glass-highlight border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="font-medium mb-2 text-sm">Additional Certifications</div>
              <p className="text-xs text-muted-foreground">
                Continuous learning in digital marketing and development
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors text-xs"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}