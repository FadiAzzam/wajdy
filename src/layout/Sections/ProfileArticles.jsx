import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiEarthAmerica } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import blogPosts from "../../constants/blogPosts";

const ProfileArticles = ({ post }) => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 flex-auto">
      {blogPosts.map((post) => {
        return (
          <div
            className="drop-shadow-2xl backdrop-blur grid grid-rows-auto/1fr grid-cols-auto/1fr/1fr gap-4  word-break-word  p-3 bg-gray-700/20 rounded-lg"
            key={Math.random() * post.id}
          >
            <div className=" row-span-2">
              <img
                className="w-14 h-14 rounded-full object-cover object-center  border-gray-700 border"
                src={require("../../assets/imgs/wajdy.jpeg")}
                alt=""
              />
            </div>

            <div className="col-span-2 pt-2 flex justify-between">
              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-white leading-none">{post.author}</h1>
                <div className="flex justify-center items-start gap-1">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <GiEarthAmerica className=" text-sm text-gray-400" />
                </div>
              </div>
              <div>
                <span
                  className="rounded-full border border-indigo-400 px-5 text-indigo-400 text-xs py-1 text-center cursor-pointer hover:border-r-8 transition-all "
                  // onClick={() => navigate(`/blog/category/${post.category}`)}
                >
                  {post.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 col-span-2 ">
              <div className="space-y-2 pb-3 ">
                <h3 className="text-lg font-semibold group-hover:underline group-focus:underline">
                  {post.title}
                </h3>
              </div>
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </div>

                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </div>
              </div>

              <div>
                <span
                  className="rounded-full text-indigo-400 text-sm py-1 px-2 text-center flex gap-1 items-center cursor-pointer "
                  // onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <span>Read more</span>
                  <FiArrowUpRight className="" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileArticles;
