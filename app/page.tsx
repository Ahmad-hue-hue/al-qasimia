import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { HadithQuote } from "@/components/hadith-quote";
import {
  CtaBanner,
  ProgramCard,
} from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { programs, services } from "@/lib/site-config";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl space-y-20 px-4 pb-20 sm:px-6">
        <Reveal>
          <section>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-gold">
                  Mafunzo
                </p>
                <h2 className="mt-2 font-display text-3xl text-heading">
                  Nini tunafundisha
                </h2>
              </div>
              <Link
                href="/mafunzo"
                className="hidden text-sm font-medium text-gold hover:underline sm:block"
              >
                Angalia yote →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {programs.map((program, i) => (
                <Reveal key={program.title} delay={i * 0.08}>
                  <ProgramCard {...program} />
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-gold">
                Kwa nini Al Qasimia
              </p>
              <h2 className="mt-2 font-display text-3xl text-heading">
                Mazingira ya kujifunza na kukua
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tunatoa malezi kamili ya Kiislamu pamoja na hifadhi ya Qur&apos;an —
                bweni au kutwa, kwa vijana wanaotafuta msingi thabiti wa imani.
              </p>
            </div>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-gold/15 bg-card px-4 py-3"
                >
                  <CheckCircle
                    weight="duotone"
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <HadithQuote />
        </Reveal>

        <Reveal>
          <CtaBanner />
        </Reveal>
      </div>
    </>
  );
}
