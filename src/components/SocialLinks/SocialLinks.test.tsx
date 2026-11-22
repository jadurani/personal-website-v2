import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import posthog from "posthog-js";
import { expect, test, vi } from "vitest";
import { SocialLinks } from "./SocialLinks";

vi.mock("posthog-js", () => ({ default: { capture: vi.fn() } }));

test("links to the X profile under its current name", async () => {
  render(<SocialLinks />);
  const x = screen.getByRole("link", { name: "Visit my X profile" });
  expect(x.getAttribute("href")).toBe("https://x.com/jadurani");
  expect(screen.queryByRole("link", { name: /twitter/i })).toBeNull();

  await userEvent.setup().click(x);
  expect(posthog.capture).toHaveBeenCalledWith("social_profile_opened", {
    network: "x",
  });
});
