import { HeadingProps } from "@/types";
import React from "react";

export const Heading: React.FC<HeadingProps> = ({
  titleBlack,
  titleBlue,
  desc,
  className = "",
  breakLine = false,
  leftAlign = false,
}) => {
  return (
    <div className={`${leftAlign ? "text-left" : "text-center"} ${className}`}>
      <h1 className="heading">
        {titleBlack && <span>{titleBlack}</span>}
        {titleBlue && (
          <span
            className={breakLine ? "block text-primary" : "text-primary ml-2"}
          >
            {titleBlue}
          </span>
        )}
      </h1>
      {desc && <p className="mt-2 text-base opacity-70">{desc}</p>}
    </div>
  );
};
