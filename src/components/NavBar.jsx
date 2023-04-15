import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNavBar] = useState(false);
  const links = [
    {
      id: 1,
      links: "Home",
    },
    {
      id: 2,
      links: "About",
    },
    {
      id: 3,
      links: "Portfolio",
    },
    {
      id: 4,
      links: "Experience",
    },
    {
      id: 5,
      links: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white sticky top-0 bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Barakat</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, links }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {links}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNavBar(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, links }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {links}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
