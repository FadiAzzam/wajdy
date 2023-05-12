import React from "react";
import { skillsHierarchyContent } from "../../constants";

const ProfileSkills = () => {
  return (
    <div className="drop-shadow-2xl grid md:grid-cols-2 gap-3 md:gap-0 backdrop-blur word-break-word  p-3 bg-gray-700/20 rounded-lg">
      {skillsHierarchyContent.map((exp) => {
        return exp.map((skill, i) => {
          return (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex gap-2 items-center text-indigo-400 ">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <p className="truncate leading-5 whitespace-break-spaces">
                    {skill.label}
                  </p>
                </div>
              </div>
              <div className="pl-3 flex flex-col gap-3">
                {skill.children.map((child) => {
                  return (
                    <div className="flex gap-2 items-center">
                      <div className="text-xl">{child.icon}</div>
                      <div>
                        <p className="truncate  leading-5 text-gray-500 whitespace-break-spaces">
                          {child.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default ProfileSkills;
