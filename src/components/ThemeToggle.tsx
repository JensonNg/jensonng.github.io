import { Moon, Sun } from "lucide-react";

type Props = { isDark: boolean; onToggle: () => void; className?: string };

export function ThemeToggle({ isDark, onToggle, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  );
}
