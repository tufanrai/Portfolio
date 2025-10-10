import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Note Taking App",
  description:
    "mern stack project, full stack project, how to buil simple note taking app, next js project, note taking app, note taking app-mern, note taking app using mern stack, note taking web app github, mern stack notes app, simple note taking app github",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default layout;
