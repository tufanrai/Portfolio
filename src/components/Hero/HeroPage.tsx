"use client";
import React, { useContext } from "react";
import { Hero } from "@/src/utils/contents";
import profile from "@/src/public/profile.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ScrollVelocity from "@/animation/ScrollVelocity/ScrollVelocity";
import Link from "next/link";
import { DayContext } from "@/src/utils/Providor/Context";

const HeroPage = () => {
  const Day = useContext(DayContext);
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 px-8">
      <div className="w-full mb-8 sm:max-h-60 sm:h-screen sm:flex items-center justify-center">
        <div className="sm:w-40 w-full flex sm:flex-col sm:items-start items-end justify-start sm:justify-center sm:gap-3 gap-4 mb-3">
          <div
            style={{ backgroundImage: `url(${profile.src})` }}
            className="w-25 h-25 sm:rounded-l-lg rounded-lg overflow-hidden"
          >
            <img
              src={profile.src}
              width={100}
              className="ease duration-300 sm:scale-115 sm:hover:scale-125 cursor-pointer"
            />
          </div>
          <div className="w-20">
            <ul className="w-full flex flex-col gap-1">
              <Link href={Hero.media1}>
                <li
                  className={`font-thin text-xs w-full cursor-pointer ${
                    Day && Day
                      ? "text-black/55 hover:text-black"
                      : "text-neutral-400 hover:text-neutral-200"
                  } ease duration-200 flex items-center justify-start gap-1`}
                >
                  <FaGithub />
                  GitHub
                </li>
              </Link>
              <Link href={Hero.media2}>
                <li
                  className={`font-thin text-xs w-full cursor-pointer ${
                    Day && Day
                      ? "text-black/55 hover:text-black"
                      : "text-neutral-400 hover:text-neutral-200"
                  } ease duration-200 flex items-center justify-start gap-1`}
                >
                  <FaInstagram />
                  instagram
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-100 flex flex-col gap-2">
          <h2
            className={`font-semibold text-lg ${
              Day && Day ? "text-black" : "text-neutral-200"
            } flex items-center gap-1`}
          >
            {Hero.Title}
          </h2>
          <h4
            className={`font-thin text-md ${
              Day && Day ? "text-black" : "text-neutral-300"
            }`}
          >
            {Hero.subTitle}
          </h4>
          <p
            className={`font-light text-sm ${
              Day && Day ? "text-black" : "text-neutral-300"
            }`}
          >
            {Hero.paragraph}
          </p>
        </div>
      </div>
      <hr className="w-full h-[1px] border-neutral-400" />
      <div className="w-full overflow-hidden py-8">
        <h2 className="font-light text-lg mb-8">Skills/Tools</h2>
        <ScrollVelocity
          texts={["Node.js Express.js MongoDB", "Next.js GitHub VScode"]}
          velocity={20}
          damping={1000}
          numCopies={6}
          className="font-light text-md text-neutral-300"
        />
      </div>
    </div>
  );
};

export default HeroPage;
