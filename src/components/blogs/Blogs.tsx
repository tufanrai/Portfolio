"use client";
import React from "react";
import { Blogs } from "@/src/utils/contents";
import { IBlog } from "@/src/utils/contents";
import { useRouter } from "next/navigation";

console.log(Blogs);

const Works = () => {
  const router = useRouter();

  const directUser = (id: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("id", id.toString());
    }
    console.log(id);
    router.replace(`/blogs/${id.toString()}`);
  };
  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <div className="px-8 py-4">
        <h1 className="font-bold text-lg">Blog</h1>
      </div>
      <div className="px-8 py-4 w-full">
        {Blogs.map((blog: IBlog, index) => (
          <div
            onClick={() => directUser(index)}
            key={index}
            className="flex flex-col border-b w-full py-4 px-2 gap-1 cursor-pointer"
          >
            <div className="w-full flex items-center justify-between">
              <h1>{blog.Title}</h1>
              <span className="text-xs font-light text-nwutral-500">
                {blog.Date}
              </span>
            </div>
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
