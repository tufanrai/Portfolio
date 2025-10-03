"use client";
import React, { useEffect, useState } from "react";

interface IHeadings {
  content: string;
  headerType: "prime" | "sec" | "tri";
}

const Header = ({ content, headerType }: IHeadings) => {
  const [values, setValues] = useState<null | IHeadings>(null);

  useEffect(() => {
    setValues({ content, headerType });
  }, []);
  return (
    <>
      {headerType && headerType == "prime" ? (
        <h1 className="w-full text-center font-bold text-xl text-neutral-200">
          {values?.content}
        </h1>
      ) : headerType == "sec" ? (
        <h2 className="w-full font-bold text-xl text-neutral-200">
          {values?.content}
        </h2>
      ) : (
        <h4 className="w-full font-bold text-xl text-neutral-200 pl-4">
          {values?.content}
        </h4>
      )}
    </>
  );
};

export default Header;
