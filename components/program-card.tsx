"use client";

import {
  BookOpen,
  GraduationCap,
  Heart,
  Microphone,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
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
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 transition-shadow",
        highlight
          ? "border-gold bg-gold/8 shadow-lg shadow-gold/10"
          : "border-gold/20 bg-card hover:shadow-md hover:shadow-gold/5",
      )}
    >
      {highlight && (
        <span className="absolute right-4 top-4 rounded-full bg-heading px-3 py-1 text-xs font-semibold text-cream">
          Maalum
        </span>
      )}
      <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-3 text-gold">
        <Icon weight="duotone" className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl text-heading">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.article>
  );
}

export function OfferBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-heading"
    >
      <span className="rounded-full bg-heading px-2 py-0.5 text-xs text-cream">
        OFA
      </span>
      Lugha ya Kiarabu itafundishwa bure kabisa
    </motion.div>
  );
}

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent px-6 py-10 text-center sm:px-10">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
      <h2 className="font-display text-2xl text-heading sm:text-3xl">
        Jiunge na Al Qasimia leo
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Usajili unaendelea. Wasiliana nasi kupata taarifa zaidi kuhusu bweni,
        kutwa, na kozi ya miezi 6.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/udahili" size="lg">
          Jifunze kuhusu udahili
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
