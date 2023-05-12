import React from "react";
import { socialLinks } from "../../constants";

const ProfileContact = () => {
  return (
    <div className="drop-shadow-2xl backdrop-blur  p-6 bg-gray-700/20 rounded-lg h-full space-y-3 text-justify">
      <p className="">
        Want to get in touch? You can reach me at [Email Address] or [Phone
        Number]. Connect with me on LinkedIn or Behance to stay up-to-date on my
        latest projects and design tips.
      </p>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {socialLinks.map((link, i) => {
          return (
            <div key={i} className="flex justify-between py-2">
              <div className="flex gap-2">
                {/* <div className="text-xl">{link.icon}</div> */}
                <div>
                  <a
                    className="truncate text-xl leading-5 text-blue-200 hover:text-indigo-400 whitespace-break-spaces block"
                    target="blank"
                    href={link.link}
                  >
                    {link.icon}
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

export default ProfileContact;
