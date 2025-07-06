import Particles from "@/animation/Particles/Particles";
import profile from "@/src/public/profile.jpg";
import Link from "next/link";
import React from "react";

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
          <p className="font-thin text-sm text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            optio hic impedit. Est dolore ut temporibus similique qui nihil quas
            aliquid mollitia nobis, autem consectetur placeat animi ullam soluta
            iusto.
          </p>
          <p className="font-thin text-sm text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            optio hic impedit. Est dolore ut temporibus similique qui nihil quas
            aliquid mollitia nobis, autem consectetur placeat animi ullam soluta
            iusto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Obcaecati nihil saepe recusandae eaque consectetur, soluta modi,
            eligendi aliquid explicabo aliquam possimus animi eum iure facere et
            sint perferendis enim dicta.
          </p>
          <div className="w-full mt-4">
            <ul className="flex items-center justify-start gap-1">
              <Link href={"/"}>
                <li className="font-thin text-xs text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100">
                  Github
                </li>
              </Link>
              <Link href={"/"}>
                <li className="font-thin text-xs text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100">
                  instagram
                </li>
              </Link>
              <Link href={"/"}>
                <li className="font-thin text-xs text-neutral-200 px-2 py-1 cursor-pointer ease duration-200 hover:text-neutral-100">
                  Mail
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
