export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
        SN
      </div>
      <span className="font-semibold text-sm hidden sm:block">Son Nguyen</span>
    </div>
  );
}
