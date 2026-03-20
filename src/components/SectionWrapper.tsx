import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  sectionId: string;
  title: string;
  description?: string;
  badge?: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export function SectionWrapper({
  sectionId,
  title,
  description,
  badge,
  defaultExpanded = false,
  children,
}: SectionWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section id={sectionId} className="border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <button
          onClick={() => setIsExpanded((e) => !e)}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center gap-3">
            {badge && (
              <Badge variant="secondary" className="text-xs font-medium">
                {badge}
              </Badge>
            )}
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>
              {description && (
                <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0",
              isExpanded && "rotate-180"
            )}
          />
        </button>
        {isExpanded && (
          <div className="pb-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
