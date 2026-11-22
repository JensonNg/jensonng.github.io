import { blogPosts, type BlogPost } from "../data/blogPosts";
import { FAQS } from "../data/faqs";
import { otherProjects } from "../data/projects";
import { caseStudies, type CaseStudy } from "../data/caseStudies";

export const SITE_URL = "https://jensonng.github.io";
export const SITE_NAME = "Son Nguyen";
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-thumbnail.png`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/soninsthlm/";

const SUMMARY =
  "Marketing Manager in Stockholm with eight years across brand, content, campaigns, PR and events in Sweden and Vietnam. I turn complex B2B products into clear stories.";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  type: "website" | "article" | "profile";
  jsonLd: Record<string, unknown>[];
  /** ISO date, used for articles and the sitemap */
  modified?: string;
}

interface StaticPage {
  path: string;
  title: string;
  description: string;
  /** One line for llms.txt */
  summary: string;
  type?: PageMeta["type"];
}

// Public pages, in the order they appear in the sitemap and llms.txt.
export const STATIC_PAGES: StaticPage[] = [
  {
    path: "/",
    title: "Son Nguyen - Marketing Manager in Stockholm | Brand, Content & B2B",
    description: SUMMARY,
    summary: "who Son is, key numbers, selected work, services, testimonials and FAQ",
  },
  {
    path: "/about",
    title: "About Son Nguyen - Marketing Manager in Stockholm",
    description:
      "Background, experience, education and CV of Son Nguyen: eight years in brand, content, campaigns and PR across Sweden and Vietnam, and an MSc in Environmental Science.",
    summary: "background, work experience, education, skills, languages, certifications and CV",
    type: "profile",
  },
  {
    path: "/projects",
    title: "Projects - Son Nguyen",
    description:
      "Case studies and projects by Son Nguyen, from the Alfred for Banks AI launch at Mitigram to campaigns that reached 350K people for social enterprises in Vietnam.",
    summary: "case studies and projects with roles, periods and results",
  },
  {
    path: "/services",
    title: "Services - Son Nguyen",
    description:
      "Growth marketing strategy, content and video, UX writing and communications: how Son Nguyen helps B2B and sustainability-driven teams.",
    summary: "service packages: growth marketing, content and video, UX writing, communications",
  },
  {
    path: "/blog",
    title: "Blog - Son Nguyen",
    description:
      "Stories on brand, growth and a circular future: notes from a Vietnamese storyteller in Stockholm.",
    summary: "articles on UX research, brand storytelling, business strategy and sustainability",
  },
  {
    path: "/contact",
    title: "Contact Son Nguyen",
    description:
      "Get in touch with Son Nguyen, Marketing Manager in Stockholm, about roles, projects or collaborations.",
    summary: "contact form, email and location",
  },
  {
    path: "/brand-book",
    title: "Sowilo Brand Book - Son Nguyen",
    description:
      "The personal brand identity of Son Nguyen: the Sowilo rune mark, logo system, Solar Amber colours and typography.",
    summary: "personal brand identity: logo, colours, typography and design principles",
  },
  {
    path: "/privacy",
    title: "Privacy Policy - Son Nguyen",
    description: "How this website handles personal data from the contact form and while you browse.",
    summary: "privacy policy",
  },
];

const PERSON_ID = `${SITE_URL}/#person`;

export function personJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Son Nguyen",
    alternateName: "Son Ngoc Nguyen",
    jobTitle: "Marketing Manager",
    description: SUMMARY,
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    email: "mailto:sonngoc.nguyen@hyperisland.se",
    worksFor: [
      { "@type": "Organization", name: "Mitigram", description: "B2B trade finance platform" },
      { "@type": "Organization", name: "Bachable.io", url: "https://bachable.io" },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Södertörn University" },
      { "@type": "EducationalOrganization", name: "Hyper Island" },
      { "@type": "CollegeOrUniversity", name: "Hanoi University of Natural Resources and Environment" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MSc Environmental Science, Communications for Public Health",
    },
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
    knowsLanguage: ["vi", "en", "sv"],
    knowsAbout: [
      "B2B marketing",
      "Brand strategy",
      "Content marketing",
      "Growth marketing",
      "Public relations",
      "Campaign management",
      "UX writing",
      "UX research",
      "Sustainability communication",
      "Environmental science",
    ],
    sameAs: [LINKEDIN_URL, "https://medium.com/@sonngoc.nguyen", "https://github.com/JensonNg"],
  };
}

function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Son Nguyen - Marketing Manager",
    url: SITE_URL,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
  };
}

function faqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function absolute(src: string): string {
  return src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

function blogPostingJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: absolute(post.cover),
    inLanguage: post.lang,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@id": PERSON_ID, "@type": "Person", name: "Son Nguyen", url: SITE_URL },
  };
}

function caseStudyJsonLd(study: CaseStudy): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    dateModified: study.updated,
    image: study.cover ? absolute(study.cover) : DEFAULT_IMAGE,
    inLanguage: "en",
    url: `${SITE_URL}/work/${study.slug}`,
    mainEntityOfPage: `${SITE_URL}/work/${study.slug}`,
    about: { "@type": "Organization", name: study.client },
    author: { "@id": PERSON_ID, "@type": "Person", name: "Son Nguyen", url: SITE_URL },
  };
}

