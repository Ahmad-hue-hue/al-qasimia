"use client";

import {
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button, ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function MawasilianoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-gold">Mawasiliano</p>
        <h1 className="mt-2 font-display text-4xl text-heading">Wasiliana nasi</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tupo Nzuguni, Dodoma. Piga simu, tuma ujumbe wa WhatsApp, au tembelea
          ukurasa wetu wa mitandao ya kijamii.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <section className="space-y-6">
            <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-card p-4">
              <MapPin weight="duotone" className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div>
                <h2 className="font-semibold text-heading">Mahali</h2>
                <p className="mt-1 text-muted-foreground">{siteConfig.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-heading">Simu</h2>
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-3 rounded-xl border border-gold/20 bg-card p-4 transition-colors hover:border-gold/40"
                >
                  <Phone weight="duotone" className="h-5 w-5 text-gold" />
                  <span>{phone.number}</span>
                </a>
              ))}
            </div>

            <ButtonLink
              href={siteConfig.whatsapp.href()}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo weight="fill" className="h-5 w-5" />
              Tuma ujumbe WhatsApp
            </ButtonLink>

            <div className="flex gap-4 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-heading"
              >
                <InstagramLogo weight="duotone" className="h-5 w-5 text-gold" />
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-heading"
              >
                <FacebookLogo weight="duotone" className="h-5 w-5 text-gold" />
                Facebook
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section>
            <h2 className="font-display text-xl text-heading">Ramani</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gold/20">
              <iframe
                title="Ramani ya Nzuguni, Dodoma"
                src={siteConfig.mapEmbed}
                className="aspect-video w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Ramani ya eneo — eneo halisi litathibitishwa na mteja.
            </p>
          </section>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <form
          className="mt-12 max-w-xl space-y-4 rounded-2xl border border-gold/20 bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="font-display text-xl text-heading">Tuma ujumbe</h2>
          {sent ? (
            <p className="text-sm text-muted-foreground">
              Asante! Tafadhali tumia WhatsApp au simu kwa majibu ya haraka.
            </p>
          ) : (
            <>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Jina</span>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-gold/25 bg-background px-4 py-2.5 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Simu</span>
                <input
                  required
                  type="tel"
                  className="w-full rounded-xl border border-gold/25 bg-background px-4 py-2.5 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Ujumbe</span>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-gold/25 bg-background px-4 py-2.5 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </label>
              <Button type="submit" className="w-full sm:w-auto">
                <EnvelopeSimple weight="duotone" className="h-5 w-5" />
                Tuma
              </Button>
            </>
          )}
        </form>
      </Reveal>
    </div>
  );
}
