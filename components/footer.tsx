import {
  InstagramLogo,
  FacebookLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { LogoWithText } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-surface-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <LogoWithText />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.tagline}. {siteConfig.motto}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-heading">Viungo</h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-heading"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-heading">Mawasiliano</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin weight="duotone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {siteConfig.location}
            </li>
            {siteConfig.phones.slice(0, 2).map((phone) => (
              <li key={phone.tel} className="flex items-center gap-2">
                <Phone weight="duotone" className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${phone.tel}`} className="hover:text-heading">
                  {phone.number}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.social.instagramLabel}
                className="text-gold transition-opacity hover:opacity-80"
              >
                <InstagramLogo weight="duotone" className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.social.facebookLabel}
                className="text-gold transition-opacity hover:opacity-80"
              >
                <FacebookLogo weight="duotone" className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Haki zote zimehifadhiwa.
      </div>
    </footer>
  );
}
