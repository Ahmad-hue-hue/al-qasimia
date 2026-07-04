"use client";

import {
  BookOpen,
  GraduationCap,
  Heart,
  Microphone,
} from "@phosphor-icons/react";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const icons = {
  "book-open": BookOpen,
  microphone: Microphone,
  heart: Heart,
  "graduation-cap": GraduationCap,
} as const;

interface ProgramCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  highlight?: boolean;
}

export function ProgramCard({
  title,
  description,
  icon,
  highlight = false,
}: ProgramCardProps) {
  const Icon = icons[icon];

  return (
    <article
      className={cn(
        "relative border-l-[3px] py-1 pl-5",
        highlight ? "border-gold bg-gold/5 pr-4" : "border-gold/35",
      )}
    >
      {highlight && (
        <span className="mb-3 inline-block bg-well-teal px-2 py-0.5 text-xs font-medium text-cream">
          Kozi maalum · miezi 6
        </span>
      )}
      <div className="mb-2 flex items-center gap-2 text-gold">
        <Icon weight="duotone" className="h-5 w-5" />
        <h3 className="font-display text-lg text-foreground">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

export function OfferBadge() {
  return (
    <div className="inline-flex max-w-lg flex-col gap-1 border border-gold/35 bg-card px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
      <span className="w-fit bg-gold px-2 py-0.5 text-xs font-semibold text-charcoal">
        OFA
      </span>
      <span className="text-sm font-medium text-foreground">
        Lugha ya Kiarabu itafundishwa bure kabisa
      </span>
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="flex flex-col items-start justify-between gap-6 border border-gold/25 bg-card px-6 py-10 sm:flex-row sm:items-center sm:px-10">
      <div className="max-w-lg">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">
          Usajili unaendelea
        </h2>
        <p className="mt-2 text-muted-foreground">
          Wasiliana nasi kuhusu bweni, kutwa, au kozi ya miezi 6 kwa waliomaliza
          Kidato cha Nne.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/udahili" size="lg">
          Maelezo ya udahili
        </ButtonLink>
        <ButtonLink
          href={siteConfig.whatsapp.href()}
          variant="whatsapp"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
