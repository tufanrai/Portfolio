import Particles from "@/animation/Particles/Particles";
import profile from "@/src/public/profile.jpg";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AbtMe } from "@/src/utils/contents";

const AboutMe = () => {
  return (
    <div className="w-full h-screen flex items-start justify-center">
      <div className=" w-full h-full fixed sm:scale-110 sm:left-25">
        <Particles
          moveParticlesOnHover
          alphaParticles
          className="w-full h-screen"
        />
      </div>
      <div className="sm:mt-20 rounded-md text-white backdrop-blur-sm px-8 py-4 font-thin flex flex-col-reverse sm:flex-row items-start justify-center sm:flex-row sm:items-center sm:justify-center sm:gap-2 gap-4">
        <div>
          <h2 className="font-semibold text-lg">About me!</h2>
          <p className="font-thin text-sm text-neutral-300">{AbtMe.head}</p>
          <br />
          <p className="font-thin text-sm text-neutral-300">{AbtMe.body}</p>
          <div className="w-full mt-4">
            <ul className="flex items-center justify-start gap-1">
              <Link href={AbtMe.media1}>
                <li className="font-thin text-lg text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100 hover:scale-110">
                  <FaGithub />
                </li>
              </Link>
              <Link href={AbtMe.media2}>
                <li className="font-thin text-lg text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100 hover:scale-110">
                  <FaInstagram />
                </li>
              </Link>
              <Link href={AbtMe.media3}>
                <li className="font-thin text-lg text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100 hover:scale-110">
                  <FaLinkedin />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-45 max-h-45 w-full h-screen rounded-md overflow-hidden">
          <img
            src={profile.src}
            className=" object-center scale-110 hover:scale-120 ease duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
