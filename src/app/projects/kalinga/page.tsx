import ContactPrompt from "@components/ContactPrompt/ContactPrompt";
import { NavBar } from "@components/NavBar/NavBar";
import { ProjectMeta } from "@components/ProjectMeta/ProjectMeta";
import { ProjectNav } from "@components/ProjectNav/ProjectNav";
import { findNextPrevProjects } from "@lib/find-page-nav";
import { PROJECTS } from "@lib/projects.contant";
import { Metadata } from "next";
import Image from "next/image";

const LIVE_URL = "https://kalinga-philhealth-maps.pages.dev";
const IMG = "/images/portfolio/kalinga";

export const metadata: Metadata = {
  title: "Kalinga | Jadurani Davalos",
  description:
    "Find PhilHealth-accredited facilities near you: parsed by category and geotagged so they can be searched by need and location. Independent project, built with an AI coding agent.",
};

const DESKTOP_SHOTS = [
  {
    file: "01-desktop-needs",
    alt: "Kalinga's first screen: choose what you need from 21 plain-language needs in four groups",
  },
  {
    file: "02-desktop-location",
    alt: "Kalinga asking roughly where you are, by place name or device location",
  },
  {
    file: "03-desktop-results",
    alt: "Hospitals near Pasig City as pins on the map, with a nearest-first list beside it",
  },
  {
    file: "04-desktop-legend",
    alt: "The 'reading the map' legend explaining pins and approximate locations",
  },
  {
    file: "05-desktop-details",
    alt: "A facility's details: phone numbers, accreditation expiry and a link to directions",
  },
  {
    file: "10-desktop-hover-approximate",
    alt: "Hover card on an approximate pin, with a note to contact the facility",
  },
];

const MOBILE_SHOTS = [
  { file: "06-mobile-needs", alt: "Choosing a need on a phone" },
  { file: "07-mobile-location", alt: "Saying where you are on a phone" },
  { file: "08-mobile-results", alt: "Results map and list on a phone" },
  { file: "09-mobile-details", alt: "Facility details on a phone" },
];

