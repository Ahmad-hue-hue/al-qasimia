import { siteConfig } from "@/lib/site-config";

export function LogoMark({
  className = "h-12 w-12",
  large = false,
}: {
  className?: string;
  large?: boolean;
}) {
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {rays.map((deg) => (
        <line
          key={deg}
          className={large ? "hero-ray" : undefined}
          x1="100"
          y1="100"
          x2={100 + 88 * Math.cos((deg * Math.PI) / 180)}
          y2={100 + 88 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth={large ? 1.2 : 0.9}
          opacity={0.22}
        />
      ))}
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.75" opacity="0.45" />
      <path d="M100 52 L118 88 L100 78 L82 88 Z" fill="currentColor" />
      <rect x="86" y="88" width="28" height="36" rx="3" fill="currentColor" opacity="0.9" />
      <path
        d="M72 132 Q100 148 128 132"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <rect x="58" y="118" width="10" height="18" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="132" y="118" width="10" height="18" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function LogoWithText({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gold">
        <LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="font-display text-sm font-bold text-foreground sm:text-base">
            Al Qasimia
          </p>
          <p className="text-xs text-muted-foreground">Tahfidhul Qur&apos;an</p>
        </div>
      )}
    </div>
  );
}

export function HeroEmblem({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center text-gold ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
      <LogoMark large className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
    </div>
  );
}
