"use client";
import HeaderComponent from "@/src/components/header/HeaderComponent";
import React, { ReactNode, useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { DayContext } from "@/src/utils/Providor/Context";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  // Initialize with dark mode by default
  const [Day, setDay] = useState(false); // false = dark mode

  useEffect(() => {
    // Check for saved preference in localStorage
    const savedPreference = localStorage.getItem("colorScheme");

    if (savedPreference) {
      setDay(savedPreference === "light");
    } else {
      // Default to dark mode if no preference is saved
      setDay(false);
      // Optionally set the prefers-color-scheme media query
      document.documentElement.classList.add("dark");
    }
  }, []);

  const ChangeDay = () => {
    const newMode = !Day;
    setDay(newMode);

    // Save preference to localStorage
    localStorage.setItem("colorScheme", newMode ? "light" : "dark");

    // Update class on html element
    if (newMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`w-full h-screen flex justify-center ${
        Day
          ? "bg-white text-black light-mode"
          : "bg-linear-15 from-black/25 to-indigo-700/65 dark-mode"
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
              {Day ? <IoMoonOutline className="text-white" /> : <RxSun />}
            </div>
          </div>
          <div
            className="h-[100%] w-full overflow-y-auto [&::-webkit-scrollbar]:w-[1px]
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:w-0 pb-10"
          >
            {children}
          </div>
        </div>
      </DayContext.Provider>
    </div>
  );
};

export default layout;
