import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kuhusu",
};

export default function KuhusuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-gold">Kuhusu</p>
        <h1 className="mt-2 font-display text-4xl text-heading">Kuhusu shule</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Al Qasimia Tahfidhul Qur&apos;an ni chuo cha bweni na kutwa kwa vijana wa
          kiume, kinacholenga hifadhi ya Qur&apos;an (hifdh) na kulea kizazi katika
          nuru ya Qur&apos;an na tabia njema ya Kiislamu.
        </p>
      </Reveal>

      <div className="mt-12 space-y-10">
        <Reveal delay={0.1}>
          <article className="rounded-2xl border border-gold/20 bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-heading">Dhamira</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kuhifadhi na kuendeleza Qur&apos;an kwa kufundisha vijana hifadhi
              kamili, tajwid sahihi, na nidhamu ya Kiislamu — ndani ya mazingira
              salama na yenye mpangilio wa bweni.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="rounded-2xl border border-gold/20 bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-heading">Dira</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kizazi cha huffadh (wahifadhi wa Qur&apos;an) wenye tabia thabiti ya
              Kiislamu, waliotayari kubeba nuru ya Qur&apos;an katika jamii zao.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="rounded-2xl border border-gold/20 bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-heading">Kaulimbiu</h2>
            <p className="mt-4 font-display text-xl text-heading">
              &ldquo;{siteConfig.motto}&rdquo;
            </p>
          </article>
        </Reveal>
      </div>
    </div>
  );
}
