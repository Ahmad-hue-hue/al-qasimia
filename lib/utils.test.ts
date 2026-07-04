import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("class name utility", () => {
  it("merges conflicting Tailwind classes into a single winning value", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("returns empty string when no classes are provided", () => {
    expect(cn()).toBe("");
  });
});
