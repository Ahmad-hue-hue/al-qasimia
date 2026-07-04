import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kuhusu",
};

const pillars = [
  {
    title: "Dhamira",
    body: "Kuhifadhi na kuendeleza Qur'an kwa kufundisha vijana hifadhi kamili, tajwid sahihi, na nidhamu ya Kiislamu — ndani ya mazingira salama na yenye mpangilio wa bweni.",
  },
  {
    title: "Dira",
    body: "Kizazi cha huffadh (wahifadhi wa Qur'an) wenye tabia thabiti ya Kiislamu, waliotayari kubeba nuru ya Qur'an katika jamii zao.",
  },
  {
    title: "Kaulimbiu",
    body: `"${siteConfig.motto}"`,
  },
];

export default function KuhusuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <SectionHeading
          title="Kuhusu shule"
          description="Al Qasimia Tahfidhul Qur'an ni chuo cha bweni na kutwa kwa vijana wa kiume, kinacholenga hifadhi ya Qur'an (hifdh) na kulea kizazi katika nuru ya Qur'an na tabia njema ya Kiislamu."
        />
      </Reveal>

      <div className="mt-14 space-y-0 divide-y divide-gold/15 border-t border-gold/15">
        {pillars.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="py-8">
              <h2 className="font-display text-2xl text-foreground">{item.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
