"use client";
import HeaderComponent from "@/src/components/header/HeaderComponent";
import React, { ReactNode, useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { DayContext } from "@/src/utils/Providor/Context";

// const isDarkMode = (): boolean => {
//   return (
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   );
// };

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [Day, setDay] = useState(false);
  const ChangeDay = () => {
    setDay(!Day);
  };

  return (
    <div
      className={`w-full h-screen flex justify-center ${
        Day && Day
          ? "bg-white text-black"
          : "bg-linear-15 from-black/25 to-indigo-700/65"
      }`}
    >
      <DayContext.Provider value={Day}>
        <div className="md:max-w-[800px] w-full flex flex-col relative">
          <div className="relative left-[-1000] sm:left-0 w-full py-4 flex justify-center items-center gap-5 sticky top-0 z-50">
            <HeaderComponent />
            <div
              onClick={ChangeDay}
              className="w-8 h-8 rounded-full px-2 py-1 bg-black/45 cursor-pointer flex items-center justify-center"
            >
              {" "}
              {Day && Day ? (
                <IoMoonOutline className="text-white" />
              ) : (
                <RxSun />
              )}
            </div>
          </div>
          <div
            className="h-[100%] w-full overflow-y-auto [&::-webkit-scrollbar]:w-[1px]
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:w-0"
          >
            {children}
          </div>
        </div>
      </DayContext.Provider>
    </div>
  );
};

export default layout;
