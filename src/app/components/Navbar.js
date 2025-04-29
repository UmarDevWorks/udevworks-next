// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 fixed top-0 z-10 w-full shadow-sm py-4 flex items-center justify-between">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-black text-2xl font-bold">
          <Link className="text-left" href="/">
            Muhammad Umar
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex justify-end ml-4 mr-2 relative">
          <button className="text-black lg:hidden border-black border-2 rounded-sm" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 transform transition-transform duration-500 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Navbar Links */}
        <ul
          className={`
            flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0
            mt-4 lg:mt-0 ml-auto text-black
            transform transition-all duration-500 ease-in-out
            ${isOpen ? "opacity-100 scale-100 translate-y-0 max-h-96 pointer-events-auto" 
                     : "opacity-0 scale-95 -translate-y-5 max-h-0 pointer-events-none"}
            overflow-hidden
            lg:opacity-100 lg:scale-100 lg:translate-y-0 lg:pointer-events-auto lg:max-h-full
          `}
          
        >
          <li>
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`mt-4 text-md mb-4 ml-4 transform transition duration-500 hover:scale-105 ${
            isOpen ? "hidden" : "block"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
