"use client";

import devImage from "@assets/images/home/home-dev-image.jpg";
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
              Hey, I&#39;m Alex Spencer and I love building beautiful websites
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
          <div className="w-[320px] h-[320px] sm:w-full sm:h-[520px] relative">
            <Image
              src={devImage}
              fill
              alt="developer image"
              className="object-cover object-right"
            />
          </div>

          <article className="w-full self-stretch flex-grow flex flex-col justify-center py-8 border-t-2 border-b-2 solid border-tuna/5 lg:mx-16">
            <h2 className="font-heading font-bold text-h2 md:text-h1">
              About Me
            </h2>

            <p className="text-tuna/60 py-4 leading-relaxed lg:leading-loose">
              I&#39;m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I&#39;m based in London, UK, but I&#39;m happy
              working remotely and have experience in remote teams. When I&#39;m
              not coding, you&#39;ll find me outdoors. I love being out in
              nature whether that&#39;s going for a walk, run or cycling.
              I&#39;d love you to check out my work.
            </p>

            <div>
              <Button
                label="Go to Portfolio"
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