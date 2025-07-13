"use client";
import Particles from "@/animation/Particles/Particles";
import profile from "@/src/public/profile.jpg";
import Link from "next/link";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AbtMe } from "@/src/utils/contents";
import { DayContext } from "@/src/utils/Providor/Context";

function AboutMe() {
  const Day = useContext(DayContext);
  return (
    <div className="w-full h-screen flex items-start justify-center">
      <div className=" w-full h-full fixed sm:scale-110 sm:left-25">
        {Day && Day ? (
          <Particles
            moveParticlesOnHover
            alphaParticles
            className={`w-full h-screen `}
            particleColors={["#000000"]}
          />
        ) : (
          <Particles
            moveParticlesOnHover
            alphaParticles
            className={`w-full h-screen `}
            particleColors={["#ffffff"]}
          />
        )}
      </div>
      <div
        className={`sm:mt-20 rounded-md backdrop-blur-sm ${
          Day && Day ? "text-black" : "text-white"
        } px-8 py-4 font-thin flex flex-col-reverse sm:flex-row items-start justify-center sm:flex-row sm:items-center sm:justify-center sm:gap-8 gap-4`}
      >
        <div className=" w-full">
          <h2 className="font-semibold text-lg">About me!</h2>
          <p className="font-light text-sm">{AbtMe.head}</p>
          <br />
          <p className="font-light text-sm">{AbtMe.body}</p>
          <br />
          <p className="font-light text-sm">{AbtMe.foot}</p>
          <div className="w-full mt-4">
            <ul className="flex items-center justify-start gap-1">
              <Link href={AbtMe.media1}>
                <li
                  className={`font-thin text-lg px-2 py-1 cursor-pointer ease duration-200 ${
                    Day && Day
                      ? "text-black/25 hover:text-black"
                      : "text-white/25 hover:text-white"
                  } hover:scale-110`}
                >
                  <FaGithub />
                </li>
              </Link>
              <Link href={AbtMe.media2}>
                <li
                  className={`font-thin text-lg px-2 py-1 cursor-pointer ease duration-200 ${
                    Day && Day
                      ? "text-black/25 hover:text-black"
                      : "text-white/25 hover:text-white"
                  } hover:scale-110`}
                >
                  <FaInstagram />
                </li>
              </Link>
              <Link href={AbtMe.media3}>
                <li
                  className={`font-thin text-lg px-2 py-1 cursor-pointer ease duration-200 ${
                    Day && Day
                      ? "text-black/25 hover:text-black"
                      : "text-white/25 hover:text-white"
                  } hover:scale-110`}
                >
                  <FaLinkedin />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-45 max-w-45 max-h-45 h-screen rounded-md overflow-hidden">
          <img
            src={profile.src}
            className=" object-center scale-110 hover:scale-120 ease duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
