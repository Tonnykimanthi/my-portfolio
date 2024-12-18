"use client";

import Link from "next/link";
import { useState } from "react";

// Icons
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between">
      <div className="space-x-5">
        <button className="rounded-full border border-dark bg-dark px-4 py-2 text-light transition hover:bg-transparent hover:text-dark">
          EMAIL
        </button>
        <button className="rounded-full border border-dark px-4 py-2 transition hover:bg-dark hover:text-light">
          CV
        </button>
      </div>
      <button className="sm:hidden" onClick={() => setNavIsOpen(true)}>
        <RiMenu3Fill className="size-8" />
      </button>
      <nav
        className={`inset-0 z-10 origin-top-right font-medium transition max-sm:absolute max-sm:bg-dark max-sm:text-light ${navIsOpen ? "max-sm:scale-100" : "max-sm:scale-0"}`}
      >
        <button
          className="absolute right-8 top-8 rounded-full p-1.5 hover:bg-light/20 sm:hidden"
          onClick={() => setNavIsOpen(false)}
        >
          <IoMdClose className="size-8" />
        </button>
        <ul className="flex items-center gap-8 max-sm:mt-24 max-sm:flex-col [&>li>a]:uppercase">
          <li className="relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary hover:after:w-full">
            <Link href="#">About</Link>
          </li>
          <li className="relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary hover:after:w-full">
            <Link href="#">Skills</Link>
          </li>
          <li className="relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary hover:after:w-full">
            <Link href="#">Projects</Link>
          </li>
          <li className="relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary hover:after:w-full">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
