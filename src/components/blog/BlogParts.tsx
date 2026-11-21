import { Link } from "react-router-dom";
import { useId } from "react";
import { BlogPost, formatDate, languageLabel, readingTime } from "../../data/blogPosts";

export const display = { fontFamily: "'Cinzel', Georgia, serif" };

/**
 * Cinzel has no Vietnamese glyphs, so Vietnamese titles use Cormorant SC,
 * an inscription-style serif with full Vietnamese support.
 */
export function displayFor(lang: string) {
  return lang === "vi" ? { fontFamily: "'Cormorant SC', 'Cinzel', Georgia, serif" } : display;
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
    <div className="flex items-baseline gap-4 pb-4 border-b-[0.5px] border-[#333333]">
      <span style={display} className="text-base font-semibold tracking-[2px] text-[#f2c94c]">
        {number}
      </span>
      <h2 id={id} className="m-0 font-['Inter',sans-serif] text-sm font-medium tracking-[2px] text-[#888888] uppercase">
        {label}
      </h2>
      {aside && <div className="ml-auto">{aside}</div>}
    </div>
  );
}

export function PostMeta({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <p className={`text-[11px] tracking-[2px] text-[#808080] ${className}`}>
      {formatDate(post.date)} · {readingTime(post)} MIN READ · {languageLabel[post.lang].toUpperCase()}
    </p>
  );
}

export function PostCard({ post, number }: { post: BlogPost; number: string }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2c94c]"
    >
      <article className="h-full flex flex-col overflow-hidden rounded-lg border border-[#222222] bg-[#111111] transition-colors group-hover:border-[rgba(242,201,76,0.45)]">
        <div className="relative aspect-[1200/630] overflow-hidden border-b border-[#222222] bg-[#0d0d0d]">
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            style={{ objectPosition: post.coverPosition }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            style={display}
            className="absolute left-4 top-3 rounded bg-[#0a0a0a]/85 px-2 py-0.5 text-sm font-semibold tracking-[2px] text-[#f2c94c]"
          >
            {number}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 md:p-[30px]">
          <p style={display} className="text-[11px] font-semibold tracking-[2px] text-[#f2c94c] uppercase">
            {post.category}
          </p>
          <h3
            lang={post.lang}
            style={displayFor(post.lang)}
            className="text-xl leading-snug font-semibold text-[#cccccc] transition-colors group-hover:text-[#f2994a]"
          >
            {post.title}
          </h3>
          <p lang={post.lang} className="flex-1 text-sm leading-[22px] text-[#aaaaaa] line-clamp-3">
            {post.excerpt}
          </p>
          <PostMeta post={post} className="mt-2" />
        </div>
      </article>
    </Link>
  );
}
