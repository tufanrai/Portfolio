"use client";
import React from "react";
import { Blogs } from "@/src/utils/contents";
import { IBlog } from "@/src/utils/contents";

console.log(Blogs);

const Works = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <div className="px-8 py-4">
        <h1 className="font-bold text-lg">Blog</h1>
      </div>
      <div className="px-8 py-4 w-full">
        {Blogs.map((blog: IBlog) => (
          <div className="flex flex-col border-b w-full py-4 px-2 gap-1 cursor-pointer">
            <h1>{blog.Title}</h1>
            <h2 className="font-light text-sm text-neutral-500">
              {blog.sub_title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
