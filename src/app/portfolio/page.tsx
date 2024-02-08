"use client";

import { Button } from "@components/Button/Button";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { usePathname, useRouter } from "next/navigation";

type ProjectPreview = {
  title: string;
  description: string;
  thumbnailSrc: string;
  link: string;
};

const PROJECTS: ProjectPreview[] = [
  {
    title: "NOAH, Revamped!",
    description:
      "This project required me to design the overall UI/UX and lead the development of the website revamp. My work was a balancing act between creating an interface that was usable for persons comfortable with complexity and those who are not, while at the same time ensuring the technical feasibility of my designs.",
    thumbnailSrc: "/images/portfolio/noah-revamped/noah-revamped-thumbnail.png",
    link: "noah-revamped",
  },
  {
    title: "ReliefAgad",
    description:
      "Supporting DSWD's Social Amelioration Program to urgently give much needed-aid to 18 million Filipino families. In this project, I led the development of the self-registration app and built the LGU Registration interface.",
    thumbnailSrc: "/images/portfolio/reliefagad/reliefagad-thumbnail.png",
    link: "reliefagad",
  },
  {
    title: "360degrees",
    description:
      "For this project, I designed and built a fully responsive website for a construction company. Loosely designed via Figma , built with Next.js and Tailwind, and deployed via Vercel.",
    thumbnailSrc: "/images/portfolio/360degrees/360degrees-thumbnail.png",
    link: "360degrees",
  },
  {
    title: "FE Mentor - Pomodoro App",
    description:
      "A front-end challenge from Frontend Mentor, this pomodoro app provided some tricky challenges, including building a circular progress bar and a range of customizations, like colors and fonts. Built with Next.js and Tailwind, and deployed via Vercel.",
    thumbnailSrc: "/images/portfolio/fem-pomodoro/fem-pomodoro-thumbnail.png",
    link: "fem-pomodoro",
  },
];

export default function PortfolioPage() {
  const activeRoute = usePathname();
  const router = useRouter();

  return (
    <>
      <NavBar activeRoute={activeRoute}></NavBar>

      <main className="max-w-6xl container mx-auto">
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className={`${idx != 0 ? "mt-16" : ""} px-8 flex flex-col ${idx % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-16 justify-center items-stretch`}>
            <div className="flex-grow w-full relative self-stretch min-h-[320px] flex items-center">
              <img
                className="object-cover m-auto"
                alt={`thumbnail preview for ${proj.title}`}
                src={proj.thumbnailSrc}
                sizes="(max-width: 320px) 280px, (max-width: 768px) 720px, 1200px"
              />
            </div>

            <div className="w-full self-stretch flex-grow flex flex-col justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                {proj.title}
              </div>

              <p className="text-tuna/60 py-4 leading-loose">
                {proj.description}
              </p>

              <div>
                <Button
                  label="View Project"
                  handleClick={() =>
                    router.push(`/portfolio/${proj.link}`)
                  }></Button>
              </div>
            </div>
          </div>
        ))}

        <section className="px-8">
          <ContactPrompt />
        </section>
      </main>
    </>
  );
}
