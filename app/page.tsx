import { Hero } from "@/components/hero";
import { HadithQuote } from "@/components/hadith-quote";
import { CtaBanner, ProgramCard } from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { programs, services } from "@/lib/site-config";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl space-y-24 px-4 pb-24 pt-16 sm:px-6">
        <Reveal>
          <section>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                title="Mafunzo tunayotoa"
                description="Hifadhi, tajwid, na malezi — kwa njia rahisi na za kisasa."
              />
              <Link
                href="/mafunzo"
                className="text-sm font-medium text-gold underline-offset-4 hover:underline"
              >
                Angalia programu zote
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {programs.map((program) => (
                <ProgramCard key={program.title} {...program} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <SectionHeading
              title="Kwa nini wazazi wanatuamini"
              description="Tunajenga msingi wa imani na nidhamu — si tu masomo ya darasani."
            />
            <ul className="divide-y divide-gold/15 border-t border-gold/15">
              {services.map((service) => (
                <li
                  key={service}
                  className="py-4 text-base leading-relaxed text-foreground"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <HadithQuote />
      </Reveal>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
        <Reveal>
          <CtaBanner />
        </Reveal>
      </div>
    </>
  );
}
