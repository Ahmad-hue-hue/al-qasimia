"use client";

import { ArrowRight, ChatsCircle } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { HeroEmblem } from "@/components/logo";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { OfferBadge } from "@/components/program-card";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    void (async () => {
      const { default: gsap } = await import("gsap");

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-arabic", { opacity: 0, y: 12, duration: 0.5 })
          .from(".hero-location", { opacity: 0, duration: 0.4 }, "-=0.2")
          .from(".hero-title", { opacity: 0, y: 28, duration: 0.7 }, "-=0.1")
          .from(".hero-tagline", { opacity: 0, y: 16, duration: 0.5 }, "-=0.35")
          .from(".hero-body", { opacity: 0, y: 12, duration: 0.5 }, "-=0.25")
          .from(".hero-offer", { opacity: 0, scale: 0.96, duration: 0.45 }, "-=0.2")
          .from(".hero-cta", { opacity: 0, y: 10, duration: 0.4 }, "-=0.15")
          .from(".hero-emblem", { opacity: 0, scale: 0.92, duration: 0.9 }, 0.15);
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-gold/15 pb-14 pt-8 sm:pb-20 sm:pt-12"
    >
      <HeroVideoBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="hero-copy rounded-2xl border border-gold/10 bg-background/35 p-5 backdrop-blur-[2px] sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
          <p
            className="hero-arabic font-arabic text-2xl leading-none text-gold sm:text-3xl"
            dir="rtl"
            lang="ar"
          >
            مدرسة القاسمية لتحفيظ القرآن
          </p>

          <p className="hero-location mt-5 text-sm text-muted-foreground">
            {siteConfig.location}
          </p>

          <h1 className="hero-title mt-3 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {siteConfig.name}
          </h1>

          <p className="hero-tagline mt-4 font-display text-xl text-heading sm:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="hero-body mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Chuo cha bweni na kutwa kwa vijana wa kiume — hifadhi ya Qur&apos;an,
            tajwid sahihi, na malezi ya Kiislamu katika mazingira salama.
          </p>

          <div className="hero-offer mt-6">
            <OfferBadge />
          </div>

          <div className="hero-cta mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/udahili" size="lg">
              Anza usajili
              <ArrowRight weight="duotone" className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsapp.href()}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChatsCircle weight="duotone" className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-8 max-w-md border-l-2 border-gold/40 pl-4 text-sm italic text-muted-foreground">
            &ldquo;{siteConfig.motto}&rdquo;
          </p>
        </div>

        <div className="hero-emblem flex justify-center lg:justify-end">
          <HeroEmblem />
        </div>
      </div>
    </section>
  );
}
