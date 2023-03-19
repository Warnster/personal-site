// create a mobile responsive navbar using tailwindcss
"use client";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sm:px-4 py-1 bg-white w-full z-20 top-0 left-0 shadow-md">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="block py-1 pl-3 pr-4 hover:bg-gray-100">Lewis Warner</a>
    <div className="flex md:order-2">
        <button  onClick={toggleMenu} className="inline-flex items-center p-2 text-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div className={`items-center justify-between ${!isOpen && 'hidden'} w-full md:flex md:w-auto md:order-1`} >
      <ul className="flex flex-col p-4 mt-4 border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
        <a href="/" className="block py-1 pl-3 pr-4 hover:bg-gray-100">CV</a>
        </li>
        <li>
          <a href="/contact" className="block py-1 pl-3 pr-4 hover:bg-gray-100">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
};
