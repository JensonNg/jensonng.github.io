import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  id?: string;
}

export function SectionHeader({ eyebrow, title, lead, align = "left", action, id }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`mb-10 md:mb-14 flex flex-col gap-6 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`space-y-4 ${centered ? "max-w-2xl" : "max-w-2xl min-w-0"}`}>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">{eyebrow}</p>
        )}
        <h2 id={id} className="text-3xl md:text-5xl font-medium leading-[1.1]">
          {title}
        </h2>
        {lead && <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
