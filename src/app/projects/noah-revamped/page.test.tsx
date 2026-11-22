import { expect, test, vi } from "vitest";
import { metadata } from "./page";

// next/font only works inside Next's compiler.
vi.mock("next/font/google", () => {
  const font = () => ({ className: "", variable: "", style: {} });
  return { Ibarra_Real_Nova: font, Public_Sans: font };
});

test("search results and link previews say what NOAH is and what I did", () => {
  expect(metadata.title).toBe("Project NOAH, Revamped! | Jadurani Davalos");
  expect(metadata.description).toMatch(/hazard/);
  expect(metadata.description).toMatch(/flood/);
  expect(metadata.description).not.toBe("Project built with Angular");
});
