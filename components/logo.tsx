import { siteConfig } from "@/lib/site-config";

export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="60" cy="60" r="56" stroke="#C9922E" strokeWidth="2" />
      <circle cx="60" cy="60" r="48" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="60"
          x2={60 + 52 * Math.cos((deg * Math.PI) / 180)}
          y2={60 + 52 * Math.sin((deg * Math.PI) / 180)}
          stroke="#D4AF37"
          strokeWidth="0.8"
          opacity="0.35"
        />
      ))}
      <path
        d="M60 28 L72 52 L60 46 L48 52 Z"
        fill="#C9922E"
      />
      <rect x="52" y="52" width="16" height="22" rx="2" fill="#C9922E" opacity="0.85" />
      <path
        d="M44 78 Q60 88 76 78"
        stroke="#E08B2E"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function LogoWithText({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      {!compact && (
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold text-heading sm:text-base">
            Al Qasimia
          </p>
          <p className="text-xs text-muted-foreground">Tahfidhul Qur&apos;an</p>
        </div>
      )}
    </div>
  );
}
