import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4 md:py-8 container mt-auto">
        <nav className="p-3 w-full flex-wrap justify-center md:flex-nowrap flex items-center md:items-baseline mx-auto rounded-full drop-shadow-2xl bg-gray-700/20 backdrop-blur ">
          <ul className="text-base flex justify-between items-center  ">
            <li className="p-3 ">
              <NavLink
                className="hover:text-blue-500 flex justify-center"
                to="/"
              >
                wajdiazzam.com
              </NavLink>
            </li>

            <li className="p-3 ">
              <NavLink
                className="hover:text-blue-500 flex justify-center"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            <li className="p-3 ">
              <NavLink
                className="hover:text-blue-500 flex justify-center"
                to="/impressum"
              >
                Imprint
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
