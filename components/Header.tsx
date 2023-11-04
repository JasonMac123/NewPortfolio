"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const links = [
  {
    name: "Home",
    section: "#home",
  },
  {
    name: "About",
    section: "#about",
  },
  {
    name: "Projects",
    section: "#projects",
  },
  {
    name: "Skills",
    section: "#skills",
  },
  {
    name: "Experience",
    section: "#experience",
  },
  {
    name: "Contact",
    section: "#contact",
  },
];

const Header = () => {
  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center"
              key={link.section}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-1 hover:text-gray-800 transition"
                href={link.section}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
