import { describe, expect, it } from "vitest";
import { programs, siteConfig } from "@/lib/site-config";

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
  it("exposes the five Swahili pages for the live site", () => {
    expect(siteConfig.nav.map((item) => item.href)).toEqual([
      "/",
      "/kuhusu",
      "/mafunzo",
      "/udahili",
      "/mawasiliano",
    ]);
  });
});

describe("School branding", () => {
  it("serves the uploaded logo from the public folder", () => {
    expect(siteConfig.logo.src).toBe("/logo.jpg");
    expect(siteConfig.logo.alt).toMatch(/Al Qasimia/i);
  });
});

describe("Programs offered", () => {
  it("includes a highlighted six-month course for Form Four graduates", () => {
    const intensive = programs.find((p) => p.highlight);

    expect(intensive?.title).toContain("miezi 6");
    expect(intensive?.description).toMatch(/Form Four|Kidato/i);
  });
});
