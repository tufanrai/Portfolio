import React, { FC } from "react";
import { RiHome4Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuTableProperties } from "react-icons/lu";
import { GiBlackBook } from "react-icons/gi";
import Link from "next/link";

const HeaderComponent: FC = () => {
  return (
    <>
      <ul className="flex justify-center items-center gap-1 max-w-90 rounded-full text-black bg-white/5 p-1 backdrop-blur-lg border border-white/35 text-white">
        <Link href={"/"}>
          <li className="cursor-pointer font-thin text-md px-2 py-2 mr-4 ml-2 hover:bg-white/15 hover:backdrop-blur-lg rounded-full ease duration-200">
            <RiHome4Line />
          </li>
        </Link>
        <li>|</li>
        <Link href={"/aboutme"}>
          <li className="cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full hover:bg-white/15 hover:backdrop-blur-lg ease duration-200">
            <FaRegCircleUser className="font-bold" /> me
          </li>
        </Link>
        <Link href={"/works"}>
          <li className="cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full hover:bg-white/15 hover:backdrop-blur-lg ease duration-200">
            <LuTableProperties className="font-thin" /> works
          </li>
        </Link>
        <Link href={"/blogs"}>
          <li className="cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full hover:bg-white/15 hover:backdrop-blur-lg ease duration-200">
            <GiBlackBook /> blogs
          </li>
        </Link>
      </ul>
    </>
  );
};

export default HeaderComponent;