function clip(text: string, max = 160): string {
  const plain = text.replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, plain.lastIndexOf(" ", max - 1)) + "...";
}

/** Metadata for a public URL, or null for anything that is not a public page. */
export function getPageMeta(pathname: string): PageMeta | null {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const base = [personJsonLd(), websiteJsonLd()];

  const page = STATIC_PAGES.find((p) => p.path === path);
  if (page) {
    const jsonLd = [...base];
    if (path === "/") jsonLd.push(faqJsonLd());
    if (path === "/about") {
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: `${SITE_URL}/about`,
        mainEntity: { "@id": PERSON_ID },
      });
    }
    return {
      path,
      title: page.title,
      description: page.description,
      image: DEFAULT_IMAGE,
      type: page.type ?? "website",
      jsonLd,
    };
  }

  const workSlug = path.startsWith("/work/") ? path.slice("/work/".length) : null;
  const study = workSlug ? caseStudies.find((c) => c.slug === workSlug) : undefined;
  if (study) {
    return {
      path,
      title: `${study.title} | Case study by Son Nguyen`,
      description: clip(study.summary),
      image: study.cover ? absolute(study.cover) : DEFAULT_IMAGE,
      type: "article",
      jsonLd: [...base, caseStudyJsonLd(study)],
      modified: study.updated,
    };
  }

  const slug = path.startsWith("/blog/") ? path.slice("/blog/".length) : null;
  const post = slug ? blogPosts.find((p) => p.slug === slug) : undefined;
  if (post) {
    return {
      path,
      title: `${post.title} | Son Nguyen`,
      description: clip(post.excerpt),
      image: absolute(post.cover),
      type: "article",
      jsonLd: [...base, blogPostingJsonLd(post)],
      modified: post.date,
    };
  }
  return null;
}

/** Every public path, for prerendering and the sitemap. */
export function publicPaths(): string[] {
  return [
    ...STATIC_PAGES.map((p) => p.path),
    ...caseStudies.map((c) => `/work/${c.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ];
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** The <head> tags for a page, as HTML, for the prerendered files. */
export function headTags(meta: PageMeta): string {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
    // "<" is escaped so text inside the data can never close the script tag.
    ...meta.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.join("\n    ");
}

export function sitemapXml(today: string): string {
  const urls = publicPaths().map((path) => {
    const meta = getPageMeta(path)!;
    const loc = `${SITE_URL}${path === "/" ? "/" : path}`;
    return `  <url><loc>${loc}</loc><lastmod>${meta.modified ?? today}</lastmod></url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

/** A plain-text guide to the site for AI assistants (llmstxt.org). */
export function llmsTxt(): string {
  const featured = otherProjects.slice(0, 8);
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const lines = [
    "# Son Nguyen",
    "",
    "> Son Nguyen is a Marketing Manager in Stockholm, Sweden, with eight years across brand, content, campaigns, PR and events in Sweden and Vietnam. Son turns complex B2B products into clear stories, with a focus on B2B, sustainability and human-centred design.",
    "",
    "- Current work: sole hands-on marketer at Mitigram, a B2B trade finance platform (positioning, content, paid media, media relations, events and sales enablement); marketing and branding for Bachable.io, an online music notation editor.",
    "- Has worked with: H&M, Epidemic Sound, CARE International, Mitigram, Bachable.io, RFSL Utbildning.",
    "- Education: MSc Environmental Science, Communications for Public Health (Södertörn University); UX Design, Sustainability Change Leadership and Emerging Tech for Creatives (Hyper Island); Bachelor of Engineering in Marine Management.",
    "- Languages: Vietnamese (native), English (fluent), Swedish (conversational).",
    `- Contact: sonngoc.nguyen@hyperisland.se, ${LINKEDIN_URL}`,
    "",
    "## Pages",
    "",
    ...STATIC_PAGES.filter((p) => p.path !== "/privacy").map(
      (p) => `- [${p.title.split(" | ")[0]}](${SITE_URL}${p.path === "/" ? "/" : p.path}): ${p.summary}`,
    ),
    "",
    "## Case studies",
    "",
    ...caseStudies.map((c) => {
      const results = c.metrics.map((m) => `${m.value} ${m.label}`).join(", ");
      return `- [${c.title}](${SITE_URL}/work/${c.slug}): ${clip(c.summary, 200)}${results ? ` Results: ${results}.` : ""}`;
    }),
    "",
    "## Other projects",
    "",
    ...featured.map((p) => {
      const results = p.metrics.map((m) => `${m.value} ${m.label}`).join(", ");
      // Some projects store a team name instead of dates in `period`.
      const period = /\d/.test(p.period) ? ` (${p.period})` : "";
      return `- ${p.title}${period}: ${p.role}.${results ? ` Results: ${results}.` : ""}`;
    }),
    "",
    "## Blog posts",
    "",
    ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) (${p.date}): ${clip(p.excerpt, 200)}`),
    "",
    "## Optional",
    "",
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ];
  return lines.join("\n");
}
