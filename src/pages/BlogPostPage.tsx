import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, Timer, Flame, ChefHat, Briefcase, Sparkles, Linkedin, Check } from "lucide-react";
import { getPost, posts, CATEGORIES, formatDate, formatMinutes, type BlogPost, type BlogCategory } from "../lib/blog";
import { usePageMeta } from "../lib/usePageMeta";
import { ContactCTA } from "../components/ContactCTA";

const SITE = "https://jensonng.github.io";

const CATEGORY_ICONS: Record<BlogCategory, typeof ChefHat> = {
  kitchen: ChefHat,
  work: Briefcase,
  crossover: Sparkles,
};

const isoDuration = (minutes?: number) => (minutes ? `PT${minutes}M` : undefined);

// Structured data so search engines can show the post (and recipe details) in results.
function useStructuredData(post: BlogPost | undefined) {
  useEffect(() => {
    if (!post) return;
    const url = `${SITE}/blog/${post.slug}`;
    const image = post.cover ? (post.cover.startsWith("http") ? post.cover : SITE + post.cover) : undefined;
    const author = { "@type": "Person", name: "Son Nguyen", url: SITE };
    const data = post.recipe
      ? {
          "@context": "https://schema.org",
          "@type": "Recipe",
          name: post.title,
          description: post.summary,
          image,
          author,
          datePublished: post.date,
          recipeYield: post.recipe.servings,
          prepTime: isoDuration(post.recipe.prepTime),
          cookTime: isoDuration(post.recipe.cookTime),
          totalTime: isoDuration((post.recipe.prepTime ?? 0) + (post.recipe.cookTime ?? 0) || undefined),
          recipeIngredient: post.recipe.ingredients,
          recipeInstructions: post.recipe.steps.map((text) => ({ "@type": "HowToStep", text })),
          keywords: post.tags.join(", "),
          url,
        }
      : {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          image,
          author,
          datePublished: post.date,
          keywords: post.tags.join(", "),
          url,
        };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.blog = "true";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => script.remove();
  }, [post]);
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} – Son Nguyen` : "Post not found – Son Nguyen",
    post?.summary ?? "This post could not be found.",
    post?.cover
  );
  useStructuredData(post);

  if (!post) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <p className="text-muted-foreground">It may have moved, or it isn't published yet.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to the blog
          </Link>
        </div>
      </main>
    );
  }

  const Icon = CATEGORY_ICONS[post.category];
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE}/blog/${post.slug}`)}`;

  return (
    <main className="pt-24 pb-12">
      <article className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All posts
        </Link>

        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1">
              <Icon className="w-3.5 h-3.5" />
              {CATEGORIES[post.category].label}
            </span>
            {post.draft && (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary border border-primary/40 rounded-full px-2 py-0.5">
                Draft · only on localhost
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          {post.summary && <p className="text-lg text-muted-foreground leading-relaxed">{post.summary}</p>}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>By Son Nguyen</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readingMinutes} min read
            </span>
            {post.recipe && (
              <a
                href="#recipe"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("recipe")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
              >
                <ChefHat className="w-4 h-4" /> Jump to recipe
              </a>
            )}
          </div>
        </header>

        {post.cover && (
          <img
            src={post.cover}
            alt={post.coverAlt ?? ""}
            className="w-full rounded-2xl mb-10 object-cover max-h-[520px]"
          />
        )}

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.recipe && <RecipeCard recipe={post.recipe} />}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Enjoyed this? Share it with someone who'd like it.</p>
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 hover:bg-primary/10 text-sm font-medium transition-colors"
          >
            <Linkedin className="w-4 h-4" /> Share on LinkedIn
          </a>
        </div>

        {more.length > 0 && (
          <div className="mt-12 space-y-4">
            <h2 className="text-lg font-semibold">More from {CATEGORIES[post.category].label}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="glass glass-highlight rounded-xl p-4 hover:border-primary/40 transition-colors"
                >
                  <p className="font-medium leading-snug">{p.title}</p>
                  <p className="text-xs text-muted-foreground mt-2">{formatDate(p.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <ContactCTA />
    </main>
  );
}

function RecipeCard({ recipe }: { recipe: NonNullable<BlogPost["recipe"]> }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const total = (recipe.prepTime ?? 0) + (recipe.cookTime ?? 0);
  const facts = [
    recipe.servings && { icon: Users, label: "Serves", value: recipe.servings },
    recipe.prepTime && { icon: Timer, label: "Prep", value: formatMinutes(recipe.prepTime) },
    recipe.cookTime && { icon: Flame, label: "Cook", value: formatMinutes(recipe.cookTime) },
    total > 0 && { icon: Clock, label: "Total", value: formatMinutes(total) },
  ].filter(Boolean) as { icon: typeof Users; label: string; value: string }[];

  return (
    <section id="recipe" className="glass glass-highlight rounded-2xl p-5 md:p-7 mt-10 space-y-6 scroll-mt-24" aria-label="Recipe">
      {facts.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {facts.map((f) => (
            <div key={f.label} className="rounded-xl bg-primary/5 border border-primary/15 p-3 text-center">
              <f.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-xs text-muted-foreground">{f.label}</div>
              <div className="text-sm font-semibold">{f.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-[2fr_3fr] gap-8">
        {recipe.ingredients.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-start gap-3 text-left text-sm w-full group"
                    aria-pressed={done.has(i)}
                  >
                    <span
                      className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                        done.has(i) ? "bg-primary border-primary" : "border-white/30 group-hover:border-primary"
                      }`}
                    >
                      {done.has(i) && <Check className="w-3 h-3 text-black" />}
                    </span>
                    <span className={done.has(i) ? "line-through text-muted-foreground" : ""}>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.steps.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Method</h2>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
