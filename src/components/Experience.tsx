import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Mitigram",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Creative Marketing Strategist",
          period: "November 2024 - Present",
          responsibilities: [
            "Coordinating all projects within Marketing and Communications to ensure consistency and alignment with brand vision and strategic goals",
            "Collaborating closely with the Executive Team and Head of Marketing to build a new Communication Hierarchy that streamlines and unifies messaging, voice, and tone across all platforms and channels",
            "Developing and implementing brand guidelines to ensure cohesive storytelling and visual identity, delivering a seamless experience across all channels",
            "Working cross-functional collaboration with agencies, sales, customer managers, and partners to align marketing content and ensure a cohesive, engaging brand presence"
          ]
        },
        {
          title: "Marketing & Content Developer",
          period: "August 2024 - January 2025",
          responsibilities: [
            "Covering inbound marketing efforts within the Lead Generation team, supporting commercial teams through tailored campaigns targeting diverse customer segments",
            "Managing social media content creation, sales material development, and testimonial production to enhance brand visibility and support sales efforts",
            "Collaborating with marketing initiatives for commercial events, including planning, promotion, and execution to drive audience engagement",
            "Coordinating PR efforts and partner communications, crafting announcements and press releases for collaborative projects"
          ]
        }
      ],
      description: "A digital platform streamlining trade finance by connecting corporations, financial institutions, and insurers. It enables worldwide security and efficiency, and is moving toward the adoption of digitalisation within operational trading.",
      impact: "Built comprehensive communication hierarchy and enhanced brand consistency across all channels"
    },
    {
      company: "Epidemic Sound",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Copyright Screener",
          period: "October 2024 - August 2025",
          responsibilities: [
            "Reviewing short videos and categorising them to ensure proper copyright compliance",
            "Collaborating with team members to optimize claims on YouTube, resulting in increased revenue",
            "Demonstrating understanding of copyright laws related to music and content creation"
          ]
        }
      ],
      description: "Leading music and sound effects platform for content creators worldwide, ensuring proper copyright compliance and revenue optimization.",
      impact: "Optimized YouTube claims process resulting in measurable revenue increases"
    },
    {
      company: "H&M",
      location: "Stockholm, Stockholm County, Sweden",
      positions: [
        {
          title: "Senior Sales Advisor",
          period: "September 2024 - March 2025",
          responsibilities: [
            "Providing exceptional sales promotions and customer service for the Kids and Women's floors at the store",
            "Showcasing fashion expertise to enhance the customer experience and promote the new vision of the brand",
            "Collaborating with team members to achieve sales targets and create a welcoming shopping environment"
          ]
        }
      ],
      description: "Working at the second upgraded H&M store in the world, where we're aiming to leverage the customer experience and showcase our new vision as a fashion brand.",
      impact: "Enhanced customer experience at flagship upgraded store showcasing H&M's new brand vision"
    },
    {
      company: "RFSL (Swedish Federation for LGBTQ+ Rights)",
      location: "Stockholm, Sweden",
      positions: [
        {
          title: "Assistant Communication Officer and Content Creator",
          period: "August 2022 - June 2023",
          responsibilities: [
            "Collaborated with partners and clients for social media campaigns and press releases",
            "Created content and visual posts for Facebook ads, LinkedIn ads, and online webinars",
            "Prepared materials for email marketing, newsletters, and physical marketing materials",
            "Managed communication with members and donors through email marketing and CRM (Salesforce)"
          ]
        }
      ],
      description: "Sweden's largest LGBTQ+ rights organization working for equal rights and representation.",
      impact: "Enhanced digital engagement and donor communication through strategic content creation"
    }
  ];

  return (
    <div className="p-6">
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden glass">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {exp.positions.length} position{exp.positions.length > 1 ? 's' : ''}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                {exp.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="space-y-3 last:border-b-0 border-b border-border/30 pb-6 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{position.title}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3" />
                        {position.period}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {position.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-2 border-t border-border/30">
                <div className="text-xs">
                  <span className="font-medium text-primary">Impact: </span>
                  <span className="text-muted-foreground">{exp.impact}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}