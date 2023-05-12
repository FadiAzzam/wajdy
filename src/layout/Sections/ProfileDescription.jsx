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

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {socialLinks.map((link, i) => {
          return (
            <div key={i} className="flex justify-between py-2">
              <div className="flex gap-2">
                {/* <div className="text-xl">{link.icon}</div> */}
                <div>
                  <a
                    className="truncate text-xl leading-5 text-blue-200 hover:text-blue-200 whitespace-break-spaces block"
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

      <div className="space-y-3 text-justify">
        <p>
          Welcome to my portfolio website! My name is Wajdi Azzam, and I'm a
          graphic and web designer based in Syria. I specialize in creating
          visually stunning designs for both print and digital media.
        </p>
        <p>
          As a freelancer, I've had the opportunity to work with a wide range of
          clients, from small startups to large corporations. My expertise
          includes branding, logo design, website design, and more. In my work,
          I'm passionate about creating designs that not only look great but
          also solve real-world problems. I believe that good design is about
          more than just aesthetics - it's about creating solutions that meet
          the needs of both the client and the end user.
        </p>

        <p>
          On this website, you'll find a selection of my best work. Each project
          is accompanied by a brief description that highlights my role in the
          project and the challenges that I faced. If you'd like to learn more
          about any of the projects or my design process, please don't hesitate
          to get in touch. When I'm not designing, you can find me exploring the
          outdoors or experimenting with new recipes in the kitchen. I'm always
          looking for new challenges and opportunities to learn and grow as a
          designer.
        </p>
        <p>
          I'm a creative professional in graphic design and several years of
          experience working in the industry. I specialize in creating designs
          that are not only aesthetically pleasing but also functional and
          effective. My goal is to collaborate with clients to create designs
          that meet their specific needs and achieve their goals. I believe in
          putting the client first and working closely with them throughout the
          design process.
        </p>

        <p>
          Thank you for visiting my portfolio website, and I look forward to
          hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ProfileDescription;
