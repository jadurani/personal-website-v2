import { PROJECTS } from "@lib/projects.contant";
import type { MetadataRoute } from "next";

const SITE = "https://www.jadurani.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/projects",
    "/contact-me",
    ...PROJECTS.map((p) => `/projects/${p.path}`),
  ];
  return paths.map((path) => ({ url: `${SITE}${path}` }));
}
