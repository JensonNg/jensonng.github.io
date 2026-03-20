import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface SectionWrapperProps {
  title: string;
  description?: string;
  badge?: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
  sectionId: string;
}

export function SectionWrapper({ 
  title, 
  description, 
  badge, 
  defaultExpanded = false, 
  children, 
  sectionId 
}: SectionWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Listen for external expansion events
  useEffect(() => {
    const handleExpandSection = (event: CustomEvent) => {
      if (event.detail.sectionId === sectionId) {
        setIsExpanded(true);
        
        // Scroll to section after a brief delay to allow expansion animation
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    };

    window.addEventListener('expandSection', handleExpandSection as EventListener);
    
    return () => {
      window.removeEventListener('expandSection', handleExpandSection as EventListener);
    };
  }, [sectionId]);

  return (
    <section id={sectionId} className="py-4">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden glass glass-highlight border-white/[0.06] shadow-lg">
          {/* Section Header - Always Visible */}
          <Button
            variant="ghost"
            onClick={toggleExpanded}
            className="w-full p-4 md:p-6 h-auto flex items-center justify-between hover:bg-accent/50 transition-colors rounded-none gap-2"
          >
            <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
                {badge && (
                  <Badge variant="outline" className="border-primary text-primary hidden sm:inline-flex">
                    {badge}
                  </Badge>
                )}
              </div>
              <div className="text-left min-w-0">
                <h2 className="text-xl md:text-3xl text-foreground mb-1 md:mb-2 truncate">
                  {title}
                </h2>
                {description && (
                  <p className="text-muted-foreground text-xs md:text-sm max-w-2xl line-clamp-2">
                    {description}
                  </p>
                )}
              </div>
            </div>
            <div className="text-xs text-muted-foreground flex-shrink-0 hidden md:block">
              {isExpanded ? 'Click to minimize' : 'Click to expand'}
            </div>
          </Button>

          {/* Section Content - Collapsible */}
          {isExpanded && (
            <div className="border-t border-border/30">
              {children}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}