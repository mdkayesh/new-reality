"use client";

import React from "react";
import Logo from "./Logo";
import navData from "@/data/navbar.json";
import Link from "next/link";
import { IoCaretDownSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MdOutlineSearch } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <nav
          className="py-5 flex gap-4 justify-between items-center
        "
        >
          {/* left */}
          <div className="flex gap-10 items-center">
            <Logo />

            <ul className="gap-5 items-center hidden min-[1160px]:flex">
              {navData.navlinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.url}
                    className={`${
                      pathname === link.url ? "text-primary" : ""
                    } flex gap-1 items-center`}
                  >
                    <span>{link.title}</span>
                    {link.dropdownLinks && (
                      <span>
                        <IoCaretDownSharp />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right */}

          <div className="flex gap-5 items-center">
            {/* mobile menu */}
            <button
              type="button"
              className="menu text-2xl min-[1160px]:hidden"
              title="menu"
            >
              <RiMenu3Fill />
            </button>
            <div className="search pt-1">
              <button type="button" title="search" className="text-2xl">
                <MdOutlineSearch />
              </button>
            </div>

            <div className="lang hidden gap-2 items-center min-[1160px]:flex">
              <Image
                src={"/assets/usflag.png"}
                width={100}
                height={30}
                alt="usflag"
                className="w-[30px] h-[25px]"
              />
              <span>EN</span>
              <span>
                <IoCaretDownSharp />
              </span>
            </div>

            <div className="devider h-[35px] w-[1px] bg-text-100 hidden md:block" />
            <Link href={"/"} className="hover:text-primary hidden md:block">
              Sign in
            </Link>

            <Button
              tag="link"
              href="/"
              btnClass="gap-2 items-center hidden md:flex"
            >
              <span>Join Free</span>
              <span>
                <HiPlus />
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
