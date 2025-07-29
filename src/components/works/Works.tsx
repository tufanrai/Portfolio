"use client";
import React, { useContext } from "react";
import { Work } from "@/src/utils/WorkContent";
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
          <Link key={index} href={work.link}>
            <div className="sm:w-65 sm:h-100 rounded-lg border overflow-hidden">
              <div className="w-full max-h-40 h-screen bg-white overflow-hidden cursor-pointer hover:scale-110 ease duration-300">
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
