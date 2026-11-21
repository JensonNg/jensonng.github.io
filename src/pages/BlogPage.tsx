import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ChefHat, Briefcase, Sparkles, Instagram, Linkedin } from "lucide-react";
import { posts, CATEGORIES, formatDate, type BlogCategory } from "../lib/blog";
import { usePageMeta } from "../lib/usePageMeta";
import { ContactCTA } from "../components/ContactCTA";

const CATEGORY_ICONS: Record<BlogCategory, typeof ChefHat> = {
  kitchen: ChefHat,
  work: Briefcase,
  crossover: Sparkles,
};

type Filter = "all" | BlogCategory;

export function BlogPage() {
  const [filter, setFilter] = useState<Filter>("all");
  usePageMeta(
    "Blog – Son Nguyen",
    "Recipes, food notes and lessons from marketing: a marketer who cooks, and a cook who thinks like a marketer."
  );

  const visible = filter === "all" ? posts : posts.filter((p) => p.category === filter);
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    ...(Object.keys(CATEGORIES) as BlogCategory[]).map((key) => ({ key, label: CATEGORIES[key].label })),
  ];

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A marketer who cooks, and a cook who thinks like a marketer. Recipes and food notes from
            Stockholm, and lessons from the marketing work I do every day.
          </p>
        </div>

        {posts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter posts by category">
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {filter !== "all" && (
          <p className="text-center text-sm text-muted-foreground -mt-6 mb-8">
            {CATEGORIES[filter].description}
          </p>
        )}

        {posts.length === 0 ? (
          <EmptyState />
        ) : visible.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No {CATEGORIES[filter as BlogCategory].label} posts yet. They're on the way.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {visible.map((post) => {
              const Icon = CATEGORY_ICONS[post.category];
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group glass glass-highlight rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.01] hover:border-primary/40"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/15 to-secondary/10 overflow-hidden relative">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt={post.coverAlt ?? ""}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary/50" />
                      </div>
                    )}
                    {post.draft && (
                      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide bg-black/70 text-primary border border-primary/40 rounded-full px-2 py-0.5">
                        Draft · only on localhost
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      <Icon className="w-3.5 h-3.5" />
                      {CATEGORIES[post.category].label}
                    </span>
                    <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.summary && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.summary}</p>
                    )}
                    <div className="mt-auto pt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingMinutes} min
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <ContactCTA />
    </main>
  );
}

function EmptyState() {
  return (
    <div className="glass glass-highlight rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-center space-y-5">
      <ChefHat className="w-10 h-10 text-primary mx-auto" />
      <h2 className="text-xl font-semibold">The first posts are simmering</h2>
      <p className="text-muted-foreground leading-relaxed">
        Recipes from a Vietnamese kitchen in Stockholm, and honest notes from my work in marketing.
        Until then, you'll find what I'm cooking and working on here:
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://instagram.com/foodstuckers.sthlm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 hover:bg-primary/10 text-sm font-medium transition-colors"
        >
          <Instagram className="w-4 h-4" /> @foodstuckers.sthlm
        </a>
        <a
          href="https://www.linkedin.com/in/soninsthlm/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 hover:bg-primary/10 text-sm font-medium transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
