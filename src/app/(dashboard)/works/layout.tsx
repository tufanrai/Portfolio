import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | minimal and web responsive projects",
  description:
    "fully functioning website designs, full stack development, web responsive, web designs, Website templates, projects for full stack developers, web development project ideas,",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default layout;
