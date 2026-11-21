import { Link } from "react-router-dom";
import { useId } from "react";
import { BlogPost, formatDate, isMultilingual, languageLabel, readingTime } from "../../data/blogPosts";

export const display = { fontFamily: "'Cinzel', Georgia, serif" };

// Letters used in Vietnamese but missing from Cinzel (ă â đ ê ô ơ ư and the tone-marked forms).
const VIETNAMESE = /[ăâđêôơưĂÂĐÊÔƠƯ\u1EA0-\u1EF9]/;

/**
 * Cinzel has no Vietnamese glyphs, so headings in Vietnamese - or containing
 * Vietnamese names such as "Sơn La" - use Cormorant SC, an inscription-style
 * serif with full Vietnamese support.
 */
export function displayFor(lang: string, text = "") {
  return lang === "vi" || VIETNAMESE.test(text)
    ? { fontFamily: "'Cormorant SC', 'Cinzel', Georgia, serif" }
    : display;
}

/** The Sowilo stroke. `gradient` uses the brand gold-amber-gold stroke. */
export function SowiloStroke({
  className,
  strokeWidth = 5,
  gradient = false,
}: {
  className?: string;
  strokeWidth?: number;
  gradient?: boolean;
}) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f2c94c" />
            <stop offset="0.5" stopColor="#f2994a" />
            <stop offset="1" stopColor="#f2c94c" />
          </linearGradient>
        </defs>
      )}
      <polyline
        points="40,8 20,30 44,34 24,56"
        fill="none"
        stroke={gradient ? `url(#${id})` : "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Section header: gold two-digit number, capitals label, hairline divider. */
export function SectionHeader({
  number,
  label,
  id,
  aside,
}: {
  number: string;
  label: string;
  id?: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 pb-4 border-b-[0.5px] border-border">
      <span style={display} className="text-base font-semibold tracking-[2px] text-brand-ink">
        {number}
      </span>
      <h2 id={id} className="m-0 font-['Inter',sans-serif] text-sm font-medium tracking-[2px] text-muted-foreground uppercase">
        {label}
      </h2>
      {aside && <div className="ml-auto">{aside}</div>}
    </div>
  );
}

export function PostMeta({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <p className={`text-xs tracking-[2px] text-hint ${className}`}>
      {formatDate(post.date)} · {readingTime(post)} MIN READ
      {isMultilingual && ` · ${languageLabel[post.lang].toUpperCase()}`}
    </p>
  );
}

export function PostCard({ post, number }: { post: BlogPost; number: string }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <article className="h-full flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-colors group-hover:border-primary/45">
        <div className="relative aspect-[1200/630] overflow-hidden border-b border-border bg-surface-2">
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            style={{ objectPosition: post.coverPosition }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            style={display}
            className="absolute left-4 top-3 rounded bg-black/80 px-2 py-0.5 text-sm font-semibold tracking-[2px] text-primary"
          >
            {number}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 md:p-[30px]">
          <p style={display} className="text-xs font-semibold tracking-[2px] text-brand-ink uppercase">
            {post.category}
          </p>
          <h3
            lang={post.lang}
            style={displayFor(post.lang, post.title)}
            className="text-xl leading-snug font-semibold text-foreground/80 transition-colors group-hover:text-brand-ink"
          >
            {post.title}
          </h3>
          <p lang={post.lang} className="flex-1 text-sm leading-[22px] text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          <PostMeta post={post} className="mt-2" />
        </div>
      </article>
    </Link>
  );
}
