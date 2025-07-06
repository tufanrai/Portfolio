"use client";
import React from "react";
import { Hero } from "@/src/utils/contents";
import profile from "@/src/public/profile.jpg";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ScrollVelocity from "@/animation/ScrollVelocity/ScrollVelocity";

const page = () => {
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
              <li className="font-thin text-xs w-full cursor-pointer text-neutral-400 hover:text-neutral-200 ease duration-200 flex items-center justify-start gap-1">
                <FaGithub />
                GitHub
              </li>
              <li className="font-thin text-xs w-full cursor-pointer text-neutral-400 hover:text-neutral-200 ease duration-200 flex items-center justify-start gap-1">
                <FaInstagram />
                instagram
              </li>
              <li className="font-thin text-xs w-full cursor-pointer text-neutral-400 hover:text-neutral-200 ease duration-200 flex items-center justify-start gap-1">
                <CgMail />
                G-mail
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 flex flex-col gap-2">
          <h2 className="font-semibold text-lg text-neutral-200 flex items-center gap-1">
            {Hero.Title}
          </h2>
          <h4 className="font-thin text-md text-neutral-300">
            {Hero.subTitle}
          </h4>
          <p className="font-light text-sm text-neutral-400">
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
      <hr className="w-full h-[1px] border-neutral-400" />
      <div>This is the section where my latest project will go.</div>
    </div>
  );
};

export default page;
