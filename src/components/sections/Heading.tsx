import React from "react";
import { HeadingProps } from "@/types";

interface ExtendedHeadingProps extends HeadingProps {
  hideLeftIcon?: boolean;
  hideRightIcon?: boolean;
  hideBgSvg?: boolean;
  align?: "center" | "left"; 
  largeSubtitle?: boolean;
  smallTitle?: boolean; 
  bgSvgSize?: "small"; 
}

export const Heading: React.FC<ExtendedHeadingProps> = ({
  titleBlack,
  titleBlue,
  subTitle,
  className,
  hideBgSvg = false,
  align = "center",
  largeSubtitle = false,
  smallTitle = false,
  bgSvgSize = "",
}) => {
  const getBgSvgHeight = () => {
    switch (bgSvgSize) {
      case "small":
        return "h-16";
      default:
        return "h-24";
    }
  };

  return (
    <div
      className={`relative flex flex-col ${
        align === "center" ? "items-center" : "items-start"
      } ${className || ""}`}
    >
      {!hideBgSvg && (
        <img
          src="/icons/kangaroo.svg"
          alt="Watermark"
          className={`absolute ${getBgSvgHeight()} top-1/3 -translate-y-1/2 object-contain z-0
            ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0 translate-x-0"}`}
        />
      )}

      <div
        className={`flex items-center gap-3 sm:gap-4 relative z-10 ${
          align === "center" ? "justify-center" : "justify-start w-full"
        }`}
      >
        <h2
          className={`font-bold ${
            smallTitle
              ? "text-xl sm:text-2xl"
              : "text-2xl sm:text-4xl"
          } ${align === "center" ? "text-center" : "text-left"}`}
        >
          <span className="text-black">{titleBlack} </span>
          <span className="text-secondary-blue">{titleBlue}</span>
        </h2>
      </div>

      <p
        className={`mt-1 sm:mt-2 text-gray-900 xl:w-2/3 px-4 ${
          largeSubtitle ? "text-md sm:text-xl font-semibold" : "text-xs sm:text-base"
        } relative z-10 ${align === "center" ? "text-center" : "text-left"}
        ${
            smallTitle
              ? ""
              : ""
          } `}
      >
        {subTitle}
      </p>
    </div>
  );
};
