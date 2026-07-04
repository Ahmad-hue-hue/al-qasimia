import type { Metadata } from "next";
import { House, Sun } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Udahili",
};

export default function UdahiliPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-gold">Udahili</p>
        <h1 className="mt-2 font-display text-4xl text-heading">
          Usajili unaendelea
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Karibu ujiunge na Al Qasimia Tahfidhul Qur&apos;an. Tunapokea wanafunzi
          wapya kwa bweni na kutwa.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Reveal delay={0.1}>
          <article className="rounded-2xl border border-gold/20 bg-card p-6">
            <House weight="duotone" className="h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-xl text-heading">Bweni</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Kula, kulala, na kusoma — mazingira kamili ya kujifunza na kukua
              katika nidhamu ya Kiislamu.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.15}>
          <article className="rounded-2xl border border-gold/20 bg-card p-6">
            <Sun weight="duotone" className="h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-xl text-heading">Kutwa</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Mwanafunzi anakuja kusoma mchana na kurudi nyumbani — bado anaweza
              kuendelea na masomo yake shuleni.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <section className="mt-10 space-y-4 rounded-2xl border border-gold/20 bg-card p-6 sm:p-8">
          <h2 className="font-display text-xl text-heading">Maelezo muhimu</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              Kozi maalum ya miezi 6 inaanza kwa waliomaliza Kidato cha Nne — ada
              nafuu, bweni au kutwa.
            </li>
            <li>
              Bila kusahau, Al Qasimia haimzuii mwanafunzi kuendelea na masomo yake
              shuleni.
            </li>
            <li>Wasiliana nasi kupata maelezo zaidi kuhusu mahitaji na tarehe.</li>
          </ul>
        </section>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.whatsapp.href()} variant="whatsapp" size="lg" target="_blank" rel="noopener noreferrer">
            Wasiliana kupitia WhatsApp
          </ButtonLink>
          <ButtonLink href="/mawasiliano" variant="outline" size="lg">
            Angalia mawasiliano
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
