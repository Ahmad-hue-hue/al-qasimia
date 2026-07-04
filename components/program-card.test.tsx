import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OfferBadge } from "@/components/program-card";

describe("Free Arabic language promotion", () => {
  it("promotes the free Arabic classes offer on the homepage", () => {
    render(<OfferBadge />);

    expect(
      screen.getByText(/Lugha ya Kiarabu itafundishwa bure kabisa/i),
    ).toBeInTheDocument();
    expect(screen.getByText("OFA")).toBeInTheDocument();
  });
});