export default function ProjectPage() {
  const path = "kalinga";
  const nextPrevProjects = findNextPrevProjects(path);
  const project = PROJECTS.find((p) => p.path === path)!;

  const overviewCopy = (
    <>
      <p className="py-2 text-tuna">
        Roughly 14,000 PhilHealth-accredited facilities across 17 regions,
        searchable by what you need and where you are, nearest first.
      </p>
      <p className="py-2">
        Parsed PhilHealth&#39;s accredited-facility lists from various PDF files
        and geotagged the facilities so you can search by what you need and
        where you are, even on a phone and a slow connection. The closest
        matching facilities come first. It is an independent project and is not
        affiliated with PhilHealth.
      </p>
    </>
  );

  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-6xl container mx-auto px-8">
        {/* hero */}
        <Image
          alt="Kalinga showing hospitals near Pasig City on a map"
          src={`${IMG}/kalinga-page-cover.webp`}
          width={1280}
          height={800}
          priority
        />

        <div className="mt-12 flex flex-col lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full py-8 border-t-2 border-b-2 solid border-tuna/5">
              <h1 className="font-heading font-bold text-h2 md:text-h1 leading-tight">
                Kalinga
              </h1>

              <div className="pt-4">
                <ProjectMeta
                  tags={project.tags}
                  status={project.status}
                  launched={project.launched}
                />
              </div>

              <div className="text-tuna/60 py-4 leading-relaxed">
                {overviewCopy}
              </div>

              <div className="mt-4">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-tuna border solid border-tuna bg-transparent h-12 inline-flex hover:text-alabaster hover:bg-tuna">
                  <span className="px-8 uppercase text-body2 font-body tracking-widest align-middle self-center">
                    View Project
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* details */}
          <div className="lg:w-3/5">
            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Project Background
              </h2>
              <div className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  PhilHealth&#39;s accredited facilities are published as{" "}
                  <a
                    href="https://www.philhealth.gov.ph/partners/providers/facilities/accredited/"
                    target="_blank"
                    rel="noopener noreferrer">
                    26 usable PDF lists
                  </a>
                  , one per program. Its{" "}
                  <a
                    href="https://www.philhealth.gov.ph/partners/providers/institutional/map/"
                    target="_blank"
                    rel="noopener noreferrer">
                    own interactive map
                  </a>{" "}
                  returned a 404 when I checked, and the page that pointed to it
                  was down. The data exists, but it is locked in documents that
                  are hard to search on a phone.
                </p>
                <figure className="py-2.5">
                  <Image
                    alt="Browser at www.philhealth.gov.ph/partners/providers/institutional/map/ showing 'Oops! Page Not Found'"
                    src={`${IMG}/philhealth-map-404-full.webp`}
                    width={2826}
                    height={654}
                    className="w-full h-auto"
                  />
                  <figcaption className="text-body2 pt-2">
                    Checked 20 Nov 2026.
                  </figcaption>
                </figure>
                <p className="py-2.5 text-justify">
                  Kalinga turns those lists into a map. You pick what you need
                  (a YAKAP clinic, dialysis, maternity care, dental, animal bite
                  treatment), say roughly where you are, and see the accredited
                  facilities that offer it, nearest first. Tap a pin for
                  details, phone numbers, accreditation expiry and a link to
                  directions.
                </p>
                <Image
                  alt="Kalinga's first screen: choose what you need from 21 plain-language needs in four groups"
                  src={`${IMG}/01-desktop-needs.webp`}
                  width={1280}
                  height={800}
                  className="w-full h-auto py-2.5"
                />
              </div>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Who it&#39;s for
              </h2>
              <div className="text-tuna/60">
                <p className="py-2.5 text-justify">
                  PhilHealth members and their families who need to know where
                  their benefit can actually be used, and the people who help
                  them: barangay health workers, social workers and patient
                  advocates.
                </p>
                <p className="py-2.5 text-justify">
                  The language is plain on purpose. PhilHealth&#39;s program
                  names are replaced by 21 &quot;needs&quot; in four groups,
                  each with its own color and icon, checked for color-vision
                  differences and never relying on color alone.
                </p>
              </div>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                What it contains
              </h2>
              <ul className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-1">
                  14,143 facilities in 17 regions, from 26 PhilHealth lists (the
                  COVID-19 lists are left out on purpose).
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  Locations come from geocoding each address: 39% at street
                  level, 20% to the barangay and 41% to the town centre only.
                  Approximate pins get a dashed ring and a &quot;contact the
                  facility&quot; note instead of a false sense of precision.
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  Privacy by design: nothing about a person&#39;s needs or
                  location is stored, put in the web address or sent anywhere.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Gaps in the source data
              </h2>
              <p className="py-2.5 text-justify text-tuna/60">
                Each of these is shown to the user as a known gap, not hidden:
              </p>
              <ul className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-1">
                  <strong>Birthing Homes (broken link).</strong>{" "}
                  PhilHealth&#39;s accreditation page links to a Birthing Homes
                  list at{" "}
                  <a
                    href="https://www.philhealth.gov.ph/partners/providers/facilities/accredited/MCP_073126.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    MCP_073126.pdf
                  </a>
                  , but instead of a PDF it returns an HTML error page (checked
                  14 Nov 2026). The 26 other lists on the same page download
                  fine, so birthing homes are missing from Kalinga until
                  PhilHealth provides the file.
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <strong>Newborn care (missing, not broken).</strong> There is
                  no newborn-care list on the page at all, so there is no link
                  to fix. Pregnancy care is covered; care for newborns is not.
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  PhilHealth&#39;s own{" "}
                  <a
                    href="https://www.philhealth.gov.ph/partners/providers/institutional/map/"
                    target="_blank"
                    rel="noopener noreferrer">
                    interactive facility map URL
                  </a>{" "}
                  returns 404.
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  Three lists (YAKAP, GAMOT, Cancer Screening) carry no date, so
                  the app says &quot;no date stated&quot; instead of guessing.
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  Some PDF rows have e-mails broken across lines and phone
                  fields holding two numbers; the pipeline repairs these.
                </li>
              </ul>
              <p className="py-2.5 text-justify text-tuna/60">
                Kalinga cannot publish birthing homes or newborn-care facilities
                without data from PhilHealth. Until then the gap is stated
                openly in the app.
              </p>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                How it was built
              </h2>
              <p className="py-2.5 text-justify text-tuna/60">
                Kalinga was built with an AI coding agent (Claude Code), with me
                steering the decisions and reviewing the result:
              </p>
              <ol className="text-tuna/60">
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>Brainstorm first:</strong> who it is for, the 21
                  needs, the privacy rules and hosting, written down before any
                  code.
                </li>
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>Two design documents:</strong> one for the data and
                  one for the interface, with mockups and a color-vision check.
                </li>
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>A 15-task plan, built test-first:</strong> PDF
                  extraction, cleaning, merging, geocoding and a per-region JSON
                  export, then a Preact and TypeScript app with MapLibre.
                </li>
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>Fresh-eyes review:</strong> a separate reviewer read
                  the whole branch, and its important findings were fixed with
                  tests before going on.
                </li>
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>Many short UI rounds,</strong> each checked in a real
                  browser at desktop and phone sizes.
                </li>
                <li className="list-decimal list-outside ml-7 py-1">
                  <strong>A static stack:</strong> Protomaps vector tiles (about
                  760 MB of OpenStreetMap data) on Cloudflare R2 and the app on
                  Cloudflare Pages. No server, no database, no accounts.
                </li>
              </ol>
              <p className="py-2.5 text-justify text-tuna/60">
                158 automated tests cover it, and the data pipeline can be
                re-run whenever PhilHealth updates its lists.
              </p>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                What&#39;s next
              </h2>
              <ul className="text-tuna/60">
                <li className="list-disc list-outside ml-7 py-1">
                  <strong>Birthing homes and newborn care.</strong> The plan to
                  get the data:
                  <ol className="mt-1">
                    <li className="list-decimal list-outside ml-7 py-1">
                      Ask PhilHealth in writing for the Birthing Homes list and
                      a fix for the broken link, through its public contact
                      channels and a freedom-of-information request.
                    </li>
                    <li className="list-decimal list-outside ml-7 py-1">
                      Ask whether a newborn-care accreditation list exists at
                      all, and if so for a dated copy.
                    </li>
                    <li className="list-decimal list-outside ml-7 py-1">
                      Re-check the accreditation page on a schedule. The
                      pipeline re-downloads every list, so a fixed link or a new
                      list is picked up by re-running it.
                    </li>
                    <li className="list-decimal list-outside ml-7 py-1">
                      Publish only what PhilHealth supplies or publishes itself,
                      never guesses from other sources.
                    </li>
                  </ol>
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <strong>Better locations.</strong> More facilities pinned to
                  the building instead of the town centre (today 41% are
                  town-centre only).
                </li>
                <li className="list-disc list-outside ml-7 py-1">
                  <strong>A possible separate project:</strong> facilities
                  partnered with private health insurers (HMOs), for which no
                  open cross-insurer dataset exists.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="mt-6 text-h3 md:text-h2 font-heading">
                Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
                {DESKTOP_SHOTS.map((shot) => (
                  <Image
                    key={shot.file}
                    alt={shot.alt}
                    src={`${IMG}/${shot.file}.webp`}
                    width={1280}
                    height={800}
                    className="w-full h-auto"
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                {MOBILE_SHOTS.map((shot) => (
                  <Image
                    key={shot.file}
                    alt={shot.alt}
                    src={`${IMG}/${shot.file}.webp`}
                    width={390}
                    height={800}
                    className="w-full h-auto"
                  />
                ))}
              </div>
              <p className="text-body2 text-tuna/60 pb-2">
                Map data © OpenStreetMap contributors (ODbL); boundaries from
                OCHA (CC BY-IGO). Kalinga is independent and not affiliated with
                PhilHealth.
              </p>
            </article>
          </div>
        </div>

        <ProjectNav {...nextPrevProjects} />
        <ContactPrompt />
      </main>
    </>
  );
}
