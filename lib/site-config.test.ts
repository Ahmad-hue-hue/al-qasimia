import { describe, expect, it } from "vitest";
import {
  galleryItems,
  programs,
  siteConfig,
} from "@/lib/site-config";

describe("WhatsApp contact link", () => {
  it("opens chat with the configured number and pre-filled Swahili greeting", () => {
    const href = siteConfig.whatsapp.href();

    expect(href).toMatch(/^https:\/\/wa\.me\/255719158880\?text=/);
    expect(decodeURIComponent(href.split("text=")[1])).toBe(
      siteConfig.whatsapp.message,
    );
  });
});

describe("School contact details", () => {
  it("lists all three phone numbers for parents to call", () => {
    expect(siteConfig.phones).toHaveLength(3);
    expect(siteConfig.phones.map((p) => p.number)).toEqual([
      "+255 674 248 190",
      "+255 719 158 880",
      "+255 716 200 414",
    ]);
  });
});

describe("Site navigation", () => {
  it("exposes all six Swahili pages required by the brief", () => {
    expect(siteConfig.nav.map((item) => item.href)).toEqual([
      "/",
      "/kuhusu",
      "/mafunzo",
      "/udahili",
      "/picha",
      "/mawasiliano",
    ]);
  });
});

describe("Programs offered", () => {
  it("includes a highlighted six-month course for Form Four graduates", () => {
    const intensive = programs.find((p) => p.highlight);

    expect(intensive?.title).toContain("miezi 6");
    expect(intensive?.description).toMatch(/Form Four|Kidato/i);
  });
});

describe("Gallery placeholders", () => {
  it("marks every gallery slot as a replaceable placeholder", () => {
    expect(galleryItems.every((item) => item.placeholder === true)).toBe(true);
    expect(galleryItems.length).toBeGreaterThanOrEqual(4);
  });
});
