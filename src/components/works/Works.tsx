"use client";
import React, { useContext } from "react";
import { Work } from "@/src/utils/contents";
import Link from "next/link";
import { DayContext } from "@/src/utils/Providor/Context";

const Works = () => {
  const Day = useContext(DayContext);
  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <div className="px-8 py-4">
        <h1 className="font-bold text-lg">Work/Project</h1>
      </div>
      <div className="px-8 py-4 w-full h-screen flex items-start justify-start gap-2 overflow-hidden flex-wrap">
        {Work.map((work, index) => (
          <div
            className="sm:w-65 sm:h-135 rounded-lg border overflow-hidden"
            key={index}
          >
            <div className="w-full h-[50%] bg-white overflow-hidden cursor-pointer hover:scale-110 ease duration-300">
              <img
                src={`${work.img}`}
                className="object-cover w-full object-center"
                alt=""
              />
            </div>
            <div className="py-4 px-2 flex flex-col items-start justify-center gap-1">
              <h1 className="text-lg">{work.title}</h1>
              <p className="text-sm text-neutral-400">{work.description}</p>
              <div className="w-full flex flex-wrap items-center justify-start gap-1 py-2">
                {work.languages.map((language, index) => (
                  <span
                    key={index}
                    className="font-light text-neutral-400 text-sm px-5 py-1 bg-gray-800 rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>
              <Link
                href={work.link}
                className={`font-light text-sm ${
                  Day && Day
                    ? "text-black/45 hover:text-black"
                    : "text-white/45 hover:text-white"
                } sm:text-neutral-500 underline ease duration-300 sm:hover:text-neutral-300`}
              >
                {work.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
