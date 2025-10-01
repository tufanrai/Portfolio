import React from "react";

interface IProps {
  code: string;
  codeType: string;
}

const CodeCard = (props: IProps) => {
  const code = props.code;
  const codeType = props.codeType;
  return (
    <pre className={`w-full px-8 py-2 bg-neutral-600`}>
      <code className="w-full">{code}</code>
    </pre>
  );
};

export default CodeCard;
