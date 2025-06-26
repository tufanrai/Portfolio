import HeaderComponent from "@/src/components/header/HeaderComponent";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full h-screen flex justify-center bg-linear-15 from-black/25 to-indigo-700/65 ">
      <div className="md:max-w-[800px] w-full flex flex-col relative">
        <div className="relative left-[-1000] sm:left-0 w-full py-4 flex justify-center sticky top-0">
          <HeaderComponent />
        </div>
        <div className="h-[100%] w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default layout;
