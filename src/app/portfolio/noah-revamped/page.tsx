import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project NOAH, Revamped! | Jadurani Davalos",
  description: "Project built with Angular",
};

export default function ProjectPage() {
  return (
    <>
      <NavBar activeRoute="/portfolio"></NavBar>

      <main className="max-w-6xl container mx-auto px-8">
        {/* hero */}
        <div>
          <div className="relative w-full h-full mb-12">
            <img
              alt="project preview for the Project NOAH, Revamped!"
              className="object-contain lg:object-cover w-full h-full"
              src={"/images/portfolio/noah-revamped/noah-page-cover.webp"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1">
                  Project NOAH, Revamped!
                </h1>

                <div className="text-tuna/60 py-4 md:hidden lg:block">
                  <p className="py-2">
                    This project required me to design the overall UI/UX and
                    lead the development of the website revamp.
                  </p>
                  <p className="py-2">
                    My work was a balancing act between creating an interface
                    that was usable for persons comfortable with complexity and
                    those who are not, while at the same time ensuring the
                    technical feasibility of my designs.
                  </p>
                </div>

                <ul className="font-bold text-body2 text-verdigris">
                  <li className="my-2">Figma, Interaction Design</li>
                  <li className="my-2">Angular, Typescript, RxJS</li>
                  <li className="my-2">Mapbox</li>
                </ul>

                <div className="mt-4">
                  <a
                    href="https://noah.up.edu.ph/"
                    target="_blank"
                    className={`transition-colors text-tuna border solid border-tuna bg-transparent h-12 inline-flex hover:text-alabaster hover:bg-tuna disabled:border-eggshell disabled:text-eggshell disabled:bg-transparent`}>
                    <span className="px-8 uppercase text-body2 font-body tracking-widest align-middle self-center">
                      View Project
                    </span>
                  </a>
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
              <h2 className="text-h3 md:text-h2 font-heading">
                Official Links
              </h2>
              <ol className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-2">
                  <a href="https://noah.up.edu.ph/" target="_blank">
                    UP NOAH - Nationwide Operational Assessment of Hazards
                  </a>
                </li>
                <li className="list-disc list-outside ml-7 py-2">
                  <a href="https://www.facebook.com/UPNOAH/" target="_blank">
                    [Facebook] UP NOAH
                  </a>
                </li>
                <li className="list-disc list-outside ml-7 py-2">
                  <a
                    href="https://github.com/UPRI-NOAH/noah-frontend"
                    target="_blank">
                    [Github] UPRI-NOAH/noah-frontend
                  </a>
                </li>
              </ol>
            </article>

            {/* project background */}
            <article>
              <h2 className="text-h3 md:text-h2 font-heading">
                Project Background
              </h2>
              <div className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  The Philippines is a hotbed of disasters.
                </p>
                <p className="py-2.5 text-justify">
                  Located along the typhoon belt in the Pacific, our country
                  experiences an average of 20 typhoons every year. Being
                  situated in the{" "}
                  <a
                    target="_blank"
                    href="https://education.nationalgeographic.org/resource/plate-tectonics-ring-fire/">
                    Pacific Ring of Fire
                  </a>{" "}
                  also makes our country vulnerable to frequent earthquakes and
                  volcanic eruptions. We experience some of the most devastating
                  of typhoons ever recorded (Typhoons Yolanda/Haiyan,
                  Pablo/Bopha, among others) claiming thousands of lives at
                  their wake.
                </p>

                <p className="py-2.5 text-justify">
                  In 2012,{" "}
                  <a
                    target="_blank"
                    href="https://www.officialgazette.gov.ph/2012/07/06/project-noah-launch-july-6-2012/">
                    Project NOAH was launched
                  </a>{" "}
                  as a research program under DOST (Department of Science and
                  Technology) as a response to the late Philippine President
                  Aquino&#39;s call for a scientific and data-driven efforts to
                  monitor and assess potential natural hazards even before they
                  happen. It has since then been a significant step forward in
                  improving the country&#39;s disaster risk reduction and
                  management capabilities.
                </p>

                <p className="py-2.5 text-justify">
                  In 2017,{" "}
                  <a
                    target="_blank"
                    href="https://reliefweb.int/report/philippines/philippines-continue-project-noah">
                    the University of the Philippines adopted Project NOAH
                  </a>{" "}
                  and now falls under the Office of the President in UP.
                  Specifically, the UP Resilience Institute, with Dr. Mahar
                  Lagmay as the executive director, continue to maintain the
                  project to date.
                </p>

                <p className="py-2.5 text-justify">
                  In 2021,{" "}
                  <a
                    target="_blank"
                    href="https://www.facebook.com/UPNOAH/posts/3125135504429570">
                    I worked with the UPRI Core WebGIS team
                  </a>{" "}
                  in rebuilding NOAH&#39;s frontend web app to focus on
                  usability and modern technologies.
                </p>
              </div>
            </article>

            {/* preview */}
            <article>
              <h2 className="text-h3 md:text-h2 font-heading">Demo Preview</h2>
              <p className="text-tuna/60 py-2.5 text-justify">
                The following video is{" "}
                <a
                  href="https://pistangmapa.org/2021/programme/session/pnm210301"
                  target="_blank">
                  our entry at Pista ng Mapa 2021
                </a>
                , where I&#39;ve had the honor of presenting our work on the
                revamped NOAH website:
              </p>
              <div className="mx-auto my-4 w-[250px] h-[140px] sm:w-[560px] sm:h-[315px]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/owiipDLqg_U"
                  title="YouTube video player | Jadurani Davalos showcasing the Revamped Project NOAH"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            </article>

            {/* Design and Development */}
            <article>
              <h2 className="text-h3 md:text-h2 font-heading">
                Design and Development
              </h2>
              <p>
                In this piece, I’ll walk you through the process we’ve taken in
                the revamp.
              </p>

              {/* 1 - Goals and Objectives */}
              <article>
                <h3 className="text-h4 md:text-h3 font-heading">
                  1 - Goals and Objectives
                </h3>
                <p>
                  The revamp process started with identifying the goals of the
                  project. Through a{" "}
                  <a
                    href="https://www.energy.gov/eere/communicationstandards/articles/templates-and-examples-interviews-and-focus-groups"
                    target="_blank">
                    stakeholder questionnaire
                  </a>
                  , we gathered information on why we are doing the revamp,
                  what’s our definition of done, who’s our intended audience,
                  etc.
                </p>
                <p>
                  The stakeholder being interviewed at the time was UP NOAH’s
                  Executive Director, Dr. Mahar Lagmay, and here’s what can be
                  concluded from{" "}
                  <a
                    href="https://docs.google.com/document/d/1BJmljHRpmcv01zHlHQBx7JuVglpGcKhpr5K29qleA9w/edit?usp=sharing"
                    target="_blank">
                    his answers
                  </a>
                  :
                </p>
                <ol>
                  <li className="list-disc list-outside ml-7 py-2">
                    Inform the lay person of the hazard exposure in their area,
                    regardless of their expertise in reading maps, so they can
                    data-driven and science-based decisions and take early
                    actions before calamities take place
                  </li>
                  <li className="list-disc list-outside ml-7 py-2">
                    Provide all the data we have to users who need to see things
                    in the macro in a clear and organized manner, such as
                    researchers and policy makers
                  </li>
                </ol>
              </article>

              {/* 2 - Evaluation of the “Current” Project */}
              <article>
                <h3 className="text-h4 md:text-h3 font-heading">
                  2 - Evaluation of the “Current” Project
                </h3>
                <p>
                  The project was evaluated in terms of the then-current user
                  experience and technical implementation. I’ll first go over
                  the feedback on the user experience and then the state of the
                  tech stack.
                </p>

                {/* User Interface and User Experience */}
                <article>
                  <h4 className="text-h5 md:text-h4 font-heading">
                    User Interface and User Experience
                  </h4>
                  <p>
                    Here’s how the old NOAH website’s landing page looked like:
                  </p>
                  <div className="relative w-full h-full mb-12">
                    <img
                      alt="project preview for the Project NOAH, Revamped!"
                      className="object-contain lg:object-cover w-full h-full"
                      src={
                        "/images/portfolio/noah-revamped/old-noah-landing-page-with-modal.webp"
                      }
                    />
                  </div>
                  <p>
                    We gathered feedback from current users, both technical and
                    non-technical, as well as included our own.
                  </p>
                  <p>
                    Note: When we say “technical” from hereon, we mean people
                    who are used to dealing with complexity, such as
                    policy-makers and researchers, while “non-technical” refers
                    to those who just need the information on the hazards in
                    their area. Think of “technical” people as airplane pilots
                    and “non-technical” people as the plane passengers who only
                    need to get to their destination.
                  </p>
                  <div className="flex gap-4 flex-wrap lg:flex-nowrap w-full">
                    <div>
                      <img
                        alt="Photo of airplane pilots in a cockpit, likened to the user segment that are comfortable with complexity"
                        className="object-contain lg:object-cover flex-grow h-full"
                        src={
                          "/images/portfolio/noah-revamped/technical-users.webp"
                        }
                      />
                    </div>
                    <div>
                      <img
                        alt="Photo of airplane passengers, likened to the user segment that do not need to deal with the complexities of flying"
                        className="object-contain lg:object-cover flex-grow h-full"
                        src={
                          "/images/portfolio/noah-revamped/non-technical-users.webp"
                        }
                      />
                    </div>
                  </div>

                  <p>
                    Going back, the main issues raised in the Project NOAH
                    website can be summarized as follows:
                  </p>
                  <ol>
                    <li>
                      There’s no clear value proposition in the landing page,
                      it’s informative of what NOAH is, but what’s in it for the
                      users? There’s no call-to-action on how the user can
                      benefit from the information presented
                    </li>
                    <li>
                      The icons were not too clear -- you either have to hover
                      on the icons to know what it’s for or click on it only to
                      find out it’s not what you’re looking for
                    </li>
                  </ol>

                  <div className="block">
                    <img
                      alt="Screenshot of the old NOAH web app"
                      className="object-contain lg:object-cover w-full h-full"
                      src={
                        "/images/portfolio/noah-revamped/old-noah-storm-surges.webp"
                      }
                    />
                  </div>
                </article>

                {/* Technical Implementation */}
                <article>
                  <h4 className="text-h5 md:text-h4 font-heading">
                    Technical Implementation
                  </h4>
                  <p>
                    The NOAH website was built with the first version of React
                    mixed with jQuery and BootstrapCSS. All hazard maps rendered
                    in the browser were in the form of geo-tagged PNG files,
                    queried from GeoServer given the bounding box computed from
                    the user’s screen.
                  </p>
                  <p>
                    There were other features that NOAH hosts but our main focus
                    for the revamp was to communicate the hazards for flood,
                    landslides, and storm surges.
                  </p>

                  <p>
                    The UPRI Core WebGIS team wanted a complete revamp of the
                    project and advised me to not be limited by the current tech
                    stack and have encouraged me to explore any technology to
                    make it possible to implement my designs.
                  </p>
                </article>

                {/* Work Parameters */}
                <article>
                  <h4 className="text-h5 md:text-h4 font-heading">
                    Work Parameters
                  </h4>
                  <p>
                    I’ve made it known to the team that I have no prior
                    knowledge of WebGIS and related technologies and that I
                    would need help on which direction I could go in
                    investigating what’s possible. I’ve also shared that my
                    designs will focus on functionality and it won’t be too
                    ✨ fancy ✨ 
                  </p>
                </article>
              </article>

              {/* 3 - Review of Related Apps */}
              <article>
                <h3 className="text-h4 md:text-h3 font-heading">
                  3 - Review of Related Apps
                </h3>
                <p>
                  Now that we’ve laid out what was given, we wanted to build
                  something that hasn’t been done before in the scale that we’re
                  targeting.{" "}
                </p>
                <p>
                  I looked for similar projects and here are what I’ve found
                  that inspired me the most:
                </p>

                <article>
                  <h4 className="text-h5 md:text-h4 font-heading">
                    Marikina Flood-Risk Visualization
                  </h4>

                  {/* Link */}
                  <section>
                    <h5></h5>
                    <ul>
                      <li></li>
                    </ul>
                  </section>
                </article>
              </article>
            </article>
          </div>
        </div>

        <ContactPrompt />
      </main>
    </>
  );
}
