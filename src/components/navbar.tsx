"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const viewport = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
    return window.innerWidth;
  };

  useEffect(() => {
    viewport();
    window.addEventListener("resize", viewport);
    return () => window.removeEventListener("resize", viewport);
  }, [isOpen]);

  return (
    <div
      className={`${isOpen ? "h-screen" : ""} fixed w-full z-20 top-0 start-0`}
    >
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-14 space-y-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo_oxiservicios.svg"
              className="md:h-[50px] h-8 w-auto"
              height={50}
              width={225.981}
              alt="Logo Oxiservicios"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button variant="green" className="rounded-full md:px-10" asChild>
              <a href="#contact">Contáctanos</a>
            </Button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center overflow-hidden justify-end transition-height  duration-150 ${
              isOpen ? "h-44" : "h-0"
            } md:h-min w-full md:flex md:flex-1 md:w-auto md:order-1 md:mx-16`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0"
                >
                  Quiénes somos
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0"
                >
                  Equipos
                </a>
              </li>
              <li>
                <a
                  href="#services1"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="h-full w-full bg-black/50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
