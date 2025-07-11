"use client";
import React from "react";
import { Blogs } from "@/src/utils/contents";

const BlogPage = () => {
  const id = localStorage.getItem("id");
  console.log(`This is id: ${id}`);
  const obj = Blogs.at(Number(id));

  return (
    <div className="w-full px-8 py-4 flex flex-col items-start justify-center gap-2">
      <h1 className="font-semibold text-lg">{obj?.Title}</h1>
      <h3 className="font-light text-sm">{obj?.sub_title}</h3>
      <p className="font-light text-sm">{obj?.paragraph}</p>
    </div>
  );
};

export default BlogPage;
