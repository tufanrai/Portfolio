"use client";
import React, { FC, useContext } from "react";
import { RiHome4Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuTableProperties } from "react-icons/lu";
import { GiBlackBook } from "react-icons/gi";
import Link from "next/link";
import { DayContext } from "../../app/(dashboard)/layout";

const HeaderComponent: FC = () => {
  const Day = useContext(DayContext);
  return (
    <>
      <ul
        className={`flex justify-center items-center gap-1 max-w-120 rounded-full text-black p-1 backdrop-blur-lg border ${
          Day && Day
            ? "border-black/35 bg-black/5"
            : "border-white/35 bg-white/5"
        } text-white`}
      >
        <Link href={"/"}>
          <li
            className={`cursor-pointer font-thin text-md px-2 py-2 mr-4 ml-2 ${
              Day && Day ? "hover:bg-black/15 ho" : "hover:bg-white/15"
            }ver:backdrop-blur-lg rounded-full ease duration-200 ${
              Day && Day ? "text-black" : "text-white"
            }`}
          >
            <RiHome4Line />
          </li>
        </Link>
        <li className={`${Day && Day ? "text-black" : "text-white"}`}>|</li>
        <Link href={"/aboutme"}>
          <li
            className={`cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full ${
              Day && Day ? "hover:bg-black/15" : "hover:bg-black/white5"
            } hover:backdrop-blur-lg ease duration-200 ${
              Day && Day ? "text-black" : "text-white"
            }`}
          >
            <FaRegCircleUser className="font-bold" /> me
          </li>
        </Link>
        <Link href={"/works"}>
          <li
            className={`cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full ${
              Day && Day ? "hover:bg-black/15" : "hover:bg-black/white5"
            } hover:backdrop-blur-lg ease duration-200 ${
              Day && Day ? "text-black" : "text-white"
            }`}
          >
            <LuTableProperties className="font-thin" /> works
          </li>
        </Link>
        <Link href={"/blogs"}>
          <li
            className={`cursor-pointer font-thin text-sm px-2 py-1 flex items-center justify-center gap-1 rounded-full ${
              Day && Day ? "hover:bg-black/15" : "hover:bg-black/white5"
            } hover:backdrop-blur-lg ease duration-200 ${
              Day && Day ? "text-black" : "text-white"
            }`}
          >
            <GiBlackBook /> blogs
          </li>
        </Link>
      </ul>
    </>
  );
};

export default HeaderComponent;
