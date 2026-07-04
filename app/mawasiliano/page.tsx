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
import { SectionHeading } from "@/components/section-heading";
import { Button, ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function MawasilianoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <SectionHeading
          title="Wasiliana nasi"
          description="Tupo Nzuguni, Dodoma. Piga simu, tuma ujumbe wa WhatsApp, au tembelea ukurasa wetu wa mitandao ya kijamii."
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <section className="space-y-6" aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="sr-only">
              Maelezo ya mawasiliano
            </h2>

            <div className="flex items-start gap-3 border border-gold/20 bg-card p-4">
              <MapPin weight="duotone" className="mt-1 h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Mahali</p>
                <p className="mt-1 text-muted-foreground">{siteConfig.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl text-foreground">Simu</h3>
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex min-h-11 items-center gap-3 border border-gold/20 bg-card p-4 transition-colors hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Phone weight="duotone" className="h-5 w-5 text-gold" aria-hidden="true" />
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
              <WhatsappLogo weight="fill" className="h-5 w-5" aria-hidden="true" />
              Tuma ujumbe WhatsApp
            </ButtonLink>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <InstagramLogo weight="duotone" className="h-5 w-5 text-gold" aria-hidden="true" />
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <FacebookLogo weight="duotone" className="h-5 w-5 text-gold" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section aria-labelledby="map-heading">
            <h2 id="map-heading" className="font-display text-xl text-foreground">
              Ramani
            </h2>
            <div className="mt-4 overflow-hidden border border-gold/20">
              <iframe
                title="Ramani ya Nzuguni, Dodoma"
                src={siteConfig.mapEmbed}
                className="aspect-video w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Ramani ya eneo — eneo halisi litathibitishwa na mteja.
            </p>
          </section>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <form
          className="mt-12 max-w-xl space-y-4 border border-gold/20 bg-card p-6"
          aria-labelledby="contact-form-heading"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 id="contact-form-heading" className="font-display text-xl text-foreground">
            Tuma ujumbe
          </h2>

          {sent ? (
            <div role="status" aria-live="polite" className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Ujumbe umepokelewa. Kwa majibu ya haraka, tumia WhatsApp au simu.
              </p>
              <ButtonLink
                href={siteConfig.whatsapp.href()}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fungua WhatsApp
              </ButtonLink>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
                  Jina
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-gold/25 bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium">
                  Simu
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-gold/25 bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
                  Ujumbe
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="min-h-[132px] w-full rounded-lg border border-gold/25 bg-background px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <EnvelopeSimple weight="duotone" className="h-5 w-5" aria-hidden="true" />
                Tuma
              </Button>
            </>
          )}
        </form>
      </Reveal>
    </div>
  );
}
