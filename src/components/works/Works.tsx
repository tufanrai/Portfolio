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
        <h1
          className={`font-bold text-lg ${
            Day && Day ? "text-black" : "text-white"
          }`}
        >
          Work/Project
        </h1>
      </div>
      <div className="px-8 py-4 w-full h-screen flex flex-wrap items-start justify-start gap-2 overflow-hidden">
        {Work.map((work, index) => (
          <Link key={index} href={work.link}>
            <div
              className={`w-58 h-90 rounded-lg overflow-hidden ${
                Day && Day
                  ? "border-black bg-neutral-100 shadow-md/30 shadow-stone-800"
                  : "border-white bg-stone-400/50 shadow-md/30 shadow-stone-100"
              }`}
            >
              <div className="w-full bg-blue-500 overflow-hidden">
                <img
                  src={`${work.img}`}
                  className="object-cover"
                  width={"100%"}
                  alt=""
                />
              </div>
              <div className="py-4 px-2 flex flex-col items-start justify-center">
                <h1
                  className={`font-medium text-lg ${
                    Day && Day ? "text-stone-800" : "text-neutral-100"
                  }`}
                >
                  {work.title}
                </h1>
                <p className="font-normal text-sm text-neutral-400">
                  {work.description}
                </p>
                <div className="w-full flex flex-wrap items-center justify-start gap-1 py-2">
                  {work.languages.map((language, index) => (
                    <span
                      key={index}
                      className="font-light text-neutral-400 text-xs px-5 py-1 bg-gray-800 rounded-md"
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
