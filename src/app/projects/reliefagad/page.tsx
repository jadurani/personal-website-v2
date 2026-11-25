import coverPhoto from "@assets/images/portfolio/reliefagad/reliefagad-page-cover.webp";
import preview1 from "@assets/images/portfolio/reliefagad/ra-preview-1.png";
import preview2 from "@assets/images/portfolio/reliefagad/ra-preview-2.png";
import preview3 from "@assets/images/portfolio/reliefagad/ra-preview-3.png";
import preview4 from "@assets/images/portfolio/reliefagad/ra-preview-4.png";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { ProjectNav } from "@components/ProjectNav/ProjectNav";
import { ProjectMeta } from "@components/ProjectMeta/ProjectMeta";
import { findNextPrevProjects } from "@lib/find-page-nav";
import { PROJECTS } from "@lib/projects.contant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ReliefAgad | Jadurani Davalos",
  description:
    "DSWD's quick relief system for the Social Amelioration Program: a self-registration app and an LGU registration interface through which over 4.3 million beneficiaries registered, speeding up aid for Filipino families.",
};

export default function ProjectPage() {
  const path = "reliefagad";
  const nextPrevProjects = findNextPrevProjects(path);
  const project = PROJECTS.find((p) => p.path === path)!;

  return (
    <>
      <NavBar></NavBar>
      <main className="max-w-6xl container mx-auto px-8">
        {/* hero */}
        <Image
          alt="project preview for ReliefAgad"
          src={coverPhoto}
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
        />

        <div className="flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                  ReliefAgad
                </h1>

                <div className="pt-4">
                  <ProjectMeta
                    tags={project.tags}
                    status={project.status}
                    launched={project.launched}
                  />
                </div>

                <div className="text-tuna/60 py-4 md:hidden lg:block leading-relaxed">
                  <p className="py-2 text-tuna">
                    Over 4.3 million beneficiaries registered through ReliefAgad
                    as of July 2020, with more than 1 million enrolling to
                    receive aid directly in their e-wallets or bank accounts.
                  </p>
                  <p className="py-2">
                    I led the development of the self-registration app and built
                    the LGU registration interface.
                  </p>

                  <p className="py-2">
                    We used{" "}
                    <a href="https://angular.io/" target="_blank">
                      Angular
                    </a>{" "}
                    and{" "}
                    <a href="https://material.angular.io/" target="_blank">
                      Angular Material
                    </a>{" "}
                    in building the frontend application.
                  </p>
                  <p className="py-2">
                    The most challenging aspect of this project for me was the
                    complex interdependencies of the fields in this multi-page
                    dynamic form and I think{" "}
                    <a
                      href="https://angular.dev/guide/forms/reactive-forms"
                      target="_blank">
                      Angular&#39;s Reactive Forms
                    </a>{" "}
                    were an amazing tool for handling them.
                  </p>
                </div>

                <div className="mt-4 text-body2 text-tuna/60">
                  (The live project is no longer available.)
                </div>
              </div>

              <div className="text-tuna/60 py-4 hidden md:block w-full lg:hidden lg:mr-16">
                <p className="py-2 text-tuna">
                  Over 4.3 million beneficiaries registered through ReliefAgad
                  as of July 2020, with more than 1 million enrolling to receive
                  aid directly in their e-wallets or bank accounts.
                </p>
                <p className="py-2">
                  I led the development of the self-registration app and built
                  the LGU registration interface.
                </p>
                <p className="py-2">
                  We used Angular and Angular Material for the frontend. The
                  most challenging part was the complex interdependencies of the
                  fields in the multi-page dynamic form, which Angular&#39;s
                  Reactive Forms handled well.
                </p>
              </div>
            </div>
          </section>

          {/* details */}
          <div className="lg:w-3/5">
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Official Links
              </h2>
              <ol className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-1">
                  <a
                    href="https://web.archive.org/web/20200806185323/https://dctx.ph/reliefagad/"
                    target="_blank">
                    [DCTX] ReliefAgad
                  </a>
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <a
                    href="https://facebook.com/dswdreliefagad/"
                    target="_blank">
                    [Facebook] ReliefAgad
                  </a>
                </li>
              </ol>
            </article>

            {/* project background */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Project Background
              </h2>

              <div className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  Millions of Filipinos lost their income during the pandemic
                  lockdowns. The Philippine government ordered cash assistance
                  for the indigent, and families had to register as in need of
                  aid by manually filling out a form from DSWD. Once registered,
                  beneficiaries had to go in person to a designated disbursement
                  area to claim the aid in cash, which is far from ideal during
                  a pandemic.
                </p>

                <p className="py-2.5 text-justify">
                  To help with the distribution of emergency funds, DEVCON, in
                  partnership with USAID and the Department of Social Welfare
                  and Development (DSWD), created ReliefAgad. This app
                  streamlines the capture of SAC data and the disbursement of
                  relief funds by using an e-wallet or bank account that enables
                  DSWD to send aid directly to beneficiaries, using the
                  e-payment systems of the regional banking industry.
                </p>

                <p className="py-2.5 text-justify">
                  ReliefAgad is a quick relief system that enables DSWD and
                  local government units (LGUs) to expedite the capture of
                  social amelioration card (SAC) details and interface with any
                  electronic payment system for faster cash relief to targeted
                  beneficiaries.
                </p>
                <p className="py-2.5 text-justify">
                  As of July 2020, over 4.3 million beneficiaries had registered
                  through ReliefAgad, and over 1 million of them had enrolled to
                  receive grants directly in their e-wallets or bank accounts.
                </p>

                <div className="mx-auto my-4 w-[250px] h-[140px] sm:w-[560px] sm:h-[315px]">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/QsULPWpzRFo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              </div>

              <p className="text-tuna/60 py-2 text-justify">As featured in:</p>
              <ol className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-1">
                  <a
                    target="_blank"
                    href="https://opengovasia.com/reliefagad-app-for-electronic-cash-aid-distribution-launched-by-dswd-and-dict/">
                    [OpenGovAsia] ReliefAgad app for electronic cash aid
                    distribution launched by DSWD and DICT
                  </a>
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <a
                    target="_blank"
                    href="https://www.pna.gov.ph/articles/1102887">
                    [Philippine News Agency] ReliefAgad launched for faster aid
                    distribution
                  </a>
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <a
                    target="_blank"
                    href="https://chemonics.com/impact-story/relief-is-just-an-app-away-in-the-philippines/">
                    [Chemonics] Relief Is Just an App Away in the Philippines
                  </a>
                </li>
              </ol>
            </article>

            {/* preview */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Static Preview
              </h2>
              <div
                className="
        grid grid-flow-dense
        gap-10
        grid-cols-1
        sm:grid-cols-2
        py-4
        mx-auto
        justify-items-center
      ">
                {[preview1, preview2, preview3, preview4].map((preview, i) => {
                  const n = i + 1;
                  return (
                    <Image
                      key={n}
                      className={
                        n % 2 ? "sm:justify-self-end" : "sm:justify-self-start"
                      }
                      alt={`ReliefAgad app screenshot ${n} of 4`}
                      src={preview}
                      width={306}
                      height={544}
                      placeholder="blur"
                    />
                  );
                })}
              </div>
            </article>
          </div>
        </div>
        <ProjectNav {...nextPrevProjects} />
        <ContactPrompt />
      </main>
    </>
  );
}
