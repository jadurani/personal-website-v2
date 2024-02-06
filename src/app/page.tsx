"use client";

import devImage from "@assets/images/home/jadurani-davalos.webp";
import imgLandingBG from "@assets/images/home/landing-bg.jpg";
import { Button } from "@components/Button/Button";
import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const activeRoute = usePathname();
  const router = useRouter();

  return (
    <>
      <NavBar activeRoute={activeRoute}></NavBar>

      <main>
        <div className="max-w-6xl px-8 container mx-auto mb-16 relative">
          <div className="relative w-full h-full">
            <Image
              src={imgLandingBG}
              alt="hero image"
              className="object-cover object-center h-full"
            />
          </div>

          <div className="bg-alabaster w-full md:bottom-0 md:left-8 md:absolute md:w-2/3 lg:w-2/5 z-10">
            <h1 className="font-heading font-bold text-h2 py-8 leading-none md:text-h1">
              Hey, I&#39;m Rani and I love building beautiful websites
            </h1>
            <Button
              label="About Me"
              isPrimary={true}
              handleClick={() => scrolltoHash("about-me")}></Button>
          </div>
        </div>

        <div
          id="about-me"
          className="max-w-6xl px-8 container mx-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-16 justify-center items-center mb-8">
          {/* <div className="w-[320px] h-[320px] sm:w-full sm:h-[520px] relative"> */}
          <div className="flex-grow w-full relative self-stretch min-h-[320px]">
            <Image
              src={devImage}
              fill
              alt="developer image"
              className="object-cover object-left"
            />
          </div>

          <article className="w-full self-stretch flex-grow flex flex-col justify-center py-4 border-y-2 solid border-tuna/5 lg:mx-16">
            <h2 className="font-heading font-bold text-h2 md:text-h1">
              About Me
            </h2>

            <p className="text-tuna/60 py-2 leading-relaxed lg:leading-loose">
              I&#39;m a software engineer with a strong preference in building
              the user-facing components of the product.
            </p>
            <p className="text-tuna/60 py-2 leading-relaxed lg:leading-loose">
              I&#39;ve worked with public and private organizations in
              identifying problems and building appropriate solutions,
              complemented by my experiences in product design, customer
              support, and project management.
            </p>
            <p className="text-tuna/60 py-2 leading-relaxed lg:leading-loose">
              When I&#39;m not coding, I&#39;m learning to sing better and play
              the piano, to get stronger and more flexible through yoga, and to
              thrive in the wild as a vegetarian. 🥬
            </p>
            <p className="text-tuna/60 py-2 leading-relaxed lg:leading-loose">
              I&#39;d love for you to check out my work.
            </p>

            <div className="flex gap-4 py-2">
              <Button
                label="See Projects"
                handleClick={() => router.push("/portfolio")}></Button>
            </div>
          </article>
        </div>

        <section className="max-w-6xl container mx-auto px-8">
          <ContactPrompt />
        </section>
      </main>
    </>
  );
}

// let's make a function that receive the specific elementId as string and scroll into that elementId
const scrolltoHash = function (elementId: string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};