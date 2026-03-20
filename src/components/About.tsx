import { Badge } from "./ui/badge";

const stats = [
  { label: "Years of experience", value: "3+" },
  { label: "Brands worked with", value: "15+" },
  { label: "Content pieces created", value: "200+" },
  { label: "Countries reached", value: "10+" },
];

const differentiators = [
  {
    title: "Sustainability-first mindset",
    description:
      "I combine marketing expertise with a genuine passion for environmental impact, helping brands communicate their sustainability story authentically.",
  },
  {
    title: "Data meets creativity",
    description:
      "I use analytics to inform creative decisions — ensuring every campaign is both compelling and measurable.",
  },
  {
    title: "Multicultural fluency",
    description:
      "With roots in Vietnam and experience across Europe, I bring cross-cultural insight to global marketing strategies.",
  },
];

export function About() {
  return (
    <div className="space-y-8">
      {/* Bio */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I'm a Growth Marketing Strategist with a background in Environmental Science and
            Communications. I specialize in helping sustainable and purpose-driven brands build
            meaningful connections with their audiences through strategic content, data-driven
            campaigns, and authentic storytelling.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently based in Stockholm, Sweden, I've worked with brands across multiple
            industries — from clean tech startups to established sustainability-focused companies —
            helping them grow their digital presence and convert audiences into advocates.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Based in</div>
          <div className="font-medium">Stockholm, Sweden</div>
          <div className="text-sm text-muted-foreground mt-4">Languages</div>
          <div className="flex flex-wrap gap-2">
            {["English", "Vietnamese", "Swedish (basic)"].map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <div>
        <h3 className="font-semibold mb-4">What makes me different?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
            >
              <h4 className="font-medium text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
