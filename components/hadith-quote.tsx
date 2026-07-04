import { hadithQuote } from "@/lib/site-config";

export function HadithQuote() {
  return (
    <section
      aria-label="Hadith kuhusu watu wa Qur'an"
      className="relative border-y border-gold/25 bg-charcoal py-12 text-cream sm:py-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 sm:flex-row sm:gap-10 sm:px-6">
        <div className="shrink-0 sm:w-28">
          <p className="font-arabic text-3xl text-gold" dir="rtl" lang="ar">
            حديث
          </p>
          <p className="mt-2 text-xs uppercase tracking-wide text-gold/70">
            {hadithQuote.source}
          </p>
        </div>
        <blockquote className="border-l border-gold/40 pl-6 sm:pl-8">
          <p className="font-display text-lg leading-[1.75] sm:text-xl">
            {hadithQuote.text}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
