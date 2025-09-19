"use client";
import React, { useContext } from "react";
import { Blogs } from "@/src/utils/BlogContent";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { DayContext } from "@/src/utils/Providor/Context";

const BlogPage = () => {
  const id = localStorage.getItem("id");
  const obj = Blogs.at(Number(id));
  const Day = useContext(DayContext);
  return (
    <div className="w-full px-8 py-4 flex flex-col items-start justify-center gap-2">
      <Link href={"/blogs"}>
        <span
          className={`font-black text-xl cursor-pointer ${
            Day && Day ? "text-black" : "text-white"
          }`}
        >
          <IoIosArrowRoundBack />
        </span>
      </Link>
      <h1
        className={`font-semibold text-lg ${
          Day && Day ? "text-black" : "text-white"
        }`}
      >
        {obj?.Title}
      </h1>
      <h3
        className={`font-light text-sm ${
          Day && Day ? "text-black" : "text-white"
        }`}
      >
        {obj?.sub_title}
      </h3>
      {obj?.paragraph.map((value, index) => (
        <p
          key={index}
          className={`font-light text-sm mb-8 ${
            Day && Day ? "text-black" : "text-white"
          }`}
        >
          {value}
        </p>
      ))}
    </div>
  );
};

export default BlogPage;
