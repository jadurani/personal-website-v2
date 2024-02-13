import coverPhoto from "@assets/images/portfolio/reliefagad/reliefagad-page-cover.webp";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { ProjectNav } from "@components/ProjectNav/ProjectNav";
import { findNextPrevProjects } from "@lib/find-page-nav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DSWD ReliefAgad",
  description: "Interface for the digitalized SAC",
};

export default function ProjectPage() {
  const path = "reliefagad";
  const nextPrevProjects = findNextPrevProjects(path);

  return (
    <>
      <NavBar></NavBar>
      <main className="max-w-6xl container mx-auto px-8">
        {/* hero */}
        <Image alt="project preview for ReliefAgad" src={coverPhoto} />

        <div className="flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                  ReliefAgad
                </h1>

                <div className="text-tuna/60 py-4 md:hidden lg:block leading-relaxed">
                  <p className="py-2">
                    In this project, I led the development of the
                    self-registration app and built the LGU Registration
                    interface.
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
                    <a href="https://material.angular.io/" target="_blank">
                      Angular&#39;s Reactive Forms
                    </a>{" "}
                    was an amazing tool in handling these complexities.
                  </p>
                </div>

                <div className="mt-4 text-body2 text-tuna/60">
                  (Link to live project is no longer available.)
                </div>
              </div>

              <div className="text-tuna/60 py-4 hidden md:block w-full lg:hidden lg:mr-16">
                <p className="py-2">
                  This project required me to design the overall UI/UX and lead
                  the development of the website revamp.
                </p>
                <p className="py-2">
                  My work was a balancing act between creating an interface that
                  was usable for persons comfortable with complexity and those
                  who are not, while at the same time ensuring the technical
                  feasibility of my designs.
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
                  Millions of Filipinos lost their income due to the pandemic
                  lock downs. The Philippine government issued an order to
                  provide cash assistance to the indigent and families must
                  register themselves as in-need of cash assistance by manually
                  writing out a form given by DSWD. Once registered,
                  benificiaries had to manually come in person to the designated
                  disbursement areas and claim the aide in cash, which is not
                  the best form of currency during the pandemic.
                </p>

                <p className="py-2.5 text-justify">
                  To aide with the distribution of emergency funds, DEVCON, in
                  partnership with USAID and the Department of Social Welfare
                  and Development (DSWD), created ReliefAgad. This app
                  streamlines the capture of SAC data and the dispersal of
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
                  As of July 2020, over 4.3 million benificiaries have
                  registered through ReliefAgad, of which, over 1 million have
                  entrolled transaction grants directly to their e-wallets or
                  bank accounts
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
                <img
                  className="sm:justify-self-end"
                  src="/images/portfolio/reliefagad/ra-preview-1.png"
                />
                <img
                  className="sm:justify-self-start"
                  src="/images/portfolio/reliefagad/ra-preview-2.png"
                />
                <img
                  className="sm:justify-self-end"
                  src="/images/portfolio/reliefagad/ra-preview-3.png"
                />
                <img
                  className="sm:justify-self-start"
                  src="/images/portfolio/reliefagad/ra-preview-4.png"
                />
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
