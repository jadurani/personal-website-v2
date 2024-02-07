import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";
// import Image from "next/image";

// import previewProjectComet from "@assets/images/portfolio/noah-revamped/preview-comet.gif";

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

        <div className="flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                  Project NOAH, Revamped!
                </h1>

                <div className="text-tuna/60 py-4 md:hidden lg:block leading-relaxed">
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
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
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
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
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
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Demo Preview
              </h2>
              <p className="text-tuna/60 py-2 text-justify">
                The following video is{" "}
                <a
                  href="https://pistangmapa.org/2021/programme/session/pnm210301"
                  target="_blank">
                  our entry at Pista ng Mapa 2021
                </a>
                , where I&#39;ve had the honor of presenting our work on the
                revamped NOAH website:
              </p>
              <div className="mx-auto my-4 w-[250px] h-[140px] xs:w-[320px] xs:h-[180px] sm:w-[560px] sm:h-[315px]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/owiipDLqg_U"
                  title="YouTube video player | Jadurani Davalos showcasing the Revamped Project NOAH"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            </article>

            {/* Implementation Details */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Implementation Details
              </h2>
              <p className="text-tuna/60 py-2 text-justify">
                This was such a huge adventure for me and read on to know more
                about the process we&#39;ve taken to accomplish this.
              </p>

              {/* 1 - Goals and Objectives */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  1 - Goals and Objectives
                </h3>
                <p className="text-tuna/60 py-2 text-justify">
                  The revamp process started with identifying the goals of the
                  project. Through a{" "}
                  <a
                    href="https://www.energy.gov/eere/communicationstandards/articles/templates-and-examples-interviews-and-focus-groups"
                    target="_blank">
                    stakeholder questionnaire
                  </a>
                  , we gathered information on why we are doing the revamp,
                  what&#39;s our definition of done, who&#39;s our intended
                  audience. Who wants the revamp anyway?
                </p>
                <p className="text-tuna/60 py-2 text-justify">
                  Together with the UPRI Core WebGIS team, the stakeholder being
                  interviewed at the time was UP NOAH&#39;s Executive Director,
                  Dr. Mahar Lagmay, and here&#39;s what can be concluded from{" "}
                  <a
                    href="https://docs.google.com/document/d/1BJmljHRpmcv01zHlHQBx7JuVglpGcKhpr5K29qleA9w/edit?usp=sharing"
                    target="_blank">
                    the interview
                  </a>
                  :
                </p>

                <ol className="text-tuna/60">
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
                  <li className="list-disc list-outside ml-7 py-2">
                    The current tech stack is outdated, making it brittle and
                    difficult to introduce more features
                  </li>
                </ol>
              </article>

              {/* 2 - Evaluation of the “Current” Project */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  2 - Evaluation of the “Current” Project
                </h3>
                <p className="text-tuna/60 py-2 text-justify">
                  The project was evaluated in terms of the then-current user
                  experience and technical implementation. I&#39;ll first go
                  over the feedback on the user experience and then the state of
                  the tech stack.
                </p>

                {/* User Interface and User Experience */}
                <article>
                  <h4 className="mt-4 text-h5 md:text-h4 font-heading">
                    User Interface and User Experience
                  </h4>
                  <p className="text-tuna/60 py-2 text-justify">
                    Here&#39;s how the old NOAH website&#39;s landing page
                    looked like:
                  </p>
                  <div className="relative w-full h-full my-2">
                    <img
                      alt="project preview for the Project NOAH, Revamped!"
                      className="object-contain lg:object-cover w-full h-full"
                      src={
                        "/images/portfolio/noah-revamped/old-noah-landing-page-with-modal.webp"
                      }
                    />
                  </div>
                  <p className="text-tuna/60 py-2 text-justify">
                    We gathered feedback from current users, both technical and
                    non-technical, as well as included our own.
                  </p>
                  <p className="text-tuna/60 py-2 text-justify italic">
                    Note: When we say “technical” from hereon, we mean people
                    who are used to dealing with complexity, such as
                    policy-makers and researchers, while “non-technical” refers
                    to those who just need the information on the hazards in
                    their area. Think of “technical” people as airplane pilots
                    and “non-technical” people as the plane passengers who only
                    need to get to their destination.
                  </p>
                  <div className="my-2 flex gap-4 flex-wrap lg:flex-nowrap w-full">
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

                  <p className="text-tuna/60 py-2 text-justify">
                    Going back, the main issues raised in the Project NOAH
                    website can be summarized as follows:
                  </p>
                  <ol className="text-tuna/60">
                    <li className="list-disc list-outside ml-7 py-2">
                      There&#39;s no clear value proposition in the landing
                      page, it&#39;s informative of what NOAH is, but what&#39;s
                      in it for the users? There&#39;s no call-to-action on how
                      the user can benefit from the information presented
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      The icons were not too clear -- you either have to hover
                      on the icons to know what it&#39;s for or click on it only
                      to find out it&#39;s not what you&#39;re looking for
                    </li>
                  </ol>

                  <div className="block my-4">
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
                  <p className="text-tuna/60 py-2 text-justify">
                    The old NOAH website was built with the first version of
                    React mixed with jQuery and BootstrapCSS. All hazard maps
                    rendered in the browser were in the form of geo-tagged PNG
                    files, queried from GeoServer given the bounding box
                    computed from the user&#39;s screen.
                  </p>
                  <p className="text-tuna/60 py-2 text-justify">
                    There were other features that NOAH hosts but our main focus
                    for the revamp was to communicate the hazards for flood,
                    landslides, and storm surges.
                  </p>

                  <p className="text-tuna/60 py-2 text-justify">
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
                  <p className="text-tuna/60 py-2 text-justify">
                    I&#39;ve made it known to the team that I have no prior
                    knowledge of WebGIS and related technologies and that I
                    would need help on which direction I could go in
                    investigating what&#39;s possible. I&#39;ve also shared that
                    my designs will focus on functionality and it won&#39;t be
                    too ✨fancy✨
                  </p>
                </article>
              </article>

              {/* 3 - Review of Related Projects */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  3 - Review of Related Projects
                </h3>
                <p className="text-tuna/60 py-2 text-justify">
                  Now that we&#39;ve laid out what was given, we wanted to build
                  something that hasn&#39;t been done before in the scale that
                  we&#39;re targeting.{" "}
                </p>
                <p className="text-tuna/60 py-2 text-justify">
                  I looked for similar projects and here are what I&#39;ve found
                  that inspired me the most:
                </p>

                {/* app 1 */}
                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    Project 1: Marikina Flood-Risk Visualization
                  </h4>

                  {/* Link */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Link:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        <a
                          href="http://comet.dlsu.edu.ph/riesgo-vis/"
                          target="_blank">
                          http://comet.dlsu.edu.ph/riesgo-vis/
                        </a>
                      </li>
                    </ul>
                  </section>

                  {/* Preview */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Preview:</h5>
                    <div className="my-4 mx-6">
                      <img
                        src="/images/portfolio/noah-revamped/preview-comet.gif"
                        alt="preview of sample project"
                      />
                    </div>
                  </section>

                  {/* What is it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What is it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        This is a project by Briane Paul V. Samson from{" "}
                        <a href="https://www.fun.ac.jp/en/" target="_blank">
                          Future University Hakodate
                        </a>{" "}
                        &{" "}
                        <a href="https://www.dlsu.edu.ph/" target="_blank">
                          De La Salle University
                        </a>{" "}
                        and Unisse C. Chua from{" "}
                        <a href="https://www.dlsu.edu.ph/" target="_blank">
                          De La Salle University
                        </a>
                        . I came to know about this project in Dec 2019 during
                        Ms. Chua&#39;s presentation on Data Science and Data
                        Communication, emphasizing the importance of sharing
                        your reserach findings and the data that you gathered in
                        ways that are consumable to the public.{" "}
                      </li>
                    </ul>
                  </section>

                  {/* What I like about it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What I like about it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        Illustrated information on an area in different aspects
                        (Climate and Annual Precipitation, Population,
                        Evacuation Areas, Ideal Coverage, Estimated Coverage,
                        Accessibility, Suitability).
                      </li>
                      <li className="list-disc list-outside ml-7 my-2">
                        Interactive, 3D maps, scrollytelling!
                      </li>
                    </ul>
                  </section>

                  {/* Other thoughts */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Other thoughts:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        The storytelling format isn&#39;t applicable on a
                        national scale, at least not yet—we&#39;ll need to
                        coordinate with the different and specific local
                        government units to achieve what Ms Chua and Mr. Samson
                        did with their project, an endeavor we don&#39;t have
                        the capacity to perform at the moment
                      </li>
                    </ul>
                  </section>
                </article>

                {/* app 2 */}
                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    Project 2: May Pasok Ba
                  </h4>

                  {/* Link */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Link:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        <a href="https://maypasokba.com/" target="_blank">
                          https://maypasokba.com/
                        </a>
                      </li>
                    </ul>
                  </section>

                  {/* Preview */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Preview:</h5>
                    <div className="my-4 mx-6">
                      <img
                        src="/images/portfolio/noah-revamped/preview-maypasokba.webp"
                        alt="preview of sample project"
                      />
                    </div>
                  </section>

                  {/* What is it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What is it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        “May Pasok Ba” literally just asks if there&#39;s school
                        or work today, in the context of typhoon suspensions or
                        national holidays
                      </li>
                    </ul>
                  </section>

                  {/* What I like about it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What I like about it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        Simple and straightforward answer. Sometimes news
                        articles tend to bloat the info with the speed of wind
                        and direction, instead of answering the question
                        directly on whether there&#39;s classes or work during
                        the day
                      </li>
                    </ul>
                  </section>

                  {/* Other thoughts */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Other thoughts:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        Too simple, doesn&#39;t always cite sources, doesn&#39;t
                        necessarily cover the entire Philippines
                      </li>
                    </ul>
                  </section>
                </article>

                {/* app 3 */}
                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    Project 3: USGS TopoView
                  </h4>

                  {/* Link */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Link:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2 break-all">
                        <a
                          href="https://ngmdb.usgs.gov/topoview/viewer/#4/39.98/-100.06"
                          target="_blank">
                          https://ngmdb.usgs.gov/topoview/viewer/#4/39.98/-100.06
                        </a>
                      </li>
                    </ul>
                  </section>

                  {/* Preview */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">Preview:</h5>
                    <div className="my-4 mx-6">
                      <img
                        src="/images/portfolio/noah-revamped/preview-topoview.gif"
                        alt="preview of sample project"
                      />
                    </div>
                  </section>

                  {/* What is it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What is it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        TopoView shows the many and varied topographic maps of
                        areas through history. This can be particularly useful
                        for historical purposes, such as finding the names of
                        natural and cultural features that have changed over
                        time.
                      </li>
                    </ul>
                  </section>

                  {/* What I like about it */}
                  <section className="mt-2 text-tuna/60">
                    <h5 className="text-tuna/80">What I like about it:</h5>
                    <ul className="mx-2">
                      <li className="list-disc list-outside ml-7 my-2">
                        Beautiful, on-brand, and intuitive interface
                      </li>
                      <li className="list-disc list-outside ml-7 my-2">
                        Complex controls while maintaining mobile-responsive
                        design
                      </li>
                    </ul>
                  </section>
                </article>

                <p className="text-tuna/60 py-2 text-justify">
                  The key item that I personally liked in these project is how
                  usable they are and how effective they deliver information
                  visually and interactively. This is what inspired me the most
                  in designing the other features of the app, which I&#39;ll
                  discuss in the next section.
                </p>
              </article>

              {/* 4 - The Dance Between Design and Tech */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  4 - The Dance Between Design and Tech
                </h3>
                <p className="text-tuna/60 py-2 text-justify">
                  Given the goals of the project, target user segments, and some
                  design inspirations, I came up with the following design
                  ideas:
                </p>

                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    Design Idea 1: Know Your Hazard
                  </h4>
                  <p className="text-tuna/60 py-2 text-justify">
                    The idea is for a user to only share their location for them
                    to be know the hazards in their area, whether that&#39;s
                    flood, landslides, and storm surges. They don&#39;t need to
                    know the technicalities under it and how it was determined.
                    They just need to informed of the hazards in their area so
                    they can prepare accordingly.
                  </p>
                  <p className="text-tuna/60 py-2 text-justify">
                    Going back to the plane analogy, they just need a “ride” to
                    get to their destination as opposed to learning the inner
                    workings of a car.
                  </p>
                </article>

                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    Design Idea 2: NOAH Studio
                  </h4>
                  <p className="text-tuna/60 py-2 text-justify">
                    For the technical users, I wanted them to have a
                    “playground” through which they could use all the hazard
                    maps that we have and super-impose them on top of one
                    another. These users have specialized knowledge on hazards
                    and disaster risk and reduction such as our policy makers,
                    urban planners, mayors, and GIS researchers. They should be
                    given as much control on how they want to view data as they
                    see fit. For this segment of users, I give them the “NOAH
                    Playground”. (We later renamed it to “NOAH Studio“ since
                    “Playground” sounded too jovial for a product that directly
                    deals with life and death scenarios. 👀)
                  </p>
                  <p className="text-tuna/60 py-2 text-justify"></p>
                </article>

                <article>
                  <h4 className="mt-5 text-h5 md:text-h4 font-heading">
                    The Challenge
                  </h4>
                  <p className="text-tuna/60 py-2 text-justify">
                    Before I could create detailed mock-ups of these features, I
                    wanted to first confirm how feasible are they and how costly
                    would it be to make them possible. Honestly, I got into some
                    sort of deadlock during the design phase because although I
                    had an idea of what I wanted our users to experience, I
                    could not go into the details of how the interface would
                    look like unless I already knew what was possible in the
                    first place.
                  </p>

                  <p className="text-tuna/60 py-2 text-justify">
                    To translate the design ideas above, we needed answers to
                    these questions:
                  </p>
                  <ol className="text-tuna/60">
                    <li className="list-disc list-outside ml-7 py-2">
                      Given a pair of coordinates, how can we determine the
                      hazards in the area?
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      Given the whole map of the Philippines, how can we view
                      all the hazards at the same time?
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      Given GeoServer and the user&#39;s coordinates (and not
                      the bounding box), can we determine a single hazard level
                      in their area?
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      Can we determine ALL of the hazards in an area at the same
                      time (regardless of type), in one query? At what cost?
                      (This was a major design concern. If we it takes a while
                      to query all hazards within a certain radius of user&#39;s
                      coordinates, might as well design the user experience such
                      that they will only view one hazard at a time and walk
                      them through the hazards similar to how{" "}
                      <a
                        href="http://comet.dlsu.edu.ph/riesgo-vis/"
                        target="_blank">
                        Marikina Flood-Risk Visualization
                      </a>{" "}
                      communicated their data.)
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      What other alternatives do we have to GeoServer? Why were
                      we using it?
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      Geo-tagged PNG files must have been in another form before
                      it was rasterized as a PNG file and served by GeoServer.
                      What was the format of the data before they were PNG
                      files?
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      If NOAH&#39;s web app displays the hazard levels as
                      geo-tagged PNG files that are colored 0, 1, and 2, is it
                      possible to change the colors IN THE BROWSER?
                    </li>
                  </ol>

                  <p className="text-tuna/60 py-2 text-justify">
                    These questions belong to the first batch of questions that
                    later on spawned more follow-up questions and answers, all
                    which I&#39;ve drawn in the following mindmap:
                  </p>
                  <div className="mx-auto mt-4 mb-8 w-[250px] h-[140px] xs:w-[320px] xs:h-[180px] sm:w-[560px] sm:h-[315px]">
                    <iframe
                      className="h-full w-full overflow-hidden"
                      src="https://www.mindmeister.com/maps/public_map_shell/3148646278/noah-revamp?width=600&height=400&z=auto&live_update=1&no_share=1&no_logo=1"
                      scrolling="no">
                      Your browser is not able to display frames. Please visit{" "}
                      <a
                        href="https://www.mindmeister.com/3148646278/noah-revamp"
                        target="_blank">
                        NOAH Revamp
                      </a>{" "}
                      on MindMeister.
                    </iframe>
                    <div className="mb-5">
                      <a
                        href="https://www.mindmeister.com/3148646278/noah-revamp"
                        target="_blank">
                        NOAH Revamp
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://www.mindmeister.com/users/channel/68768196"
                        target="_blank"
                        rel="noopener noreferrer">
                        Jadurani Davalos
                      </a>
                    </div>
                  </div>

                  <p className="text-tuna/60 py-2 text-justify">
                    Feel free to hit me up if you want me to go over all the
                    technical details included in the mindmap above, but
                    I&#39;ll just summarize what happened next:
                  </p>

                  <ol className="text-tuna/60">
                    <li className="list-disc list-outside ml-7 py-2">
                      After exploring possibilities with GeoServer and hitting a
                      wall so costly to handle, we deemed it best to use Mapbox
                      for storing and displaying our geospatial data. We wanted
                      to stay focused on the main goal of the revamp, which is
                      to communicate the data we already have, instead of
                      recreating and maintaining the wheel. It was more costly
                      to do it ourselves than to pay and use an existing
                      platform that specializes on the functionalities we
                      wanted.
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      We&#39;ve uploaded our shapefiles in Mapbox and we started
                      rendering the hazard maps as vector tilesets in the
                      browser, making it possible to customize their colors and
                      transparency on the fly.
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      Prince and Dianne of the backend team did a great job at
                      processing the shapefiles to make it “lighter” on the UI
                      to render them at the same time, allowing us to render
                      hazard maps that cover the entire country without waiting
                      for a whole minute to load. You may view their scripts at{" "}
                      <a
                        href="https://github.com/UPRI-NOAH/mapbox-processor"
                        target="_blank">
                        https://github.com/UPRI-NOAH/mapbox-processor
                      </a>
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      We entered a partnership program with Mapbox. Since then,
                      they have forgiven our 💸 bills 💸 and{" "}
                      <a
                        href="https://www.mapbox.com/blog/mapmakers-take-action-on-climate-change"
                        target="_blank">
                        featured NOAH on their blog
                      </a>{" "}
                      🙏🏽
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      For the Know-Your-Hazard feature, in the end we were able
                      to evaluate the levels of ALL the hazards (floods,
                      landslides, and storm surges) within a 50-meter radius of
                      a user&#39;s coordinate.
                    </li>
                    <li className="list-disc list-outside ml-7 py-2">
                      For the NOAH Studio, we were able to showcase all of the
                      hazards in an area and give the user granular control on
                      which hazards and critical facilities to view as well as
                      their color and transparency. If you&#39;re wondering
                      about the state management of the app, this was heavily
                      reliant on RxJS.
                    </li>
                  </ol>

                  <p className="text-tuna/60 py-2">
                    You may view the frontend code at{" "}
                    <a
                      href="https://github.com/UPRI-NOAH/noah-frontend."
                      target="_blank"
                      rel="noopener noreferrer">
                      https://github.com/UPRI-NOAH/noah-frontend.
                    </a>
                  </p>
                </article>
              </article>

              {/* 5 - Results and Outcome */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  5 - Results and Outcome
                </h3>

                <p className="text-tuna/60 py-2 text-justify">
                  Six months after its launch, the revamped NOAH website have
                  reached nearly two million sessions through organic traffic:{" "}
                </p>
                <div className="mx-auto my-4 w-[250px] h-[209px] sm:w-[500px] sm:h-[419px]">
                  <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUPNOAH%2Fposts%2Fpfbid02WkD9xx2TLGhUvG1jJDsy8THq3yxSghdwG8gZx5G9xKevtrTaTaXc9nWrfK8rJSwgl&show_text=false&width=500"
                    className="h-full w-full border-0 overflow-hidden"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>

                <p className="text-tuna/60 py-2 text-justify">
                  As featured in:
                </p>
                <ol>
                  <li className="list-disc list-outside ml-7 py-1">
                    <a
                      target="_blank"
                      href="https://interaksyon.philstar.com/trends-spotlights/2021/10/08/201995/up-noah-finally-launches-new-website-with-hazard-assessments-of-philippine-areas/">
                      [PhilStar] UP NOAH finally launches new website with
                      hazard assessments of Philippine areas
                    </a>
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    <a
                      target="_blank"
                      href="https://www.rappler.com/newsbreak/iq/159975-project-noah-contribute-ph-disaster-management/">
                      [Rappler] How does Project NOAH contribute to PH&#39;s
                      disaster management?
                    </a>
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    <a
                      target="_blank"
                      href="https://www.goodnewspilipinas.com/how-up-noah-helps-build-filipino-resilience-against-disaster/">
                      [Good News Pilipinas] How UP NOAH helps build Filipino
                      resilience against disaster
                    </a>
                  </li>
                </ol>
              </article>

              {/* 6 - Feature Wishlist */}
              <article>
                <h3 className="mt-4 text-h4 md:text-h3 font-heading">
                  6 - Wishlist💫
                </h3>

                <p className="text-tuna/60 py-2 text-justify">
                  Here are other features and improvements that I think would be
                  great to be included in the web app or created as spinoffs:{" "}
                </p>
                <ol className="text-tuna/60">
                  <li className="list-disc list-outside ml-7 py-1">
                    Translations (we have roughly 180 live languages)
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Update shapefiles (these were from 2012; the Philippine
                    landscape must have changed since then); Higher resolution
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Cover missing areas — there were areas that were not
                    completed for the hazard maps of different “levels”
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Evacuation centers to be clearly identified and in
                    real-time. The “Critical Facilities” featured in the current
                    iteration of the website CAN be evacuation centers but
                    aren&#39;t ALWAYS assigned as facilities for evacuation.
                  </li>
                </ol>
                <p className="text-tuna/60 py-2 text-justif italic">
                  Note that these are my personal sentiments and do not
                  represent UP and UPRI - NOAH.
                </p>
              </article>
            </article>
          </div>
        </div>

        <ContactPrompt />
      </main>
    </>
  );
}
