import type { Metadata } from "next";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { galleryItems } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Picha",
};

export default function PichaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-gold">Picha</p>
        <h1 className="mt-2 font-display text-4xl text-heading">Picha za shule</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Picha halisi zitawekwa hapa baada ya mteja kutuma. Kila kipande hapa
          kimeandikwa PLACEHOLDER ili kurahisisha kubadilisha baadaye.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.06}>
            <figure className="overflow-hidden rounded-2xl border border-gold/20 bg-card">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gold/5 p-6 text-center">
                <ImageIcon weight="duotone" className="h-12 w-12 text-gold/60" />
                <span className="rounded-full bg-heading/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream">
                  Placeholder
                </span>
              </div>
              <figcaption className="border-t border-gold/10 px-4 py-3 text-sm text-muted-foreground">
                {item.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
