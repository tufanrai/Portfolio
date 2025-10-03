import React from "react";
import ParagraphCard from "./ParagraphCard";

interface IList {
  contents?: string[];
}

const ListCard = ({ contents }: IList) => {
  return (
    <div className="w-full px-8">
      <ul className="w-full flex flex-col items-start justify-start list-disc">
        {contents &&
          contents.map((value, index) => (
            <li key={index}>
              <ParagraphCard paragraph={value} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListCard;
