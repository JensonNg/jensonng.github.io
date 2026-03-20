interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const sizeMap = {
    sm: 32,
    md: 40,
    lg: 48
  };

  const px = sizeMap[size];

  if (variant === 'minimal') {
    return (
      <svg width={px} height={px} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <SowiloRune />
      </svg>
    );
  }

  return (
    <div className="relative group cursor-pointer">
      {/* Thunder glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/0 blur-xl transition-all duration-500 group-hover:bg-primary/25 group-hover:scale-150" />

      <svg
        width={px}
        height={px}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative transition-transform duration-300 group-hover:scale-110"
      >
        {/* Rounded square background */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="url(#bg-gradient)"
          stroke="url(#ring-gradient)"
          strokeWidth="1.5"
          opacity="0.9"
        />

        <SowiloRune />

        <defs>
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="var(--color-primary)" stopOpacity="0.5" />
            <stop offset="1" stopColor="var(--color-secondary)" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="bg-gradient" cx="0.3" cy="0.3" r="0.8">
            <stop stopColor="rgba(242,201,76,0.06)" />
            <stop offset="1" stopColor="rgba(17,17,17,0.98)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating ring on hover */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 transition-all duration-500 group-hover:border-primary/15 group-hover:scale-[1.3]" />
    </div>
  );
}

/**
 * Sowilo rune (ᛊ) — the Elder Futhark rune for "S"
 * Shaped like a lightning bolt / thunder strike
 */
function SowiloRune() {
  return (
    <g>
      {/* Main Sowilo rune — angular lightning bolt shape */}
      <path
        d="M18 8 L30 20 L18 20 L30 40"
        stroke="url(#rune-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <defs>
        <linearGradient id="rune-gradient" x1="18" y1="8" x2="30" y2="40">
          <stop stopColor="var(--color-primary)" />
          <stop offset="0.5" stopColor="var(--color-secondary)" />
          <stop offset="1" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
    </g>
  );
}
