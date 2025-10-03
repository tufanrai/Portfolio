'use client'
import { DayContext } from "@/src/utils/Providor/Context";
import React, { useContext } from "react";

interface IProps {
  paragraph: string;
}
const ParagraphCard = ({ paragraph }: IProps) => {
  const Day = useContext(DayContext)
  return (
    <>
      <p className={`font-medium text-md ${Day && Day? 'text-black' : 'text-neutral-200'} p-1`}>{paragraph}</p>
    </>
  );
};

export default ParagraphCard;
