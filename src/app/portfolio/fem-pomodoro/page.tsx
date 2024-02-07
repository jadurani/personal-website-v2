import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor - Pomodoro App | Jadurani Davalos",
  description:
    "This Pomodoro app provided some tricky challenges, including building a circular progress bar and a range of customizations, like colors and fonts.",
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
              alt="project preview of the pomodoro app"
              className="object-contain lg:object-cover w-full h-full"
              src={
                "/images/portfolio/fem-pomodoro/fem-pomodoro-app-page-cover.webp"
              }
            />
          </div>
        </div>

        <div className="flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                  Pomodoro App
                </h1>

                <div className="text-tuna/60 py-4 md:hidden lg:block leading-relaxed">
                  <p className="py-2">
                    This Pomodoro app provided some tricky challenges, including
                    building a circular progress bar and a range of
                    customizations, like colors and fonts.
                  </p>
                  <p className="py-2">
                    Built with{" "}
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
                    href="https://pomodoro-app-jadurani.vercel.app/"
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
                  This project was a front-end challenge from Frontend Mentor.
                  It&#39;s a platform that enables you to practice building
                  websites to a design and project brief.
                </p>
                <p className="py-2.5 text-justify">
                  This was my first Next.js project and my first React project
                  in a while. This was also the first time I&#39;ve tried using
                  Storybook. So far, I found that component-based development
                  from the ground up can be tedious at first but it keeps my app
                  more easier to tweak, ensuring that all instances of the same
                  component will have the same look-and-feel.
                </p>
                <p className="py-2.5 text-justify">
                  Through this project I&#39;ve familiarized myself with:
                </p>
                <ol>
                  <li className="list-disc list-outside ml-7 py-1">
                    React useState and useContext
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Storybook
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    NextJS - project structure, next fonts
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Hosting and Deployment via Vercel
                  </li>
                  <li className="list-disc list-outside ml-7 py-1">
                    Animations with SVG
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>

        <ContactPrompt />
      </main>
    </>
  );
}
