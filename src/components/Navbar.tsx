"use client";

import navData from "@/data/navbar.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { IoCaretDownSharp } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import Button from "./Button";
import CloseToOutClick from "./CloseToOutClick";
import Dropdown from "./Dropdown";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import { Modal } from "./Modal";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="py-5 flex gap-4 justify-between items-center">
            {/* left */}
            <div className="flex gap-10 items-center">
              <Logo />

              <ul className="gap-5 items-center hidden min-[1160px]:flex">
                {navData.navlinks.map((link) => (
                  <li key={link.title} className="group relative">
                    <Link
                      href={link.url}
                      className={`${
                        pathname === link.url ? "text-primary" : ""
                      } flex gap-1 items-center group-hover:text-primary py-2`}
                    >
                      <span>{link.title}</span>
                      {link.dropdownLinks && (
                        <span>
                          <IoCaretDownSharp />
                        </span>
                      )}
                    </Link>
                    {link.dropdownLinks && (
                      <ul className="absolute top-full left-0 w-[160px] rounded-xl z-50 bg-bg-secondary-200 overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        {link.dropdownLinks.map((link) => (
                          <li key={link.title}>
                            <Link
                              href={link.url}
                              className="block px-4 py-2 w-full hover:bg-bg-secondary-100"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
              <CloseToOutClick onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <div className="search pt-1 relative">
                  <button
                    type="button"
                    title="search"
                    className="text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MdOutlineSearch />
                  </button>

                  <Dropdown
                    isOpen={isOpen}
                    className="px-4 rounded-lg -translate-x-full !left-full !w-[200px]"
                  >
                    <SearchBar underline={false} />
                  </Dropdown>
                </div>
              </CloseToOutClick>

              {/* language */}
              <div className="group relative hidden min-[1160px]:block">
                <button
                  type="button"
                  className="lang gap-2 group-hover:text-primary items-center flex"
                >
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
                </button>

                <ul className="absolute top-full left-0 w-[160px] rounded-xl z-50 bg-bg-secondary-200 overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  {navData.languages.map((lang) => (
                    <li key={lang.title}>
                      <button
                        type="button"
                        className="flex w-full px-5 py-2 hover:bg-bg-secondary-100"
                      >
                        {lang.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="devider h-[35px] w-[1px] bg-text-100 hidden md:block" />
              <button
                type="button"
                className="hover:text-primary hidden md:block"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Sign in
              </button>

              <Button
                tag="button"
                btnClass="gap-2 items-center hidden md:flex"
                onClick={() => setIsModalOpen(!isModalOpen)}
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
      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <LoginForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Navbar;
