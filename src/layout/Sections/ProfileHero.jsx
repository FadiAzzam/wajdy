import React from "react";
import { FaTerminal } from "react-icons/fa";
import { BsCalendar4Week } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const ProfileHero = () => {
  return (
    <div>
      <div className="w-full bg-indigo-400 h-72 flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-none tracking-tight  uppercase">
          Product & UI designer
        </h1>
      </div>
      <div className="container">
        <div className="flex items-center gap-3 flex-col md:flex-row">
          <div className="w-36 md:h-36 h-16 relative">
            <div className="absolute md:bottom-8 bottom-0">
              <img
                className="w-36 h-36 rounded-full object-cover object-center border-4 border-lightBlue bg-bodyFontColor"
                src={require("../../assets/imgs/wajdy.jpeg")}
                alt=""
              />
            </div>
          </div>
          <div className="flex md:items-center justify-between flex-1 w-full flex-col md:flex-row pb-3">
            <div className="font-medium dark:text-white py-3 md:py-7 ">
              <div className="flex items-center gap-1">
                <h1 className="text-2xl text-white">Wajdi Azzam</h1>
                <FcApproval className="text-lg text-green-400" />
              </div>
              <p className="text-sm py-1">Professional Graphic Designer</p>
              <div className="flex gap-3">
                <div className="flex items-center justify-center gap-2">
                  <GoLocation className="text-gray-400/80 text-sm font-extralight" />
                  <p className="text-sm text-gray-400/80 font-extralight">
                    Sweida, Syria
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BsCalendar4Week className="text-gray-400/80 text-sm font-extralight" />
                  <p className="text-sm text-gray-400/80 font-extralight">
                    Since 2011
                  </p>
                </div>
              </div>
            </div>

            <Link
              className="rounded-sm  text-white bg-indigo-400 hover:border-indigo-400 border border-transparent text-sm px-4 py-2.5 text-center flex items-center gap-2"
              to="/contact"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
