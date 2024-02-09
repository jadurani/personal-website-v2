
export type ProjectPreview = {
  title: string;
  description: string;
  thumbnailSrc: string;
  path: string;
};

export const PROJECTS: ProjectPreview[] = [
  {
    title: "NOAH, Revamped!",
    description:
      "This project required me to design the overall UI/UX and lead the development of the website revamp. My work was a balancing act between creating an interface that was usable for persons comfortable with complexity and those who are not, while at the same time ensuring the technical feasibility of my designs.",
    thumbnailSrc: "/images/portfolio/noah-revamped/noah-revamped-thumbnail.png",
    path: "noah-revamped",
  },
  {
    title: "ReliefAgad",
    description:
      "Supporting DSWD's Social Amelioration Program to urgently give much needed-aid to 18 million Filipino families. In this project, I led the development of the self-registration app and built the LGU Registration interface.",
    thumbnailSrc: "/images/portfolio/reliefagad/reliefagad-thumbnail.png",
    path: "reliefagad",
  },
  {
    title: "360degrees",
    description:
      "For this project, I designed and built a fully responsive website for a construction company. Loosely designed via Figma , built with Next.js and Tailwind, and deployed via Vercel.",
    thumbnailSrc: "/images/portfolio/360degrees/360degrees-thumbnail.png",
    path: "360degrees",
  },
  {
    title: "Pomodoro App",
    description:
      "A front-end challenge from Frontend Mentor, this pomodoro app provided some tricky challenges, including building a circular progress bar and a range of customizations, like colors and fonts. Built with Next.js and Tailwind, and deployed via Vercel.",
    thumbnailSrc: "/images/portfolio/fem-pomodoro/fem-pomodoro-thumbnail.png",
    path: "fem-pomodoro",
  },
];