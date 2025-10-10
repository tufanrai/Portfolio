"use client";
import React, { useContext } from "react";
import { Hero } from "@/src/utils/contents";
import profile from "@/src/public/profile.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ScrollVelocity from "@/animation/ScrollVelocity/ScrollVelocity";
import Link from "next/link";
import { DayContext } from "@/src/utils/Providor/Context";
import { Work } from "@/src/utils/WorkContent";
import { useRouter } from "next/navigation";
import BlogListCard from "../Cards/BlogListCard";

const HeroPage = () => {
  const router = useRouter();

  const directUser = (id: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("id", id.toString());
    }
    console.log(id);
    router.replace(`/blogs/${id.toString()}`);
  };

  console.log(Work, Work.length);

  const Day = useContext(DayContext);
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 px-8">
      <div className="w-full mb-8 sm:max-h-60 sm:h-screen sm:flex items-center justify-center">
        {/* banner */}
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
                  className={`font-light text-sm w-full cursor-pointer ${
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
                  className={`font-light text-sm w-full cursor-pointer ${
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

      {/* Skills and tools  */}
      <hr className="w-full h-[1px] border-neutral-400" />
      <div className="w-full overflow-hidden py-8">
        <h2
          className={`${
            Day && Day ? "text-black" : "text-white"
          } font-light text-lg mb-8`}
        >
          Skills/Tools
        </h2>
        <ScrollVelocity
          texts={["Node.js Express.js MongoDB", "Next.js GitHub VScode"]}
          velocity={20}
          damping={1000}
          numCopies={6}
          className="font-light text-md text-neutral-300"
        />
      </div>
      {/* recent works */}
      <hr className="w-full h-[1px] border-neutral-400" />
      <div className="w-full overflow-hidden py-8">
        <h2
          className={`${
            Day && Day ? "text-black" : "text-white"
          } font-light text-lg mb-8`}
        >
          Recent Works
        </h2>
        <div className="w-full flex flex-wrap items-start justify-center sm:justify-start gap-1">
          {Work.slice(0, 3).map((work, index) => (
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
      {/* recent blogs */}
      <hr className="w-full h-[1px] border-neutral-400" />
      <div className=" w-full flex flex-wrap overflow-x-hidden overflow-y-auto gap-4">
        <BlogListCard
          link="blogs/auth_form"
          date="2025-10-03"
          title="Simple login/registration form using MERN Stack"
          description="This blog teaches you how to build a very super simple login and registration form using MERN Stack web application development."
        />
        <BlogListCard
          link="blogs/note-taking-app"
          date="2025-10-13"
          title="Simple Note Taking App - MERN"
          description="This blog walks you through the entire process of building a simple note taking app."
        />
      </div>
    </div>
  );
};

export default HeroPage;
