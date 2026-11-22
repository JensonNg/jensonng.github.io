import alfredCover from "../images/work/alfred-cover.webp";

/**
 * Case studies, shown at /work/<slug>, on the Projects page and in Selected work.
 *
 * Every case study follows the same template, so visitors learn it once:
 * at a glance, results, challenge, approach, results in words, what I learned,
 * then testimonials, related reading and the next case study.
 *
 * To add one: copy an entry and give it a unique `slug`.
 * - Drafts live in the `drafts` list and only show in `npm run dev`, with a
 *   banner. The production build drops them completely: they are not in the
 *   live site, the JavaScript, the sitemap or llms.txt. To publish one, move it
 *   to the `published` list and change `status` to "published".
 * - Text supports **bold**, [links](https://...) and [[notes to self]].
 *   [[Notes]] show as red "To fill in" marks: remove them all before publishing.
 * - Credit partners and agencies in `credits`: say what they made and what you did.
 * - `gallery` takes images you have the right to show (export them from your
 *   own files, not from someone else's website).
 */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  status: "published" | "draft";
  /** ISO date of the last meaningful update, for the sitemap */
  updated: string;
  client: string;
  /** Short label for cards and the eyebrow, e.g. "Brand identity & launch" */
  category: string;
  /** H1 of the case study page */
  title: string;
  /** One or two sentences under the title; also the page description */
  summary: string;
  /** One line with the headline result, for cards */
  cardResult: string;
  cover?: string;
  coverAlt?: string;
  /** Fallback tile when there is no cover image */
  brand: { initials: string; color: string; bgFrom: string; bgTo: string };
  /** The "At a glance" panel, e.g. Role, Partner, Timeline, Scope */
  facts: { label: string; value: string; href?: string }[];
  metrics: CaseStudyMetric[];
  challenge: string[];
  approach: { title: string; text: string; points?: string[] }[];
  results: string[];
  learnings: string[];
  /** Who else made this, e.g. the agency behind the visual identity */
  credits?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  /** ids from src/data/testimonials.ts */
  testimonials: string[];
  /** slugs from src/data/blogPosts.ts */
  relatedPosts: string[];
  link?: { label: string; href: string };
}

const published: CaseStudy[] = [
  {
    slug: "alfred-for-banks",
    status: "published",
    updated: "2026-11-21",
    client: "Mitigram",
    category: "Brand identity & AI launch",
    title: "Alfred for Banks: giving an AI agent a face",
    summary:
      "How Mitigram launched Alfred, an AI agent for trade finance, with a visual identity banks can recognise and a launch story they can understand.",
    cardResult: "30+ SQLs and two banks onboarded since June 2026",
    cover: alfredCover,
    coverAlt: "Cover reading Alfred for Banks, brand identity and AI launch",
    brand: { initials: "A", color: "#F2C94C", bgFrom: "#111111", bgTo: "#2a2216" },
    facts: [
      { label: "Client", value: "Mitigram, B2B trade finance platform" },
      { label: "My role", value: "Marketing Manager, co-owner of the launch" },
      { label: "Identity partner", value: "Souk Agency", href: "https://www.soukagency.com/cases/alfred" },
      { label: "Audience", value: "Banks and their trade finance teams" },
      { label: "Year", value: "2026" },
      { label: "Scope", value: "Visual identity, launch story, campaigns" },
    ],
    metrics: [
      { value: "30+", label: "Sales-qualified leads since June 2026" },
      { value: "2", label: "Banks onboarded" },
    ],
    challenge: [
      "Mitigram was launching Alfred, an AI agent that turns banks' manual, email-based trade finance workflows into an automated, agentic process. It needed a visual identity that marketing and communication could build on from day one.",
      "The harder part: an AI agent for trade finance is a new idea for many banks. The brand had to do some of the explaining, and it had to feel modern and trustworthy to an audience that values trust over novelty.",
    ],
    approach: [
      {
        title: "Its own product, clearly part of the family",
        text: "Alfred had to feel like a product of its own while still clearly belonging to Mitigram. We set three jobs for the identity:",
        points: [
          "Make Alfred easy to recognise in marketing and communication",
          "Help new customers understand what the product does",
          "Feel modern and trustworthy for a bank audience",
        ],
      },
      {
        title: "One team with the agency",
        text: "We worked with Souk Agency as one team, so the identity was shaped around how Mitigram would actually use it: in marketing, in sales conversations and in product communication.",
      },
      {
        title: "A system, not just a logo",
        text: "The result is a complete identity: a logo that gives the AI agent a clear face, a colour palette that sets Alfred apart while fitting with Mitigram, and usage guidelines so the team can apply it consistently across every channel.",
      },
      {
        title: "From identity to launch",
        text: "As co-owner of the Alfred for Banks launch, my job was to make the identity work in the market: in the launch story, the campaigns and the materials sales uses with banks.",
      },
    ],
    results: [
      "Alfred went from a new AI agent to a recognisable brand. Mitigram now has a visual identity for marketing, sales and communication, and an easier way to show new customers what Alfred does.",
      "With clear guidelines in place, the team keeps the brand consistent without going back to the agency for every new asset.",
      "Since June 2026, the launch has brought in **30+ sales-qualified leads** and **two banks** have been onboarded.",
    ],
    learnings: [
      "**New technology needs a face before it needs a feature list.** When the category is unfamiliar, recognition comes first and explanation follows.",
      "**Design around real use.** The identity got better because the agency saw how the team would actually use it, not just a brief.",
      "**Guidelines are the handover.** Clear usage rules are what let a small marketing team scale a brand on its own.",
    ],
    credits:
      "Visual identity (logo, colour palette and usage guidelines) by [Souk Agency](https://www.soukagency.com/cases/alfred), in collaboration with the Mitigram team. Launch, campaigns and go-to-market by Mitigram marketing.",
    gallery: [],
    testimonials: ["nicholas-kelly", "nathalie-sajda"],
    relatedPosts: ["your-ai-agent-needs-a-face", "why-b2b-fintech-brands-sound-the-same"],
  },
];

