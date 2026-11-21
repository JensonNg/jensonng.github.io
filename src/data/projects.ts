export interface Metric {
  value: string;
  label: string;
}

export interface LogoBrand {
  name: string;
  initials: string;
  color: string;
  bgFrom: string;
  bgTo: string;
}

export interface Project {
  title: string;
  description: string;
  brand: LogoBrand;
  technologies: string[];
  period: string;
  organization: string;
  role: string;
  quote: string;
  readMoreUrl: string;
  featured: boolean;
  metrics: Metric[];
}

export const projects: Project[] = [
  {
    title: "Bachable.io - Brand & Launch",
    description: "Shaping the brand of Bachable.io, a new collaborative online music-notation platform where musicians write, engrave and share scores together. Leading brand strategy and messaging, writing onboarding content, and telling the product's story from alpha to public launch.",
    brand: {
      name: "Bachable.io",
      initials: "b",
      color: "#f54900",
      bgFrom: "#18181b",
      bgTo: "#431407",
    },
    technologies: ["Brand Strategy", "Messaging", "Onboarding Content", "Product Storytelling"],
    period: "Oct 2025 - Present",
    organization: "Bachable.io",
    role: "Marketing & Branding",
    quote: "Write, engrave and share scores together.",
    readMoreUrl: "https://bachable.io",
    featured: true,
    metrics: [
      { value: "~300", label: "Users" },
    ],
  },
  {
    title: "Personal Brand Identity - The Sowilo Mark",
    description: "Designed a personal brand identity rooted in Norse mythology. The Sowilo rune (ᛊ) — the Elder Futhark symbol for 'S' meaning 'sun' — becomes a lightning bolt mark that bridges Vietnamese heritage with Scandinavian home. Developed a complete brand system including logo variations, color palette, typography, and brand narrative.",
    brand: {
      name: "Son Nguyen",
      initials: "ᛊ",
      color: "#F2C94C",
      bgFrom: "#111111",
      bgTo: "#1a1a0a",
    },
    technologies: ["Brand Identity", "Logo Design", "Visual System", "Brand Narrative"],
    period: "2026",
    organization: "Personal Brand",
    role: "Brand Designer & Strategist",
    quote: "A Vietnamese name initialed in Viking script — two cultures woven into one mark.",
    readMoreUrl: "/brand-book",
    featured: true,
    metrics: [
      { value: "8", label: "Logo variations" },
      { value: "6", label: "Brand colors" },
      { value: "4", label: "Key symbols" },
    ],
  },
  {
    title: "Final UX Design Project: Asekio Web Builder",
    description: "Collaborated on UX transformation for Asekio, an AI website builder. Enhanced onboarding via user journey mapping & prototyping, laid the foundation for their modular design system, and boosted engagement through usability testing & iterative design.",
    brand: {
      name: "Asekio",
      initials: "A",
      color: "#6366f1",
      bgFrom: "#1e1b4b",
      bgTo: "#312e81",
    },
    technologies: ["UX Design", "Design Systems", "Usability Testing", "AI/UX Integration"],
    period: "Mar – Jun 2024",
    organization: "Team Project",
    role: "UX Designer & Strategist",
    quote: "Structure meets story – and strategy leads both.",
    readMoreUrl: "https://www.hampusdesign.com/projekt/asekio",
    featured: true,
    metrics: [],
  },
  {
    title: "RFSL Utbildning – Digital Marketing & Communication",
    description: "Created portfolios and general offers for the company to bring to workshops and conferences. Collaborated with clients and stakeholders to get testimonials and interviews. Designed sales materials and built brand guidelines and key visuals for the products.",
    brand: {
      name: "RFSL Utbildning",
      initials: "R",
      color: "#e040a0",
      bgFrom: "#4a0e2e",
      bgTo: "#2d0a1e",
    },
    technologies: ["Digital Marketing", "Brand Guidelines", "Sales Materials", "Stakeholder Relations"],
    period: "Aug 2022 – Jun 2023",
    organization: "RFSL",
    role: "Digital Marketing & Communication",
    quote: "Building brand visibility that amplifies voices for equal rights.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "2,000", label: "Website visitors" },
      { value: "400", label: "LinkedIn followers in 3 months" },
      { value: "300", label: "Event participants" },
    ],
  },
  {
    title: "Hanoi Pride 2019 – Internal Secretary for Communication",
    description: "Oversaw all communication activities and controlled quality of media including images, videos, and articles. Responsible for communicating with external media outlets, resulting in significant press coverage and donor engagement.",
    brand: {
      name: "Hanoi Pride",
      initials: "HP",
      color: "#f472b6",
      bgFrom: "#831843",
      bgTo: "#500724",
    },
    technologies: ["Media Relations", "PR & Press", "Event Communication", "Campaign Management"],
    period: "Apr 2019 – Jun 2020",
    organization: "Hanoi Pride",
    role: "Internal Secretary for Communication",
    quote: "164K people reached – amplifying visibility through strategic storytelling.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "164K", label: "People reached on Facebook" },
      { value: "7,000", label: "Pride Parade participants" },
      { value: "~20", label: "News articles & interviews" },
      { value: "~20", label: "Donors & partners" },
    ],
  },
  {
    title: "Seed Planter – Marketing Lead",
    description: "Established and maintained Facebook fanpage and monitored campaigns. Designed and implemented strategic plans for social enterprise projects. Recruited delegates for workshops, supervised volunteers, and prepared content and press for stakeholders.",
    brand: {
      name: "Seed Planter",
      initials: "SP",
      color: "#4ade80",
      bgFrom: "#052e16",
      bgTo: "#14532d",
    },
    technologies: ["Marketing Strategy", "Social Media", "Content Creation", "Stakeholder Communication"],
    period: "Jun 2020 – Feb 2021",
    organization: "Seed Planter",
    role: "Marketing Lead",
    quote: "Revamped branding and led teams for impactful social enterprise projects.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "350K", label: "People reached on Facebook" },
      { value: "6,000", label: "Organic likes & follows" },
      { value: "1,500", label: "Event participants/year" },
    ],
  },
  {
    title: "Hanoi Queer – Communication Team Leader",
    description: "Allocated human resources and supported project communication. Supervised all communication activities, controlled quality of media including images, videos, and articles. Managed marketing campaigns and the organization's website.",
    brand: {
      name: "Hanoi Queer",
      initials: "HQ",
      color: "#c084fc",
      bgFrom: "#3b0764",
      bgTo: "#581c87",
    },
    technologies: ["Campaign Management", "Content Quality", "Social Media", "Website Management"],
    period: "Communication Team",
    organization: "Hanoi Queer",
    role: "Communication Team Leader",
    quote: "150K people reached – building community through strategic digital presence.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "150K", label: "People reached on Facebook" },
      { value: "20,000", label: "Organic likes & follows" },
      { value: "51", label: "Events & campaigns" },
      { value: "1,100", label: "Event participants/year" },
    ],
  },
  {
    title: "GreenHub – Communication Officer",
    description: "Allocated human resources and supported project communication for environmental initiatives. Supervised communication activities, controlled quality of media, and managed marketing campaigns while building a new website for the organization.",
    brand: {
      name: "GreenHub",
      initials: "GH",
      color: "#22d3ee",
      bgFrom: "#042f2e",
      bgTo: "#134e4a",
    },
    technologies: ["Environmental Communication", "Digital Marketing", "Website Development", "Storytelling"],
    period: "Sep 2019 – Jul 2020",
    organization: "GreenHub",
    role: "Communication Officer",
    quote: "Elevating ethnic minority start-ups through digital marketing and impactful storytelling.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "65K", label: "People reached on Facebook" },
      { value: "3,000", label: "Organic likes & follows" },
      { value: "500", label: "Event participants/year" },
    ],
  },
  {
    title: "Ara-Tay Coffee – Digital Marketing Manager",
    description: "Created portfolios and applications to call for sponsorship. Collected stories and information from local people and stakeholders. Managed marketing campaigns and built brand guidelines and key visuals for the products.",
    brand: {
      name: "Ara-Tay Coffee",
      initials: "AT",
      color: "#f59e0b",
      bgFrom: "#451a03",
      bgTo: "#78350f",
    },
    technologies: ["Brand Guidelines", "Visual Identity", "Sponsorship", "Community Storytelling"],
    period: "Digital Marketing",
    organization: "Ara-Tay Coffee",
    role: "Digital Marketing Manager",
    quote: "Building brand identity from the ground up, rooted in local stories and community.",
    readMoreUrl: "#",
    featured: false,
    metrics: [
      { value: "8,000", label: "People reached on Facebook" },
      { value: "1,681", label: "Organic likes & follows" },
      { value: "400", label: "Event participants/year" },
    ],
  },
];
