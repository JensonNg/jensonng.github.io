import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all duration-200",
  {
    variants: {
      variant: {
        // Underlined styles (clearly different from buttons)
        default:
          "px-2 py-1 text-tertiary underline decoration-tertiary decoration-2 underline-offset-2 hover:text-tertiary/80 hover:decoration-tertiary/80",
        secondary:
          "px-2 py-1 text-tertiary/90 underline decoration-tertiary/70 decoration-1 underline-offset-2 hover:text-tertiary hover:decoration-tertiary",
        destructive:
          "px-2 py-1 text-destructive underline decoration-destructive decoration-2 underline-offset-2 hover:text-destructive/80 hover:decoration-destructive/80",
        
        // Bordered styles (thin borders unlike button outlines)
        outline:
          "px-2 py-1 text-tertiary border border-tertiary/30 rounded-full hover:border-tertiary/50 hover:bg-tertiary/5",
        subtle:
          "px-2 py-1 text-tertiary/80 bg-tertiary/10 rounded-full hover:text-tertiary hover:bg-tertiary/15",
        
        // Unique badge-only styles
        dot:
          "px-2 py-1 text-tertiary relative pl-4 before:content-[''] before:absolute before:left-1 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-tertiary before:rounded-full hover:text-tertiary/80 hover:before:bg-tertiary/80",
        tag:
          "px-3 py-1 text-tertiary bg-tertiary/5 border-l-4 border-l-tertiary hover:bg-tertiary/10 hover:border-l-tertiary/80",
        pill:
          "px-3 py-0.5 text-tertiary bg-gradient-to-r from-tertiary/10 to-tertiary/5 rounded-full border border-tertiary/20 hover:from-tertiary/15 hover:to-tertiary/10",
        
        // Special animated pop variants (for hero section)
        "pop-primary":
          "px-4 py-2 text-sm bg-primary text-primary-foreground rounded-2xl shadow-md font-bold border-2 border-primary/20 hover:shadow-lg transform hover:scale-105",
        "pop-secondary":
          "px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-2xl shadow-md font-bold border-2 border-secondary/20 hover:shadow-lg transform hover:scale-105",
        "pop-tertiary":
          "px-4 py-2 text-sm bg-tertiary text-tertiary-foreground rounded-2xl shadow-md font-bold border-2 border-tertiary/20 hover:shadow-lg transform hover:scale-105",
        "pop-quaternary":
          "px-4 py-2 text-sm bg-quaternary text-quaternary-foreground rounded-2xl shadow-md font-bold border-2 border-quaternary/20 hover:shadow-lg transform hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };