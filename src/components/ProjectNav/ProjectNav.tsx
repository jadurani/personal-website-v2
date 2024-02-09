import { ProjectPreview } from "@lib/projects.contant";
import Image from "next/image";
import Link from "next/link";

export interface ProjectNavProps {
  prev: ProjectPreview;
  next: ProjectPreview;
}

export const ProjectNav = ({ prev, next }: ProjectNavProps) => {
  return (
    <section className="mt-8 lg:mt-20 flex items-center justify-between flex-row flex-no-wrap border-t-2 border-b-2 solid border-tuna/5">
      <Link
        href={prev.path}
        className="text-tuna border-0 w-1/2 flex flex-col justify-between md:justify-normal self-stretch items-start md:flex-row md:items-center py-4 hover:bg-eggshell transition-colors flex-grow border-r-2 solid border-tuna/5">
        <Image
          className="hidden sm:block mb-2 md:my-auto md:mx-4"
          alt="arrow left"
          src="/icons/arrow-left.svg"
          width={12}
          height={12}></Image>
        <div>
          <h2 className="block font-heading leading-none md:leading-snug text-body1 sm:text-h5 md:text-h2">
            {prev.title}
          </h2>
          <span className="text-tuna/60 block lg:-mt-2 text-body2 lg:text-body1">
            Previous Project
          </span>
        </div>
      </Link>

      <Link
        href={next.path}
        className="text-tuna border-0 w-1/2 flex flex-col justify-between md:justify-normal self-stretch items-end text-right md:flex-row-reverse md:items-center py-4 hover:bg-eggshell transition-colors flex-grow">
        <Image
          className="hidden sm:block mb-2 md:my-auto md:mx-4"
          alt="arrow right"
          src="/icons/arrow-right.svg"
          width={12}
          height={12}></Image>
        <div>
          <h2 className="block font-heading leading-none md:leading-snug text-body1 sm:text-h5 md:text-h2">
            {next.title}
          </h2>
          <span className="text-tuna/60 block lg:-mt-2 text-body2 lg:text-body1">
            Next Project
          </span>
        </div>
      </Link>
    </section>
  );
};
