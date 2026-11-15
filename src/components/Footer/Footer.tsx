import { FontBody } from "@lib/fonts";
import { NAV_LINKS } from "@lib/nav-links";
import { SocialLinks } from "@components/SocialLinks/SocialLinks";
import Link from "next/link";

const Footer = () => (
  <footer className={`w-screen bg-tuna text-white ${FontBody.variable}`}>
    <div className="container max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
      <nav className="flex flex-col md:flex-row items-center">
        {/* Logo */}
        <Link
          href="/"
          className="border-0 font-heading font-bold text-white text-h3 -mt-1">
          <div className="">jadurani</div>
        </Link>

        <ul className="md:ml-16 flex items-center flex-col md:flex-row gap-4 mt-5 md:mt-auto">
          {NAV_LINKS.map((navLink, idx) => (
            <li key={idx} className="p-4 text-center ">
              <Link
                href={navLink.path}
                className="block border-0 text-body2 uppercase text-white tracking-widest hover:text-verdigris transition-colors">
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SocialLinks
        className="justify-center md:justify-end my-8 md:my-auto"
        iconClassName="text-white hover:text-verdigris"
      />
    </div>
  </footer>
);

export default Footer;
