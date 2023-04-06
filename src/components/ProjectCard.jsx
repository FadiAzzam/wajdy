import React from "react";

function ProjectCard({ img }) {
  return (
    <div className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border shadow-md cursor-pointer">
      <h2 className="text-2xl font-extrabold dark:text-white break-words pb-3">
        {img.title}
      </h2>
      <img src={img.thumbnail} width="100%" alt={img.title} />
      <p className="py-4 dark:text-slate-200 text-justify">{img.desc}</p>
      <div className="py-4">
        <div className="flex gap-1 mb-1 flex-wrap">
          {img.tags.map((tag, i) => {
            return (
              <p
                key={i}
                className="flex rounded-tl-lg border rounded-lg shadow-sm p-2 bg-blue-200 hover:bg-blue-300 cursor-pointer"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
