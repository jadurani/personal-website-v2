import { expect, test, vi } from "vitest";
import { metadata } from "./page";

// next/font only works inside Next's compiler.
vi.mock("next/font/google", () => {
  const font = () => ({ className: "", variable: "", style: {} });
  return { Ibarra_Real_Nova: font, Public_Sans: font };
});

test("search results and link previews describe what ReliefAgad was", () => {
  expect(metadata.title).toBe("ReliefAgad | Jadurani Davalos");
  expect(metadata.description).toMatch(/4\.3 million/);
  expect(metadata.description).toMatch(/DSWD/);
  // About the project, not about me.
  expect(metadata.description).not.toMatch(/\bI\b/);
});
