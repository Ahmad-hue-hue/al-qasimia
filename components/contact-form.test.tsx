import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact-form";

describe("Contact form", () => {
  it("shows a WhatsApp recovery path after the visitor submits a message", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/Jina/i), "Yusuf");
    await user.type(screen.getByLabelText(/Simu/i), "0712345678");
    await user.type(screen.getByRole("textbox", { name: /^Ujumbe$/ }), "Ningependa taarifa kuhusu bweni.");
    await user.click(screen.getByRole("button", { name: /Tuma/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/WhatsApp au simu/i);
    expect(screen.getByRole("link", { name: /Fungua WhatsApp/i })).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me"),
    );
  });
});
