import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { hadithQuote } from "@/lib/site-config";

export function HadithQuote() {
  return (
    <section
      aria-label="Hadith kuhusu watu wa Qur'an"
      className="relative overflow-hidden rounded-3xl border border-gold/30 bg-charcoal px-6 py-10 text-cream sm:px-10 sm:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Quotes weight="duotone" className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-6 font-display text-lg leading-relaxed sm:text-xl">
          &ldquo;{hadithQuote.text}&rdquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-widest text-gold/80">
          — {hadithQuote.source}
        </p>
      </div>
    </section>
  );
}