// `import.meta.env.DEV` is false in the production build, so this whole list is removed from it.
const drafts: CaseStudy[] = import.meta.env.DEV ? [
  {
    slug: "mitigram-brand-refresh",
    status: "draft",
    updated: "2026-11-21",
    client: "Mitigram",
    category: "Brand refresh",
    title: "Mitigram: one clear voice for a trade finance platform",
    summary:
      "Refreshing the Mitigram brand with new guidelines, a tone of voice and a Communication Hierarchy, so every team tells the same story.",
    cardResult: "Brand guidelines, tone of voice and a Communication Hierarchy",
    brand: { initials: "M", color: "#F2C94C", bgFrom: "#111111", bgTo: "#1f2a2a" },
    facts: [
      { label: "Client", value: "Mitigram, B2B trade finance platform" },
      { label: "My role", value: "Marketing Manager, project lead" },
      { label: "Worked with", value: "Executive team, Head of Marketing, sales, customer managers and agencies" },
      { label: "Timeline", value: "[[e.g. Nov 2024 - Mar 2025]]" },
      { label: "Deliverables", value: "Brand guidelines, tone of voice, Communication Hierarchy" },
    ],
    metrics: [],
    challenge: [
      "[[What was not working before the refresh? For example: messaging differed between sales, marketing and partners, or the visual identity felt dated next to the product.]]",
      "[[Why now? For example: a new product, new markets, or growing from start-up to scale-up.]]",
    ],
    approach: [
      {
        title: "A Communication Hierarchy",
        text: "Together with the executive team and the Head of Marketing, I built a Communication Hierarchy that sets the order of Mitigram's messages, so every team leads with the same story. [[Describe its levels in one or two sentences.]]",
      },
      {
        title: "Brand guidelines and tone of voice",
        text: "I wrote the brand guidelines and the tone of voice, covering [[which parts: logo use, colours, typography, imagery, writing rules]].",
      },
      {
        title: "Rolling it out",
        text: "I worked across agencies, sales, customer managers and partners to bring marketing content in line with the refreshed brand. [[Which touchpoints were updated first: website, sales deck, LinkedIn, events?]]",
      },
    ],
    results: [
      "[[What changed? Ideas: time saved creating materials, fewer off-brand assets, feedback from sales or leadership, website or LinkedIn numbers before and after.]]",
    ],
    learnings: ["[[One or two lessons, in your own words.]]"],
    gallery: [],
    testimonials: ["nicholas-kelly", "karl-yves-vallin"],
    relatedPosts: ["why-b2b-fintech-brands-sound-the-same"],
  },
] : [];

/** Case studies visible in this build: drafts only show in `npm run dev`. */
export const caseStudies: CaseStudy[] = [...published, ...drafts];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
