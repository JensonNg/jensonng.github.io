import { Link, useSearchParams } from "react-router-dom";
import { BlogPost, blogPosts, languageLabel } from "../data/blogPosts";
import { PostCard, PostMeta, SectionHeader, SowiloStroke, display, displayFor } from "../components/blog/BlogParts";

const ALL = "All";
type Lang = BlogPost["lang"];
const LANGS = Array.from(new Set(blogPosts.map((p) => p.lang))) as Lang[];
const TOPICS = Array.from(new Set(blogPosts.map((p) => p.category)));

function FilterButton({ on, onClick, children, lang }: { on: boolean; onClick: () => void; children: React.ReactNode; lang?: string }) {
  return (
    <button
      type="button"
      lang={lang}
      aria-pressed={on}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-[18px] text-[13px] font-medium tracking-[1px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c94c] ${
        on
          ? "border-[#f2c94c] bg-[#f2c94c] text-[#111111]"
          : "border-[#333333] bg-transparent text-[#cccccc] hover:border-[#f2c94c] hover:text-[#f2c94c]"
      }`}
    >
      {children}
    </button>
  );
}

export function BlogPage() {
  // Filters live in the URL (/blog?lang=vi&topic=Sustainability) so a filtered view can be shared.
  const [params, setParams] = useSearchParams();
  const lang = LANGS.includes(params.get("lang") as Lang) ? (params.get("lang") as Lang) : null;
  const topic = TOPICS.includes(params.get("topic") ?? "") ? params.get("topic") : null;
  const filtering = lang !== null || topic !== null;

  const setFilter = (key: "lang" | "topic", value: string | null) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const clearFilters = () => setParams(new URLSearchParams(), { replace: true, preventScrollReset: true });

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  // Unfiltered: the featured story sits on top and the grid shows the rest.
  // Filtered: the grid shows every matching story, featured included.
  const pool = filtering ? blogPosts : blogPosts.filter((p) => p !== featured);
  const visible = pool.filter((p) => (!lang || p.lang === lang) && (!topic || p.category === topic));
  const countIn = (l: Lang | null) => blogPosts.filter((p) => !l || p.lang === l).length;

  // Number posts by their place in the full list so numbers stay stable while filtering.
  const numberOf = (slug: string) => String(blogPosts.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");

  return (
    <main className="pt-24 text-[#cccccc]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <SowiloStroke
          strokeWidth={2.6}
          className="pointer-events-none absolute -right-24 -top-6 h-[420px] w-[420px] text-[#f2c94c] opacity-[0.12] md:h-[520px] md:w-[520px]"
        />
        <div className="container relative mx-auto flex flex-col gap-6 px-4 pt-16 pb-16 md:pt-20 md:pb-20">
          <p style={display} className="text-xs font-semibold tracking-[3px] text-[#f2c94c]">
            THE JOURNAL · ᛊ
          </p>
          <h1
            style={display}
            className="max-w-4xl text-4xl leading-[1.12] font-bold text-[#f2c94c] md:text-6xl"
          >
            Stories that move - on brand, growth and a circular future.
          </h1>
          <p style={display} className="text-lg italic text-[#cccccc]">
            Notes from a Vietnamese storyteller in Stockholm.
          </p>
          <p className="max-w-2xl text-base leading-7 tracking-[0.3px] text-[#aaaaaa] md:text-[17px]">
            I write about building trusted brands, growth that lasts, and design that starts with people -
            and with the planet they live on. Some stories are in English, some in Vietnamese.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && !filtering && (
        <section aria-labelledby="featured-title" className="container mx-auto px-4 pb-20 md:pb-24">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2c94c]"
          >
            <div className="grid overflow-hidden rounded-xl border border-[#222222] bg-[#111111] transition-colors group-hover:border-[rgba(242,201,76,0.45)] lg:grid-cols-2">
              <div className="relative aspect-[1200/630] overflow-hidden border-b border-[#222222] bg-[#0d0d0d] lg:aspect-auto lg:min-h-[380px] lg:border-r lg:border-b-0">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  style={{ objectPosition: featured.coverPosition }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  style={display}
                  className="absolute left-5 top-4 rounded bg-[#0a0a0a]/85 px-2 py-0.5 text-base font-semibold tracking-[2px] text-[#f2c94c]"
                >
                  {String(blogPosts.indexOf(featured) + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <p style={display} className="text-[11px] font-semibold tracking-[2px] text-[#f2c94c] uppercase">
                  Featured · {featured.category}
                </p>
                <h2
                  id="featured-title"
                  lang={featured.lang}
                  style={displayFor(featured.lang)}
                  className="text-3xl leading-[1.15] font-bold text-[#f2c94c] transition-colors group-hover:text-[#f2994a] md:text-[38px]"
                >
                  {featured.title}
                </h2>
                <p lang={featured.lang} className="text-base leading-[26px] text-[#aaaaaa]">
                  {featured.excerpt}
                </p>
                <PostMeta post={featured} className="text-xs" />
                <span className="text-sm font-semibold tracking-[1px] text-[#f2c94c]">Read the story ↗</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest stories */}
      <section aria-labelledby="latest-label" className="container mx-auto px-4 pb-20 md:pb-24">
        <SectionHeader
          number="01"
          label="Latest stories"
          id="latest-label"
          aside={
            <span className="text-xs tracking-[1px] text-[#808080]" aria-live="polite">
              {visible.length} {visible.length === 1 ? "STORY" : "STORIES"}
            </span>
          }
        />

        <div className="flex flex-col gap-5 pt-7 pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div role="group" aria-labelledby="filter-topic" className="flex flex-col gap-2.5">
            <span id="filter-topic" className="text-[10px] tracking-[2px] text-[#808080]">
              TOPIC
            </span>
            <div className="flex flex-wrap gap-2.5">
              <FilterButton on={!topic} onClick={() => setFilter("topic", null)}>
                {ALL}
              </FilterButton>
              {TOPICS.map((t) => (
                <FilterButton key={t} on={t === topic} onClick={() => setFilter("topic", t)}>
                  {t}
                </FilterButton>
              ))}
            </div>
          </div>

          <div role="group" aria-labelledby="filter-lang" className="flex shrink-0 flex-col gap-2.5">
            <span id="filter-lang" className="text-[10px] tracking-[2px] text-[#808080]">
              LANGUAGE
            </span>
            <div className="flex flex-wrap gap-2.5">
              <FilterButton on={!lang} onClick={() => setFilter("lang", null)}>
                {ALL} ({countIn(null)})
              </FilterButton>
              {LANGS.map((l) => (
                <FilterButton key={l} lang={l} on={l === lang} onClick={() => setFilter("lang", l)}>
                  {languageLabel[l]} ({countIn(l)})
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <PostCard key={post.slug} post={post} number={numberOf(post.slug)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-lg border border-[#222222] bg-[#111111] p-8">
            <p className="text-base leading-[26px] text-[#aaaaaa]">
              No {lang ? languageLabel[lang] : ""} stories on {topic} yet.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-11 rounded-lg border border-[#f2c94c] px-5 text-[13px] font-semibold tracking-[1px] text-[#f2c94c] transition-colors hover:bg-[#f2c94c] hover:text-[#111111]"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Follow along */}
      <section aria-labelledby="follow-title" className="container mx-auto px-4 pb-24 md:pb-28">
        <SectionHeader number="02" label="Follow along" />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-8 rounded-xl border border-[#222222] bg-[#111111] p-8 md:p-12">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 id="follow-title" style={display} className="text-3xl font-bold text-[#f2c94c]">
              Always - forward.
            </h2>
            <p className="text-base leading-[26px] text-[#aaaaaa]">
              New stories land on LinkedIn first. Food reviews live on Instagram. Writing in{" "}
              {languageLabel.en} and {languageLabel.vi}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/soninsthlm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-lg bg-[#f2c94c] px-6 text-sm font-semibold tracking-[1px] text-[#111111] transition-colors hover:bg-[#f2994a]"
            >
              Follow on LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-lg border border-[#f2c94c] px-6 text-sm font-semibold tracking-[1px] text-[#f2c94c] transition-colors hover:bg-[#f2c94c] hover:text-[#111111]"
            >
              Let’s talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
