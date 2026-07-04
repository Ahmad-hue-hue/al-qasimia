import type { Metadata } from "next";
import { OfferBadge, ProgramCard } from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { programs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mafunzo",
};

export default function MafunzoPage() {
  const intensive = programs.find((p) => p.highlight);
  const regular = programs.filter((p) => !p.highlight);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <SectionHeading
          title="Programu zetu"
          description="Hifadhi kamili, tajwid sahihi, na malezi ya Kiislamu — kwa njia rahisi na za kisasa."
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {regular.map((program, i) => (
          <Reveal key={program.title} delay={i * 0.06}>
            <ProgramCard {...program} />
          </Reveal>
        ))}
      </div>

      {intensive && (
        <Reveal delay={0.15}>
          <section className="mt-14 border-t border-gold/15 pt-12">
            <SectionHeading
              title="Kozi maalum ya miezi 6"
              description="Kwa vijana waliomaliza Kidato cha Nne. Ada nafuu. Bweni au kutwa."
            />
            <div className="mt-8">
              <ProgramCard {...intensive} />
            </div>
          </section>
        </Reveal>
      )}

      <Reveal delay={0.2}>
        <div className="mt-14 space-y-4">
          <OfferBadge />
          <ButtonLink
            href={siteConfig.whatsapp.href()}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uliza kuhusu mafunzo
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
