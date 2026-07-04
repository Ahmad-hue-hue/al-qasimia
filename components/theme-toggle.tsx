"use client";

import { MoonStars, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Badilisha mandhari"
        className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-gold/30"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Washa mandhari ya mwanga" : "Washa mandhari ya giza"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
        className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      {isDark ? (
        <Sun weight="duotone" className="h-5 w-5" />
      ) : (
        <MoonStars weight="duotone" className="h-5 w-5" />
      )}
    </button>
  );
}
