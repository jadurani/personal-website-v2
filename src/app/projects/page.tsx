"use client";

import { Button } from "@components/Button/Button";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { ProjectMeta } from "@components/ProjectMeta/ProjectMeta";
import { PROJECTS } from "@lib/projects.contant";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-6xl container mx-auto">
        <h1 className="px-8 pb-8 font-heading font-bold text-h2 md:text-h1 uppercase tracking-widest">
          Projects
        </h1>
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className={`${idx != 0 ? "mt-16" : ""} px-8 flex flex-col ${idx % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-16 justify-center items-stretch`}>
            <div className="flex-grow w-full relative self-stretch flex items-center">
              <Image
                alt={`thumbnail preview for ${proj.title}`}
                width={512}
                height={512}
                src={proj.thumbnailSrc}
                className="object-cover m-auto"
              />
            </div>

            <div className="w-full self-stretch flex-grow flex flex-col justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <h2 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                {proj.title}
              </h2>

              <div className="pt-4">
                <ProjectMeta
                  tags={proj.tags}
                  status={proj.status}
                  launched={proj.launched}
                />
              </div>

              <p className="text-tuna/60 py-4 leading-loose">
                {proj.description}
              </p>

              <div>
                <Button
                  label="View Project"
                  handleClick={() =>
                    router.push(`/projects/${proj.path}`)
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
