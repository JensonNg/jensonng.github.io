import { Link } from "react-router-dom";

const TOKENS = /(\*\*[^*]+\*\*|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)\s]+\))/g;

/**
 * Renders inline formatting in content text:
 * - **bold**
 * - [label](https://...) opens in a new tab; [label](/path) stays on the site
 * - [[note]] is a to-do for the author, highlighted so it cannot be missed.
 *   Only drafts should contain these; published pages must not.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKENS);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-foreground/80">{bold[1]}</strong>;

        const todo = part.match(/^\[\[([^\]]+)\]\]$/);
        if (todo)
          return (
            <mark key={i} className="rounded border border-dashed border-destructive bg-destructive/10 px-1 text-destructive">
              To fill in: {todo[1]}
            </mark>
          );

        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const className = "text-brand-ink underline decoration-primary/40 underline-offset-4 hover:text-brand-ink";
          if (link[2].startsWith("/"))
            return (
              <Link key={i} to={link[2]} className={className}>
                {link[1]}
              </Link>
            );
          return (
            <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className={className}>
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}
