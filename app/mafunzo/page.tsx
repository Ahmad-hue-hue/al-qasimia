import type { Metadata } from "next";
import { ProgramCard } from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { programs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mafunzo",
};

export default function MafunzoPage() {
  const intensive = programs.find((p) => p.highlight);
  const regular = programs.filter((p) => !p.highlight);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-gold">Mafunzo</p>
        <h1 className="mt-2 font-display text-4xl text-heading">
          Programu zetu
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Mafunzo yetu yanalenga hifadhi kamili ya Qur&apos;an, tajwid sahihi, na
          malezi ya Kiislamu — kwa njia rahisi na za kisasa.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {regular.map((program, i) => (
          <Reveal key={program.title} delay={i * 0.08}>
            <ProgramCard {...program} />
          </Reveal>
        ))}
      </div>

      {intensive && (
        <Reveal delay={0.2}>
          <section className="mt-14">
            <h2 className="font-display text-2xl text-heading">
              Kozi maalum ya miezi 6
            </h2>
            <p className="mt-2 text-muted-foreground">
              Kwa vijana waliomaliza Kidato cha Nne (Form Four). Ada nafuu. Chaguo la
              bweni au kutwa.
            </p>
            <div className="mt-6 max-w-xl">
              <ProgramCard {...intensive} />
            </div>
          </section>
        </Reveal>
      )}

      <Reveal delay={0.25}>
        <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/8 p-6 text-center sm:p-8">
          <p className="font-semibold text-heading">
            OFA: Lugha ya Kiarabu itafundishwa bure kabisa
          </p>
          <ButtonLink
            href={siteConfig.whatsapp.href()}
            variant="whatsapp"
            className="mt-4"
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
