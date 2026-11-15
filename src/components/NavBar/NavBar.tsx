"use client";

import menuCloseIcon from "@assets/icons/icon-close-menu.svg";
import menuIcon from "@assets/icons/icon-menu.svg";

import { SocialLinks } from "@components/SocialLinks/SocialLinks";
import { NAV_LINKS } from "@lib/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavBarProps {
  activeRoute?: string;
}

export const NavBar = ({ activeRoute: activeRouteProp }: NavBarProps) => {
  const pathname = usePathname();
  const currentPath = activeRouteProp ?? pathname;
  // "/portfolio/foo" keeps "Portfolio" active; "/" only matches exactly
  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath?.startsWith(path);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 16) {
        // ✨ magic number ✨ because i decided so
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-screen ${
          isTransparent ? "bg-white/0" : "bg-white"
        } transition-colors duration-300 ease-in-out`}>
        <nav className="container max-w-6xl mx-auto p-8 lg:py-6 flex justify-between items-center lg:items-start">
          <Link
            href="/"
            className="border-0 font-heading font-bold text-h3 text-tuna -mt-1">
            <div className="">jadurani</div>
          </Link>

          <div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Image src={menuIcon} alt="open menu icon" />
            </button>

            <ul className="py-4 hidden md:flex md:gap-8 justify-stretch items-center">
              {NAV_LINKS.map((navLink, idx) => (
                <li key={idx}>
                  <Link
                    href={navLink.path}
                    className={`text-body2 border-0 uppercase tracking-widest hover:text-verdigris transition-colors ${isActive(navLink.path) ? "text-verdigris" : "text-tuna"}`}>
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div
          className={`${isMenuOpen ? "right-0" : "-right-[120%]"} transition-[right] top-0 fixed bg-eggshell w-screen h-screen duration-700 ease-in-out overflow-hidden z-50`}>
          <div className="h-full flex flex-col justify-between">
            <div className="flex w-full mt-2">
              <button
                className="ml-auto p-8"
                onClick={() => setIsMenuOpen(false)}>
                <Image src={menuCloseIcon} alt="close menu icon" />
              </button>
            </div>

            <ul>
              {NAV_LINKS.map((navLink, idx) => (
                <li
                  key={idx}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 text-center">
                  <Link
                    href={navLink.path}
                    className={`block text-body2 border-0 uppercase tracking-widest hover:text-verdigris transition-colors ${isActive(navLink.path) ? "text-verdigris" : "text-tuna"}`}>
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>

            <SocialLinks className="justify-center py-8" />
          </div>
        </div>
      </header>
    </>
  );
};
