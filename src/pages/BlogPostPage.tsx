import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Block, BlogPost, blogPosts, getPost } from "../data/blogPosts";
import { PostCard, PostMeta, SectionHeader, SowiloStroke, display, displayFor } from "../components/blog/BlogParts";

function BodyBlock({ block, lang }: { block: Block; lang: string }) {
  switch (block.type) {
    case "p":
      return <p className="m-0">{block.text}</p>;
    case "h2":
      return (
        <h2 style={displayFor(lang)} className="mt-6 text-2xl leading-[1.3] font-bold text-[#f2c94c] md:text-[26px]">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-4 border-l border-[rgba(242,201,76,0.5)] py-2 pl-7">
          <p style={displayFor(lang)} className="m-0 text-2xl leading-[1.45] text-[#f2c94c] md:text-[26px]">
            {block.text}
          </p>
        </blockquote>
      );
    case "image":
      return (
        <figure className="my-4">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="mx-auto max-h-[640px] w-auto max-w-full rounded-lg border border-[#222222]"
          />
          {block.caption && (
            <figcaption className="pt-3 text-center text-xs tracking-[0.5px] text-[#888888]">{block.caption}</figcaption>
          )}
        </figure>
      );
    case "facts":
      return (
        <dl className="my-2 grid grid-cols-1 gap-x-6 gap-y-4 rounded-lg border border-[#222222] bg-[#111111] p-6 sm:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] md:p-[30px]">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt style={display} className="text-[11px] font-semibold tracking-[2px] text-[#f2c94c] uppercase">
                {item.label}
              </dt>
              <dd className="m-0 text-[15px] leading-6 break-words text-[#cccccc]">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#f2c94c] hover:text-[#f2994a]">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "source":
      return (
        <p className="m-0 border-t-[0.5px] border-[#333333] pt-5 text-[15px] leading-6 text-[#888888]">
          {block.text}{" "}
          <a href={block.href} target="_blank" rel="noopener noreferrer" className="text-[#f2c94c] hover:text-[#f2994a]">
            {block.label} ↗
          </a>
        </p>
      );
  }
}

function relatedPosts(post: BlogPost): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, 3);
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!post) return;
    const previous = document.title;
    document.title = `${post.title} | Son Nguyen`;
    return () => {
      document.title = previous;
    };
  }, [post]);

  useEffect(() => setCopied(false), [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://jensonng.github.io/blog/${post.slug}`;
  const numberOf = (s: string) => String(blogPosts.findIndex((p) => p.slug === s) + 1).padStart(2, "0");
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="pt-24 text-[#cccccc]">
      <article>
        {/* Head */}
        <header className="mx-auto flex max-w-[760px] flex-col gap-5 px-4 pt-12 pb-10 md:pt-16">
          <Link
            to="/blog"
            className="inline-flex min-h-11 items-center self-start text-xs font-medium tracking-[2px] text-[#888888] hover:text-[#f2c94c]"
          >
            ← ALL STORIES
          </Link>
          <p style={display} className="text-xs font-semibold tracking-[3px] text-[#f2c94c] uppercase">
            {numberOf(post.slug)} · {post.category}
          </p>
          <h1
            lang={post.lang}
            style={displayFor(post.lang)}
            className="text-[34px] leading-[1.15] font-bold text-[#f2c94c] md:text-5xl"
          >
            {post.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-y-[0.5px] border-[#333333] py-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(242,201,76,0.45)] bg-[#111111]">
                <SowiloStroke className="h-[30px] w-[30px] text-[#f2c94c]" />
              </div>
              <div className="flex flex-col gap-1">
                <span style={display} className="text-sm font-bold tracking-[2px] text-[#cccccc] uppercase">
                  {post.authors}
                </span>
                <PostMeta post={post} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg border border-[#333333] px-4 text-xs font-medium tracking-[1px] text-[#cccccc] transition-colors hover:border-[#f2c94c] hover:bg-[#f2c94c] hover:text-[#111111]"
              >
                Share on LinkedIn
              </a>
              <button
                type="button"
                onClick={copyLink}
                className="min-h-11 rounded-lg border border-[#333333] px-4 text-xs font-medium tracking-[1px] text-[#cccccc] transition-colors hover:border-[#f2c94c] hover:bg-[#f2c94c] hover:text-[#111111]"
              >
                <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Cover */}
        <div className="container mx-auto px-4">
          <img
            src={post.cover}
            alt={post.coverAlt}
            className="mx-auto h-auto w-full max-w-[1100px] rounded-xl border border-[#222222]"
          />
        </div>

        {/* Body */}
        <div
          lang={post.lang}
          className="mx-auto flex max-w-[760px] flex-col gap-6 px-4 pt-12 pb-8 text-[17px] leading-[30px] tracking-[0.2px] text-[#aaaaaa] md:pt-14 md:text-lg md:leading-[31px]"
        >
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} lang={post.lang} />
          ))}

          <div className="flex flex-wrap gap-2 pt-4">
            <Link
              to="/blog"
              className="rounded-full border border-[#333333] px-3.5 py-1.5 text-xs tracking-[1px] text-[#cccccc] hover:border-[#f2c94c] hover:text-[#f2c94c]"
            >
              {post.category}
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="mx-auto max-w-[760px] px-4 pt-6 pb-20 md:pb-24">
          <div className="flex flex-wrap items-center gap-6 rounded-xl border border-[#222222] bg-[#111111] p-6 md:p-[30px]">
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px] border border-[rgba(242,201,76,0.45)] bg-[#0a0a0a] shadow-[inset_0_0_20px_rgba(242,201,76,0.12)]">
              <SowiloStroke gradient strokeWidth={4} className="h-11 w-11" />
            </div>
            <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-2">
              <p style={display} className="text-base tracking-[2px]">
                <span className="font-bold text-[#f2c94c]">SON</span> <span className="text-[#cccccc]">NGUYEN</span>
              </p>
              <p className="text-[11px] tracking-[3px] text-[#888888]">BRAND &amp; GROWTH MARKETING MANAGER</p>
              <p className="mt-1 text-[15px] leading-6 text-[#aaaaaa]">
                Growth marketer and storyteller in Stockholm. MSc in Environmental Science, with roots in marine
                management and a habit of designing for people first.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex min-h-11 items-center rounded-lg border border-[#f2c94c] px-[18px] text-[13px] font-semibold tracking-[1px] text-[#f2c94c] transition-colors hover:bg-[#f2c94c] hover:text-[#111111]"
            >
              About me ↗
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section aria-labelledby="related-label" className="container mx-auto px-4 pb-24 md:pb-28">
        <SectionHeader
          number="02"
          label="Keep reading"
          id="related-label"
          aside={
            <Link to="/blog" className="text-xs tracking-[1px] text-[#f2c94c] hover:text-[#f2994a]">
              ALL STORIES ↗
            </Link>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts(post).map((p) => (
            <PostCard key={p.slug} post={p} number={numberOf(p.slug)} />
          ))}
        </div>
      </section>
    </main>
  );
}
