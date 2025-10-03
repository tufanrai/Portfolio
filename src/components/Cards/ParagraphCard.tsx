import React from "react";

interface IProps {
  paragraph: string;
}
const ParagraphCard = ({ paragraph }: IProps) => {
  return (
    <>
      <p className="font-medium text-md text-neutral-300 p-1">{paragraph}</p>
    </>
  );
};

export default ParagraphCard;
