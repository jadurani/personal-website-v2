import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project NOAH, Revamped! | Jadurani Davalos",
  description: "Project built with Angular",
};

export default function ProjectPage() {
  // const router = useRouter();
  // const [_, __, projectLink] = usePathname().split("/");
  // // const proj = PROJECTS.find((p) => p.link == projectLink);
  // const proj = PROJECTS[1];
  // const projIndex = PROJECTS.findIndex((p) => p.link == projectLink) || 1;

  // const nextProjectIdx = projIndex + 1 == PROJECTS.length ? 0 : projIndex + 1;
  // const prevProjectIdx =
  //   projIndex - 1 < 0 ? PROJECTS.length - 1 : projIndex - 1;

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
            <section>
              <h2 className="text-h3 md:text-h2 font-heading">
                Project Background
              </h2>
              <article className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  The Philippines is a hotbed of disasters.
                </p>
                <p className="py-2.5 text-justify">
                  Located along the typhoon belt in the Pacific, our country
                  experiences an average of 20 typhoons every year. Being
                  situated in the “Pacific Ring of Fire” makes our country
                  vulnerable to frequent earthquakes and volcanic eruptions. We
                  experience some of the most devastating of typhoons ever
                  recorded (Typhoons Yolanda/Haiyan, Pablo/Bopha, among others)
                  claiming thousands of lives at their wake.
                </p>
                <p className="py-2.5 text-justify">
                  Project NOAH is a response to the late Philippine President
                  Benigno “Noynoy” Aquino&#39;s call for a scientific and
                  data-driven efforts to monitor and assess potential natural
                  hazards even before they happen. It was&nbsp;
                  <Link
                    target="_blank"
                    className="cursor-pointer text-verdigris"
                    href="https://www.officialgazette.gov.ph/2012/07/06/project-noah-launch-july-6-2012/">
                    launched in 2012
                  </Link>
                  &nbsp;and it has since then been a significant step forward in
                  improving the country&#39;s disaster risk reduction and
                  management capabilities.
                </p>

                <p className="py-2.5 text-justify">
                  In 2021, we revamped the UP NOAH interface and modernized the
                  tools used in evaluating the hazards in an individual&#39;s
                  area.
                </p>
                <div className="mx-auto my-4 w-[250px] h-[209px] sm:w-[500px] sm:h-[419px]">
                  <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUPNOAH%2Fposts%2Fpfbid02WkD9xx2TLGhUvG1jJDsy8THq3yxSghdwG8gZx5G9xKevtrTaTaXc9nWrfK8rJSwgl&show_text=false&width=500"
                    className="h-full w-full"
                    style={{ border: "none", overflow: "hidden" }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
              </article>
            </section>
          </div>
        </div>

        <ContactPrompt />
      </main>
    </>
  );
}
