import ContactForm from "@components/ContactForm/ContactForm";
import { NavBar } from "@components/NavBar/NavBar";
import { SocialLinks } from "@components/SocialLinks/SocialLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Jadurani Davalos",
};

export default function ContactMePage() {
  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-6xl container mx-auto">
        <section className="h-full p-8 border-t-2 solid border-tuna/5 flex flex-col md:flex-row gap-4 md:gap-16">
          <h1 className="flex-grow md:w-2/5 text-h2 md:text-h1 font-heading font-bold">
            Get in Touch
          </h1>

          <article className="text-tuna/60 md:w-3/5">
            <p className="leading-loose">
              I&#39;d love to hear about what you&#39;re working on and how I
              could help. My preference would be to find a position in a
              globally remote working environment, but I&#39;m also happy to
              hear about opportunites that don&#39;t fit that description.
              I&#39;m a hard-working and positive person who will always
              approach each task with a sense of purpose and attention to
              detail. Please do feel free to check out my online profiles below
              and get in touch using the form.
            </p>
            <SocialLinks className="py-8" />
          </article>
        </section>
        <section className="p-8 border-t-2 solid border-tuna/5 flex flex-col md:flex-row gap-4 md:gap-16">
          <h1 className="flex-grow md:w-2/5 text-h2 md:text-h1 font-heading font-bold">
            Contact Me
          </h1>
          <div className="text-tuna/60 md:w-3/5">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
