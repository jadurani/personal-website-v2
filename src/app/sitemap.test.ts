import { PROJECTS } from "@lib/projects.contant";
import { expect, test } from "vitest";
import sitemap from "./sitemap";

test("lists the main pages and every project on the live domain", () => {
  const urls = sitemap().map((entry) => entry.url);
  expect(urls).toEqual(
    expect.arrayContaining([
      "https://www.jadurani.me",
      "https://www.jadurani.me/projects",
      "https://www.jadurani.me/contact-me",
      ...PROJECTS.map((p) => `https://www.jadurani.me/projects/${p.path}`),
    ])
  );
  expect(new Set(urls).size).toBe(urls.length);
});
