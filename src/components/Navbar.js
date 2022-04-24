import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="relative flex container mx-auto mt-8 py-4 px-16 justify-between items-center rounded-18 shadow-lg bg-white">
        {/* LOGO */}
        <div>
          <img
            src={require("./images/Logo.png")}
            alt="logo.png"
            width="150px"
            height="auto"
          />
        </div>

        {/* LINKS */}
        <div className="hidden xl:flex">
          <ul className="flex space-x-16 text-lg items-center font-light ">
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Doughnuts
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Locations
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Careers
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Team
            </li>
            <li>
              <button
                type="button"
                className="border rounded-18 font-light px-6 py-2 text-dark-pink border-dark-pink hover:text-white hover:bg-dark-pink transition ease-in-out"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>

        {/* HAMBURGER AND CROSS SVG */}
        <div onClick={handleNav} className="block xl:hidden cursor-pointer">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>

        {/* HAMBURGER MENU */}
        <div
          className={
            isOpen
              ? "absolute xl:hidden text-center top-10 right-0 mt-8 py-4 px-16 text-lg items-center font-light rounded-18 shadow-lg bg-white"
              : "hidden"
          }
        >
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Doughnuts
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Locations
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Careers
            </li>
            <li className="cursor-pointer hover:text-dark-pink transition ease-in">
              Team
            </li>
            <li>
              <button
                type="button"
                className="border rounded-18 font-light px-6 py-2 text-dark-pink border-dark-pink hover:text-white hover:bg-dark-pink transition ease-in-out"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
