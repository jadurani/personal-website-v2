import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";

const projectsDir = path.resolve(import.meta.dirname);
const pages = readdirSync(projectsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => path.join(projectsDir, d.name, "page.tsx"));

const read = (file: string) => readFileSync(file, "utf8");
const imageTags = (source: string) =>
  source.match(/<Image\b[\s\S]*?\/>/g) ?? [];

describe.each(pages.map((p) => [path.basename(path.dirname(p)), p]))(
  "%s page",
  (_name, file) => {
    const source = read(file);

    test("serves images through next/image and animations as video", () => {
      expect(source).not.toMatch(/<img\b/);
      expect(source).not.toMatch(/\.gif\b/);
    });

    test("every image shows a blurred preview while it loads", () => {
      const tags = imageTags(source);
      expect(tags.length).toBeGreaterThan(0);
      for (const tag of tags) expect(tag).toMatch(/placeholder="blur"/);
    });

    test("the cover image at the top loads first", () => {
      const cover = imageTags(source)[0];
      expect(cover).toMatch(/loading="eager"/);
      expect(cover).toMatch(/fetchPriority="high"/);
      expect(cover).not.toMatch(/\bpriority\b(?!=)/);
    });
  }
);

test("project list thumbnails show a blurred preview and the first loads first", () => {
  const [thumb] = imageTags(read(path.join(projectsDir, "page.tsx")));
  expect(thumb).toMatch(/placeholder="blur"/);
  expect(thumb).toMatch(/loading=\{idx === 0 \? "eager" : "lazy"\}/);
});
