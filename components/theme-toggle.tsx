"use client";

import { MoonStars, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? isDark
            ? "Washa mandhari ya mwanga"
            : "Washa mandhari ya giza"
          : "Badilisha mandhari"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      suppressHydrationWarning
    >
      {mounted && isDark ? (
        <Sun weight="duotone" className="h-5 w-5" />
      ) : (
        <MoonStars weight="duotone" className="h-5 w-5" />
      )}
    </button>
  );
}
