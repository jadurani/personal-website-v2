"use client";

import { Button } from "@components/Button/Button";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { TagPills } from "@components/ProjectMeta/ProjectMeta";
import { formatLaunched, PROJECTS } from "@lib/projects.contant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-6xl container mx-auto">
        <h1 className="sr-only">Projects</h1>

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

              <div className="text-tuna/60 pt-4 pb-3 leading-loose space-y-2">
                {proj.description.split("\n").map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="pb-6">
                <TagPills tags={proj.tags} />
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button
                  label="View Project"
                  handleClick={() => {
                    posthog.capture("project_selected", {
                      project_path: proj.path,
                    });
                    router.push(`/projects/${proj.path}`);
                  }}></Button>
                {formatLaunched(proj.launched) && (
                  <span className="text-body2 text-tuna/60">
                    Launched {formatLaunched(proj.launched)}
                  </span>
                )}
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
