interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  if (variant === 'minimal') {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <span className="font-bold text-primary">SN</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} relative group cursor-pointer`}>
      {/* Background gradient circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30" />
      <div className="absolute inset-0.5 bg-gradient-to-br from-secondary/15 to-tertiary/15 rounded-full transition-all duration-300 group-hover:scale-105" />
      
      {/* Main logo container */}
      <div className="relative w-full h-full bg-gradient-to-br from-background to-accent rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20" style={{ backdropFilter: 'blur(8px)' }}>
        {/* Letters */}
        <div className="relative flex items-center justify-center">
          <span className="font-bold text-primary transition-all duration-300 group-hover:scale-110">
            S
          </span>
          <span className="font-bold text-secondary ml-0.5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
            N
          </span>
        </div>
        
        {/* Subtle accent dot */}
        <div className="absolute top-1 right-1 w-1 h-1 bg-tertiary rounded-full opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary" />
      </div>
      
      {/* Floating accent rings on hover */}
      <div className="absolute inset-0 rounded-full border border-primary/0 transition-all duration-500 group-hover:border-primary/20 group-hover:scale-125" />
      <div className="absolute inset-0 rounded-full border border-secondary/0 transition-all duration-700 group-hover:border-secondary/15 group-hover:scale-150" />
    </div>
  );
}