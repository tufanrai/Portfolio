import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tufan Rai | MERN stack developer",
  description:
    "frontend developer from nepal, backend developer from nepal, MERN stack developer in Nepal, website developer",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default layout;
