import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function LogoMark({
  className = "h-12 w-12",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={626}
      height={626}
      priority={priority}
      className={`aspect-square rounded-full object-cover ${className}`}
    />
  );
}

export function LogoWithText({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark
        className={compact ? "h-9 w-9" : "h-11 w-11"}
        priority={compact}
      />
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
      className={`relative flex items-center justify-center ${className ?? ""}`}
    >
      <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
      <LogoMark
        priority
        className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
      />
    </div>
  );
}
