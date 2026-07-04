"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoWithText } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} aria-label={siteConfig.name}>
          <LogoWithText />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Menyu kuu">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                pathname === item.href
                  ? "text-heading underline decoration-gold decoration-2 underline-offset-8"
                  : "text-foreground/75 hover:text-heading",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={open ? "Funga menyu" : "Fungua menyu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X weight="duotone" className="h-5 w-5" />
            ) : (
              <List weight="duotone" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-gold/15 px-4 py-4 md:hidden"
          aria-label="Menyu ya simu"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium",
                    pathname === item.href
                      ? "bg-gold/15 text-heading"
                      : "hover:bg-gold/10",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
