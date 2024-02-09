"use client";

import { Button } from "@components/Button/Button";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { PROJECTS } from "@lib/projects.contant";
import { usePathname, useRouter } from "next/navigation";

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
                    router.push(`/portfolio/${proj.path}`)
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
