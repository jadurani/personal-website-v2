export type ProjectStatus = "LIVE" | "RETIRED" | "ALPHA" | "WIP";

export type ProjectPreview = {
  title: string;
  description: string;
  thumbnailSrc: string;
  path: string;
  tags: string[];
  status: ProjectStatus;
  /** Launch date as "YYYY-MM" (month precision). Optional until confirmed. */
  launched?: string;
};

export const PROJECTS: ProjectPreview[] = [
  {
    title: "NOAH, Revamped!",
    description:
      "This project required me to design the overall UI/UX and lead the development of the website revamp. My work was a balancing act between creating an interface that was usable for persons comfortable with complexity and those who are not, while at the same time ensuring the technical feasibility of my designs.",
    thumbnailSrc: "/images/portfolio/noah-revamped/noah-revamped-thumbnail.png",
    path: "noah-revamped",
    tags: ["UI/UX", "Web GIS", "Frontend Lead", "Disaster Risk"],
    status: "LIVE",
    launched: "2021-10",
  },
  {
    title: "Kalinga",
    description:
      "Find PhilHealth-accredited facilities near you. Kalinga parses PhilHealth's facility lists from various PDF files and geotags roughly 14,000 facilities so they can be searched by need and location on a map that works on a phone. An independent project, built with an AI coding agent.",
    thumbnailSrc: "/images/portfolio/kalinga/kalinga-thumbnail-mobile.png",
    path: "kalinga",
    tags: ["Agentic", "Maps", "Open Data", "Health"],
    status: "ALPHA",
  },
  {
    title: "ReliefAgad",
    description:
      "Over 4.3 million beneficiaries registered through this app, built to speed up DSWD's Social Amelioration Program aid for Filipino families. I led the development of the self-registration app and built the LGU registration interface.",
    thumbnailSrc: "/images/portfolio/reliefagad/reliefagad-thumbnail.png",
    path: "reliefagad",
    tags: ["Angular", "GovTech", "Frontend Lead", "Forms"],
    status: "RETIRED",
    launched: "2020-05",
  },
  {
    title: "360degrees",
    description:
      "A fully responsive website for a construction company, replacing a ten-year-old site. Loosely designed in Figma, built with Next.js and Tailwind, and deployed on Vercel.",
    thumbnailSrc: "/images/portfolio/360degrees/360degrees-thumbnail.png",
    path: "360degrees",
    tags: ["Next.js", "Tailwind", "Design + Dev", "Freelance"],
    status: "LIVE",
    launched: "2023-11",
  },
];

export const formatLaunched = (launched?: string): string | null => {
  if (!launched) return null;
  const [year, month] = launched.split("-").map(Number);
  if (!year || !month) return null;
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};
