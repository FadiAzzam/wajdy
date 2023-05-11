import React from "react";

import { MdWork, MdSchool } from "react-icons/md";
import {
  workExperienceContent,
  educationContent,
  socialLinks,
} from "../../constants/index";
import { GoLocation } from "react-icons/go";

const ProfileDescription = () => {
  return (
    <div className="md:sticky top-32 drop-shadow-2xl backdrop-blur  p-3 bg-gray-700/20 rounded-lg h-full basis-full ">
      <h3 className="text-lg">Profile</h3>
      <div>
        {workExperienceContent.map((exp, i) => {
          return (
            <div key={i} className="flex justify-between py-2">
              <div className="flex gap-2">
                <div>
                  <MdWork className="text-xl" />
                </div>
                <div>
                  <p className="truncate text-xs leading-5 text-gray-500 whitespace-break-spaces">
                    {exp.title} bei{" "}
                    <strong className="font-semibold text-gray-400">
                      {exp.company}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {educationContent.map((edu, i) => {
          return (
            <div key={i} className="flex justify-between py-2">
              <div className="flex gap-2">
                <div>
                  <MdSchool className="text-xl" />
                </div>
                <div>
                  <p className="truncate text-xs leading-5 text-gray-500 whitespace-break-spaces">
                    Studied here:{" "}
                    <strong className="font-semibold text-gray-400">
                      {edu.company}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between py-2">
          <div className="flex gap-2">
            <div>
              <GoLocation className="text-xl" />
            </div>
            <div>
              <p className="truncate text-xs leading-5 text-gray-500 whitespace-break-spaces">
                lives in
                <strong className="font-semibold text-gray-400">
                  {" "}
                  Sweida, Syria
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {socialLinks.map((link, i) => {
          return (
            <div key={i} className="flex justify-between py-2">
              <div className="flex gap-2">
                <div className="text-xl">{link.icon}</div>
                <div>
                  <a
                    className="truncate text-xs leading-5 text-blue-400 hover:text-blue-200 whitespace-break-spaces block"
                    target="blank"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDescription;
