import React from "react";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const projectsArr = [
    {
      id: 1,
      title: "project 01",
      thumbnail: "https://picsum.photos/900/300/?random",
      images: [
        "https://picsum.photos/900/300/?random",
        "https://picsum.photos/900/300/?random",
      ],
      desc: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
      tags: ["logos"],
      slug: "project-01",
    },
    {
      id: 2,
      title: "project 02",
      thumbnail: "https://picsum.photos/900/300/?random",
      images: [
        "https://picsum.photos/900/300/?random",
        "https://picsum.photos/900/300/?random",
      ],
      desc: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
      tags: ["website designs"],
      slug: "project-02",
    },
    {
      id: 1,
      title: "project 03",
      thumbnail: "https://picsum.photos/900/300/?random",
      images: [
        "https://picsum.photos/900/300/?random",
        "https://picsum.photos/900/300/?random",
      ],
      desc: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
      tags: ["Print"],
      slug: "project-03",
    },
  ];

  return (
    <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
      <div className="py-28 container mx-auto flex flex-col gap-10">
        <div className="text-left">
          <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">
            Recent Work
          </p>
          <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">
            Here are a few past design projects I've worked on
          </h2>
          <p>
            I have created stunning website designs, eye-catching logos, and
            effective marketing materials for various clients. I'm experienced
            in designing for both print and digital media.
          </p>
        </div>
        <div className="box-border max-w-7xl sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
          {projectsArr.map((e, i) => {
            return <ProjectCard key={i} img={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
