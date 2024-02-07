import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360degrees systems corporation | Jadurani Davalos",
  description:
    "Construction company website built with Next.js and TailwindCSS, and deployed via Vercel",
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
              src={"/images/portfolio/360degrees/360degrees-page-cover.webp"}
            />
          </div>
        </div>

        <div className="flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                  360Degrees Website
                </h1>

                <div className="text-tuna/60 py-4 md:hidden lg:block leading-relaxed">
                  <p className="py-2">
                    For this project, I designed and built a fully responsive
                    website for a construction company.
                  </p>
                  <p className="py-2">
                    Loosely designed via{" "}
                    <a href="https://www.figma.com/" target="_blank">
                      Figma
                    </a>{" "}
                    , built with{" "}
                    <a href="https://nextjs.org/" target="_blank">
                      Next.js
                    </a>{" "}
                    and{" "}
                    <a href="https://tailwindcss.com/" target="_blank">
                      Tailwind
                    </a>
                    , and deployed via{" "}
                    <a href="https://vercel.com/" target="_blank">
                      Vercel
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href="https://www.360degreessystemscorporation.com/"
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
                  For this project, I designed and built a fully responsive
                  website for a construction company.
                </p>
                <p className="py-2">
                  Loosely designed via{" "}
                  <a href="https://www.figma.com/" target="_blank">
                    Figma
                  </a>{" "}
                  , built with{" "}
                  <a href="https://nextjs.org/" target="_blank">
                    Next.js
                  </a>{" "}
                  and{" "}
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind
                  </a>
                  , and deployed via{" "}
                  <a href="https://vercel.com/" target="_blank">
                    Vercel
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* details */}
          <div className="lg:w-3/5">
            {/* project background */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Project Background
              </h2>
              <div className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  I received an invitation to work on this project via LinkedIn.
                  A former colleague forwarded my profile to their friend who
                  needed a skilled designer and developer to build a new website
                  for a construction company in the Philippines.
                </p>
                <p className="py-2.5 text-justify">
                  The construction company already had an existing website and
                  they needed a new one to showcase who they are and reflects
                  the awesome work that they do in building creative office
                  spaces. ✨
                </p>
              </div>
            </article>

            {/* website design */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Website Design 🎨
              </h2>
              <p className="py-2.5 text-justify text-tuna/60">
                The first version of the website was built 10 years ago. This
                was what they had prior to the revamp:
              </p>
              <div className="relative w-full h-full my-2">
                <img
                  alt="project preview for the Project NOAH, Revamped!"
                  className="object-contain lg:object-cover w-full h-full"
                  src="/images/portfolio/360degrees/old-360degrees-landing.jpg"
                />
              </div>
              <p className="py-2.5 text-justify text-tuna/60">
                After viewing the client&#39;s{" "}
                <a
                  href="https://www.360degreessystemscorporation.com/projects/"
                  target="_blank">
                  own portfolio projects
                </a>
                , it was clear to me that they needed a simple but
                modern-looking website that highlights their own magic. Having
                too much “fluff” on their website might compete with the primary
                objective of actually showcasing the company&#39;s work.
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                The client had a new logo coming up with the website revamp and
                they had another contractor working on it. While waiting for the
                final logo, I worked on drawing the wireframes based on the
                outline they have given to me in one of our initial meetings.
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                Upon receiving the updated logo, I decided on the colors and
                fonts that we&#39;ll use for the website and started working on
                the designs in Figma. Whenever I created a draft of a page, I
                sent my client the link to my interactive mock-up and request
                for comments.
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                You may view the prototype below (the password is my given name
                😘) :
              </p>
              <div className="mx-auto my-4 w-[250px] h-[140px] xs:w-[320px] xs:h-[180px] sm:w-[560px] sm:h-[315px]">
                <iframe
                  className="h-full w-full"
                  title="Figma prototype | Jadurani Davalos"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcumZUZPTpe42jceQhSJySr%2F360Degrees-Website-Revamp%3Ftype%3Ddesign%26node-id%3D144-2050%26t%3DFh3alKqTBiLmisHo-1%26scaling%3Dscale-down%26page-id%3D101%253A2%26starting-point-node-id%3D144%253A2050%26mode%3Ddesign"
                  allowFullScreen></iframe>
              </div>
              <p className="py-2.5 text-justify text-tuna/60">
                Once I received a go-signal from the client, I went ahead and
                started to deal with the technical implementation.
              </p>
            </article>

            {/* Development 🏗️ */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Building on a brownfield 🏗️
              </h2>
              <p className="py-2.5 text-justify text-tuna/60">
                Although building the designs was a breeze, we encountered a few
                challenges in the website development and deployments, having
                multiple missing or misconfigured records and no one knows who
                has access to what anymore and there were no documentations on
                them either 😅
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                I won&#39;t go over the details of the complexities here for
                privacy reasons, but to summarize, I went ahead and investigated
                the current state of the system, contacted the support teams of
                the external parties and previous vendors involved, laid out the
                problems to the client, and suggested possible approaches to
                deal with the said complexities, each with pros and cons and
                estimated costs.
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                Once the client made the decision on which approach to take, I
                proceeded with the development and deployment.
              </p>
              <p className="py-2.5 text-justify text-tuna/60">
                We closed the project with me handing over documentation on
                their system detailing the roadblocks we&#39;ve encountered and
                the decisions made in relation to them. To top it off, I held a
                training session with their staff to help them make some small
                updates in the contents of the website.
              </p>
            </article>

            {/* Mission accomplished 🚀 */}
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Mission accomplished 🚀
              </h2>
              <p className="py-2.5 text-justify text-tuna/60">
                Overall, I had a fun working on this project and I&#39;m glad
                that I could help them design and build a website that met the
                company&#39;s needs.
              </p>
            </article>
          </div>
        </div>

        <ContactPrompt />
      </main>
    </>
  );
}
