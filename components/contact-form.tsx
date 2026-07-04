"use client";

import { EnvelopeSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
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
  );
}
