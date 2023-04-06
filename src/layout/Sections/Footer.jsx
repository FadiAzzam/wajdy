import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-2 sm:px-4 py-2.5 w-full bg-primaryBG">
        <div className="container bg-white rounded-lg my-8">
          <ul className="flex gap-5 justify-center">
            <li>
              <NavLink
                to={"/"}
                className="md:p-4 py-2 font-typeFont  block hover:text-blue-200"
              >
                Wajdyazzam.com
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="md:p-4 py-2 block font-typeFont hover:text-blue-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul className="flex gap-5 justify-center pt-3">
            <li className="font-light">
              Follow me on LinkedIn and Behance for more design inspiration and
              updates.
            </li>
          </ul>
          <ul className="flex gap-5 justify-center pb-3">
            <li className="font-light">
              Copyright © 2023 Wajdy Azzam. All rights reserved.
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
