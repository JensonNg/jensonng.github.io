import { marked } from "marked";
import { parseFrontmatter, type FrontmatterValue } from "./frontmatter";

export type BlogCategory = "kitchen" | "work" | "crossover";

export const CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  kitchen: {
    label: "Kitchen",
    description: "Recipes, food notes and Vietnamese-in-Sweden stories",
  },
  work: {
    label: "Work",
    description: "Lessons from B2B marketing, brand, campaigns and AI workflows",
  },
  crossover: {
    label: "Where They Meet",
    description: "Food brands, pop-ups and content through a marketer's eyes",
  },
};

export interface Recipe {
  servings?: string;
  prepTime?: number; // minutes
  cookTime?: number; // minutes
  ingredients: string[];
  steps: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: BlogCategory;
  summary: string;
  cover?: string;
  coverAlt?: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
  html: string;
  recipe?: Recipe;
}

const asString = (v: FrontmatterValue | undefined) => (typeof v === "string" ? v : "");
const asList = (v: FrontmatterValue | undefined) =>
  Array.isArray(v) ? v : typeof v === "string" && v ? [v] : [];
const asMinutes = (v: FrontmatterValue | undefined) => {
  const n = parseInt(asString(v), 10);
  return Number.isFinite(n) && n > 0 ? n : undefined;
};

// Every Markdown file directly in src/content/blog is a post.
// Files starting with "_" are ignored (templates live in src/content/blog/_templates).
const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function toPost(path: string, raw: string): BlogPost | null {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  if (slug.startsWith("_")) return null;

  const { data, body } = parseFrontmatter(raw);
  const category = (asString(data.category) || "kitchen") as BlogCategory;
  const ingredients = asList(data.ingredients);
  const steps = asList(data.steps);
  const words = body.split(/\s+/).filter(Boolean).length + ingredients.length * 4 + steps.length * 12;

  return {
    slug,
    title: asString(data.title) || slug,
    date: asString(data.date),
    category: category in CATEGORIES ? category : "kitchen",
    summary: asString(data.summary),
    cover: asString(data.cover) || undefined,
    coverAlt: asString(data.coverAlt) || undefined,
    tags: asList(data.tags),
    draft: asString(data.draft).toLowerCase() === "true",
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(body, { async: false }) as string,
    recipe:
      ingredients.length || steps.length
        ? {
            servings: asString(data.servings) || undefined,
            prepTime: asMinutes(data.prepTime),
            cookTime: asMinutes(data.cookTime),
            ingredients,
            steps,
          }
        : undefined,
  };
}

// Drafts are visible on localhost (npm run dev) but never on the live site.
export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => toPost(path, raw))
  .filter((p): p is BlogPost => p !== null && (import.meta.env.DEV || !p.draft))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string | undefined) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  const d = new Date(`${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function formatMinutes(minutes?: number) {
  if (!minutes) return undefined;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min`;
}
