import React from "react";
import SkillsCard from "../../components/SkillsCard";

const Expertise = () => {
  const expertiseArray = [
    {
      title: "illustrator",
      desc: `lorem ipsum`,
      tags: [""],
    },
    {
      title: "Photoshop",
      desc: `lorem ipsum`,
      tags: [""],
    },
    {
      title: "UI/UX-Design",
      desc: `lorem ipsum`,
      tags: ["Adobe XD", "Figma", "Web-Design"],
    },
  ];

  return (
    <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
      <div className="py-28 container mx-auto flex flex-col gap-10">
        <div className="text-left">
          <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">
            My knowledge
          </p>
          <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">
            My key design skills
          </h2>
          <p>
            I'm a creative professional in graphic design and several years of
            experience working in the industry. I specialize in creating designs
            that are not only aesthetically pleasing but also functional and
            effective. My goal is to collaborate with clients to create designs
            that meet their specific needs and achieve their goals. I believe in
            putting the client first and working closely with them throughout
            the design process.
          </p>
        </div>

        <div className="box-border max-w-7xl sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
          {expertiseArray.map((e, i) => {
            return <SkillsCard key={i} skill={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
